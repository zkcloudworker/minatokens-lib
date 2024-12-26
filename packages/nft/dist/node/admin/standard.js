import { __decorate, __metadata } from "tslib";
import { Bool, method, Permissions, PublicKey, SmartContract, State, state, VerificationKey, UInt64, Field, AccountUpdate, } from "o1js";
import { MintRequest, NFTState, MintParamsOption, PauseEvent, OwnershipChangeEvent, } from "../interfaces/index.js";
export { NFTAdmin };
/**
 * The **NFTAdmin** contract serves as the foundational administrative layer for NFT collections on the Mina Protocol.
 * It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management.
 * This contract can be extended by custom admin contracts to implement specific administrative logic,
 * ensuring flexibility while maintaining a standardized interface.
 */
class NFTAdmin extends SmartContract {
    constructor() {
        super(...arguments);
        /**
         * The public key of the contract's administrator.
         * This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.
         */
        this.admin = State();
        /**
         * The public key of the upgrade authority contract.
         * This is the contract responsible for validating and authorizing upgrades to the verification key.
         */
        this.upgradeAuthority = State();
        /**
         * A boolean flag indicating whether the contract is currently paused.
         * When `true`, certain operations are disabled.
         */
        this.isPaused = State();
        /**
         * A boolean flag indicating whether the contract has the ability to be paused.
         * This allows for disabling the pause functionality if desired.
         */
        this.canPause = State();
        /**
         * Contract events emitted during various operations.
         */
        this.events = {
            /** Emitted when the verification key is upgraded. */
            upgradeVerificationKey: Field,
            /** Emitted when the contract is paused. */
            pause: PauseEvent,
            /** Emitted when the contract is resumed. */
            resume: PauseEvent,
            /** Emitted when ownership of the contract changes. */
            ownershipChange: OwnershipChangeEvent,
        };
    }
    /**
     * Deploys the contract with initial settings.
     * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
     */
    async deploy(props) {
        await super.deploy(props);
        this.admin.set(props.admin);
        this.isPaused.set(props.isPaused);
        this.canPause.set(props.canPause);
        this.account.zkappUri.set(props.uri);
        this.account.permissions.set({
            ...Permissions.default(),
            // Allow the upgrade authority to set the verification key even without a protocol upgrade,
            // enabling upgrades in case of o1js breaking changes.
            setVerificationKey: Permissions.VerificationKey.proofDuringCurrentVersion(),
            setPermissions: Permissions.impossible(),
        });
    }
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns A signed `AccountUpdate` from the admin.
     */
    async ensureOwnerSignature() {
        const admin = this.admin.getAndRequireEquals();
        const adminUpdate = AccountUpdate.createSigned(admin);
        adminUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
        return adminUpdate;
    }
    /**
     * Upgrades the contract's verification key after validating with the upgrade authority.
     * @param vk - The new verification key to upgrade to.
     */
    async upgradeVerificationKey(vk) {
        await this.ensureOwnerSignature();
        // Set the new verification key
        this.account.verificationKey.set(vk);
        // Emit the upgrade event
        this.emitEvent("upgradeVerificationKey", vk.hash);
    }
    /**
     * Determines whether minting is allowed for the given request.
     * Returns mint parameters if allowed, or none if not allowed.
     * @param mintRequest - The minting request details.
     * @returns A `MintParamsOption` indicating if minting is permitted.
     */
    async canMint(mintRequest) {
        // Only the creator can mint by default
        return MintParamsOption.none();
    }
    /**
     * Checks whether the NFT state can be updated.
     * Typically returns true if the contract is not paused.
     * @param input - The current state of the NFT.
     * @param output - The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is allowed.
     */
    async canUpdate(input, output) {
        const isPaused = this.isPaused.getAndRequireEquals();
        return isPaused.not();
    }
    /**
     * Determines whether a transfer between the specified addresses is permitted.
     * @param address - The NFT contract address.
     * @param from - The sender's public key.
     * @param to - The recipient's public key.
     * @returns A `Bool` indicating whether the transfer is allowed.
     */
    async canTransfer(address, from, to) {
        const isPaused = this.isPaused.getAndRequireEquals();
        return isPaused.not();
    }
    /**
     * Determines whether the NFT can be listed for sale at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param price - The listing price.
     * @returns A `Bool` indicating whether the sale is permitted.
     */
    async canSell(address, seller, price) {
        const isPaused = this.isPaused.getAndRequireEquals();
        return isPaused.not();
    }
    /**
     * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param buyer - The buyer's public key.
     * @param price - The purchase price.
     * @returns A `Bool` indicating whether the purchase is allowed.
     */
    async canBuy(address, seller, buyer, price) {
        const isPaused = this.isPaused.getAndRequireEquals();
        return isPaused.not();
    }
    /**
     * Pauses the contract, disabling certain administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    async pause() {
        await this.ensureOwnerSignature();
        this.canPause.getAndRequireEquals().assertTrue();
        this.isPaused.set(Bool(true));
        this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
    }
    /**
     * Resumes the contract, re-enabling administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    async resume() {
        await this.ensureOwnerSignature();
        this.canPause.getAndRequireEquals().assertTrue();
        this.isPaused.set(Bool(false));
        this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
    }
    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the previous owner.
     */
    async transferOwnership(newOwner) {
        await this.ensureOwnerSignature();
        const oldOwner = this.admin.getAndRequireEquals();
        this.admin.set(newOwner);
        this.emitEvent("ownershipChange", new OwnershipChangeEvent({
            oldOwner,
            newOwner,
        }));
        return oldOwner;
    }
    async canChangeVerificationKey(vk, address, tokenId) {
        await this.ensureOwnerSignature();
        return Bool(true);
    }
}
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], NFTAdmin.prototype, "admin", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], NFTAdmin.prototype, "upgradeAuthority", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], NFTAdmin.prototype, "isPaused", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], NFTAdmin.prototype, "canPause", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerificationKey]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "upgradeVerificationKey", null);
__decorate([
    method.returns(MintParamsOption),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MintRequest]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canMint", null);
__decorate([
    method.returns(Bool),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NFTState, NFTState]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canUpdate", null);
__decorate([
    method.returns(Bool),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PublicKey, PublicKey]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canTransfer", null);
__decorate([
    method.returns(Bool),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PublicKey, UInt64]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canSell", null);
__decorate([
    method.returns(Bool),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey,
        PublicKey,
        PublicKey,
        UInt64]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canBuy", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "pause", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "resume", null);
__decorate([
    method.returns(PublicKey),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "transferOwnership", null);
__decorate([
    method.returns(Bool),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerificationKey,
        PublicKey,
        Field]),
    __metadata("design:returntype", Promise)
], NFTAdmin.prototype, "canChangeVerificationKey", null);
//# sourceMappingURL=standard.js.map