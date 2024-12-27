import { Field, PublicKey, SmartContract, State, VerificationKey, UInt64, AccountUpdate } from "o1js";
import { Storage } from "@minatokens/storage";
import { NFTState, UpdateEvent, TransferEvent, OfferEvent, BuyEvent, UpgradeVerificationKeyEvent, PausableContract, PauseEvent, OwnershipChangeEvent } from "../interfaces/index.js";
export { NFT };
/**
 * The NFT Contract represents an individual NFT within a collection.
 *
 * It manages the state and behavior of a single NFT, including ownership, metadata,
 * storage, pricing, and permissions. The contract provides functionality for updating
 * NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
 * upgrading the verification key, and pausing or resuming the NFT.
 */
declare class NFT extends SmartContract implements PausableContract {
    /** The name of the NFT (`Field`). */
    name: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** The metadata associated with the NFT (`Field`). */
    metadata: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** The current owner of the NFT (`PublicKey`). */
    owner: State<PublicKey>;
    /** Holds off-chain storage information, e.g., IPFS hash (`Storage`). */
    storage: State<Storage>;
    /** A packed field containing additional NFT data and flags (`Field`). */
    packedData: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** The hash of the verification key used for metadata proofs (`Field`). */
    metadataVerificationKeyHash: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /** Events emitted by the NFT contract. */
    events: {
        update: typeof UpdateEvent;
        transfer: typeof TransferEvent;
        offer: typeof OfferEvent;
        buy: typeof BuyEvent;
        upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
        pause: typeof PauseEvent;
        resume: typeof PauseEvent;
        ownershipChange: typeof OwnershipChangeEvent;
    };
    /**
     * Ensures that the transaction is authorized by the current owner.
     *
     * @returns A signed account update for the owner.
     */
    ensureOwnerSignature(): Promise<AccountUpdate>;
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
     * Lists the NFT for sale at a specified price.
     *
     * @param price - The price at which to sell the NFT (`UInt64`).
     * @param seller - The public key of the seller (`PublicKey`).
     * @returns An event emitted after the NFT is listed for sale (`SellEvent`).
     */
    offer(price: UInt64, seller: PublicKey): Promise<OfferEvent>;
    /**
     * Purchases the NFT, transferring ownership and handling payment.
     *
     * @param price - The price at which to buy the NFT (`UInt64`).
     * @param buyer - The public key of the buyer (`PublicKey`).
     * @returns An event emitted after the NFT is purchased (`BuyEvent`).
     */
    buy(price: UInt64, buyer: PublicKey): Promise<BuyEvent>;
    /**
     * Transfers ownership of the NFT from one user to another.
     *
     * @param from - The public key of the current owner (`PublicKey`).
     * @param to - The public key of the new owner (`PublicKey`).
     * @returns The public key of the old owner (`PublicKey`).
     */
    transfer(from: PublicKey, to: PublicKey): Promise<void>;
    /**
     * Upgrades the verification key used by the NFT contract.
     *
     * @param vk - The new verification key (`VerificationKey`).
     * @param sender - The public key of the sender (`PublicKey`).
     * @returns An event emitted after the verification key is upgraded (`UpgradeVerificationKeyEvent`).
     */
    upgradeVerificationKey(vk: VerificationKey, sender: PublicKey): Promise<UpgradeVerificationKeyEvent>;
    /**
     * Pauses the NFT, disabling certain actions.
     *
     * @returns A promise that resolves when the NFT is paused.
     */
    pause(): Promise<void>;
    /**
     * Resumes the NFT, re-enabling actions.
     *
     * @returns A promise that resolves when the NFT is resumed.
     */
    resume(): Promise<void>;
}
