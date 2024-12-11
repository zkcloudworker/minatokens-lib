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
  AdminContract: () => AdminContract,
  BuyEvent: () => BuyEvent,
  ChainId: () => ChainId,
  Collection: () => Collection,
  CollectionConfigurationUpdate: () => CollectionConfigurationUpdate,
  CollectionContract: () => CollectionContract,
  CollectionData: () => CollectionData,
  CollectionDataPacked: () => CollectionDataPacked,
  CollectionErrors: () => CollectionErrors,
  CollectionStateStruct: () => CollectionStateStruct,
  ColorPlugin: () => ColorPlugin,
  LimitMintingEvent: () => LimitMintingEvent,
  Metadata: () => Metadata,
  MetadataFieldTypeValues: () => MetadataFieldTypeValues,
  MetadataMap: () => MetadataMap,
  MetadataTree: () => MetadataTree,
  MetadataValue: () => MetadataValue,
  MintEvent: () => MintEvent,
  MintParams: () => MintParams,
  MintParamsOption: () => MintParamsOption,
  MintRequest: () => MintRequest,
  NFT: () => NFT,
  NFTAdminContract: () => NFTAdminContract,
  NFTData: () => NFTData,
  NFTImmutableState: () => NFTImmutableState,
  NFTProgram: () => NFTProgram,
  NFTState: () => NFTState,
  NFTStateStruct: () => NFTStateStruct,
  NFTUpdateProof: () => NFTUpdateProof,
  NFTWhitelistedAdminContract: () => NFTWhitelistedAdminContract,
  OwnershipChangeEvent: () => OwnershipChangeEvent,
  PauseData: () => PauseData,
  PauseEvent: () => PauseEvent,
  PauseNFTEvent: () => PauseNFTEvent,
  PublicKeyOption: () => PublicKeyOption,
  SellEvent: () => SellEvent,
  Storage: () => Storage,
  TEXT_TREE_HEIGHT: () => TEXT_TREE_HEIGHT,
  Text: () => Text,
  TransferEvent: () => TransferEvent,
  UpdateEvent: () => UpdateEvent,
  UpgradeAuthorityAnswer: () => UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase: () => UpgradeAuthorityDatabase,
  UpgradeDatabaseState: () => UpgradeDatabaseState,
  UpgradeDatabaseStatePacked: () => UpgradeDatabaseStatePacked,
  UpgradeVerificationKeyEvent: () => UpgradeVerificationKeyEvent,
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
  WhitelistedAdminContract: () => WhitelistedAdminContract,
  WhitelistedCollection: () => WhitelistedCollection,
  contractList: () => contractList,
  fieldFromString: () => fieldFromString,
  fieldToString: () => fieldToString,
  nftVerificationKeys: () => nftVerificationKeys
});
module.exports = __toCommonJS(node_exports);

// dist/node/admin/standard.js
var import_tslib3 = require("tslib");
var import_o1js9 = require("o1js");

// dist/node/contracts/collection.js
var import_tslib2 = require("tslib");
var import_o1js7 = require("o1js");

// dist/node/contracts/nft.js
var import_tslib = require("tslib");
var import_o1js5 = require("o1js");

// dist/node/contracts/types.js
var import_o1js = require("o1js");
var Storage = class _Storage extends (0, import_o1js.Struct)({
  url: import_o1js.Provable.Array(import_o1js.Field, 2)
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
    const fields = import_o1js.Encoding.stringToFields(url);
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
    return import_o1js.Encoding.stringFromFields([this.url[0], this.url[1]]);
  }
};
var NFTStateStruct = class _NFTStateStruct extends (0, import_o1js.Struct)({
  name: import_o1js.Field,
  metadata: import_o1js.Field,
  owner: import_o1js.PublicKey,
  storage: Storage,
  packedData: import_o1js.Field,
  metadataVerificationKeyHash: import_o1js.Field
}) {
  /**
   * Creates an NFTStateStruct from an account's app state.
   * @param account The account containing the zkApp state.
   * @returns A new NFTStateStruct instance.
   */
  static fromAccount(account) {
    if (!account.zkapp?.appState) {
      throw new Error("Invalid zkApp account state");
    }
    if (_NFTStateStruct.sizeInFields() !== account.zkapp?.appState.length) {
      throw new Error("Invalid NFTStateStruct size");
    }
    return _NFTStateStruct.fromFields(account.zkapp?.appState);
  }
  /**
   * Asserts that two NFTStateStruct instances are equal.
   * @param a The first NFTStateStruct instance.
   * @param b The second NFTStateStruct instance.
   */
  static assertEqual(a, b) {
    a.name.assertEquals(b.name);
    a.metadata.assertEquals(b.metadata);
    a.owner.assertEquals(b.owner);
    Storage.assertEquals(a.storage, b.storage);
    a.packedData.assertEquals(b.packedData);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
  }
};
var NFTImmutableState = class _NFTImmutableState extends (0, import_o1js.Struct)({
  /** The public key of the creator of the NFT (readonly). */
  creator: import_o1js.PublicKey,
  // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: import_o1js.Bool,
  // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: import_o1js.Bool,
  // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: import_o1js.Bool,
  // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: import_o1js.Bool,
  // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: import_o1js.Bool,
  // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: import_o1js.Bool,
  // readonly
  /** The address of the NFT contract (readonly). */
  address: import_o1js.PublicKey,
  // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: import_o1js.Field,
  // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: import_o1js.UInt32
  // readonly
}) {
  /**
   * Asserts that two NFTImmutableState instances are equal.
   * @param a The first NFTImmutableState instance.
   * @param b The second NFTImmutableState instance.
   */
  static assertEqual(a, b) {
    a.creator.assertEquals(b.creator);
    a.canChangeOwnerByProof.assertEquals(b.canChangeOwnerByProof);
    a.canChangeOwnerBySignature.assertEquals(b.canChangeOwnerBySignature);
    a.canChangeMetadata.assertEquals(b.canChangeMetadata);
    a.canChangePrice.assertEquals(b.canChangePrice);
    a.canChangeStorage.assertEquals(b.canChangeStorage);
    a.canChangeName.assertEquals(b.canChangeName);
    a.canChangeMetadataVerificationKeyHash.assertEquals(b.canChangeMetadataVerificationKeyHash);
    a.canPause.assertEquals(b.canPause);
    a.address.assertEquals(b.address);
    a.tokenId.assertEquals(b.tokenId);
    a.id.assertEquals(b.id);
  }
  /**
   * Creates a new NFTImmutableState from NFTData and other parameters.
   * @param params The parameters including nftData, creator, address, and tokenId.
   * @returns A new NFTImmutableState instance.
   */
  static fromNFTData(params) {
    const { nftData, creator, address, tokenId } = params;
    return new _NFTImmutableState({
      creator,
      address,
      tokenId,
      id: nftData.id,
      canChangeOwnerByProof: nftData.canChangeOwnerByProof,
      canChangeOwnerBySignature: nftData.canChangeOwnerBySignature,
      canChangeMetadata: nftData.canChangeMetadata,
      canChangePrice: nftData.canChangePrice,
      canChangeStorage: nftData.canChangeStorage,
      canChangeName: nftData.canChangeName,
      canChangeMetadataVerificationKeyHash: nftData.canChangeMetadataVerificationKeyHash,
      canPause: nftData.canPause
    });
  }
};
var NFTState = class _NFTState extends (0, import_o1js.Struct)({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: import_o1js.Field,
  /** The metadata associated with the NFT. */
  metadata: import_o1js.Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: import_o1js.PublicKey,
  /** The price of the NFT. */
  price: import_o1js.UInt64,
  /** The version number of the NFT state. */
  version: import_o1js.UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: import_o1js.Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: import_o1js.Field
}) {
  /**
   * Asserts that two NFTState instances are equal.
   * @param a The first NFTState instance.
   * @param b The second NFTState instance.
   */
  static assertEqual(a, b) {
    NFTImmutableState.assertEqual(a.immutableState, b.immutableState);
    a.name.assertEquals(b.name);
    a.metadata.assertEquals(b.metadata);
    Storage.assertEquals(a.storage, b.storage);
    a.owner.assertEquals(b.owner);
    a.price.assertEquals(b.price);
    a.version.assertEquals(b.version);
    a.isPaused.assertEquals(b.isPaused);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
  }
  /**
   * Creates a new NFTState from an NFTStateStruct and other parameters.
   * @param params The parameters including nftState, creator, address, and tokenId.
   * @returns A new NFTState instance.
   */
  static fromNFTState(params) {
    const { nftState, creator, address, tokenId } = params;
    const nftData = NFTData.unpack(nftState.packedData);
    const immutableState = NFTImmutableState.fromNFTData({
      nftData,
      creator,
      address,
      tokenId
    });
    return new _NFTState({
      immutableState,
      name: nftState.name,
      metadata: nftState.metadata,
      storage: nftState.storage,
      owner: nftState.owner,
      price: nftData.price,
      version: nftData.version,
      isPaused: nftData.isPaused,
      metadataVerificationKeyHash: nftState.metadataVerificationKeyHash
    });
  }
};
var NFTUpdateProof = class extends import_o1js.DynamicProof {
};
NFTUpdateProof.publicInputType = NFTState;
NFTUpdateProof.publicOutputType = NFTState;
NFTUpdateProof.maxProofsVerified = 2;
NFTUpdateProof.featureFlags = import_o1js.FeatureFlags.allMaybe;
var NFTData = class _NFTData extends (0, import_o1js.Struct)({
  /** The price of the NFT. */
  price: import_o1js.UInt64,
  /** The version number of the NFT state. */
  version: import_o1js.UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: import_o1js.UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: import_o1js.Bool,
  // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: import_o1js.Bool,
  // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: import_o1js.Bool,
  // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: import_o1js.Bool,
  // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: import_o1js.Bool,
  // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: import_o1js.Bool,
  // readonly
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: import_o1js.Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: import_o1js.Bool
  // readonly
}) {
  /**
   * Creates a new NFTData instance with optional parameters.
   * @param params The parameters to create the NFTData.
   * @returns A new NFTData instance.
   */
  static new(params = {}) {
    const { price, version, id, canChangeOwnerByProof, canChangeOwnerBySignature, canChangeMetadata, canChangePrice, canChangeStorage, canChangeName, canChangeMetadataVerificationKeyHash, canPause, isPaused, requireOwnerSignatureToUpgrade } = params;
    return new _NFTData({
      price: import_o1js.UInt64.from(price ?? 0),
      version: import_o1js.UInt32.from(version ?? 0),
      id: import_o1js.UInt32.from(id ?? 0),
      canChangeOwnerByProof: (0, import_o1js.Bool)(canChangeOwnerByProof ?? false),
      canChangeOwnerBySignature: (0, import_o1js.Bool)(canChangeOwnerBySignature ?? true),
      canChangeMetadata: (0, import_o1js.Bool)(canChangeMetadata ?? false),
      canChangePrice: (0, import_o1js.Bool)(canChangePrice ?? true),
      canChangeStorage: (0, import_o1js.Bool)(canChangeStorage ?? false),
      canChangeName: (0, import_o1js.Bool)(canChangeName ?? false),
      canChangeMetadataVerificationKeyHash: (0, import_o1js.Bool)(canChangeMetadataVerificationKeyHash ?? false),
      canPause: (0, import_o1js.Bool)(canPause ?? false),
      isPaused: (0, import_o1js.Bool)(isPaused ?? false),
      requireOwnerSignatureToUpgrade: (0, import_o1js.Bool)(requireOwnerSignatureToUpgrade ?? false)
    });
  }
  /**
   * Packs the NFTData into a single Field for efficient storage.
   * @returns The packed Field representation of the NFTData.
   */
  pack() {
    const price = this.price.value.toBits(64);
    const version = this.version.value.toBits(32);
    const id = this.id.value.toBits(32);
    return import_o1js.Field.fromBits([
      ...price,
      ...version,
      ...id,
      this.canChangeOwnerByProof,
      this.canChangeOwnerBySignature,
      this.canChangeMetadata,
      this.canChangePrice,
      this.canChangeStorage,
      this.canChangeName,
      this.canChangeMetadataVerificationKeyHash,
      this.canPause,
      this.isPaused,
      this.requireOwnerSignatureToUpgrade
    ]);
  }
  /**
   * Unpacks a Field into an NFTData instance.
   * @param packed The packed Field representation of the NFTData.
   * @returns A new NFTData instance.
   */
  static unpack(packed) {
    const bits = packed.toBits(64 + 32 + 32 + 10);
    const price = import_o1js.UInt64.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(0, 64)));
    const version = import_o1js.UInt32.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(64, 64 + 32)));
    const id = import_o1js.UInt32.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(64 + 32, 64 + 32 + 32)));
    const canChangeOwnerByProof = bits[64 + 32 + 32];
    const canChangeOwnerBySignature = bits[64 + 32 + 32 + 1];
    const canChangeMetadata = bits[64 + 32 + 32 + 2];
    const canChangePrice = bits[64 + 32 + 32 + 3];
    const canChangeStorage = bits[64 + 32 + 32 + 4];
    const canChangeName = bits[64 + 32 + 32 + 5];
    const canChangeMetadataVerificationKeyHash = bits[64 + 32 + 32 + 6];
    const canPause = bits[64 + 32 + 32 + 7];
    const isPaused = bits[64 + 32 + 32 + 8];
    const requireOwnerSignatureToUpgrade = bits[64 + 32 + 32 + 9];
    return new _NFTData({
      price,
      version,
      id,
      canChangeOwnerByProof,
      canChangeOwnerBySignature,
      canChangeMetadata,
      canChangePrice,
      canChangeStorage,
      canChangeName,
      canChangeMetadataVerificationKeyHash,
      canPause,
      isPaused,
      requireOwnerSignatureToUpgrade
    });
  }
};
var CollectionConfigurationUpdate = class extends (0, import_o1js.Struct)({
  /** The name of the collection. */
  name: import_o1js.Field,
  /** The base URL for the metadata of the NFTs in the collection. */
  baseURL: import_o1js.Field,
  /** The royalty fee percentage (e.g., 1000 = 1%). */
  royaltyFee: import_o1js.UInt32,
  /** The transfer fee amount. */
  transferFee: import_o1js.UInt64,
  /** The public key of the admin contract. */
  admin: import_o1js.PublicKey
}) {
};
var CollectionDataPacked = class extends (0, import_o1js.Struct)({
  /** The x-coordinate of the upgrade authority's public key. */
  upgradeAuthorityX: import_o1js.Field,
  /** The packed data field containing collection parameters and flags. */
  packedData: import_o1js.Field
}) {
};
var CollectionData = class _CollectionData extends (0, import_o1js.Struct)({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: import_o1js.PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: import_o1js.UInt32,
  // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: import_o1js.UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: import_o1js.Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: import_o1js.Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireSaleApproval: import_o1js.Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: import_o1js.Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: import_o1js.Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: import_o1js.Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: import_o1js.Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: import_o1js.Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: import_o1js.Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: import_o1js.Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: import_o1js.Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: import_o1js.Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: import_o1js.Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: import_o1js.Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: import_o1js.Bool
}) {
  /**
   * Creates a new CollectionData instance with specified parameters.
   * @param params The parameters to create the CollectionData.
   * @returns A new CollectionData instance.
   */
  static new(params) {
    const { upgradeAuthority, royaltyFee, transferFee, requireTransferApproval, requireUpdateApproval, requireSaleApproval, requireBuyApproval, requireCreatorSignatureToUpgradeCollection, requireCreatorSignatureToUpgradeNFT, canMint, canChangeName, canChangeCreator, canChangeBaseUri, canChangeRoyalty, canChangeTransferFee, canSetAdmin, canPause, isPaused } = params;
    return new _CollectionData({
      upgradeAuthority: upgradeAuthority ?? import_o1js.PublicKey.empty(),
      royaltyFee: import_o1js.UInt32.from(royaltyFee ?? 0),
      transferFee: import_o1js.UInt64.from(transferFee ?? 0),
      requireTransferApproval: (0, import_o1js.Bool)(requireTransferApproval ?? false),
      requireUpdateApproval: (0, import_o1js.Bool)(requireUpdateApproval ?? false),
      requireSaleApproval: (0, import_o1js.Bool)(requireSaleApproval ?? false),
      requireBuyApproval: (0, import_o1js.Bool)(requireBuyApproval ?? false),
      requireCreatorSignatureToUpgradeCollection: (0, import_o1js.Bool)(requireCreatorSignatureToUpgradeCollection ?? false),
      requireCreatorSignatureToUpgradeNFT: (0, import_o1js.Bool)(requireCreatorSignatureToUpgradeNFT ?? false),
      canMint: (0, import_o1js.Bool)(canMint ?? true),
      canPause: (0, import_o1js.Bool)(canPause ?? true),
      canChangeName: (0, import_o1js.Bool)(canChangeName ?? false),
      canChangeCreator: (0, import_o1js.Bool)(canChangeCreator ?? false),
      canChangeBaseUri: (0, import_o1js.Bool)(canChangeBaseUri ?? false),
      canChangeRoyalty: (0, import_o1js.Bool)(canChangeRoyalty ?? false),
      canChangeTransferFee: (0, import_o1js.Bool)(canChangeTransferFee ?? false),
      canSetAdmin: (0, import_o1js.Bool)(canSetAdmin ?? false),
      isPaused: (0, import_o1js.Bool)(isPaused ?? false)
    });
  }
  /**
   * Packs the CollectionData into a CollectionDataPacked representation for efficient storage.
   * @returns The packed CollectionDataPacked instance.
   */
  pack() {
    return new CollectionDataPacked({
      upgradeAuthorityX: this.upgradeAuthority.x,
      packedData: import_o1js.Field.fromBits([
        ...this.royaltyFee.value.toBits(32),
        ...this.transferFee.value.toBits(64),
        this.requireTransferApproval,
        this.requireUpdateApproval,
        this.requireSaleApproval,
        this.requireBuyApproval,
        this.requireCreatorSignatureToUpgradeCollection,
        this.requireCreatorSignatureToUpgradeNFT,
        this.canMint,
        this.canChangeName,
        this.canChangeCreator,
        this.canChangeBaseUri,
        this.canChangeRoyalty,
        this.canChangeTransferFee,
        this.canSetAdmin,
        this.canPause,
        this.isPaused,
        this.upgradeAuthority.isOdd
      ])
    });
  }
  /**
   * Unpacks a CollectionDataPacked instance into a CollectionData instance.
   * @param packed The packed CollectionDataPacked instance.
   * @returns A new CollectionData instance.
   */
  static unpack(packed) {
    const bits = packed.packedData.toBits(32 + 64 + 16);
    const royaltyFee = import_o1js.UInt32.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(0, 32)));
    const transferFee = import_o1js.UInt64.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(32, 32 + 64)));
    const upgradeAuthorityIsOdd = bits[32 + 64 + 15];
    const upgradeAuthority = import_o1js.PublicKey.from({
      x: packed.upgradeAuthorityX,
      isOdd: upgradeAuthorityIsOdd
    });
    return new _CollectionData({
      royaltyFee,
      transferFee,
      upgradeAuthority,
      requireTransferApproval: bits[32 + 64],
      requireUpdateApproval: bits[32 + 64 + 1],
      requireSaleApproval: bits[32 + 64 + 2],
      requireBuyApproval: bits[32 + 64 + 3],
      requireCreatorSignatureToUpgradeCollection: bits[32 + 64 + 4],
      requireCreatorSignatureToUpgradeNFT: bits[32 + 64 + 5],
      canMint: bits[32 + 64 + 6],
      canChangeName: bits[32 + 64 + 7],
      canChangeCreator: bits[32 + 64 + 8],
      canChangeBaseUri: bits[32 + 64 + 9],
      canChangeRoyalty: bits[32 + 64 + 10],
      canChangeTransferFee: bits[32 + 64 + 11],
      canSetAdmin: bits[32 + 64 + 12],
      canPause: bits[32 + 64 + 13],
      isPaused: bits[32 + 64 + 14]
    });
  }
};
var MintParams = class extends (0, import_o1js.Struct)({
  /** The name of the NFT. */
  name: import_o1js.Field,
  /** The address of the NFT contract. */
  address: import_o1js.PublicKey,
  /** The token ID of the NFT. */
  tokenId: import_o1js.Field,
  /** The owner of the NFT. */
  owner: import_o1js.PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: import_o1js.UInt64,
  /** The metadata associated with the NFT. */
  metadata: import_o1js.Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: import_o1js.Field,
  /** The expiry time for minting the NFT. */
  expiry: import_o1js.UInt32
}) {
};
var MintParamsOption = class extends (0, import_o1js.Option)(MintParams) {
};
var MintRequest = class extends (0, import_o1js.Struct)({
  /** The address of the NFT contract where the NFT will be minted. */
  address: import_o1js.PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: import_o1js.PublicKey,
  // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: import_o1js.Field,
  // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: import_o1js.Bool
  // should be interpreted by the admin contract, can form PublicKey together with customId
}) {
};

