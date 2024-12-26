import { __decorate, __metadata } from "tslib";
import { Field, PublicKey, Bool, SmartContract, method, state, State, VerificationKey, UInt64, AccountUpdate, } from "o1js";
import { Storage } from "@minatokens/storage";
import { NFTData, NFTState, NFTImmutableState, UpdateEvent, TransferEvent, OfferEvent, BuyEvent, UpgradeVerificationKeyEvent, PauseEvent, OwnershipChangeEvent, } from "../interfaces/index.js";
export { NFT };
const NFTErrors = {
    onlyOwnerCanUpgradeVerificationKey: "Only owner can upgrade verification key",
    cannotChangeMetadataVerificationKeyHash: "Cannot change metadata verification key hash",
    cannotChangeOwner: "Cannot change owner",
    cannotChangeStorage: "Cannot change storage",
    cannotChangePrice: "Cannot change price",
    cannotChangePauseState: "Cannot change pause state",
    noPermissionToPause: "No permission to pause",
    nftAlreadyPaused: "NFT is already paused",
    nftIsNotPaused: "NFT is not paused",
    nftIsPaused: "NFT is paused",
    cannotChangeName: "Cannot change name",
    cannotChangeMetadata: "Cannot change metadata",
    noMetadataVerificationKey: "No metadata verification key",
    noPermissionToSell: "No permission to sell",
    noPermissionToBuy: "No permission to buy",
    noPermissionToChangePrice: "No permission to change price",
};
/**
 * The NFT Contract represents an individual NFT within a collection.
 *
 * It manages the state and behavior of a single NFT, including ownership, metadata,
 * storage, pricing, and permissions. The contract provides functionality for updating
 * NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
 * upgrading the verification key, and pausing or resuming the NFT.
 */
