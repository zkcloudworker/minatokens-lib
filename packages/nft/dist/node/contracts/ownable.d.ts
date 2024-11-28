import { PublicKey, SmartContract, Field, Bool, AccountUpdate } from "o1js";
/**
 * Interface representing ownable functionality for smart contracts.
 *
 * The `OwnableContract` interface extends `SmartContract` and provides methods to ensure that only the owner
 * can perform certain actions and to allow the transfer of ownership to a new owner.
 *
 * By implementing the Ownable interface, contracts can secure critical operations and provide a transparent
 * mechanism for ownership management.
 *
 * @interface
 */
export type OwnableContract = SmartContract & {
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * Typically used to restrict access to sensitive functions.
     *
     * @returns {Promise<AccountUpdate>} A promise that resolves to an `AccountUpdate`, representing the action of ensuring the owner's signature.
     */
    ensureOwnerSignature(): Promise<AccountUpdate>;
    /**
     * Transfers ownership of the contract to a new owner.
     *
     * @param {PublicKey} newOwner - The public key of the new owner.
     * @returns {Promise<PublicKey>} A promise that resolves to the public key of the old owner.
     */
    transferOwnership(newOwner: PublicKey): Promise<PublicKey>;
};
declare const OwnershipChangeEvent_base: (new (value: {
    oldOwner: PublicKey;
    newOwner: PublicKey;
}) => {
    oldOwner: PublicKey;
    newOwner: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    oldOwner: PublicKey;
    newOwner: PublicKey;
}, {
    oldOwner: {
        x: bigint;
        isOdd: boolean;
    };
    newOwner: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    };
} & {
    fromValue: (value: {
        oldOwner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        newOwner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    };
    toInput: (x: {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    }) => {
        oldOwner: string;
        newOwner: string;
    };
    fromJSON: (x: {
        oldOwner: string;
        newOwner: string;
    }) => {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    };
    empty: () => {
        oldOwner: PublicKey;
        newOwner: PublicKey;
    };
};
/**
 * Event emitted when the ownership of the contract changes.
 *
 * Contains the old owner's and new owner's public keys.
 */
export declare class OwnershipChangeEvent extends OwnershipChangeEvent_base {
}
export {};