// dist/node/contracts/events.js
var import_o1js2 = require("o1js");
var MintEvent = class extends (0, import_o1js2.Struct)({
  /** The initial state of the NFT at the time of minting. */
  initialState: NFTStateStruct,
  /** The public key address of the minted NFT. */
  address: import_o1js2.PublicKey
}) {
};
var UpdateEvent = class extends (0, import_o1js2.Struct)({
  /** The updated name of the NFT. */
  name: import_o1js2.Field,
  /** The updated metadata hash of the NFT. */
  metadata: import_o1js2.Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: import_o1js2.PublicKey,
  /** The updated price of the NFT. */
  price: import_o1js2.UInt64,
  /** The version number of the NFT state. */
  version: import_o1js2.UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: import_o1js2.Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: import_o1js2.Field
}) {
};
var TransferEvent = class extends (0, import_o1js2.Struct)({
  /** The public key of the sender (current owner) before the transfer. */
  from: import_o1js2.PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: import_o1js2.PublicKey,
  /** The public key address of the NFT being transferred. */
  address: import_o1js2.PublicKey
}) {
};
var PauseNFTEvent = class extends (0, import_o1js2.Struct)({
  /** The public key address of the NFT. */
  address: import_o1js2.PublicKey,
  /** Indicates whether the NFT is paused (`true`) or resumed (`false`). */
  isPaused: import_o1js2.Bool
}) {
};
var SellEvent = class extends (0, import_o1js2.Struct)({
  /** The public key of the seller listing the NFT for sale. */
  seller: import_o1js2.PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: import_o1js2.UInt64,
  /** The public key address of the NFT being sold. */
  address: import_o1js2.PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: import_o1js2.UInt32
}) {
};
var BuyEvent = class extends (0, import_o1js2.Struct)({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: import_o1js2.PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: import_o1js2.PublicKey,
  /** The price at which the NFT was purchased. */
  price: import_o1js2.UInt64,
  /** The public key address of the NFT being purchased. */
  address: import_o1js2.PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: import_o1js2.UInt32
}) {
};
var UpgradeVerificationKeyEvent = class extends (0, import_o1js2.Struct)({
  /** The hash of the new verification key. */
  verificationKeyHash: import_o1js2.Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: import_o1js2.PublicKey,
  /** The version number of the NFT state after the upgrade. */
  version: import_o1js2.UInt32
}) {
};
var LimitMintingEvent = class extends (0, import_o1js2.Struct)({
  /** Indicates whether minting is limited (`true`) or not (`false`). */
  mintingLimited: import_o1js2.Bool
}) {
};

// dist/node/contracts/pausable.js
var import_o1js3 = require("o1js");
var PauseEvent = class extends (0, import_o1js3.Struct)({
  /**
   * Indicates whether the contract is currently paused.
   */
  isPaused: import_o1js3.Bool
}) {
};

// dist/node/contracts/ownable.js
var import_o1js4 = require("o1js");
var OwnershipChangeEvent = class extends (0, import_o1js4.Struct)({
  oldOwner: import_o1js4.PublicKey,
  newOwner: import_o1js4.PublicKey
}) {
};

