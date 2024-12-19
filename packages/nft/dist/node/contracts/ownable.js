import { PublicKey, Struct, } from "o1js";
/**
 * Event emitted when the ownership of the contract changes.
 *
 * Contains the old owner's and new owner's public keys.
 */
export class OwnershipChangeEvent extends Struct({
    oldOwner: PublicKey,
    newOwner: PublicKey,
}) {
}
//# sourceMappingURL=ownable.js.map