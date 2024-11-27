"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/node/index.js
var node_exports = {};
__export(node_exports, {
  Storage: () => Storage,
  UInt64Option: () => UInt64Option,
  Whitelist: () => Whitelist,
  WhitelistMap: () => WhitelistMap,
  WhitelistMapOption: () => WhitelistMapOption,
  WhitelistedAddress: () => WhitelistedAddress,
  bigintFromBase56: () => bigintFromBase56,
  bigintFromBase64: () => bigintFromBase64,
  bigintToBase56: () => bigintToBase56,
  bigintToBase64: () => bigintToBase64,
  createIpfsURL: () => createIpfsURL,
  deserializeIndexedMerkleMap: () => deserializeIndexedMerkleMap,
  fieldFromBase56: () => fieldFromBase56,
  fieldFromBase64: () => fieldFromBase64,
  fieldToBase56: () => fieldToBase56,
  fieldToBase64: () => fieldToBase64,
  fromBase: () => fromBase,
  loadIndexedMerkleMap: () => loadIndexedMerkleMap,
  parseIndexedMapSerialized: () => parseIndexedMapSerialized,
  pinJSON: () => pinJSON,
  saveIndexedMerkleMap: () => saveIndexedMerkleMap,
  serializeIndexedMap: () => serializeIndexedMap,
  sleep: () => sleep,
  toBase: () => toBase
});
module.exports = __toCommonJS(node_exports);

// dist/node/base64/bigint.js
var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function bigintToBase56(value) {
  const digits = toBase(value, 56n);
  const str = digits.map((x) => TABLE[Number(x)]).join("");
  return str;
}
function bigintFromBase56(str) {
  const base56Digits = str.split("").map((x2) => BigInt(TABLE.indexOf(x2)));
  const x = fromBase(base56Digits, 56n);
  return x;
}
function bigintToBase64(value) {
  const digits = toBase(value, 64n);
  const str = digits.map((x) => TABLE[Number(x)]).join("");
  return str;
}
function bigintFromBase64(str) {
  const base64Digits = str.split("").map((x2) => BigInt(TABLE.indexOf(x2)));
  const x = fromBase(base64Digits, 64n);
  return x;
}
function fromBase(digits, base) {
  if (base <= 0n)
    throw Error("fromBase: base must be positive");
  let basePowers = [];
  for (let power = base, n = 1; n < digits.length; power **= 2n, n *= 2) {
    basePowers.push(power);
  }
  let k = basePowers.length;
  digits = digits.concat(Array(2 ** k - digits.length).fill(0n));
  for (let i = 0; i < k; i++) {
    let newDigits = Array(digits.length >> 1);
    let basePower = basePowers[i];
    for (let j = 0; j < newDigits.length; j++) {
      newDigits[j] = digits[2 * j] + basePower * digits[2 * j + 1];
    }
    digits = newDigits;
  }
  console.assert(digits.length === 1);
  let [digit] = digits;
  return digit;
}
function toBase(x, base) {
  if (base <= 0n)
    throw Error("toBase: base must be positive");
  let basePowers = [];
  for (let power = base; power <= x; power **= 2n) {
    basePowers.push(power);
  }
  let digits = [x];
  let k = basePowers.length;
  for (let i = 0; i < k; i++) {
    let newDigits = Array(2 * digits.length);
    let basePower = basePowers[k - 1 - i];
    for (let j = 0; j < digits.length; j++) {
      let x2 = digits[j];
      let high = x2 / basePower;
      newDigits[2 * j + 1] = high;
      newDigits[2 * j] = x2 - high * basePower;
    }
    digits = newDigits;
  }
  while (digits[digits.length - 1] === 0n) {
    digits.pop();
  }
  return digits;
}

// dist/node/base64/field.js
var import_o1js = require("o1js");
var TABLE2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function fieldToBase56(field) {
  const digits = toBase(field.toBigInt(), 56n);
  const str = digits.map((x) => TABLE2[Number(x)]).join("");
  return str;
}
function fieldFromBase56(str) {
  const base56Digits = str.split("").map((x2) => BigInt(TABLE2.indexOf(x2)));
  const x = fromBase(base56Digits, 56n);
  return (0, import_o1js.Field)(x);
}
function fieldToBase64(field) {
  const digits = toBase(field.toBigInt(), 64n);
  const str = digits.map((x) => TABLE2[Number(x)]).join("");
  return str;
}
function fieldFromBase64(str) {
  const base64Digits = str.split("").map((x2) => BigInt(TABLE2.indexOf(x2)));
  const x = fromBase(base64Digits, 64n);
  return (0, import_o1js.Field)(x);
}

