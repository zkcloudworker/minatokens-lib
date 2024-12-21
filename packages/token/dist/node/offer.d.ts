import { DeployArgs, PublicKey, State, UInt64, SmartContract, Bool, Field } from "o1js";
import { Whitelist } from "@minatokens/storage";
export interface FungibleTokenOfferContractDeployProps extends Exclude<DeployArgs, undefined> {
    /** The whitelist. */
    whitelist: Whitelist;
}
declare const OfferEvent_base: (new (value: {
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
export declare class OfferEvent extends OfferEvent_base {
}
export declare class FungibleTokenOfferContract extends SmartContract {
    price: State<UInt64>;
    seller: State<PublicKey>;
    token: State<PublicKey>;
    whitelist: State<Whitelist>;
    deploy(args: FungibleTokenOfferContractDeployProps): Promise<void>;
    events: {
        offer: typeof OfferEvent;
        withdraw: typeof OfferEvent;
        buy: typeof OfferEvent;
        updateWhitelist: typeof Whitelist;
    };
    initialize(seller: PublicKey, // we are short of AccountUpdates here, so we use this parameter instead of this.sender.getUnconstrained()
    token: PublicKey, amount: UInt64, price: UInt64): Promise<void>;
    offer(amount: UInt64, price: UInt64): Promise<void>;
    withdraw(amount: UInt64): Promise<void>;
    buy(amount: UInt64): Promise<void>;
    updateWhitelist(whitelist: Whitelist): Promise<void>;
}
export {};
