/**
 * NFTProgram is a ZkProgram providing zero-knowledge proofs for updating NFT metadata.
 * It includes methods for inserting metadata entries and merging proofs.
 *
 * @module NFTProgram
 */
import { Field, Cache, SelfProof, Signature } from "o1js";
import { NFTState } from "../contracts/types.js";
import { MetadataMap } from "../metadata/metadata.js";
export { NFTProgram };
/**
 * Defines the NFTProgram ZkProgram with methods for updating NFT metadata.
 */
declare const NFTProgram: {
    name: string;
    compile: (options?: {
        cache?: Cache;
        forceRecompile?: boolean;
        proofsEnabled?: boolean;
    }) => Promise<{
        verificationKey: {
            data: string;
            hash: Field;
        };
    }>;
    verify: (proof: import("o1js").Proof<NFTState, NFTState>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        insertMetadata: {
            rows: number;
            digest: string;
            gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("node_modules/o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        merge: {
            rows: number;
            digest: string;
            gates: import("node_modules/o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("node_modules/o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof NFTState;
    publicOutputType: typeof NFTState;
    privateInputTypes: {
        insertMetadata: [typeof MetadataMap, typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field), typeof import("node_modules/o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst | import("node_modules/o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("node_modules/o1js/dist/node/lib/provable/field.js").Field) => import("node_modules/o1js/dist/node/lib/provable/field.js").Field), typeof Signature];
        merge: [typeof SelfProof, typeof SelfProof];
    };
    auxiliaryOutputTypes: {
        insertMetadata: typeof MetadataMap;
        merge: undefined;
    };
    rawMethods: {
        insertMetadata: (publicInput: NFTState, ...args: [import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/field.js").Field, import("node_modules/o1js/dist/node/lib/provable/field.js").Field, Signature] & any[]) => Promise<{
            publicOutput: NFTState;
            auxiliaryOutput: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
        }>;
        merge: (publicInput: NFTState, ...args: [SelfProof<unknown, unknown>, SelfProof<unknown, unknown>] & any[]) => Promise<{
            publicOutput: NFTState;
        }>;
    };
    proofsEnabled: boolean;
    setProofsEnabled(proofsEnabled: boolean): void;
} & {
    insertMetadata: (publicInput: NFTState, ...args: [import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase, import("node_modules/o1js/dist/node/lib/provable/field.js").Field, import("node_modules/o1js/dist/node/lib/provable/field.js").Field, Signature] & any[]) => Promise<{
        proof: import("o1js").Proof<NFTState, NFTState>;
        auxiliaryOutput: import("node_modules/o1js/dist/node/lib/provable/merkle-tree-indexed.js").IndexedMerkleMapBase;
    }>;
    merge: (publicInput: NFTState, ...args: [SelfProof<unknown, unknown>, SelfProof<unknown, unknown>] & any[]) => Promise<{
        proof: import("o1js").Proof<NFTState, NFTState>;
        auxiliaryOutput: undefined;
    }>;
};