// dist/node/indexed-map/indexed-map.js
var import_o1js2 = require("o1js");

// dist/node/util/sleep.js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// dist/node/storage/pinata.js
async function pinJSON(params) {
  const { data, name = "data.json", keyvalues = { library: "zkcloudworker" } } = params;
  const auth = params.auth ?? process.env.PINATA_JWT ?? process.env.NEXT_PUBLIC_PINATA_JWT ?? process.env.REACT_APP_PINATA_JWT;
  if (!auth)
    throw new Error("pinJSON: auth, PINATA_JWT, NEXT_PUBLIC_PINATA_JWT or REACT_APP_PINATA_JWT should be defined");
  try {
    const pinataData = {
      pinataOptions: {
        cidVersion: 1
      },
      pinataMetadata: {
        name,
        keyvalues
      },
      pinataContent: data
    };
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth
      },
      body: JSON.stringify(pinataData)
    });
    if (!res.ok) {
      throw new Error(`Pinata error: status: ${res.status} ${res.statusText}`);
    }
    const responseData = await res.json();
    console.log("saveToIPFS result:", responseData);
    return responseData?.IpfsHash;
  } catch (error) {
    console.error("saveToIPFS error:", error?.message);
    return void 0;
  }
}

// dist/node/indexed-map/indexed-map.js
var { IndexedMerkleMap } = import_o1js2.Experimental;
async function loadIndexedMerkleMap(params) {
  const { url, type, timeout = 6e4, attempts = 5 } = params;
  let attempt = 0;
  const start = Date.now();
  let response = await fetch(url);
  while (!response.ok && attempt < attempts && Date.now() - start < timeout) {
    attempt++;
    await sleep(5e3 * attempt);
    response = await fetch(url);
  }
  if (!response.ok) {
    throw new Error("Failed to fetch IndexedMerkleMap");
  }
  const json = await response.json();
  const serializedIndexedMap = json.map;
  if (!serializedIndexedMap)
    throw new Error("wrong IndexedMerkleMap json format");
  const map = deserializeIndexedMerkleMapInternal({
    serializedIndexedMap,
    type
  });
  if (!map) {
    throw new Error("Failed to deserialize whitelist");
  }
  return map;
}
async function saveIndexedMerkleMap(params) {
  const { map, name = "indexed-map", keyvalues, auth } = params;
  const serialized = serializeIndexedMap(map);
  const ipfsHash = await pinJSON({
    data: { map: serialized },
    name,
    keyvalues,
    auth
  });
  return ipfsHash;
}
function serializeIndexedMap(map) {
  return {
    height: map.height,
    root: map.root.toJSON(),
    length: map.length.toJSON(),
    nodes: JSON.stringify(map.data.get().nodes, (_, v) => typeof v === "bigint" ? "n" + bigintToBase64(v) : v),
    sortedLeaves: JSON.stringify(map.data.get().sortedLeaves.map((v) => [
      bigintToBase64(v.key),
      bigintToBase64(v.nextKey),
      bigintToBase64(v.value),
      bigintToBase64(BigInt(v.index))
    ]))
  };
}
function deserializeIndexedMerkleMap(params) {
  try {
    const { serializedIndexedMap, type } = params;
    return deserializeIndexedMerkleMapInternal({
      serializedIndexedMap,
      type: type ?? IndexedMerkleMap(serializedIndexedMap.height)
    });
  } catch (error) {
    console.error("Error deserializing map:", error?.message ?? error);
    return void 0;
  }
}
function parseIndexedMapSerialized(serializedMap) {
  const json = JSON.parse(serializedMap);
  if (json.height === void 0 || json.root === void 0 || json.length === void 0 || json.nodes === void 0 || json.sortedLeaves === void 0)
    throw new Error("wrong IndexedMerkleMap json format");
  if (typeof json.height !== "number")
    throw new Error("wrong IndexedMerkleMap height format");
  if (typeof json.root !== "string")
    throw new Error("wrong IndexedMerkleMap root format");
  if (typeof json.length !== "string")
    throw new Error("wrong IndexedMerkleMap length format");
  if (typeof json.nodes !== "string")
    throw new Error("wrong IndexedMerkleMap nodes format");
  if (typeof json.sortedLeaves !== "string")
    throw new Error("wrong IndexedMerkleMap sortedLeaves format");
  return json;
}
function deserializeIndexedMerkleMapInternal(params) {
  const { serializedIndexedMap, type } = params;
  const map = new type();
  if (serializedIndexedMap.height !== map.height) {
    throw new Error("wrong IndexedMap height");
  }
  const nodes = JSON.parse(serializedIndexedMap.nodes, (_, v) => {
    if (typeof v === "string" && v[0] === "n") {
      return bigintFromBase64(v.slice(1));
    }
    return v;
  });
  const sortedLeaves = JSON.parse(serializedIndexedMap.sortedLeaves).map((row) => {
    return {
      key: bigintFromBase64(row[0]),
      nextKey: bigintFromBase64(row[1]),
      value: bigintFromBase64(row[2]),
      index: Number(bigintFromBase64(row[3]))
    };
  });
  map.root = import_o1js2.Field.fromJSON(serializedIndexedMap.root);
  map.length = import_o1js2.Field.fromJSON(serializedIndexedMap.length);
  map.data.updateAsProver(() => {
    return {
      nodes: nodes.map((row) => [...row]),
      sortedLeaves: [...sortedLeaves]
    };
  });
  return map;
}

