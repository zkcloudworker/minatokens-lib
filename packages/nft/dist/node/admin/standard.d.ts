import { Bool, DeployArgs, PublicKey, SmartContract, State, VerificationKey, UInt64, Field, AccountUpdate } from "o1js";
import { MintRequest, NFTState, NFTAdminBase, MintParamsOption, PausableContract, PauseEvent, OwnershipChangeEvent, OwnableContract } from "../interfaces/index.js";
export { NFTAdmin, NFTAdminDeployProps };
interface NFTAdminDeployProps extends Exclude<DeployArgs, undefined> {
    admin: PublicKey;
    uri: string;
    canPause: Bool;
    isPaused: Bool;
}
/**
 * The **NFTAdmin** contract serves as the foundational administrative layer for NFT collections on the Mina Protocol.
 * It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management.
 * This contract can be extended by custom admin contracts to implement specific administrative logic,
 * ensuring flexibility while maintaining a standardized interface.
 */
declare class NFTAdmin extends SmartContract implements NFTAdminBase, PausableContract, OwnableContract {
    /**
     * The public key of the contract's administrator.
     * This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.
     */
    admin: State<PublicKey>;
    /**
     * The public key of the upgrade authority contract.
     * This is the contract responsible for validating and authorizing upgrades to the verification key.
     */
    upgradeAuthority: State<PublicKey>;
    /**
     * A boolean flag indicating whether the contract is currently paused.
     * When `true`, certain operations are disabled.
     */
    isPaused: State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * A boolean flag indicating whether the contract has the ability to be paused.
     * This allows for disabling the pause functionality if desired.
     */
    canPause: State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * Deploys the contract with initial settings.
     * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
     */
    deploy(props: NFTAdminDeployProps): Promise<void>;
    /**
     * Contract events emitted during various operations.
     */
    events: {
        /** Emitted when the verification key is upgraded. */
        upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
        /** Emitted when the contract is paused. */
        pause: typeof PauseEvent;
        /** Emitted when the contract is resumed. */
        resume: typeof PauseEvent;
        /** Emitted when ownership of the contract changes. */
        ownershipChange: typeof OwnershipChangeEvent;
    };
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns A signed `AccountUpdate` from the admin.
     */
    ensureOwnerSignature(): Promise<AccountUpdate>;
    /**
     * Upgrades the contract's verification key after validating with the upgrade authority.
     * @param vk - The new verification key to upgrade to.
     */
    upgradeVerificationKey(vk: VerificationKey): Promise<void>;
    /**
     * Determines whether minting is allowed for the given request.
     * Returns mint parameters if allowed, or none if not allowed.
     * @param mintRequest - The minting request details.
     * @returns A `MintParamsOption` indicating if minting is permitted.
     */
    canMint(mintRequest: MintRequest): Promise<MintParamsOption>;
    /**
     * Checks whether the NFT state can be updated.
     * Typically returns true if the contract is not paused.
     * @param input - The current state of the NFT.
     * @param output - The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is allowed.
     */
    canUpdate(input: NFTState, output: NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * Determines whether a transfer between the specified addresses is permitted.
     * @param address - The NFT contract address.
     * @param from - The sender's public key.
     * @param to - The recipient's public key.
     * @returns A `Bool` indicating whether the transfer is allowed.
     */
    canTransfer(address: PublicKey, from: PublicKey, to: PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * Determines whether the NFT can be listed for sale at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param price - The listing price.
     * @returns A `Bool` indicating whether the sale is permitted.
     */
    canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param buyer - The buyer's public key.
     * @param price - The purchase price.
     * @returns A `Bool` indicating whether the purchase is allowed.
     */
    canBuy(address: PublicKey, seller: PublicKey, buyer: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    /**
     * Pauses the contract, disabling certain administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    pause(): Promise<void>;
    /**
     * Resumes the contract, re-enabling administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    resume(): Promise<void>;
    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the previous owner.
     */
    transferOwnership(newOwner: PublicKey): Promise<PublicKey>;
    canChangeVerificationKey(vk: VerificationKey, address: PublicKey, tokenId: Field): Promise<Bool>;
}
