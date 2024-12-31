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
  Provable,
} from "o1js";
import {
  UInt64Option,
  TransferEvent,
  NFTCollectionContractConstructor,
  NFTApprovalBase,
  NFTCollectionBase,
} from "../interfaces/index.js";

export class AuctionPacked extends Struct({
  ownerX: Field,
  collectionX: Field,
  nftX: Field,
  data: Field,
}) {}

export class Auction extends Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  minimumPrice: UInt64,
  auctionEndTime: UInt32,
}) {
  pack(): AuctionPacked {
    const data = Field.fromBits([
      ...this.minimumPrice.value.toBits(64),
      ...this.auctionEndTime.value.toBits(32),
      this.owner.isOdd,
      this.collection.isOdd,
      this.nft.isOdd,
    ]);
    return new AuctionPacked({
      ownerX: this.owner.x,
      collectionX: this.collection.x,
      nftX: this.nft.x,
      data,
    });
  }
  static unpack(packed: AuctionPacked): Auction {
    const bits = packed.data.toBits(64 + 32 + 3);
    const ownerX = packed.ownerX;
    const collectionX = packed.collectionX;
    const nftX = packed.nftX;
    const ownerIsOdd = bits[64 + 32];
    const collectionIsOdd = bits[64 + 32 + 1];
    const nftIsOdd = bits[64 + 32 + 2];
    const owner = PublicKey.from({ x: ownerX, isOdd: ownerIsOdd });
    const collection = PublicKey.from({
      x: collectionX,
      isOdd: collectionIsOdd,
    });
    const nft = PublicKey.from({ x: nftX, isOdd: nftIsOdd });
    const minimumPrice = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 64))
    );
    const auctionEndTime = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64, 64 + 32))
    );
    return new Auction({
      owner,
      collection,
      nft,
      minimumPrice,
      auctionEndTime,
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
}

export class AuctionBidEvent extends Struct({
  bidder: PublicKey,
  price: UInt64,
}) {}

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
    @state(PublicKey) bidder = State<PublicKey>(PublicKey.empty());
    @state(Bool) insideSettleAuction = State<Bool>(Bool(false));

    async deploy(args: NonFungibleTokenAuctionContractDeployProps) {
      await super.deploy(args);
      this.auctionData.set(
        new Auction({
          owner: args.owner,
          collection: args.collection,
          nft: args.nft,
          minimumPrice: args.minimumPrice,
          auctionEndTime: args.auctionEndTime,
        }).pack()
      );
      this.insideSettleAuction.set(Bool(false));
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
      settle: TransferEvent,
    };

    getCollectionContract(address: PublicKey): NFTCollectionBase {
      const CollectionContract = collectionContract();
      return new CollectionContract(address);
    }

    @method async bid(price: UInt64) {
      const insideSettleAuction =
        this.insideSettleAuction.getAndRequireEquals();
      insideSettleAuction.assertFalse("Auction already finished");
      const bidder = this.bidder.getAndRequireEquals();
      const balance = this.account.balance.getAndRequireEquals();
      balance.assertLessThan(price, "Bid is lower than the existing bid");
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      price.assertGreaterThanOrEqual(
        auction.minimumPrice,
        "Bid should be greater or equal than the minimum price"
      );
      this.network.globalSlotSinceGenesis.requireBetween(
        UInt32.from(0),
        auction.auctionEndTime
      );
      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      const returnUpdate = AccountUpdate.create(bidder);
      senderUpdate.body.useFullCommitment = Bool(true);
      returnUpdate.body.useFullCommitment = Bool(true);
      // return the previous bidder's bid
      this.balance.subInPlace(balance);
      returnUpdate.balance.addInPlace(balance);
      // get the new bid deposit
      senderUpdate.balance.subInPlace(price);
      this.balance.addInPlace(price);
      this.bidder.set(sender);
      this.emitEvent("bid", new AuctionBidEvent({ bidder: sender, price }));
    }

    // anyone can call this method to settle the auction
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
      const collectionAddress = auction.collection;
      const nftAddress = auction.nft;
      const price = auction.minimumPrice;
      const collection = this.getCollectionContract(collectionAddress);
      const balance = this.account.balance.getAndRequireEquals();
      const bidder = this.bidder.getAndRequireEquals();
      bidder.equals(PublicKey.empty()).assertFalse("No bidder");
      balance.assertGreaterThanOrEqual(
        price,
        "Bidder does not have enough balance"
      );
      await collection.transferByProof({
        address: nftAddress,
        from: this.address,
        to: bidder,
        price: UInt64Option.fromValue(balance),
      });
    }

    @method.returns(Bool)
    async canTransfer(transferEvent: TransferEvent): Promise<Bool> {
      this.insideSettleAuction.requireEquals(Bool(true));
      // We do not set the insideSettleAuction to false here as settleAuction() can be called once only
      // and then the offer is accepted and not valid anymore for other buyers
      const auction = Auction.unpack(this.auctionData.getAndRequireEquals());
      const collectionAddress = auction.collection;
      const nftAddress = auction.nft;
      const owner = auction.owner;
      const bidder = this.bidder.getAndRequireEquals();
      const balance = this.account.balance.getAndRequireEquals();

      transferEvent.collection.assertEquals(collectionAddress);
      transferEvent.nft.assertEquals(nftAddress);
      transferEvent.from.assertEquals(owner);
      transferEvent.approved.assertEquals(this.address);
      transferEvent.price.assertSome().assertEquals(balance);
      transferEvent.to.assertEquals(bidder);
      Provable.log(transferEvent.fee.orElse(UInt64.zero));
      Provable.log(balance);
      transferEvent.fee
        .orElse(UInt64.zero)
        .assertLessThan(balance, "Fee is too high");

      const payment = balance.sub(transferEvent.fee.orElse(UInt64.zero));

      // Sender has already paid the commission, we need to compensate him
      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createIf(
        transferEvent.fee.isSome,
        sender
      );
      senderUpdate.requireSignature();
      senderUpdate.balance.addInPlace(transferEvent.fee.orElse(UInt64.zero));
      const ownerUpdate = AccountUpdate.create(owner);
      ownerUpdate.balance.addInPlace(payment);
      this.balance.subInPlace(balance);
      senderUpdate.body.useFullCommitment = Bool(true);
      ownerUpdate.body.useFullCommitment = Bool(true);

      this.emitEvent("settle", transferEvent);
      return Bool(true);
    }
  }

  return NonFungibleTokenAuctionContract;
}