// dist/node/contracts/nft.js
var NFTErrors = {
  onlyOwnerCanUpgradeVerificationKey: "Only owner can upgrade verification key",
  cannotChangeMetadataVerificationKeyHash: "Cannot change metadata verification key hash",
  cannotChangeOwner: "Cannot change owner",
  cannotChangeStorage: "Cannot change storage",
  cannotChangePrice: "Cannot change price",
  cannotChangePauseState: "Cannot change pause state",
  noPermissionToPause: "No permission to pause",
  nftAlreadyPaused: "NFT is already paused",
  nftIsNotPaused: "NFT is not paused",
  nftIsPaused: "NFT is paused",
  cannotChangeName: "Cannot change name",
  cannotChangeMetadata: "Cannot change metadata",
  noMetadataVerificationKey: "No metadata verification key",
  noPermissionToSell: "No permission to sell",
  noPermissionToBuy: "No permission to buy",
  noPermissionToChangePrice: "No permission to change price"
};
var NFT = class extends import_o1js5.SmartContract {
  constructor() {
    super(...arguments);
    this.name = (0, import_o1js5.State)();
    this.metadata = (0, import_o1js5.State)();
    this.owner = (0, import_o1js5.State)();
    this.storage = (0, import_o1js5.State)();
    this.packedData = (0, import_o1js5.State)();
    this.metadataVerificationKeyHash = (0, import_o1js5.State)();
    this.events = {
      update: UpdateEvent,
      transfer: TransferEvent,
      sell: SellEvent,
      buy: BuyEvent,
      upgradeVerificationKey: UpgradeVerificationKeyEvent,
      pause: PauseEvent,
      resume: PauseEvent,
      ownershipChange: OwnershipChangeEvent
    };
  }
  /**
   * Ensures that the transaction is authorized by the current owner.
   *
   * @returns A signed account update for the owner.
   */
  async ensureOwnerSignature() {
    const sender = this.sender.getUnconstrained();
    const owner = this.owner.getAndRequireEquals();
    owner.assertEquals(sender);
    const ownerUpdate = import_o1js5.AccountUpdate.createSigned(owner);
    ownerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    return ownerUpdate;
  }
  /**
   * Updates the NFT's state with provided proofs and permissions.
   *
   * @param input - The current state of the NFT (`NFTState`).
   * @param output - The desired new state of the NFT (`NFTState`).
   * @param creator - The public key of the creator (`PublicKey`).
   * @returns The hash of the metadata verification key (`Field`).
   */
  async update(input, output, creator) {
    const name = this.name.getAndRequireEquals();
    const metadata = this.metadata.getAndRequireEquals();
    const owner = this.owner.getAndRequireEquals();
    const storage = this.storage.getAndRequireEquals();
    const metadataVerificationKeyHash = this.metadataVerificationKeyHash.getAndRequireEquals();
    metadataVerificationKeyHash.assertNotEquals((0, import_o1js5.Field)(0), NFTErrors.noMetadataVerificationKey);
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.isPaused.assertFalse(NFTErrors.nftIsPaused);
    NFTState.assertEqual(input, new NFTState({
      immutableState: new NFTImmutableState({
        creator,
        canChangeOwnerByProof: data.canChangeOwnerByProof,
        canChangeOwnerBySignature: data.canChangeOwnerBySignature,
        canChangeMetadata: data.canChangeMetadata,
        canChangePrice: data.canChangePrice,
        canChangeStorage: data.canChangeStorage,
        canChangeName: data.canChangeName,
        canChangeMetadataVerificationKeyHash: data.canChangeMetadataVerificationKeyHash,
        canPause: data.canPause,
        address: this.address,
        tokenId: this.tokenId,
        id: data.id
      }),
      name,
      metadata,
      storage,
      owner,
      price: data.price,
      version: data.version,
      isPaused: data.isPaused,
      metadataVerificationKeyHash
    }));
    name.equals(output.name).not().and(data.canChangeName.not()).assertFalse(NFTErrors.cannotChangeName);
    this.name.set(output.name);
    metadata.equals(output.metadata).not().and(data.canChangeMetadata.not()).assertFalse(NFTErrors.cannotChangeMetadata);
    this.metadata.set(output.metadata);
    metadataVerificationKeyHash.equals(output.metadataVerificationKeyHash).not().and(data.canChangeMetadataVerificationKeyHash.not()).assertFalse(NFTErrors.cannotChangeMetadataVerificationKeyHash);
    this.metadataVerificationKeyHash.set(output.metadataVerificationKeyHash);
    owner.equals(output.owner).not().and(data.canChangeOwnerByProof.not()).assertFalse(NFTErrors.cannotChangeOwner);
    this.owner.set(output.owner);
    Storage.equals(storage, output.storage).not().and(data.canChangeStorage.not()).assertFalse(NFTErrors.cannotChangeStorage);
    this.storage.set(output.storage);
    data.price.equals(output.price).not().and(data.canChangePrice.not()).assertFalse(NFTErrors.cannotChangePrice);
    data.isPaused.equals(output.isPaused).not().and(data.canPause.not()).assertFalse(NFTErrors.cannotChangePauseState);
    output.version.assertGreaterThan(data.version);
    data.price = output.price;
    data.version = output.version;
    this.packedData.set(data.pack());
    const event = new UpdateEvent({
      name: output.name,
      metadata: output.metadata,
      storage: output.storage,
      owner: output.owner,
      price: output.price,
      version: output.version,
      isPaused: output.isPaused,
      metadataVerificationKeyHash: output.metadataVerificationKeyHash
    });
    this.emitEvent("update", event);
    return metadataVerificationKeyHash;
  }
  /**
   * Lists the NFT for sale at a specified price.
   *
   * @param price - The price at which to sell the NFT (`UInt64`).
   * @param seller - The public key of the seller (`PublicKey`).
   * @returns An event emitted after the NFT is listed for sale (`SellEvent`).
   */
  async sell(price, seller) {
    this.owner.getAndRequireEquals().assertEquals(seller);
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.isPaused.assertFalse(NFTErrors.nftIsPaused);
    data.canChangeOwnerBySignature.assertTrue(NFTErrors.noPermissionToSell);
    data.canChangePrice.assertTrue(NFTErrors.noPermissionToChangePrice);
    const version = data.version.add(1);
    data.version = version;
    data.price = price;
    this.packedData.set(data.pack());
    const event = new SellEvent({
      seller,
      price,
      version,
      address: this.address
    });
    this.emitEvent("sell", event);
    return event;
  }
  /**
   * Purchases the NFT, transferring ownership and handling payment.
   *
   * @param price - The price at which to buy the NFT (`UInt64`).
   * @param buyer - The public key of the buyer (`PublicKey`).
   * @returns An event emitted after the NFT is purchased (`BuyEvent`).
   */
  async buy(price, buyer) {
    const owner = this.owner.getAndRequireEquals();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.price.equals(import_o1js5.UInt64.zero).assertFalse();
    data.price.assertEquals(price);
    data.isPaused.assertFalse(NFTErrors.nftIsPaused);
    data.canChangeOwnerBySignature.assertTrue(NFTErrors.noPermissionToBuy);
    const version = data.version.add(1);
    data.version = version;
    data.price = import_o1js5.UInt64.zero;
    this.packedData.set(data.pack());
    this.owner.set(buyer);
    const event = new BuyEvent({
      seller: owner,
      buyer,
      price,
      version,
      address: this.address
    });
    this.emitEvent("buy", event);
    this.emitEvent("ownershipChange", new OwnershipChangeEvent({
      oldOwner: owner,
      newOwner: buyer
    }));
    return event;
  }
  /**
   * Transfers ownership of the NFT from one user to another.
   *
   * @param from - The public key of the current owner (`PublicKey`).
   * @param to - The public key of the new owner (`PublicKey`).
   * @returns The public key of the old owner (`PublicKey`).
   */
  async transfer(from, to) {
    const oldOwner = this.owner.getAndRequireEquals();
    oldOwner.assertEquals(from);
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canChangeOwnerBySignature.assertTrue(NFTErrors.cannotChangeOwner);
    data.isPaused.assertFalse(NFTErrors.nftIsPaused);
    const version = data.version.add(1);
    data.version = version;
    data.price = import_o1js5.UInt64.zero;
    this.owner.set(to);
    this.packedData.set(data.pack());
    this.emitEvent("ownershipChange", new OwnershipChangeEvent({ oldOwner, newOwner: to }));
    return oldOwner;
  }
  /**
   * Upgrades the verification key used by the NFT contract.
   *
   * @param vk - The new verification key (`VerificationKey`).
   * @param sender - The public key of the sender (`PublicKey`).
   * @returns An event emitted after the verification key is upgraded (`UpgradeVerificationKeyEvent`).
   */
  async upgradeVerificationKey(vk, sender) {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    const owner = this.owner.getAndRequireEquals();
    owner.equals(sender).not().and(data.requireOwnerSignatureToUpgrade.not()).assertFalse(NFTErrors.onlyOwnerCanUpgradeVerificationKey);
    this.account.verificationKey.set(vk);
    const version = data.version.add(1);
    data.version = version;
    const event = new UpgradeVerificationKeyEvent({
      verificationKeyHash: vk.hash,
      address: this.address,
      version
    });
    this.account.verificationKey.set(vk);
    this.packedData.set(data.pack());
    this.emitEvent("upgradeVerificationKey", event);
    return event;
  }
  /**
   * Pauses the NFT, disabling certain actions.
   *
   * @returns A promise that resolves when the NFT is paused.
   */
  async pause() {
    await this.ensureOwnerSignature();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NFTErrors.noPermissionToPause);
    data.isPaused.assertFalse(NFTErrors.nftAlreadyPaused);
    data.isPaused = (0, import_o1js5.Bool)(true);
    this.packedData.set(data.pack());
    this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js5.Bool)(true) }));
  }
  /**
   * Resumes the NFT, re-enabling actions.
   *
   * @returns A promise that resolves when the NFT is resumed.
   */
  async resume() {
    await this.ensureOwnerSignature();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NFTErrors.noPermissionToPause);
    data.isPaused.assertTrue(NFTErrors.nftIsNotPaused);
    data.isPaused = (0, import_o1js5.Bool)(false);
    this.packedData.set(data.pack());
    this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js5.Bool)(false) }));
  }
};
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(import_o1js5.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "name", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(import_o1js5.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "metadata", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(import_o1js5.PublicKey),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "owner", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(Storage),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "storage", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(import_o1js5.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "packedData", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js5.state)(import_o1js5.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], NFT.prototype, "metadataVerificationKeyHash", void 0);
(0, import_tslib.__decorate)([
  import_o1js5.method.returns(import_o1js5.Field),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    NFTState,
    NFTState,
    import_o1js5.PublicKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "update", null);
(0, import_tslib.__decorate)([
  import_o1js5.method.returns(SellEvent),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [import_o1js5.UInt64, import_o1js5.PublicKey]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "sell", null);
(0, import_tslib.__decorate)([
  import_o1js5.method.returns(BuyEvent),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [import_o1js5.UInt64, import_o1js5.PublicKey]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "buy", null);
(0, import_tslib.__decorate)([
  import_o1js5.method.returns(import_o1js5.PublicKey),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [import_o1js5.PublicKey, import_o1js5.PublicKey]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "transfer", null);
(0, import_tslib.__decorate)([
  import_o1js5.method.returns(UpgradeVerificationKeyEvent),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    import_o1js5.VerificationKey,
    import_o1js5.PublicKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "upgradeVerificationKey", null);
(0, import_tslib.__decorate)([
  import_o1js5.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", []),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "pause", null);
(0, import_tslib.__decorate)([
  import_o1js5.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", []),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFT.prototype, "resume", null);

// dist/node/contracts/upgradable.js
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

// dist/node/vk.js
var nftVerificationKeys = {
  mainnet: {
    o1js: "2.1.0",
    zkcloudworker: "0.20.3",
    vk: {
      NFT: {
        hash: "16136917862034619356669490634307607599327948353746940831953490515774158774961",
        data: "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",
        type: "nft"
      },
      Collection: {
        hash: "1398896779321238606707498137981354911966895654735619074354639318331454109063",
        data: "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",
        type: "collection"
      },
      WhitelistedCollection: {
        hash: "1398896779321238606707498137981354911966895654735619074354639318331454109063",
        data: "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",
        type: "collection"
      },
      AdminContract: {
        hash: "9471723160041567446492454340691062943159092950487216067973859256139412048983",
        data: "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",
        type: "admin"
      },
      WhitelistedAdminContract: {
        hash: "18385936172462128240264811838481242232981961045039838791012806605982201687761",
        data: "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",
        type: "admin"
      },
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
      NFT: {
        hash: "27541837111392040398333039710054288447866068784194645065320329910895437448874",
        data: "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",
        type: "nft"
      },
      Collection: {
        hash: "21039138855797080218524455964665593273495413184664226050882204541100868894216",
        data: "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",
        type: "collection"
      },
      WhitelistedCollection: {
        hash: "21039138855797080218524455964665593273495413184664226050882204541100868894216",
        data: "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",
        type: "collection"
      },
      AdminContract: {
        hash: "27968039045891100927648704666754528771275213274406212289757761318443521844298",
        data: "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",
        type: "admin"
      },
      WhitelistedAdminContract: {
        hash: "25444011637560593078151137522810461611230086965497314235385103757327101747895",
        data: "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",
        type: "admin"
      },
      VerificationKeyUpgradeAuthority: {
        hash: "24248690097061452380259183021520676826201948296409686318469332616191300421924",
        data: "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",
        type: "upgrade"
      }
    }
  }
};

// dist/node/contracts/collection.js
var CollectionErrors = {
  wrongMasterNFTaddress: "Master NFT address should be the same as the collection address",
  transferNotAllowed: "Transfers of tokens are not allowed, change the owner instead",
  collectionPaused: "Collection is currently paused",
  mintApprovalRequired: "Mint approval is required",
  mintApprovalNotRequired: "Mint approval is not required",
  cannotMintMasterNFT: "Only the creator can mint the Master NFT",
  cannotMint: "Admin contract did not provide permission to mint",
  noPermissionToPause: "Not allowed to pause collection",
  noPermissionToResume: "Not allowed to resume collection",
  collectionNotPaused: "Collection is not paused",
  transferApprovalRequired: "Transfer approval is required",
  transferApprovalNotRequired: "Transfer approval is not required",
  updateApprovalRequired: "Update approval is required",
  updateApprovalNotRequired: "Update approval is not required",
  noPermissionToChangeName: "Not allowed to change collection name",
  noPermissionToChangeBaseUri: "Not allowed to change collection base URI",
  noPermissionToChangeCreator: "Not allowed to change collection creator",
  noPermissionToChangeRoyalty: "Not allowed to change royalty fee",
  noPermissionToChangeTransferFee: "Not allowed to change transfer fee",
  noPermissionToSetAdmin: "Not allowed to set admin contract",
  cannotUpgradeVerificationKey: "Cannot upgrade verification key",
  creatorSignatureRequiredToUpgradeCollection: "Creator signature is required to upgrade collection",
  creatorSignatureRequiredToUpgradeNFT: "Creator signature is required to upgrade NFT",
  upgradeContractAddressNotSet: "Upgrade contract address is not set",
  adminContractAddressNotSet: "Admin contract address is not set"
};
var CollectionStateStruct = class extends (0, import_o1js7.Struct)({
  collectionName: import_o1js7.Field,
  creator: import_o1js7.PublicKey,
  admin: import_o1js7.PublicKey,
  baseURL: import_o1js7.Field,
  packedData: CollectionDataPacked
}) {
};
function CollectionContract(params) {
  const { adminContract, upgradeContract, networkId } = params;
  class Collection2 extends import_o1js7.TokenContract {
    constructor() {
      super(...arguments);
      this.collectionName = (0, import_o1js7.State)();
      this.creator = (0, import_o1js7.State)();
      this.admin = (0, import_o1js7.State)();
      this.baseURL = (0, import_o1js7.State)();
      this.packedData = (0, import_o1js7.State)();
      this.events = {
        mint: MintEvent,
        update: import_o1js7.PublicKey,
        transfer: TransferEvent,
        sell: SellEvent,
        buy: BuyEvent,
        approveBuy: BuyEvent,
        approveSell: SellEvent,
        approveTransfer: TransferEvent,
        approveMint: MintEvent,
        approveUpdate: import_o1js7.PublicKey,
        upgradeNFTVerificationKey: UpgradeVerificationKeyEvent,
        upgradeVerificationKey: import_o1js7.Field,
        limitMinting: LimitMintingEvent,
        pause: PauseEvent,
        resume: PauseEvent,
        pauseNFT: PauseNFTEvent,
        resumeNFT: PauseNFTEvent,
        ownershipChange: OwnershipChangeEvent
      };
    }
    /**
     * Deploys the NFT Collection Contract with the initial settings.
     *
     * @param props - Deployment properties including collection name, creator, admin, baseURL, symbol, and URL.
     */
    async deploy(props) {
      await super.deploy(props);
      this.collectionName.set(props.collectionName);
      this.creator.set(props.creator);
      this.admin.set(props.admin);
      this.baseURL.set(props.baseURL);
      this.packedData.set(CollectionData.new({
        isPaused: true
      }).pack());
      this.account.zkappUri.set(props.url);
      this.account.tokenSymbol.set(props.symbol);
      this.account.permissions.set({
        ...import_o1js7.Permissions.default(),
        // Allow the upgrade authority to set the verification key
        // even when there is no protocol upgrade
        setVerificationKey: import_o1js7.Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: import_o1js7.Permissions.impossible(),
        access: import_o1js7.Permissions.proof(),
        send: import_o1js7.Permissions.proof(),
        setZkappUri: import_o1js7.Permissions.none(),
        setTokenSymbol: import_o1js7.Permissions.none()
      });
    }
    /**
     * Initializes the collection with a master NFT and initial data.
     *
     * @param masterNFT - The master NFT parameters.
     * @param collectionData - Initial collection data including flags and configurations.
     */
    async initialize(masterNFT, collectionData) {
      this.account.provedState.requireEquals((0, import_o1js7.Bool)(false));
      this.packedData.set(collectionData.pack());
      masterNFT.address.equals(this.address).assertTrue(CollectionErrors.wrongMasterNFTaddress);
      await this._mint(masterNFT, collectionData);
    }
    /**
     * Overrides the approveBase method to prevent transfers of tokens.
     *
     * @param forest - The account update forest.
     */
    async approveBase(forest) {
      throw Error(CollectionErrors.transferNotAllowed);
    }
    get getAdminContractConstructor() {
      return adminContract;
    }
    get getUpgradeContractConstructor() {
      return upgradeContract;
    }
    /**
     * Retrieves the Admin Contract instance.
     *
     * @returns The Admin Contract instance implementing NFTAdminBase.
     */
    getAdminContract() {
      const admin = this.admin.getAndRequireEquals();
      admin.equals(import_o1js7.PublicKey.empty()).assertFalse(CollectionErrors.adminContractAddressNotSet);
      return new this.getAdminContractConstructor(admin);
    }
    /**
     * Retrieves the Upgrade Authority Contract instance.
     *
     * @returns The Upgrade Authority Contract instance implementing UpgradeAuthorityBase.
     */
    async getUpgradeContract() {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      collectionData.upgradeAuthority.equals(import_o1js7.PublicKey.empty()).assertFalse(CollectionErrors.upgradeContractAddressNotSet);
      return new this.getUpgradeContractConstructor(collectionData.upgradeAuthority);
    }
    /**
     * Ensures that the transaction is authorized by the contract owner.
     *
     * @returns The AccountUpdate of the creator.
     */
    async ensureOwnerSignature() {
      const sender = this.sender.getUnconstrained();
      const creator = this.creator.getAndRequireEquals();
      creator.assertEquals(sender);
      const creatorUpdate = import_o1js7.AccountUpdate.createSigned(creator);
      creatorUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      return creatorUpdate;
    }
    /**
     * Ensures that the collection is not paused.
     *
     * @returns The current collection data.
     */
    async ensureNotPaused() {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      collectionData.isPaused.assertFalse(CollectionErrors.collectionPaused);
      return collectionData;
    }
    /**
     * Mints a new NFT directly by the creator.
     *
     * This method allows the creator of the collection to mint an NFT without requiring approval
     * from the admin contract. It ensures that the collection is not paused and that the caller
     * is the creator of the collection. A fee of 1 MINA is deducted from the creator's balance
     * to cover the cost of creating a new account.
     *
     * We do not constrain here the address of the NFT to allow for the Master NFT to be minted.
     * The Master NFT is the NFT with the same address as the Collection contract and it holds
     * the metadata for the collection. It can be minted only by the creator of the collection.
     *
     * @param params - The mint parameters containing details of the NFT to be minted.
     */
    async mintByCreator(params2) {
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint.assertTrue(CollectionErrors.mintApprovalNotRequired);
      const creatorUpdate = await this.ensureOwnerSignature();
      creatorUpdate.balance.subInPlace(1e9);
      await this._mint(params2, collectionData);
    }
    /**
     * Mints a new NFT with approval.
     *
     * @param mintRequest - The minting request containing parameters and proofs.
     */
    async mint(mintRequest) {
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint.assertTrue(CollectionErrors.mintApprovalNotRequired);
      const adminContract2 = this.getAdminContract();
      const mintParams = (await adminContract2.canMint(mintRequest)).assertSome(CollectionErrors.cannotMint);
      mintParams.address.equals(this.address).assertFalse(CollectionErrors.cannotMintMasterNFT);
      const event = await this._mint(mintParams, collectionData);
      this.emitEvent("approveMint", event);
    }
    /**
     * Internal method to mint an NFT.
     *
     * @param params - The mint parameters.
     * @param collectionData - The current collection data.
     * @returns The MintEvent emitted.
     */
    async _mint(params2, collectionData) {
      const { name, address, owner, data, metadata, storage, metadataVerificationKeyHash, expiry } = params2;
      this.network.globalSlotSinceGenesis.requireBetween(import_o1js7.UInt32.zero, expiry);
      data.version.assertEquals(import_o1js7.UInt32.zero);
      const packedData = data.pack();
      const tokenId = this.deriveTokenId();
      const update = import_o1js7.AccountUpdate.createSigned(address, tokenId);
      update.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      update.account.isNew.getAndRequireEquals().assertTrue();
      this.internal.mint({ address: update, amount: 1e9 });
      const nftVerificationKey = new import_o1js7.VerificationKey({
        data: nftVerificationKeys[networkId].vk.NFT.data,
        hash: (0, import_o1js7.Field)(nftVerificationKeys[networkId].vk.NFT.hash)
      });
      nftVerificationKey.hash.assertEquals((0, import_o1js7.Field)(nftVerificationKeys[networkId].vk.NFT.hash));
      const compiledVerificationKeyHash = import_o1js7.Provable.witness(import_o1js7.Field, () => {
        const vkHash = NFT._verificationKey?.hash;
        if (!vkHash)
          throw Error("NFT verification key is incorrect");
        return vkHash;
      });
      nftVerificationKey.hash.assertEquals(compiledVerificationKeyHash);
      update.body.update.verificationKey = {
        isSome: (0, import_o1js7.Bool)(true),
        value: nftVerificationKey
      };
      update.body.update.permissions = {
        isSome: (0, import_o1js7.Bool)(true),
        value: {
          ...import_o1js7.Permissions.default(),
          send: import_o1js7.Permissions.proof(),
          // Allow the upgrade authority to set the verification key
          // even when there is no protocol upgrade
          setVerificationKey: import_o1js7.Permissions.VerificationKey.proofDuringCurrentVersion(),
          setPermissions: import_o1js7.Permissions.impossible(),
          access: import_o1js7.Permissions.proof(),
          setZkappUri: import_o1js7.Permissions.none(),
          setTokenSymbol: import_o1js7.Permissions.none()
        }
      };
      const initialState = new NFTStateStruct({
        name,
        metadata,
        owner,
        storage,
        packedData,
        metadataVerificationKeyHash
      });
      update.body.update.appState = NFTStateStruct.toFields(initialState).map((field) => ({
        isSome: (0, import_o1js7.Bool)(true),
        value: field
      }));
      const event = new MintEvent({
        initialState,
        address
      });
      this.emitEvent("mint", event);
      return event;
    }
    /**
     * Updates the NFT without admin approval.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    async update(proof, vk) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireUpdateApproval.assertFalse(CollectionErrors.updateApprovalRequired);
      await this._update(proof, vk);
    }
    /**
     * Updates the NFT with admin approval.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    async updateWithApproval(proof, vk) {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      collectionData.isPaused.assertFalse(CollectionErrors.collectionPaused);
      collectionData.requireUpdateApproval.assertTrue(CollectionErrors.updateApprovalNotRequired);
      const event = await this._update(proof, vk);
      const adminContract2 = this.getAdminContract();
      const canUpdate = await adminContract2.canUpdate(proof.publicInput, proof.publicOutput);
      canUpdate.assertTrue();
      this.emitEvent("approveUpdate", proof.publicInput.immutableState.address);
    }
    /**
     * Internal method to update an NFT.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    async _update(proof, vk) {
      const creator = this.creator.getAndRequireEquals();
      const tokenId = this.deriveTokenId();
      tokenId.assertEquals(proof.publicInput.immutableState.tokenId);
      const nft = new NFT(proof.publicInput.immutableState.address, tokenId);
      const metadataVerificationKeyHash = await nft.update(proof.publicInput, proof.publicOutput, creator);
      this.emitEvent("update", proof.publicInput.immutableState.address);
      const sender = this.sender.getUnconstrained();
      const senderUpdate = import_o1js7.AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      metadataVerificationKeyHash.assertEquals(vk.hash);
      proof.verify(vk);
    }
    /**
     * Lists an NFT for sale without approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     */
    async sell(address, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireSaleApproval.assertFalse();
      await this._sell(address, price);
    }
    /**
     * Lists an NFT for sale with admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     */
    async sellWithApproval(address, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireSaleApproval.assertTrue();
      const event = await this._sell(address, price);
      const adminContract2 = this.getAdminContract();
      const canSell = await adminContract2.canSell(address, event.seller, price);
      canSell.assertTrue();
      this.emitEvent("approveSell", event);
    }
    /**
     * Internal method to list an NFT for sale.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     * @returns The SellEvent emitted.
     */
    async _sell(address, price) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const seller = this.sender.getUnconstrained();
      const sellerUpdate = import_o1js7.AccountUpdate.createSigned(seller);
      sellerUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      const event = await nft.sell(price, seller);
      this.emitEvent("sell", event);
      return event;
    }
    /**
     * Purchases an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     */
    async buy(address, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireBuyApproval.assertFalse();
      await this._buy(address, price, collectionData.royaltyFee);
    }
    /**
     * Purchases an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     */
    async buyWithApproval(address, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireBuyApproval.assertTrue();
      const event = await this._buy(address, price, collectionData.royaltyFee);
      const adminContract2 = this.getAdminContract();
      const canBuy = await adminContract2.canBuy(address, event.seller, event.buyer, price);
      canBuy.assertTrue();
      this.emitEvent("approveBuy", event);
    }
    /**
     * Internal method to purchase an NFT.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     * @param royaltyFee - The royalty fee percentage.
     * @returns The BuyEvent emitted.
     */
    async _buy(address, price, royaltyFee) {
      royaltyFee.assertLessThanOrEqual(import_o1js7.UInt32.from(1e5));
      const creator = this.creator.getAndRequireEquals();
      const buyer = this.sender.getUnconstrained();
      const buyerUpdate = import_o1js7.AccountUpdate.createSigned(buyer);
      buyerUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const event = await nft.buy(price, buyer);
      const isSellerCreator = event.seller.equals(creator);
      const commission = import_o1js7.Provable.if(isSellerCreator, import_o1js7.UInt64.zero, price.div(1e5).mul(import_o1js7.UInt64.from(royaltyFee)));
      const payment = price.sub(commission);
      buyerUpdate.send({ to: event.seller, amount: payment });
      const creatorUpdate = import_o1js7.AccountUpdate.createIf(isSellerCreator.not(), creator);
      creatorUpdate.balance.addInPlace(commission);
      buyerUpdate.balance.subInPlace(commission);
      this.emitEvent("buy", event);
      return event;
    }
    /**
     * Transfers ownership of an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async transfer(address, to) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertFalse(CollectionErrors.transferApprovalRequired);
      await this._transfer(address, to, collectionData.transferFee);
    }
    /**
     * Transfers ownership of an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async transferWithApproval(address, to) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertTrue(CollectionErrors.transferApprovalNotRequired);
      const event = await this._transfer(address, to, collectionData.transferFee);
      const adminContract2 = this.getAdminContract();
      const canTransfer = await adminContract2.canTransfer(address, event.from, event.to);
      canTransfer.assertTrue();
      this.emitEvent("approveTransfer", event);
    }
    /**
     * Internal method to transfer an NFT.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     * @param transferFee - The transfer fee amount.
     * @returns The TransferEvent emitted.
     */
    async _transfer(address, to, transferFee) {
      const sender = this.sender.getUnconstrained();
      const senderUpdate = import_o1js7.AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
      senderUpdate.send({
        to: this.creator.getAndRequireEquals(),
        amount: transferFee
      });
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const oldOwner = await nft.transfer(sender, to);
      oldOwner.assertEquals(sender);
      const transferEvent = new TransferEvent({
        from: oldOwner,
        to,
        address
      });
      this.emitEvent("transfer", transferEvent);
      return transferEvent;
    }
    /**
     * Upgrades the verification key of a specific NFT.
     *
     * @param address - The address of the NFT.
     * @param vk - The new verification key.
     */
    async upgradeNFTVerificationKey(address, vk) {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      const sender = this.sender.getAndRequireSignature();
      const creator = this.creator.getAndRequireEquals();
      creator.equals(sender).or(collectionData.requireCreatorSignatureToUpgradeNFT.not()).assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeNFT);
      const upgradeContract2 = await this.getUpgradeContract();
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const previousVerificationKeyHash = import_o1js7.Provable.witness(import_o1js7.Field, () => {
        const account = import_o1js7.Mina.getAccount(address, tokenId);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address,
        tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      upgradeAuthorityAnswer.isVerified.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
      const event = await nft.upgradeVerificationKey(vk, sender);
      this.emitEvent("upgradeNFTVerificationKey", event);
    }
    /**
     * Upgrades the verification key of the collection contract.
     *
     * @param vk - The new verification key.
     */
    async upgradeVerificationKey(vk) {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      const sender = this.sender.getAndRequireSignature();
      const creator = this.creator.getAndRequireEquals();
      creator.equals(sender).or(collectionData.requireCreatorSignatureToUpgradeCollection.not()).assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeCollection);
      const upgradeContract2 = await this.getUpgradeContract();
      const previousVerificationKeyHash = import_o1js7.Provable.witness(import_o1js7.Field, () => {
        const account = import_o1js7.Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      upgradeAuthorityAnswer.isVerified.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
      collectionData.upgradeAuthority = upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(collectionData.upgradeAuthority);
      this.account.verificationKey.set(vk);
      this.packedData.set(collectionData.pack());
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }
    /**
     * Limits further minting of NFTs in the collection.
     */
    async limitMinting() {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint = (0, import_o1js7.Bool)(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent("limitMinting", new LimitMintingEvent({ mintingLimited: (0, import_o1js7.Bool)(true) }));
    }
    /**
     * Pauses the collection, disabling certain actions.
     */
    async pause() {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToPause);
      collectionData.isPaused = (0, import_o1js7.Bool)(true);
      this.packedData.set(collectionData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js7.Bool)(true) }));
    }
    /**
     * Resumes the collection, re-enabling actions.
     */
    async resume() {
      await this.ensureOwnerSignature();
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToResume);
      collectionData.isPaused.assertTrue(CollectionErrors.collectionNotPaused);
      collectionData.isPaused = (0, import_o1js7.Bool)(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js7.Bool)(false) }));
    }
    /**
     * Pauses a specific NFT, disabling its actions.
     *
     * @param address - The address of the NFT to pause.
     */
    async pauseNFT(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      await nft.pause();
      this.emitEvent("pauseNFT", new PauseNFTEvent({ isPaused: (0, import_o1js7.Bool)(true), address }));
    }
    /**
     * Resumes a specific NFT, re-enabling its actions.
     *
     * @param address - The address of the NFT to resume.
     */
    async resumeNFT(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      await nft.resume();
      this.emitEvent("resumeNFT", new PauseNFTEvent({ isPaused: (0, import_o1js7.Bool)(false), address }));
    }
    /**
     * Updates the collection's configuration (e.g., name, base URL, fees).
     *
     * @param configuration - The new configuration settings.
     */
    async updateConfiguration(configuration) {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      const name = this.collectionName.getAndRequireEquals();
      const baseURL = this.baseURL.getAndRequireEquals();
      const admin = this.admin.getAndRequireEquals();
      name.equals(configuration.name).not().and(collectionData.canChangeName.not()).assertFalse(CollectionErrors.noPermissionToChangeName);
      this.collectionName.set(configuration.name);
      baseURL.equals(configuration.baseURL).not().and(collectionData.canChangeBaseUri.not()).assertFalse(CollectionErrors.noPermissionToChangeBaseUri);
      this.baseURL.set(configuration.baseURL);
      admin.equals(configuration.admin).not().and(collectionData.canSetAdmin.not()).assertFalse(CollectionErrors.noPermissionToSetAdmin);
      this.admin.set(configuration.admin);
      collectionData.royaltyFee.equals(configuration.royaltyFee).not().and(collectionData.canChangeRoyalty.not()).assertFalse(CollectionErrors.noPermissionToChangeRoyalty);
      collectionData.royaltyFee = configuration.royaltyFee;
      collectionData.transferFee.equals(configuration.transferFee).not().and(collectionData.canChangeTransferFee.not()).assertFalse(CollectionErrors.noPermissionToChangeTransferFee);
      collectionData.transferFee = configuration.transferFee;
      this.packedData.set(collectionData.pack());
    }
    /**
     * Transfers ownership of the collection to a new owner.
     *
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the old owner.
     */
    async transferOwnership(newOwner) {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeCreator.assertTrue(CollectionErrors.noPermissionToChangeCreator);
      const oldOwner = this.creator.getAndRequireEquals();
      this.creator.set(newOwner);
      this.emitEvent("ownershipChange", new OwnershipChangeEvent({
        oldOwner,
        newOwner
      }));
      return oldOwner;
    }
  }
  (0, import_tslib2.__decorate)([
    (0, import_o1js7.state)(import_o1js7.Field),
    (0, import_tslib2.__metadata)("design:type", Object)
  ], Collection2.prototype, "collectionName", void 0);
  (0, import_tslib2.__decorate)([
    (0, import_o1js7.state)(import_o1js7.PublicKey),
    (0, import_tslib2.__metadata)("design:type", Object)
  ], Collection2.prototype, "creator", void 0);
  (0, import_tslib2.__decorate)([
    (0, import_o1js7.state)(import_o1js7.PublicKey),
    (0, import_tslib2.__metadata)("design:type", Object)
  ], Collection2.prototype, "admin", void 0);
  (0, import_tslib2.__decorate)([
    (0, import_o1js7.state)(import_o1js7.Field),
    (0, import_tslib2.__metadata)("design:type", Object)
  ], Collection2.prototype, "baseURL", void 0);
  (0, import_tslib2.__decorate)([
    (0, import_o1js7.state)(CollectionDataPacked),
    (0, import_tslib2.__metadata)("design:type", Object)
  ], Collection2.prototype, "packedData", void 0);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [MintParams, CollectionData]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "initialize", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [MintParams]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "mintByCreator", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [MintRequest]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "mint", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      NFTUpdateProof,
      import_o1js7.VerificationKey
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "update", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      NFTUpdateProof,
      import_o1js7.VerificationKey
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "updateWithApproval", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey, import_o1js7.UInt64]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "sell", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      import_o1js7.PublicKey,
      import_o1js7.UInt64
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "sellWithApproval", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey, import_o1js7.UInt64]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "buy", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      import_o1js7.PublicKey,
      import_o1js7.UInt64
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "buyWithApproval", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey, import_o1js7.PublicKey]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transfer", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      import_o1js7.PublicKey,
      import_o1js7.PublicKey
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferWithApproval", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [
      import_o1js7.PublicKey,
      import_o1js7.VerificationKey
    ]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "upgradeNFTVerificationKey", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.VerificationKey]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "upgradeVerificationKey", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", []),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "limitMinting", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", []),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "pause", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", []),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "resume", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "pauseNFT", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "resumeNFT", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method,
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [CollectionConfigurationUpdate]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "updateConfiguration", null);
  (0, import_tslib2.__decorate)([
    import_o1js7.method.returns(import_o1js7.PublicKey),
    (0, import_tslib2.__metadata)("design:type", Function),
    (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey]),
    (0, import_tslib2.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferOwnership", null);
  return Collection2;
}

// dist/node/contracts/encoding.js
var import_o1js8 = require("o1js");
function fieldToString(field) {
  return import_o1js8.Encoding.stringFromFields([field]);
}
function fieldFromString(storage) {
  const fields = import_o1js8.Encoding.stringToFields(storage);
  if (fields.length !== 1)
    throw new Error("String is too long");
  return fields[0];
}

// dist/node/admin/standard.js
function NFTAdminContract(params = {}) {
  const { upgradeContract } = params;
  class NFTAdmin extends import_o1js9.SmartContract {
    constructor() {
      super(...arguments);
      this.admin = (0, import_o1js9.State)();
      this.upgradeAuthority = (0, import_o1js9.State)();
      this.isPaused = (0, import_o1js9.State)();
      this.canPause = (0, import_o1js9.State)();
      this.events = {
        /** Emitted when the verification key is upgraded. */
        upgradeVerificationKey: import_o1js9.Field,
        /** Emitted when the contract is paused. */
        pause: PauseEvent,
        /** Emitted when the contract is resumed. */
        resume: PauseEvent,
        /** Emitted when ownership of the contract changes. */
        ownershipChange: OwnershipChangeEvent
      };
    }
    /**
     * Deploys the contract with initial settings.
     * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
     */
    async deploy(props) {
      await super.deploy(props);
      this.admin.set(props.admin);
      this.upgradeAuthority.set(props.upgradeAuthority);
      this.isPaused.set(props.isPaused);
      this.canPause.set(props.canPause);
      this.account.zkappUri.set(props.uri);
      this.account.permissions.set({
        ...import_o1js9.Permissions.default(),
        // Allow the upgrade authority to set the verification key even without a protocol upgrade,
        // enabling upgrades in case of o1js breaking changes.
        setVerificationKey: import_o1js9.Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: import_o1js9.Permissions.impossible()
      });
    }
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns A signed `AccountUpdate` from the admin.
     */
    async ensureOwnerSignature() {
      const sender = this.sender.getUnconstrained();
      const admin = this.admin.getAndRequireEquals();
      admin.assertEquals(sender);
      const adminUpdate = import_o1js9.AccountUpdate.createSigned(admin);
      adminUpdate.body.useFullCommitment = (0, import_o1js9.Bool)(true);
      return adminUpdate;
    }
    /**
     * Retrieves the associated upgrade authority contract.
     * @returns An instance of `UpgradeAuthorityBase`.
     * @throws If the upgrade contract is not provided.
     */
    async getUpgradeContract() {
      if (!upgradeContract) {
        throw Error("Upgrade contract not provided");
      }
      return new upgradeContract(this.upgradeAuthority.getAndRequireEquals());
    }
    /**
     * Upgrades the contract's verification key after validating with the upgrade authority.
     * @param vk - The new verification key to upgrade to.
     */
    async upgradeVerificationKey(vk) {
      await this.ensureOwnerSignature();
      const upgradeContract2 = await this.getUpgradeContract();
      const previousVerificationKeyHash = import_o1js9.Provable.witness(import_o1js9.Field, () => {
        const account = import_o1js9.Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      upgradeAuthorityAnswer.isVerified.assertTrue("Cannot upgrade verification key");
      this.account.verificationKey.set(vk);
      this.upgradeAuthority.set(upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(this.upgradeAuthority.getAndRequireEquals()));
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }
    /**
     * Determines whether minting is allowed for the given request.
     * Returns mint parameters if allowed, or none if not allowed.
     * @param mintRequest - The minting request details.
     * @returns A `MintParamsOption` indicating if minting is permitted.
     */
    async canMint(mintRequest) {
      return MintParamsOption.none();
    }
    /**
     * Checks whether the NFT state can be updated.
     * Typically returns true if the contract is not paused.
     * @param input - The current state of the NFT.
     * @param output - The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is allowed.
     */
    async canUpdate(input, output) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }
    /**
     * Determines whether a transfer between the specified addresses is permitted.
     * @param address - The NFT contract address.
     * @param from - The sender's public key.
     * @param to - The recipient's public key.
     * @returns A `Bool` indicating whether the transfer is allowed.
     */
    async canTransfer(address, from, to) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }
    /**
     * Determines whether the NFT can be listed for sale at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param price - The listing price.
     * @returns A `Bool` indicating whether the sale is permitted.
     */
    async canSell(address, seller, price) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }
    /**
     * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param buyer - The buyer's public key.
     * @param price - The purchase price.
     * @returns A `Bool` indicating whether the purchase is allowed.
     */
    async canBuy(address, seller, buyer, price) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }
    /**
     * Pauses the contract, disabling certain administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    async pause() {
      await this.ensureOwnerSignature();
      this.canPause.getAndRequireEquals().assertTrue();
      this.isPaused.set((0, import_o1js9.Bool)(true));
      this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js9.Bool)(true) }));
    }
    /**
     * Resumes the contract, re-enabling administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    async resume() {
      await this.ensureOwnerSignature();
      this.canPause.getAndRequireEquals().assertTrue();
      this.isPaused.set((0, import_o1js9.Bool)(false));
      this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js9.Bool)(false) }));
    }
    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the previous owner.
     */
    async transferOwnership(newOwner) {
      await this.ensureOwnerSignature();
      const oldOwner = this.admin.getAndRequireEquals();
      this.admin.set(newOwner);
      this.emitEvent("ownershipChange", new OwnershipChangeEvent({
        oldOwner,
        newOwner
      }));
      return oldOwner;
    }
  }
  (0, import_tslib3.__decorate)([
    (0, import_o1js9.state)(import_o1js9.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdmin.prototype, "admin", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js9.state)(import_o1js9.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdmin.prototype, "upgradeAuthority", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js9.state)(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdmin.prototype, "isPaused", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js9.state)(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdmin.prototype, "canPause", void 0);
  (0, import_tslib3.__decorate)([
    import_o1js9.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js9.VerificationKey]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "upgradeVerificationKey", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(MintParamsOption),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [MintRequest]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "canMint", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [NFTState, NFTState]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "canUpdate", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js9.PublicKey, import_o1js9.PublicKey, import_o1js9.PublicKey]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "canTransfer", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js9.PublicKey, import_o1js9.PublicKey, import_o1js9.UInt64]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "canSell", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(import_o1js9.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [
      import_o1js9.PublicKey,
      import_o1js9.PublicKey,
      import_o1js9.PublicKey,
      import_o1js9.UInt64
    ]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "canBuy", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", []),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "pause", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", []),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "resume", null);
  (0, import_tslib3.__decorate)([
    import_o1js9.method.returns(import_o1js9.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js9.PublicKey]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdmin.prototype, "transferOwnership", null);
  return NFTAdmin;
}

