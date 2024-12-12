import { __decorate, __metadata } from "tslib";
import { AccountUpdate, method, Permissions, PublicKey, State, state, UInt64, SmartContract, Bool, Field, Struct, Poseidon, Provable, } from "o1js";
import { Whitelist, OffChainList, Storage } from "@minatokens/storage";
import { Collection } from "../contracts.js";
export class NFTAddress extends Struct({
    collection: PublicKey,
    nft: PublicKey,
}) {
}
class SellEvent extends Struct({
    collection: PublicKey,
    nft: PublicKey,
    price: UInt64,
}) {
}
class DepositEvent extends Struct({
    buyer: PublicKey,
    amount: UInt64,
    maxPoints: UInt64,
}) {
}
class WithdrawEvent extends Struct({
    buyer: PublicKey,
    amount: UInt64,
    maxPoints: UInt64,
}) {
}
class BidEvent extends Struct({
    bids: Field,
    whitelist: Field,
    storage: Storage,
}) {
}
export class Bid extends Struct({
    price: UInt64,
    points: UInt64,
}) {
    pack() {
        return Field.fromBits([
            ...this.price.value.toBits(64),
            ...this.points.value.toBits(64),
        ]);
    }
    static unpack(field) {
        const bits = field.toBits(64 + 64);
        const price = UInt64.Unsafe.fromField(Field.fromBits(bits.slice(0, 64)));
        const points = UInt64.Unsafe.fromField(Field.fromBits(bits.slice(64, 64 + 64)));
        return new Bid({
            price,
            points,
        });
    }
}
export class NonFungibleTokenBidContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.buyer = State();
        this.whitelist = State();
        this.bids = State();
        this.storage = State();
        this.maxPoints = State();
        // We do not have concurrency here, but given that it is a single-user contract,
        // we can use state to track the points that have been consumed
        // In case of concurrency, we can use the tokens to track the points
        this.consumedPoints = State();
        this.events = {
            deposit: DepositEvent,
            withdraw: WithdrawEvent,
            sell: SellEvent,
            updateWhitelist: Whitelist,
            bid: BidEvent,
        };
    }
    async deploy(args) {
        await super.deploy(args);
        this.whitelist.set(args.whitelist);
        this.bids.set(args.bids);
        this.storage.set(args.storage);
        this.account.permissions.set({
            ...Permissions.default(),
            send: Permissions.proof(),
            setVerificationKey: Permissions.VerificationKey.impossibleDuringCurrentVersion(),
            setPermissions: Permissions.impossible(),
        });
    }
    async initialize(amount, maxPoints) {
        this.account.provedState.requireEquals(Bool(false));
        const buyer = this.sender.getUnconstrained();
        const buyerUpdate = AccountUpdate.createSigned(buyer);
        // We use low-level subInPlace and addInPlace to decrease the number of AccountUpdates
        buyerUpdate.balance.subInPlace(amount.add(UInt64.from(1_000_000_000)));
        this.self.balance.addInPlace(amount);
        buyerUpdate.body.useFullCommitment = Bool(true);
        this.buyer.set(buyer);
        this.maxPoints.set(maxPoints);
        this.emitEvent("deposit", new DepositEvent({
            buyer,
            amount,
            maxPoints,
        }));
    }
    async deposit(amount, maxPoints) {
        amount.equals(UInt64.from(0)).assertFalse();
        const sender = this.sender.getUnconstrained();
        const buyer = this.buyer.getAndRequireEquals();
        sender.assertEquals(buyer);
        const buyerUpdate = AccountUpdate.createSigned(buyer);
        buyerUpdate.send({ to: this.address, amount });
        buyerUpdate.body.useFullCommitment = Bool(true);
        this.maxPoints.set(maxPoints);
        this.emitEvent("deposit", new DepositEvent({
            buyer,
            amount,
            maxPoints,
        }));
    }
    async withdraw(amount, maxPoints) {
        amount.equals(UInt64.from(0)).assertFalse();
        this.account.balance.requireBetween(amount, UInt64.MAXINT());
        const buyer = this.buyer.getAndRequireEquals();
        const sender = this.sender.getUnconstrained();
        const senderUpdate = AccountUpdate.createSigned(sender);
        senderUpdate.body.useFullCommitment = Bool(true);
        sender.assertEquals(buyer);
        let bidUpdate = this.send({ to: senderUpdate, amount });
        bidUpdate.body.useFullCommitment = Bool(true);
        this.maxPoints.set(maxPoints);
        this.emitEvent("withdraw", new WithdrawEvent({
            buyer,
            amount,
            maxPoints,
        }));
    }
    async sell(nftAddress, price) {
        await this._sell(nftAddress, price);
        const buyer = this.buyer.getAndRequireEquals();
        const collection = new Collection(nftAddress.collection);
        await collection.sell(nftAddress.nft, price, buyer);
    }
    async sellWithApproval(nftAddress, price) {
        await this._sell(nftAddress, price);
        const buyer = this.buyer.getAndRequireEquals();
        const collection = new Collection(nftAddress.collection);
        await collection.sellWithApproval(nftAddress.nft, price, buyer);
    }
    async _sell(nftAddress, price) {
        price.equals(UInt64.from(0)).assertFalse();
        const key = Poseidon.hashPacked(NFTAddress, nftAddress);
        const storage = this.storage.getAndRequireEquals();
        const bids = new OffChainList({
            root: this.bids.getAndRequireEquals(),
            storage,
        });
        const bid = Bid.unpack((await bids.getValue(key, "bids")).assertSome("bid not found"));
        // We do not require the price to be equal to the bid price,
        // because the price can be lower than the bid price
        // and the seller can still willing to sell the NFT
        // as the deposit remaining is less than bid price
        price.assertLessThanOrEqual(bid.price, "price is too high");
        this.account.balance.requireBetween(price, UInt64.MAXINT());
        const consumedPoints = this.consumedPoints.getAndRequireEquals();
        const maxPoints = this.maxPoints.getAndRequireEquals();
        const newConsumedPoints = consumedPoints.add(bid.points);
        newConsumedPoints.assertLessThanOrEqual(maxPoints, "consumed points exceed max points");
        this.consumedPoints.set(newConsumedPoints);
        const seller = this.sender.getUnconstrained();
        const sellerUpdate = AccountUpdate.createSigned(seller);
        sellerUpdate.balance.addInPlace(price);
        this.self.balance.subInPlace(price);
        sellerUpdate.body.useFullCommitment = Bool(true);
        const whitelist = new Whitelist({
            list: new OffChainList({
                root: this.whitelist.getAndRequireEquals(),
                storage,
            }),
        });
        const whitelistedAmount = await whitelist.getWhitelistedAmount(seller, "whitelist");
        const whitelistDisabled = whitelist.isNone();
        whitelistedAmount.isSome
            .or(whitelistDisabled)
            .assertTrue("Cannot buy from non-whitelisted address");
        const maxPrice = Provable.if(whitelistDisabled, UInt64.MAXINT(), whitelistedAmount.value);
        price.assertLessThanOrEqual(maxPrice, "price is higher than whitelisted price");
        this.emitEvent("sell", new SellEvent({
            collection: nftAddress.collection,
            nft: nftAddress.nft,
            price,
        }));
    }
    async bid(bids, whitelist, storage) {
        const buyer = this.buyer.getAndRequireEquals();
        const sender = this.sender.getUnconstrained();
        const senderUpdate = AccountUpdate.createSigned(sender);
        senderUpdate.body.useFullCommitment = Bool(true);
        sender.assertEquals(buyer);
        this.bids.set(bids);
        this.whitelist.set(whitelist);
        this.storage.set(storage);
        this.emitEvent("bid", new BidEvent({ bids, whitelist, storage }));
    }
}
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "buyer", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "whitelist", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "bids", void 0);
__decorate([
    state(Storage),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "storage", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "maxPoints", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "consumedPoints", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "initialize", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "deposit", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "withdraw", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NFTAddress, UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "sell", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NFTAddress, UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "sellWithApproval", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field, Field, Storage]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "bid", null);
//# sourceMappingURL=bid.js.map