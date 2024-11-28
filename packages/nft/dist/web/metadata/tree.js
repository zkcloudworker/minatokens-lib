import { MerkleTree, Field } from "o1js";
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
export class MetadataTree {
    /**
     * Constructs a new `MetadataTree` with the specified height and key-value pairs.
     *
     * @param height - The height of the Merkle tree (must be between 1 and 254).
     * @param values - An array of key-value pairs to store in the tree.
     *
     * @throws Will throw an error if the number of values exceeds the maximum capacity of the tree.
     * @throws Will throw an error if any key is out of bounds for the tree height.
     */
    constructor(height, values) {
        this.values = values;
        this.height = height;
        const tree = new MerkleTree(height);
        const maxElements = tree.leafCount;
        if (values.length > tree.leafCount) {
            throw new Error(`Tree height ${height} can only have ${maxElements} elements`);
        }
        for (const { key, value } of values) {
            if (key >= maxElements) {
                throw new Error(`Key ${key} is out of bounds for tree height ${height}`);
            }
            tree.setLeaf(key, value);
        }
        this.root = tree.getRoot();
    }
    /**
     * Serializes the `MetadataTree` to a JSON object.
     *
     * @returns An object containing the tree's height, root, and values.
     */
    toJSON() {
        return {
            height: this.height,
            root: this.root.toJSON(),
            values: this.values.map(({ key, value }) => ({
                key: key.toString(),
                value: value.toJSON(),
            })),
        };
    }
    /**
     * Deserializes a JSON object into a `MetadataTree` instance.
     *
     * @param json - The JSON object containing the tree data.
     *
     * @returns A new `MetadataTree` instance constructed from the JSON data.
     *
     * @throws Will throw an error if the JSON data is invalid or inconsistent.
     */
    static fromJSON(json) {
        const { height, values, root } = json;
        if (typeof height !== "number" || height < 1 || height > 254)
            throw new Error(`Invalid tree height`);
        if (!root || typeof root !== "string")
            throw new Error(`Invalid tree root`);
        if (!values || !Array.isArray(values))
            throw new Error(`Tree values are required`);
        for (const { key, value } of values) {
            if (!key || typeof key !== "string")
                throw new Error(`Invalid tree key`);
            if (!value || typeof value !== "string")
                throw new Error(`Invalid tree value`);
        }
        const tree = new MetadataTree(height, values.map(({ key, value }) => ({
            key: BigInt(key),
            value: Field.fromJSON(value),
        })));
        if (tree.root.toJSON() !== root)
            throw new Error("Invalid tree json");
        return tree;
    }
}
//# sourceMappingURL=tree.js.map