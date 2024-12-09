import { Field, PublicKey, Signature, SelfProof, UInt32, DynamicProof, Bool, Nullifier, PrivateKey, Provable } from "o1js";
import { Storage } from "./storage/index.js";
import { PublicKeyOption } from "./upgradable.js";
export { ValidatorsList, UpgradeAuthorityDatabase, ValidatorsState, ValidatorsDecision, ValidatorDecisionType, ValidatorsDecisionState, ValidatorsVoting, ValidatorsVotingProof, ValidatorsVotingNativeProof, UpgradeDatabaseState, UpgradeDatabaseStatePacked, ChainId, };
declare const ValidatorsList_base: typeof import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
/**
 * The `ValidatorsList` is an indexed Merkle map used to store the list of validators.
 */
declare class ValidatorsList extends ValidatorsList_base {
}
declare const UpgradeAuthorityDatabase_base: typeof import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
/**
 * The `UpgradeAuthorityDatabase` is an indexed Merkle map used to manage upgrade proposals.
 */
declare class UpgradeAuthorityDatabase extends UpgradeAuthorityDatabase_base {
}
/** Chain IDs following Auro Wallet naming conventions. */
declare const ChainId: {
    "mina:mainnet": import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    "mina:devnet": import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    "zeko:mainnet": import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    "zeko:devnet": import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
};
type ChainId = keyof typeof ChainId;
/** Validator decision types for upgrade proposals. */
declare const ValidatorDecisionType: {
    readonly updateDatabase: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    readonly updateValidatorsList: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
};
type ValidatorDecisionType = keyof typeof ValidatorDecisionType;
declare const ValidatorsState_base: (new (value: {
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    count: UInt32;
}) => {
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    count: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    count: UInt32;
}, {
    chainId: bigint;
    root: bigint;
    count: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    };
} & {
    fromValue: (value: {
        chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: bigint | UInt32;
    }) => {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    };
    toInput: (x: {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    }) => {
        chainId: string;
        root: string;
        count: string;
    };
    fromJSON: (x: {
        chainId: string;
        root: string;
        count: string;
    }) => {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    };
    empty: () => {
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        count: UInt32;
    };
};
/**
 * Represents the state of the validators.
 */