// dist/node/admin/whitelisted.js
var import_tslib4 = require("tslib");
var import_o1js10 = require("o1js");
var import_storage = require("@minatokens/storage");
var PauseData = class _PauseData extends (0, import_o1js10.Struct)({
  /** Indicates whether the contract can be paused. */
  canPause: import_o1js10.Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: import_o1js10.Bool
}) {
  /**
   * Packs the pause data into a `Field`.
   * @returns A `Field` representing the packed pause data.
   */
  pack() {
    return import_o1js10.Field.fromBits([this.canPause, this.isPaused]);
  }
  /**
   * Unpacks a `Field` into `PauseData`.
   * @param field The `Field` to unpack.
   * @returns An instance of `PauseData`.
   */
  static unpack(field) {
    const [canPause, isPaused] = field.toBits(2);
    return new _PauseData({ canPause, isPaused });
  }
};
var NFTWhitelistedAdminContractErrors = {
  contractIsPaused: "Contract is paused",
  notWhitelisted: "Address not whitelisted",
  senderNotWhitelisted: "Sender address not whitelisted",
  cannotMint: "Cannot mint",
  verificationKeyHashNotFound: "Verification key hash not found",
  cannotUpgradeVerificationKey: "Cannot upgrade verification key"
};
function NFTWhitelistedAdminContract(params) {
  const { upgradeContract } = params;
  class NFTWhitelistedAdmin extends import_o1js10.SmartContract {
    constructor() {
      super(...arguments);
      this.admin = (0, import_o1js10.State)();
      this.upgradeAuthority = (0, import_o1js10.State)();
      this.whitelist = (0, import_o1js10.State)();
      this.pauseData = (0, import_o1js10.State)();
      this.events = {
        /** Emitted when the contract's verification key is upgraded. */
        upgradeVerificationKey: import_o1js10.Field,
        /** Emitted when the contract is paused. */
        pause: PauseEvent,
        /** Emitted when the contract is resumed. */
        resume: PauseEvent,
        /** Emitted when ownership of the contract changes. */
        ownershipChange: OwnershipChangeEvent,
        /** Emitted when the whitelist is updated. */
        updateWhitelist: import_storage.Whitelist
      };
    }
    /**
     * Deploys the `NFTWhitelistedAdmin` contract with the provided initial settings.
     * @param props Deployment properties.
     */
    async deploy(props) {
      await super.deploy(props);
      this.admin.set(props.admin);
      this.upgradeAuthority.set(props.upgradeAuthority);
      this.whitelist.set(props.whitelist);
      this.pauseData.set(new PauseData({
        canPause: props.canPause,
        isPaused: props.isPaused
      }).pack());
      this.account.zkappUri.set(props.uri);
      this.account.permissions.set({
        ...import_o1js10.Permissions.default(),
        // We want to allow the upgrade authority to set the verification key
        // even in the case when there is no protocol upgrade
        // to allow the upgrade in case of o1js breaking changes
        setVerificationKey: import_o1js10.Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: import_o1js10.Permissions.impossible()
      });
    }
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns An `AccountUpdate` representing the admin's signed transaction.
     */
    async ensureOwnerSignature() {
      const sender = this.sender.getUnconstrained();
      const admin = this.admin.getAndRequireEquals();
      admin.assertEquals(sender);
      const adminUpdate = import_o1js10.AccountUpdate.createSigned(admin);
      adminUpdate.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      return adminUpdate;
    }
    /** Gets the upgrade contract constructor. */
    get getUpgradeContractConstructor() {
      return upgradeContract;
    }
    /**
     * Retrieves the `UpgradeAuthorityBase` contract instance.
     * @returns An instance of the upgrade authority contract.
     */
    async getUpgradeContract() {
      return new this.getUpgradeContractConstructor(this.upgradeAuthority.getAndRequireEquals());
    }
    /**
     * Upgrades the contract's verification key using the Upgrade Authority Contract.
     * @param vk The new verification key.
     */
    async upgradeVerificationKey(vk) {
      await this.ensureOwnerSignature();
      const upgradeContract2 = await this.getUpgradeContract();
      const previousVerificationKeyHash = import_o1js10.Provable.witness(import_o1js10.Field, () => {
        const account = import_o1js10.Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error(NFTWhitelistedAdminContractErrors.verificationKeyHashNotFound);
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      upgradeAuthorityAnswer.isVerified.assertTrue(NFTWhitelistedAdminContractErrors.cannotUpgradeVerificationKey);
      this.account.verificationKey.set(vk);
      this.upgradeAuthority.set(upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(this.upgradeAuthority.getAndRequireEquals()));
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }
    /**
     * Determines if the minting request can proceed by checking if the owner and sender are whitelisted.
     * @param mintRequest The minting request parameters.
     * @returns A `MintParamsOption` indicating if minting is allowed.
     */
    async canMint(mintRequest) {
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.isPaused.assertFalse("Contract is paused");
      const whitelist = this.whitelist.getAndRequireEquals();
      const ownerAmount = await whitelist.getWhitelistedAmount(mintRequest.owner);
      ownerAmount.isSome.assertTrue(NFTWhitelistedAdminContractErrors.notWhitelisted);
      const sender = this.sender.getUnconstrained();
      const senderUpdate = import_o1js10.AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      const senderAmount = await whitelist.getWhitelistedAmount(sender);
      senderAmount.isSome.assertTrue(NFTWhitelistedAdminContractErrors.senderNotWhitelisted);
      const mintParams = await import_o1js10.Provable.witnessAsync(MintParamsOption, async () => {
        return MintParamsOption.none();
      });
      return mintParams;
    }
    /**
     * Checks whether the NFT's state can be updated, ensuring the new owner is whitelisted.
     * @param input The current state of the NFT.
     * @param output The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is permitted.
     */
    async canUpdate(input, output) {
      const whitelist = this.whitelist.getAndRequireEquals();
      return (await whitelist.getWhitelistedAmount(output.owner)).isSome.and((await whitelist.getWhitelistedAmount(input.owner)).isSome);
    }
    /**
     * Verifies if the transfer between `from` and `to` addresses is allowed based on whitelist status.
     * @param address The address of the NFT.
     * @param from The sender's public key.
     * @param to The receiver's public key.
     * @returns A `Bool` indicating whether the transfer is permitted.
     */
    async canTransfer(address, from, to) {
      const whitelist = this.whitelist.getAndRequireEquals();
      return (await whitelist.getWhitelistedAmount(to)).isSome.and((await whitelist.getWhitelistedAmount(from)).isSome);
    }
    /**
     * Determines if the seller is permitted to list the NFT for sale at the specified price.
     * @param address The address of the NFT.
     * @param seller The seller's public key.
     * @param price The price at which the NFT is being sold.
     * @returns A `Bool` indicating whether the sale is permissible.
     */
    async canSell(address, seller, price) {
      const whitelist = this.whitelist.getAndRequireEquals();
      const allowedPrice = (await whitelist.getWhitelistedAmount(seller)).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      return price.lessThanOrEqual(allowedPrice);
    }
    /**
     * Determines if the buyer and seller are allowed to perform the transaction at the specified price.
     * @param address The address of the NFT.
     * @param seller The seller's public key.
     * @param buyer The buyer's public key.
     * @param price The price at which the NFT is being bought.
     * @returns A `Bool` indicating whether the purchase is permitted.
     */
    async canBuy(address, seller, buyer, price) {
      const whitelist = this.whitelist.getAndRequireEquals();
      const allowedBuyerPrice = (await whitelist.getWhitelistedAmount(buyer)).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      const allowedSellerPrice = (await whitelist.getWhitelistedAmount(seller)).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      return price.lessThanOrEqual(allowedBuyerPrice).and(price.lessThanOrEqual(allowedSellerPrice));
    }
    /**
     * Updates the whitelist's Merkle root and the associated off-chain storage reference.
     * @param whitelistRoot The new whitelist root.
     * @param storage The storage reference for the whitelist data.
     */
    async updateWhitelist(whitelist) {
      await this.ensureOwnerSignature();
      this.whitelist.set(whitelist);
      this.emitEvent("updateWhitelist", whitelist);
    }
    /**
     * Pauses the contract, preventing certain administrative actions from being performed.
     */
    async pause() {
      await this.ensureOwnerSignature();
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.canPause.assertTrue();
      pauseData.isPaused = (0, import_o1js10.Bool)(true);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js10.Bool)(true) }));
    }
    /**
     * Resumes the contract, allowing administrative actions to be performed again.
     */
    async resume() {
      await this.ensureOwnerSignature();
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.canPause.assertTrue();
      pauseData.isPaused = (0, import_o1js10.Bool)(false);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js10.Bool)(false) }));
    }
    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner The public key of the new admin.
     * @returns The public key of the old owner.
     */
    async transferOwnership(newOwner) {
      await this.ensureOwnerSignature();
      const oldOwner = this.admin.getAndRequireEquals();
      this.admin.set(newOwner);
      this.emitEvent("ownershipChange", new OwnershipChangeEvent({
        oldOwner,
        newOwner
      }));
      return oldOwner;
    }
  }
  (0, import_tslib4.__decorate)([
    (0, import_o1js10.state)(import_o1js10.PublicKey),
    (0, import_tslib4.__metadata)("design:type", Object)
  ], NFTWhitelistedAdmin.prototype, "admin", void 0);
  (0, import_tslib4.__decorate)([
    (0, import_o1js10.state)(import_o1js10.PublicKey),
    (0, import_tslib4.__metadata)("design:type", Object)
  ], NFTWhitelistedAdmin.prototype, "upgradeAuthority", void 0);
  (0, import_tslib4.__decorate)([
    (0, import_o1js10.state)(import_storage.Whitelist),
    (0, import_tslib4.__metadata)("design:type", Object)
  ], NFTWhitelistedAdmin.prototype, "whitelist", void 0);
  (0, import_tslib4.__decorate)([
    (0, import_o1js10.state)(import_o1js10.Field),
    (0, import_tslib4.__metadata)("design:type", Object)
  ], NFTWhitelistedAdmin.prototype, "pauseData", void 0);
  (0, import_tslib4.__decorate)([
    import_o1js10.method,
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js10.VerificationKey]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "upgradeVerificationKey", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(MintParamsOption),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [MintRequest]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "canMint", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(import_o1js10.Bool),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [NFTState, NFTState]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "canUpdate", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(import_o1js10.Bool),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js10.PublicKey, import_o1js10.PublicKey, import_o1js10.PublicKey]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "canTransfer", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(import_o1js10.Bool),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js10.PublicKey, import_o1js10.PublicKey, import_o1js10.UInt64]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "canSell", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(import_o1js10.Bool),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.PublicKey,
      import_o1js10.PublicKey,
      import_o1js10.UInt64
    ]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "canBuy", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method,
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [import_storage.Whitelist]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "updateWhitelist", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method,
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", []),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "pause", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method,
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", []),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "resume", null);
  (0, import_tslib4.__decorate)([
    import_o1js10.method.returns(import_o1js10.PublicKey),
    (0, import_tslib4.__metadata)("design:type", Function),
    (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib4.__metadata)("design:returntype", Promise)
  ], NFTWhitelistedAdmin.prototype, "transferOwnership", null);
  return NFTWhitelistedAdmin;
}

