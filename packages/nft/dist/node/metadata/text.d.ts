import { Field } from "o1js";
export { Text, TEXT_TREE_HEIGHT };
/**
 * The default height of the Merkle tree used to represent the text data.
 */
declare const TEXT_TREE_HEIGHT = 20;
/**
 * The `Text` class represents textual data in the form of a Merkle tree. Each character of the text is converted to its
 * ASCII code and stored as a leaf in the Merkle tree. The root of the tree can be used as a compact representation
 * of the text data in cryptographic proofs.
 */
declare class Text {
    /**
     * The length of the text.
     */
    readonly size: number;
    /**
     * The original text string.
     */
    readonly text: string;
    /**
     * The root of the Merkle tree representing the text data.
     */
    readonly root: Field;
    /**
     * The height of the Merkle tree.
     */
    readonly height: number;
    /**
     * Constructs a new `Text` instance by creating a Merkle tree from the given text string.
     * Each character in the text is converted to its ASCII code and stored as a leaf in the tree.
     *
     * @param text - The text string to be represented.
     * @param height - The height of the Merkle tree. Defaults to `TEXT_TREE_HEIGHT`.
     * @throws Will throw an error if the text length exceeds the number of leaves in the Merkle tree.
     */
    constructor(text: string, height?: number);
    /**
     * Returns the original text string.
     *
     * @returns The text string.
     */
    toString(): string;
}
