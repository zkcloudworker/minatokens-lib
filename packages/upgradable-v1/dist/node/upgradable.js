import { Bool, PublicKey, Field, Struct, Poseidon, Option, } from "o1js";
export { VerificationKeyUpgradeData, PublicKeyOption, UpgradeAuthorityAnswer, };
/**
 * Represents the data required to upgrade a contract's verification key.
 * It includes the contract's address, token ID, previous verification key hash,
 * and the new verification key hash. This class also provides a `hash()` method
 * to generate a unique identifier for the upgrade data.
 */
class VerificationKeyUpgradeData extends Struct({
    /** The address of the contract to be upgraded. */
    address: PublicKey,
    /** The token ID associated with the contract. */
    tokenId: Field,
    /** The hash of the previous verification key. */
    previousVerificationKeyHash: Field,
    /** The hash of the new verification key. */
    newVerificationKeyHash: Field,
}) {
    /**
     * Generates a unique hash for the upgrade data using the Poseidon hash function.
     * @returns {Field} The hash representing the upgrade data.
     */
    hash() {
        return Poseidon.hash(VerificationKeyUpgradeData.toFields(this));
    }
}
/**
 * An optional `PublicKey` type, used to specify the next upgrade authority if needed.
 * This is crucial when the current upgrade authority cannot be used in future upgrades
 * due to changes in the o1js version or other factors.
 */
class PublicKeyOption extends Option(PublicKey) {
}
/**
 * Represents the response from the upgrade authority after verifying the upgrade data.
 * It contains the next upgrade authority's public key if a change is required, and a boolean
 * indicating whether the upgrade data has been successfully verified.
 */
class UpgradeAuthorityAnswer extends Struct({
    /**
     * The public key of the next upgrade authority, if a change is required.
     *
     * If we upgrade the verification key, we may not be able to use the same upgrade
     * authority next time because the new o1js version can break the verification key
     * of the upgrade authority too, and since the upgrade authority serves many
     * contracts, it cannot be upgraded. In this case, we need to use another upgrade
     * authority with the public key that will be provided in `nextUpgradeAuthority`.
     */
    nextUpgradeAuthority: PublicKeyOption,
    /** Indicates whether the upgrade data has been successfully verified. */
    isVerified: Bool,
}) {
}
//# sourceMappingURL=upgradable.js.map