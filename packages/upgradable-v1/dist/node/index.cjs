"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/node/index.js
var node_exports = {};
__export(node_exports, {
  ChainId: () => ChainId,
  FieldOption: () => FieldOption,
  OffChainList: () => OffChainList,
  OffChainListBase: () => OffChainListBase,
  OffchainMap: () => OffchainMap,
  OffchainMapOption: () => OffchainMapOption,
  PublicKeyOption: () => PublicKeyOption,
  Storage: () => Storage,
  UInt64Option: () => UInt64Option,
  UpgradeAuthorityAnswer: () => UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase: () => UpgradeAuthorityDatabase,
  UpgradeDatabaseState: () => UpgradeDatabaseState,
  UpgradeDatabaseStatePacked: () => UpgradeDatabaseStatePacked,
  ValidatorDecisionType: () => ValidatorDecisionType,
  ValidatorsDecision: () => ValidatorsDecision,
  ValidatorsDecisionState: () => ValidatorsDecisionState,
  ValidatorsList: () => ValidatorsList,
  ValidatorsListEvent: () => ValidatorsListEvent,
  ValidatorsState: () => ValidatorsState,
  ValidatorsVoting: () => ValidatorsVoting,
  ValidatorsVotingNativeProof: () => ValidatorsVotingNativeProof,
  ValidatorsVotingProof: () => ValidatorsVotingProof,
  VerificationKeyUpgradeAuthority: () => VerificationKeyUpgradeAuthority,
  VerificationKeyUpgradeData: () => VerificationKeyUpgradeData,
  Whitelist: () => Whitelist,
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
  nftVerificationKeys: () => nftVerificationKeys,
  parseIndexedMapSerialized: () => parseIndexedMapSerialized,
  pinJSON: () => pinJSON,
  saveIndexedMerkleMap: () => saveIndexedMerkleMap,
  serializeIndexedMap: () => serializeIndexedMap,
  sleep: () => sleep,
  toBase: () => toBase
});
module.exports = __toCommonJS(node_exports);

// dist/node/vk.js
var nftVerificationKeys = {
  mainnet: {
    o1js: "2.1.0",
    zkcloudworker: "0.20.3",
    vk: {
      VerificationKeyUpgradeAuthority: {
        hash: "11985403017286473627966300663722292870964778138598849061271153789533016168559",
        data: "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",
        type: "upgrade"
      }
    }
  },
  testnet: {
    o1js: "2.1.0",
    zkcloudworker: "0.20.3",
    vk: {
      VerificationKeyUpgradeAuthority: {
        hash: "24248690097061452380259183021520676826201948296409686318469332616191300421924",
        data: "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",
        type: "upgrade"
      }
    }
  }
};

// dist/node/validators.js
var import_o1js7 = require("o1js");

// dist/node/storage/base64/bigint.js
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

// dist/node/storage/base64/field.js
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

// dist/node/storage/indexed-map/indexed-map.js
var import_o1js2 = require("o1js");

// dist/node/storage/util/sleep.js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// dist/node/storage/storage/pinata.js
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

