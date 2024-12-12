/**
 * The `NFTWhitelistedAdminContract` is an implementation of an admin contract that uses a whitelist to control access to certain actions within the NFT ecosystem.
 * This contract ensures that only whitelisted addresses can perform specific actions such as minting, updating, transferring, buying, or selling NFTs.
 * It also introduces functionality for pausing and resuming the contract, upgrading the contract's verification key, and transferring ownership.
 */
import { Bool, DeployArgs, PublicKey, SmartContract, State, VerificationKey, UInt64, Field, AccountUpdate, UInt32 } from "o1js";
import { Whitelist } from "@minatokens/storage";
import { MintRequest, NFTState, MintParamsOption, PauseEvent, OwnershipChangeEvent } from "../contracts/index.js";
import { UpgradeAuthorityBase, UpgradeAuthorityContractConstructor } from "@minatokens/upgradable";
export { NFTWhitelistedAdminContract, PauseData, NFTWhitelistedAdminDeployProps, };
/**
 * Deployment properties for the `NFTWhitelistedAdminContract`.
 */
interface NFTWhitelistedAdminDeployProps extends Exclude<DeployArgs, undefined> {
    /** The public key of the admin or owner of the contract. */
    admin: PublicKey;
    /** The public key of the Upgrade Authority Contract. */
    upgradeAuthority: PublicKey;
    /** The whitelist. */
    whitelist: Whitelist;
    /** The URI of the zkApp. */
    uri: string;
    /** Flag indicating whether the contract can be paused. */
    canPause: Bool;
    /** Flag indicating whether the contract is currently paused. */
    isPaused: Bool;
}
declare const PauseData_base: (new (value: {
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    canPause: boolean;
    isPaused: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        canPause: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        canPause: boolean;
        isPaused: boolean;
    };
    fromJSON: (x: {
        canPause: boolean;
        isPaused: boolean;
    }) => {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        canPause: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * Represents pause-related data, containing flags for pause functionality.
 */
declare class PauseData extends PauseData_base {
    /**
     * Packs the pause data into a `Field`.
     * @returns A `Field` representing the packed pause data.
     */
    pack(): Field;
    /**
     * Unpacks a `Field` into `PauseData`.
     * @param field The `Field` to unpack.
     * @returns An instance of `PauseData`.
     */
    static unpack(field: Field): PauseData;
}
/**
 * Constructs the `NFTWhitelistedAdmin` class, an admin contract that uses a whitelist to control access.
 * @param params Object containing the upgrade contract constructor.
 * @returns The `NFTWhitelistedAdmin` class.
 */
declare function NFTWhitelistedAdminContract(params: {
    upgradeContract: UpgradeAuthorityContractConstructor;
}): {
    new (address: PublicKey, tokenId?: Field): {
        /** The public key of the admin or owner of the contract. */
        admin: State<PublicKey>;
        /** The public key of the Upgrade Authority Contract. */
        upgradeAuthority: State<PublicKey>;
        /** The root hash of the Merkle tree representing the whitelist. */
        whitelist: State<Whitelist>;
        /** Packed field containing pause-related flags. */
        pauseData: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
        /**
         * Deploys the `NFTWhitelistedAdmin` contract with the provided initial settings.
         * @param props Deployment properties.
         */
        deploy(props: NFTWhitelistedAdminDeployProps): Promise<void>;
        events: {
            /** Emitted when the contract's verification key is upgraded. */
            upgradeVerificationKey: typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field);
            /** Emitted when the contract is paused. */
            pause: typeof PauseEvent;
            /** Emitted when the contract is resumed. */
            resume: typeof PauseEvent;
            /** Emitted when ownership of the contract changes. */
            ownershipChange: typeof OwnershipChangeEvent;
            /** Emitted when the whitelist is updated. */
            updateWhitelist: typeof Whitelist;
        };
        /**
         * Ensures that the transaction is authorized by the contract owner.
         * @returns An `AccountUpdate` representing the admin's signed transaction.
         */
        ensureOwnerSignature(): Promise<AccountUpdate>;
        /** Gets the upgrade contract constructor. */
        readonly getUpgradeContractConstructor: UpgradeAuthorityContractConstructor;
        /**
         * Retrieves the `UpgradeAuthorityBase` contract instance.
         * @returns An instance of the upgrade authority contract.
         */
        getUpgradeContract(): Promise<UpgradeAuthorityBase>;
        /**
         * Upgrades the contract's verification key using the Upgrade Authority Contract.
         * @param vk The new verification key.
         */
        upgradeVerificationKey(vk: VerificationKey): Promise<void>;
        /**
         * Determines if the minting request can proceed by checking if the owner and sender are whitelisted.
         * @param mintRequest The minting request parameters.
         * @returns A `MintParamsOption` indicating if minting is allowed.
         */
        canMint(mintRequest: MintRequest): Promise<MintParamsOption>;
        /**
         * Checks whether the NFT's state can be updated, ensuring the new owner is whitelisted.
         * @param input The current state of the NFT.
         * @param output The desired new state of the NFT.
         * @returns A `Bool` indicating whether the update is permitted.
         */
        canUpdate(input: NFTState, output: NFTState): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Verifies if the transfer between `from` and `to` addresses is allowed based on whitelist status.
         * @param address The address of the NFT.
         * @param from The sender's public key.
         * @param to The receiver's public key.
         * @returns A `Bool` indicating whether the transfer is permitted.
         */
        canTransfer(address: PublicKey, from: PublicKey, to: PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Determines if the seller is permitted to list the NFT for sale at the specified price.
         * @param address The address of the NFT.
         * @param seller The seller's public key.
         * @param price The price at which the NFT is being sold.
         * @returns A `Bool` indicating whether the sale is permissible.
         */
        canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Determines if the buyer and seller are allowed to perform the transaction at the specified price.
         * @param address The address of the NFT.
         * @param seller The seller's public key.
         * @param buyer The buyer's public key.
         * @param price The price at which the NFT is being bought.
         * @returns A `Bool` indicating whether the purchase is permitted.
         */
        canBuy(address: PublicKey, seller: PublicKey, buyer: PublicKey, price: UInt64): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
        /**
         * Updates the whitelist's Merkle root and the associated off-chain storage reference.
         * @param whitelistRoot The new whitelist root.
         * @param storage The storage reference for the whitelist data.
         */
        updateWhitelist(whitelist: Whitelist): Promise<void>;
        /**
         * Pauses the contract, preventing certain administrative actions from being performed.
         */
        pause(): Promise<void>;
        /**
         * Resumes the contract, allowing administrative actions to be performed again.
         */
        resume(): Promise<void>;
        /**
         * Transfers ownership of the contract to a new admin.
         * @param newOwner The public key of the new admin.
         * @returns The public key of the old owner.
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
            addInPlace(x: string | number | bigint | UInt64 | UInt32 | import("o1js").Int64): void;
            subInPlace(x: string | number | bigint | UInt64 | UInt32 | import("o1js").Int64): void;
        };
        emitEventIf<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(condition: Bool, type: K, event: any): void;
        emitEvent<K extends "upgradeVerificationKey" | "pause" | "resume" | "ownershipChange" | "updateWhitelist">(type: K, event: any): void;
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