class NFT extends SmartContract {
    constructor() {
        super(...arguments);
        /** The name of the NFT (`Field`). */
        this.name = State();
        /** The metadata associated with the NFT (`Field`). */
        this.metadata = State();
        /** The current owner of the NFT (`PublicKey`). */
        this.owner = State();
        /** Holds off-chain storage information, e.g., IPFS hash (`Storage`). */
        this.storage = State();
        /** A packed field containing additional NFT data and flags (`Field`). */
        this.packedData = State();
        /** The hash of the verification key used for metadata proofs (`Field`). */
        this.metadataVerificationKeyHash = State();
        /** Events emitted by the NFT contract. */
        this.events = {
            update: UpdateEvent,
            transfer: TransferEvent,
            offer: OfferEvent,
            buy: BuyEvent,
            upgradeVerificationKey: UpgradeVerificationKeyEvent,
            pause: PauseEvent,
            resume: PauseEvent,
            ownershipChange: OwnershipChangeEvent,
        };
    }
    /**
     * Ensures that the transaction is authorized by the current owner.
     *
     * @returns A signed account update for the owner.
     */
    async ensureOwnerSignature() {
        const owner = this.owner.getAndRequireEquals();
        const ownerUpdate = AccountUpdate.createSigned(owner);
        ownerUpdate.body.useFullCommitment = Bool(true); // prevent memo and fee change
        return ownerUpdate;
    }
    /**
     * Updates the NFT's state with provided proofs and permissions.
     *
     * @param input - The current state of the NFT (`NFTState`).
     * @param output - The desired new state of the NFT (`NFTState`).
     * @param creator - The public key of the creator (`PublicKey`).
     * @returns The hash of the metadata verification key (`Field`).
     */
    async update(input, output, creator) {
        const name = this.name.getAndRequireEquals();
        const metadata = this.metadata.getAndRequireEquals();
        const owner = this.owner.getAndRequireEquals();
        const storage = this.storage.getAndRequireEquals();
        const metadataVerificationKeyHash = this.metadataVerificationKeyHash.getAndRequireEquals();
        // Check that the metadata verification key exists
        metadataVerificationKeyHash.assertNotEquals(Field(0), NFTErrors.noMetadataVerificationKey);
        // Unpack price, version, flags
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.isPaused.assertFalse(NFTErrors.nftIsPaused);
        this.network.globalSlotSinceGenesis.requireBetween(input.lowerSlot, input.upperSlot);
        // Assert that the public input matches the NFT state
        NFTState.assertEqual(input, new NFTState({
            immutableState: new NFTImmutableState({
                canChangeOwnerByProof: data.canChangeOwnerByProof,
                canChangeOwnerBySignature: data.canChangeOwnerBySignature,
                canChangeMetadata: data.canChangeMetadata,
                canChangePrice: data.canChangePrice,
                canChangeStorage: data.canChangeStorage,
                canChangeName: data.canChangeName,
                canChangeMetadataVerificationKeyHash: data.canChangeMetadataVerificationKeyHash,
                canPause: data.canPause,
                address: this.address,
                tokenId: this.tokenId,
                id: data.id,
            }),
            name,
            metadata,
            storage,
            owner,
            price: data.price,
            version: data.version,
            isPaused: data.isPaused,
            metadataVerificationKeyHash,
            creator,
            lowerSlot: input.lowerSlot,
            upperSlot: input.upperSlot,
        }));
        // assert that the read-only fields are not changed
        input.creator.assertEquals(output.creator);
        input.lowerSlot.assertEquals(output.lowerSlot);
        input.upperSlot.assertEquals(output.upperSlot);
        // Check permissions and set new state
        name
            .equals(output.name)
            .not()
            .and(data.canChangeName.not())
            .assertFalse(NFTErrors.cannotChangeName);
        this.name.set(output.name);
        metadata
            .equals(output.metadata)
            .not()
            .and(data.canChangeMetadata.not())
            .assertFalse(NFTErrors.cannotChangeMetadata);
        this.metadata.set(output.metadata);
        metadataVerificationKeyHash
            .equals(output.metadataVerificationKeyHash)
            .not()
            .and(data.canChangeMetadataVerificationKeyHash.not())
            .assertFalse(NFTErrors.cannotChangeMetadataVerificationKeyHash);
        this.metadataVerificationKeyHash.set(output.metadataVerificationKeyHash);
        owner
            .equals(output.owner)
            .not()
            .and(data.canChangeOwnerByProof.not())
            .assertFalse(NFTErrors.cannotChangeOwner);
        this.owner.set(output.owner);
        Storage.equals(storage, output.storage)
            .not()
            .and(data.canChangeStorage.not())
            .assertFalse(NFTErrors.cannotChangeStorage);
        this.storage.set(output.storage);
        data.price
            .equals(output.price)
            .not()
            .and(data.canChangePrice.not())
            .assertFalse(NFTErrors.cannotChangePrice);
        data.isPaused
            .equals(output.isPaused)
            .not()
            .and(data.canPause.not())
            .assertFalse(NFTErrors.cannotChangePauseState);
        // recursive proofs can increase the version by more than 1
        output.version.assertGreaterThan(data.version);
        data.price = output.price;
        data.version = output.version;
        this.packedData.set(data.pack());
        const event = new UpdateEvent({
            name: output.name,
            metadata: output.metadata,
            storage: output.storage,
            owner: output.owner,
            price: output.price,
            version: output.version,
            isPaused: output.isPaused,
            metadataVerificationKeyHash: output.metadataVerificationKeyHash,
        });
        this.emitEvent("update", event);
        return metadataVerificationKeyHash;
    }
    /**
     * Lists the NFT for sale at a specified price.
     *
     * @param price - The price at which to sell the NFT (`UInt64`).
     * @param seller - The public key of the seller (`PublicKey`).
     * @returns An event emitted after the NFT is listed for sale (`SellEvent`).
     */
    async offer(price, seller) {
        this.owner.getAndRequireEquals().assertEquals(seller);
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.isPaused.assertFalse(NFTErrors.nftIsPaused);
        data.canChangeOwnerBySignature.assertTrue(NFTErrors.noPermissionToSell);
        data.canChangePrice.assertTrue(NFTErrors.noPermissionToChangePrice);
        const version = data.version.add(1);
        data.version = version;
        data.price = price;
        this.packedData.set(data.pack());
        const event = new OfferEvent({
            seller,
            price,
            version,
            address: this.address,
        });
        this.emitEvent("offer", event);
        return event;
    }
    /**
     * Purchases the NFT, transferring ownership and handling payment.
     *
     * @param price - The price at which to buy the NFT (`UInt64`).
     * @param buyer - The public key of the buyer (`PublicKey`).
     * @returns An event emitted after the NFT is purchased (`BuyEvent`).
     */
    async buy(price, buyer) {
        const owner = this.owner.getAndRequireEquals();
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.price.equals(UInt64.zero).assertFalse(); // the NFT is for sale
        data.price.assertEquals(price); // price is correct
        data.isPaused.assertFalse(NFTErrors.nftIsPaused);
        data.canChangeOwnerBySignature.assertTrue(NFTErrors.noPermissionToBuy);
        const version = data.version.add(1);
        data.version = version;
        data.price = UInt64.zero; // reset price
        this.packedData.set(data.pack());
        this.owner.set(buyer);
        const event = new BuyEvent({
            seller: owner,
            buyer,
            price,
            version,
            address: this.address,
        });
        this.emitEvent("buy", event);
        this.emitEvent("ownershipChange", new OwnershipChangeEvent({
            oldOwner: owner,
            newOwner: buyer,
        }));
        return event;
    }
    /**
     * Transfers ownership of the NFT from one user to another.
     *
     * @param from - The public key of the current owner (`PublicKey`).
     * @param to - The public key of the new owner (`PublicKey`).
     * @returns The public key of the old owner (`PublicKey`).
     */
    async transfer(from, to) {
        const oldOwner = this.owner.getAndRequireEquals();
        oldOwner.assertEquals(from);
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.canChangeOwnerBySignature.assertTrue(NFTErrors.cannotChangeOwner);
        data.isPaused.assertFalse(NFTErrors.nftIsPaused);
        const version = data.version.add(1);
        data.version = version;
        data.price = UInt64.zero; // reset price
        this.owner.set(to);
        this.packedData.set(data.pack());
        this.emitEvent("ownershipChange", new OwnershipChangeEvent({ oldOwner, newOwner: to }));
        return oldOwner;
    }
    /**
     * Upgrades the verification key used by the NFT contract.
     *
     * @param vk - The new verification key (`VerificationKey`).
     * @param sender - The public key of the sender (`PublicKey`).
     * @returns An event emitted after the verification key is upgraded (`UpgradeVerificationKeyEvent`).
     */
    async upgradeVerificationKey(vk, sender) {
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        const owner = this.owner.getAndRequireEquals();
        owner
            .equals(sender)
            .not()
            .and(data.requireOwnerSignatureToUpgrade.not())
            .assertFalse(NFTErrors.onlyOwnerCanUpgradeVerificationKey);
        this.account.verificationKey.set(vk);
        const version = data.version.add(1);
        data.version = version;
        const event = new UpgradeVerificationKeyEvent({
            verificationKeyHash: vk.hash,
            address: this.address,
            tokenId: this.tokenId,
        });
        this.account.verificationKey.set(vk);
        this.packedData.set(data.pack());
        this.emitEvent("upgradeVerificationKey", event);
        return event;
    }
    /**
     * Pauses the NFT, disabling certain actions.
     *
     * @returns A promise that resolves when the NFT is paused.
     */
    async pause() {
        await this.ensureOwnerSignature();
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.canPause.assertTrue(NFTErrors.noPermissionToPause);
        data.isPaused.assertFalse(NFTErrors.nftAlreadyPaused);
        data.isPaused = Bool(true);
        this.packedData.set(data.pack());
        this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
    }
    /**
     * Resumes the NFT, re-enabling actions.
     *
     * @returns A promise that resolves when the NFT is resumed.
     */
    async resume() {
        await this.ensureOwnerSignature();
        const data = NFTData.unpack(this.packedData.getAndRequireEquals());
        data.canPause.assertTrue(NFTErrors.noPermissionToPause);
        data.isPaused.assertTrue(NFTErrors.nftIsNotPaused);
        data.isPaused = Bool(false);
        this.packedData.set(data.pack());
        this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NFT.prototype, "name", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NFT.prototype, "metadata", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], NFT.prototype, "owner", void 0);
__decorate([
    state(Storage),
    __metadata("design:type", Object)
], NFT.prototype, "storage", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NFT.prototype, "packedData", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], NFT.prototype, "metadataVerificationKeyHash", void 0);
__decorate([
    method.returns(Field),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NFTState,
        NFTState,
        PublicKey]),
    __metadata("design:returntype", Promise)
], NFT.prototype, "update", null);
__decorate([
    method.returns(OfferEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, PublicKey]),
    __metadata("design:returntype", Promise)
], NFT.prototype, "offer", null);
__decorate([
    method.returns(BuyEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, PublicKey]),
    __metadata("design:returntype", Promise)
], NFT.prototype, "buy", null);
__decorate([
    method.returns(PublicKey),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PublicKey]),
    __metadata("design:returntype", Promise)
], NFT.prototype, "transfer", null);
__decorate([
    method.returns(UpgradeVerificationKeyEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerificationKey,
        PublicKey]),
    __metadata("design:returntype", Promise)
], NFT.prototype, "upgradeVerificationKey", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFT.prototype, "pause", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFT.prototype, "resume", null);
//# sourceMappingURL=nft.js.map