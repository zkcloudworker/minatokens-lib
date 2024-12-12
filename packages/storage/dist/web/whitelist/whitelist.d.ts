import { Field, Option, PublicKey, UInt64, Bool } from "o1js";
import { OffChainList, OffchainMapOption, OffchainMapSerialized } from "./offchain-map.js";
declare const UInt64Option_base: Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<Option<UInt64, bigint>, bigint | undefined>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => Option<UInt64, bigint>;
} & (new (option: {
    isSome: Bool;
    value: UInt64;
}) => Option<UInt64, bigint>) & {
    fromValue(value: bigint | UInt64 | {
        isSome: boolean | Bool;
        value: bigint | UInt64;
    } | undefined): Option<UInt64, bigint>;
    from(value?: bigint | UInt64 | undefined): Option<UInt64, bigint>;
    none(): Option<UInt64, bigint>;
};
export declare class UInt64Option extends UInt64Option_base {
}
export declare class WhitelistedAddress {
    address: PublicKey | string;
    amount?: UInt64 | number;
}
declare const Whitelist_base: (new (value: {
    list: OffChainList;
}) => {
    list: OffChainList;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    list: OffChainList;
}, {
    list: {
        root: bigint;
        storage: {
            url: bigint[];
        };
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        list: OffChainList;
    };
} & {
    fromValue: (value: {
        list: OffChainList | {
            root: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            storage: import("../index.js").Storage | {
                url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
            };
        };
    }) => {
        list: OffChainList;
    };
    toInput: (x: {
        list: OffChainList;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        list: OffChainList;
    }) => {
        list: {
            root: string;
            storage: {
                url: string[];
            };
        };
    };
    fromJSON: (x: {
        list: {
            root: string;
            storage: {
                url: string[];
            };
        };
    }) => {
        list: OffChainList;
    };
    empty: () => {
        list: OffChainList;
    };
};
export declare class Whitelist extends Whitelist_base {
    isNone(): Bool;
    isSome(): Bool;
    load(): Promise<OffchainMapOption>;
    /**
     * The function fetches a whitelisted amount associated with a given address using a map and returns it
     * as a UInt64Option.
     * @param {PublicKey} address - The `address` parameter is of type `PublicKey`, which represents a
     * public key used in cryptography for various purposes such as encryption, digital signatures, and
     * authentication. In the context of the `fetchWhitelistedAmount` function, the `address` parameter is
     * used to retrieve a whitelisted amount
     * @returns The `fetchWhitelistedAmount` function returns a `Promise` that resolves to a `UInt64Option`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided address. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the whitelist is NOT empty and the address is NOT whitelisted.
     * The value is present if the whitelist is NOT empty or the address IS whitelisted.
     * The value is present and equals to UInt64.MAXINT() if the whitelist IS empty.
     */
    getWhitelistedAmount(address: PublicKey, name?: string): Promise<UInt64Option>;
    static empty(): Whitelist;
    /**
     * Creates a new whitelist and pins it to IPFS.
     * @param params - The parameters for creating the whitelist.
     * @returns A new `Whitelist` instance.
     */
    static create(params: {
        list: WhitelistedAddress[];
        name?: string;
        filename?: string;
        keyvalues?: object;
        timeout?: number;
        attempts?: number;
        auth?: string;
        pin?: boolean;
        json?: OffchainMapSerialized;
    }): Promise<{
        whitelist: Whitelist;
        json: OffchainMapSerialized;
    }>;
    toString(): string;
    static fromString(str: string): Whitelist;
}
export {};
