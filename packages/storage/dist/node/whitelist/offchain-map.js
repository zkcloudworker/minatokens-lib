import { Experimental, Struct, Field, Option, Provable } from "o1js";
import { serializeIndexedMap, loadIndexedMerkleMap, } from "../indexed-map/indexed-map.js";
import { sleep } from "../util/sleep.js";
import { Storage } from "../storage/storage.js";
import { createIpfsURL } from "../storage/ipfs.js";
import { pinJSON } from "../storage/pinata.js";
const { IndexedMerkleMap } = Experimental;
const OFFCHAIN_MAP_HEIGHT = 20;
/** Represents the Offchain Map using an Indexed Merkle Map. */
export class OffchainMap extends IndexedMerkleMap(OFFCHAIN_MAP_HEIGHT) {
}
export class OffchainMapOption extends Option(OffchainMap) {
}
export class FieldOption extends Option(Field) {
}
/**
 * Base class for offchain lists and maps that does not have storage
 */
export class OffChainListBase extends Struct({
    /** The root hash of the Merkle tree representing the whitelist. */
    root: Field,
}) {
    isNone() {
        return this.root.equals(Field(0));
    }
    isSome() {
        return this.isNone().not();
    }
    async load(storage, name = "offchain-map") {
        const isNone = this.isNone();
        const map = await Provable.witnessAsync(OffchainMapOption, async () => {
            if (isNone.toBoolean())
                return OffchainMapOption.none();
            else
                return OffchainMapOption.fromValue(await loadIndexedMerkleMap({
                    url: createIpfsURL({ hash: storage.toString() }),
                    type: OffchainMap,
                    name,
                }));
        });
        isNone.assertEquals(map.isSome.not());
        const root = Provable.if(map.isSome, map.orElse(new OffchainMap()).root, Field(0));
        root.equals(this.root);
        return map;
    }
    /**
     * The function fetches a whitelisted amount associated with a given key using a map and returns it
     * as a FieldOption.
     * @param {Field} key - The `key` parameter is of type `Field`,
     * which represents a field element in the context of a cryptographic system.
     * @returns The `getValue` function returns a `Promise` that resolves to a `FieldOption`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided key. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the list is NOT empty and the key is NOT in the map.
     * The value is present if the list IS empty or the key IS in the map.
     * The value is present and equals to Field(0) if the list IS empty.
     */
    async getValue(key, storage, name = "offchain-map") {
        const map = await this.load(storage, name);
        const value = map.orElse(new OffchainMap()).getOption(key);
        const valueField = value.orElse(Field(0));
        return new FieldOption({
            value: valueField,
            isSome: value.isSome.or(this.isNone()),
        });
    }
    static empty() {
        return new OffChainListBase({
            root: Field(0),
        });
    }
    /**
     * Creates a new OffchainListBase
     * @param params - The parameters for creating the list.
     * @param params.list - The list of entries to be added to the map.
     * @param params.data - The JSON data that should be added to the IPFS storage that represent the initial data
     * @returns A new `OffChainList` instance.
     */
    static async create(params) {
        function toField(value) {
            if (!value)
                return Field(0);
            if (typeof value === "string")
                return Field.fromJSON(value);
            if (typeof value === "bigint" || typeof value === "number")
                return Field(value);
            return value;
        }
        const list = params.list.map((item) => ({
            key: toField(item.key),
            value: toField(item.value),
        }));
        const map = new OffchainMap();
        for (const item of list) {
            map.insert(item.key, item.value);
        }
        const serializedMap = serializeIndexedMap(map);
        const json = {
            [params.name ?? "offchain-map"]: {
                map: serializedMap,
                list: list.map((item) => ({
                    key: item.key.toJSON(),
                    value: item.value?.toJSON(),
                })),
                data: params.data,
            },
        };
        return {
            listBase: new OffChainListBase({
                root: map.root,
            }),
            json,
        };
    }
    toString() {
        return JSON.stringify({ root: this.root.toJSON() }, null, 2);
    }
    static fromString(str) {
        const json = JSON.parse(str);
        return new OffChainListBase({
            root: Field.fromJSON(json.root),
        });
    }
}
export class OffChainList extends Struct({
    /** The root hash of the Merkle tree representing the whitelist. */
    root: Field,
    /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
    storage: Storage,
}) {
    isNone() {
        return this.root.equals(Field(0)).or(this.storage.isEmpty());
    }
    isSome() {
        return this.isNone().not();
    }
    async load(name = "offchain-map") {
        const isNone = this.isNone();
        const map = await Provable.witnessAsync(OffchainMapOption, async () => {
            let isNoneBoolean = false;
            Provable.asProver(() => {
                isNoneBoolean = isNone.toBoolean();
            });
            if (isNoneBoolean)
                return OffchainMapOption.none();
            else
                return OffchainMapOption.fromValue(await loadIndexedMerkleMap({
                    url: createIpfsURL({ hash: this.storage.toString() }),
                    type: OffchainMap,
                    name,
                }));
        });
        isNone.assertEquals(map.isSome.not());
        const root = Provable.if(map.isSome, map.orElse(new OffchainMap()).root, Field(0));
        root.assertEquals(this.root);
        return map;
    }
    /**
     * The function fetches a whitelisted amount associated with a given key using a map and returns it
     * as a FieldOption.
     * @param {Field} key - The `key` parameter is of type `Field`,
     * which represents a field element in the context of a cryptographic system.
     * @returns The `getValue` function returns a `Promise` that resolves to a `FieldOption`
     * object. This object contains a `value` property representing the amount retrieved from a map based
     * on the provided key. The `isSome` property indicates whether the value is present or not.
     * The value is not present if the list is NOT empty and the key is NOT in the map.
     * The value is present if the list IS empty or the key IS in the map.
     * The value is present and equals to Field(0) if the list IS empty.
     */
    async getValue(key, name = "offchain-map") {
        const map = await this.load(name);
        const value = map.orElse(new OffchainMap()).getOption(key);
        const valueField = value.orElse(Field(0));
        return new FieldOption({
            value: valueField,
            isSome: value.isSome.or(this.isNone()),
        });
    }
    static empty() {
        return new OffChainList({
            root: Field(0),
            storage: Storage.empty(),
        });
    }
    /**
     * Creates a new OffchainList
     * and pins it to IPFS.
     * @param params - The parameters for creating the list.
     * @param params.list - The list of entries to be added to the map.
     * @param params.data - The JSON data that should be added to the IPFS storage that represent the initial data
     * @returns A new `OffChainList` instance.
     */
    static async create(params) {
        const { name = "offchain-map", filename = "offchain-list.json", keyvalues, timeout = 60 * 1000, attempts = 5, auth, pin = true, json: initialJson = {}, } = params;
        const { listBase, json: newJson } = await OffChainListBase.create({
            list: params.list,
            data: params.data,
            name,
        });
        const json = { ...initialJson, ...newJson };
        if (process.env.DEBUG === "true")
            console.log("OffChainList.create:", { json, name, keyvalues });
        if (pin) {
            let attempt = 0;
            const start = Date.now();
            let hash = await pinJSON({
                data: json,
                name: filename,
                keyvalues,
                auth,
            });
            while (!hash && attempt < attempts && Date.now() - start < timeout) {
                attempt++;
                await sleep(5000 * attempt); // handle rate-limits
                hash = await pinJSON({
                    data: json,
                    name,
                    keyvalues,
                    auth,
                });
            }
            if (!hash)
                throw new Error("Failed to pin OffchainMap");
            return {
                list: new OffChainList({
                    root: listBase.root,
                    storage: Storage.fromString(hash),
                }),
                json,
            };
        }
        return {
            list: new OffChainList({
                root: listBase.root,
                storage: Storage.empty(),
            }),
            json,
        };
    }
    toString() {
        return JSON.stringify({ root: this.root.toJSON(), storage: this.storage.toString() }, null, 2);
    }
    static fromString(str) {
        const json = JSON.parse(str);
        return new OffChainList({
            root: Field.fromJSON(json.root),
            storage: Storage.fromString(json.storage),
        });
    }
}
//# sourceMappingURL=offchain-map.js.map