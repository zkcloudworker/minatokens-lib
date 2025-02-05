import {
  AccountUpdate,
  Bool,
  DeployArgs,
  method,
  Permissions,
  Provable,
  PublicKey,
  TokenContract,
  State,
  state,
  UInt64,
  VerificationKey,
  Field,
  Struct,
  AccountUpdateForest,
  Int64,
  UInt32,
  fetchAccount,
  Mina,
} from "o1js";
import {
  FungibleTokenAdminBase,
  FungibleTokenContract,
} from "@minatokens/token";

/**
 * Default bonding curve:
 * Initial price: 1 MINA per 100,000 tokens (0.00001 MINA per token), or 10_000 / 10 ** 9
 * Curve K: 1 MINA per 100,000 tokens (0.00001 MINA per token), or 10_000 / 10 ** 9 MINA
 * Owner fee: 10% in 0.001 % units(10 * 1000 = 10_000)
 * Price formula: price = startPrice + curveK * totalSupply
 * Example:
 * If supply is 200,000 tokens, price = 1 MINA + 1 MINA * 200_000 / 100_000 = 3 MINA per 100,000 tokens
 * or per token in MINA/1e9
 * 10000 + 10000 * 200_000 / 100_000 = 30000 per token,
 * or 30_000 * 100_000 = 3_000_000_000, or 3 MINA per 100,000 tokens
 *
 * To calculate the max supply for the given price for 100,000 tokens:
 * price = startPrice + curveK * totalSupply
 * price - startPrice = curveK * totalSupply
 * (price - startPrice) / curveK = totalSupply
 * (3 MINA - 1 MINA) / 1 MINA = 2 * 100_000 = 200_000 tokens
 * (30_000 - 10_000) / 10_000 = 2 * 100_000 = 200_000 tokens
 * or, in 1e9 units:
 * (30_000 - 10_000) * 1e9 * 100_000 / 10_000 = 200_000_000_000_000, or to avoid overflow,
 * (30_000 - 10_000) * 1e9 / 10_000 * 100_000  = 200_000_000_000_000
 */

export class BondingCurveParams extends Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}) {
  pack() {
    return Field.fromBits([
      ...this.startPrice.value.toBits(64),
      ...this.curveK.value.toBits(64),
      ...this.fee.value.toBits(32),
      this.mintingIsAllowed,
    ]);
  }
  static unpack(field: Field): BondingCurveParams {
    const bits = field.toBits(64 + 64 + 32 + 1);
    const startPrice = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 64))
    );
    const curveK = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(64, 64 + 64))
    );
    const fee = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64 + 64, 64 + 64 + 32))
    );
    const mintingIsAllowed = bits[64 + 64 + 32];
    return new BondingCurveParams({
      startPrice,
      curveK,
      fee,
      mintingIsAllowed,
    });
  }
}

export class BondingMintEvent extends Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}) {}

export class BondingRedeemEvent extends Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}) {}

export class BondingCurveAdminInitializeProps extends Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}) {}

