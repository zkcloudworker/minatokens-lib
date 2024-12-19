import { SmartContract, State, VerificationKey, Field, UInt32 } from "o1js";
import { IndexedMapSerialized, Storage } from "@minatokens/storage";
import { UpgradeAuthorityBase, VerificationKeyUpgradeData, UpgradeAuthorityAnswer } from "./upgradable.js";
import { UpgradeAuthorityDatabase, ValidatorsState, UpgradeDatabaseState, ValidatorsVotingProof, UpgradeDatabaseStatePacked } from "./validators.js";
export { VerificationKeyUpgradeAuthority, UpgradeAuthorityDatabase, ValidatorsListEvent, ValidatorsListData, };
/**
 * Interface representing the data for a list of validators.
 */
interface ValidatorsListData {
    validators: {
        publicKey: string;
        authorizedToVote: boolean;
    }[];
    validatorsCount: number;
    root: string;
    map: IndexedMapSerialized;
}
declare const ValidatorsListEvent_base: (new (value: {
    validators: ValidatorsState;
    storage: Storage;
}) => {
    validators: ValidatorsState;
    storage: Storage;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    validators: ValidatorsState;
    storage: Storage;
}, {
    validators: {
        chainId: bigint;
        root: bigint;
        count: bigint;
    };
    storage: {
        url: bigint[];
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        validators: ValidatorsState;
        storage: Storage;
    };
} & {
    fromValue: (value: {
        validators: ValidatorsState | {
            chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            count: bigint | UInt32;
        };
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
    }) => {
        validators: ValidatorsState;
        storage: Storage;
    };
    toInput: (x: {
        validators: ValidatorsState;
        storage: Storage;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        validators: ValidatorsState;
        storage: Storage;
    }) => {
        validators: {
            chainId: string;
            root: string;
            count: string;
        };
        storage: {
            url: string[];
        };
    };
    fromJSON: (x: {
        validators: {
            chainId: string;
            root: string;
            count: string;
        };
        storage: {
            url: string[];
        };
    }) => {
        validators: ValidatorsState;
        storage: Storage;
    };
    empty: () => {
        validators: ValidatorsState;
        storage: Storage;
    };
};
/**
 * Event emitted when the validators list is updated.
 */
declare class ValidatorsListEvent extends ValidatorsListEvent_base {
}
/**
 * **VerificationKeyUpgradeAuthority** is a smart contract that provides a secure mechanism
 * for upgrading the verification keys of other contracts without requiring redeployment.
 * It manages a list of validators who can vote on upgrade proposals, ensuring that only
 * authorized upgrades are applied.
 *
 * **Key Features:**
 * - **Verification Key Management**: Allows for secure upgrades of verification keys for other contracts.
 * - **Validators Governance**: Maintains a list of authorized validators who can vote on upgrade proposals.
 * - **Secure Voting Mechanism**: Implements Zero-Knowledge proofs to validate votes from validators without revealing sensitive information.
 * - **Upgrade Database Management**: Keeps track of upgrade proposals and their validity periods.
 * - **Event Emissions**: Emits events when validators list or upgrade database is updated.
 */
declare class VerificationKeyUpgradeAuthority extends SmartContract implements UpgradeAuthorityBase {
    /**
     * The hash of the verification key.
     * @type {State<Field>}
     */
    verificationKeyHash: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /**
     * The hash representing the current state of the validators list.
     * @type {State<Field>}
     */
    validators: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /**
     * Packed state containing the upgrade database information.
     * @type {State<UpgradeDatabaseStatePacked>}
     */
    upgradeDatabasePacked: State<UpgradeDatabaseStatePacked>;
    /**
     * The events emitted by the VerificationKeyUpgradeAuthority contract.
     */
    events: {
        validatorsList: typeof ValidatorsListEvent;
        updateDatabase: typeof UpgradeDatabaseState;
    };
    /**
     * Deploys the contract and sets the initial state.
     */
    deploy(): Promise<void>;
    /**
     * Initializes the contract with validators and sets the verification key hash.
     *
     * @param {ValidatorsState} validators - The initial validators state.
     * @param {Storage} storage - Off-chain storage information, e.g., IPFS hash.
     * @param {Field} verificationKeyHash - The hash of the verification key.
     */
    initialize(validators: ValidatorsState, storage: Storage, verificationKeyHash: Field): Promise<void>;
    /**
     * Sets the validators list and emits an event.
     *
     * @param {ValidatorsState} validators - The validators state to set.
     * @param {Storage} storage - The storage associated with the validators list.
     */
    setValidatorsList(validators: ValidatorsState, storage: Storage): Promise<void>;
    /**
     * Verifies the upgrade data provided by another contract.
     *
     * @param {VerificationKeyUpgradeData} data - The upgrade data to verify.
     * @returns {Promise<UpgradeAuthorityAnswer>} - The answer indicating verification result.
     */
    verifyUpgradeData(data: VerificationKeyUpgradeData): Promise<UpgradeAuthorityAnswer>;
    /**
     * Updates the upgrade database after validator consensus.
     *
     * @param {ValidatorsVotingProof} proof - The proof of validators voting.
     * @param {VerificationKey} vk - The verification key to validate the proof.
     */
    updateDatabase(proof: ValidatorsVotingProof, vk: VerificationKey, validators: ValidatorsState): Promise<void>;
    /**
     * Updates the validators list based on validator votes.
     *
     * @param {ValidatorsState} validators - The new validators state.
     * @param {Storage} storage - The storage associated with the validators list.
     * @param {ValidatorsVotingProof} proof - The proof of validators voting.
     * @param {VerificationKey} vk - The verification key to validate the proof.
     */
    updateValidatorsList(validators: ValidatorsState, storage: Storage, proof: ValidatorsVotingProof, vk: VerificationKey): Promise<void>;
    /**
     * Checks the validators' decision by verifying the provided proof.
     *
     * @param {ValidatorsVotingProof} proof - The proof to verify.
     * @param {VerificationKey} vk - The verification key to validate the proof.
     * @param {Field} decisionType - The type of decision being validated.
     */
    checkValidatorsDecision(proof: ValidatorsVotingProof, vk: VerificationKey, decisionType: Field, validatorsState: ValidatorsState): Promise<void>;
}
