import { Field, Option, Bool } from "o1js";
import { IndexedMapSerialized } from "../indexed-map/indexed-map.js";
import { Storage, IpfsHash } from "../storage/storage.js";
declare const OffchainMap_base: typeof import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
/** Represents the Offchain Map using an Indexed Merkle Map. */
export declare class OffchainMap extends OffchainMap_base {
}
declare const OffchainMapOption_base: import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<Option<import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, {
    root: bigint;
    length: bigint;
    data: {
        nodes: (bigint | undefined)[][];
        sortedLeaves: {
            readonly value: bigint;
            readonly key: bigint;
            readonly nextKey: bigint;
            readonly index: number;
        }[];
    };
}>, {
    root: bigint;
    length: bigint;
    data: {
        nodes: (bigint | undefined)[][];
        sortedLeaves: {
            readonly value: bigint;
            readonly key: bigint;
            readonly nextKey: bigint;
            readonly index: number;
        }[];
    };
} | undefined> & (new (option: {
    isSome: Bool;
    value: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
}) => Option<import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, {
    root: bigint;
    length: bigint;
    data: {
        nodes: (bigint | undefined)[][];
        sortedLeaves: {
            readonly value: bigint;
            readonly key: bigint;
            readonly nextKey: bigint;
            readonly index: number;
        }[];
    };
}>) & {
    fromValue(value: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase | {
        root: bigint;
        length: bigint;
        data: {
            nodes: (bigint | undefined)[][];
            sortedLeaves: {
                readonly value: bigint;
                readonly key: bigint;
                readonly nextKey: bigint;
                readonly index: number;
            }[];
        };
    } | {
        isSome: boolean | Bool;
        value: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase | {
            root: bigint;
            length: bigint;
            data: {
                nodes: (bigint | undefined)[][];
                sortedLeaves: {
                    readonly value: bigint;
                    readonly key: bigint;
                    readonly nextKey: bigint;
                    readonly index: number;
                }[];
            };
        };
    } | undefined): Option<import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, {
        root: bigint;
        length: bigint;
        data: {
            nodes: (bigint | undefined)[][];
            sortedLeaves: {
                readonly value: bigint;
                readonly key: bigint;
                readonly nextKey: bigint;
                readonly index: number;
            }[];
        };
    }>;
    from(value?: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase | {
        root: bigint;
        length: bigint;
        data: {
            nodes: (bigint | undefined)[][];
            sortedLeaves: {
                readonly value: bigint;
                readonly key: bigint;
                readonly nextKey: bigint;
                readonly index: number;
            }[];
        };
    } | undefined): Option<import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, {
        root: bigint;
        length: bigint;
        data: {
            nodes: (bigint | undefined)[][];
            sortedLeaves: {
                readonly value: bigint;
                readonly key: bigint;
                readonly nextKey: bigint;
                readonly index: number;
            }[];
        };
    }>;
    none(): Option<import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, {
        root: bigint;
        length: bigint;
        data: {
            nodes: (bigint | undefined)[][];
            sortedLeaves: {
                readonly value: bigint;
                readonly key: bigint;
                readonly nextKey: bigint;
                readonly index: number;
            }[];
        };
    }>;
};
export declare class OffchainMapOption extends OffchainMapOption_base {
}
declare const FieldOption_base: Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>, bigint | undefined>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>;
} & (new (option: {
    isSome: Bool;
    value: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>) & {
    fromValue(value: bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field | {
        isSome: boolean | Bool;
        value: bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    } | undefined): Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>;
    from(value?: bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field | undefined): Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>;
    none(): Option<import("node_modules/o1js/dist/node/lib/provable/field.js").Field, bigint>;
};
export declare class FieldOption extends FieldOption_base {
}
export interface OffChainMapEntry {
    key: Field | bigint | number | string;
    value?: Field | bigint | number | string;
}
/**
 * IpfsHash is used when the map is already pinned to IPFS, it should be string with IPFS hash
 */
export type OffChainMapEntries = OffChainMapEntry[] | IpfsHash;
declare const OffChainListBase_base: (new (value: {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) => {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
}, {
    root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        root: string;
    };
    fromJSON: (x: {
        root: string;
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Base class for offchain lists and maps that does not have storage
 */
export declare class OffChainListBase extends OffChainListBase_base {
    isNone(): Bool;
    isSome(): Bool;
    load(storage: Storage, name?: string): Promise<OffchainMapOption>;
    /**
     * The function fetches a whitelisted amount associated with a given key using a map and returns it
     * as a FieldOption.
     * @param {Field} key - The `key` parameter is of type `Field`,
     * which represents a field element in the context of a cryptographic system.
     * @returns The `getValue` function returns a `Promise` that resolves to a `FieldOption`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided key. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the list is NOT empty and the key is NOT in the map.
     * The value is present if the list IS empty or the key IS in the map.
     * The value is present and equals to Field(0) if the list IS empty.
     */
    getValue(key: Field, storage: Storage, name?: string): Promise<FieldOption>;
    static empty(): OffChainListBase;
    /**
     * Creates a new OffchainListBase
     * @param params - The parameters for creating the list.
     * @param params.list - The list of entries to be added to the map.
     * @param params.data - The JSON data that should be added to the IPFS storage that represent the initial data
     * @returns A new `OffChainList` instance.
     */
    static create(params: {
        list: OffChainMapEntry[] | {
            key: string;
            value?: number;
        }[];
        data?: object;
    }): Promise<{
        listBase: OffChainListBase;
        json: {
            map: IndexedMapSerialized;
            list: {
                key: string;
                value?: string;
            }[];
            data?: object;
        };
    }>;
    toString(): string;
    static fromString(str: string): OffChainListBase;
}
declare const OffChainList_base: (new (value: {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}) => {
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}, {
    root: bigint;
    storage: {
        url: bigint[];
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
} & {
    fromValue: (value: {
        root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
    toInput: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    }) => {
        root: string;
        storage: {
            url: string[];
        };
    };
    fromJSON: (x: {
        root: string;
        storage: {
            url: string[];
        };
    }) => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
    empty: () => {
        root: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
};
export declare class OffChainList extends OffChainList_base {
    isNone(): Bool;
    isSome(): Bool;
    load(name?: string | undefined): Promise<OffchainMapOption>;
    /**
     * The function fetches a whitelisted amount associated with a given key using a map and returns it
     * as a FieldOption.
     * @param {Field} key - The `key` parameter is of type `Field`,
     * which represents a field element in the context of a cryptographic system.
     * @returns The `getValue` function returns a `Promise` that resolves to a `FieldOption`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided key. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the list is NOT empty and the key is NOT in the map.
     * The value is present if the list IS empty or the key IS in the map.
     * The value is present and equals to Field(0) if the list IS empty.
     */
    getValue(key: Field, name?: string | undefined): Promise<FieldOption>;
    static empty(): OffChainList;
    /**
     * Creates a new OffchainList
     * and pins it to IPFS.
     * @param params - The parameters for creating the list.
     * @param params.list - The list of entries to be added to the map.
     * @param params.data - The JSON data that should be added to the IPFS storage that represent the initial data
     * @returns A new `OffChainList` instance.
     */
    static create(params: {
        list: OffChainMapEntry[] | {
            key: string;
            value?: number;
        }[];
        data?: object;
        name?: string;
        filename?: string;
        keyvalues?: object;
        timeout?: number;
        attempts?: number;
        auth?: string;
    }): Promise<OffChainList>;
    toString(): string;
    static fromString(str: string): OffChainList;
}
export {};