export class FungibleTokenBondingCurveAdmin
  extends TokenContract
  implements FungibleTokenAdminBase
{
  @state(PublicKey) owner = State<PublicKey>(PublicKey.empty());
  @state(PublicKey) token = State<PublicKey>(PublicKey.empty());
  @state(PublicKey) feeMaster = State<PublicKey>(PublicKey.empty());
  @state(Field) curve = State<Field>();
  @state(Bool) insideMint = State<Bool>(Bool(false));

  events = {
    mint: BondingMintEvent,
    redeem: BondingRedeemEvent,
  };

  async deploy(props: DeployArgs) {
    await super.deploy(props);
    this.curve.set(
      new BondingCurveParams({
        startPrice: UInt64.from(10_000),
        curveK: UInt64.from(10_000),
        fee: UInt32.from(1000),
        mintingIsAllowed: Bool(false),
      }).pack()
    );
    this.account.permissions.set({
      ...Permissions.default(),
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: Permissions.impossible(),
      send: Permissions.proof(),
    });
  }

  async approveBase(forest: AccountUpdateForest) {
    throw Error("Transfer not allowed");
  }

  @method
  async initialize(props: BondingCurveAdminInitializeProps) {
    const {
      tokenAddress,
      feeMaster,
      startPrice,
      curveK,
      fee,
      launchFee,
      numberOfNewAccounts,
    } = props;
    this.account.provedState.requireEquals(Bool(false));
    this.token.set(tokenAddress);
    this.feeMaster.set(feeMaster);
    this.curve.set(
      new BondingCurveParams({
        startPrice,
        curveK,
        fee,
        mintingIsAllowed: Bool(false),
      }).pack()
    );

    /*
      We cannot constrain the circulating supply of the token,
      as the error Can't transfer to/from the circulation account
      is thrown for ANY AccountUpdate for the circulation tracking account
      so we keep the copy if the circulation amount  here and sync sometimes
      in the case the user burns tokens without calling the redeem method
    */
    const supplyUpdate = AccountUpdate.createSigned(
      this.address,
      this.deriveTokenId()
    );
    let permissions = Permissions.default();
    permissions.send = Permissions.none();
    permissions.setPermissions = Permissions.impossible();
    supplyUpdate.account.permissions.set(permissions);

    const payment = launchFee.add(
      numberOfNewAccounts.mul(UInt64.from(1_000_000_000))
    );
    const owner = this.sender.getUnconstrained();
    const ownerUpdate = AccountUpdate.create(owner);
    ownerUpdate.requireSignature();
    this.owner.set(owner);
    ownerUpdate.body.useFullCommitment = Bool(true);
    ownerUpdate.account.balance.requireBetween(payment, UInt64.MAXINT());
    ownerUpdate.balance.subInPlace(payment);
    const feeUpdate = AccountUpdate.create(feeMaster);
    feeUpdate.balance.addInPlace(launchFee);
  }

  @method async mint(to: PublicKey, amount: UInt64, price: UInt64) {
    this.insideMint.getAndRequireEquals().assertEquals(Bool(false));
    this.insideMint.set(Bool(true));
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);
    const { startPrice, curveK, fee, mintingIsAllowed } =
      BondingCurveParams.unpack(this.curve.getAndRequireEquals());
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = AccountUpdate.create(buyer);
    buyerUpdate.requireSignature();
    buyerUpdate.body.useFullCommitment = Bool(true);
    const owner = this.owner.getAndRequireEquals();
    const isOwner = owner.equals(buyer);
    const canMint = isOwner.or(mintingIsAllowed);
    canMint.assertTrue("Minting is disabled for this token");
    this.curve.set(
      new BondingCurveParams({
        startPrice,
        curveK,
        fee,
        mintingIsAllowed: Bool(true),
      }).pack()
    );

    /*
     * (price - startPrice) / curveK = totalSupply
     * (3 MINA - 1 MINA) / 1 MINA = 2 * 100_000 = 200_000 tokens
     * (30_000 - 10_000) / 10_000 = 2 * 100_000 = 200_000 tokens
     * or, in 1e9 units:
     * (30_000 - 10_000) * 1e9 * 100_000 / 10_000 = 200_000_000_000_000, or to avoid overflow,
     * (30_000 - 10_000) * 1e9 / 10_000 * 100_000  = 200_000_000_000_000
     * (price - startPrice) * 1e9 / curveK * 100_000 = maximumSupply
     * maximumSupply * curveK = (price - startPrice) * 1e14
     * maximumSupply * curveK + startPrice * 1e14 = price * 1e14
     *
     */

    const maximumSupplyField = Provable.witness(Field, () => {
      if (price.toBigInt() < startPrice.toBigInt()) {
        throw Error("Price must be greater than or equal to the start price");
      }
      return Field.from(
        ((price.toBigInt() - startPrice.toBigInt()) * 10n ** 14n) /
          curveK.toBigInt()
      );
    });

    maximumSupplyField
      .mul(curveK.value)
      .add(startPrice.value.mul(Field.from(10 ** 14)))
      .assertLessThanOrEqual(price.value.mul(Field.from(10 ** 14)));

    maximumSupplyField.assertLessThan(UInt64.MAXINT().value);
    const maximumSupply = UInt64.Unsafe.fromField(maximumSupplyField);
    const supplyUpdate = AccountUpdate.create(
      this.address,
      this.deriveTokenId()
    );
    supplyUpdate.account.balance.requireBetween(UInt64.zero, maximumSupply);
    amount.assertLessThanOrEqual(UInt64.from(2n ** 62n));
    supplyUpdate.balanceChange = Int64.fromUnsigned(amount);
    const paymentField = Provable.witness(Field, () => {
      let payment = (price.toBigInt() * amount.toBigInt()) / 10n ** 9n;
      if (payment * 10n ** 9n !== price.toBigInt() * amount.toBigInt()) {
        payment++;
      }
      if (payment * 10n ** 9n < price.toBigInt() * amount.toBigInt()) {
        throw Error("Payment calculation failed");
      }
      return Field.from(payment);
    });
    paymentField
      .mul(Field.from(10 ** 9))
      .assertGreaterThanOrEqual(price.value.mul(amount.value));
    paymentField.assertLessThan(UInt64.MAXINT().value);
    const payment = UInt64.Unsafe.fromField(paymentField);

    const feePaymentField = Provable.witness(Field, () => {
      let feePayment = (payment.toBigInt() * fee.toBigint()) / 100_000n;
      if (feePayment * 100_000n !== payment.toBigInt() * fee.toBigint()) {
        feePayment++;
      }
      if (feePayment * 100_000n < payment.toBigInt() * fee.toBigint()) {
        throw Error("Fee calculation failed");
      }
      return Field.from(feePayment);
    });
    feePaymentField
      .mul(Field.from(100_000))
      .assertGreaterThanOrEqual(payment.value.mul(fee.value));
    feePaymentField.assertLessThan(UInt64.MAXINT().value);
    let feePayment = UInt64.Unsafe.fromField(feePaymentField);
    feePayment = Provable.if(
      feePayment.lessThan(UInt64.from(100_000_000)),
      UInt64.from(100_000_000),
      feePayment
    );

    const tokenUpdate = await token.mint(to, amount);
    const isNew = tokenUpdate.account.isNew.get();
    const totalPayment = payment
      .add(feePayment)
      .add(Provable.if(isNew, UInt64.from(1_000_000_000), UInt64.zero));
    buyerUpdate.account.balance.requireBetween(totalPayment, UInt64.MAXINT());
    buyerUpdate.balance.subInPlace(totalPayment);

    this.balance.addInPlace(payment);
    const feeUpdate = AccountUpdate.create(
      this.feeMaster.getAndRequireEquals()
    );
    feeUpdate.body.useFullCommitment = Bool(true);
    feeUpdate.balance.addInPlace(feePayment);
    this.emitEvent(
      "mint",
      new BondingMintEvent({
        to,
        amount,
        price,
        payment,
        fee: feePayment,
      })
    );
  }

  /*
    In case of other txs being included in the same block, the balance and supply may change.
    We need to ensure that the balance is at least minBalance and the supply is at most maxSupply.
    It is recommended to put 5% buffer for minBalance and 5% buffer for maxSupply for tx to succeed.
  */
  @method async redeem(amount: UInt64, minPrice: UInt64, slippage: UInt32) {
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);

    const balance = await Provable.witnessAsync(UInt64, async () => {
      await fetchAccount({
        publicKey: this.address,
        tokenId: this.tokenId,
      });
      const balance = Mina.getAccount(this.address, this.tokenId).balance;
      console.log("redeem: balance", balance.toBigInt());
      return balance;
    });
    slippage.assertLessThan(UInt32.from(1000));
    const minBalanceField = Provable.witness(Field, () => {
      let minBalance =
        (balance.toBigInt() * (1000n - slippage.toBigint())) / 1000n;
      if (
        minBalance * 1000n !==
        balance.toBigInt() * (1000n - slippage.toBigint())
      ) {
        minBalance++;
      }
      if (
        minBalance * 1000n <
        balance.toBigInt() * (1000n - slippage.toBigint())
      ) {
        throw Error("Min balance calculation failed");
      }
      return Field.from(minBalance);
    });
    minBalanceField
      .mul(Field.from(1000))
      .add(balance.value.mul(slippage.value))
      .assertGreaterThanOrEqual(balance.value.mul(Field.from(1000)));

    minBalanceField.assertLessThan(UInt64.MAXINT().value);
    const minBalance = UInt64.Unsafe.fromField(minBalanceField);
    this.account.balance.requireBetween(minBalance, UInt64.MAXINT());

    const supply = await Provable.witnessAsync(UInt64, async () => {
      await fetchAccount({
        publicKey: this.address,
        tokenId: this.deriveTokenId(),
      });
      const balance = Mina.getAccount(
        this.address,
        this.deriveTokenId()
      ).balance;
      console.log("redeem: supply", balance.toBigInt());
      return balance;
    });
    supply.assertGreaterThanOrEqual(amount);
    supply.assertGreaterThan(UInt64.zero);
    const maxSupplyField = Provable.witness(Field, () =>
      Field.from((supply.toBigInt() * (1000n + slippage.toBigint())) / 1000n)
    );
    maxSupplyField
      .mul(Field.from(1000))
      .assertLessThanOrEqual(
        supply.value.mul(Field.from(1000).add(slippage.value))
      );
    maxSupplyField.assertLessThan(UInt64.MAXINT().value);
    const maxSupply = UInt64.Unsafe.fromField(maxSupplyField);
    const supplyUpdate = AccountUpdate.create(
      this.address,
      this.deriveTokenId()
    );
    supplyUpdate.account.balance.requireBetween(UInt64.zero, maxSupply);
    supplyUpdate.balanceChange = Int64.fromUnsigned(amount).neg();

    // We avoid modular division that is not working in case there is remainder
    const paymentField = Provable.witness(Field, () =>
      Field.from(
        (minBalance.toBigInt() * amount.toBigInt()) / maxSupply.toBigInt()
      )
    );
    // We use assertLessThanOrEqual to handle the case when there is remainder
    paymentField
      .mul(maxSupply.value)
      .assertLessThanOrEqual(minBalance.value.mul(amount.value));
    paymentField.assertLessThan(Field.from(2n ** 62n));
    amount.value
      .mul(minPrice.value)
      .assertLessThanOrEqual(paymentField.mul(Field.from(10 ** 9)));
    const payment = UInt64.Unsafe.fromField(paymentField);
    const { fee, mintingIsAllowed } = BondingCurveParams.unpack(
      this.curve.getAndRequireEquals()
    );
    mintingIsAllowed.assertTrue(
      "Minting is disabled for this token, nothing to redeem"
    );
    let feePayment = Provable.witness(UInt64, () => {
      let feePayment = (payment.toBigInt() * fee.toBigint()) / 100_000n;
      if (feePayment * 100_000n !== payment.toBigInt() * fee.toBigint()) {
        feePayment++;
      }
      if (feePayment * 100_000n < payment.toBigInt() * fee.toBigint()) {
        throw Error("Fee calculation failed");
      }
      return UInt64.from(feePayment);
    });
    feePayment = Provable.if(
      feePayment.lessThan(UInt64.from(100_000_000)),
      UInt64.from(100_000_000),
      feePayment
    );
    const seller = this.sender.getUnconstrained();
    const sellerUpdate = AccountUpdate.create(seller);
    const isNew = await Provable.witnessAsync(Bool, async () => {
      const sellerAccount = await fetchAccount({
        publicKey: seller,
      });
      return Bool(sellerAccount.account === undefined);
    });

    sellerUpdate.account.isNew.requireEquals(isNew);
    const accountCreationFee = Provable.if(
      isNew,
      UInt64.from(1_000_000_000),
      UInt64.zero
    );
    payment.assertGreaterThan(feePayment.add(accountCreationFee));
    sellerUpdate.requireSignature();
    sellerUpdate.body.useFullCommitment = Bool(true);
    const totalPayment = Provable.witness(UInt64, () => {
      if (
        payment.toBigInt() <
        feePayment.toBigInt() + accountCreationFee.toBigInt()
      ) {
        console.error(
          `The redeem amount ${
            Number(payment.toBigInt() / 10n ** 6n) / 1000
          } MINA is too low to cover the fee ${
            Number(feePayment.toBigInt() / 10n ** 6n) / 1000
          } MINA and account creation fee ${
            Number(accountCreationFee.toBigInt() / 10n ** 6n) / 1000
          } MINA for the account ${seller.toBase58()}`,
          {
            payment: payment.toBigInt(),
            feePayment: feePayment.toBigInt(),
            accountCreationFee: accountCreationFee.toBigInt(),
            minBalance: minBalance.toBigInt(),
            maxSupply: maxSupply.toBigInt(),
            supply: supply.toBigInt(),
            amount: amount.toBigInt(),
            balance: balance.toBigInt(),
            tokenAddress: tokenAddress.toBase58(),
            seller: seller.toBase58(),
            isNew: isNew.toBoolean(),
          }
        );
        throw Error(
          `The redeem amount ${
            Number(payment.toBigInt() / 10n ** 6n) / 1000
          } MINA is too low to cover the fee ${
            Number(feePayment.toBigInt() / 10n ** 6n) / 1000
          } MINA and account creation fee ${
            Number(accountCreationFee.toBigInt() / 10n ** 6n) / 1000
          } MINA for the account ${seller.toBase58()}`
        );
      }
      return UInt64.from(
        payment.toBigInt() -
          feePayment.toBigInt() -
          accountCreationFee.toBigInt()
      );
    });
    totalPayment.add(feePayment).add(accountCreationFee).assertEquals(payment);
    sellerUpdate.balance.addInPlace(totalPayment);
    const feeUpdate = AccountUpdate.create(
      this.feeMaster.getAndRequireEquals()
    );
    feeUpdate.body.useFullCommitment = Bool(true);
    feeUpdate.balance.addInPlace(feePayment);
    this.balance.subInPlace(payment);
    await token.burn(seller, amount);
    this.emitEvent(
      "redeem",
      new BondingRedeemEvent({
        seller,
        amount,
        payment,
        minBalance,
        maxSupply,
        fee: feePayment,
      })
    );
  }

  /**
   * In case the user burned tokens without calling the redeem method,
   * we need to sync the supply to the actual circulated supply
   */

  @method async sync() {
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);
    const supplyUpdate = AccountUpdate.create(
      this.address,
      this.deriveTokenId()
    );
    const circulatingSupply = await token.getBalanceOf(tokenAddress);
    const totalSupply = supplyUpdate.account.balance.getAndRequireEquals();
    supplyUpdate.balanceChange = Int64.fromUnsigned(
      totalSupply.sub(circulatingSupply)
    ).neg();
  }

  /** Update the verification key.
   * Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.
   */
  @method
  async updateVerificationKey(vk: VerificationKey) {
    this.account.verificationKey.set(vk);
  }

  ensureOwnerSignature() {
    const owner = this.owner.getAndRequireEquals();
    const update = AccountUpdate.createSigned(owner);
    update.body.useFullCommitment = Bool(true);
    return update;
  }

  @method.returns(Bool)
  public async canMint(_accountUpdate: AccountUpdate) {
    this.insideMint.requireEquals(Bool(true));
    this.insideMint.set(Bool(false));
    return Bool(true);
  }

  @method.returns(Bool)
  public async canChangeAdmin(_admin: PublicKey) {
    this.ensureOwnerSignature();
    return Bool(true);
  }

  @method.returns(Bool)
  public async canPause(): Promise<Bool> {
    this.ensureOwnerSignature();
    return Bool(true);
  }

  @method.returns(Bool)
  public async canResume(): Promise<Bool> {
    this.ensureOwnerSignature();
    return Bool(true);
  }

  @method.returns(Bool)
  public async canChangeVerificationKey(_vk: VerificationKey): Promise<Bool> {
    this.ensureOwnerSignature();
    return Bool(true);
  }
}

export const BondingCurveFungibleToken = FungibleTokenContract(
  FungibleTokenBondingCurveAdmin
);
