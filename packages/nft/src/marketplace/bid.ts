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
  Field,
  Struct,
  Poseidon,
  Provable,
} from "o1js";
import { Whitelist, OffChainList } from "@minatokens/storage";
import { Collection } from "../contracts.js";

export class NFTAddress extends Struct({
  collection: PublicKey,
  nft: PublicKey,
}) {}

class SellEvent extends Struct({
  collection: PublicKey,
  nft: PublicKey,
  price: UInt64,
}) {}

class DepositEvent extends Struct({
  buyer: PublicKey,
  amount: UInt64,
}) {}

class WithdrawEvent extends Struct({
  buyer: PublicKey,
  amount: UInt64,
}) {}

class BidEvent extends Struct({
  bids: OffChainList,
}) {}

export interface NonFungibleTokenBidContractDeployProps
  extends Exclude<DeployArgs, undefined> {
  /** The whitelist. */
  whitelist: Whitelist;
  /** The offers. */
  bids: OffChainList;
}
export class NonFungibleTokenBidContract extends SmartContract {
  @state(PublicKey) buyer = State<PublicKey>();
  @state(Whitelist) whitelist = State<Whitelist>();
  @state(OffChainList) bids = State<OffChainList>();

  async deploy(args: NonFungibleTokenBidContractDeployProps) {
    await super.deploy(args);
    this.whitelist.set(args.whitelist);
    this.bids.set(args.bids);
    this.account.permissions.set({
      ...Permissions.default(),
      send: Permissions.proof(),
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: Permissions.impossible(),
    });
  }

  events = {
    deposit: DepositEvent,
    withdraw: WithdrawEvent,
    sell: SellEvent,
    updateWhitelist: Whitelist,
    bid: OffChainList,
  };

  @method async initialize(amount: UInt64) {
    this.account.provedState.requireEquals(Bool(false));

    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = AccountUpdate.createSigned(buyer);
    // We use low-level subInPlace and addInPlace to decrease the number of AccountUpdates
    buyerUpdate.balance.subInPlace(amount.add(UInt64.from(1_000_000_000)));
    this.self.balance.addInPlace(amount);
    buyerUpdate.body.useFullCommitment = Bool(true);

    this.buyer.set(buyer);
    this.emitEvent("deposit", {
      buyer,
      amount,
    });
  }

  @method async deposit(amount: UInt64) {
    amount.equals(UInt64.from(0)).assertFalse();

    const sender = this.sender.getUnconstrained();
    const buyer = this.buyer.getAndRequireEquals();
    sender.assertEquals(buyer);
    const buyerUpdate = AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount });
    buyerUpdate.body.useFullCommitment = Bool(true);

    this.emitEvent("deposit", {
      buyer,
      amount,
    });
  }

  @method async withdraw(amount: UInt64) {
    amount.equals(UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, UInt64.MAXINT());

    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(buyer);

    let bidUpdate = this.send({ to: senderUpdate, amount });
    bidUpdate.body.useFullCommitment = Bool(true);
    this.emitEvent("withdraw", {
      buyer,
      amount,
    });
  }

  @method async sell(nftAddress: NFTAddress, price: UInt64) {
    await this._sell(nftAddress, price);
    const buyer = this.buyer.getAndRequireEquals();
    const collection = new Collection(nftAddress.collection);
    await collection.transfer(nftAddress.nft, buyer);
  }

  @method async sellWithApproval(nftAddress: NFTAddress, price: UInt64) {
    await this._sell(nftAddress, price);
    const buyer = this.buyer.getAndRequireEquals();
    const collection = new Collection(nftAddress.collection);
    await collection.transferWithApproval(nftAddress.nft, buyer);
  }

  async _sell(nftAddress: NFTAddress, price: UInt64) {
    price.equals(UInt64.from(0)).assertFalse();
    const key = Poseidon.hashPacked(NFTAddress, nftAddress);
    const bids = this.bids.getAndRequireEquals();
    const bid = await bids.getValue(key);
    const bidField = bid.assertSome("bid not found");
    // We do not require the price to be equal to the bid price,
    // because the price can be lower than the bid price
    // and the seller can still willing to sell the NFT
    // as the deposit remaining is less than bid price
    price.value.assertLessThanOrEqual(bidField, "price is too high");
    this.account.balance.requireBetween(price, UInt64.MAXINT());

    const seller = this.sender.getUnconstrained();
    const sellerUpdate = this.send({ to: seller, amount: price });
    sellerUpdate.body.useFullCommitment = Bool(true);
    sellerUpdate.requireSignature();

    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(seller);
    const whitelistDisabled = whitelist.isNone();
    whitelistedAmount.isSome
      .or(whitelistDisabled)
      .assertTrue("Cannot buy from non-whitelisted address");
    const maxPrice = Provable.if(
      whitelistDisabled,
      UInt64.MAXINT(),
      whitelistedAmount.value
    );
    price.assertLessThanOrEqual(
      maxPrice,
      "price is higher than whitelisted price"
    );

    this.emitEvent("sell", {
      collection: nftAddress.collection,
      nft: nftAddress.nft,
      price,
    });
  }

  @method async updateWhitelist(whitelist: Whitelist) {
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(buyer);

    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }

  @method async bid(bids: OffChainList) {
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(buyer);

    this.bids.set(bids);
    this.emitEvent("bid", bids);
  }
}
