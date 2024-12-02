import {
  AccountUpdate,
  Bool,
  DeployArgs,
  method,
  Permissions,
  Provable,
  PublicKey,
  State,
  state,
  TokenContract,
  UInt64,
  VerificationKey,
  AccountUpdateForest,
  Struct,
  Field,
  TokenId,
} from "o1js";
import { Whitelist } from "@minatokens/storage";
import { FungibleTokenAdminBase } from "./FungibleTokenContract.js";

export class AdvancedAdminData extends Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}) {
  static new(
    params: {
      totalSupply?: number; // default is UInt64.MAXINT()
      requireAdminSignatureForMint?: boolean; // default is false
      anyoneCanMint?: boolean; // default is false
    } = {}
  ): AdvancedAdminData {
    const { totalSupply, requireAdminSignatureForMint, anyoneCanMint } = params;
    return new AdvancedAdminData({
      totalSupply: UInt64.from(totalSupply ?? 0),
      requireAdminSignatureForMint: Bool(requireAdminSignatureForMint ?? false),
      anyoneCanMint: Bool(anyoneCanMint ?? false),
    });
  }

  pack(): Field {
    const totalSupplyBits = this.totalSupply.value.toBits(64);
    return Field.fromBits([
      ...totalSupplyBits,
      this.requireAdminSignatureForMint,
      this.anyoneCanMint,
    ]);
  }

  static unpack(packed: Field) {
    const bits = packed.toBits(64 + 1 + 1);
    const totalSupply = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 64))
    );
    const requireAdminSignatureForMint = bits[64];
    const anyoneCanMint = bits[64 + 1];
    return new AdvancedAdminData({
      totalSupply,
      requireAdminSignatureForMint,
      anyoneCanMint,
    });
  }
}

export interface FungibleTokenWhitelistedAdminDeployProps
  extends Exclude<DeployArgs, undefined> {
  adminPublicKey: PublicKey;
  tokenContract: PublicKey;
  totalSupply: UInt64;
  whitelist: Whitelist;
  requireAdminSignatureForMint: Bool;
  anyoneCanMint: Bool;
}

/** A contract that grants permissions for administrative actions on a token.
 *
 * We separate this out into a dedicated contract. That way, when issuing a token, a user can
 * specify their own rules for administrative actions, without changing the token contract itself.
 *
 * The advantage is that third party applications that only use the token in a non-privileged way
 * can integrate against the unchanged token contract.
 */
export class FungibleTokenAdvancedAdmin
  extends TokenContract
  implements FungibleTokenAdminBase
{
  @state(PublicKey) adminPublicKey = State<PublicKey>();
  @state(PublicKey) tokenContract = State<PublicKey>();
  @state(Whitelist) whitelist = State<Whitelist>();
  @state(Field) adminData = State<Field>();

  /**
   * Overrides the approveBase method to prevent transfers of tokens.
   *
   * @param forest - The account update forest.
   */
  async approveBase(forest: AccountUpdateForest) {
    throw Error("Transfer not allowed");
  }

  async deploy(props: FungibleTokenWhitelistedAdminDeployProps) {
    await super.deploy(props);
    this.adminPublicKey.set(props.adminPublicKey);
    this.tokenContract.set(props.tokenContract);
    this.adminData.set(
      new AdvancedAdminData({
        totalSupply: props.totalSupply,
        requireAdminSignatureForMint: props.requireAdminSignatureForMint,
        anyoneCanMint: props.anyoneCanMint,
      }).pack()
    );
    this.whitelist.set(props.whitelist);
    this.account.permissions.set({
      ...Permissions.default(),
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: Permissions.impossible(),
    });
  }

  events = { updateWhitelist: Whitelist };

  /** Update the verification key.
   * Note that because we have set the permissions for setting
   * the verification key to `impossibleDuringCurrentVersion()`,
   * this will only be possible in case of a protocol update that requires an update.
   */
  @method
  async updateVerificationKey(vk: VerificationKey) {
    this.account.verificationKey.set(vk);
  }

  private async ensureAdminSignature() {
    // We do not fetch the admin public key here to allow error handling during
    // the fetching of the admin public key that should be done before calling this method
    const admin = this.adminPublicKey.getAndRequireEquals();
    const adminUpdate = AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = Bool(true);
    return adminUpdate;
  }

  @method.returns(Bool)
  public async canMint(_accountUpdate: AccountUpdate) {
    const address = _accountUpdate.body.publicKey;
    const balanceChange = _accountUpdate.body.balanceChange;
    balanceChange.isPositive().assertTrue();

    const adminData = AdvancedAdminData.unpack(
      this.adminData.getAndRequireEquals()
    );
    const tokenContract = this.tokenContract.getAndRequireEquals();
    const tokenId = TokenId.derive(tokenContract); // it is NOT this.tokenId
    const adminTokenId = this.deriveTokenId(); // it is NOT this.tokenId
    _accountUpdate.body.tokenId.assertEquals(tokenId);

    // Create a conditional AccountUpdate to check total supply in case it is limited
    const checkTotalSupply = adminData.totalSupply
      .equals(UInt64.MAXINT())
      .not();
    const tokenUpdate = AccountUpdate.createIf(
      checkTotalSupply,
      tokenContract,
      tokenId
    );
    const maxAdditionalSupply = Provable.if(
      checkTotalSupply,
      adminData.totalSupply.sub(balanceChange.magnitude),
      UInt64.MAXINT()
    );
    tokenUpdate.body.preconditions.account.balance.value.lower = UInt64.zero;
    tokenUpdate.body.preconditions.account.balance.value.upper =
      maxAdditionalSupply;

    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(address);
    whitelistedAmount.isSome
      .or(adminData.anyoneCanMint)
      .assertTrue("Cannot mint to non-whitelisted address");
    const maxMintAmount = Provable.if(
      adminData.anyoneCanMint,
      Provable.if(
        whitelistedAmount.isSome,
        whitelistedAmount.value,
        UInt64.MAXINT()
      ), // blacklist
      whitelistedAmount.value
    );

    // create an account update to check if the tokens already have been minted
    // we will keep track of the total amount minted in the admin contract
    // It is the responsibility of Mina.transaction to fund the new account
    // We will not handle it here to save one account update
    const trackMintUpdate = AccountUpdate.create(address, adminTokenId);
    const alreadyMinted = trackMintUpdate.account.balance.getAndRequireEquals();
    alreadyMinted
      .add(balanceChange.magnitude)
      .assertLessThanOrEqual(maxMintAmount);
    trackMintUpdate.balance.addInPlace(balanceChange.magnitude);
    this.self.approve(trackMintUpdate);

    // This conditional account update will be created only if admin signature is required
    const adminSignatureUpdate = AccountUpdate.createIf(
      adminData.requireAdminSignatureForMint,
      this.adminPublicKey.getAndRequireEquals()
    );
    adminSignatureUpdate.requireSignature();
    adminSignatureUpdate.body.useFullCommitment = Bool(true);

    // We return true as we already checked that the mint is allowed
    return Bool(true);
  }

  @method.returns(Bool)
  public async canChangeAdmin(_admin: PublicKey) {
    await this.ensureAdminSignature();
    return Bool(true);
  }

  @method.returns(Bool)
  public async canPause(): Promise<Bool> {
    await this.ensureAdminSignature();
    return Bool(true);
  }

  @method.returns(Bool)
  public async canResume(): Promise<Bool> {
    await this.ensureAdminSignature();
    return Bool(true);
  }

  @method async updateWhitelist(whitelist: Whitelist) {
    const admin = this.adminPublicKey.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    admin.assertEquals(sender);

    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
}
