import { AccountUpdate, DeployArgs, PublicKey, State, UInt64, SmartContract, Bool, Field } from "o1js";
import { Whitelist, Storage } from "@minatokens/storage";
import { NFTAddress, SellEvent, DepositEvent, WithdrawEvent, BidEvent } from "./types.js";
import { NFTCollectionBase, NFTCollectionContractConstructor } from "../interfaces/index.js";
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
export declare function BidFactory(params: {
    collectionContract: () => NFTCollectionContractConstructor;
}): {
    new (address: PublicKey, tokenId?: Field): {
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
        getCollectionContract(address: PublicKey): NFTCollectionBase;
        deposit(amount: UInt64, maxPoints: UInt64): Promise<void>;
        withdraw(amount: UInt64, maxPoints: UInt64): Promise<void>;
        sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
        approvedSell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
        _sell(nftAddress: NFTAddress, price: UInt64): Promise<void>;
        bid(bids: Field, whitelist: Field, storage: Storage): Promise<void>;
        "__#3@#private": any;
        address: PublicKey;
        tokenId: Field;
        init(): void;
        requireSignature(): void;
        skipAuthorization(): void;
        readonly self: AccountUpdate;
        newSelf(methodName?: string): AccountUpdate;
        sender: {
            self: SmartContract;
            getUnconstrained(): PublicKey;
            getAndRequireSignature(): PublicKey;
        };
        readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
        readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
        readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
        approve(update: AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
        send(args: {
            to: PublicKey | AccountUpdate | SmartContract;
            amount: number | bigint | UInt64;
        }): AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "updateWhitelist" | "deposit" | "withdraw" | "sell" | "bid">(condition: Bool, type: K, event: any): void;
        emitEvent<K extends "updateWhitelist" | "deposit" | "withdraw" | "sell" | "bid">(type: K, event: any): void;
        fetchEvents(start?: import("o1js").UInt32, end?: import("o1js").UInt32): Promise<{
            type: string;
            event: {
                data: import("o1js").ProvablePure<any>;
                transactionInfo: {
                    transactionHash: string;
                    transactionStatus: string;
                    transactionMemo: string;
                };
            };
            blockHeight: import("o1js").UInt32;
            blockHash: string;
            parentBlockHash: string;
            globalSlot: import("o1js").UInt32;
            chainStatus: string;
        }[]>;
    };
    _methods?: import("node_modules/o1js/dist/node/lib/proof-system/zkprogram.js").MethodInterface[];
    _methodMetadata?: Record<string, {
        actions: number;
        rows: number;
        digest: string;
        gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
    }>;
    _provers?: import("node_modules/o1js/dist/node/snarky.js").Pickles.Prover[];
    _maxProofsVerified?: 0 | 1 | 2;
    _verificationKey?: {
        data: string;
        hash: Field;
    };
    Proof(): {
        new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
            proof: unknown;
            publicInput: import("o1js").ZkappPublicInput;
            publicOutput: undefined;
            maxProofsVerified: 0 | 2 | 1;
        }): {
            verify(): void;
            verifyIf(condition: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool): void;
            publicInput: import("o1js").ZkappPublicInput;
            publicOutput: undefined;
            proof: unknown;
            maxProofsVerified: 0 | 2 | 1;
            shouldVerify: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
            toJSON(): import("o1js").JsonProof;
            publicFields(): {
                input: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
                output: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
            };
        };
        publicInputType: Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
            accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        }, {
            accountUpdate: bigint;
            calls: bigint;
        }>, "fromFields"> & {
            fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
                accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            };
        } & {
            toInput: (x: {
                accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            }) => {
                fields?: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[] | undefined;
                packed?: [import("node_modules/o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
            };
            toJSON: (x: {
                accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            }) => {
                accountUpdate: string;
                calls: string;
            };
            fromJSON: (x: {
                accountUpdate: string;
                calls: string;
            }) => {
                accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            };
            empty: () => {
                accountUpdate: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
                calls: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            };
        };
        publicOutputType: import("node_modules/o1js/dist/node/lib/provable/types/struct.js").ProvablePureExtended<undefined, undefined, null>;
        tag: () => typeof SmartContract;
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
            toCanonical?: ((x: import("o1js").Proof<any, any>) => import("o1js").Proof<any, any>) | undefined;
        };
        publicFields(value: import("o1js").ProofBase<any, any>): {
            input: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
            output: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[];
        };
        _proofFromBase64(proofString: string, maxProofsVerified: 0 | 2 | 1): unknown;
        _proofToBase64(proof: unknown, maxProofsVerified: 0 | 2 | 1): string;
    };
    compile({ cache, forceRecompile, }?: {
        cache?: import("o1js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    }): Promise<{
        verificationKey: {
            data: string;
            hash: import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        };
        provers: import("node_modules/o1js/dist/node/snarky.js").Pickles.Prover[];
        verify: (statement: import("node_modules/o1js/dist/node/snarky.js").Pickles.Statement<import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst>, proof: unknown) => Promise<boolean>;
    }>;
    digest(): Promise<string>;
    runOutsideCircuit(run: () => void): void;
    analyzeMethods({ printSummary }?: {
        printSummary?: boolean | undefined;
    }): Promise<Record<string, {
        actions: number;
        rows: number;
        digest: string;
        gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
    }>>;
};
export {};