// dist/node/metadata/metadata.js
var import_o1js13 = require("o1js");

// dist/node/metadata/text.js
var import_o1js11 = require("o1js");
var TEXT_TREE_HEIGHT = 20;
var Text = class {
  /**
   * Constructs a new `Text` instance by creating a Merkle tree from the given text string.
   * Each character in the text is converted to its ASCII code and stored as a leaf in the tree.
   *
   * @param text - The text string to be represented.
   * @param height - The height of the Merkle tree. Defaults to `TEXT_TREE_HEIGHT`.
   * @throws Will throw an error if the text length exceeds the number of leaves in the Merkle tree.
   */
  constructor(text, height = TEXT_TREE_HEIGHT) {
    this.text = text;
    this.size = text.length;
    const tree = new import_o1js11.MerkleTree(height);
    if (this.size > tree.leafCount)
      throw new Error(`Text is too long`);
    for (let i = 0; i < this.size; i++) {
      tree.setLeaf(BigInt(i), import_o1js11.Field.from(this.text.charCodeAt(i)));
    }
    this.root = tree.getRoot();
    this.height = height;
  }
  /**
   * Returns the original text string.
   *
   * @returns The text string.
   */
  toString() {
    return this.text;
  }
};

// dist/node/metadata/tree.js
var import_o1js12 = require("o1js");
var MetadataTree = class _MetadataTree {
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
    const tree = new import_o1js12.MerkleTree(height);
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
        value: value.toJSON()
      }))
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
    const tree = new _MetadataTree(height, values.map(({ key, value }) => ({
      key: BigInt(key),
      value: import_o1js12.Field.fromJSON(value)
    })));
    if (tree.root.toJSON() !== root)
      throw new Error("Invalid tree json");
    return tree;
  }
};

