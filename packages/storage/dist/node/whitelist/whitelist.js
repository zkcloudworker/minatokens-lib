import { Struct, Option, PublicKey, UInt64, Poseidon } from "o1js";
import { OffChainList, OffchainMap, } from "./offchain-map.js";
export class UInt64Option extends Option(UInt64) {
}
export class WhitelistedAddress {
}
export class Whitelist extends Struct({
    list: OffChainList,
}) {
    isNone() {
        return this.list.isNone();
    }
    isSome() {
        return this.list.isSome();
    }
    async load() {
        return this.list.load();
    }
    /**
     * The function fetches a whitelisted amount associated with a given address using a map and returns it
     * as a UInt64Option.
     * @param {PublicKey} address - The `address` parameter is of type `PublicKey`, which represents a
     * public key used in cryptography for various purposes such as encryption, digital signatures, and
     * authentication. In the context of the `fetchWhitelistedAmount` function, the `address` parameter is
     * used to retrieve a whitelisted amount
     * @returns The `fetchWhitelistedAmount` function returns a `Promise` that resolves to a `UInt64Option`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided address. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the whitelist is NOT empty and the address is NOT whitelisted.
     * The value is present if the whitelist is NOT empty or the address IS whitelisted.
     * The value is present and equals to UInt64.MAXINT() if the whitelist IS empty.
     */
    async getWhitelistedAmount(address, name = "whitelist") {
        const map = await this.list.load(name);
        const key = Poseidon.hashPacked(PublicKey, address);
        const value = map.orElse(new OffchainMap()).getOption(key);
        const valueField = value.orElse(UInt64.MAXINT().value);
        valueField.assertLessThanOrEqual(UInt64.MAXINT().value);
        const amount = UInt64.Unsafe.fromField(valueField);
        return new UInt64Option({
            value: amount,
            isSome: value.isSome.or(this.isNone()),
        });
    }
    static empty() {
        return new Whitelist({
            list: OffChainList.empty(),
        });
    }
    /**
     * Creates a new whitelist and pins it to IPFS.
     * @param params - The parameters for creating the whitelist.
     * @returns A new `Whitelist` instance.
     */
    static async create(params) {
        const { name = "whitelist", filename = "whitelist.json", keyvalues, timeout, attempts, auth, } = params;
        function parseAddress(address) {
            return typeof address === "string"
                ? PublicKey.fromBase58(address)
                : address;
        }
        function parseAmount(amount) {
            if (amount === undefined)
                return UInt64.zero;
            return typeof amount === "number" ? UInt64.from(amount) : amount;
        }
        const entries = params.list.map((item) => ({
            address: parseAddress(item.address),
            amount: parseAmount(item.amount),
        }));
        const list = await OffChainList.create({
            list: entries.map((item) => ({
                key: Poseidon.hashPacked(PublicKey, item.address),
                value: item.amount.value,
            })),
            data: entries.map((item) => ({
                address: item.address.toBase58(),
                amount: Number(item.amount.toBigInt()),
            })),
            name,
            filename,
            keyvalues,
            timeout,
            attempts,
            auth,
        });
        return new Whitelist({ list });
    }
    toString() {
        return this.list.toString();
    }
    static fromString(str) {
        return new Whitelist({ list: OffChainList.fromString(str) });
    }
}
//# sourceMappingURL=whitelist.js.map