import {
  AccountUpdate,
  DeployArgs,
  method,
  Permissions,
  PublicKey,
  State,
  state,
  UInt64,
  SmartContract,
  Bool,
  UInt32,
  Field,
  Struct,
  assert,
} from "o1js";
import {
  UInt64Option,
  TransferEvent,
  NFTCollectionContractConstructor,
  NFTApprovalBase,
  NFTCollectionBase,
  NFTTransactionContext,
  TransferExtendedParams,
  TransferParams,
} from "../interfaces/index.js";

const MAX_SALE_FEE = 100000;
const MIN_STEP = 10; // 1% to previous bid

export class AuctionPacked extends Struct({
  ownerX: Field,
  collectionX: Field,
  nftX: Field,
  auctioneerX: Field,
  bidderX: Field,
  data: Field,
}) {}

export class Auction extends Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  /** The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). */
  saleFee: UInt32,
  auctionEndTime: UInt32,
  isOwnerPaid: Bool,
}) {
  pack(): AuctionPacked {
    const data = Field.fromBits([
      ...this.minimumPrice.value.toBits(64),
      ...this.transferFee.value.toBits(64),
      ...this.saleFee.value.toBits(32),
      ...this.auctionEndTime.value.toBits(32),
      this.owner.isOdd,
      this.collection.isOdd,
      this.nft.isOdd,
      this.auctioneer.isOdd,
      this.bidder.isOdd,
      this.isOwnerPaid,
    ]);
    return new AuctionPacked({
      ownerX: this.owner.x,
      collectionX: this.collection.x,
      nftX: this.nft.x,
      auctioneerX: this.auctioneer.x,
      bidderX: this.bidder.x,
      data,
    });
  }
  static unpack(packed: AuctionPacked): Auction {
    const bits = packed.data.toBits(64 + 64 + 32 + 32 + 6);
    const ownerX = packed.ownerX;
    const collectionX = packed.collectionX;
    const nftX = packed.nftX;
    const auctioneerX = packed.auctioneerX;
    const bidderX = packed.bidderX;
    const ownerIsOdd = bits[64 + 64 + 32 + 32];
    const collectionIsOdd = bits[64 + 64 + 32 + 32 + 1];
    const nftIsOdd = bits[64 + 64 + 32 + 32 + 2];
    const auctioneerIsOdd = bits[64 + 64 + 32 + 32 + 3];
    const bidderIsOdd = bits[64 + 64 + 32 + 32 + 4];
    const isOwnerPaid = bits[64 + 64 + 32 + 32 + 5];
    const owner = PublicKey.from({ x: ownerX, isOdd: ownerIsOdd });
    const collection = PublicKey.from({
      x: collectionX,
      isOdd: collectionIsOdd,
    });
    const nft = PublicKey.from({ x: nftX, isOdd: nftIsOdd });
    const auctioneer = PublicKey.from({
      x: auctioneerX,
      isOdd: auctioneerIsOdd,
    });
    const bidder = PublicKey.from({
      x: bidderX,
      isOdd: bidderIsOdd,
    });
    const minimumPrice = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 64))
    );
    const transferFee = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(64, 64 + 64))
    );
    const saleFee = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64 + 64, 64 + 64 + 32))
    );
    const auctionEndTime = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64 + 64 + 32, 64 + 64 + 32 + 32))
    );
    return new Auction({
      owner,
      collection,
      nft,
      auctioneer,
      bidder,
      minimumPrice,
      transferFee,
      saleFee,
      auctionEndTime,
      isOwnerPaid,
    });
  }
}

export interface NonFungibleTokenAuctionContractDeployProps
  extends Exclude<DeployArgs, undefined> {
  /** The minimum price. */
  minimumPrice: UInt64;
  /** The auction end time. */
  auctionEndTime: UInt32;
  /** The collection of the NFT. */
  collection: PublicKey;
  /** The address of the NFT. */
  nft: PublicKey;
  /** The owner of the NFT. */
  owner: PublicKey;
  /** The auctioneer of the NFT. */
  auctioneer: PublicKey;
  /** The transfer fee. */
  transferFee: UInt64;
  /** The sale fee. */
  saleFee: UInt32;
}

export class AuctionBidEvent extends Struct({
  bidder: PublicKey,
  price: UInt64,
}) {}

const WITHDRAW_PERIOD = 3360; // Number of slots equal to 1 week

/**
 * Creates a new NFT Collection Contract class.
 *
 * @param params - Constructor parameters including admin and upgrade contracts, and network ID.
 * @returns The Collection class extending TokenContract and implementing required interfaces.
 */

