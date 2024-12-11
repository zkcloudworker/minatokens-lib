import { __decorate, __metadata } from "tslib";
import { AccountUpdate, method, Permissions, PublicKey, State, state, UInt64, SmartContract, Bool, Struct, Poseidon, Provable, } from "o1js";
import { Whitelist, OffChainList } from "@minatokens/storage";
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
}) {
}
class WithdrawEvent extends Struct({
    buyer: PublicKey,
    amount: UInt64,
}) {
}
class BidEvent extends Struct({
    bids: OffChainList,
}) {
}
export class NonFungibleTokenBidContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.buyer = State();
        this.whitelist = State();
        this.bids = State();
        this.events = {
            deposit: DepositEvent,
            withdraw: WithdrawEvent,
            sell: SellEvent,
            updateWhitelist: Whitelist,
            bid: OffChainList,
        };
    }
    async deploy(args) {
        await super.deploy(args);
        this.whitelist.set(args.whitelist);
        this.bids.set(args.bids);
        this.account.permissions.set({
            ...Permissions.default(),
            send: Permissions.proof(),
            setVerificationKey: Permissions.VerificationKey.impossibleDuringCurrentVersion(),
            setPermissions: Permissions.impossible(),
        });
    }
    async initialize(amount) {
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
    async deposit(amount) {
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
    async withdraw(amount) {
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
    async sell(nftAddress, price) {
        await this._sell(nftAddress, price);
        const buyer = this.buyer.getAndRequireEquals();
        const collection = new Collection(nftAddress.collection);
        await collection.transfer(nftAddress.nft, buyer);
    }
    async sellWithApproval(nftAddress, price) {
        await this._sell(nftAddress, price);
        const buyer = this.buyer.getAndRequireEquals();
        const collection = new Collection(nftAddress.collection);
        await collection.transferWithApproval(nftAddress.nft, buyer);
    }
    async _sell(nftAddress, price) {
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
        const maxPrice = Provable.if(whitelistDisabled, UInt64.MAXINT(), whitelistedAmount.value);
        price.assertLessThanOrEqual(maxPrice, "price is higher than whitelisted price");
        this.emitEvent("sell", {
            collection: nftAddress.collection,
            nft: nftAddress.nft,
            price,
        });
    }
    async updateWhitelist(whitelist) {
        const buyer = this.buyer.getAndRequireEquals();
        const sender = this.sender.getUnconstrained();
        const senderUpdate = AccountUpdate.createSigned(sender);
        senderUpdate.body.useFullCommitment = Bool(true);
        sender.assertEquals(buyer);
        this.whitelist.set(whitelist);
        this.emitEvent("updateWhitelist", whitelist);
    }
    async bid(bids) {
        const buyer = this.buyer.getAndRequireEquals();
        const sender = this.sender.getUnconstrained();
        const senderUpdate = AccountUpdate.createSigned(sender);
        senderUpdate.body.useFullCommitment = Bool(true);
        sender.assertEquals(buyer);
        this.bids.set(bids);
        this.emitEvent("bid", bids);
    }
}
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "buyer", void 0);
__decorate([
    state(Whitelist),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "whitelist", void 0);
__decorate([
    state(OffChainList),
    __metadata("design:type", Object)
], NonFungibleTokenBidContract.prototype, "bids", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "initialize", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "deposit", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
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
    __metadata("design:paramtypes", [Whitelist]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "updateWhitelist", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OffChainList]),
    __metadata("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "bid", null);
//# sourceMappingURL=bid.js.map