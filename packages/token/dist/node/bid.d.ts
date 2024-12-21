import { DeployArgs, PublicKey, State, UInt64, SmartContract, Bool, Field } from "o1js";
import { Whitelist } from "@minatokens/storage";
export interface FungibleTokenBidContractDeployProps extends Exclude<DeployArgs, undefined> {
    /** The whitelist. */
    whitelist: Whitelist;
}
declare const BidEvent_base: (new (value: {
    amount: UInt64;
    address: PublicKey;
}) => {
    amount: UInt64;
    address: PublicKey;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    amount: UInt64;
    address: PublicKey;
}, {
    amount: bigint;
    address: {
        x: bigint;
        isOdd: boolean;
    };
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        amount: UInt64;
        address: PublicKey;
    };
} & {
    fromValue: (value: {
        amount: bigint | UInt64;
        address: PublicKey | {
            x: Field | bigint;
            isOdd: Bool | boolean;
        };
    }) => {
        amount: UInt64;
        address: PublicKey;
    };
    toInput: (x: {
        amount: UInt64;
        address: PublicKey;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        amount: UInt64;
        address: PublicKey;
    }) => {
        amount: string;
        address: string;
    };
    fromJSON: (x: {
        amount: string;
        address: string;
    }) => {
        amount: UInt64;
        address: PublicKey;
    };
    empty: () => {
        amount: UInt64;
        address: PublicKey;
    };
};
export declare class BidEvent extends BidEvent_base {
}
export declare class FungibleTokenBidContract extends SmartContract {
    price: State<UInt64>;
    buyer: State<PublicKey>;
    token: State<PublicKey>;
    whitelist: State<Whitelist>;
    deploy(args: FungibleTokenBidContractDeployProps): Promise<void>;
    events: {
        bid: typeof BidEvent;
        withdraw: typeof BidEvent;
        sell: typeof BidEvent;
        updateWhitelist: typeof Whitelist;
    };
    initialize(token: PublicKey, amount: UInt64, price: UInt64): Promise<void>;
    bid(amount: UInt64, price: UInt64): Promise<void>;
    withdraw(amountInMina: UInt64): Promise<void>;
    sell(amount: UInt64): Promise<void>;
    updateWhitelist(whitelist: Whitelist): Promise<void>;
}
export {};
