import { Bool, DeployArgs, PublicKey, SmartContract, State, VerificationKey, UInt64, Field, AccountUpdate } from "o1js";
import { MintRequest, NFTState, MintParamsOption, PauseEvent, OwnershipChangeEvent } from "../contracts/index.js";
import { UpgradeAuthorityBase, UpgradeAuthorityContractConstructor } from "@minatokens/upgradable";
export { NFTAdminContract, NFTAdminDeployProps };
interface NFTAdminDeployProps extends Exclude<DeployArgs, undefined> {
    admin: PublicKey;
    upgradeAuthority: PublicKey;
    uri: string;
    canPause: Bool;
    isPaused: Bool;
}
declare function NFTAdminContract(params?: {
    upgradeContract?: UpgradeAuthorityContractConstructor;
}): {
    new (address: PublicKey, tokenId?: Field): {
        /**
         * The public key of the contract's administrator.
         * This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.
         */
        admin: State<PublicKey>;
        /**
         * The public key of the upgrade authority contract.
         * This is the contract responsible for validating and authorizing upgrades to the verification key.
         */
        upgradeAuthority: State<PublicKey>;
        /**
         * A boolean flag indicating whether the contract is currently paused.
         * When `true`, certain operations are disabled.
         */
        isPaused: State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * A boolean flag indicating whether the contract has the ability to be paused.
         * This allows for disabling the pause functionality if desired.
         */
        canPause: State<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Deploys the contract with initial settings.
         * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
         */
        deploy(props: NFTAdminDeployProps): Promise<void>;
        /**
         * Contract events emitted during various operations.
         */
        events: {
            /** Emitted when the verification key is upgraded. */
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            /** Emitted when the contract is paused. */
            pause: typeof PauseEvent;
            /** Emitted when the contract is resumed. */
            resume: typeof PauseEvent;
            /** Emitted when ownership of the contract changes. */
            ownershipChange: typeof OwnershipChangeEvent;
        };
        /**
         * Ensures that the transaction is authorized by the contract owner.
         * @returns A signed `AccountUpdate` from the admin.
         */
        ensureOwnerSignature(): Promise<AccountUpdate>;
        /**
         * Retrieves the associated upgrade authority contract.
         * @returns An instance of `UpgradeAuthorityBase`.
         * @throws If the upgrade contract is not provided.
         */
        getUpgradeContract(): Promise<UpgradeAuthorityBase>;
        /**
         * Upgrades the contract's verification key after validating with the upgrade authority.
         * @param vk - The new verification key to upgrade to.
         */
        upgradeVerificationKey(vk: VerificationKey): Promise<void>;
        /**
         * Determines whether minting is allowed for the given request.
         * Returns mint parameters if allowed, or none if not allowed.
         * @param mintRequest - The minting request details.
         * @returns A `MintParamsOption` indicating if minting is permitted.
         */
        canMint(mintRequest: MintRequest): Promise<MintParamsOption>;
        /**
         * Checks whether the NFT state can be updated.
         * Typically returns true if the contract is not paused.
         * @param input - The current state of the NFT.
         * @param output - The desired new state of the NFT.
         * @returns A `Bool` indicating whether the update is allowed.
         */
        canUpdate(input: NFTState, output: NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Determines whether a transfer between the specified addresses is permitted.
         * @param address - The NFT contract address.
         * @param from - The sender's public key.
         * @param to - The recipient's public key.
         * @returns A `Bool` indicating whether the transfer is allowed.
         */
        canTransfer(address: PublicKey, from: PublicKey, to: PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Determines whether the NFT can be listed for sale at the given price.
         * @param address - The NFT contract address.
         * @param seller - The seller's public key.
         * @param price - The listing price.
         * @returns A `Bool` indicating whether the sale is permitted.
         */
        canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
         * @param address - The NFT contract address.
         * @param seller - The seller's public key.
         * @param buyer - The buyer's public key.
         * @param price - The purchase price.
         * @returns A `Bool` indicating whether the purchase is allowed.
         */
        canBuy(address: PublicKey, seller: PublicKey, buyer: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Pauses the contract, disabling certain administrative actions.
         * Can only be called by the admin if `canPause` is `true`.
         */
        pause(): Promise<void>;
        /**
         * Resumes the contract, re-enabling administrative actions.
         * Can only be called by the admin if `canPause` is `true`.
         */
        resume(): Promise<void>;
        /**
         * Transfers ownership of the contract to a new admin.
         * @param newOwner - The public key of the new owner.
         * @returns The public key of the previous owner.
         */
        transferOwnership(newOwner: PublicKey): Promise<PublicKey>;
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
        emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange">(condition: Bool, type: K, event: any): void;
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
