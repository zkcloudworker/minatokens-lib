import { DeployArgs, PublicKey, State, UInt64, SmartContract, Bool, Field } from "o1js";
import { Whitelist, Storage } from "@minatokens/storage";
declare const NFTAddress_base: (new (value: {
    collection: PublicKey;
    nft: PublicKey;
}) => {
    collection: PublicKey;
    nft: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    collection: PublicKey;
    nft: PublicKey;
}, {
    collection: {
        x: bigint;
        isOdd: boolean;
    };
    nft: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        collection: PublicKey;
        nft: PublicKey;
    };
} & {
    fromValue: (value: {
        collection: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        nft: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        collection: PublicKey;
        nft: PublicKey;
    };
    toInput: (x: {
        collection: PublicKey;
        nft: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        collection: PublicKey;
        nft: PublicKey;
    }) => {
        collection: string;
        nft: string;
    };
    fromJSON: (x: {
        collection: string;
        nft: string;
    }) => {
        collection: PublicKey;
        nft: PublicKey;
    };
    empty: () => {
        collection: PublicKey;
        nft: PublicKey;
    };
};
export declare class NFTAddress extends NFTAddress_base {
}
declare const SellEvent_base: (new (value: {
    collection: PublicKey;
    nft: PublicKey;
    price: UInt64;
}) => {
    collection: PublicKey;
    nft: PublicKey;
    price: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    collection: PublicKey;
    nft: PublicKey;
    price: UInt64;
}, {
    collection: {
        x: bigint;
        isOdd: boolean;
    };
    nft: {
        x: bigint;
        isOdd: boolean;
    };
    price: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    };
} & {
    fromValue: (value: {
        collection: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        nft: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        price: bigint | UInt64;
    }) => {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    };
    toInput: (x: {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    }) => {
        collection: string;
        nft: string;
        price: string;
    };
    fromJSON: (x: {
        collection: string;
        nft: string;
        price: string;
    }) => {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    };
    empty: () => {
        collection: PublicKey;
        nft: PublicKey;
        price: UInt64;
    };
};
declare class SellEvent extends SellEvent_base {
}
declare const DepositEvent_base: (new (value: {
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}) => {
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}, {
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    amount: bigint;
    maxPoints: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
} & {
    fromValue: (value: {
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        amount: bigint | UInt64;
        maxPoints: bigint | UInt64;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
    toInput: (x: {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    }) => {
        buyer: string;
        amount: string;
        maxPoints: string;
    };
    fromJSON: (x: {
        buyer: string;
        amount: string;
        maxPoints: string;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
    empty: () => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
};
declare class DepositEvent extends DepositEvent_base {
}
declare const WithdrawEvent_base: (new (value: {
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}) => {
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    buyer: PublicKey;
    amount: UInt64;
    maxPoints: UInt64;
}, {
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    amount: bigint;
    maxPoints: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
} & {
    fromValue: (value: {
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        amount: bigint | UInt64;
        maxPoints: bigint | UInt64;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
    toInput: (x: {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    }) => {
        buyer: string;
        amount: string;
        maxPoints: string;
    };
    fromJSON: (x: {
        buyer: string;
        amount: string;
        maxPoints: string;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
    empty: () => {
        buyer: PublicKey;
        amount: UInt64;
        maxPoints: UInt64;
    };
};
declare class WithdrawEvent extends WithdrawEvent_base {
}
declare const BidEvent_base: (new (value: {
    bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}) => {
    bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    storage: Storage;
}, {
    bids: bigint;
    whitelist: bigint;
    storage: {
        url: bigint[];
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
} & {
    fromValue: (value: {
        bids: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage | {
            url: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | bigint[];
        };
    }) => {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
    toInput: (x: {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    }) => {
        bids: string;
        whitelist: string;
        storage: {
            url: string[];
        };
    };
    fromJSON: (x: {
        bids: string;
        whitelist: string;
        storage: {
            url: string[];
        };
    }) => {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
    empty: () => {
        bids: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        whitelist: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        storage: Storage;
    };
};
declare class BidEvent extends BidEvent_base {
}
declare const Bid_base: (new (value: {
    price: UInt64;
    points: UInt64;
}) => {
    price: UInt64;
    points: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    price: UInt64;
    points: UInt64;
}, {
    price: bigint;
    points: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        price: UInt64;
        points: UInt64;
    };
} & {
    fromValue: (value: {
        price: bigint | UInt64;
        points: bigint | UInt64;
    }) => {
        price: UInt64;
        points: UInt64;
    };
    toInput: (x: {
        price: UInt64;
        points: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        price: UInt64;
        points: UInt64;
    }) => {
        price: string;
        points: string;
    };
    fromJSON: (x: {
        price: string;
        points: string;
    }) => {
        price: UInt64;
        points: UInt64;
    };
    empty: () => {
        price: UInt64;
        points: UInt64;
    };
};
export declare class Bid extends Bid_base {
    pack(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
    static unpack(field: Field): Bid;
}
export interface NonFungibleTokenBidContractDeployProps extends Exclude<DeployArgs, undefined> {
    /** The whitelist. */
    whitelist: Field;
    /** The offers. */
    bids: Field;
    /** The storage. */
    storage: Storage;
}
export declare class NonFungibleTokenBidContract extends SmartContract {
    buyer: State<PublicKey>;
    whitelist: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    bids: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    storage: State<Storage>;
    maxPoints: State<UInt64>;
    consumedPoints: State<UInt64>;
    deploy(args: NonFungibleTokenBidContractDeployProps): Promise<void>;
    events: {
        deposit: typeof DepositEvent;
        withdraw: typeof WithdrawEvent;
        sell: typeof SellEvent;
        updateWhitelist: typeof Whitelist;
        bid: typeof BidEvent;
    };
    initialize(amount: UInt64, maxPoints: UInt64): Promise<void>;
    deposit(amount: UInt64, maxPoints: UInt64): Promise<void>;
    withdraw(amount: UInt64, maxPoints: UInt64): Promise<void>;
    sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    sellWithApproval(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    _sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    bid(bids: Field, whitelist: Field, storage: Storage): Promise<void>;
}
export {};