export function AuctionFactory(params: {
  collectionContract: () => NFTCollectionContractConstructor;
}) {
  const { collectionContract } = params;

  class NonFungibleTokenAuctionContract
    extends SmartContract
    implements NFTApprovalBase
  {
    @state(AuctionPacked) auctionData = State<AuctionPacked>();
    @state(UInt64) bidAmount = State<UInt64>(UInt64.zero);
    @state(Bool) insideSettleAuction = State<Bool>(Bool(false));

    async deploy(args: NonFungibleTokenAuctionContractDeployProps) {
      await super.deploy(args);
      assert(
        args.saleFee.lessThanOrEqual(UInt32.from(MAX_SALE_FEE)),
        "Sale fee is too high"
      );
      this.auctionData.set(
        new Auction({
          owner: args.owner,
          collection: args.collection,
          nft: args.nft,
          auctioneer: args.auctioneer,
          minimumPrice: args.minimumPrice,
          transferFee: args.transferFee,
          saleFee: args.saleFee,
          auctionEndTime: args.auctionEndTime,
          bidder: PublicKey.empty(),
          isOwnerPaid: Bool(false),
        }).pack()
      );
      this.insideSettleAuction.set(Bool(false));
      this.bidAmount.set(UInt64.zero);
      this.account.permissions.set({
        ...Permissions.default(),
        send: Permissions.proof(),
        setVerificationKey:
          Permissions.VerificationKey.impossibleDuringCurrentVersion(),
        setPermissions: Permissions.impossible(),
      });
    }

    events = {
      bid: AuctionBidEvent,
      settleAuction: TransferParams,
      canTransfer: TransferEvent,
      settlePayment: UInt64,
      settleAuctioneerPayment: UInt64,
      withdraw: UInt64,
    };

    getCollectionContract(address: PublicKey): NFTCollectionBase {
      const CollectionContract = collectionContract();
      return new CollectionContract(address);
    }

    calculateSaleFee(params: {
      price: UInt64;
      saleFee: UInt32;
      transferFee: UInt64;
    }): UInt64 {
      const { price, saleFee, transferFee } = params;
      saleFee.assertLessThanOrEqual(
        UInt32.from(MAX_SALE_FEE),
        "Sale fee is too high"
      );
      return price.div(MAX_SALE_FEE).mul(UInt64.from(saleFee));
    }

    @method async bid(price: UInt64) {
      const insideSettleAuction =
        this.insideSettleAuction.getAndRequireEquals();
      insideSettleAuction.assertFalse("Auction already finished");

      const bidAmount = this.bidAmount.getAndRequireEquals();
      this.account.balance.requireBetween(bidAmount, UInt64.MAXINT());
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      price.assertGreaterThanOrEqual(
        auction.minimumPrice,
        "Bid should be greater or equal than the minimum price"
      );
      price.assertGreaterThan(
        bidAmount.add(bidAmount.div(1000).mul(UInt64.from(MIN_STEP))),
        "Bid should be greater than the existing bid plus the minimum step"
      );
      this.network.globalSlotSinceGenesis.requireBetween(
        UInt32.from(0),
        auction.auctionEndTime
      );
      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      // if there is no bidder, this AccountUpdate will be ignored, similar to AccountUpdate.createIf()
      const returnUpdate = AccountUpdate.create(auction.bidder);
      senderUpdate.body.useFullCommitment = Bool(true);
      returnUpdate.body.useFullCommitment = Bool(true);
      // return the previous bidder's bid
      this.balance.subInPlace(bidAmount);
      returnUpdate.balance.addInPlace(bidAmount);
      // get the new bid deposit
      senderUpdate.balance.subInPlace(price);
      this.balance.addInPlace(price);
      this.bidAmount.set(price);
      auction.bidder = sender;
      this.auctionData.set(auction.pack());
      this.emitEvent("bid", new AuctionBidEvent({ bidder: sender, price }));
    }

    // anyone can call this method to settle the auction
    // but it is intended to be called by the auctioneer
    // because the auctioneer is the one who will get the auction commission
    // and pay the royalty to NFT creator
    // This method is atomic, so it will settle the auction and pay the NFT creator and owner
    // This method will NOT pay the auctioneer to save the number of AccountUpdates
    @method async settleAuction() {
      const insideSettleAuction =
        this.insideSettleAuction.getAndRequireEquals();
      insideSettleAuction.assertFalse("Auction already settled");
      this.insideSettleAuction.set(Bool(true));
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      this.network.globalSlotSinceGenesis.requireBetween(
        auction.auctionEndTime.add(1),
        UInt32.MAXINT()
      );
      const nftAddress = auction.nft;

      const bidAmount = this.bidAmount.getAndRequireEquals();
      auction.bidder.equals(PublicKey.empty()).assertFalse("No bidder");
      bidAmount.assertGreaterThanOrEqual(
        auction.minimumPrice,
        "Bidder does not have enough balance"
      );
      const collection = this.getCollectionContract(auction.collection);
      const transferParams = new TransferParams({
        address: nftAddress,
        from: this.address,
        to: auction.bidder,
        price: UInt64Option.fromValue(bidAmount),
        context: NFTTransactionContext.empty(),
      });
      await collection.transferByProof(transferParams);
      this.emitEvent("settleAuction", transferParams);
    }

    @method.returns(Bool)
    async canTransfer(params: TransferExtendedParams): Promise<Bool> {
      this.insideSettleAuction.requireEquals(Bool(true));

      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      const collectionAddress = auction.collection;
      const nftAddress = auction.nft;
      const owner = auction.owner;
      const bidder = auction.bidder;
      const bidAmount = this.bidAmount.getAndRequireEquals();
      this.network.globalSlotSinceGenesis.requireBetween(
        auction.auctionEndTime.add(1),
        UInt32.MAXINT()
      );

      params.collection.assertEquals(collectionAddress);
      params.nft.assertEquals(nftAddress);
      params.from.assertEquals(owner);
      params.approved.assertEquals(this.address);
      params.price.assertSome().assertEquals(bidAmount);
      params.price
        .assertSome()
        .assertGreaterThanOrEqual(
          auction.minimumPrice,
          "Bid should be greater or equal than the minimum price"
        );
      params.to.assertEquals(bidder);
      const fee = params.fee.orElse(UInt64.zero);
      fee.assertLessThanOrEqual(bidAmount, "Fee is higher than the bid");
      const saleFee = this.calculateSaleFee({
        price: bidAmount,
        saleFee: auction.saleFee,
        transferFee: auction.transferFee,
      });
      fee.assertLessThanOrEqual(saleFee, "Fee is higher than the sale fee");

      this.emitEvent(
        "canTransfer",
        new TransferEvent({
          ...params,
        })
      );
      return Bool(true);
    }

    @method
    async settlePayment(): Promise<void> {
      this.insideSettleAuction
        .getAndRequireEquals()
        .assertTrue("Auction not settled");
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      auction.isOwnerPaid.assertFalse("Owner is not paid yet");
      const bidAmount = this.bidAmount.getAndRequireEquals();
      this.network.globalSlotSinceGenesis.requireBetween(
        auction.auctionEndTime.add(1),
        UInt32.MAXINT()
      );

      const payment = bidAmount.sub(
        this.calculateSaleFee({
          price: bidAmount,
          saleFee: auction.saleFee,
          transferFee: auction.transferFee,
        })
      );

      this.account.balance.requireBetween(payment, UInt64.MAXINT());
      const ownerUpdate = AccountUpdate.create(auction.owner);
      ownerUpdate.balance.addInPlace(payment);
      this.balance.subInPlace(payment);
      ownerUpdate.body.useFullCommitment = Bool(true);

      auction.isOwnerPaid = Bool(true);
      this.auctionData.set(auction.pack());

      this.emitEvent("settlePayment", payment);
    }

    /*
    const balance = this.account.balance.getAndRequireEquals();
    is not stable and sometimes gives 0 on devnet during proving, so we put the amount as a parameter
    This method can be called many times by anyone, allowing the auctioneer to use the hardware wallet and bots
    */
    @method
    async settleAuctioneerPayment(amount: UInt64): Promise<void> {
      this.insideSettleAuction
        .getAndRequireEquals()
        .assertTrue("Auction not settled");
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      auction.isOwnerPaid.assertTrue(
        "Owner is not paid yet, first call settlePayment"
      );
      this.network.globalSlotSinceGenesis.requireBetween(
        auction.auctionEndTime.add(1),
        UInt32.MAXINT()
      );

      this.account.balance.requireBetween(amount, UInt64.MAXINT());

      const auctioneerUpdate = AccountUpdate.create(auction.auctioneer);
      auctioneerUpdate.balance.addInPlace(amount);
      this.balance.subInPlace(amount);
      auctioneerUpdate.body.useFullCommitment = Bool(true);

      this.emitEvent("settleAuctioneerPayment", amount);
    }

    /**
     * Withdraw the deposit from the auction
     * in case the auction is not settled during the WITHDRAW_PERIOD
     * for any reason
     * Anybody can call this method to allow the use of bots by the auctioneer or bidder
     */
    @method
    async withdraw(): Promise<void> {
      this.insideSettleAuction
        .getAndRequireEquals()
        .assertFalse("Auction already settled");
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      this.network.globalSlotSinceGenesis.requireBetween(
        auction.auctionEndTime.add(WITHDRAW_PERIOD),
        UInt32.MAXINT()
      );
      const bidAmount = this.bidAmount.getAndRequireEquals();
      const bidderUpdate = AccountUpdate.create(auction.bidder);
      bidderUpdate.balance.addInPlace(bidAmount);
      this.balance.subInPlace(bidAmount);
      bidderUpdate.body.useFullCommitment = Bool(true);
      this.insideSettleAuction.set(Bool(true));

      this.emitEvent("withdraw", bidAmount);
    }
  }

  return NonFungibleTokenAuctionContract;
}
