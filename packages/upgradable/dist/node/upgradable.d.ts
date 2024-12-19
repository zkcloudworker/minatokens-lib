import { Bool, PublicKey, SmartContract, VerificationKey, Field, Option } from "o1js";
export { UpgradeAuthorityBase, VerificationKeyUpgradeData, UpgradeAuthorityContractConstructor, UpgradableContract, PublicKeyOption, UpgradeAuthorityAnswer, };
declare const VerificationKeyUpgradeData_base: (new (value: {
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    previousVerificationKeyHash: bigint;
    newVerificationKeyHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        tokenId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        address: string;
        tokenId: string;
        previousVerificationKeyHash: string;
        newVerificationKeyHash: string;
    };
    fromJSON: (x: {
        address: string;
        tokenId: string;
        previousVerificationKeyHash: string;
        newVerificationKeyHash: string;
    }) => {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        previousVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        newVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents the data required to upgrade a contract's verification key.
 * It includes the contract's address, token ID, previous verification key hash,
 * and the new verification key hash. This class also provides a `hash()` method
 * to generate a unique identifier for the upgrade data.
 */
declare class VerificationKeyUpgradeData extends VerificationKeyUpgradeData_base {
    /**
     * Generates a unique hash for the upgrade data using the Poseidon hash function.
     * @returns {Field} The hash representing the upgrade data.
     */
    hash(): Field;
}
declare const PublicKeyOption_base: Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<Option<PublicKey, {
    x: bigint;
    isOdd: boolean;
}>, {
    x: bigint;
    isOdd: boolean;
} | undefined>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => Option<PublicKey, {
        x: bigint;
        isOdd: boolean;
    }>;
} & (new (option: {
    isSome: Bool;
    value: PublicKey;
}) => Option<PublicKey, {
    x: bigint;
    isOdd: boolean;
}>) & {
    fromValue(value: PublicKey | {
        x: bigint;
        isOdd: boolean;
    } | {
        isSome: boolean | Bool;
        value: PublicKey | {
            x: bigint;
            isOdd: boolean;
        };
    } | undefined): Option<PublicKey, {
        x: bigint;
        isOdd: boolean;
    }>;
    from(value?: PublicKey | {
        x: bigint;
        isOdd: boolean;
    } | undefined): Option<PublicKey, {
        x: bigint;
        isOdd: boolean;
    }>;
    none(): Option<PublicKey, {
        x: bigint;
        isOdd: boolean;
    }>;
};
/**
 * An optional `PublicKey` type, used to specify the next upgrade authority if needed.
 * This is crucial when the current upgrade authority cannot be used in future upgrades
 * due to changes in the o1js version or other factors.
 */
declare class PublicKeyOption extends PublicKeyOption_base {
}
declare const UpgradeAuthorityAnswer_base: (new (value: {
    nextUpgradeAuthority: PublicKeyOption;
    isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    nextUpgradeAuthority: PublicKeyOption;
    isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    nextUpgradeAuthority: PublicKeyOption;
    isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    nextUpgradeAuthority: {
        x: bigint;
        isOdd: boolean;
    } | undefined;
    isVerified: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        nextUpgradeAuthority: PublicKey | {
            x: bigint;
            isOdd: boolean;
        } | PublicKeyOption | {
            isSome: boolean | Bool;
            value: PublicKey | {
                x: bigint;
                isOdd: boolean;
            };
        } | undefined;
        isVerified: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        nextUpgradeAuthority: {
            prototype: {
                isSome: boolean;
                value: any;
                assertSome: {};
                assertNone: {};
                orElse: {};
            };
            toFields: {};
            toAuxiliary: {};
            sizeInFields: {};
            check: {};
            toValue: {};
            fromValue: {};
            toCanonical?: {} | null | undefined;
            fromFields: {};
            from: {};
            none: {};
        };
        isVerified: boolean;
    };
    fromJSON: (x: {
        nextUpgradeAuthority: {
            prototype: {
                isSome: boolean;
                value: any;
                assertSome: {};
                assertNone: {};
                orElse: {};
            };
            toFields: {};
            toAuxiliary: {};
            sizeInFields: {};
            check: {};
            toValue: {};
            fromValue: {};
            toCanonical?: {} | null | undefined;
            fromFields: {};
            from: {};
            none: {};
        };
        isVerified: boolean;
    }) => {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        nextUpgradeAuthority: PublicKeyOption;
        isVerified: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Represents the response from the upgrade authority after verifying the upgrade data.
 * It contains the next upgrade authority's public key if a change is required, and a boolean
 * indicating whether the upgrade data has been successfully verified.
 */
declare class UpgradeAuthorityAnswer extends UpgradeAuthorityAnswer_base {
}
/**
 * Interface that any upgrade authority contract should implement.
 * Extends `SmartContract` and requires the implementation of the `verifyUpgradeData()` method,
 * which takes `VerificationKeyUpgradeData` as input and returns an `UpgradeAuthorityAnswer`.
 */
type UpgradeAuthorityBase = SmartContract & {
    /**
     * Verifies the upgrade data for upgrading a contract's verification key.
     * @param {VerificationKeyUpgradeData} data - The data required for verification.
     * @returns {Promise<UpgradeAuthorityAnswer>} The result of the verification.
     */
    verifyUpgradeData(data: VerificationKeyUpgradeData): Promise<UpgradeAuthorityAnswer>;
};
/**
 * Interface for contracts that can be upgraded.
 * Extends `SmartContract` and requires methods to retrieve the associated upgrade authority contract
 * and to upgrade the contract's verification key using the provided verification key.
 */
type UpgradableContract = SmartContract & {
    /**
     * Retrieves the associated upgrade authority contract.
     * @returns {Promise<UpgradeAuthorityBase>} The upgrade authority contract.
     */
    getUpgradeContract(): Promise<UpgradeAuthorityBase>;
    /**
     * Upgrades the contract's verification key using the provided verification key.
     * @param {VerificationKey} vk - The new verification key.
     * @returns {Promise<void>}
     */
    upgradeVerificationKey(vk: VerificationKey): Promise<void>;
};
/**
 * Defines a constructor for contracts implementing `UpgradeAuthorityBase`,
 * accepting an `upgradeAuthority` public key and returning an instance of `UpgradeAuthorityBase`.
 */
type UpgradeAuthorityContractConstructor = new (upgradeAuthority: PublicKey) => UpgradeAuthorityBase;
