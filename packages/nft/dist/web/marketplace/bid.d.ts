import { DeployArgs, PublicKey, State, UInt64, SmartContract, Field } from "o1js";
import { Whitelist, Storage } from "@minatokens/storage";
import { NFTAddress, SellEvent, DepositEvent, WithdrawEvent, BidEvent } from "./types.js";
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
    _sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
    bid(bids: Field, whitelist: Field, storage: Storage): Promise<void>;
}
export {};
