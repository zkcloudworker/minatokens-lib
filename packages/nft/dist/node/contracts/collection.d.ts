/**
 * The NFT Collection Contract is responsible for managing a collection of NFTs.
 * It handles minting new NFTs, transferring ownership, buying, selling,
 * and interfacing with Admin Contracts for additional functionalities.
 *
 * @module CollectionContract
 */
import { Field, PublicKey, AccountUpdate, Bool, State, DeployArgs, AccountUpdateForest, VerificationKey, UInt32, UInt64, SmartContract } from "o1js";
import { MintParams, MintRequest, TransferParams, CollectionData, NFTUpdateProof, NFTStateStruct, MintEvent, TransferEvent, ApproveEvent, UpgradeVerificationKeyEvent, LimitMintingEvent, PauseNFTEvent, NFTAdminBase, NFTAdminContractConstructor, PauseEvent, OwnershipChangeEvent, NFTOwnerBase, NFTOwnerContractConstructor, UpgradeVerificationKeyData, NFTApprovalContractConstructor, NFTApprovalBase, NFTUpdateContractConstructor, NFTUpdateBase, TransferExtendedParams } from "../interfaces/index.js";
export { CollectionDeployProps, CollectionFactory, CollectionErrors };
declare const CollectionErrors: {
    wrongMasterNFTaddress: string;
    transferNotAllowed: string;
    collectionPaused: string;
    cannotMintMasterNFT: string;
    cannotMint: string;
    noPermissionToPause: string;
    noPermissionToResume: string;
    collectionNotPaused: string;
    transferApprovalRequired: string;
    noPermissionToChangeName: string;
    noPermissionToChangeBaseUri: string;
    noPermissionToChangeCreator: string;
    noPermissionToChangeRoyalty: string;
    noPermissionToChangeTransferFee: string;
    noPermissionToSetAdmin: string;
    cannotUpgradeVerificationKey: string;
    upgradeContractAddressNotSet: string;
    adminContractAddressNotSet: string;
    onlyOwnerCanUpgradeVerificationKey: string;
    invalidRoyaltyFee: string;
    invalidOracleAddress: string;
};
interface CollectionDeployProps extends Exclude<DeployArgs, undefined> {
    collectionName: Field;
    creator: PublicKey;
    admin: PublicKey;
    baseURL: Field;
    symbol: string;
    url: string;
}
/**
 * Creates a new NFT Collection Contract class.
 *
 * @param params - Constructor parameters including admin and upgrade contracts, and network ID.
 * @returns The Collection class extending TokenContract and implementing required interfaces.
 */
