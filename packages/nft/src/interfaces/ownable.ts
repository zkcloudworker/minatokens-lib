import {
  PublicKey,
  SmartContract,
  Field,
  Struct,
  Bool,
  AccountUpdate,
} from "o1js";

/**
 * Interface representing ownable functionality for smart contracts.
 *
 * The `OwnableContract` interface extends `SmartContract` and provides methods to ensure that only the owner
 * can perform certain actions and to allow the transfer of ownership to a new owner.
 *
 * By implementing the Ownable interface, contracts can secure critical operations and provide a transparent
 * mechanism for ownership management.
 *
 * @interface
 */
export type OwnableContract = SmartContract & {
  /**
   * Ensures that the transaction is authorized by the contract owner.
   * Typically used to restrict access to sensitive functions.
   *
   * @returns {Promise<AccountUpdate>} A promise that resolves to an `AccountUpdate`, representing the action of ensuring the owner's signature.
   */
  ensureOwnerSignature(): Promise<AccountUpdate>;

  /**
   * Transfers ownership of the contract to a new owner.
   *
   * @param {PublicKey} newOwner - The public key of the new owner.
   * @returns {Promise<PublicKey>} A promise that resolves to the public key of the old owner.
   */
  transferOwnership(newOwner: PublicKey): Promise<PublicKey>; // returns the old owner
};

/**
 * Event emitted when the ownership of the contract changes.
 *
 * Contains the old owner's and new owner's public keys.
 */
export class OwnershipChangeEvent extends Struct({
  oldOwner: PublicKey,
  newOwner: PublicKey,
}) {}
