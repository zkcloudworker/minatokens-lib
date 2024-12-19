/**
 * Utilities for encoding and decoding `Field` elements to and from strings.
 * These functions are used throughout the NFT standard for handling off-chain storage references and metadata.
 */
import { Field } from "o1js";
export { fieldToString, fieldFromString };
/**
 * Converts a `Field` element to a string representation.
 * This is used for serializing `Field` values into strings suitable for storage or transmission.
 *
 * @param {Field} field - The `Field` element to convert.
 * @returns {string} The string representation of the `Field`.
 */
declare function fieldToString(field: Field): string;
/**
 * Reconstructs a `Field` element from its string representation.
 * This function is essential for deserializing strings back into `Field` elements,
 * which can then be used within the smart contract logic.
 *
 * @param {string} storage - The string representation of the `Field`.
 * @returns {Field} The reconstructed `Field` element.
 * @throws Will throw an error if the input string does not correspond to exactly one `Field`.
 */
declare function fieldFromString(storage: string): Field;
