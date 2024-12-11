import { DeployArgs, PublicKey, State, UInt64, SmartContract, Bool, Field } from "o1js";
import { Whitelist, OffChainList } from "@minatokens/storage";
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
}) => {
    buyer: PublicKey;
    amount: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    buyer: PublicKey;
    amount: UInt64;
}, {
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    amount: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        buyer: PublicKey;
        amount: UInt64;
    };
} & {
    fromValue: (value: {
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        amount: bigint | UInt64;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
    };
    toInput: (x: {
        buyer: PublicKey;
        amount: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        buyer: PublicKey;
        amount: UInt64;
    }) => {
        buyer: string;
        amount: string;
    };
    fromJSON: (x: {
        buyer: string;
        amount: string;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
    };
    empty: () => {
        buyer: PublicKey;
        amount: UInt64;
    };
};
declare class DepositEvent extends DepositEvent_base {
}
declare const WithdrawEvent_base: (new (value: {
    buyer: PublicKey;
    amount: UInt64;
}) => {
    buyer: PublicKey;
    amount: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    buyer: PublicKey;
    amount: UInt64;
}, {
    buyer: {
        x: bigint;
        isOdd: boolean;
    };
    amount: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        buyer: PublicKey;
        amount: UInt64;
    };
} & {
    fromValue: (value: {
        buyer: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
        amount: bigint | UInt64;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
    };
    toInput: (x: {
        buyer: PublicKey;
        amount: UInt64;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        buyer: PublicKey;
        amount: UInt64;
    }) => {
        buyer: string;
        amount: string;
    };
    fromJSON: (x: {
        buyer: string;
        amount: string;
    }) => {
        buyer: PublicKey;
        amount: UInt64;
    };
    empty: () => {
        buyer: PublicKey;
        amount: UInt64;
    };
};
declare class WithdrawEvent extends WithdrawEvent_base {
}
export interface NonFungibleTokenBidContractDeployProps extends Exclude<DeployArgs, undefined> {
    /** The whitelist. */
    whitelist: Whitelist;
    /** The offers. */
    bids: OffChainList;
}
export declare class NonFungibleTokenBidContract extends SmartContract {
    buyer: State<PublicKey>;
    whitelist: State<Whitelist>;
    bids: State<OffChainList>;
    deploy(args: NonFungibleTokenBidContractDeployProps): Promise<void>;
    events: {
        deposit: typeof DepositEvent;
        withdraw: typeof WithdrawEvent;
        sell: typeof SellEvent;
        updateWhitelist: typeof Whitelist;
        bid: typeof OffChainList;
    };
    initialize(amount: UInt64): Promise<void>;
    deposit(amount: UInt64): Promise<void>;
    withdraw(amount: UInt64): Promise<void>;
    sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    sellWithApproval(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    _sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    updateWhitelist(whitelist: Whitelist): Promise<void>;
    bid(bids: OffChainList): Promise<void>;
}
export {};
