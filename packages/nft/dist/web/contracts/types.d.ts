import { Field, PublicKey, Bool, UInt32, UInt64, DynamicProof, Option, Account } from "o1js";
import { Storage } from "@minatokens/storage";
export { MintParams, MintParamsOption, MintRequest, NFTData, CollectionData, NFTState, NFTImmutableState, NFTUpdateProof, CollectionDataPacked, NFTStateStruct, };
declare const NFTStateStruct_base: (new (value: {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    storage: Storage;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    storage: Storage;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    storage: Storage;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    name: bigint;
    metadata: bigint;
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    storage: {
        url: bigint[];
    };
    packedData: bigint;
    metadataVerificationKeyHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        name: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
        packedData: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: string;
        metadata: string;
        owner: string;
        storage: {
            url: string[];
        };
        packedData: string;
        metadataVerificationKeyHash: string;
    };
    fromJSON: (x: {
        name: string;
        metadata: string;
        owner: string;
        storage: {
            url: string[];
        };
        packedData: string;
        metadataVerificationKeyHash: string;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents the on-chain state structure of an NFT.
 * The order of the fields is important and should match the NFT SmartContract.
 */
declare class NFTStateStruct extends NFTStateStruct_base {
    /**
     * Creates an NFTStateStruct from an account's app state.
     * @param account The account containing the zkApp state.
     * @returns A new NFTStateStruct instance.
     */
    static fromAccount(account: Account): {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        storage: Storage;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    /**
     * Asserts that two NFTStateStruct instances are equal.
     * @param a The first NFTStateStruct instance.
     * @param b The second NFTStateStruct instance.
     */
    static assertEqual(a: NFTStateStruct, b: NFTStateStruct): void;
}
declare const NFTImmutableState_base: (new (value: {
    creator: PublicKey;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    id: UInt32;
}) => {
    creator: PublicKey;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    id: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    creator: PublicKey;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    id: UInt32;
}, {
    creator: {
        x: bigint;
        isOdd: boolean;
    };
    canChangeOwnerByProof: boolean;
    canChangeOwnerBySignature: boolean;
    canChangeMetadata: boolean;
    canChangePrice: boolean;
    canChangeStorage: boolean;
    canChangeName: boolean;
    canChangeMetadataVerificationKeyHash: boolean;
    canPause: boolean;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    id: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    };
} & {
    fromValue: (value: {
        creator: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        canChangeOwnerByProof: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        tokenId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: bigint | UInt32;
    }) => {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    };
    toInput: (x: {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    }) => {
        creator: string;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        address: string;
        tokenId: string;
        id: string;
    };
    fromJSON: (x: {
        creator: string;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        address: string;
        tokenId: string;
        id: string;
    }) => {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    };
    empty: () => {
        creator: PublicKey;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        id: UInt32;
    };
};
/**
 * Represents the immutable state of an NFT, containing read-only properties
 * and flags that determine the NFT's behavior and permissions.
 */
declare class NFTImmutableState extends NFTImmutableState_base {
    /**
     * Asserts that two NFTImmutableState instances are equal.
     * @param a The first NFTImmutableState instance.
     * @param b The second NFTImmutableState instance.
     */
    static assertEqual(a: NFTImmutableState, b: NFTImmutableState): void;
    /**
     * Creates a new NFTImmutableState from NFTData and other parameters.
     * @param params The parameters including nftData, creator, address, and tokenId.
     * @returns A new NFTImmutableState instance.
     */
    static fromNFTData(params: {
        nftData: NFTData;
        creator: PublicKey;
        address: PublicKey;
        tokenId: Field;
    }): NFTImmutableState;
}
declare const NFTState_base: (new (value: {
    immutableState: NFTImmutableState;
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    immutableState: NFTImmutableState;
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    immutableState: NFTImmutableState;
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    owner: PublicKey;
    price: UInt64;
    version: UInt32;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    immutableState: {
        creator: {
            x: bigint;
            isOdd: boolean;
        };
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        id: bigint;
    };
    name: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
    version: bigint;
    isPaused: boolean;
    metadataVerificationKeyHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        immutableState: NFTImmutableState | {
            creator: PublicKey | {
                x: Field | bigint;
                isOdd: Bool | boolean;
            };
            canChangeOwnerByProof: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeOwnerBySignature: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeMetadata: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangePrice: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeStorage: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeName: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeMetadataVerificationKeyHash: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            address: PublicKey | {
                x: Field | bigint;
                isOdd: Bool | boolean;
            };
            tokenId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            id: bigint | UInt32;
        };
        name: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
        owner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
        version: bigint | UInt32;
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        immutableState: {
            creator: string;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            address: string;
            tokenId: string;
            id: string;
        };
        name: string;
        metadata: string;
        storage: {
            url: string[];
        };
        owner: string;
        price: string;
        version: string;
        isPaused: boolean;
        metadataVerificationKeyHash: string;
    };
    fromJSON: (x: {
        immutableState: {
            creator: string;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            address: string;
            tokenId: string;
            id: string;
        };
        name: string;
        metadata: string;
        storage: {
            url: string[];
        };
        owner: string;
        price: string;
        version: string;
        isPaused: boolean;
        metadataVerificationKeyHash: string;
    }) => {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        immutableState: NFTImmutableState;
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        owner: PublicKey;
        price: UInt64;
        version: UInt32;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents the full state of an NFT, including both immutable and mutable properties.
 */
declare class NFTState extends NFTState_base {
    /**
     * Asserts that two NFTState instances are equal.
     * @param a The first NFTState instance.
     * @param b The second NFTState instance.
     */
    static assertEqual(a: NFTState, b: NFTState): void;
    /**
     * Creates a new NFTState from an NFTStateStruct and other parameters.
     * @param params The parameters including nftState, creator, address, and tokenId.
     * @returns A new NFTState instance.
     */
    static fromNFTState(params: {
        nftState: NFTStateStruct;
        creator: PublicKey;
        address: PublicKey;
        tokenId: Field;
    }): NFTState;
}
/**
 * Represents a dynamic proof used for updating the state of an NFT.
 */
declare class NFTUpdateProof extends DynamicProof<NFTState, NFTState> {
    static publicInputType: typeof NFTState;
    static publicOutputType: typeof NFTState;
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
declare const NFTData_base: (new (value: {
    price: UInt64;
    version: UInt32;
    id: UInt32;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    price: UInt64;
    version: UInt32;
    id: UInt32;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    price: UInt64;
    version: UInt32;
    id: UInt32;
    canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    price: bigint;
    version: bigint;
    id: bigint;
    canChangeOwnerByProof: boolean;
    canChangeOwnerBySignature: boolean;
    canChangeMetadata: boolean;
    canChangePrice: boolean;
    canChangeStorage: boolean;
    canChangeName: boolean;
    canChangeMetadataVerificationKeyHash: boolean;
    canPause: boolean;
    isPaused: boolean;
    requireOwnerSignatureToUpgrade: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        price: bigint | UInt64;
        version: bigint | UInt32;
        id: bigint | UInt32;
        canChangeOwnerByProof: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        price: string;
        version: string;
        id: string;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    };
    fromJSON: (x: {
        price: string;
        version: string;
        id: string;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    }) => {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        price: UInt64;
        version: UInt32;
        id: UInt32;
        canChangeOwnerByProof: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeOwnerBySignature: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadata: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangePrice: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeStorage: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeMetadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOwnerSignatureToUpgrade: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Represents the data associated with an NFT, including state and permission flags.
 */
declare class NFTData extends NFTData_base {
    /**
     * Creates a new NFTData instance with optional parameters.
     * @param params The parameters to create the NFTData.
     * @returns A new NFTData instance.
     */
    static new(params?: {
        price?: number;
        version?: number;
        id?: number;
        canChangeOwnerByProof?: boolean;
        canChangeOwnerBySignature?: boolean;
        canChangeMetadata?: boolean;
        canChangePrice?: boolean;
        canChangeStorage?: boolean;
        canChangeName?: boolean;
        canChangeMetadataVerificationKeyHash?: boolean;
        canPause?: boolean;
        isPaused?: boolean;
        requireOwnerSignatureToUpgrade?: boolean;
    }): NFTData;
    /**
     * Packs the NFTData into a single Field for efficient storage.
     * @returns The packed Field representation of the NFTData.
     */
    pack(): Field;
    /**
     * Unpacks a Field into an NFTData instance.
     * @param packed The packed Field representation of the NFTData.
     * @returns A new NFTData instance.
     */
    static unpack(packed: Field): NFTData;
}
declare const CollectionDataPacked_base: (new (value: {
    upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    upgradeAuthorityX: bigint;
    packedData: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        upgradeAuthorityX: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        upgradeAuthorityX: string;
        packedData: string;
    };
    fromJSON: (x: {
        upgradeAuthorityX: string;
        packedData: string;
    }) => {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        upgradeAuthorityX: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        packedData: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Represents the packed collection data, including the upgrade authority's x-coordinate and packed data fields.
 */
declare class CollectionDataPacked extends CollectionDataPacked_base {
}
declare const CollectionData_base: (new (value: {
    upgradeAuthority: PublicKey;
    royaltyFee: UInt32;
    transferFee: UInt64;
    requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    upgradeAuthority: PublicKey;
    royaltyFee: UInt32;
    transferFee: UInt64;
    requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    upgradeAuthority: PublicKey;
    royaltyFee: UInt32;
    transferFee: UInt64;
    requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    upgradeAuthority: {
        x: bigint;
        isOdd: boolean;
    };
    royaltyFee: bigint;
    transferFee: bigint;
    requireTransferApproval: boolean;
    requireUpdateApproval: boolean;
    requireOfferApproval: boolean;
    requireSaleApproval: boolean;
    requireBuyApproval: boolean;
    requireCreatorSignatureToUpgradeCollection: boolean;
    requireCreatorSignatureToUpgradeNFT: boolean;
    canMint: boolean;
    canPause: boolean;
    canChangeName: boolean;
    canChangeCreator: boolean;
    canChangeBaseUri: boolean;
    canChangeRoyalty: boolean;
    canChangeTransferFee: boolean;
    canSetAdmin: boolean;
    isPaused: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        upgradeAuthority: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        royaltyFee: bigint | UInt32;
        transferFee: bigint | UInt64;
        requireTransferApproval: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        upgradeAuthority: string;
        royaltyFee: string;
        transferFee: string;
        requireTransferApproval: boolean;
        requireUpdateApproval: boolean;
        requireOfferApproval: boolean;
        requireSaleApproval: boolean;
        requireBuyApproval: boolean;
        requireCreatorSignatureToUpgradeCollection: boolean;
        requireCreatorSignatureToUpgradeNFT: boolean;
        canMint: boolean;
        canPause: boolean;
        canChangeName: boolean;
        canChangeCreator: boolean;
        canChangeBaseUri: boolean;
        canChangeRoyalty: boolean;
        canChangeTransferFee: boolean;
        canSetAdmin: boolean;
        isPaused: boolean;
    };
    fromJSON: (x: {
        upgradeAuthority: string;
        royaltyFee: string;
        transferFee: string;
        requireTransferApproval: boolean;
        requireUpdateApproval: boolean;
        requireOfferApproval: boolean;
        requireSaleApproval: boolean;
        requireBuyApproval: boolean;
        requireCreatorSignatureToUpgradeCollection: boolean;
        requireCreatorSignatureToUpgradeNFT: boolean;
        canMint: boolean;
        canPause: boolean;
        canChangeName: boolean;
        canChangeCreator: boolean;
        canChangeBaseUri: boolean;
        canChangeRoyalty: boolean;
        canChangeTransferFee: boolean;
        canSetAdmin: boolean;
        isPaused: boolean;
    }) => {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        upgradeAuthority: PublicKey;
        royaltyFee: UInt32;
        transferFee: UInt64;
        requireTransferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireUpdateApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireOfferApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireSaleApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireBuyApproval: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeCollection: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        requireCreatorSignatureToUpgradeNFT: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeName: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeCreator: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeBaseUri: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeRoyalty: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canChangeTransferFee: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        canSetAdmin: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Represents the data associated with an NFT collection, including configuration parameters and permission flags.
 */
declare class CollectionData extends CollectionData_base {
    /**
     * Creates a new CollectionData instance with specified parameters.
     * @param params The parameters to create the CollectionData.
     * @returns A new CollectionData instance.
     */
    static new(params: {
        upgradeAuthority?: PublicKey;
        royaltyFee?: number;
        transferFee?: number;
        requireTransferApproval?: boolean;
        requireUpdateApproval?: boolean;
        requireOfferApproval?: boolean;
        requireSaleApproval?: boolean;
        requireBuyApproval?: boolean;
        requireCreatorSignatureToUpgradeCollection?: boolean;
        requireCreatorSignatureToUpgradeNFT?: boolean;
        canMint?: boolean;
        canChangeName?: boolean;
        canChangeCreator?: boolean;
        canChangeBaseUri?: boolean;
        canChangeRoyalty?: boolean;
        canChangeTransferFee?: boolean;
        canSetAdmin?: boolean;
        canPause?: boolean;
        isPaused?: boolean;
    }): CollectionData;
    /**
     * Packs the CollectionData into a CollectionDataPacked representation for efficient storage.
     * @returns The packed CollectionDataPacked instance.
     */
    pack(): CollectionDataPacked;
    /**
     * Unpacks a CollectionDataPacked instance into a CollectionData instance.
     * @param packed The packed CollectionDataPacked instance.
     * @returns A new CollectionData instance.
     */
    static unpack(packed: CollectionDataPacked): CollectionData;
}
declare const MintParams_base: (new (value: {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    data: NFTData;
    fee: UInt64;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    expiry: UInt32;
}) => {
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    data: NFTData;
    fee: UInt64;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    expiry: UInt32;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    address: PublicKey;
    tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    owner: PublicKey;
    data: NFTData;
    fee: UInt64;
    metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
    metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    expiry: UInt32;
}, {
    name: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    data: {
        price: bigint;
        version: bigint;
        id: bigint;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    };
    fee: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    metadataVerificationKeyHash: bigint;
    expiry: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    };
} & {
    fromValue: (value: {
        name: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        tokenId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        data: NFTData | {
            price: bigint | UInt64;
            version: bigint | UInt32;
            id: bigint | UInt32;
            canChangeOwnerByProof: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeOwnerBySignature: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeMetadata: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangePrice: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeStorage: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeName: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canChangeMetadataVerificationKeyHash: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            requireOwnerSignatureToUpgrade: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        };
        fee: bigint | UInt64;
        metadata: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
        metadataVerificationKeyHash: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: bigint | UInt32;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    };
    toInput: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    }) => {
        name: string;
        address: string;
        tokenId: string;
        owner: string;
        data: {
            price: string;
            version: string;
            id: string;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: string;
        metadata: string;
        storage: {
            url: string[];
        };
        metadataVerificationKeyHash: string;
        expiry: string;
    };
    fromJSON: (x: {
        name: string;
        address: string;
        tokenId: string;
        owner: string;
        data: {
            price: string;
            version: string;
            id: string;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: string;
        metadata: string;
        storage: {
            url: string[];
        };
        metadataVerificationKeyHash: string;
        expiry: string;
    }) => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    };
    empty: () => {
        name: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        address: PublicKey;
        tokenId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        owner: PublicKey;
        data: NFTData;
        fee: UInt64;
        metadata: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
        metadataVerificationKeyHash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        expiry: UInt32;
    };
};
/**
 * Represents the parameters required for minting a new NFT.
 */
declare class MintParams extends MintParams_base {
}
declare const MintParamsOption_base: Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<Option<MintParams, {
    name: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    data: {
        price: bigint;
        version: bigint;
        id: bigint;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    };
    fee: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    metadataVerificationKeyHash: bigint;
    expiry: bigint;
}>, {
    name: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    data: {
        price: bigint;
        version: bigint;
        id: bigint;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    };
    fee: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    metadataVerificationKeyHash: bigint;
    expiry: bigint;
} | undefined>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => Option<MintParams, {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    }>;
} & (new (option: {
    isSome: Bool;
    value: MintParams;
}) => Option<MintParams, {
    name: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
    tokenId: bigint;
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    data: {
        price: bigint;
        version: bigint;
        id: bigint;
        canChangeOwnerByProof: boolean;
        canChangeOwnerBySignature: boolean;
        canChangeMetadata: boolean;
        canChangePrice: boolean;
        canChangeStorage: boolean;
        canChangeName: boolean;
        canChangeMetadataVerificationKeyHash: boolean;
        canPause: boolean;
        isPaused: boolean;
        requireOwnerSignatureToUpgrade: boolean;
    };
    fee: bigint;
    metadata: bigint;
    storage: {
        url: bigint[];
    };
    metadataVerificationKeyHash: bigint;
    expiry: bigint;
}>) & {
    fromValue(value: MintParams | {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    } | {
        isSome: boolean | Bool;
        value: MintParams | {
            name: bigint;
            address: {
                x: bigint;
                isOdd: boolean;
            };
            tokenId: bigint;
            owner: {
                x: bigint;
                isOdd: boolean;
            };
            data: {
                price: bigint;
                version: bigint;
                id: bigint;
                canChangeOwnerByProof: boolean;
                canChangeOwnerBySignature: boolean;
                canChangeMetadata: boolean;
                canChangePrice: boolean;
                canChangeStorage: boolean;
                canChangeName: boolean;
                canChangeMetadataVerificationKeyHash: boolean;
                canPause: boolean;
                isPaused: boolean;
                requireOwnerSignatureToUpgrade: boolean;
            };
            fee: bigint;
            metadata: bigint;
            storage: {
                url: bigint[];
            };
            metadataVerificationKeyHash: bigint;
            expiry: bigint;
        };
    } | undefined): Option<MintParams, {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    }>;
    from(value?: MintParams | {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    } | undefined): Option<MintParams, {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    }>;
    none(): Option<MintParams, {
        name: bigint;
        address: {
            x: bigint;
            isOdd: boolean;
        };
        tokenId: bigint;
        owner: {
            x: bigint;
            isOdd: boolean;
        };
        data: {
            price: bigint;
            version: bigint;
            id: bigint;
            canChangeOwnerByProof: boolean;
            canChangeOwnerBySignature: boolean;
            canChangeMetadata: boolean;
            canChangePrice: boolean;
            canChangeStorage: boolean;
            canChangeName: boolean;
            canChangeMetadataVerificationKeyHash: boolean;
            canPause: boolean;
            isPaused: boolean;
            requireOwnerSignatureToUpgrade: boolean;
        };
        fee: bigint;
        metadata: bigint;
        storage: {
            url: bigint[];
        };
        metadataVerificationKeyHash: bigint;
        expiry: bigint;
    }>;
};
/**
 * Represents an optional MintParams, used in scenarios where minting may or may not be allowed.
 */
declare class MintParamsOption extends MintParamsOption_base {
}
declare const MintRequest_base: (new (value: {
    address: PublicKey;
    owner: PublicKey;
    customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    address: PublicKey;
    owner: PublicKey;
    customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    address: PublicKey;
    owner: PublicKey;
    customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    address: {
        x: bigint;
        isOdd: boolean;
    };
    owner: {
        x: bigint;
        isOdd: boolean;
    };
    customId: bigint;
    customFlag: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        owner: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        customId: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        address: string;
        owner: string;
        customId: string;
        customFlag: boolean;
    };
    fromJSON: (x: {
        address: string;
        owner: string;
        customId: string;
        customFlag: boolean;
    }) => {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        address: PublicKey;
        owner: PublicKey;
        customId: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        customFlag: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Represents a request to mint a new NFT, used by the admin contract to determine if minting is allowed.
 */
declare class MintRequest extends MintRequest_base {
}