// dist/node/metadata/metadata.js
var METADATA_HEIGHT = 20;
var IndexedMerkleMap = import_o1js13.Experimental.IndexedMerkleMap;
var MetadataMap = class extends IndexedMerkleMap(METADATA_HEIGHT) {
};
var MetadataValue = class _MetadataValue extends (0, import_o1js13.Struct)({
  value: import_o1js13.Field,
  type: import_o1js13.Field,
  length: import_o1js13.Field,
  height: import_o1js13.Field
}) {
  /**
   * Creates a new MetadataValue instance.
   * @param params - The parameters including value and type.
   * @returns A new MetadataValue.
   */
  static new(params) {
    const { value, type } = params;
    let valueField;
    let length = (0, import_o1js13.Field)(0);
    let height = (0, import_o1js13.Field)(0);
    switch (type) {
      case "string":
        if (!(value instanceof import_o1js13.Field))
          throw new Error(`Invalid value type`);
        valueField = value;
        break;
      case "text":
      case "image":
      case "url":
        if (!(value instanceof Text))
          throw new Error(`Invalid value type`);
        valueField = value.root;
        length = (0, import_o1js13.Field)(value.size);
        height = (0, import_o1js13.Field)(value.height);
        break;
      case "field":
        if (!(value instanceof import_o1js13.Field))
          throw new Error(`Invalid value type`);
        valueField = value;
        break;
      case "map":
        if (!(value instanceof Metadata))
          throw new Error(`Invalid value type`);
        valueField = value.map.root;
        length = (0, import_o1js13.Field)(value.map.length);
        height = (0, import_o1js13.Field)(value.map.height);
        break;
      case "tree":
        if (!(value instanceof MetadataTree))
          throw new Error(`Invalid value type`);
        valueField = value.root;
        length = (0, import_o1js13.Field)(value.values.length);
        height = (0, import_o1js13.Field)(value.height);
        break;
      default:
        throw new Error(`Unknown value type`);
    }
    return new _MetadataValue({
      value: valueField,
      type: (0, import_o1js13.Field)(MetadataFieldTypeValues[type].code),
      length,
      height
    });
  }
  /**
   * Computes the Poseidon hash of the metadata value.
   * @returns The hash as a Field.
   */
  hash() {
    return import_o1js13.Poseidon.hash(_MetadataValue.toFields(this));
  }
};
var MetadataPlugin = class {
};
var ColorPlugin = class extends MetadataPlugin {
  constructor() {
    super(...arguments);
    this.name = "color";
  }
  /**
   * Converts a color name or value into its numeric representation.
   * @param value - The color value (name, string, or number).
   * @returns The numeric representation of the color.
   */
  getColor(value) {
    if (typeof value === "string" && ["blue", "red", "green", "yellow", "purple", "orange", "pink"].includes(value)) {
      const colors = {
        blue: 255,
        red: 16711680,
        green: 65280,
        yellow: 16776960,
        purple: 8388736,
        orange: 16753920,
        pink: 16761035
      };
      return colors[value];
    } else if (typeof value === "number") {
      return value;
    } else if (typeof value === "string") {
      try {
        return parseInt(value.slice(1), 16);
      } catch (e) {
        throw new Error("Invalid color value");
      }
    }
    throw new Error("Invalid color value");
  }
  /**
   * Retrieves the trait representation of the color value.
   * @param params - The parameters including key, type, and value.
   * @returns An object containing the key, value, and canonical representation.
   */
  getTrait(params) {
    const { key, value } = params;
    const color = this.getColor(value);
    return {
      key: fieldFromString(key),
      value: new MetadataValue({
        value: (0, import_o1js13.Field)(color),
        type: (0, import_o1js13.Field)(10),
        length: (0, import_o1js13.Field)(0),
        height: (0, import_o1js13.Field)(0)
      }),
      canonicalRepresentation: color
    };
  }
  /**
   * Converts the color value to a JSON string.
   * @param value - The color value.
   * @returns The JSON string representation.
   */
  toJSON(value) {
    return this.getColor(value).toString(16);
  }
  /**
   * Parses the color value from a JSON string or object.
   * @param value - The JSON value.
   * @returns The numeric representation of the color.
   */
  fromJSON(value) {
    if (typeof value !== "string")
      throw new Error("Invalid color value");
    return this.getColor(parseInt(value, 16));
  }
};
var Metadata = class _Metadata {
  /**
   * Creates a new Metadata instance.
   * @param params - The parameters for the metadata, including name, image, description, banner, and plugins.
   */
  constructor(params) {
    this.traits = {};
    const { name, description, image, banner, plugins } = params;
    this.plugins = plugins ?? [];
    this.map = new MetadataMap();
    this.addTrait({
      key: "name",
      type: "string",
      value: name
    });
    this.addTrait({
      key: "image",
      type: "image",
      value: image
    });
    if (description) {
      this.addTrait({
        key: "description",
        type: "text",
        value: description
      });
    }
    if (banner) {
      this.addTrait({
        key: "banner",
        type: "image",
        value: banner
      });
    }
    this.name = name;
    this.image = image;
    this.banner = banner;
    this.description = description;
  }
  /**
   * Adds a trait to the metadata.
   * @param params - The parameters including key, type, value, and isPrivate.
   * @returns An object containing the key and the metadata value.
   */
  addTrait(params) {
    const { key, type, value, isPrivate = false } = params;
    let keyField = fieldFromString(key);
    let metadataValue;
    let canonicalRepresentation = value;
    if (type in MetadataFieldTypeValues) {
      let valueObject;
      switch (type) {
        case "string":
          if (typeof value !== "string")
            throw new Error(`Invalid trait value type`);
          valueObject = fieldFromString(value);
          break;
        case "text":
        case "image":
        case "url":
          if (typeof value !== "string")
            throw new Error(`Invalid trait value type`);
          valueObject = new Text(value);
          break;
        case "field":
          if (!(value instanceof import_o1js13.Field))
            throw new Error(`Invalid trait value type`);
          valueObject = value;
          break;
        case "map":
          if (!(value instanceof _Metadata))
            throw new Error(`Invalid trait value type`);
          valueObject = value;
          break;
        case "tree":
          if (!(value instanceof MetadataTree))
            throw new Error(`Invalid trait value type`);
          valueObject = value;
          break;
        default:
          throw new Error(`Unknown trait value type - internal error`);
      }
      metadataValue = MetadataValue.new({ value: valueObject, type });
    } else {
      const index = this.plugins.findIndex((plugin) => plugin.name === type);
      if (index !== -1) {
        const plugin = this.plugins[index];
        const pluginTrait = plugin.getTrait({ key, type, value, isPrivate });
        metadataValue = pluginTrait.value;
        keyField = pluginTrait.key;
        canonicalRepresentation = pluginTrait.canonicalRepresentation;
      } else
        throw new Error(`Unknown trait type`);
    }
    this.map.set(keyField, metadataValue.hash());
    this.traits[key] = { type, value: canonicalRepresentation, isPrivate };
    return { key: keyField, value: metadataValue };
  }
  /**
   * Converts the metadata to a JSON representation.
   * @param includePrivateTraits - Whether to include private traits.
   * @returns The JSON representation of the metadata.
   */
  toJSON(includePrivateTraits = false) {
    return {
      name: this.name,
      description: this.description,
      image: this.image,
      banner: this.banner,
      metadataRoot: this.map.root.toJSON(),
      traits: Object.entries(this.traits).filter(([_, { isPrivate }]) => includePrivateTraits || !isPrivate).map(([key, { type, value, isPrivate }]) => {
        let jsonValue;
        switch (type) {
          case "string":
          case "text":
          case "image":
          case "url":
            if (typeof value !== "string")
              throw new Error(`Invalid trait value type`);
            jsonValue = value;
            break;
          case "field":
            if (!(value instanceof import_o1js13.Field))
              throw new Error(`Invalid trait value type`);
            jsonValue = value.toJSON();
            break;
          case "map":
            if (!(value instanceof _Metadata))
              throw new Error(`Invalid trait value type`);
            jsonValue = value.toJSON(includePrivateTraits);
            break;
          case "tree":
            if (!(value instanceof MetadataTree))
              throw new Error(`Invalid trait value type`);
            jsonValue = value.toJSON();
            break;
          default:
            const plugin = this.plugins.find((plugin2) => plugin2.name === type);
            if (!plugin)
              throw new Error(`Unknown trait type`);
            jsonValue = plugin.toJSON(value);
        }
        return {
          key,
          type,
          ...isPrivate ? { isPrivate } : {},
          value: jsonValue
        };
      })
    };
  }
  /**
   * Constructs a Metadata instance from JSON data.
   * @param params - The parameters including json data, checkRoot flag, and plugins.
   * @returns A new Metadata instance.
   */
  static fromJSON(params) {
    const { json, checkRoot = false, plugins } = params;
    const { name, description, image, banner, metadataRoot, traits } = json;
    if (!name)
      throw new Error(`Metadata name is required`);
    if (typeof name !== "string")
      throw new Error(`Invalid metadata name`);
    if (!image || typeof image !== "string")
      throw new Error(`Invalid metadata image`);
    if (description && typeof description !== "string")
      throw new Error(`Invalid metadata description`);
    if (banner && typeof banner !== "string")
      throw new Error(`Invalid metadata banner`);
    if (!metadataRoot || typeof metadataRoot !== "string")
      throw new Error(`Invalid metadata root`);
    if (!traits || !Array.isArray(traits))
      throw new Error(`Metadata traits are required`);
    for (const { key, type, value, isPrivate } of traits) {
      if (!key || typeof key !== "string")
        throw new Error(`Invalid trait key`);
      if (!type || typeof type !== "string")
        throw new Error(`Invalid trait type`);
      if (!value || typeof value !== "string" && typeof value !== "object")
        throw new Error(`Invalid trait value`);
      if (isPrivate && typeof isPrivate !== "boolean")
        throw new Error(`Invalid trait isPrivate`);
    }
    const metadata = new _Metadata({
      name,
      description,
      image,
      banner,
      plugins
    });
    for (const { key, type, value, isPrivate } of traits) {
      let valueField;
      switch (type) {
        case "string":
        case "text":
        case "image":
        case "url":
          if (typeof value !== "string")
            throw new Error(`Invalid trait value type`);
          valueField = value;
          break;
        case "field":
          if (typeof value !== "string")
            throw new Error(`Invalid trait value type`);
          valueField = import_o1js13.Field.fromJSON(value);
          break;
        case "map":
          if (typeof value !== "object")
            throw new Error(`Invalid trait value type`);
          valueField = _Metadata.fromJSON({
            json: value,
            checkRoot
          });
          break;
        case "tree":
          if (typeof value !== "object")
            throw new Error(`Invalid trait value type`);
          valueField = MetadataTree.fromJSON(value);
          break;
        default:
          const plugin = metadata.plugins.find((plugin2) => plugin2.name === type);
          if (!plugin)
            throw new Error(`Unknown trait type`);
          valueField = plugin.fromJSON(value);
      }
      metadata.addTrait({
        key,
        type,
        value: valueField,
        isPrivate: isPrivate ?? false
      });
    }
    if (checkRoot === true && metadata.map.root.toJSON() !== metadataRoot) {
      throw new Error(`Invalid metadata root:${JSON.stringify({
        params,
        root: metadata.map.root.toJSON(),
        checkRoot,
        metadata: metadata.toJSON(true)
      }, null, 2)}`);
    }
    return metadata;
  }
};
var MetadataFieldTypeValues = {
  string: { code: 1n, inputType: "string", storedType: import_o1js13.Field },
  // Field
  text: { code: 2n, inputType: "string", storedType: Text },
  // Text
  image: { code: 3n, inputType: "string", storedType: Text },
  // Text
  url: { code: 4n, inputType: "string", storedType: Text },
  // Text
  field: { code: 5n, inputType: import_o1js13.Field, storedType: import_o1js13.Field },
  // Field
  map: { code: 6n, inputType: Metadata, storedType: Metadata },
  // Metadata
  tree: { code: 7n, inputType: MetadataTree, storedType: MetadataTree }
  // MetadataTree
};