// dist/node/storage/indexed-map/indexed-map.js
var { IndexedMerkleMap } = import_o1js2.Experimental;
async function loadIndexedMerkleMap(params) {
  const { url, type, name = "indexed-map", timeout = 6e4, attempts = 5 } = params;
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
  const serializedIndexedMap = json[name].map;
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
  const { map, name = "indexed-map", keyvalues, auth, filename = "indexed-map" } = params;
  const serialized = serializeIndexedMap(map);
  const json = { [name]: { map: serialized } };
  const ipfsHash = await pinJSON({
    data: json,
    name: filename,
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

// dist/node/storage/storage/ipfs.js
function createIpfsURL(params) {
  let { hash, gateway, apiToken } = params;
  gateway ??= process.env.PINATA_IPFS_GATEWAY ?? process.env.NEXT_PUBLIC_PINATA_IPFS_GATEWAY ?? process.env.REACT_APP_PINATA_IPFS_GATEWAY;
  apiToken ??= process.env.PINATA_GATEWAY_TOKEN ?? process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN ?? process.env.REACT_APP_PINATA_GATEWAY_TOKEN;
  if (!gateway) {
    gateway = "https://gateway.pinata.cloud/ipfs/";
  }
  return gateway + hash + (apiToken ? "?pinataGatewayToken=" + apiToken : "");
}

// dist/node/storage/storage/storage.js
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
    if (url === "")
      return _Storage.empty();
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
    if (this.isEmpty().toBoolean()) {
      return "";
    }
    return import_o1js3.Encoding.stringFromFields([this.url[0], this.url[1]]);
  }
  static empty() {
    return new _Storage({ url: [(0, import_o1js3.Field)(0), (0, import_o1js3.Field)(0)] });
  }
  isEmpty() {
    return this.url[0].equals((0, import_o1js3.Field)(0)).and(this.url[1].equals((0, import_o1js3.Field)(0)));
  }
};

// dist/node/storage/whitelist/whitelist.js
var import_o1js5 = require("o1js");

// dist/node/storage/whitelist/offchain-map.js
var import_o1js4 = require("o1js");
var { IndexedMerkleMap: IndexedMerkleMap2 } = import_o1js4.Experimental;
var OFFCHAIN_MAP_HEIGHT = 20;
var OffchainMap = class extends IndexedMerkleMap2(OFFCHAIN_MAP_HEIGHT) {
};
var OffchainMapOption = class extends (0, import_o1js4.Option)(OffchainMap) {
};
var FieldOption = class extends (0, import_o1js4.Option)(import_o1js4.Field) {
};
var OffChainListBase = class _OffChainListBase extends (0, import_o1js4.Struct)({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: import_o1js4.Field
}) {
  isNone() {
    return this.root.equals((0, import_o1js4.Field)(0));
  }
  isSome() {
    return this.isNone().not();
  }
  async load(storage, name = "offchain-map") {
    const isNone = this.isNone();
    const map = await import_o1js4.Provable.witnessAsync(OffchainMapOption, async () => {
      if (isNone.toBoolean())
        return OffchainMapOption.none();
      else
        return OffchainMapOption.fromValue(await loadIndexedMerkleMap({
          url: createIpfsURL({ hash: storage.toString() }),
          type: OffchainMap,
          name
        }));
    });
    isNone.assertEquals(map.isSome.not());
    const root = import_o1js4.Provable.if(map.isSome, map.orElse(new OffchainMap()).root, (0, import_o1js4.Field)(0));
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
    const valueField = value.orElse((0, import_o1js4.Field)(0));
    return new FieldOption({
      value: valueField,
      isSome: value.isSome.or(this.isNone())
    });
  }
  static empty() {
    return new _OffChainListBase({
      root: (0, import_o1js4.Field)(0)
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
        return (0, import_o1js4.Field)(0);
      if (typeof value === "string")
        return import_o1js4.Field.fromJSON(value);
      if (typeof value === "bigint" || typeof value === "number")
        return (0, import_o1js4.Field)(value);
      return value;
    }
    const list = params.list.map((item) => ({
      key: toField(item.key),
      value: toField(item.value)
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
          value: item.value?.toJSON()
        })),
        data: params.data
      }
    };
    return {
      listBase: new _OffChainListBase({
        root: map.root
      }),
      json
    };
  }
  toString() {
    return JSON.stringify({ root: this.root.toJSON() }, null, 2);
  }
  static fromString(str) {
    const json = JSON.parse(str);
    return new _OffChainListBase({
      root: import_o1js4.Field.fromJSON(json.root)
    });
  }
};
var OffChainList = class _OffChainList extends (0, import_o1js4.Struct)({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: import_o1js4.Field,
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage
}) {
  isNone() {
    return this.root.equals((0, import_o1js4.Field)(0)).or(this.storage.isEmpty());
  }
  isSome() {
    return this.isNone().not();
  }
  async load(name = "offchain-map") {
    const isNone = this.isNone();
    const map = await import_o1js4.Provable.witnessAsync(OffchainMapOption, async () => {
      if (isNone.toBoolean())
        return OffchainMapOption.none();
      else
        return OffchainMapOption.fromValue(await loadIndexedMerkleMap({
          url: createIpfsURL({ hash: this.storage.toString() }),
          type: OffchainMap,
          name
        }));
    });
    isNone.assertEquals(map.isSome.not());
    const root = import_o1js4.Provable.if(map.isSome, map.orElse(new OffchainMap()).root, (0, import_o1js4.Field)(0));
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
  async getValue(key, name = "offchain-map") {
    const map = await this.load(name);
    const value = map.orElse(new OffchainMap()).getOption(key);
    const valueField = value.orElse((0, import_o1js4.Field)(0));
    return new FieldOption({
      value: valueField,
      isSome: value.isSome.or(this.isNone())
    });
  }
  static empty() {
    return new _OffChainList({
      root: (0, import_o1js4.Field)(0),
      storage: Storage.empty()
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
    const { name = "offchain-map", filename = "offchain-list.json", keyvalues, timeout = 60 * 1e3, attempts = 5, auth, pin = true, json: initialJson = {} } = params;
    const { listBase, json: newJson } = await OffChainListBase.create({
      list: params.list,
      data: params.data,
      name
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
        throw new Error("Failed to pin OffchainMap");
      return {
        list: new _OffChainList({
          root: listBase.root,
          storage: Storage.fromString(hash)
        }),
        json
      };
    }
    return {
      list: new _OffChainList({
        root: listBase.root,
        storage: Storage.empty()
      }),
      json
    };
  }
  toString() {
    return JSON.stringify({ root: this.root.toJSON(), storage: this.storage.toString() }, null, 2);
  }
  static fromString(str) {
    const json = JSON.parse(str);
    return new _OffChainList({
      root: import_o1js4.Field.fromJSON(json.root),
      storage: Storage.fromString(json.storage)
    });
  }
};

// dist/node/storage/whitelist/whitelist.js
var UInt64Option = class extends (0, import_o1js5.Option)(import_o1js5.UInt64) {
};
var WhitelistedAddress = class {
};
var Whitelist = class _Whitelist extends (0, import_o1js5.Struct)({
  list: OffChainList
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
    const key = import_o1js5.Poseidon.hashPacked(import_o1js5.PublicKey, address);
    const value = map.orElse(new OffchainMap()).getOption(key);
    const valueField = value.orElse(import_o1js5.UInt64.MAXINT().value);
    valueField.assertLessThanOrEqual(import_o1js5.UInt64.MAXINT().value);
    const amount = import_o1js5.UInt64.Unsafe.fromField(valueField);
    return new UInt64Option({
      value: amount,
      isSome: value.isSome.or(this.isNone())
    });
  }
  static empty() {
    return new _Whitelist({
      list: OffChainList.empty()
    });
  }
  /**
   * Creates a new whitelist and pins it to IPFS.
   * @param params - The parameters for creating the whitelist.
   * @returns A new `Whitelist` instance.
   */
  static async create(params) {
    const { name = "whitelist", filename = "whitelist.json", keyvalues, timeout, attempts, auth, pin = true, json: initialJson = {} } = params;
    function parseAddress(address) {
      return typeof address === "string" ? import_o1js5.PublicKey.fromBase58(address) : address;
    }
    function parseAmount(amount) {
      if (amount === void 0)
        return import_o1js5.UInt64.zero;
      return typeof amount === "number" ? import_o1js5.UInt64.from(amount) : amount;
    }
    const entries = params.list.map((item) => ({
      address: parseAddress(item.address),
      amount: parseAmount(item.amount)
    }));
    const { list, json } = await OffChainList.create({
      list: entries.map((item) => ({
        key: import_o1js5.Poseidon.hashPacked(import_o1js5.PublicKey, item.address),
        value: item.amount.value
      })),
      data: entries.map((item) => ({
        address: item.address.toBase58(),
        amount: Number(item.amount.toBigInt())
      })),
      name,
      filename,
      keyvalues,
      timeout,
      attempts,
      auth,
      pin,
      json: initialJson
    });
    return { whitelist: new _Whitelist({ list }), json };
  }
  toString() {
    return this.list.toString();
  }
  static fromString(str) {
    return new _Whitelist({ list: OffChainList.fromString(str) });
  }
};

// dist/node/upgradable.js
var import_o1js6 = require("o1js");
var VerificationKeyUpgradeData = class _VerificationKeyUpgradeData extends (0, import_o1js6.Struct)({
  /** The address of the contract to be upgraded. */
  address: import_o1js6.PublicKey,
  /** The token ID associated with the contract. */
  tokenId: import_o1js6.Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: import_o1js6.Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: import_o1js6.Field
}) {
  /**
   * Generates a unique hash for the upgrade data using the Poseidon hash function.
   * @returns {Field} The hash representing the upgrade data.
   */
  hash() {
    return import_o1js6.Poseidon.hash(_VerificationKeyUpgradeData.toFields(this));
  }
};
var PublicKeyOption = class extends (0, import_o1js6.Option)(import_o1js6.PublicKey) {
};
var UpgradeAuthorityAnswer = class extends (0, import_o1js6.Struct)({
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
  isVerified: import_o1js6.Bool
}) {
};

// dist/node/validators.js
var import_mina_signer = __toESM(require("mina-signer"), 1);
var { IndexedMerkleMap: IndexedMerkleMap3 } = import_o1js7.Experimental;
var VALIDATORS_LIST_HEIGHT = 10;
var UPGRADE_AUTHORITY_DATABASE_HEIGHT = 20;
var ValidatorsList = class extends IndexedMerkleMap3(VALIDATORS_LIST_HEIGHT) {
};
var UpgradeAuthorityDatabase = class extends IndexedMerkleMap3(UPGRADE_AUTHORITY_DATABASE_HEIGHT) {
};
var ChainId = {
  "mina:mainnet": fieldFromString("mina:mainnet"),
  "mina:devnet": fieldFromString("mina:devnet"),
  "zeko:mainnet": fieldFromString("zeko:mainnet"),
  "zeko:devnet": fieldFromString("zeko:devnet")
};
var ValidatorDecisionType = {
  updateDatabase: fieldFromString("updateDatabase"),
  updateValidatorsList: fieldFromString("updateValidatorsList")
};
var ValidatorsState = class _ValidatorsState extends (0, import_o1js7.Struct)({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: import_o1js7.Field,
  /** Merkle root of the ValidatorsList */
  root: import_o1js7.Field,
  /** Number of validators */
  count: import_o1js7.UInt32
}) {
  /**
   * Asserts that two `ValidatorsState` instances are equal.
   * @param a First `ValidatorsState` instance.
   * @param b Second `ValidatorsState` instance.
   */
  static assertEquals(a, b) {
    a.chainId.assertEquals(b.chainId);
    a.root.assertEquals(b.root);
    a.count.assertEquals(b.count);
  }
  /**
   * Computes the hash of the validators state.
   * @returns Hash of the current state.
   */
  hash() {
    return import_o1js7.Poseidon.hashPacked(_ValidatorsState, this);
  }
  /**
   * Returns an empty `ValidatorsState`.
   * @returns An empty `ValidatorsState` instance.
   */
  static empty() {
    return new _ValidatorsState({
      chainId: (0, import_o1js7.Field)(0),
      root: (0, import_o1js7.Field)(0),
      count: import_o1js7.UInt32.zero
    });
  }
};
var UpgradeDatabaseStatePacked = class extends (0, import_o1js7.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js7.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: import_o1js7.Field,
  /** Packed data containing version, validFrom, and flags */
  data: import_o1js7.Field
}) {
};
var UpgradeDatabaseState = class _UpgradeDatabaseState extends (0, import_o1js7.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js7.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: import_o1js7.UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: import_o1js7.UInt32
}) {
  /**
   * Asserts that two `UpgradeDatabaseState` instances are equal.
   * @param a First `UpgradeDatabaseState` instance.
   * @param b Second `UpgradeDatabaseState` instance.
   */
  static assertEquals(a, b) {
    a.root.assertEquals(b.root);
    Storage.assertEquals(a.storage, b.storage);
    a.nextUpgradeAuthority.value.assertEquals(b.nextUpgradeAuthority.value);
    a.nextUpgradeAuthority.isSome.assertEquals(b.nextUpgradeAuthority.isSome);
    a.version.assertEquals(b.version);
  }
  /**
   * Returns an empty `UpgradeDatabaseState`.
   * @returns An empty `UpgradeDatabaseState` instance.
   */
  static empty() {
    return new _UpgradeDatabaseState({
      root: new UpgradeAuthorityDatabase().root,
      storage: Storage.empty(),
      nextUpgradeAuthority: PublicKeyOption.none(),
      version: import_o1js7.UInt32.zero,
      validFrom: import_o1js7.UInt32.MAXINT()
    });
  }
  /**
   * Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.
   * @returns A packed representation of the upgrade database state.
   */
  pack() {
    const nextUpgradeAuthorityX = this.nextUpgradeAuthority.value.x;
    const data = import_o1js7.Field.fromBits([
      ...this.version.value.toBits(32),
      ...this.validFrom.value.toBits(32),
      this.nextUpgradeAuthority.value.isOdd,
      this.nextUpgradeAuthority.isSome
    ]);
    return new UpgradeDatabaseStatePacked({
      root: this.root,
      storage: this.storage,
      nextUpgradeAuthorityX,
      data
    });
  }
  /**
   * Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.
   * @param packed The packed upgrade database state.
   * @returns An unpacked `UpgradeDatabaseState` instance.
   */
  static unpack(packed) {
    const bits = packed.data.toBits(66);
    const versionBits = bits.slice(0, 32);
    const validFromBits = bits.slice(32, 64);
    const isOddBit = bits[64];
    const isSomeBit = bits[65];
    const version = import_o1js7.UInt32.Unsafe.fromField(import_o1js7.Field.fromBits(versionBits));
    const validFrom = import_o1js7.UInt32.Unsafe.fromField(import_o1js7.Field.fromBits(validFromBits));
    const nextUpgradeAuthority = PublicKeyOption.from(import_o1js7.PublicKey.from({ x: packed.nextUpgradeAuthorityX, isOdd: isOddBit }));
    nextUpgradeAuthority.isSome = isSomeBit;
    return new _UpgradeDatabaseState({
      root: packed.root,
      storage: packed.storage,
      nextUpgradeAuthority,
      version,
      validFrom
    });
  }
};
var ValidatorsDecision = class _ValidatorsDecision extends (0, import_o1js7.Struct)({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: import_o1js7.Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: import_o1js7.Field,
  /** UpgradeAuthority contract address */
  contractAddress: import_o1js7.PublicKey,
  /** Chain ID */
  chainId: import_o1js7.Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: import_o1js7.UInt32
}) {
  /**
   * Asserts that two `ValidatorsDecision` instances are equal.
   * @param a First `ValidatorsDecision` instance.
   * @param b Second `ValidatorsDecision` instance.
   */
  static assertEquals(a, b) {
    a.message.assertEquals(b.message);
    a.decisionType.assertEquals(b.decisionType);
    a.contractAddress.assertEquals(b.contractAddress);
    a.chainId.assertEquals(b.chainId);
    ValidatorsState.assertEquals(a.validators, b.validators);
    UpgradeDatabaseState.assertEquals(a.upgradeDatabase, b.upgradeDatabase);
    a.expiry.assertEquals(b.expiry);
  }
  createNullifierMessage() {
    return [this.message, ..._ValidatorsDecision.toFields(this)];
  }
  createJsonNullifier(params) {
    const { network, privateKey } = params;
    const minaSigner = new import_mina_signer.default({ network });
    const message = this.createNullifierMessage();
    const nullifier = minaSigner.createNullifier(message.map((field) => field.toBigInt()), privateKey.toBase58());
    return nullifier;
  }
};
var ValidatorsDecisionState = class _ValidatorsDecisionState extends (0, import_o1js7.Struct)({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: import_o1js7.Field,
  /** Number of votes in favor of the decision */
  yesVotes: import_o1js7.UInt32,
  /** Number of votes against the decision */
  noVotes: import_o1js7.UInt32,
  /** Number of votes of abstention */
  abstainVotes: import_o1js7.UInt32
}) {
  static startVoting(decision) {
    return new _ValidatorsDecisionState({
      decision,
      alreadyVoted: new ValidatorsList().root,
      yesVotes: import_o1js7.UInt32.zero,
      noVotes: import_o1js7.UInt32.zero,
      abstainVotes: import_o1js7.UInt32.zero
    });
  }
  /**
   * Records a vote
   * @param validatorNullifier The nullifier of the validator.
   * @param validatorsList The ValidatorsList containing authorized validators.
   * @param votedList The ValidatorsList tracking who has already voted.
   * @param yes Whether this is a "yes" vote.
   * @param no Whether this is a "no" vote.
   * @param abstain Whether this is an "abstain" vote.
   * @param signature The signature of the validator.
   * @returns A new `ValidatorsDecisionState` reflecting the vote.
   */
  vote(validatorNullifier, validatorsList, votedList, yes, no, abstain, signature) {
    const publicKey = validatorNullifier.getPublicKey();
    const key = validatorNullifier.key();
    validatorNullifier.verify(this.decision.createNullifierMessage());
    const previousVotesCount = this.yesVotes.add(this.noVotes).add(this.abstainVotes);
    const yesVotes = this.yesVotes.add(import_o1js7.Provable.if(yes, import_o1js7.UInt32.from(1), import_o1js7.UInt32.from(0)));
    const noVotes = this.noVotes.add(import_o1js7.Provable.if(no, import_o1js7.UInt32.from(1), import_o1js7.UInt32.from(0)));
    const abstainVotes = this.abstainVotes.add(import_o1js7.Provable.if(abstain, import_o1js7.UInt32.from(1), import_o1js7.UInt32.from(0)));
    previousVotesCount.add(import_o1js7.UInt32.from(1)).assertEquals(yesVotes.add(noVotes).add(abstainVotes));
    const hash = import_o1js7.Poseidon.hashPacked(import_o1js7.PublicKey, publicKey);
    validatorsList.root.assertEquals(this.decision.validators.root);
    validatorsList.get(hash).assertBool("Wrong ValidatorsList format").assertTrue("Validator doesn't have authority to sign");
    signature.verify(publicKey, ValidatorsDecision.toFields(this.decision)).assertTrue("Wrong validator signature");
    this.decision.validators.root.assertEquals(validatorsList.root);
    votedList.root.assertEquals(this.alreadyVoted);
    votedList.insert(key, (0, import_o1js7.Field)(1));
    return new _ValidatorsDecisionState({
      decision: this.decision,
      alreadyVoted: votedList.root,
      yesVotes,
      noVotes,
      abstainVotes
    });
  }
  /**
   * Asserts that two `ValidatorsDecisionState` instances are equal.
   * @param a First `ValidatorsDecisionState` instance.
   * @param b Second `ValidatorsDecisionState` instance.
   */
  static assertEquals(a, b) {
    ValidatorsDecision.assertEquals(a.decision, b.decision);
    a.alreadyVoted.assertEquals(b.alreadyVoted);
    a.yesVotes.assertEquals(b.yesVotes);
    a.noVotes.assertEquals(b.noVotes);
    a.abstainVotes.assertEquals(b.abstainVotes);
  }
};
var ValidatorsVoting = (0, import_o1js7.ZkProgram)({
  name: "ValidatorsVoting",
  publicInput: ValidatorsDecisionState,
  publicOutput: ValidatorsDecisionState,
  methods: {
    /**
     * Starts the voting process for a decision.
     */
    startVoting: {
      privateInputs: [ValidatorsDecision],
      async method(state2, decision) {
        const calculatedState = ValidatorsDecisionState.startVoting(decision);
        ValidatorsDecisionState.assertEquals(state2, calculatedState);
        return calculatedState;
      }
    },
    /**
     * Records a vote
     */
    vote: {
      privateInputs: [
        ValidatorsDecision,
        import_o1js7.Nullifier,
        ValidatorsList,
        ValidatorsList,
        import_o1js7.Bool,
        import_o1js7.Bool,
        import_o1js7.Bool,
        import_o1js7.Signature
      ],
      async method(state2, decision, nullifier, validatorsList, votedList, yes, no, abstain, signature) {
        const calculatedState = state2.vote(nullifier, validatorsList, votedList, yes, no, abstain, signature);
        return calculatedState;
      }
    },
    /**
     * Merges two `ValidatorsDecisionState` proofs.
     */
    merge: {
      privateInputs: [import_o1js7.SelfProof, import_o1js7.SelfProof],
      async method(state2, proof1, proof2) {
        proof1.verify();
        proof2.verify();
        ValidatorsDecisionState.assertEquals(state2, proof1.publicInput);
        ValidatorsDecisionState.assertEquals(proof1.publicOutput, proof2.publicInput);
        return proof2.publicOutput;
      }
    }
  }
});
var ValidatorsVotingNativeProof = class extends import_o1js7.ZkProgram.Proof(ValidatorsVoting) {
};
var ValidatorsVotingProof = class extends import_o1js7.DynamicProof {
};
ValidatorsVotingProof.publicInputType = ValidatorsDecisionState;
ValidatorsVotingProof.publicOutputType = ValidatorsDecisionState;
ValidatorsVotingProof.maxProofsVerified = 2;
ValidatorsVotingProof.featureFlags = import_o1js7.FeatureFlags.allMaybe;
function fieldFromString(storage) {
  const fields = import_o1js7.Encoding.stringToFields(storage);
  if (fields.length !== 1)
    throw new Error("String is too long");
  return fields[0];
}

// dist/node/upgrade.js
var import_tslib = require("tslib");
var import_o1js8 = require("o1js");
var ValidatorsListEvent = class extends (0, import_o1js8.Struct)({
  validators: ValidatorsState,
  storage: Storage
}) {
};
var VerificationKeyUpgradeAuthorityErrors = {
  WrongNewVerificationKeyHash: "Wrong new verification key hash"
};
var VerificationKeyUpgradeAuthority = class extends import_o1js8.SmartContract {
  constructor() {
    super(...arguments);
    this.verificationKeyHash = (0, import_o1js8.State)();
    this.validators = (0, import_o1js8.State)();
    this.upgradeDatabasePacked = (0, import_o1js8.State)();
    this.events = {
      validatorsList: ValidatorsListEvent,
      updateDatabase: UpgradeDatabaseState
    };
  }
  /**
   * Deploys the contract and sets the initial state.
   */
  async deploy() {
    await super.deploy();
    this.upgradeDatabasePacked.set(UpgradeDatabaseState.empty().pack());
    this.account.permissions.set({
      ...import_o1js8.Permissions.default(),
      setVerificationKey: (
        // The contract needs to be redeployed in the case of an upgrade.
        import_o1js8.Permissions.VerificationKey.impossibleDuringCurrentVersion()
      ),
      setPermissions: import_o1js8.Permissions.impossible()
    });
  }
  /**
   * Initializes the contract with validators and sets the verification key hash.
   *
   * @param {ValidatorsState} validators - The initial validators state.
   * @param {Storage} storage - Off-chain storage information, e.g., IPFS hash.
   * @param {Field} verificationKeyHash - The hash of the verification key.
   */
  async initialize(validators, storage, verificationKeyHash) {
    this.account.provedState.requireEquals((0, import_o1js8.Bool)(false));
    await this.setValidatorsList(validators, storage);
    this.verificationKeyHash.set(verificationKeyHash);
  }
  /**
   * Sets the validators list and emits an event.
   *
   * @param {ValidatorsState} validators - The validators state to set.
   * @param {Storage} storage - The storage associated with the validators list.
   */
  async setValidatorsList(validators, storage) {
    this.validators.set(validators.hash());
    this.emitEvent("validatorsList", new ValidatorsListEvent({ validators, storage }));
  }
  /**
   * Verifies the upgrade data provided by another contract.
   *
   * @param {VerificationKeyUpgradeData} data - The upgrade data to verify.
   * @returns {Promise<UpgradeAuthorityAnswer>} - The answer indicating verification result.
   */
  async verifyUpgradeData(data) {
    const upgradeDatabase = UpgradeDatabaseState.unpack(this.upgradeDatabasePacked.getAndRequireEquals());
    this.network.globalSlotSinceGenesis.requireBetween(upgradeDatabase.validFrom, import_o1js8.UInt32.MAXINT());
    const map = await import_o1js8.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await loadIndexedMerkleMap({
        url: createIpfsURL({ hash: upgradeDatabase.storage.toString() }),
        type: UpgradeAuthorityDatabase
      });
    });
    map.root.assertEquals(upgradeDatabase.root);
    const key = data.hash();
    const newVerificationKeyHash = map.get(key);
    newVerificationKeyHash.assertEquals(data.newVerificationKeyHash, VerificationKeyUpgradeAuthorityErrors.WrongNewVerificationKeyHash);
    return new UpgradeAuthorityAnswer({
      // Should be public key of the next upgrade authority in case
      // new version of o1js breaks the verification key of upgrade authority
      nextUpgradeAuthority: upgradeDatabase.nextUpgradeAuthority,
      isVerified: (0, import_o1js8.Bool)(true)
    });
  }
  /**
   * Updates the upgrade database after validator consensus.
   *
   * @param {ValidatorsVotingProof} proof - The proof of validators voting.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   */
  async updateDatabase(proof, vk, validators) {
    const oldUpgradeDatabase = UpgradeDatabaseState.unpack(this.upgradeDatabasePacked.getAndRequireEquals());
    const upgradeDatabase = proof.publicInput.decision.upgradeDatabase;
    upgradeDatabase.version.assertGreaterThan(oldUpgradeDatabase.version);
    await this.checkValidatorsDecision(proof, vk, ValidatorDecisionType["updateDatabase"], validators);
    const map = await import_o1js8.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await loadIndexedMerkleMap({
        url: createIpfsURL({ hash: upgradeDatabase.storage.toString() }),
        type: UpgradeAuthorityDatabase
      });
    });
    map.root.assertEquals(upgradeDatabase.root);
    this.upgradeDatabasePacked.set(upgradeDatabase.pack());
    this.emitEvent("updateDatabase", upgradeDatabase);
  }
  /**
   * Updates the validators list based on validator votes.
   *
   * @param {ValidatorsState} validators - The new validators state.
   * @param {Storage} storage - The storage associated with the validators list.
   * @param {ValidatorsVotingProof} proof - The proof of validators voting.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   */
  async updateValidatorsList(validators, storage, proof, vk) {
    await this.checkValidatorsDecision(proof, vk, ValidatorDecisionType["updateValidatorsList"], validators);
    await this.setValidatorsList(validators, storage);
  }
  /**
   * Checks the validators' decision by verifying the provided proof.
   *
   * @param {ValidatorsVotingProof} proof - The proof to verify.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   * @param {Field} decisionType - The type of decision being validated.
   */
  async checkValidatorsDecision(proof, vk, decisionType, validatorsState) {
    this.network.globalSlotSinceGenesis.requireBetween(import_o1js8.UInt32.zero, proof.publicInput.decision.expiry);
    vk.hash.assertEquals(this.verificationKeyHash.getAndRequireEquals());
    proof.verify(vk);
    proof.publicInput.decision.validators.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicInput.decision.decisionType.assertEquals(decisionType);
    proof.publicInput.decision.contractAddress.assertEquals(this.address);
    validatorsState.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicOutput.yesVotes.mul(2).assertGreaterThan(validatorsState.count);
  }
};
(0, import_tslib.__decorate)([
  (0, import_o1js8.state)(import_o1js8.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "verificationKeyHash", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js8.state)(import_o1js8.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "validators", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js8.state)(UpgradeDatabaseStatePacked),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "upgradeDatabasePacked", void 0);
(0, import_tslib.__decorate)([
  import_o1js8.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsState,
    Storage,
    import_o1js8.Field
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "initialize", null);
(0, import_tslib.__decorate)([
  import_o1js8.method.returns(UpgradeAuthorityAnswer),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [VerificationKeyUpgradeData]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "verifyUpgradeData", null);
(0, import_tslib.__decorate)([
  import_o1js8.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsVotingProof,
    import_o1js8.VerificationKey,
    ValidatorsState
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateDatabase", null);
(0, import_tslib.__decorate)([
  import_o1js8.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsState,
    Storage,
    ValidatorsVotingProof,
    import_o1js8.VerificationKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateValidatorsList", null);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainId,
  FieldOption,
  OffChainList,
  OffChainListBase,
  OffchainMap,
  OffchainMapOption,
  PublicKeyOption,
  Storage,
  UInt64Option,
  UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase,
  UpgradeDatabaseState,
  UpgradeDatabaseStatePacked,
  ValidatorDecisionType,
  ValidatorsDecision,
  ValidatorsDecisionState,
  ValidatorsList,
  ValidatorsListEvent,
  ValidatorsState,
  ValidatorsVoting,
  ValidatorsVotingNativeProof,
  ValidatorsVotingProof,
  VerificationKeyUpgradeAuthority,
  VerificationKeyUpgradeData,
  Whitelist,
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
  nftVerificationKeys,
  parseIndexedMapSerialized,
  pinJSON,
  saveIndexedMerkleMap,
  serializeIndexedMap,
  sleep,
  toBase
});