declare class ValidatorsState extends ValidatorsState_base {
    /**
     * Asserts that two `ValidatorsState` instances are equal.
     * @param a First `ValidatorsState` instance.
     * @param b Second `ValidatorsState` instance.
     */
    static assertEquals(a: ValidatorsState, b: ValidatorsState): void;
    /**
     * Computes the hash of the validators state.
     * @returns Hash of the current state.
     */
    hash(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    /**
     * Returns an empty `ValidatorsState`.
     * @returns An empty `ValidatorsState` instance.
     */
    static empty(): ValidatorsState;
}
declare const UpgradeDatabaseStatePacked_base: (new (value: {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    root: bigint;
    storage: {
        url: bigint[];
    };
    nextUpgradeAuthorityX: bigint;
    data: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
        nextUpgradeAuthorityX: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        root: string;
        storage: {
            url: string[];
        };
        nextUpgradeAuthorityX: string;
        data: string;
    };
    fromJSON: (x: {
        root: string;
        storage: {
            url: string[];
        };
        nextUpgradeAuthorityX: string;
        data: string;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        data: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents the packed state of the upgrade database.
 */
declare class UpgradeDatabaseStatePacked extends UpgradeDatabaseStatePacked_base {
}
declare const UpgradeDatabaseState_base: (new (value: {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthority: PublicKeyOption;
    version: UInt32;
    validFrom: UInt32;
}) => {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthority: PublicKeyOption;
    version: UInt32;
    validFrom: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    nextUpgradeAuthority: PublicKeyOption;
    version: UInt32;
    validFrom: UInt32;
}, {
    root: bigint;
    storage: {
        url: bigint[];
    };
    nextUpgradeAuthority: {
        x: bigint;
        isOdd: boolean;
    } | undefined;
    version: bigint;
    validFrom: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    };
} & {
    fromValue: (value: {
        root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
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
        version: bigint | UInt32;
        validFrom: bigint | UInt32;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    };
    toInput: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    }) => {
        root: string;
        storage: {
            url: string[];
        };
        nextUpgradeAuthority: {
            prototype: {
                isSome: boolean;
                value: any;
                assertSome: {};
                orElse: {};
            };
            toFields: {};
            toAuxiliary: {};
            sizeInFields: {};
            check: {};
            toValue: {};
            fromValue: {};
            fromFields: {};
            from: {};
            none: {};
        };
        version: string;
        validFrom: string;
    };
    fromJSON: (x: {
        root: string;
        storage: {
            url: string[];
        };
        nextUpgradeAuthority: {
            prototype: {
                isSome: boolean;
                value: any;
                assertSome: {};
                orElse: {};
            };
            toFields: {};
            toAuxiliary: {};
            sizeInFields: {};
            check: {};
            toValue: {};
            fromValue: {};
            fromFields: {};
            from: {};
            none: {};
        };
        version: string;
        validFrom: string;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    };
    empty: () => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        nextUpgradeAuthority: PublicKeyOption;
        version: UInt32;
        validFrom: UInt32;
    };
};
/**
 * Represents the state of the upgrade database.
 */
declare class UpgradeDatabaseState extends UpgradeDatabaseState_base {
    /**
     * Asserts that two `UpgradeDatabaseState` instances are equal.
     * @param a First `UpgradeDatabaseState` instance.
     * @param b Second `UpgradeDatabaseState` instance.
     */
    static assertEquals(a: UpgradeDatabaseState, b: UpgradeDatabaseState): void;
    /**
     * Returns an empty `UpgradeDatabaseState`.
     * @returns An empty `UpgradeDatabaseState` instance.
     */
    static empty(): UpgradeDatabaseState;
    /**
     * Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.
     * @returns A packed representation of the upgrade database state.
     */
    pack(): UpgradeDatabaseStatePacked;
    /**
     * Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.
     * @param packed The packed upgrade database state.
     * @returns An unpacked `UpgradeDatabaseState` instance.
     */
    static unpack(packed: UpgradeDatabaseStatePacked): UpgradeDatabaseState;
}
declare const ValidatorsDecision_base: (new (value: {
    message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    contractAddress: PublicKey;
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    validators: ValidatorsState;
    upgradeDatabase: UpgradeDatabaseState;
    updateValidatorsList: ValidatorsState;
    expiry: UInt32;
}) => {
    message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    contractAddress: PublicKey;
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    validators: ValidatorsState;
    upgradeDatabase: UpgradeDatabaseState;
    updateValidatorsList: ValidatorsState;
    expiry: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    contractAddress: PublicKey;
    chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    validators: ValidatorsState;
    upgradeDatabase: UpgradeDatabaseState;
    updateValidatorsList: ValidatorsState;
    expiry: UInt32;
}, {
    message: bigint;
    decisionType: bigint;
    contractAddress: {
        x: bigint;
        isOdd: boolean;
    };
    chainId: bigint;
    validators: {
        chainId: bigint;
        root: bigint;
        count: bigint;
    };
    upgradeDatabase: {
        root: bigint;
        storage: {
            url: bigint[];
        };
        nextUpgradeAuthority: {
            x: bigint;
            isOdd: boolean;
        } | undefined;
        version: bigint;
        validFrom: bigint;
    };
    updateValidatorsList: {
        chainId: bigint;
        root: bigint;
        count: bigint;
    };
    expiry: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    };
} & {
    fromValue: (value: {
        message: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState | {
            chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            count: bigint | UInt32;
        };
        upgradeDatabase: UpgradeDatabaseState | {
            root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            storage: Storage | {
                url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
            };
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
            version: bigint | UInt32;
            validFrom: bigint | UInt32;
        };
        updateValidatorsList: ValidatorsState | {
            chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            count: bigint | UInt32;
        };
        expiry: bigint | UInt32;
    }) => {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    };
    toInput: (x: {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    }) => {
        message: string;
        decisionType: string;
        contractAddress: string;
        chainId: string;
        validators: {
            chainId: string;
            root: string;
            count: string;
        };
        upgradeDatabase: {
            root: string;
            storage: {
                url: string[];
            };
            nextUpgradeAuthority: {
                prototype: {
                    isSome: boolean;
                    value: any;
                    assertSome: {};
                    orElse: {};
                };
                toFields: {};
                toAuxiliary: {};
                sizeInFields: {};
                check: {};
                toValue: {};
                fromValue: {};
                fromFields: {};
                from: {};
                none: {};
            };
            version: string;
            validFrom: string;
        };
        updateValidatorsList: {
            chainId: string;
            root: string;
            count: string;
        };
        expiry: string;
    };
    fromJSON: (x: {
        message: string;
        decisionType: string;
        contractAddress: string;
        chainId: string;
        validators: {
            chainId: string;
            root: string;
            count: string;
        };
        upgradeDatabase: {
            root: string;
            storage: {
                url: string[];
            };
            nextUpgradeAuthority: {
                prototype: {
                    isSome: boolean;
                    value: any;
                    assertSome: {};
                    orElse: {};
                };
                toFields: {};
                toAuxiliary: {};
                sizeInFields: {};
                check: {};
                toValue: {};
                fromValue: {};
                fromFields: {};
                from: {};
                none: {};
            };
            version: string;
            validFrom: string;
        };
        updateValidatorsList: {
            chainId: string;
            root: string;
            count: string;
        };
        expiry: string;
    }) => {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    };
    empty: () => {
        message: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        decisionType: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        contractAddress: PublicKey;
        chainId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        validators: ValidatorsState;
        upgradeDatabase: UpgradeDatabaseState;
        updateValidatorsList: ValidatorsState;
        expiry: UInt32;
    };
};
/**
 * Represents a decision made by the validators.
 */
declare class ValidatorsDecision extends ValidatorsDecision_base {
    /**
     * Asserts that two `ValidatorsDecision` instances are equal.
     * @param a First `ValidatorsDecision` instance.
     * @param b Second `ValidatorsDecision` instance.
     */
    static assertEquals(a: ValidatorsDecision, b: ValidatorsDecision): void;
    createNullifierMessage(): Field[];
    createJsonNullifier(params: {
        network: "mainnet" | "testnet";
        privateKey: PrivateKey;
    }): import("node_modules/mina-signer/dist/node/mina-signer/src/types.js").Nullifier;
}
declare const ValidatorsDecisionState_base: (new (value: {
    decision: ValidatorsDecision;
    alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    yesVotes: UInt32;
    noVotes: UInt32;
    abstainVotes: UInt32;
}) => {
    decision: ValidatorsDecision;
    alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    yesVotes: UInt32;
    noVotes: UInt32;
    abstainVotes: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    decision: ValidatorsDecision;
    alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    yesVotes: UInt32;
    noVotes: UInt32;
    abstainVotes: UInt32;
}, {
    decision: {
        message: bigint;
        decisionType: bigint;
        contractAddress: {
            x: bigint;
            isOdd: boolean;
        };
        chainId: bigint;
        validators: {
            chainId: bigint;
            root: bigint;
            count: bigint;
        };
        upgradeDatabase: {
            root: bigint;
            storage: {
                url: bigint[];
            };
            nextUpgradeAuthority: {
                x: bigint;
                isOdd: boolean;
            } | undefined;
            version: bigint;
            validFrom: bigint;
        };
        updateValidatorsList: {
            chainId: bigint;
            root: bigint;
            count: bigint;
        };
        expiry: bigint;
    };
    alreadyVoted: bigint;
    yesVotes: bigint;
    noVotes: bigint;
    abstainVotes: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    };
} & {
    fromValue: (value: {
        decision: ValidatorsDecision | {
            message: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            decisionType: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            contractAddress: PublicKey | {
                x: Field | bigint;
                isOdd: Bool | boolean;
            };
            chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            validators: ValidatorsState | {
                chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                count: bigint | UInt32;
            };
            upgradeDatabase: UpgradeDatabaseState | {
                root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                storage: Storage | {
                    url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
                };
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
                version: bigint | UInt32;
                validFrom: bigint | UInt32;
            };
            updateValidatorsList: ValidatorsState | {
                chainId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                count: bigint | UInt32;
            };
            expiry: bigint | UInt32;
        };
        alreadyVoted: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: bigint | UInt32;
        noVotes: bigint | UInt32;
        abstainVotes: bigint | UInt32;
    }) => {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    };
    toInput: (x: {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    }) => {
        decision: {
            message: string;
            decisionType: string;
            contractAddress: string;
            chainId: string;
            validators: {
                chainId: string;
                root: string;
                count: string;
            };
            upgradeDatabase: {
                root: string;
                storage: {
                    url: string[];
                };
                nextUpgradeAuthority: {
                    prototype: {
                        isSome: boolean;
                        value: any;
                        assertSome: {};
                        orElse: {};
                    };
                    toFields: {};
                    toAuxiliary: {};
                    sizeInFields: {};
                    check: {};
                    toValue: {};
                    fromValue: {};
                    fromFields: {};
                    from: {};
                    none: {};
                };
                version: string;
                validFrom: string;
            };
            updateValidatorsList: {
                chainId: string;
                root: string;
                count: string;
            };
            expiry: string;
        };
        alreadyVoted: string;
        yesVotes: string;
        noVotes: string;
        abstainVotes: string;
    };
    fromJSON: (x: {
        decision: {
            message: string;
            decisionType: string;
            contractAddress: string;
            chainId: string;
            validators: {
                chainId: string;
                root: string;
                count: string;
            };
            upgradeDatabase: {
                root: string;
                storage: {
                    url: string[];
                };
                nextUpgradeAuthority: {
                    prototype: {
                        isSome: boolean;
                        value: any;
                        assertSome: {};
                        orElse: {};
                    };
                    toFields: {};
                    toAuxiliary: {};
                    sizeInFields: {};
                    check: {};
                    toValue: {};
                    fromValue: {};
                    fromFields: {};
                    from: {};
                    none: {};
                };
                version: string;
                validFrom: string;
            };
            updateValidatorsList: {
                chainId: string;
                root: string;
                count: string;
            };
            expiry: string;
        };
        alreadyVoted: string;
        yesVotes: string;
        noVotes: string;
        abstainVotes: string;
    }) => {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    };
    empty: () => {
        decision: ValidatorsDecision;
        alreadyVoted: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        yesVotes: UInt32;
        noVotes: UInt32;
        abstainVotes: UInt32;
    };
};
/**
 * Represents the state of a validators decision during the voting process.
 */
declare class ValidatorsDecisionState extends ValidatorsDecisionState_base {
    static startVoting(decision: ValidatorsDecision): ValidatorsDecisionState;
    /**
     * Records a vote
     * @param validatorNullifier The nullifier of the validator.
     * @param validatorsList The ValidatorsList containing authorized validators.
     * @param votedList The ValidatorsList tracking who has already voted.
     * @param yes Whether this is a "yes" vote.
     * @param no Whether this is a "no" vote.
     * @param abstain Whether this is an "abstain" vote.
     * @param signature The signature of the validator.
     * @returns A new `ValidatorsDecisionState` reflecting the vote.
     */
    vote(validatorNullifier: Nullifier, validatorsList: ValidatorsList, votedList: ValidatorsList, yes: Bool, no: Bool, abstain: Bool, signature: Signature): ValidatorsDecisionState;
    /**
     * Asserts that two `ValidatorsDecisionState` instances are equal.
     * @param a First `ValidatorsDecisionState` instance.
     * @param b Second `ValidatorsDecisionState` instance.
     */
    static assertEquals(a: ValidatorsDecisionState, b: ValidatorsDecisionState): void;
}
/**
 * The `ValidatorsVoting` ZkProgram implements the voting logic for validators.
 */
declare const ValidatorsVoting: {
    name: string;
    compile: (options?: {
        cache?: import("o1js").Cache;
        forceRecompile?: boolean;
        proofsEnabled?: boolean;
    }) => Promise<{
        verificationKey: {
            data: string;
            hash: Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        startVoting: {
            rows: number;
            digest: string;
            gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("node_modules/o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        vote: {
            rows: number;
            digest: string;
            gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("node_modules/o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        merge: {
            rows: number;
            digest: string;
            gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("node_modules/o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof ValidatorsDecisionState;
    publicOutputType: typeof ValidatorsDecisionState;
    privateInputTypes: {
        startVoting: [typeof ValidatorsDecision];
        vote: [typeof ValidatorsDecision, typeof Nullifier, typeof ValidatorsList, typeof ValidatorsList, typeof import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool & ((x: boolean | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool) => import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool), typeof import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool & ((x: boolean | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool) => import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool), typeof import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool & ((x: boolean | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool) => import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool), typeof Signature];
        merge: [typeof SelfProof, typeof SelfProof];
    };
    rawMethods: {
        startVoting: (publicInput: ValidatorsDecisionState, ...args: [ValidatorsDecision] & any[]) => Promise<ValidatorsDecisionState>;
        vote: (publicInput: ValidatorsDecisionState, ...args: [ValidatorsDecision, Nullifier, import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, Signature] & any[]) => Promise<ValidatorsDecisionState>;
        merge: (publicInput: ValidatorsDecisionState, ...args: [SelfProof<unknown, unknown>, SelfProof<unknown, unknown>] & any[]) => Promise<ValidatorsDecisionState>;
    };
    proofsEnabled: boolean;
    setProofsEnabled(proofsEnabled: boolean): void;
} & {
    startVoting: (publicInput: ValidatorsDecisionState, ...args: [ValidatorsDecision] & any[]) => Promise<import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>>;
    vote: (publicInput: ValidatorsDecisionState, ...args: [ValidatorsDecision, Nullifier, import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool, Signature] & any[]) => Promise<import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>>;
    merge: (publicInput: ValidatorsDecisionState, ...args: [SelfProof<unknown, unknown>, SelfProof<unknown, unknown>] & any[]) => Promise<import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>>;
};
declare const ValidatorsVotingNativeProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: ValidatorsDecisionState;
        publicOutput: ValidatorsDecisionState;
        maxProofsVerified: 0 | 2 | 1;
    }): import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>;
    fromJSON<S extends import("node_modules/o1js/dist/node/lib/util/types.js").Subclass<typeof import("o1js").Proof>>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js").JsonProof): Promise<import("o1js").Proof<import("o1js").InferProvable<S["publicInputType"]>, import("o1js").InferProvable<S["publicOutputType"]>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 2 | 1, domainLog2?: number): Promise<import("o1js").Proof<Input, OutPut>>;
    readonly provable: {
        toFields: (value: import("o1js").Proof<any, any>) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
        toAuxiliary: (value?: import("o1js").Proof<any, any> | undefined) => any[];
        fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[], aux: any[]) => import("o1js").Proof<any, any>;
        sizeInFields(): number;
        check: (value: import("o1js").Proof<any, any>) => void;
        toValue: (x: import("o1js").Proof<any, any>) => import("node_modules/o1js/dist/node/lib/proof-system/proof.js").ProofValue<any, any>;
        fromValue: (x: import("o1js").Proof<any, any> | import("node_modules/o1js/dist/node/lib/proof-system/proof.js").ProofValue<any, any>) => import("o1js").Proof<any, any>;
    };
    publicInputType: import("o1js").FlexibleProvablePure<any>;
    publicOutputType: import("o1js").FlexibleProvablePure<any>;
    tag: () => {
        name: string;
    };
    publicFields(value: import("o1js").ProofBase<any, any>): {
        input: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
        output: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
    };
} & {
    provable: Provable<import("o1js").Proof<ValidatorsDecisionState, ValidatorsDecisionState>, import("node_modules/o1js/dist/node/lib/proof-system/proof.js").ProofValue<{
        decision: {
            message: bigint;
            decisionType: bigint;
            contractAddress: {
                x: bigint;
                isOdd: boolean;
            };
            chainId: bigint;
            validators: {
                chainId: bigint;
                root: bigint;
                count: bigint;
            };
            upgradeDatabase: {
                root: bigint;
                storage: {
                    url: bigint[];
                };
                nextUpgradeAuthority: {
                    x: bigint;
                    isOdd: boolean;
                } | undefined;
                version: bigint;
                validFrom: bigint;
            };
            updateValidatorsList: {
                chainId: bigint;
                root: bigint;
                count: bigint;
            };
            expiry: bigint;
        };
        alreadyVoted: bigint;
        yesVotes: bigint;
        noVotes: bigint;
        abstainVotes: bigint;
    }, {
        decision: {
            message: bigint;
            decisionType: bigint;
            contractAddress: {
                x: bigint;
                isOdd: boolean;
            };
            chainId: bigint;
            validators: {
                chainId: bigint;
                root: bigint;
                count: bigint;
            };
            upgradeDatabase: {
                root: bigint;
                storage: {
                    url: bigint[];
                };
                nextUpgradeAuthority: {
                    x: bigint;
                    isOdd: boolean;
                } | undefined;
                version: bigint;
                validFrom: bigint;
            };
            updateValidatorsList: {
                chainId: bigint;
                root: bigint;
                count: bigint;
            };
            expiry: bigint;
        };
        alreadyVoted: bigint;
        yesVotes: bigint;
        noVotes: bigint;
        abstainVotes: bigint;
    }>>;
};
/** Proof classes for the `ValidatorsVoting` ZkProgram. */
declare class ValidatorsVotingNativeProof extends ValidatorsVotingNativeProof_base {
}
declare class ValidatorsVotingProof extends DynamicProof<ValidatorsDecisionState, ValidatorsDecisionState> {
    static publicInputType: typeof ValidatorsDecisionState;
    static publicOutputType: typeof ValidatorsDecisionState;
    static maxProofsVerified: 2;
    static featureFlags: {
        rangeCheck0: undefined;
        rangeCheck1: undefined;
        foreignFieldAdd: undefined;
        foreignFieldMul: undefined;
        xor: undefined;
        rot: undefined;
        lookup: undefined;
        runtimeTables: undefined;
    };
}