// dist/node/upgrade/validators.js
var import_o1js14 = require("o1js");
var import_mina_signer = __toESM(require("mina-signer"), 1);
var { IndexedMerkleMap: IndexedMerkleMap2 } = import_o1js14.Experimental;
var VALIDATORS_LIST_HEIGHT = 10;
var UPGRADE_AUTHORITY_DATABASE_HEIGHT = 20;
var ValidatorsList = class extends IndexedMerkleMap2(VALIDATORS_LIST_HEIGHT) {
};
var UpgradeAuthorityDatabase = class extends IndexedMerkleMap2(UPGRADE_AUTHORITY_DATABASE_HEIGHT) {
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
var ValidatorsState = class _ValidatorsState extends (0, import_o1js14.Struct)({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: import_o1js14.Field,
  /** Merkle root of the ValidatorsList */
  root: import_o1js14.Field,
  /** Number of validators */
  count: import_o1js14.UInt32
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
    return import_o1js14.Poseidon.hashPacked(_ValidatorsState, this);
  }
  /**
   * Returns an empty `ValidatorsState`.
   * @returns An empty `ValidatorsState` instance.
   */
  static empty() {
    return new _ValidatorsState({
      chainId: (0, import_o1js14.Field)(0),
      root: (0, import_o1js14.Field)(0),
      count: import_o1js14.UInt32.zero
    });
  }
};
var UpgradeDatabaseStatePacked = class extends (0, import_o1js14.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js14.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: import_o1js14.Field,
  /** Packed data containing version, validFrom, and flags */
  data: import_o1js14.Field
}) {
};
var UpgradeDatabaseState = class _UpgradeDatabaseState extends (0, import_o1js14.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js14.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: import_o1js14.UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: import_o1js14.UInt32
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
      version: import_o1js14.UInt32.zero,
      validFrom: import_o1js14.UInt32.MAXINT()
    });
  }
  /**
   * Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.
   * @returns A packed representation of the upgrade database state.
   */
  pack() {
    const nextUpgradeAuthorityX = this.nextUpgradeAuthority.value.x;
    const data = import_o1js14.Field.fromBits([
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
    const version = import_o1js14.UInt32.Unsafe.fromField(import_o1js14.Field.fromBits(versionBits));
    const validFrom = import_o1js14.UInt32.Unsafe.fromField(import_o1js14.Field.fromBits(validFromBits));
    const nextUpgradeAuthority = PublicKeyOption.from(import_o1js14.PublicKey.from({ x: packed.nextUpgradeAuthorityX, isOdd: isOddBit }));
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
var ValidatorsDecision = class _ValidatorsDecision extends (0, import_o1js14.Struct)({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: import_o1js14.Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: import_o1js14.Field,
  /** UpgradeAuthority contract address */
  contractAddress: import_o1js14.PublicKey,
  /** Chain ID */
  chainId: import_o1js14.Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: import_o1js14.UInt32
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
var ValidatorsDecisionState = class _ValidatorsDecisionState extends (0, import_o1js14.Struct)({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: import_o1js14.Field,
  /** Number of votes in favor of the decision */
  yesVotes: import_o1js14.UInt32,
  /** Number of votes against the decision */
  noVotes: import_o1js14.UInt32,
  /** Number of votes of abstention */
  abstainVotes: import_o1js14.UInt32
}) {
  static startVoting(decision) {
    return new _ValidatorsDecisionState({
      decision,
      alreadyVoted: new ValidatorsList().root,
      yesVotes: import_o1js14.UInt32.zero,
      noVotes: import_o1js14.UInt32.zero,
      abstainVotes: import_o1js14.UInt32.zero
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
    const yesVotes = this.yesVotes.add(import_o1js14.Provable.if(yes, import_o1js14.UInt32.from(1), import_o1js14.UInt32.from(0)));
    const noVotes = this.noVotes.add(import_o1js14.Provable.if(no, import_o1js14.UInt32.from(1), import_o1js14.UInt32.from(0)));
    const abstainVotes = this.abstainVotes.add(import_o1js14.Provable.if(abstain, import_o1js14.UInt32.from(1), import_o1js14.UInt32.from(0)));
    previousVotesCount.add(import_o1js14.UInt32.from(1)).assertEquals(yesVotes.add(noVotes).add(abstainVotes));
    const hash = import_o1js14.Poseidon.hashPacked(import_o1js14.PublicKey, publicKey);
    validatorsList.root.assertEquals(this.decision.validators.root);
    validatorsList.get(hash).assertBool("Wrong ValidatorsList format").assertTrue("Validator doesn't have authority to sign");
    signature.verify(publicKey, ValidatorsDecision.toFields(this.decision)).assertTrue("Wrong validator signature");
    this.decision.validators.root.assertEquals(validatorsList.root);
    votedList.root.assertEquals(this.alreadyVoted);
    votedList.insert(key, (0, import_o1js14.Field)(1));
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
var ValidatorsVoting = (0, import_o1js14.ZkProgram)({
  name: "ValidatorsVoting",
  publicInput: ValidatorsDecisionState,
  publicOutput: ValidatorsDecisionState,
  methods: {
    /**
     * Starts the voting process for a decision.
     */
    startVoting: {
      privateInputs: [ValidatorsDecision],
      async method(state6, decision) {
        const calculatedState = ValidatorsDecisionState.startVoting(decision);
        ValidatorsDecisionState.assertEquals(state6, calculatedState);
        return { publicOutput: calculatedState };
      }
    },
    /**
     * Records a vote
     */
    vote: {
      privateInputs: [
        ValidatorsDecision,
        import_o1js14.Nullifier,
        ValidatorsList,
        ValidatorsList,
        import_o1js14.Bool,
        import_o1js14.Bool,
        import_o1js14.Bool,
        import_o1js14.Signature
      ],
      async method(state6, decision, nullifier, validatorsList, votedList, yes, no, abstain, signature) {
        const calculatedState = state6.vote(nullifier, validatorsList, votedList, yes, no, abstain, signature);
        return { publicOutput: calculatedState };
      }
    },
    /**
     * Merges two `ValidatorsDecisionState` proofs.
     */
    merge: {
      privateInputs: [import_o1js14.SelfProof, import_o1js14.SelfProof],
      async method(state6, proof1, proof2) {
        proof1.verify();
        proof2.verify();
        ValidatorsDecisionState.assertEquals(state6, proof1.publicInput);
        ValidatorsDecisionState.assertEquals(proof1.publicOutput, proof2.publicInput);
        return { publicOutput: proof2.publicOutput };
      }
    }
  }
});
var ValidatorsVotingNativeProof = class extends import_o1js14.ZkProgram.Proof(ValidatorsVoting) {
};
var ValidatorsVotingProof = class extends import_o1js14.DynamicProof {
};
ValidatorsVotingProof.publicInputType = ValidatorsDecisionState;
ValidatorsVotingProof.publicOutputType = ValidatorsDecisionState;
ValidatorsVotingProof.maxProofsVerified = 2;
ValidatorsVotingProof.featureFlags = import_o1js14.FeatureFlags.allMaybe;

// dist/node/upgrade/upgrade.js
var import_tslib5 = require("tslib");
var import_o1js15 = require("o1js");
var import_storage2 = require("@minatokens/storage");
var ValidatorsListEvent = class extends (0, import_o1js15.Struct)({
  validators: ValidatorsState,
  storage: Storage
}) {
};
var VerificationKeyUpgradeAuthorityErrors = {
  WrongNewVerificationKeyHash: "Wrong new verification key hash"
};
var VerificationKeyUpgradeAuthority = class extends import_o1js15.SmartContract {
  constructor() {
    super(...arguments);
    this.verificationKeyHash = (0, import_o1js15.State)();
    this.validators = (0, import_o1js15.State)();
    this.upgradeDatabasePacked = (0, import_o1js15.State)();
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
      ...import_o1js15.Permissions.default(),
      setVerificationKey: (
        // The contract needs to be redeployed in the case of an upgrade.
        import_o1js15.Permissions.VerificationKey.impossibleDuringCurrentVersion()
      ),
      setPermissions: import_o1js15.Permissions.impossible()
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
    this.account.provedState.requireEquals((0, import_o1js15.Bool)(false));
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
    this.network.globalSlotSinceGenesis.requireBetween(upgradeDatabase.validFrom, import_o1js15.UInt32.MAXINT());
    const map = await import_o1js15.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await (0, import_storage2.loadIndexedMerkleMap)({
        url: (0, import_storage2.createIpfsURL)({ hash: upgradeDatabase.storage.toString() }),
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
      isVerified: (0, import_o1js15.Bool)(true)
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
    const map = await import_o1js15.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await (0, import_storage2.loadIndexedMerkleMap)({
        url: (0, import_storage2.createIpfsURL)({ hash: upgradeDatabase.storage.toString() }),
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
    this.network.globalSlotSinceGenesis.requireBetween(import_o1js15.UInt32.zero, proof.publicInput.decision.expiry);
    vk.hash.assertEquals(this.verificationKeyHash.getAndRequireEquals());
    proof.verify(vk);
    proof.publicInput.decision.validators.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicInput.decision.decisionType.assertEquals(decisionType);
    proof.publicInput.decision.contractAddress.assertEquals(this.address);
    validatorsState.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicOutput.yesVotes.mul(2).assertGreaterThan(validatorsState.count);
  }
};
(0, import_tslib5.__decorate)([
  (0, import_o1js15.state)(import_o1js15.Field),
  (0, import_tslib5.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "verificationKeyHash", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js15.state)(import_o1js15.Field),
  (0, import_tslib5.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "validators", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js15.state)(UpgradeDatabaseStatePacked),
  (0, import_tslib5.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "upgradeDatabasePacked", void 0);
(0, import_tslib5.__decorate)([
  import_o1js15.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [
    ValidatorsState,
    Storage,
    import_o1js15.Field
  ]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "initialize", null);
(0, import_tslib5.__decorate)([
  import_o1js15.method.returns(UpgradeAuthorityAnswer),
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [VerificationKeyUpgradeData]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "verifyUpgradeData", null);
(0, import_tslib5.__decorate)([
  import_o1js15.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [
    ValidatorsVotingProof,
    import_o1js15.VerificationKey,
    ValidatorsState
  ]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateDatabase", null);
(0, import_tslib5.__decorate)([
  import_o1js15.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [
    ValidatorsState,
    Storage,
    ValidatorsVotingProof,
    import_o1js15.VerificationKey
  ]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateValidatorsList", null);

// dist/node/zkprogram/update.js
var import_o1js16 = require("o1js");
var NFTProgram = (0, import_o1js16.ZkProgram)({
  name: "NFTProgram",
  publicInput: NFTState,
  publicOutput: NFTState,
  methods: {
    /**
     * Inserts a metadata key-value pair into the NFT's metadata map.
     *
     * @method insertMetadata
     * @param {NFTState} initialState - The initial state of the NFT.
     * @param {MetadataMap} metadata - The metadata map to insert the new entry into.
     * @param {Field} key - The key of the metadata entry to insert.
     * @param {Field} value - The value of the metadata entry to insert.
     * @param {Signature} signature - The signature of the NFT owner.
     * @returns {Promise<{ publicOutput: NFTState; auxiliaryOutput: MetadataMap }>} A promise resolving to an object containing the updated NFT state and auxiliary output.
     *
     * @remarks
     * This method verifies that the provided signature is valid and corresponds to the NFT owner.
     * It then inserts the new key-value pair into the metadata map, ensuring that the key does not already exist.
     * The method returns an updated NFT state with the new metadata root and increments the version.
     */
    insertMetadata: {
      privateInputs: [MetadataMap, import_o1js16.Field, import_o1js16.Field, import_o1js16.Signature],
      auxiliaryOutput: MetadataMap,
      async method(initialState, metadata, key, value, signature) {
        signature.verify(initialState.owner, [
          ...NFTState.toFields(initialState),
          key,
          value
        ]).assertTrue("Wrong owner signature");
        metadata.insert(key, value);
        return {
          publicOutput: new NFTState({
            immutableState: initialState.immutableState,
            metadata: metadata.root,
            owner: initialState.owner,
            name: initialState.name,
            storage: initialState.storage,
            price: initialState.price,
            isPaused: initialState.isPaused,
            version: initialState.version.add(1),
            metadataVerificationKeyHash: initialState.metadataVerificationKeyHash
          }),
          auxiliaryOutput: metadata
        };
      }
    },
    /**
     * Merges two self-proofs to produce a new NFT state.
     *
     * @method merge
     * @param {NFTState} initialState - The initial state of the NFT.
     * @param {SelfProof<NFTState, NFTState>} proof1 - The first self-proof to merge.
     * @param {SelfProof<NFTState, NFTState>} proof2 - The second self-proof to merge.
     * @returns {Promise<{ publicOutput: NFTState }>} A promise resolving to an object containing the merged NFT state.
     *
     * @remarks
     * This method verifies both proofs and asserts the consistency of their inputs and outputs.
     * It ensures that the initial state matches the public input of the first proof,
     * and that the public output of the first proof matches the public input of the second proof.
     * The method returns the public output of the second proof as the new merged NFT state.
     */
    merge: {
      privateInputs: [import_o1js16.SelfProof, import_o1js16.SelfProof],
      async method(initialState, proof1, proof2) {
        proof1.verify();
        proof2.verify();
        NFTState.assertEqual(initialState, proof1.publicInput);
        NFTState.assertEqual(proof1.publicOutput, proof2.publicInput);
        return {
          publicOutput: proof2.publicOutput
        };
      }
    }
  }
});

// dist/node/contracts.js
var AdminContract = NFTAdminContract({
  upgradeContract: VerificationKeyUpgradeAuthority
});
var WhitelistedAdminContract = NFTWhitelistedAdminContract({
  upgradeContract: VerificationKeyUpgradeAuthority
});
var Collection = CollectionContract({
  adminContract: AdminContract,
  upgradeContract: VerificationKeyUpgradeAuthority,
  networkId: "testnet"
});
var WhitelistedCollection = CollectionContract({
  adminContract: WhitelistedAdminContract,
  upgradeContract: VerificationKeyUpgradeAuthority,
  networkId: "testnet"
});
var contractList = {
  NFT,
  Collection,
  WhitelistedCollection,
  AdminContract,
  WhitelistedAdminContract,
  VerificationKeyUpgradeAuthority
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdminContract,
  BuyEvent,
  ChainId,
  Collection,
  CollectionConfigurationUpdate,
  CollectionContract,
  CollectionData,
  CollectionDataPacked,
  CollectionErrors,
  CollectionStateStruct,
  ColorPlugin,
  LimitMintingEvent,
  Metadata,
  MetadataFieldTypeValues,
  MetadataMap,
  MetadataTree,
  MetadataValue,
  MintEvent,
  MintParams,
  MintParamsOption,
  MintRequest,
  NFT,
  NFTAdminContract,
  NFTData,
  NFTImmutableState,
  NFTProgram,
  NFTState,
  NFTStateStruct,
  NFTUpdateProof,
  NFTWhitelistedAdminContract,
  OwnershipChangeEvent,
  PauseData,
  PauseEvent,
  PauseNFTEvent,
  PublicKeyOption,
  SellEvent,
  Storage,
  TEXT_TREE_HEIGHT,
  Text,
  TransferEvent,
  UpdateEvent,
  UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase,
  UpgradeDatabaseState,
  UpgradeDatabaseStatePacked,
  UpgradeVerificationKeyEvent,
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
  WhitelistedAdminContract,
  WhitelistedCollection,
  contractList,
  fieldFromString,
  fieldToString,
  nftVerificationKeys
});
