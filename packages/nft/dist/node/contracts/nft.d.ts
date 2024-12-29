import { Field, PublicKey, SmartContract, State, VerificationKey } from "o1js";
import { Storage } from "@minatokens/storage";
import { NFTDataPacked, NFTState, UpdateEvent, TransferEvent, UpgradeVerificationKeyEvent, PauseEvent, OwnershipChangeEvent, UpgradeVerificationKeyData } from "../interfaces/index.js";
export { NFT };
/**
 * The NFT Contract represents an individual NFT within a collection.
 *
 * It manages the state and behavior of a single NFT, including ownership, metadata,
 * storage, pricing, and permissions. The contract provides functionality for updating
 * NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
 * upgrading the verification key, and pausing or resuming the NFT.
 */
declare class NFT extends SmartContract {
    /** The name of the NFT (`Field`). */
    name: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** The metadata associated with the NFT (`Field`). */
    metadata: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** Holds off-chain storage information, e.g., IPFS hash (`Storage`). */
    storage: State<Storage>;
    /** A packed field containing additional NFT data and flags (`Field`). */
    packedData: State<NFTDataPacked>;
    /** The hash of the verification key used for metadata proofs (`Field`). */
    metadataVerificationKeyHash: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** Events emitted by the NFT contract. */
    events: {
        update: typeof UpdateEvent;
        transfer: typeof OwnershipChangeEvent;
        approve: typeof PublicKey;
        upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
        pause: typeof PauseEvent;
        resume: typeof PauseEvent;
    };
    /**
     * Updates the NFT's state with provided proofs and permissions.
     *
     * @param input - The current state of the NFT (`NFTState`).
     * @param output - The desired new state of the NFT (`NFTState`).
     * @param creator - The public key of the creator (`PublicKey`).
     * @returns The hash of the metadata verification key (`Field`).
     */
    update(input: NFTState, output: NFTState, creator: PublicKey): Promise<Field>;
    /**
     * Transfers ownership of the NFT from one user to another.
     *
     * @param from - The public key of the current owner (`PublicKey`) or approved address.
     * @param to - The public key of the new owner (`PublicKey`).
     * @returns The public key of the old owner (`PublicKey`).
     */
    transfer(transferEvent: TransferEvent): Promise<TransferEvent>;
    /**
     * Transfers ownership of the NFT from one user to another.
     *
     * @param approved - The public key of the approved address (`PublicKey`).
     * @returns The public key of the owner (`PublicKey`).
     */
    approveAddress(approved: PublicKey): Promise<PublicKey>;
    /**
     * Upgrades the verification key used by the NFT contract.
     *
     * @param vk - The new verification key (`VerificationKey`).
     * @returns An owner public key to be checked by the Collection contract and the Boolean flag indicating if the owner's authorization is required
     */
    upgradeVerificationKey(vk: VerificationKey): Promise<UpgradeVerificationKeyData>;
    /**
     * Pauses the NFT, disabling certain actions.
     *
     * @returns An owner public key to be checked by the Collection contract
     */
    pause(): Promise<PublicKey>;
    /**
     * Resumes the NFT, re-enabling actions.
     *
     * @returns An owner public key to be checked by the Collection contract
     */
    resume(): Promise<PublicKey>;
}