// dist/node/storage/ipfs.js
function createIpfsURL(params) {
  let { hash, gateway, apiToken } = params;
  gateway ??= process.env.PINATA_IPFS_GATEWAY ?? process.env.NEXT_PUBLIC_PINATA_IPFS_GATEWAY ?? process.env.REACT_APP_PINATA_IPFS_GATEWAY;
  apiToken ??= process.env.PINATA_GATEWAY_TOKEN ?? process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN ?? process.env.REACT_APP_PINATA_GATEWAY_TOKEN;
  if (!gateway) {
    gateway = "https://gateway.pinata.cloud/ipfs/";
  }
  return gateway + hash + (apiToken ? "?pinataGatewayToken=" + apiToken : "");
}

// dist/node/storage/storage.js
var import_o1js3 = require("o1js");
var Storage = class _Storage extends (0, import_o1js3.Struct)({
  url: import_o1js3.Provable.Array(import_o1js3.Field, 2)
}) {
  constructor(value) {
    super(value);
  }
  /**
   * Asserts that two Storage instances are equal.
   * @param a The first Storage instance.
   * @param b The second Storage instance.
   */
  static assertEquals(a, b) {
    a.url[0].assertEquals(b.url[0]);
    a.url[1].assertEquals(b.url[1]);
  }
  /**
   * Checks if two Storage instances are equal.
   * @param a The first Storage instance.
   * @param b The second Storage instance.
   * @returns A Bool indicating whether the two instances are equal.
   */
  static equals(a, b) {
    return a.url[0].equals(b.url[0]).and(a.url[1].equals(b.url[1]));
  }
  /**
   * Creates a Storage instance from a string.
   * @param url The string representing the storage URL.
   * @returns A new Storage instance.
   */
  static fromString(url) {
    const fields = import_o1js3.Encoding.stringToFields(url);
    if (fields.length !== 2)
      throw new Error("Invalid string length");
    return new _Storage({ url: [fields[0], fields[1]] });
  }
  /**
   * Converts the Storage instance to a string.
   * @returns The string representation of the storage URL.
   */
  toString() {
    if (this.url[0].toBigInt() === 0n && this.url[1].toBigInt() === 0n) {
      throw new Error("Invalid string");
    }
    return import_o1js3.Encoding.stringFromFields([this.url[0], this.url[1]]);
  }
};

