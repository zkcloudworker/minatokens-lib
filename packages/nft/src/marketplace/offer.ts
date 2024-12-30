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
} from "o1js";
import {
  UInt64Option,
  TransferEvent,
  NFTCollectionContractConstructor,
  NFTApprovalBase,
  NFTCollectionBase,
} from "../interfaces/index.js";

export interface NonFungibleTokenOfferContractDeployProps
  extends Exclude<DeployArgs, undefined> {
  // /** The whitelist. */
  // whitelist: Whitelist;
  /** The offers. */
  price: UInt64;
  /** The collection of the NFT. */
  collection: PublicKey;
  /** The address of the NFT. */
  nft: PublicKey;
  /** The owner of the NFT. */
  owner: PublicKey;
}

// export type OfferClass = ReturnType<typeof defineOfferFactory>;

/**
 * Creates a new NFT Collection Contract class.
 *
 * @param params - Constructor parameters including admin and upgrade contracts, and network ID.
 * @returns The Collection class extending TokenContract and implementing required interfaces.
 */

export function OfferFactory(params: {
  collectionContract: () => NFTCollectionContractConstructor;
}) {
  const { collectionContract } = params;

  class NonFungibleTokenOfferContract
    extends SmartContract
    implements NFTApprovalBase
  {
    @state(PublicKey) owner = State<PublicKey>();
    // @state(Whitelist) whitelist = State<Whitelist>();
    @state(UInt64) price = State<UInt64>();
    @state(PublicKey) collection = State<PublicKey>();
    @state(PublicKey) nft = State<PublicKey>();
    @state(Bool) insideBuy = State<Bool>();

    async deploy(args: NonFungibleTokenOfferContractDeployProps) {
      await super.deploy(args);
      this.owner.set(args.owner);
      // this.whitelist.set(args.whitelist);
      this.price.set(args.price);
      this.collection.set(args.collection);
      this.nft.set(args.nft);
      this.insideBuy.set(Bool(false));
      this.account.permissions.set({
        ...Permissions.default(),
        send: Permissions.proof(),
        setVerificationKey:
          Permissions.VerificationKey.impossibleDuringCurrentVersion(),
        setPermissions: Permissions.impossible(),
      });
    }

    events = {
      buy: TransferEvent,
    };

    getCollectionContract(address: PublicKey): NFTCollectionBase {
      const CollectionContract = collectionContract();
      return new CollectionContract(address);
    }

    @method async buy() {
      const insideBuy = this.insideBuy.getAndRequireEquals();
      insideBuy.assertFalse("Already inside buy method");
      this.insideBuy.set(Bool(true));
      const collectionAddress = this.collection.getAndRequireEquals();
      const nftAddress = this.nft.getAndRequireEquals();
      const price = this.price.getAndRequireEquals();
      const collection = this.getCollectionContract(collectionAddress);
      await collection.transferByProof({
        address: nftAddress,
        from: this.address,
        to: this.sender.getUnconstrained(),
        price: UInt64Option.fromValue(price),
      });
    }

    // @method async sellWithApproval(nftAddress: NFTAddress, price: UInt64) {
    //   await this._sell(nftAddress, price);
    //   const buyer = this.buyer.getAndRequireEquals();
    //   const collection = new Collection(nftAddress.collection);
    //   await collection.sellWithApproval(nftAddress.nft, price, buyer);
    // }

    @method.returns(Bool)
    async canTransfer(transferEvent: TransferEvent): Promise<Bool> {
      this.insideBuy.requireEquals(Bool(true));
      // We do not set the insideBuy to false here as buy() can be called once only
      // and then the offer is accepted and not valid anymore for other buyers
      const collectionAddress = this.collection.getAndRequireEquals();
      const nftAddress = this.nft.getAndRequireEquals();
      const owner = this.owner.getAndRequireEquals();
      const price = this.price.getAndRequireEquals();

      transferEvent.collection.assertEquals(collectionAddress);
      transferEvent.nft.assertEquals(nftAddress);
      transferEvent.from.assertEquals(owner);
      transferEvent.approved.assertEquals(this.address);
      transferEvent.price.assertSome().assertEquals(price);
      transferEvent.from.assertEquals(owner);
      transferEvent.fee
        .orElse(UInt64.zero)
        .assertLessThan(price, "Fee is too high");

      const payment = price.sub(transferEvent.fee.orElse(UInt64.zero));

      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      transferEvent.to.assertEquals(sender);
      senderUpdate.account.balance.requireBetween(payment, UInt64.MAXINT());
      senderUpdate.balance.subInPlace(payment);
      const ownerUpdate = AccountUpdate.create(owner);
      ownerUpdate.balance.addInPlace(payment);
      senderUpdate.body.useFullCommitment = Bool(true);
      ownerUpdate.body.useFullCommitment = Bool(true);

      this.emitEvent("buy", transferEvent);
      return Bool(true);
    }
  }

  return NonFungibleTokenOfferContract;
}