declare function CollectionFactory(params: {
    adminContract: () => NFTAdminContractConstructor;
    ownerContract: () => NFTOwnerContractConstructor;
    approvalContract: () => NFTApprovalContractConstructor;
    updateContract: () => NFTUpdateContractConstructor;
}): {
    new (address: PublicKey, tokenId?: Field): {
        /** The name of the NFT collection. */
        collectionName: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        /** The public key of the creator of the collection. */
        creator: State<PublicKey>;
        /** The public key of the Admin Contract. */
        admin: State<PublicKey>;
        /** The base URL for the metadata of the NFTs in the collection. */
        baseURL: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        /**
         * A packed data field containing additional collection parameters,
         * such as flags and fee configurations.
         */
        packedData: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        /**
         * Deploys the NFT Collection Contract with the initial settings.
         *
         * @param props - Deployment properties including collection name, creator, admin, baseURL, symbol, and URL.
         */
        deploy(props: CollectionDeployProps): Promise<void>;
        /**
         * Initializes the collection with a master NFT and initial data.
         *
         * @param masterNFT - The master NFT parameters.
         * @param collectionData - Initial collection data including flags and configurations.
         */
        initialize(masterNFT: MintParams, collectionData: CollectionData): Promise<void>;
        /**
         * Defines the events emitted by the contract.
         */
        events: {
            mint: typeof MintEvent;
            update: typeof PublicKey;
            transfer: typeof TransferEvent;
            approve: typeof ApproveEvent;
            upgradeNFTVerificationKey: typeof UpgradeVerificationKeyEvent;
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            limitMinting: typeof LimitMintingEvent;
            pause: typeof PauseEvent;
            resume: typeof PauseEvent;
            pauseNFT: typeof PauseNFTEvent;
            resumeNFT: typeof PauseNFTEvent;
            ownershipChange: typeof OwnershipChangeEvent;
            setName: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setBaseURL: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            setRoyaltyFee: typeof UInt32;
            setTransferFee: typeof UInt64;
            setAdmin: typeof PublicKey;
        };
        /**
         * Overrides the approveBase method to prevent transfers of tokens.
         *
         * @param forest - The account update forest.
         */
        approveBase(forest: AccountUpdateForest): Promise<void>;
        /**
         * Retrieves the Admin Contract instance.
         *
         * @returns The Admin Contract instance implementing NFTAdminBase.
         */
        getAdminContract(): NFTAdminBase;
        /**
         * Retrieves the NFT Owner Contract instance.
         *
         * @returns The Owner Contract instance implementing NFTOwnerBase.
         */
        getOwnerContract(address: PublicKey): NFTOwnerBase;
        /**
         * Retrieves the NFT Approval Contract instance.
         *
         * @returns The Approval Contract instance implementing NFTApprovalBase.
         */
        getApprovalContract(address: PublicKey): NFTApprovalBase;
        /**
         * Retrieves the NFT Update Contract instance.
         *
         * @returns The Update Contract instance implementing NFTUpdateBase.
         */
        getUpdateContract(address: PublicKey): NFTUpdateBase;
        /**
         * Ensures that the transaction is authorized by the creator.
         *
         * @returns The AccountUpdate of the creator.
         */
        ensureCreatorSignature(): Promise<AccountUpdate>;
        /**
         * Ensures that the transaction is authorized by the NFT owner
         *
         * @returns The AccountUpdate of the NFT owner.
         */
        ensureOwnerSignature(owner: PublicKey): Promise<AccountUpdate>;
        /**
         * Ensures that the collection is not paused.
         *
         * @returns The packed data of the collection.
         */
        ensureNotPaused(): Promise<void>;
        /**
         * Mints a new NFT directly by the creator.
         *
         * This method allows the creator of the collection to mint an NFT without requiring approval
         * from the admin contract. It ensures that the collection is not paused and that the caller
         * is the creator of the collection. A fee of 1 MINA is deducted from the creator's balance
         * to cover the cost of creating a new account.
         *
         * We do not constrain here the address of the NFT to allow for the Master NFT to be minted.
         * The Master NFT is the NFT with the same address as the Collection contract and it holds
         * the metadata for the collection. It can be minted only by the creator of the collection.
         *
         * @param params - The mint parameters containing details of the NFT to be minted.
         */
        mintByCreator(params: MintParams): Promise<void>;
        /**
         * Mints a new NFT with approval.
         *
         * @param mintRequest - The minting request containing parameters and proofs.
         */
        mint(mintRequest: MintRequest): Promise<void>;
        /**
         * Internal method to mint an NFT.
         *
         * @param params - The mint parameters.
         * @param collectionData - The current collection data.
         * @returns The MintEvent emitted.
         */
        _mint(params: MintParams): Promise<MintEvent>;
        /**
         * Updates the NFT with admin approval.
         *
         * @param proof - The proof of the NFT update.
         * @param vk - The verification key.
         */
        update(proof: NFTUpdateProof, vk: VerificationKey): Promise<void>;
        /**
         * Updates the NFT with admin approval and oracle approval.
         *
         * @param proof - The proof of the NFT update.
         * @param vk - The verification key.
         */
        updateWithOracle(proof: NFTUpdateProof, vk: VerificationKey): Promise<void>;
        /**
         * Updates the NFT with admin approval - internal method.
         *
         * @param proof - The proof of the NFT update.
         * @param vk - The verification key.
         */
        _update(proof: NFTUpdateProof, vk: VerificationKey): Promise<void>;
        /**
         * Approves an address to transfer an NFT.
         *
         * @param nftAddress - The address of the NFT.
         * @param approved - The approved public key.
         */
        approveAddress(nftAddress: PublicKey, approved: PublicKey): Promise<void>;
        /**
         * Transfers ownership of an NFT without admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        approveAddressByProof(nftAddress: PublicKey, approved: PublicKey): Promise<void>;
        /**
         * Transfers ownership of an NFT without admin approval.
         * This method should be used by wallets for collections that do not require transfer approval
         * and the owners of the NFTs which approve the transfer by signature
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         * @param price - The price of the NFT (optional).
         */
        transferBySignature(params: TransferParams): Promise<void>;
        /**
         * Transfers ownership of an NFT using a proof in case the owner is a contract
         * Can be called by the owner or approved that should be a contracts
         * supporting NFTApprovalBase interface
         *
         * @param params - The transfer parameters.
         */
        transferByProof(params: TransferParams): Promise<void>;
        /**
         * Transfers ownership of an NFT using a proof in case the owner is a contract
         * Can be called by the owner or approved that should be a contracts
         * supporting NFTApprovalBase interface
         *
         * @param params - The transfer parameters.
         */
        approvedTransferByProof(params: TransferParams): Promise<void>;
        /**
         * Transfers ownership of an NFT with admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         * @param price - The price of the NFT (optional).
         */
        approvedTransferBySignature(params: TransferParams): Promise<void>;
        /**
         * Internal method to transfer an NFT.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         * @param transferFee - The transfer fee amount.
         * @returns The TransferEvent emitted.
         */
        _transfer(params: {
            transferEventDraft: TransferExtendedParams;
            transferFee: UInt64;
            royaltyFee: UInt32;
        }): Promise<TransferExtendedParams>;
        /**
         * Upgrades the verification key of a specific NFT.
         *
         * @param address - The address of the NFT.
         * @param vk - The new verification key.
         */
        upgradeNFTVerificationKeyBySignature(address: PublicKey, vk: VerificationKey): Promise<void>;
        /**
         * Upgrades the verification key of a specific NFT by Proof.
         *
         * @param address - The address of the NFT.
         * @param vk - The new verification key.
         */
        upgradeNFTVerificationKeyByProof(address: PublicKey, vk: VerificationKey): Promise<void>;
        _upgrade(address: PublicKey, vk: VerificationKey): Promise<UpgradeVerificationKeyData>;
        /**
         * Upgrades the verification key of the collection contract.
         *
         * @param vk - The new verification key.
         */
        upgradeVerificationKey(vk: VerificationKey): Promise<void>;
        /**
         * Limits further minting of NFTs in the collection.
         */
        limitMinting(): Promise<void>;
        /**
         * Pauses the collection, disabling certain actions.
         */
        pause(): Promise<void>;
        /**
         * Resumes the collection, re-enabling actions.
         */
        resume(): Promise<void>;
        /**
         * Pauses a specific NFT, disabling its actions.
         *
         * @param address - The address of the NFT to pause.
         */
        pauseNFTBySignature(address: PublicKey): Promise<void>;
        /**
         * Pauses a specific NFT, disabling its actions.
         *
         * @param address - The address of the NFT to pause.
         */
        pauseNFTByProof(address: PublicKey): Promise<void>;
        /**
         * Resumes a specific NFT, re-enabling its actions.
         *
         * @param address - The address of the NFT to resume.
         */
        resumeNFT(address: PublicKey): Promise<void>;
        /**
         * Resumes a specific NFT, re-enabling its actions.
         *
         * @param address - The address of the NFT to resume.
         */
        resumeNFTByProof(address: PublicKey): Promise<void>;
        /**
         * Sets a new name for the collection.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setName' event with the new name.
         *
         * @param name - The new name for the collection as a Field value
         * @throws {Error} If caller lacks permission to change name
         */
        setName(name: Field): Promise<void>;
        /**
         * Updates the base URL for the collection's metadata.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setBaseURL' event with the new URL.
         *
         * @param baseURL - The new base URL as a Field value
         * @throws {Error} If caller lacks permission to change base URI
         */
        setBaseURL(baseURL: Field): Promise<void>;
        /**
         * Sets a new admin address for the collection.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setAdmin' event with the new admin address.
         *
         * @param admin - The public key of the new admin
         * @throws {Error} If caller lacks permission to set admin
         */
        setAdmin(admin: PublicKey): Promise<void>;
        /**
         * Updates the royalty fee for the collection.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setRoyaltyFee' event with the new fee.
         *
         * @param royaltyFee - The new royalty fee as a UInt32 value
         * @throws {Error} If caller lacks permission to change royalty fee
         */
        setRoyaltyFee(royaltyFee: UInt32): Promise<void>;
        /**
         * Updates the transfer fee for the collection.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setTransferFee' event with the new fee.
         *
         * @param transferFee - The new transfer fee as a UInt64 value
         * @throws {Error} If caller lacks permission to change transfer fee
         */
        setTransferFee(transferFee: UInt64): Promise<void>;
        /**
         * Transfers ownership of the collection to a new owner.
         *
         * @param to - The public key of the new owner.
         * @returns The public key of the old owner.
         */
        transferOwnership(to: PublicKey): Promise<PublicKey>;
        getNFTState(address: PublicKey): Promise<NFTStateStruct>;
        deriveTokenId(): import("node_modules/o1js/dist/node/lib/provable/field.js").Field;
        readonly internal: {
            mint({ address, amount, }: {
                address: PublicKey | AccountUpdate | SmartContract;
                amount: number | bigint | UInt64;
            }): AccountUpdate;
            burn({ address, amount, }: {
                address: PublicKey | AccountUpdate | SmartContract;
                amount: number | bigint | UInt64;
            }): AccountUpdate;
            send({ from, to, amount, }: {
                from: PublicKey | AccountUpdate | SmartContract;
                to: PublicKey | AccountUpdate | SmartContract;
                amount: number | bigint | UInt64;
            }): AccountUpdate;
        };
        forEachUpdate(updates: AccountUpdateForest, callback: (update: AccountUpdate, usesToken: Bool) => void): void;
        checkZeroBalanceChange(updates: AccountUpdateForest): void;
        approveAccountUpdate(accountUpdate: AccountUpdate | import("o1js").AccountUpdateTree): Promise<void>;
        approveAccountUpdates(accountUpdates: (AccountUpdate | import("o1js").AccountUpdateTree)[]): Promise<void>;
        transfer(from: PublicKey | AccountUpdate, to: PublicKey | AccountUpdate, amount: UInt64 | number | bigint): Promise<void>;
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
        approve(update: AccountUpdate | import("o1js").AccountUpdateTree | AccountUpdateForest): void;
        send(args: {
            to: PublicKey | AccountUpdate | SmartContract;
            amount: number | bigint | UInt64;
        }): AccountUpdate;
        readonly balance: {
            addInPlace(x: string | number | bigint | UInt64 | UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | UInt64 | UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(condition: Bool, type: K, event: any): void;
        emitEvent<K extends "update" | "approve" | "transfer" | "upgradeVerificationKey" | "pause" | "resume" | "mint" | "upgradeNFTVerificationKey" | "limitMinting" | "pauseNFT" | "resumeNFT" | "ownershipChange" | "setName" | "setBaseURL" | "setRoyaltyFee" | "setTransferFee" | "setAdmin">(type: K, event: any): void;
        fetchEvents(start?: UInt32, end?: UInt32): Promise<{
            type: string;
            event: {
                data: import("o1js").ProvablePure<any>;
                transactionInfo: {
                    transactionHash: string;
                    transactionStatus: string;
                    transactionMemo: string;
                };
            };
            blockHeight: UInt32;
            blockHash: string;
            parentBlockHash: string;
            globalSlot: UInt32;
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