// dist/node/whitelist/whitelist.js
var import_o1js4 = require("o1js");
var { IndexedMerkleMap: IndexedMerkleMap2 } = import_o1js4.Experimental;
var WHITELIST_HEIGHT = 20;
var WhitelistMap = class extends IndexedMerkleMap2(WHITELIST_HEIGHT) {
};
var WhitelistMapOption = class extends (0, import_o1js4.Option)(WhitelistMap) {
};
var UInt64Option = class extends (0, import_o1js4.Option)(import_o1js4.UInt64) {
};
var WhitelistedAddress = class extends (0, import_o1js4.Struct)({
  address: import_o1js4.PublicKey,
  amount: import_o1js4.UInt64
  // Maximum permitted amount of the transaction
}) {
};
var Whitelist = class _Whitelist extends (0, import_o1js4.Struct)({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: import_o1js4.Field,
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage
}) {
  isNone() {
    return this.root.equals((0, import_o1js4.Field)(0)).or(Storage.equals(this.storage, Storage.empty()));
  }
  isSome() {
    return this.isNone().not();
  }
  async load() {
    const isNone = this.isNone();
    const map = await import_o1js4.Provable.witnessAsync(WhitelistMapOption, async () => {
      if (isNone.toBoolean())
        return WhitelistMapOption.none();
      else
        return WhitelistMapOption.fromValue(await loadIndexedMerkleMap({
          url: createIpfsURL({ hash: this.storage.toString() }),
          type: WhitelistMap
        }));
    });
    isNone.assertEquals(map.isSome.not());
    const root = import_o1js4.Provable.if(map.isSome, map.orElse(new WhitelistMap()).root, (0, import_o1js4.Field)(0));
    root.equals(this.root);
    return map;
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
  async getWhitelistedAmount(address) {
    const map = await this.load();
    const key = import_o1js4.Poseidon.hashPacked(import_o1js4.PublicKey, address);
    const value = map.orElse(new WhitelistMap()).getOption(key);
    const valueField = value.orElse(import_o1js4.UInt64.MAXINT().value);
    valueField.assertLessThanOrEqual(import_o1js4.UInt64.MAXINT().value);
    const amount = import_o1js4.UInt64.Unsafe.fromField(valueField);
    return new UInt64Option({
      value: amount,
      isSome: value.isSome.or(this.isNone())
    });
  }
  static empty() {
    return new _Whitelist({
      root: (0, import_o1js4.Field)(0),
      storage: Storage.empty()
    });
  }
  /**
   * Creates a new whitelist and pins it to IPFS.
   * @param params - The parameters for creating the whitelist.
   * @returns A new `Whitelist` instance.
   */
  static async create(params) {
    const { name = "whitelist.json", keyvalues, timeout = 60 * 1e3, attempts = 5, auth } = params;
    const list = typeof params.list[0].address === "string" ? params.list.map((item) => new WhitelistedAddress({
      address: import_o1js4.PublicKey.fromBase58(item.address),
      amount: item.amount ? import_o1js4.UInt64.from(item.amount) : import_o1js4.UInt64.MAXINT()
    })) : params.list;
    const map = new WhitelistMap();
    for (const item of list) {
      map.insert(import_o1js4.Poseidon.hashPacked(import_o1js4.PublicKey, item.address), item.amount.toBigInt());
    }
    const serializedMap = serializeIndexedMap(map);
    const json = {
      map: serializedMap,
      whitelist: list.map((item) => ({
        address: item.address.toBase58(),
        amount: Number(item.amount.toBigInt())
      }))
    };
    let attempt = 0;
    const start = Date.now();
    if (process.env.DEBUG === "true")
      console.log("Whitelist.create:", { json, name, keyvalues, auth }, json.whitelist);
    let hash = await pinJSON({
      data: json,
      name,
      keyvalues,
      auth
    });
    while (!hash && attempt < attempts && Date.now() - start < timeout) {
      attempt++;
      await sleep(5e3 * attempt);
      hash = await pinJSON({
        data: json,
        name,
        keyvalues,
        auth
      });
    }
    if (!hash)
      throw new Error("Failed to pin whitelist");
    return new _Whitelist({
      root: map.root,
      storage: Storage.fromString(hash)
    });
  }
  toString() {
    return JSON.stringify({ root: this.root.toJSON(), storage: this.storage.toString() }, null, 2);
  }
  static fromString(str) {
    const json = JSON.parse(str);
    return new _Whitelist({
      root: import_o1js4.Field.fromJSON(json.root),
      storage: Storage.fromString(json.storage)
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Storage,
  UInt64Option,
  Whitelist,
  WhitelistMap,
  WhitelistMapOption,
  WhitelistedAddress,
  bigintFromBase56,
  bigintFromBase64,
  bigintToBase56,
  bigintToBase64,
  createIpfsURL,
  deserializeIndexedMerkleMap,
  fieldFromBase56,
  fieldFromBase64,
  fieldToBase56,
  fieldToBase64,
  fromBase,
  loadIndexedMerkleMap,
  parseIndexedMapSerialized,
  pinJSON,
  saveIndexedMerkleMap,
  serializeIndexedMap,
  sleep,
  toBase
});
