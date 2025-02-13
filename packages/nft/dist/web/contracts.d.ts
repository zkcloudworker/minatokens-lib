import { CollectionFactory } from "./contracts/index.js";
import { NFTOwnerContractConstructor, NFTAdminContractConstructor, NFTApprovalContractConstructor, DefineApprovalFactory, DefineOwnerFactory, DefineUpdateFactory, NFTUpdateContractConstructor } from "./interfaces/index.js";
export declare const NFTAdvancedAdmin: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        admin: import("o1js").State<import("o1js").PublicKey>;
        upgradeAuthority: import("o1js").State<import("o1js").PublicKey>;
        whitelist: import("o1js").State<import("@minatokens/storage").Whitelist>;
        data: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        deploy(props: import("./admin/advanced.js").NFTAdvancedAdminDeployProps): Promise<void>;
        events: {
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            pause: typeof import("./interfaces/pausable.js").PauseEvent;
            resume: typeof import("./interfaces/pausable.js").PauseEvent;
            ownershipChange: typeof import("./interfaces/ownable.js").OwnershipChangeEvent;
            updateWhitelist: typeof import("@minatokens/storage").Whitelist;
        };
        ensureOwnerSignature(): Promise<import("o1js").AccountUpdate>;
        readonly getUpgradeContractConstructor: import("@minatokens/upgradable").UpgradeAuthorityContractConstructor;
        getUpgradeContract(): Promise<import("@minatokens/upgradable").UpgradeAuthorityBase>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        canMint(mintRequest: import("./interfaces/types.js").MintRequest): Promise<import("./interfaces/types.js").MintParamsOption>;
        canUpdate(input: import("./interfaces/types.js").NFTState, output: import("./interfaces/types.js").NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        canTransfer(transferEvent: import("./interfaces/events.js").TransferEvent): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        updateWhitelist(whitelist: import("@minatokens/storage").Whitelist): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        transferOwnership(to: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        canChangeVerificationKey(vk: import("o1js").VerificationKey, address: import("o1js").PublicKey, tokenId: import("o1js").Field): Promise<import("o1js").Bool>;
        canChangeName(name: import("o1js").Field): Promise<import("o1js").Bool>;
        canChangeCreator(creator: import("o1js").PublicKey): Promise<import("o1js").Bool>;
        canChangeBaseUri(baseUri: import("o1js").Field): Promise<import("o1js").Bool>;
        canChangeRoyalty(royaltyFee: import("o1js").UInt32): Promise<import("o1js").Bool>;
        canChangeTransferFee(transferFee: import("o1js").UInt64): Promise<import("o1js").Bool>;
        canSetAdmin(admin: import("o1js").PublicKey): Promise<import("o1js").Bool>;
        canPause(): Promise<import("o1js").Bool>;
        canResume(): Promise<import("o1js").Bool>;
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
export type NonFungibleTokenContracts = {
    Collection: ReturnType<typeof CollectionFactory>;
    Approval: NFTApprovalContractConstructor;
    Owner: NFTOwnerContractConstructor;
    Admin: NFTAdminContractConstructor;
    Update: NFTUpdateContractConstructor;
};
export declare function NonFungibleTokenContractsFactory(params: {
    adminContract?: NFTAdminContractConstructor;
    approvalFactory?: DefineApprovalFactory;
    ownerFactory?: DefineOwnerFactory;
    updateFactory?: DefineUpdateFactory;
}): NonFungibleTokenContracts;
export declare const Collection: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        creator: import("o1js").State<import("o1js").PublicKey>;
        admin: import("o1js").State<import("o1js").PublicKey>;
        baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        packedData: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
        initialize(masterNFT: import("./interfaces/types.js").MintParams, collectionData: import("./interfaces/types.js").CollectionData): Promise<void>;
        events: {
            mint: typeof import("./interfaces/events.js").MintEvent;
            update: typeof import("o1js").PublicKey;
            transfer: typeof import("./interfaces/events.js").TransferEvent;
            approve: typeof import("./interfaces/events.js").ApproveEvent;
            upgradeNFTVerificationKey: typeof import("./interfaces/events.js").UpgradeVerificationKeyEvent;
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            limitMinting: typeof import("./interfaces/events.js").LimitMintingEvent;
            pause: typeof import("./interfaces/pausable.js").PauseEvent;
            resume: typeof import("./interfaces/pausable.js").PauseEvent;
            pauseNFT: typeof import("./interfaces/events.js").PauseNFTEvent;
            resumeNFT: typeof import("./interfaces/events.js").PauseNFTEvent;
            ownershipChange: typeof import("./interfaces/ownable.js").OwnershipChangeEvent;
            setName: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setBaseURL: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setRoyaltyFee: typeof import("o1js").UInt32;
            setTransferFee: typeof import("o1js").UInt64;
            setAdmin: typeof import("o1js").PublicKey;
        };
        approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
        getAdminContract(): import("./interfaces/admin.js").NFTAdminBase;
        getOwnerContract(address: import("o1js").PublicKey): import("./interfaces/owner.js").NFTOwnerBase;
        getApprovalContract(address: import("o1js").PublicKey): import("./interfaces/approval.js").NFTApprovalBase;
        getUpdateContract(address: import("o1js").PublicKey): import("./interfaces/update.js").NFTUpdateBase;
        ensureCreatorSignature(): Promise<import("o1js").AccountUpdate>;
        ensureOwnerSignature(owner: import("o1js").PublicKey): Promise<import("o1js").AccountUpdate>;
        ensureNotPaused(): Promise<void>;
        mintByCreator(params: import("./interfaces/types.js").MintParams): Promise<void>;
        mint(mintRequest: import("./interfaces/types.js").MintRequest): Promise<void>;
        _mint(params: import("./interfaces/types.js").MintParams): Promise<import("./interfaces/events.js").MintEvent>;
        update(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        updateWithOracle(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        _update(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        approveAddress(nftAddress: import("o1js").PublicKey, approved: import("o1js").PublicKey): Promise<void>;
        approveAddressByProof(nftAddress: import("o1js").PublicKey, approved: import("o1js").PublicKey): Promise<void>;
        transferBySignature(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        transferByProof(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        approvedTransferByProof(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        approvedTransferBySignature(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        _transfer(params: {
            transferEventDraft: import("./interfaces/types.js").TransferExtendedParams;
            transferFee: import("o1js").UInt64;
            royaltyFee: import("o1js").UInt32;
        }): Promise<import("./interfaces/types.js").TransferExtendedParams>;
        upgradeNFTVerificationKeyBySignature(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        upgradeNFTVerificationKeyByProof(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        _upgrade(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<import("./interfaces/events.js").UpgradeVerificationKeyData>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        limitMinting(): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        pauseNFTBySignature(address: import("o1js").PublicKey): Promise<void>;
        pauseNFTByProof(address: import("o1js").PublicKey): Promise<void>;
        resumeNFT(address: import("o1js").PublicKey): Promise<void>;
        resumeNFTByProof(address: import("o1js").PublicKey): Promise<void>;
        setName(name: import("o1js").Field): Promise<void>;
        setBaseURL(baseURL: import("o1js").Field): Promise<void>;
        setAdmin(admin: import("o1js").PublicKey): Promise<void>;
        setRoyaltyFee(royaltyFee: import("o1js").UInt32): Promise<void>;
        setTransferFee(transferFee: import("o1js").UInt64): Promise<void>;
        transferOwnership(to: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        getNFTState(address: import("o1js").PublicKey): Promise<import("./interfaces/types.js").NFTStateStruct>;
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
        transfer(from: import("o1js").PublicKey | import("o1js").AccountUpdate, to: import("o1js").PublicKey | import("o1js").AccountUpdate, amount: import("o1js").UInt64 | number | bigint): Promise<void>;
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
        emitEventIf<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(type: K, event: any): void;
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
}, Approval: NFTApprovalContractConstructor, Owner: NFTOwnerContractConstructor, Admin: NFTAdminContractConstructor, Update: NFTUpdateContractConstructor;
export declare const AdvancedCollection: {
    new (address: import("o1js").PublicKey, tokenId?: import("o1js").Field): {
        collectionName: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        creator: import("o1js").State<import("o1js").PublicKey>;
        admin: import("o1js").State<import("o1js").PublicKey>;
        baseURL: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        packedData: import("o1js").State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        deploy(props: import("./contracts/collection.js").CollectionDeployProps): Promise<void>;
        initialize(masterNFT: import("./interfaces/types.js").MintParams, collectionData: import("./interfaces/types.js").CollectionData): Promise<void>;
        events: {
            mint: typeof import("./interfaces/events.js").MintEvent;
            update: typeof import("o1js").PublicKey;
            transfer: typeof import("./interfaces/events.js").TransferEvent;
            approve: typeof import("./interfaces/events.js").ApproveEvent;
            upgradeNFTVerificationKey: typeof import("./interfaces/events.js").UpgradeVerificationKeyEvent;
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            limitMinting: typeof import("./interfaces/events.js").LimitMintingEvent;
            pause: typeof import("./interfaces/pausable.js").PauseEvent;
            resume: typeof import("./interfaces/pausable.js").PauseEvent;
            pauseNFT: typeof import("./interfaces/events.js").PauseNFTEvent;
            resumeNFT: typeof import("./interfaces/events.js").PauseNFTEvent;
            ownershipChange: typeof import("./interfaces/ownable.js").OwnershipChangeEvent;
            setName: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setBaseURL: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setRoyaltyFee: typeof import("o1js").UInt32;
            setTransferFee: typeof import("o1js").UInt64;
            setAdmin: typeof import("o1js").PublicKey;
        };
        approveBase(forest: import("o1js").AccountUpdateForest): Promise<void>;
        getAdminContract(): import("./interfaces/admin.js").NFTAdminBase;
        getOwnerContract(address: import("o1js").PublicKey): import("./interfaces/owner.js").NFTOwnerBase;
        getApprovalContract(address: import("o1js").PublicKey): import("./interfaces/approval.js").NFTApprovalBase;
        getUpdateContract(address: import("o1js").PublicKey): import("./interfaces/update.js").NFTUpdateBase;
        ensureCreatorSignature(): Promise<import("o1js").AccountUpdate>;
        ensureOwnerSignature(owner: import("o1js").PublicKey): Promise<import("o1js").AccountUpdate>;
        ensureNotPaused(): Promise<void>;
        mintByCreator(params: import("./interfaces/types.js").MintParams): Promise<void>;
        mint(mintRequest: import("./interfaces/types.js").MintRequest): Promise<void>;
        _mint(params: import("./interfaces/types.js").MintParams): Promise<import("./interfaces/events.js").MintEvent>;
        update(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        updateWithOracle(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        _update(proof: import("./interfaces/types.js").NFTUpdateProof, vk: import("o1js").VerificationKey): Promise<void>;
        approveAddress(nftAddress: import("o1js").PublicKey, approved: import("o1js").PublicKey): Promise<void>;
        approveAddressByProof(nftAddress: import("o1js").PublicKey, approved: import("o1js").PublicKey): Promise<void>;
        transferBySignature(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        transferByProof(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        approvedTransferByProof(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        approvedTransferBySignature(params: import("./interfaces/types.js").TransferParams): Promise<void>;
        _transfer(params: {
            transferEventDraft: import("./interfaces/types.js").TransferExtendedParams;
            transferFee: import("o1js").UInt64;
            royaltyFee: import("o1js").UInt32;
        }): Promise<import("./interfaces/types.js").TransferExtendedParams>;
        upgradeNFTVerificationKeyBySignature(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        upgradeNFTVerificationKeyByProof(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<void>;
        _upgrade(address: import("o1js").PublicKey, vk: import("o1js").VerificationKey): Promise<import("./interfaces/events.js").UpgradeVerificationKeyData>;
        upgradeVerificationKey(vk: import("o1js").VerificationKey): Promise<void>;
        limitMinting(): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        pauseNFTBySignature(address: import("o1js").PublicKey): Promise<void>;
        pauseNFTByProof(address: import("o1js").PublicKey): Promise<void>;
        resumeNFT(address: import("o1js").PublicKey): Promise<void>;
        resumeNFTByProof(address: import("o1js").PublicKey): Promise<void>;
        setName(name: import("o1js").Field): Promise<void>;
        setBaseURL(baseURL: import("o1js").Field): Promise<void>;
        setAdmin(admin: import("o1js").PublicKey): Promise<void>;
        setRoyaltyFee(royaltyFee: import("o1js").UInt32): Promise<void>;
        setTransferFee(transferFee: import("o1js").UInt64): Promise<void>;
        transferOwnership(to: import("o1js").PublicKey): Promise<import("o1js").PublicKey>;
        getNFTState(address: import("o1js").PublicKey): Promise<import("./interfaces/types.js").NFTStateStruct>;
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
        transfer(from: import("o1js").PublicKey | import("o1js").AccountUpdate, to: import("o1js").PublicKey | import("o1js").AccountUpdate, amount: import("o1js").UInt64 | number | bigint): Promise<void>;
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
        emitEventIf<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(condition: import("o1js").Bool, type: K, event: any): void;
        emitEvent<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(type: K, event: any): void;
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
}, AdvancedApproval: NFTApprovalContractConstructor, AdvancedOwner: NFTOwnerContractConstructor, AdvancedAdmin: NFTAdminContractConstructor;
