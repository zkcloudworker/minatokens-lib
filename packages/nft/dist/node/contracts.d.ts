import { NFT } from "./contracts/index.js";
import { VerificationKeyUpgradeAuthority } from "./upgrade/index.js";
export { AdminContract, WhitelistedAdminContract, Collection, WhitelistedCollection, contractList, };
declare const AdminContract: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        admin: import("o1js").State<import("o1js").PublicKey>;
        upgradeAuthority: import("o1js").State<import("o1js").PublicKey>;
        isPaused: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canPause: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        deploy(props: import("./admin/standard.js").NFTAdminDeployProps): Promise<void>;
        events: {
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            pause: typeof import("./contracts/pausable.js").PauseEvent;
            resume: typeof import("./contracts/pausable.js").PauseEvent;
            ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
        };
        ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
        getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        canMint(mintRequest: import("./contracts/types.js").MintRequest): Promise<import("./contracts/types.js").MintParamsOption>;
        canUpdate(input: import("./contracts/types.js").NFTState, output: import("./contracts/types.js").NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canTransfer(address: import("o1js").PublicKey, from: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canSell(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canBuy(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, buyer: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        "__#3@#private": any;
        address: import("o1js").PublicKey;
        tokenId: import("o1js").Field;
        init(): void;
        requireSignature(): void;
        skipAuthorization(): void;
        readonly self: import("o1js").AccountUpdate;
        newSelf(methodName?: string): import("o1js").AccountUpdate;
        sender: {
            self: import("o1js").SmartContract;
            getUnconstrained(): import("o1js").PublicKey;
            getAndRequireSignature(): import("o1js").PublicKey;
        };
        readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
        readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
        readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
        approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
        send(args: {
            to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
            amount: number | bigint | import("o1js").UInt64;
        }): import("o1js").AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange">(type: K, event: any): void;
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
        hash: import("o1js").Field;
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
        tag: () => typeof import("o1js").SmartContract;
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
declare const WhitelistedAdminContract: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        admin: import("o1js").State<import("o1js").PublicKey>;
        upgradeAuthority: import("o1js").State<import("o1js").PublicKey>;
        whitelist: import("o1js").State<import("@minatokens/storage").Whitelist>;
        pauseData: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        deploy(props: import("./admin/whitelisted.js").NFTWhitelistedAdminDeployProps): Promise<void>;
        events: {
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            pause: typeof import("./contracts/pausable.js").PauseEvent;
            resume: typeof import("./contracts/pausable.js").PauseEvent;
            ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
            updateWhitelist: typeof import("@minatokens/storage").Whitelist;
        };
        ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
        readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
        getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        canMint(mintRequest: import("./contracts/types.js").MintRequest): Promise<import("./contracts/types.js").MintParamsOption>;
        canUpdate(input: import("./contracts/types.js").NFTState, output: import("./contracts/types.js").NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canTransfer(address: import("o1js").PublicKey, from: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canSell(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canBuy(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, buyer: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        updateWhitelist(whitelist: import("@minatokens/storage").Whitelist): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        "__#3@#private": any;
        address: import("o1js").PublicKey;
        tokenId: import("o1js").Field;
        init(): void;
        requireSignature(): void;
        skipAuthorization(): void;
        readonly self: import("o1js").AccountUpdate;
        newSelf(methodName?: string): import("o1js").AccountUpdate;
        sender: {
            self: import("o1js").SmartContract;
            getUnconstrained(): import("o1js").PublicKey;
            getAndRequireSignature(): import("o1js").PublicKey;
        };
        readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
        readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
        readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
        approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
        send(args: {
            to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
            amount: number | bigint | import("o1js").UInt64;
        }): import("o1js").AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(type: K, event: any): void;
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
        hash: import("o1js").Field;
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
        tag: () => typeof import("o1js").SmartContract;
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
declare const Collection: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        creator: import("o1js").State<import("o1js").PublicKey>;
        admin: import("o1js").State<import("o1js").PublicKey>;
        baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        packedData: import("o1js").State<import("./contracts/types.js").CollectionDataPacked>;
        deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
        initialize(masterNFT: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<void>;
        events: {
            mint: typeof import("./contracts/events.js").MintEvent;
            update: typeof import("o1js").PublicKey;
            transfer: typeof import("./contracts/events.js").TransferEvent;
            sell: typeof import("./contracts/events.js").SellEvent;
            buy: typeof import("./contracts/events.js").BuyEvent;
            approveBuy: typeof import("./contracts/events.js").BuyEvent;
            approveSell: typeof import("./contracts/events.js").SellEvent;
            approveTransfer: typeof import("./contracts/events.js").TransferEvent;
            approveMint: typeof import("./contracts/events.js").MintEvent;
            approveUpdate: typeof import("o1js").PublicKey;
            upgradeNFTVerificationKey: typeof import("./contracts/events.js").UpgradeVerificationKeyEvent;
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            limitMinting: typeof import("./contracts/events.js").LimitMintingEvent;
            pause: typeof import("./contracts/pausable.js").PauseEvent;
            resume: typeof import("./contracts/pausable.js").PauseEvent;
            pauseNFT: typeof import("./contracts/events.js").PauseNFTEvent;
            resumeNFT: typeof import("./contracts/events.js").PauseNFTEvent;
            ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
        };
        approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
        readonly getAdminContractConstructor: import("./contracts/admin.js").NFTAdminContractConstructor;
        readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
        getAdminContract(): import("./contracts/admin.js").NFTAdminBase;
        getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
        ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
        ensureNotPaused(): Promise<import("./contracts/types.js").CollectionData>;
        mintByCreator(params: import("./contracts/types.js").MintParams): Promise<void>;
        mint(mintRequest: import("./contracts/types.js").MintRequest): Promise<void>;
        _mint(params: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<import("./contracts/events.js").MintEvent>;
        update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        updateWithApproval(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        _update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        sellWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        _sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("./contracts/events.js").SellEvent>;
        buy(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        buyWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        _buy(address: import("o1js").PublicKey, price: import("o1js").UInt64, royaltyFee: import("o1js").UInt32): Promise<import("./contracts/events.js").BuyEvent>;
        transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
        transferWithApproval(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
        _transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey, transferFee: import("o1js").UInt64): Promise<import("./contracts/events.js").TransferEvent>;
        upgradeNFTVerificationKey(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        limitMinting(): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        pauseNFT(address: import("o1js").PublicKey): Promise<void>;
        resumeNFT(address: import("o1js").PublicKey): Promise<void>;
        updateConfiguration(configuration: import("./contracts/types.js").CollectionConfigurationUpdate): Promise<void>;
        transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        deriveTokenId(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        readonly internal: {
            mint({ address, amount, }: {
                address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            burn({ address, amount, }: {
                address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            send({ from, to, amount, }: {
                from: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
        };
        forEachUpdate(updates: import("o1js").AccountUpdateForest, callback: (update: import("o1js").AccountUpdate, usesToken: import("o1js").Bool) => void): void;
        checkZeroBalanceChange(updates: import("o1js").AccountUpdateForest): void;
        approveAccountUpdate(accountUpdate: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree): Promise<void>;
        approveAccountUpdates(accountUpdates: (import("o1js").AccountUpdate | import("o1js").AccountUpdateTree)[]): Promise<void>;
        "__#3@#private": any;
        address: import("o1js").PublicKey;
        tokenId: import("o1js").Field;
        init(): void;
        requireSignature(): void;
        skipAuthorization(): void;
        readonly self: import("o1js").AccountUpdate;
        newSelf(methodName?: string): import("o1js").AccountUpdate;
        sender: {
            self: import("o1js").SmartContract;
            getUnconstrained(): import("o1js").PublicKey;
            getAndRequireSignature(): import("o1js").PublicKey;
        };
        readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
        readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
        readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
        approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
        send(args: {
            to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
            amount: number | bigint | import("o1js").UInt64;
        }): import("o1js").AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(type: K, event: any): void;
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
    MAX_ACCOUNT_UPDATES: number;
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
        hash: import("o1js").Field;
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
        tag: () => typeof import("o1js").SmartContract;
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
declare const WhitelistedCollection: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        creator: import("o1js").State<import("o1js").PublicKey>;
        admin: import("o1js").State<import("o1js").PublicKey>;
        baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        packedData: import("o1js").State<import("./contracts/types.js").CollectionDataPacked>;
        deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
        initialize(masterNFT: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<void>;
        events: {
            mint: typeof import("./contracts/events.js").MintEvent;
            update: typeof import("o1js").PublicKey;
            transfer: typeof import("./contracts/events.js").TransferEvent;
            sell: typeof import("./contracts/events.js").SellEvent;
            buy: typeof import("./contracts/events.js").BuyEvent;
            approveBuy: typeof import("./contracts/events.js").BuyEvent;
            approveSell: typeof import("./contracts/events.js").SellEvent;
            approveTransfer: typeof import("./contracts/events.js").TransferEvent;
            approveMint: typeof import("./contracts/events.js").MintEvent;
            approveUpdate: typeof import("o1js").PublicKey;
            upgradeNFTVerificationKey: typeof import("./contracts/events.js").UpgradeVerificationKeyEvent;
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            limitMinting: typeof import("./contracts/events.js").LimitMintingEvent;
            pause: typeof import("./contracts/pausable.js").PauseEvent;
            resume: typeof import("./contracts/pausable.js").PauseEvent;
            pauseNFT: typeof import("./contracts/events.js").PauseNFTEvent;
            resumeNFT: typeof import("./contracts/events.js").PauseNFTEvent;
            ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
        };
        approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
        readonly getAdminContractConstructor: import("./contracts/admin.js").NFTAdminContractConstructor;
        readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
        getAdminContract(): import("./contracts/admin.js").NFTAdminBase;
        getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
        ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
        ensureNotPaused(): Promise<import("./contracts/types.js").CollectionData>;
        mintByCreator(params: import("./contracts/types.js").MintParams): Promise<void>;
        mint(mintRequest: import("./contracts/types.js").MintRequest): Promise<void>;
        _mint(params: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<import("./contracts/events.js").MintEvent>;
        update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        updateWithApproval(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        _update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        sellWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        _sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("./contracts/events.js").SellEvent>;
        buy(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        buyWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
        _buy(address: import("o1js").PublicKey, price: import("o1js").UInt64, royaltyFee: import("o1js").UInt32): Promise<import("./contracts/events.js").BuyEvent>;
        transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
        transferWithApproval(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
        _transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey, transferFee: import("o1js").UInt64): Promise<import("./contracts/events.js").TransferEvent>;
        upgradeNFTVerificationKey(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        limitMinting(): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        pauseNFT(address: import("o1js").PublicKey): Promise<void>;
        resumeNFT(address: import("o1js").PublicKey): Promise<void>;
        updateConfiguration(configuration: import("./contracts/types.js").CollectionConfigurationUpdate): Promise<void>;
        transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        deriveTokenId(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        readonly internal: {
            mint({ address, amount, }: {
                address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            burn({ address, amount, }: {
                address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            send({ from, to, amount, }: {
                from: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
        };
        forEachUpdate(updates: import("o1js").AccountUpdateForest, callback: (update: import("o1js").AccountUpdate, usesToken: import("o1js").Bool) => void): void;
        checkZeroBalanceChange(updates: import("o1js").AccountUpdateForest): void;
        approveAccountUpdate(accountUpdate: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree): Promise<void>;
        approveAccountUpdates(accountUpdates: (import("o1js").AccountUpdate | import("o1js").AccountUpdateTree)[]): Promise<void>;
        "__#3@#private": any;
        address: import("o1js").PublicKey;
        tokenId: import("o1js").Field;
        init(): void;
        requireSignature(): void;
        skipAuthorization(): void;
        readonly self: import("o1js").AccountUpdate;
        newSelf(methodName?: string): import("o1js").AccountUpdate;
        sender: {
            self: import("o1js").SmartContract;
            getUnconstrained(): import("o1js").PublicKey;
            getAndRequireSignature(): import("o1js").PublicKey;
        };
        readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
        readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
        readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
        approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
        send(args: {
            to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
            amount: number | bigint | import("o1js").UInt64;
        }): import("o1js").AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(type: K, event: any): void;
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
    MAX_ACCOUNT_UPDATES: number;
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
        hash: import("o1js").Field;
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
        tag: () => typeof import("o1js").SmartContract;
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
declare const contractList: {
    NFT: typeof NFT;
    Collection: {
        new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
            collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
            creator: import("o1js").State<import("o1js").PublicKey>;
            admin: import("o1js").State<import("o1js").PublicKey>;
            baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
            packedData: import("o1js").State<import("./contracts/types.js").CollectionDataPacked>;
            deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
            initialize(masterNFT: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<void>;
            events: {
                mint: typeof import("./contracts/events.js").MintEvent;
                update: typeof import("o1js").PublicKey;
                transfer: typeof import("./contracts/events.js").TransferEvent;
                sell: typeof import("./contracts/events.js").SellEvent;
                buy: typeof import("./contracts/events.js").BuyEvent;
                approveBuy: typeof import("./contracts/events.js").BuyEvent;
                approveSell: typeof import("./contracts/events.js").SellEvent;
                approveTransfer: typeof import("./contracts/events.js").TransferEvent;
                approveMint: typeof import("./contracts/events.js").MintEvent;
                approveUpdate: typeof import("o1js").PublicKey;
                upgradeNFTVerificationKey: typeof import("./contracts/events.js").UpgradeVerificationKeyEvent;
                upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
                limitMinting: typeof import("./contracts/events.js").LimitMintingEvent;
                pause: typeof import("./contracts/pausable.js").PauseEvent;
                resume: typeof import("./contracts/pausable.js").PauseEvent;
                pauseNFT: typeof import("./contracts/events.js").PauseNFTEvent;
                resumeNFT: typeof import("./contracts/events.js").PauseNFTEvent;
                ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
            };
            approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
            readonly getAdminContractConstructor: import("./contracts/admin.js").NFTAdminContractConstructor;
            readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
            getAdminContract(): import("./contracts/admin.js").NFTAdminBase;
            getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
            ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
            ensureNotPaused(): Promise<import("./contracts/types.js").CollectionData>;
            mintByCreator(params: import("./contracts/types.js").MintParams): Promise<void>;
            mint(mintRequest: import("./contracts/types.js").MintRequest): Promise<void>;
            _mint(params: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<import("./contracts/events.js").MintEvent>;
            update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            updateWithApproval(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            _update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            sellWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            _sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("./contracts/events.js").SellEvent>;
            buy(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            buyWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            _buy(address: import("o1js").PublicKey, price: import("o1js").UInt64, royaltyFee: import("o1js").UInt32): Promise<import("./contracts/events.js").BuyEvent>;
            transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
            transferWithApproval(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
            _transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey, transferFee: import("o1js").UInt64): Promise<import("./contracts/events.js").TransferEvent>;
            upgradeNFTVerificationKey(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
            upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
            limitMinting(): Promise<void>;
            pause(): Promise<void>;
            resume(): Promise<void>;
            pauseNFT(address: import("o1js").PublicKey): Promise<void>;
            resumeNFT(address: import("o1js").PublicKey): Promise<void>;
            updateConfiguration(configuration: import("./contracts/types.js").CollectionConfigurationUpdate): Promise<void>;
            transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
            deriveTokenId(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            readonly internal: {
                mint({ address, amount, }: {
                    address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
                burn({ address, amount, }: {
                    address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
                send({ from, to, amount, }: {
                    from: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
            };
            forEachUpdate(updates: import("o1js").AccountUpdateForest, callback: (update: import("o1js").AccountUpdate, usesToken: import("o1js").Bool) => void): void;
            checkZeroBalanceChange(updates: import("o1js").AccountUpdateForest): void;
            approveAccountUpdate(accountUpdate: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree): Promise<void>;
            approveAccountUpdates(accountUpdates: (import("o1js").AccountUpdate | import("o1js").AccountUpdateTree)[]): Promise<void>;
            "__#3@#private": any;
            address: import("o1js").PublicKey;
            tokenId: import("o1js").Field;
            init(): void;
            requireSignature(): void;
            skipAuthorization(): void;
            readonly self: import("o1js").AccountUpdate;
            newSelf(methodName?: string): import("o1js").AccountUpdate;
            sender: {
                self: import("o1js").SmartContract;
                getUnconstrained(): import("o1js").PublicKey;
                getAndRequireSignature(): import("o1js").PublicKey;
            };
            readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
            readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
            readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
            approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
            send(args: {
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            readonly balance: {
                addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
                subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            };
            emitEventIf<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(condition: import("o1js").Bool, type: K, event: any): void;
            emitEvent<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(type: K, event: any): void;
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
        MAX_ACCOUNT_UPDATES: number;
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
            hash: import("o1js").Field;
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
            tag: () => typeof import("o1js").SmartContract;
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
    WhitelistedCollection: {
        new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
            collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
            creator: import("o1js").State<import("o1js").PublicKey>;
            admin: import("o1js").State<import("o1js").PublicKey>;
            baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
            packedData: import("o1js").State<import("./contracts/types.js").CollectionDataPacked>;
            deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
            initialize(masterNFT: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<void>;
            events: {
                mint: typeof import("./contracts/events.js").MintEvent;
                update: typeof import("o1js").PublicKey;
                transfer: typeof import("./contracts/events.js").TransferEvent;
                sell: typeof import("./contracts/events.js").SellEvent;
                buy: typeof import("./contracts/events.js").BuyEvent;
                approveBuy: typeof import("./contracts/events.js").BuyEvent;
                approveSell: typeof import("./contracts/events.js").SellEvent;
                approveTransfer: typeof import("./contracts/events.js").TransferEvent;
                approveMint: typeof import("./contracts/events.js").MintEvent;
                approveUpdate: typeof import("o1js").PublicKey;
                upgradeNFTVerificationKey: typeof import("./contracts/events.js").UpgradeVerificationKeyEvent;
                upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
                limitMinting: typeof import("./contracts/events.js").LimitMintingEvent;
                pause: typeof import("./contracts/pausable.js").PauseEvent;
                resume: typeof import("./contracts/pausable.js").PauseEvent;
                pauseNFT: typeof import("./contracts/events.js").PauseNFTEvent;
                resumeNFT: typeof import("./contracts/events.js").PauseNFTEvent;
                ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
            };
            approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
            readonly getAdminContractConstructor: import("./contracts/admin.js").NFTAdminContractConstructor;
            readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
            getAdminContract(): import("./contracts/admin.js").NFTAdminBase;
            getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
            ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
            ensureNotPaused(): Promise<import("./contracts/types.js").CollectionData>;
            mintByCreator(params: import("./contracts/types.js").MintParams): Promise<void>;
            mint(mintRequest: import("./contracts/types.js").MintRequest): Promise<void>;
            _mint(params: import("./contracts/types.js").MintParams, collectionData: import("./contracts/types.js").CollectionData): Promise<import("./contracts/events.js").MintEvent>;
            update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            updateWithApproval(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            _update(proof: import("./contracts/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
            sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            sellWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            _sell(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("./contracts/events.js").SellEvent>;
            buy(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            buyWithApproval(address: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<void>;
            _buy(address: import("o1js").PublicKey, price: import("o1js").UInt64, royaltyFee: import("o1js").UInt32): Promise<import("./contracts/events.js").BuyEvent>;
            transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
            transferWithApproval(address: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<void>;
            _transfer(address: import("o1js").PublicKey, to: import("o1js").PublicKey, transferFee: import("o1js").UInt64): Promise<import("./contracts/events.js").TransferEvent>;
            upgradeNFTVerificationKey(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
            upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
            limitMinting(): Promise<void>;
            pause(): Promise<void>;
            resume(): Promise<void>;
            pauseNFT(address: import("o1js").PublicKey): Promise<void>;
            resumeNFT(address: import("o1js").PublicKey): Promise<void>;
            updateConfiguration(configuration: import("./contracts/types.js").CollectionConfigurationUpdate): Promise<void>;
            transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
            deriveTokenId(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
            readonly internal: {
                mint({ address, amount, }: {
                    address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
                burn({ address, amount, }: {
                    address: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
                send({ from, to, amount, }: {
                    from: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                    amount: number | bigint | import("o1js").UInt64;
                }): import("o1js").AccountUpdate;
            };
            forEachUpdate(updates: import("o1js").AccountUpdateForest, callback: (update: import("o1js").AccountUpdate, usesToken: import("o1js").Bool) => void): void;
            checkZeroBalanceChange(updates: import("o1js").AccountUpdateForest): void;
            approveAccountUpdate(accountUpdate: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree): Promise<void>;
            approveAccountUpdates(accountUpdates: (import("o1js").AccountUpdate | import("o1js").AccountUpdateTree)[]): Promise<void>;
            "__#3@#private": any;
            address: import("o1js").PublicKey;
            tokenId: import("o1js").Field;
            init(): void;
            requireSignature(): void;
            skipAuthorization(): void;
            readonly self: import("o1js").AccountUpdate;
            newSelf(methodName?: string): import("o1js").AccountUpdate;
            sender: {
                self: import("o1js").SmartContract;
                getUnconstrained(): import("o1js").PublicKey;
                getAndRequireSignature(): import("o1js").PublicKey;
            };
            readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
            readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
            readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
            approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
            send(args: {
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            readonly balance: {
                addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
                subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            };
            emitEventIf<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(condition: import("o1js").Bool, type: K, event: any): void;
            emitEvent<K extends "update" | "transfer" | "sell" | "buy" | "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "mint" | "approveBuy" | "approveSell" | "approveTransfer" | "approveMint" | "approveUpdate" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT">(type: K, event: any): void;
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
        MAX_ACCOUNT_UPDATES: number;
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
            hash: import("o1js").Field;
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
            tag: () => typeof import("o1js").SmartContract;
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
    AdminContract: {
        new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
            admin: import("o1js").State<import("o1js").PublicKey>;
            upgradeAuthority: import("o1js").State<import("o1js").PublicKey>;
            isPaused: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canPause: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            deploy(props: import("./admin/standard.js").NFTAdminDeployProps): Promise<void>;
            events: {
                upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
                pause: typeof import("./contracts/pausable.js").PauseEvent;
                resume: typeof import("./contracts/pausable.js").PauseEvent;
                ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
            };
            ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
            getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
            upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
            canMint(mintRequest: import("./contracts/types.js").MintRequest): Promise<import("./contracts/types.js").MintParamsOption>;
            canUpdate(input: import("./contracts/types.js").NFTState, output: import("./contracts/types.js").NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canTransfer(address: import("o1js").PublicKey, from: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canSell(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canBuy(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, buyer: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            pause(): Promise<void>;
            resume(): Promise<void>;
            transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
            "__#3@#private": any;
            address: import("o1js").PublicKey;
            tokenId: import("o1js").Field;
            init(): void;
            requireSignature(): void;
            skipAuthorization(): void;
            readonly self: import("o1js").AccountUpdate;
            newSelf(methodName?: string): import("o1js").AccountUpdate;
            sender: {
                self: import("o1js").SmartContract;
                getUnconstrained(): import("o1js").PublicKey;
                getAndRequireSignature(): import("o1js").PublicKey;
            };
            readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
            readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
            readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
            approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
            send(args: {
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            readonly balance: {
                addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
                subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            };
            emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange">(condition: import("o1js").Bool, type: K, event: any): void;
            emitEvent<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange">(type: K, event: any): void;
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
            hash: import("o1js").Field;
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
            tag: () => typeof import("o1js").SmartContract;
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
    WhitelistedAdminContract: {
        new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
            admin: import("o1js").State<import("o1js").PublicKey>;
            upgradeAuthority: import("o1js").State<import("o1js").PublicKey>;
            whitelist: import("o1js").State<import("@minatokens/storage").Whitelist>;
            pauseData: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
            deploy(props: import("./admin/whitelisted.js").NFTWhitelistedAdminDeployProps): Promise<void>;
            events: {
                upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
                pause: typeof import("./contracts/pausable.js").PauseEvent;
                resume: typeof import("./contracts/pausable.js").PauseEvent;
                ownershipChange: typeof import("./contracts/ownable.js").OwnershipChangeEvent;
                updateWhitelist: typeof import("@minatokens/storage").Whitelist;
            };
            ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
            readonly getUpgradeContractConstructor: import("./contracts/upgradable.js").UpgradeAuthorityContractConstructor;
            getUpgradeContract(): Promise<import("./contracts/upgradable.js").UpgradeAuthorityBase>;
            upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
            canMint(mintRequest: import("./contracts/types.js").MintRequest): Promise<import("./contracts/types.js").MintParamsOption>;
            canUpdate(input: import("./contracts/types.js").NFTState, output: import("./contracts/types.js").NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canTransfer(address: import("o1js").PublicKey, from: import("o1js").PublicKey, to: import("o1js").PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canSell(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            canBuy(address: import("o1js").PublicKey, seller: import("o1js").PublicKey, buyer: import("o1js").PublicKey, price: import("o1js").UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
            updateWhitelist(whitelist: import("@minatokens/storage").Whitelist): Promise<void>;
            pause(): Promise<void>;
            resume(): Promise<void>;
            transferOwnership(newOwner: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
            "__#3@#private": any;
            address: import("o1js").PublicKey;
            tokenId: import("o1js").Field;
            init(): void;
            requireSignature(): void;
            skipAuthorization(): void;
            readonly self: import("o1js").AccountUpdate;
            newSelf(methodName?: string): import("o1js").AccountUpdate;
            sender: {
                self: import("o1js").SmartContract;
                getUnconstrained(): import("o1js").PublicKey;
                getAndRequireSignature(): import("o1js").PublicKey;
            };
            readonly account: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Account;
            readonly network: import("node_modules/o1js/dist/node/lib/mina/precondition.js").Network;
            readonly currentSlot: import("node_modules/o1js/dist/node/lib/mina/precondition.js").CurrentSlot;
            approve(update: import("o1js").AccountUpdate | import("o1js").AccountUpdateTree | import("o1js").AccountUpdateForest): void;
            send(args: {
                to: import("o1js").PublicKey | import("o1js").AccountUpdate | import("o1js").SmartContract;
                amount: number | bigint | import("o1js").UInt64;
            }): import("o1js").AccountUpdate;
            readonly balance: {
                addInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
                subInPlace(x: string | number | bigint | import("o1js").UInt64 | import("o1js").UInt32 | import("o1js").Int64): void;
            };
            emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(condition: import("o1js").Bool, type: K, event: any): void;
            emitEvent<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(type: K, event: any): void;
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
            hash: import("o1js").Field;
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
            tag: () => typeof import("o1js").SmartContract;
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
    VerificationKeyUpgradeAuthority: typeof VerificationKeyUpgradeAuthority;
};
