import { Field } from "o1js";
/**
 * Represents a metadata tree using a Merkle tree structure.
 *
 * The `MetadataTree` class is used to manage a set of key-value pairs representing metadata,
 * storing them in a Merkle tree for efficient verification and integrity checks.
 *
 * This class is a utility within the NFT standard on Mina Protocol, enabling secure and verifiable
 * storage of metadata. By leveraging the Merkle tree, clients can prove the inclusion of specific
 * metadata entries without exposing the entire dataset.
 */
export declare class MetadataTree {
    /**
     * The list of key-value pairs stored in the tree.
     * Each key is a `bigint` representing the index in the Merkle tree,
     * and each value is a `Field` element from o1js.
     */
    readonly values: {
        key: bigint;
        value: Field;
    }[];
    /**
     * The height of the Merkle tree.
     * Determines the maximum number of elements the tree can hold.
     */
    readonly height: number;
    /**
     * The root of the Merkle tree.
     * Used for verifying the integrity of the tree and its contents.
     */
    readonly root: Field;
    /**
     * Constructs a new `MetadataTree` with the specified height and key-value pairs.
     *
     * @param height - The height of the Merkle tree (must be between 1 and 254).
     * @param values - An array of key-value pairs to store in the tree.
     *
     * @throws Will throw an error if the number of values exceeds the maximum capacity of the tree.
     * @throws Will throw an error if any key is out of bounds for the tree height.
     */
    constructor(height: number, values: {
        key: bigint;
        value: Field;
    }[]);
    /**
     * Serializes the `MetadataTree` to a JSON object.
     *
     * @returns An object containing the tree's height, root, and values.
     */
    toJSON(): {
        height: number;
        root: string;
        values: {
            key: string;
            value: string;
        }[];
    };
    /**
     * Deserializes a JSON object into a `MetadataTree` instance.
     *
     * @param json - The JSON object containing the tree data.
     *
     * @returns A new `MetadataTree` instance constructed from the JSON data.
     *
     * @throws Will throw an error if the JSON data is invalid or inconsistent.
     */
    static fromJSON(json: {
        height: number;
        root: string;
        values: {
            key: string;
            value: string;
        }[];
    }): MetadataTree;
}
