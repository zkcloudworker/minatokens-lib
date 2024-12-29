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
var index_exports = {};
__export(index_exports, {
  Admin: () => Admin,
  AdvancedAdmin: () => AdvancedAdmin,
  AdvancedApproval: () => AdvancedApproval,
  AdvancedCollection: () => AdvancedCollection,
  AdvancedOwner: () => AdvancedOwner,
  Approval: () => Approval,
  ApproveEvent: () => ApproveEvent,
  Bid: () => Bid,
  BidEvent: () => BidEvent,
  BuyEvent: () => BuyEvent,
  Collection: () => Collection,
  CollectionData: () => CollectionData,
  CollectionErrors: () => CollectionErrors,
  CollectionFactory: () => CollectionFactory,
  ColorPlugin: () => ColorPlugin,
  DepositEvent: () => DepositEvent,
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
  NFTAddress: () => NFTAddress,
  NFTAdmin: () => NFTAdmin,
  NFTAdvancedAdmin: () => NFTAdvancedAdmin,
  NFTAdvancedAdminContract: () => NFTAdvancedAdminContract,
  NFTData: () => NFTData,
  NFTDataPacked: () => NFTDataPacked,
  NFTImmutableState: () => NFTImmutableState,
  NFTOraclePreconditions: () => NFTOraclePreconditions,
  NFTProgram: () => NFTProgram,
  NFTStandardApproval: () => NFTStandardApproval,
  NFTStandardOwner: () => NFTStandardOwner,
  NFTState: () => NFTState,
  NFTStateStruct: () => NFTStateStruct,
  NFTUpdateProof: () => NFTUpdateProof,
  NonFungibleTokenBidContract: () => NonFungibleTokenBidContract,
  NonFungibleTokenContractsFactory: () => NonFungibleTokenContractsFactory,
  OfferEvent: () => OfferEvent,
  OfferFactory: () => OfferFactory,
  Owner: () => Owner,
  OwnershipChangeEvent: () => OwnershipChangeEvent,
  PauseData: () => PauseData,
  PauseEvent: () => PauseEvent,
  PauseNFTEvent: () => PauseNFTEvent,
  SaleEvent: () => SaleEvent,
  SellEvent: () => SellEvent,
  StateElementPrecondition: () => StateElementPrecondition,
  TEXT_TREE_HEIGHT: () => TEXT_TREE_HEIGHT,
  Text: () => Text,
  TransferEvent: () => TransferEvent,
  TransferParams: () => TransferParams,
  UInt64Option: () => UInt64Option,
  UpdateEvent: () => UpdateEvent,
  UpgradeVerificationKeyData: () => UpgradeVerificationKeyData,
  UpgradeVerificationKeyEvent: () => UpgradeVerificationKeyEvent,
  WithdrawEvent: () => WithdrawEvent,
  fieldFromString: () => fieldFromString,
  fieldToString: () => fieldToString,
  nftVerificationKeys: () => nftVerificationKeys
});
module.exports = __toCommonJS(index_exports);

// dist/node/admin/standard.js
var import_tslib2 = require("tslib");
var import_o1js7 = require("o1js");

// dist/node/interfaces/types.js
var import_o1js = require("o1js");
var import_storage = require("@minatokens/storage");
var UInt64Option = class extends (0, import_o1js.Option)(import_o1js.UInt64) {
};
var NFTDataPacked = class extends (0, import_o1js.Struct)({
  ownerX: import_o1js.Field,
  approvedX: import_o1js.Field,
  data: import_o1js.Field
}) {
  static assertEqual(a, b) {
    a.ownerX.assertEquals(b.ownerX);
    a.approvedX.assertEquals(b.approvedX);
    a.data.assertEquals(b.data);
  }
};
var NFTStateStruct = class _NFTStateStruct extends (0, import_o1js.Struct)({
  name: import_o1js.Field,
  metadata: import_o1js.Field,
  storage: import_storage.Storage,
  packedData: NFTDataPacked,
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
    import_storage.Storage.assertEquals(a.storage, b.storage);
    NFTDataPacked.assertEqual(a.packedData, b.packedData);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
  }
};
var NFTImmutableState = class _NFTImmutableState extends (0, import_o1js.Struct)({
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT's ownership can be transferred (readonly). */
  canTransfer: import_o1js.Bool,
  // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: import_o1js.Bool,
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
  id: import_o1js.UInt64
  // readonly
}) {
  /**
   * Asserts that two NFTImmutableState instances are equal.
   * @param a The first NFTImmutableState instance.
   * @param b The second NFTImmutableState instance.
   */
  static assertEqual(a, b) {
    a.canChangeOwnerByProof.assertEquals(b.canChangeOwnerByProof);
    a.canTransfer.assertEquals(b.canTransfer);
    a.canChangeMetadata.assertEquals(b.canChangeMetadata);
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
    const { nftData, address, tokenId } = params;
    return new _NFTImmutableState({
      address,
      tokenId,
      id: nftData.id,
      canChangeOwnerByProof: nftData.canChangeOwnerByProof,
      canTransfer: nftData.canTransfer,
      canChangeMetadata: nftData.canChangeMetadata,
      canChangeStorage: nftData.canChangeStorage,
      canChangeName: nftData.canChangeName,
      canChangeMetadataVerificationKeyHash: nftData.canChangeMetadataVerificationKeyHash,
      canPause: nftData.canPause
    });
  }
};
var StateElementPrecondition = class extends (0, import_o1js.Struct)({
  isSome: import_o1js.Bool,
  value: import_o1js.Field
}) {
};
var NFTOraclePreconditions = class _NFTOraclePreconditions extends (0, import_o1js.Struct)({
  /** The lower slot of the validity of the NFT update proof. */
  lowerSlot: import_o1js.UInt32,
  /** The upper slot of the validity of the NFT update proof. */
  upperSlot: import_o1js.UInt32,
  /** The public key of the Oracle. */
  publicKey: import_o1js.PublicKey,
  /** The token Id of the Oracle. */
  tokenId: import_o1js.Field,
  /** The lower balance of the Oracle. */
  balanceLower: import_o1js.UInt64,
  /** The upper balance of the Oracle. */
  balanceUpper: import_o1js.UInt64,
  /** The lower nonce of the Oracle. */
  nonceLower: import_o1js.UInt32,
  /** The upper nonce of the Oracle. */
  nonceUpper: import_o1js.UInt32,
  /** The action state of the Oracle. */
  actionState: StateElementPrecondition,
  /** The state of the Oracle. */
  state: import_o1js.Provable.Array(StateElementPrecondition, 8)
}) {
  static new(params = {}) {
    return new _NFTOraclePreconditions({
      lowerSlot: params.lowerSlot ?? import_o1js.UInt32.zero,
      upperSlot: params.upperSlot ?? import_o1js.UInt32.MAXINT(),
      publicKey: params.publicKey ?? import_o1js.PublicKey.empty(),
      tokenId: params.tokenId ?? (0, import_o1js.Field)(1),
      balanceLower: params.balanceLower ?? import_o1js.UInt64.zero,
      balanceUpper: params.balanceUpper ?? import_o1js.UInt64.MAXINT(),
      nonceLower: params.nonceLower ?? import_o1js.UInt32.zero,
      nonceUpper: params.nonceUpper ?? import_o1js.UInt32.MAXINT(),
      actionState: params.actionState ?? new StateElementPrecondition({ isSome: (0, import_o1js.Bool)(false), value: (0, import_o1js.Field)(0) }),
      state: params.state ?? [...Array(8)].map((_, i) => new StateElementPrecondition({
        isSome: (0, import_o1js.Bool)(false),
        value: (0, import_o1js.Field)(0)
      }))
    });
  }
  static assertEqual(a, b) {
    a.lowerSlot.assertEquals(b.lowerSlot);
    a.upperSlot.assertEquals(b.upperSlot);
    a.publicKey.assertEquals(b.publicKey);
    a.tokenId.assertEquals(b.tokenId);
    a.balanceLower.assertEquals(b.balanceLower);
    a.balanceUpper.assertEquals(b.balanceUpper);
    a.nonceLower.assertEquals(b.nonceLower);
    a.nonceUpper.assertEquals(b.nonceUpper);
    a.actionState.isSome.assertEquals(b.actionState.isSome);
    a.actionState.value.assertEquals(b.actionState.value);
    for (let i = 0; i < 8; i++) {
      a.state[i].isSome.assertEquals(b.state[i].isSome);
      a.state[i].value.assertEquals(b.state[i].value);
    }
  }
};
var NFTState = class _NFTState extends (0, import_o1js.Struct)({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: import_o1js.Field,
  /** The owner of the NFT. */
  owner: import_o1js.PublicKey,
  /** The approved address of the NFT. */
  approved: import_o1js.PublicKey,
  /** The metadata associated with the NFT. */
  metadata: import_o1js.Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: import_storage.Storage,
  /** The version number of the NFT state. */
  version: import_o1js.UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: import_o1js.Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: import_o1js.Field,
  /** The public key of the creator of the NFT (readonly). */
  creator: import_o1js.PublicKey,
  // readonly
  /** The state of the owner of the NFT - 8 Fields (readonly). */
  oracle: NFTOraclePreconditions
  // readonly
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
    import_storage.Storage.assertEquals(a.storage, b.storage);
    a.owner.assertEquals(b.owner);
    a.approved.assertEquals(b.approved);
    a.version.assertEquals(b.version);
    a.isPaused.assertEquals(b.isPaused);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
    a.creator.assertEquals(b.creator);
    NFTOraclePreconditions.assertEqual(a.oracle, b.oracle);
  }
  /**
   * Creates a new NFTState from an NFTStateStruct and other parameters.
   * @param params The parameters including nftState, creator, address, and tokenId.
   * @returns A new NFTState instance.
   */
  static fromNFTState(params) {
    const { nftState, creator, address, tokenId, oracle } = params;
    const nftData = NFTData.unpack(nftState.packedData);
    const immutableState = NFTImmutableState.fromNFTData({
      nftData,
      address,
      tokenId
    });
    return new _NFTState({
      immutableState,
      name: nftState.name,
      metadata: nftState.metadata,
      storage: nftState.storage,
      owner: nftData.owner,
      approved: nftData.approved,
      version: nftData.version,
      isPaused: nftData.isPaused,
      metadataVerificationKeyHash: nftState.metadataVerificationKeyHash,
      creator,
      oracle
    });
  }
};
var _NFTUpdateProof = class _NFTUpdateProof extends import_o1js.DynamicProof {
};
_NFTUpdateProof.publicInputType = NFTState;
_NFTUpdateProof.publicOutputType = NFTState;
_NFTUpdateProof.maxProofsVerified = 2;
_NFTUpdateProof.featureFlags = import_o1js.FeatureFlags.allMaybe;
var NFTUpdateProof = _NFTUpdateProof;
var NFTData = class _NFTData extends (0, import_o1js.Struct)({
  /** The owner of the NFT. */
  owner: import_o1js.PublicKey,
  /** The approved address of the NFT. */
  approved: import_o1js.PublicKey,
  /** The version number of the NFT state. */
  version: import_o1js.UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: import_o1js.UInt64,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT's ownership can be transferred (readonly). */
  canTransfer: import_o1js.Bool,
  // readonly
  /** Specifies if the NFT's approved address can be changed (readonly). */
  canApprove: import_o1js.Bool,
  // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: import_o1js.Bool,
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
  /** Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). */
  requireOwnerAuthorizationToUpgrade: import_o1js.Bool
  // readonly
}) {
  /**
   * Creates a new NFTData instance with optional parameters.
   * @param params The parameters to create the NFTData.
   * @returns A new NFTData instance.
   */
  static new(params) {
    const { owner, approved, version, id, canChangeOwnerByProof, canTransfer, canApprove, canChangeMetadata, canChangeStorage, canChangeName, canChangeMetadataVerificationKeyHash, canPause, isPaused, requireOwnerAuthorizationToUpgrade } = params;
    return new _NFTData({
      owner: typeof owner === "string" ? import_o1js.PublicKey.fromBase58(owner) : owner,
      approved: approved ? typeof approved === "string" ? import_o1js.PublicKey.fromBase58(approved) : approved : import_o1js.PublicKey.empty(),
      version: import_o1js.UInt32.from(version ?? 0),
      id: import_o1js.UInt64.from(id ?? 0),
      canChangeOwnerByProof: (0, import_o1js.Bool)(canChangeOwnerByProof ?? false),
      canTransfer: (0, import_o1js.Bool)(canTransfer ?? true),
      canApprove: (0, import_o1js.Bool)(canApprove ?? true),
      canChangeMetadata: (0, import_o1js.Bool)(canChangeMetadata ?? false),
      canChangeStorage: (0, import_o1js.Bool)(canChangeStorage ?? false),
      canChangeName: (0, import_o1js.Bool)(canChangeName ?? false),
      canChangeMetadataVerificationKeyHash: (0, import_o1js.Bool)(canChangeMetadataVerificationKeyHash ?? false),
      canPause: (0, import_o1js.Bool)(canPause ?? false),
      isPaused: (0, import_o1js.Bool)(isPaused ?? false),
      requireOwnerAuthorizationToUpgrade: (0, import_o1js.Bool)(requireOwnerAuthorizationToUpgrade ?? false)
    });
  }
  /**
   * Packs the NFTData into a single Field for efficient storage.
   * @returns The packed Field representation of the NFTData.
   */
  pack() {
    const id = this.id.value.toBits(64);
    const version = this.version.value.toBits(32);
    return new NFTDataPacked({
      ownerX: this.owner.x,
      approvedX: this.approved.x,
      data: import_o1js.Field.fromBits([
        ...id,
        ...version,
        this.canChangeOwnerByProof,
        this.canTransfer,
        this.canApprove,
        this.canChangeMetadata,
        this.canChangeStorage,
        this.canChangeName,
        this.canChangeMetadataVerificationKeyHash,
        this.canPause,
        this.isPaused,
        this.requireOwnerAuthorizationToUpgrade,
        this.owner.isOdd,
        this.approved.isOdd
      ])
    });
  }
  /**
   * Unpacks a Field into an NFTData instance.
   * @param packed The packed Field representation of the NFTData.
   * @returns A new NFTData instance.
   */
  static unpack(packed) {
    const bits = packed.data.toBits(64 + 32 + 12);
    const id = import_o1js.UInt64.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(0, 64)));
    const version = import_o1js.UInt32.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(64, 64 + 32)));
    const canChangeOwnerByProof = bits[64 + 32 + 0];
    const canTransfer = bits[64 + 32 + 1];
    const canApprove = bits[64 + 32 + 2];
    const canChangeMetadata = bits[64 + 32 + 3];
    const canChangeStorage = bits[64 + 32 + 4];
    const canChangeName = bits[64 + 32 + 5];
    const canChangeMetadataVerificationKeyHash = bits[64 + 32 + 6];
    const canPause = bits[64 + 32 + 7];
    const isPaused = bits[64 + 32 + 8];
    const requireOwnerAuthorizationToUpgrade = bits[64 + 32 + 9];
    const ownerIsOdd = bits[64 + 32 + 10];
    const approvedIsOdd = bits[64 + 32 + 11];
    const owner = import_o1js.PublicKey.from({ x: packed.ownerX, isOdd: ownerIsOdd });
    const approved = import_o1js.PublicKey.from({
      x: packed.approvedX,
      isOdd: approvedIsOdd
    });
    return new _NFTData({
      owner,
      approved,
      id,
      version,
      canChangeOwnerByProof,
      canTransfer,
      canApprove,
      canChangeMetadata,
      canChangeStorage,
      canChangeName,
      canChangeMetadataVerificationKeyHash,
      canPause,
      isPaused,
      requireOwnerAuthorizationToUpgrade
    });
  }
};
var CollectionData = class _CollectionData extends (0, import_o1js.Struct)({
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
  requireOfferApproval: import_o1js.Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
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
    const { royaltyFee, transferFee, requireTransferApproval, requireUpdateApproval, requireOfferApproval, requireSaleApproval, requireBuyApproval, requireCreatorSignatureToUpgradeCollection, requireCreatorSignatureToUpgradeNFT, canMint, canChangeName, canChangeCreator, canChangeBaseUri, canChangeRoyalty, canChangeTransferFee, canSetAdmin, canPause, isPaused } = params;
    return new _CollectionData({
      royaltyFee: import_o1js.UInt32.from(royaltyFee ?? 0),
      transferFee: import_o1js.UInt64.from(transferFee ?? 0),
      requireTransferApproval: (0, import_o1js.Bool)(requireTransferApproval ?? false),
      requireUpdateApproval: (0, import_o1js.Bool)(requireUpdateApproval ?? false),
      requireOfferApproval: (0, import_o1js.Bool)(requireOfferApproval ?? false),
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
    return import_o1js.Field.fromBits([
      ...this.royaltyFee.value.toBits(32),
      ...this.transferFee.value.toBits(64),
      this.requireTransferApproval,
      this.requireUpdateApproval,
      this.requireOfferApproval,
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
      this.isPaused
    ]);
  }
  /**
   * Unpacks a CollectionDataPacked instance into a CollectionData instance.
   * @param packed The packed CollectionDataPacked instance.
   * @returns A new CollectionData instance.
   */
  static unpack(packed) {
    const bits = packed.toBits(32 + 64 + 16);
    const royaltyFee = import_o1js.UInt32.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(0, 32)));
    const transferFee = import_o1js.UInt64.Unsafe.fromField(import_o1js.Field.fromBits(bits.slice(32, 32 + 64)));
    return new _CollectionData({
      royaltyFee,
      transferFee,
      requireTransferApproval: bits[32 + 64],
      requireUpdateApproval: bits[32 + 64 + 1],
      requireOfferApproval: bits[32 + 64 + 2],
      requireSaleApproval: bits[32 + 64 + 3],
      requireBuyApproval: bits[32 + 64 + 4],
      requireCreatorSignatureToUpgradeCollection: bits[32 + 64 + 5],
      requireCreatorSignatureToUpgradeNFT: bits[32 + 64 + 6],
      canMint: bits[32 + 64 + 7],
      canChangeName: bits[32 + 64 + 8],
      canChangeCreator: bits[32 + 64 + 9],
      canChangeBaseUri: bits[32 + 64 + 10],
      canChangeRoyalty: bits[32 + 64 + 11],
      canChangeTransferFee: bits[32 + 64 + 12],
      canSetAdmin: bits[32 + 64 + 13],
      canPause: bits[32 + 64 + 14],
      isPaused: bits[32 + 64 + 15]
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
  /** The data associated with the NFT, including owner, approved, version, id, permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: import_o1js.UInt64,
  /** The metadata associated with the NFT. */
  metadata: import_o1js.Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: import_storage.Storage,
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
var TransferParams = class extends (0, import_o1js.Struct)({
  /** The address of the NFT contract. */
  address: import_o1js.PublicKey,
  /** The sender's public key. */
  from: import_o1js.PublicKey,
  /** The receiver's public key. */
  to: import_o1js.PublicKey,
  /** Optional price for the transfer. */
  price: UInt64Option
}) {
};

// dist/node/interfaces/encoding.js
var import_o1js2 = require("o1js");
function fieldToString(field) {
  return import_o1js2.Encoding.stringFromFields([field]);
}
function fieldFromString(storage) {
  const fields = import_o1js2.Encoding.stringToFields(storage);
  if (fields.length !== 1)
    throw new Error("String is too long");
  return fields[0];
}

// dist/node/interfaces/events.js
var import_o1js3 = require("o1js");
var import_storage2 = require("@minatokens/storage");
var MintEvent = class extends (0, import_o1js3.Struct)({
  /** The initial state of the NFT at the time of minting. */
  initialState: NFTStateStruct,
  /** The public key address of the minted NFT. */
  address: import_o1js3.PublicKey
}) {
};
var UpdateEvent = class extends (0, import_o1js3.Struct)({
  /** The updated name of the NFT. */
  name: import_o1js3.Field,
  /** The updated metadata hash of the NFT. */
  metadata: import_o1js3.Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: import_storage2.Storage,
  /** The owner of the NFT after the update. */
  owner: import_o1js3.PublicKey,
  /** The approved address of the NFT after the update. */
  approved: import_o1js3.PublicKey,
  /** The version number of the NFT state. */
  version: import_o1js3.UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: import_o1js3.Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: import_o1js3.Field
}) {
};
var ApproveEvent = class extends (0, import_o1js3.Struct)({
  /** The public key address of the NFT. */
  nftAddress: import_o1js3.PublicKey,
  /** The public key of the approved address. */
  approved: import_o1js3.PublicKey
}) {
};
var TransferEvent = class extends (0, import_o1js3.Struct)({
  /** The public key of the sender (current owner) before the transfer. */
  from: import_o1js3.PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: import_o1js3.PublicKey,
  /** The public key of the collection. */
  collection: import_o1js3.PublicKey,
  /** The public key address of the NFT being transferred. */
  nft: import_o1js3.PublicKey,
  /** The fee paid for the transfer. */
  fee: UInt64Option,
  /** The price of the NFT being transferred. */
  price: UInt64Option,
  /** Indicates whether the transfer is by owner or by approved address. */
  transferByOwner: import_o1js3.Bool,
  /** The public key of the approved address. */
  approved: import_o1js3.PublicKey
}) {
};
var PauseNFTEvent = class extends (0, import_o1js3.Struct)({
  /** The public key address of the NFT. */
  address: import_o1js3.PublicKey,
  /** Indicates whether the NFT is paused (`true`) or resumed (`false`). */
  isPaused: import_o1js3.Bool
}) {
};
var OfferEvent = class extends (0, import_o1js3.Struct)({
  /** The public key of the seller listing the NFT for sale. */
  seller: import_o1js3.PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: import_o1js3.UInt64,
  /** The public key address of the NFT being sold. */
  address: import_o1js3.PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: import_o1js3.UInt32
}) {
};
var SaleEvent = class extends (0, import_o1js3.Struct)({
  /** The public key of the seller. */
  seller: import_o1js3.PublicKey,
  /** The public key of the bidder. */
  buyer: import_o1js3.PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: import_o1js3.UInt64,
  /** The public key address of the NFT being sold. */
  address: import_o1js3.PublicKey
}) {
};
var BuyEvent = class extends (0, import_o1js3.Struct)({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: import_o1js3.PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: import_o1js3.PublicKey,
  /** The price at which the NFT was purchased. */
  price: import_o1js3.UInt64,
  /** The public key address of the NFT being purchased. */
  address: import_o1js3.PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: import_o1js3.UInt32
}) {
};
var UpgradeVerificationKeyEvent = class extends (0, import_o1js3.Struct)({
  /** The hash of the new verification key. */
  verificationKeyHash: import_o1js3.Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: import_o1js3.PublicKey,
  /** The version number of the NFT state after the upgrade. */
  tokenId: import_o1js3.Field
}) {
};
var UpgradeVerificationKeyData = class extends (0, import_o1js3.Struct)({
  /** The owner of the NFT. */
  owner: import_o1js3.PublicKey,
  /** Indicates whether the owner approval is required to upgrade the verification key. */
  isOwnerApprovalRequired: import_o1js3.Bool
}) {
};
var LimitMintingEvent = class extends (0, import_o1js3.Struct)({
  /** Indicates whether minting is limited (`true`) or not (`false`). */
  mintingLimited: import_o1js3.Bool
}) {
};

// dist/node/interfaces/pausable.js
var import_o1js4 = require("o1js");
var PauseEvent = class extends (0, import_o1js4.Struct)({
  /**
   * Indicates whether the contract is currently paused.
   */
  isPaused: import_o1js4.Bool
}) {
};

// dist/node/interfaces/ownable.js
var import_o1js5 = require("o1js");
var OwnershipChangeEvent = class extends (0, import_o1js5.Struct)({
  from: import_o1js5.PublicKey,
  to: import_o1js5.PublicKey
}) {
};

// dist/node/interfaces/owner.js
var import_tslib = require("tslib");
var import_o1js6 = require("o1js");
var NFTStandardOwner = class extends import_o1js6.SmartContract {
  constructor() {
    super(...arguments);
    this.admin = (0, import_o1js6.State)();
  }
  /**
   * Deploys the contract with initial settings.
   * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
   */
  async deploy(props) {
    await super.deploy(props);
    this.admin.set(props.admin);
    this.account.zkappUri.set(props.uri);
    this.account.permissions.set({
      ...import_o1js6.Permissions.default(),
      // Allow the upgrade authority to set the verification key even without a protocol upgrade,
      // enabling upgrades in case of o1js breaking changes.
      setVerificationKey: import_o1js6.Permissions.VerificationKey.proofDuringCurrentVersion(),
      setPermissions: import_o1js6.Permissions.impossible()
    });
  }
  /**
   * Ensures that the transaction is authorized by the contract owner.
   * @returns A signed `AccountUpdate` from the admin.
   */
  async ensureOwnerSignature() {
    const admin = this.admin.getAndRequireEquals();
    const adminUpdate = import_o1js6.AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    return adminUpdate;
  }
  async canTransfer(transferEvent) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
  async canPause(collection, nft) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
  async canResume(collection, nft) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
  async canChangeVerificationKey(collection, nft, vk) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
  async canApproveAddress(collection, nft, approved) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
};
(0, import_tslib.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib.__metadata)("design:type", Object)
], NFTStandardOwner.prototype, "admin", void 0);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [TransferEvent]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardOwner.prototype, "canTransfer", null);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [import_o1js6.PublicKey, import_o1js6.PublicKey]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardOwner.prototype, "canPause", null);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [import_o1js6.PublicKey, import_o1js6.PublicKey]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardOwner.prototype, "canResume", null);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    import_o1js6.PublicKey,
    import_o1js6.PublicKey,
    import_o1js6.VerificationKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardOwner.prototype, "canChangeVerificationKey", null);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    import_o1js6.PublicKey,
    import_o1js6.PublicKey,
    import_o1js6.PublicKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardOwner.prototype, "canApproveAddress", null);
var NFTStandardApproval = class extends import_o1js6.SmartContract {
  constructor() {
    super(...arguments);
    this.admin = (0, import_o1js6.State)();
  }
  /**
   * Deploys the contract with initial settings.
   * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
   */
  async deploy(props) {
    await super.deploy(props);
    this.admin.set(props.admin);
    this.account.zkappUri.set(props.uri);
    this.account.permissions.set({
      ...import_o1js6.Permissions.default(),
      // Allow the upgrade authority to set the verification key even without a protocol upgrade,
      // enabling upgrades in case of o1js breaking changes.
      setVerificationKey: import_o1js6.Permissions.VerificationKey.proofDuringCurrentVersion(),
      setPermissions: import_o1js6.Permissions.impossible()
    });
  }
  /**
   * Ensures that the transaction is authorized by the contract owner.
   * @returns A signed `AccountUpdate` from the admin.
   */
  async ensureOwnerSignature() {
    const admin = this.admin.getAndRequireEquals();
    const adminUpdate = import_o1js6.AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    return adminUpdate;
  }
  async canTransfer(transferEvent) {
    await this.ensureOwnerSignature();
    return (0, import_o1js6.Bool)(true);
  }
};
(0, import_tslib.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib.__metadata)("design:type", Object)
], NFTStandardApproval.prototype, "admin", void 0);
(0, import_tslib.__decorate)([
  import_o1js6.method.returns(import_o1js6.Bool),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [TransferEvent]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], NFTStandardApproval.prototype, "canTransfer", null);

// dist/node/admin/standard.js
var NFTAdmin = class extends import_o1js7.SmartContract {
  constructor() {
    super(...arguments);
    this.admin = (0, import_o1js7.State)();
    this.upgradeAuthority = (0, import_o1js7.State)();
    this.isPaused = (0, import_o1js7.State)();
    this.canPause = (0, import_o1js7.State)();
    this.events = {
      /** Emitted when the verification key is upgraded. */
      upgradeVerificationKey: import_o1js7.Field,
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
    this.isPaused.set(props.isPaused);
    this.canPause.set(props.canPause);
    this.account.zkappUri.set(props.uri);
    this.account.permissions.set({
      ...import_o1js7.Permissions.default(),
      // Allow the upgrade authority to set the verification key even without a protocol upgrade,
      // enabling upgrades in case of o1js breaking changes.
      setVerificationKey: import_o1js7.Permissions.VerificationKey.proofDuringCurrentVersion(),
      setPermissions: import_o1js7.Permissions.impossible()
    });
  }
  /**
   * Ensures that the transaction is authorized by the contract owner.
   * @returns A signed `AccountUpdate` from the admin.
   */
  async ensureOwnerSignature() {
    const admin = this.admin.getAndRequireEquals();
    const adminUpdate = import_o1js7.AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    return adminUpdate;
  }
  /**
   * Upgrades the contract's verification key after validating with the upgrade authority.
   * @param vk - The new verification key to upgrade to.
   */
  async upgradeVerificationKey(vk) {
    await this.ensureOwnerSignature();
    this.account.verificationKey.set(vk);
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
   * @param price - The price of the NFT, optional.
   * @returns A `Bool` indicating whether the transfer is allowed.
   */
  async canTransfer(transferEvent) {
    const isPaused = this.isPaused.getAndRequireEquals();
    return isPaused.not();
  }
  // /**
  //  * Determines whether the NFT can be listed for sale at the given price.
  //  * @param address - The NFT contract address.
  //  * @param seller - The seller's public key.
  //  * @param price - The listing price.
  //  * @returns A `Bool` indicating whether the sale is permitted.
  //  */
  // @method.returns(Bool)
  // async canSell(address: PublicKey, seller: PublicKey, price: UInt64) {
  //   const isPaused = this.isPaused.getAndRequireEquals();
  //   return isPaused.not();
  // }
  // /**
  //  * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
  //  * @param address - The NFT contract address.
  //  * @param seller - The seller's public key.
  //  * @param buyer - The buyer's public key.
  //  * @param price - The purchase price.
  //  * @returns A `Bool` indicating whether the purchase is allowed.
  //  */
  // @method.returns(Bool)
  // async canBuy(
  //   address: PublicKey,
  //   seller: PublicKey,
  //   buyer: PublicKey,
  //   price: UInt64
  // ) {
  //   const isPaused = this.isPaused.getAndRequireEquals();
  //   return isPaused.not();
  // }
  /**
   * Pauses the contract, disabling certain administrative actions.
   * Can only be called by the admin if `canPause` is `true`.
   */
  async pause() {
    await this.ensureOwnerSignature();
    this.canPause.getAndRequireEquals().assertTrue();
    this.isPaused.set((0, import_o1js7.Bool)(true));
    this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js7.Bool)(true) }));
  }
  /**
   * Resumes the contract, re-enabling administrative actions.
   * Can only be called by the admin if `canPause` is `true`.
   */
  async resume() {
    await this.ensureOwnerSignature();
    this.canPause.getAndRequireEquals().assertTrue();
    this.isPaused.set((0, import_o1js7.Bool)(false));
    this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js7.Bool)(false) }));
  }
  /**
   * Transfers ownership of the contract to a new admin.
   * @param to - The public key of the new owner.
   * @returns The public key of the previous owner.
   */
  async transferOwnership(to) {
    await this.ensureOwnerSignature();
    const from = this.admin.getAndRequireEquals();
    this.admin.set(to);
    this.emitEvent("ownershipChange", new OwnershipChangeEvent({
      from,
      to
    }));
    return from;
  }
  async canChangeVerificationKey(vk, address, tokenId) {
    await this.ensureOwnerSignature();
    return (0, import_o1js7.Bool)(true);
  }
};
(0, import_tslib2.__decorate)([
  (0, import_o1js7.state)(import_o1js7.PublicKey),
  (0, import_tslib2.__metadata)("design:type", Object)
], NFTAdmin.prototype, "admin", void 0);
(0, import_tslib2.__decorate)([
  (0, import_o1js7.state)(import_o1js7.PublicKey),
  (0, import_tslib2.__metadata)("design:type", Object)
], NFTAdmin.prototype, "upgradeAuthority", void 0);
(0, import_tslib2.__decorate)([
  (0, import_o1js7.state)(import_o1js7.Bool),
  (0, import_tslib2.__metadata)("design:type", Object)
], NFTAdmin.prototype, "isPaused", void 0);
(0, import_tslib2.__decorate)([
  (0, import_o1js7.state)(import_o1js7.Bool),
  (0, import_tslib2.__metadata)("design:type", Object)
], NFTAdmin.prototype, "canPause", void 0);
(0, import_tslib2.__decorate)([
  import_o1js7.method,
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.VerificationKey]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "upgradeVerificationKey", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method.returns(MintParamsOption),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [MintRequest]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "canMint", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [NFTState, NFTState]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "canUpdate", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [TransferEvent]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "canTransfer", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method,
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", []),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "pause", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method,
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", []),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "resume", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method.returns(import_o1js7.PublicKey),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js7.PublicKey]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "transferOwnership", null);
(0, import_tslib2.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [
    import_o1js7.VerificationKey,
    import_o1js7.PublicKey,
    import_o1js7.Field
  ]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], NFTAdmin.prototype, "canChangeVerificationKey", null);

// dist/node/admin/advanced.js
var import_tslib3 = require("tslib");
var import_o1js8 = require("o1js");
var import_storage3 = require("@minatokens/storage");
var import_upgradable = require("@minatokens/upgradable");
var PauseData = class _PauseData extends (0, import_o1js8.Struct)({
  /** Indicates whether the contract can be paused. */
  canPause: import_o1js8.Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: import_o1js8.Bool
}) {
  /**
   * Packs the pause data into a `Field`.
   * @returns A `Field` representing the packed pause data.
   */
  pack() {
    return import_o1js8.Field.fromBits([this.canPause, this.isPaused]);
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
var NFTAdvancedAdminContractErrors = {
  contractIsPaused: "Contract is paused",
  notWhitelisted: "Address not whitelisted",
  senderNotWhitelisted: "Sender address not whitelisted",
  cannotMint: "Cannot mint",
  verificationKeyHashNotFound: "Verification key hash not found",
  cannotUpgradeVerificationKey: "Cannot upgrade verification key"
};
function NFTAdvancedAdminContract(params) {
  const { upgradeContract } = params;
  class NFTAdvancedAdmin2 extends import_o1js8.SmartContract {
    constructor() {
      super(...arguments);
      this.admin = (0, import_o1js8.State)();
      this.upgradeAuthority = (0, import_o1js8.State)();
      this.whitelist = (0, import_o1js8.State)();
      this.pauseData = (0, import_o1js8.State)();
      this.events = {
        /** Emitted when the contract's verification key is upgraded. */
        upgradeVerificationKey: import_o1js8.Field,
        /** Emitted when the contract is paused. */
        pause: PauseEvent,
        /** Emitted when the contract is resumed. */
        resume: PauseEvent,
        /** Emitted when ownership of the contract changes. */
        ownershipChange: OwnershipChangeEvent,
        /** Emitted when the whitelist is updated. */
        updateWhitelist: import_storage3.Whitelist
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
        ...import_o1js8.Permissions.default(),
        // We want to allow the upgrade authority to set the verification key
        // even in the case when there is no protocol upgrade
        // to allow the upgrade in case of o1js breaking changes
        setVerificationKey: import_o1js8.Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: import_o1js8.Permissions.impossible()
      });
    }
    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns An `AccountUpdate` representing the admin's signed transaction.
     */
    async ensureOwnerSignature() {
      const admin = this.admin.getAndRequireEquals();
      const adminUpdate = import_o1js8.AccountUpdate.createSigned(admin);
      adminUpdate.body.useFullCommitment = (0, import_o1js8.Bool)(true);
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
      const previousVerificationKeyHash = import_o1js8.Provable.witness(import_o1js8.Field, () => {
        const account = import_o1js8.Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error(NFTAdvancedAdminContractErrors.verificationKeyHashNotFound);
        }
        return vkHash;
      });
      const data = new import_upgradable.VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      upgradeAuthorityAnswer.isVerified.assertTrue(NFTAdvancedAdminContractErrors.cannotUpgradeVerificationKey);
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
      ownerAmount.isSome.assertTrue(NFTAdvancedAdminContractErrors.notWhitelisted);
      const sender = this.sender.getUnconstrained();
      const senderUpdate = import_o1js8.AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = (0, import_o1js8.Bool)(true);
      const senderAmount = await whitelist.getWhitelistedAmount(sender);
      senderAmount.isSome.assertTrue(NFTAdvancedAdminContractErrors.senderNotWhitelisted);
      const mintParams = await import_o1js8.Provable.witnessAsync(MintParamsOption, async () => {
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
    async canTransfer(transferEvent) {
      const { to, from, price } = transferEvent;
      const whitelist = this.whitelist.getAndRequireEquals();
      const toAmount = await whitelist.getWhitelistedAmount(to);
      const fromAmount = await whitelist.getWhitelistedAmount(from);
      const toAmountAllowed = toAmount.orElse(import_o1js8.UInt64.from(0)).lessThanOrEqual(price.orElse(import_o1js8.UInt64.MAXINT()));
      const fromAmountAllowed = fromAmount.orElse(import_o1js8.UInt64.from(0)).lessThanOrEqual(price.orElse(import_o1js8.UInt64.MAXINT()));
      return toAmountAllowed.and(fromAmountAllowed).and(toAmount.isSome).and(fromAmount.isSome);
    }
    // /**
    //  * Determines if the seller is permitted to list the NFT for sale at the specified price.
    //  * @param address The address of the NFT.
    //  * @param seller The seller's public key.
    //  * @param price The price at which the NFT is being sold.
    //  * @returns A `Bool` indicating whether the sale is permissible.
    //  */
    // @method.returns(Bool)
    // async canSell(address: PublicKey, seller: PublicKey, price: UInt64) {
    //   const whitelist = this.whitelist.getAndRequireEquals();
    //   const allowedPrice = (
    //     await whitelist.getWhitelistedAmount(seller)
    //   ).assertSome(NFTAdvancedAdminContractErrors.notWhitelisted);
    //   return price.lessThanOrEqual(allowedPrice);
    // }
    // /**
    //  * Determines if the buyer and seller are allowed to perform the transaction at the specified price.
    //  * @param address The address of the NFT.
    //  * @param seller The seller's public key.
    //  * @param buyer The buyer's public key.
    //  * @param price The price at which the NFT is being bought.
    //  * @returns A `Bool` indicating whether the purchase is permitted.
    //  */
    // @method.returns(Bool)
    // async canBuy(
    //   address: PublicKey,
    //   seller: PublicKey,
    //   buyer: PublicKey,
    //   price: UInt64
    // ) {
    //   const whitelist = this.whitelist.getAndRequireEquals();
    //   const allowedBuyerPrice = (
    //     await whitelist.getWhitelistedAmount(buyer)
    //   ).assertSome(NFTAdvancedAdminContractErrors.notWhitelisted);
    //   const allowedSellerPrice = (
    //     await whitelist.getWhitelistedAmount(seller)
    //   ).assertSome(NFTAdvancedAdminContractErrors.notWhitelisted);
    //   return price
    //     .lessThanOrEqual(allowedBuyerPrice)
    //     .and(price.lessThanOrEqual(allowedSellerPrice));
    // }
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
      pauseData.isPaused = (0, import_o1js8.Bool)(true);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js8.Bool)(true) }));
    }
    /**
     * Resumes the contract, allowing administrative actions to be performed again.
     */
    async resume() {
      await this.ensureOwnerSignature();
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.canPause.assertTrue();
      pauseData.isPaused = (0, import_o1js8.Bool)(false);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js8.Bool)(false) }));
    }
    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner The public key of the new admin.
     * @returns The public key of the old owner.
     */
    async transferOwnership(to) {
      await this.ensureOwnerSignature();
      const from = this.admin.getAndRequireEquals();
      this.admin.set(to);
      this.emitEvent("ownershipChange", new OwnershipChangeEvent({
        from,
        to
      }));
      return from;
    }
    async canChangeVerificationKey(vk, address, tokenId) {
      const upgradeContract2 = await this.getUpgradeContract();
      const previousVerificationKeyHash = import_o1js8.Provable.witness(import_o1js8.Field, () => {
        const account = import_o1js8.Mina.getAccount(address, tokenId);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      const data = new import_upgradable.VerificationKeyUpgradeData({
        address,
        tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash
      });
      const upgradeAuthorityAnswer = await upgradeContract2.verifyUpgradeData(data);
      return upgradeAuthorityAnswer.isVerified;
    }
  }
  (0, import_tslib3.__decorate)([
    (0, import_o1js8.state)(import_o1js8.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdvancedAdmin2.prototype, "admin", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js8.state)(import_o1js8.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdvancedAdmin2.prototype, "upgradeAuthority", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js8.state)(import_storage3.Whitelist),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdvancedAdmin2.prototype, "whitelist", void 0);
  (0, import_tslib3.__decorate)([
    (0, import_o1js8.state)(import_o1js8.Field),
    (0, import_tslib3.__metadata)("design:type", Object)
  ], NFTAdvancedAdmin2.prototype, "pauseData", void 0);
  (0, import_tslib3.__decorate)([
    import_o1js8.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js8.VerificationKey]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "upgradeVerificationKey", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method.returns(MintParamsOption),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [MintRequest]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "canMint", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method.returns(import_o1js8.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [NFTState, NFTState]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "canUpdate", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method.returns(import_o1js8.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [TransferEvent]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "canTransfer", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_storage3.Whitelist]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "updateWhitelist", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", []),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "pause", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method,
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", []),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "resume", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method.returns(import_o1js8.PublicKey),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js8.PublicKey]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "transferOwnership", null);
  (0, import_tslib3.__decorate)([
    import_o1js8.method.returns(import_o1js8.Bool),
    (0, import_tslib3.__metadata)("design:type", Function),
    (0, import_tslib3.__metadata)("design:paramtypes", [
      import_o1js8.VerificationKey,
      import_o1js8.PublicKey,
      import_o1js8.Field
    ]),
    (0, import_tslib3.__metadata)("design:returntype", Promise)
  ], NFTAdvancedAdmin2.prototype, "canChangeVerificationKey", null);
  return NFTAdvancedAdmin2;
}

// dist/node/contracts/collection.js
var import_tslib5 = require("tslib");
var import_o1js10 = require("o1js");

// dist/node/contracts/nft.js
var import_tslib4 = require("tslib");
var import_o1js9 = require("o1js");
var import_storage4 = require("@minatokens/storage");
var NftErrors = {
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
var NFT = class extends import_o1js9.SmartContract {
  constructor() {
    super(...arguments);
    this.name = (0, import_o1js9.State)();
    this.metadata = (0, import_o1js9.State)();
    this.storage = (0, import_o1js9.State)();
    this.packedData = (0, import_o1js9.State)();
    this.metadataVerificationKeyHash = (0, import_o1js9.State)();
    this.events = {
      update: UpdateEvent,
      transfer: OwnershipChangeEvent,
      approve: import_o1js9.PublicKey,
      // offer: OfferEvent,
      // buy: BuyEvent,
      upgradeVerificationKey: UpgradeVerificationKeyEvent,
      pause: PauseEvent,
      resume: PauseEvent
    };
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
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    const owner = data.owner;
    const oracleUpdate = import_o1js9.AccountUpdate.create(
      input.oracle.publicKey,
      // in case publicKey is empty, this AccountUpdate will NOT be created
      input.oracle.tokenId
    );
    oracleUpdate.body.preconditions.account.state = input.oracle.state;
    oracleUpdate.body.preconditions.account.balance.isSome = (0, import_o1js9.Bool)(true);
    oracleUpdate.body.preconditions.account.balance.value.lower = input.oracle.balanceLower;
    oracleUpdate.body.preconditions.account.balance.value.upper = input.oracle.balanceUpper;
    oracleUpdate.body.preconditions.account.nonce.isSome = (0, import_o1js9.Bool)(true);
    oracleUpdate.body.preconditions.account.nonce.value.lower = input.oracle.nonceLower;
    oracleUpdate.body.preconditions.account.nonce.value.upper = input.oracle.nonceUpper;
    oracleUpdate.body.preconditions.account.actionState = input.oracle.actionState;
    this.network.globalSlotSinceGenesis.requireBetween(input.oracle.lowerSlot, input.oracle.upperSlot);
    const storage = this.storage.getAndRequireEquals();
    const metadataVerificationKeyHash = this.metadataVerificationKeyHash.getAndRequireEquals();
    metadataVerificationKeyHash.assertNotEquals((0, import_o1js9.Field)(0), NftErrors.noMetadataVerificationKey);
    NFTState.assertEqual(input, new NFTState({
      immutableState: new NFTImmutableState({
        canChangeOwnerByProof: data.canChangeOwnerByProof,
        canTransfer: data.canTransfer,
        canChangeMetadata: data.canChangeMetadata,
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
      approved: data.approved,
      version: data.version,
      isPaused: data.isPaused,
      metadataVerificationKeyHash,
      creator,
      oracle: input.oracle
    }));
    input.creator.assertEquals(output.creator);
    NFTOraclePreconditions.assertEqual(input.oracle, output.oracle);
    name.equals(output.name).not().and(data.canChangeName.not()).assertFalse(NftErrors.cannotChangeName);
    this.name.set(output.name);
    metadata.equals(output.metadata).not().and(data.canChangeMetadata.not()).assertFalse(NftErrors.cannotChangeMetadata);
    this.metadata.set(output.metadata);
    metadataVerificationKeyHash.equals(output.metadataVerificationKeyHash).not().and(data.canChangeMetadataVerificationKeyHash.not()).assertFalse(NftErrors.cannotChangeMetadataVerificationKeyHash);
    this.metadataVerificationKeyHash.set(output.metadataVerificationKeyHash);
    owner.equals(output.owner).not().and(data.canChangeOwnerByProof.not()).assertFalse(NftErrors.cannotChangeOwner);
    import_storage4.Storage.equals(storage, output.storage).not().and(data.canChangeStorage.not()).assertFalse(NftErrors.cannotChangeStorage);
    this.storage.set(output.storage);
    data.approved.equals(output.approved).not().and(data.canChangeOwnerByProof.not()).assertFalse(NftErrors.cannotChangeOwner);
    data.isPaused.equals(output.isPaused).not().and(data.canPause.not()).assertFalse(NftErrors.cannotChangePauseState);
    output.version.assertGreaterThan(data.version);
    data.owner = output.owner;
    data.approved = output.approved;
    data.version = output.version;
    this.packedData.set(data.pack());
    const event = new UpdateEvent({
      name: output.name,
      metadata: output.metadata,
      storage: output.storage,
      owner: output.owner,
      approved: output.approved,
      version: output.version,
      isPaused: output.isPaused,
      metadataVerificationKeyHash: output.metadataVerificationKeyHash
    });
    this.emitEvent("update", event);
    return metadataVerificationKeyHash;
  }
  // /**
  //  * Lists the NFT for sale at a specified price.
  //  *
  //  * @param price - The price at which to sell the NFT (`UInt64`).
  //  * @param seller - The public key of the seller (`PublicKey`).
  //  * @returns An event emitted after the NFT is listed for sale (`SellEvent`).
  //  */
  // @method.returns(OfferEvent)
  // async offer(price: UInt64, seller: PublicKey): Promise<OfferEvent> {
  //   this.owner.getAndRequireEquals().assertEquals(seller);
  //   const data = NFTData.unpack(this.packedData.getAndRequireEquals());
  //   data.isPaused.assertFalse(NftErrors.nftIsPaused);
  //   data.canTransfer.assertTrue(NftErrors.noPermissionToSell);
  //   data.canChangePrice.assertTrue(NftErrors.noPermissionToChangePrice);
  //   const version = data.version.add(1);
  //   data.version = version;
  //   data.price = price;
  //   this.packedData.set(data.pack());
  //   const event = new OfferEvent({
  //     seller,
  //     price,
  //     version,
  //     address: this.address,
  //   });
  //   this.emitEvent("offer", event);
  //   return event;
  // }
  // /**
  //  * Purchases the NFT, transferring ownership and handling payment.
  //  *
  //  * @param price - The price at which to buy the NFT (`UInt64`).
  //  * @param buyer - The public key of the buyer (`PublicKey`).
  //  * @returns An event emitted after the NFT is purchased (`BuyEvent`).
  //  */
  // @method.returns(BuyEvent)
  // async buy(price: UInt64, buyer: PublicKey): Promise<BuyEvent> {
  //   const owner = this.owner.getAndRequireEquals();
  //   const data = NFTData.unpack(this.packedData.getAndRequireEquals());
  //   data.price.equals(UInt64.zero).assertFalse(); // the NFT is for sale
  //   data.price.assertEquals(price); // price is correct
  //   data.isPaused.assertFalse(NftErrors.nftIsPaused);
  //   data.canTransfer.assertTrue(NftErrors.noPermissionToBuy);
  //   const version = data.version.add(1);
  //   data.version = version;
  //   data.price = UInt64.zero; // reset price
  //   this.packedData.set(data.pack());
  //   this.owner.set(buyer);
  //   const event = new BuyEvent({
  //     seller: owner,
  //     buyer,
  //     price,
  //     version,
  //     address: this.address,
  //   });
  //   this.emitEvent("buy", event);
  //   this.emitEvent(
  //     "ownershipChange",
  //     new OwnershipChangeEvent({
  //       from: owner,
  //       to: buyer,
  //     })
  //   );
  //   return event;
  // }
  /**
   * Transfers ownership of the NFT from one user to another.
   *
   * @param from - The public key of the current owner (`PublicKey`) or approved address.
   * @param to - The public key of the new owner (`PublicKey`).
   * @returns The public key of the old owner (`PublicKey`).
   */
  async transfer(transferEvent) {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canTransfer.assertTrue(NftErrors.cannotChangeOwner);
    data.isPaused.assertFalse(NftErrors.nftIsPaused);
    const owner = data.owner;
    const approved = data.approved;
    transferEvent.transferByOwner = owner.equals(transferEvent.from);
    owner.equals(transferEvent.from).or(approved.equals(transferEvent.from).and(approved.equals(import_o1js9.PublicKey.empty()).not())).assertTrue(NftErrors.cannotChangeOwner);
    transferEvent.from = owner;
    transferEvent.approved = approved;
    const version = data.version.add(1);
    data.version = version;
    data.approved = import_o1js9.PublicKey.empty();
    data.owner = transferEvent.to;
    this.packedData.set(data.pack());
    this.emitEvent("transfer", new OwnershipChangeEvent({
      from: owner,
      to: transferEvent.to
    }));
    return transferEvent;
  }
  /**
   * Transfers ownership of the NFT from one user to another.
   *
   * @param approved - The public key of the approved address (`PublicKey`).
   * @returns The public key of the owner (`PublicKey`).
   */
  async approveAddress(approved) {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.isPaused.assertFalse(NftErrors.nftIsPaused);
    data.approved = approved;
    this.packedData.set(data.pack());
    this.emitEvent("approve", approved);
    return data.owner;
  }
  /**
   * Upgrades the verification key used by the NFT contract.
   *
   * @param vk - The new verification key (`VerificationKey`).
   * @returns An owner public key to be checked by the Collection contract and the Boolean flag indicating if the owner's authorization is required
   */
  async upgradeVerificationKey(vk) {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    const version = data.version.add(1);
    data.version = version;
    this.account.verificationKey.set(vk);
    this.packedData.set(data.pack());
    return new UpgradeVerificationKeyData({
      owner: data.owner,
      isOwnerApprovalRequired: data.requireOwnerAuthorizationToUpgrade
    });
  }
  /**
   * Pauses the NFT, disabling certain actions.
   *
   * @returns An owner public key to be checked by the Collection contract
   */
  async pause() {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NftErrors.noPermissionToPause);
    data.isPaused.assertFalse(NftErrors.nftAlreadyPaused);
    data.isPaused = (0, import_o1js9.Bool)(true);
    this.packedData.set(data.pack());
    this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js9.Bool)(true) }));
    return data.owner;
  }
  /**
   * Resumes the NFT, re-enabling actions.
   *
   * @returns An owner public key to be checked by the Collection contract
   */
  async resume() {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NftErrors.noPermissionToPause);
    data.isPaused.assertTrue(NftErrors.nftIsNotPaused);
    data.isPaused = (0, import_o1js9.Bool)(false);
    this.packedData.set(data.pack());
    this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js9.Bool)(false) }));
    return data.owner;
  }
};
(0, import_tslib4.__decorate)([
  (0, import_o1js9.state)(import_o1js9.Field),
  (0, import_tslib4.__metadata)("design:type", Object)
], NFT.prototype, "name", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js9.state)(import_o1js9.Field),
  (0, import_tslib4.__metadata)("design:type", Object)
], NFT.prototype, "metadata", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js9.state)(import_storage4.Storage),
  (0, import_tslib4.__metadata)("design:type", Object)
], NFT.prototype, "storage", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js9.state)(NFTDataPacked),
  (0, import_tslib4.__metadata)("design:type", Object)
], NFT.prototype, "packedData", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js9.state)(import_o1js9.Field),
  (0, import_tslib4.__metadata)("design:type", Object)
], NFT.prototype, "metadataVerificationKeyHash", void 0);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(import_o1js9.Field),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [
    NFTState,
    NFTState,
    import_o1js9.PublicKey
  ]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "update", null);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(TransferEvent),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [TransferEvent]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "transfer", null);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(import_o1js9.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js9.PublicKey]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "approveAddress", null);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(UpgradeVerificationKeyData),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js9.VerificationKey]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "upgradeVerificationKey", null);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(import_o1js9.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", []),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "pause", null);
(0, import_tslib4.__decorate)([
  import_o1js9.method.returns(import_o1js9.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", []),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], NFT.prototype, "resume", null);

// dist/node/vk.js
var nftVerificationKeys = {
  devnet: {
    o1js: "2.2.0",
    vk: {
      NFT: {
        hash: "18297062687982489176283114655891961931370375312372766341912026194321459893590",
        data: "AACnf0n+FP7zsnb8jbeQqzefb+MbHO98oWaJ6Kt63aUyFkMiZhUpe8JGkMm0MDDjxQVXFyoZkxxcDlAsOzvP0cQbRlDF3fTLacRws5Wj23sovdoMwaBRLlt8prWQZsAKThVaAWzuqAzXCtHUQQMjpJmg97+f0Dn1dMPE6yQIzFlzOu7/wIYrU9psNvIK9lVlzyQAH57sDimfGsrBzYHRMrUMDiJbDwUoDzPAcAPMnFAyJDmOkalVGdN8aMUFKWPnZAttaAgcFw3m1u8UGlEG4h+uhV2blcceVFzZV/UHWO4NPgsQIF6les+iAhbLl5hwMFodFegoprf8V1sFJv63u/8VoACUDc4af30GG3lO0/Lx7XFuxzWiZnGTKGJceqszwBofYrT5zCce9vqy22qUQrctCYRNTEKzi9Lix3rPesMRFpK3KJ9zz9A2l4+8LGWsUfkOrxHs9GVB3Le9J8ZSA30MVxpiW5aWUjB4AqO1zkkPX6CX8EsMtiBqmEfQvAVTEj5lXvqVE+rXdYi9K3kJaqZ7d2EJu7LBqljcvIgmAYXpO1z5hfcZ8Bqkw4UqHgekpEt7hCIYQUt5o0G/RiKBsJwTAL3qkxcjmJ3vxOFILBarUC8iiDGcTU+Ib/YGTPO7PlYOiDeVxPLWC6dFpZjMOWrRe8p2K5mgBCL3Acx1iQhM9xKZvCd3oM+BC8Aq0U6FCDWEBOP1IkMvkYZyrVIeeED9LFDkV79UgVsbiO+kPRAsa4S0W2XTSuFhAh6Mjij5Y40yU6Vrd/J1uH1MhDUKqFvWJFB+tTbLYQompUDkxjRhuQ0evOOfsb+5+t/MC5g9fol3ukycMo/ReVDPvyYdSqs0L3091DN2EQp6G3gvxzbrSCkrSSGYUXaJ9s3jWH8YFLM0S1ydolT9ve1BgkbZk0yIqnh1pKAcDnzoz6q/BBn9DBxH4q9mVZJ4CTBewlFEJil3xilOaGse8k7D3BP9ofuHIrQwkdZA/niYup3vgSyZW4pkFFHsio4ueZPFWDFoVpQPbBJdAcWRCIEU1kgPNrayvFWcLVwTpwYD642kECQx3CDTMYz2qBHV0kqMdDNUeEYoAmtj/xE8SCub/FqjhJ1HMI/nWEq1jgB8MPuwXbPiVz24FE1adGTC2RQ5b2GhvNA6kLLfo7/ZmvPuP5hniWNphSs1UC7Vj/b2+g/zPP6apArp89fKYDUipQ/srrUXRVo7g0TADqTx+/XiyY92dGjmGoTDMiLJc3bSGMhoBwulEx2aQd5g4cBl2FE6XF0YizgO58OfpsUScwWo7CduDHXzXOPofp8hI1SSN/qbgblG2wKJv0dvg7U/59mbzdCuBFpYkX2IHWqIz5JWQTG1eIOiO19dksgyHD2sv/l0TBqozRvd8uiCeLe/Szzygb/IjJEXz3XRaGR0OkBYGOoMEYpNwtBX6NugBKLscId8hBBUKCrDzln4SUtalU3Lhm+/jZIACxe23V1DRW1cl7HHh8+qD7ZnMGBRBg4bd768XeFzsvVqOSAjnx8FlBGsrpf9GUoGDXQkCUTL3aur9WnrwEKUSTZiMMpXk5oNbpA6PrzMjBbTlfg6oVCARifOSapSQcLdY/kAFriwFb/K03Yt/S5/JKMICAlgAZV87j9cLh49UKPGABB6qWBeVjzoa6Ex/90WKQQiT/RL6tOQIpoE2ShUHGhb5rK0DoS7v0MgCGxHJhndJH8HLvSKWWCbvG01UdR4hq4pMpYG65tpvNRXs9tjLmlz9WgGhrY9yUOQwAALt/VS5+UajsOKdinvQETrnIUpRP+mVVchQ9Oe03qB3AxhiQOd8eFcy1aVRucjmigN8AUVMv98EleTZUZNjxZrZ0sHIS1me7SqFwdMecslS6gbDAA5XCZlMj8pnJVWczlqO8F/lcYsQ8yoPMggzGQaFGmFJT9xy6vOF8p39ilt7fzw334nQFhkZW3aD2qYZXSVQSATt07olMYnDOWvh/2jp9TGxKeCzcuCkmfD03N0yl2CFxUoFKrJqx/g2Skl713SFhmVHQXaJQmOHrW9DPIT+o6AHbibo1zq8Pafx/odf65Hc03iF34fcNQMJ4LPkHa6jBU4bG+1X6MZuwSsbQaBBcWXhKd9OnfqWIbZNzFuMETiZw5b03srqUWhb48Fqye2wkZLCIavygcKf6rraNLE47i0E8IkcKER/N/ebBXy+inqv/LCREjjDeLn+dittz8GFKsGCP35hoRCkawS/tFl209JQSovFY/DNcVcic0ZrM6JhDgkbBEe4/MN4bHfEfKgWwNgcNGnux6MozK/TWe8QxkBFuTlFJFsJxkP0G3xqH8LtgFKwvzHDMXw10smqgDRdX0SB52N35lSiGwsctgt2m/Qw48gjk2/qZ68tyFKFFKz0Q0=",
        type: "nft"
      }
    }
  },
  mainnet: {
    o1js: "2.2.0",
    vk: {
      NFT: {
        hash: "9754802211789498812705502485011240651744182275724373875129409800585031516514",
        data: "AACnf0n+FP7zsnb8jbeQqzefb+MbHO98oWaJ6Kt63aUyFkMiZhUpe8JGkMm0MDDjxQVXFyoZkxxcDlAsOzvP0cQbRlDF3fTLacRws5Wj23sovdoMwaBRLlt8prWQZsAKThVaAWzuqAzXCtHUQQMjpJmg97+f0Dn1dMPE6yQIzFlzOu7/wIYrU9psNvIK9lVlzyQAH57sDimfGsrBzYHRMrUMDiJbDwUoDzPAcAPMnFAyJDmOkalVGdN8aMUFKWPnZAttaAgcFw3m1u8UGlEG4h+uhV2blcceVFzZV/UHWO4NPgsQIF6les+iAhbLl5hwMFodFegoprf8V1sFJv63u/8VoACUDc4af30GG3lO0/Lx7XFuxzWiZnGTKGJceqszwBofYrT5zCce9vqy22qUQrctCYRNTEKzi9Lix3rPesMRFpK3KJ9zz9A2l4+8LGWsUfkOrxHs9GVB3Le9J8ZSA30MVxpiW5aWUjB4AqO1zkkPX6CX8EsMtiBqmEfQvAVTEj5lXvqVE+rXdYi9K3kJaqZ7d2EJu7LBqljcvIgmAYXpO1z5hfcZ8Bqkw4UqHgekpEt7hCIYQUt5o0G/RiKBsJwTALuYQTieGc+BGxXBen/uL9pziNjvmcdzcDiYDKvylCYUffsxwLsejHEPzvAdAX4CAgmKXV3NtyEPXZI5CyC9cSi39DR/fpnh49FzRlavidF5uMzPGCYEvfYrlik0E+NhCXQ/c2Pi5/USaQPzfKTPQXQ87yR3atCb1JpMu5oytXM0U6Vrd/J1uH1MhDUKqFvWJFB+tTbLYQompUDkxjRhuQ0evOOfsb+5+t/MC5g9fol3ukycMo/ReVDPvyYdSqs0L3091DN2EQp6G3gvxzbrSCkrSSGYUXaJ9s3jWH8YFLM0S1ydolT9ve1BgkbZk0yIqnh1pKAcDnzoz6q/BBn9DBxH4q9mVZJ4CTBewlFEJil3xilOaGse8k7D3BP9ofuHIrQwkdZA/niYup3vgSyZW4pkFFHsio4ueZPFWDFoVpQPbiCRvqSiDvqzLgqVDwbJwiKiwVlP4srqjIgJchjlDx1iC26fJ8QP5v9NxIjUw8GeCkSOZOMW25fAGbVk5WHeDndY+ZGt82xmXJ9zWD5P8+OvJ+Rs1Jfw18lWSocMwaMCGsQU7dx2ZQ3wgmuCZY3we/ggwwRURjh/HrRKS7XtzB7p89fKYDUipQ/srrUXRVo7g0TADqTx+/XiyY92dGjmGoTDMiLJc3bSGMhoBwulEx2aQd5g4cBl2FE6XF0YizgO58OfpsUScwWo7CduDHXzXOPofp8hI1SSN/qbgblG2wKJv0dvg7U/59mbzdCuBFpYkX2IHWqIz5JWQTG1eIOiO19dksgyHD2sv/l0TBqozRvd8uiCeLe/Szzygb/IjJEXz3XRaGR0OkBYGOoMEYpNwtBX6NugBKLscId8hBBUKCrDzln4SUtalU3Lhm+/jZIACxe23V1DRW1cl7HHh8+qD7ZnMGBRBg4bd768XeFzsvVqOSAjnx8FlBGsrpf9GUoGDXQkCUTL3aur9WnrwEKUSTZiMMpXk5oNbpA6PrzMjBbTlfg6oVCARifOSapSQcLdY/kAFriwFb/K03Yt/S5/JKMICAlgAZV87j9cLh49UKPGABB6qWBeVjzoa6Ex/90WKQQiT/RL6tOQIpoE2ShUHGhb5rK0DoS7v0MgCGxHJhndJH8HLvSKWWCbvG01UdR4hq4pMpYG65tpvNRXs9tjLmlz9WgGhrY9yUOQwAALt/VS5+UajsOKdinvQETrnIUpRP+mVVchQ9Oe03qB3AxhiQOd8eFcy1aVRucjmigN8AUVMv98EleTZUZNjxZrZ0sHIS1me7SqFwdMecslS6gbDAA5XCZlMj8pnJVWczlqO8F/lcYsQ8yoPMggzGQaFGmFJT9xy6vOF8p39ilt7fzw334nQFhkZW3aD2qYZXSVQSATt07olMYnDOWvh/2jp9TGxKeCzcuCkmfD03N0yl2CFxUoFKrJqx/g2Skl713SFhmVHQXaJQmOHrW9DPIT+o6AHbibo1zq8Pafx/odf65Hc03iF34fcNQMJ4LPkHa6jBU4bG+1X6MZuwSsbQaBBcWXhKd9OnfqWIbZNzFuMETiZw5b03srqUWhb48Fqye2wkZLCIavygcKf6rraNLE47i0E8IkcKER/N/ebBXy+inqv/LCREjjDeLn+dittz8GFKsGCP35hoRCkawS/tFl209JQSovFY/DNcVcic0ZrM6JhDgkbBEe4/MN4bHfEfKgWwNgcNGnux6MozK/TWe8QxkBFuTlFJFsJxkP0G3xqH8LtgFKwvzHDMXw10smqgDRdX0SB52N35lSiGwsctgt2m/Qw48gjk2/qZ68tyFKFFKz0Q0=",
        type: "nft"
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
  adminContractAddressNotSet: "Admin contract address is not set",
  onlyOwnerCanUpgradeVerificationKey: "Only owner can upgrade verification key"
};
function CollectionFactory(params) {
  const { adminContract, ownerContract, approvalContract } = params;
  class Collection2 extends import_o1js10.TokenContract {
    constructor() {
      super(...arguments);
      this.collectionName = (0, import_o1js10.State)();
      this.creator = (0, import_o1js10.State)();
      this.admin = (0, import_o1js10.State)();
      this.baseURL = (0, import_o1js10.State)();
      this.packedData = (0, import_o1js10.State)();
      this.events = {
        mint: MintEvent,
        update: import_o1js10.PublicKey,
        transfer: TransferEvent,
        approve: ApproveEvent,
        offer: OfferEvent,
        sale: SaleEvent,
        buy: BuyEvent,
        approveBuy: BuyEvent,
        approveOffer: OfferEvent,
        approveSale: SaleEvent,
        approveTransfer: TransferEvent,
        approveMint: MintEvent,
        approveUpdate: import_o1js10.PublicKey,
        upgradeNFTVerificationKey: UpgradeVerificationKeyEvent,
        upgradeVerificationKey: import_o1js10.Field,
        limitMinting: LimitMintingEvent,
        pause: PauseEvent,
        resume: PauseEvent,
        pauseNFT: PauseNFTEvent,
        resumeNFT: PauseNFTEvent,
        ownershipChange: OwnershipChangeEvent,
        setName: import_o1js10.Field,
        setBaseURL: import_o1js10.Field,
        setRoyaltyFee: import_o1js10.UInt32,
        setTransferFee: import_o1js10.UInt64,
        setAdmin: import_o1js10.PublicKey
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
        ...import_o1js10.Permissions.default(),
        // Allow the upgrade authority to set the verification key
        // even when there is no protocol upgrade
        setVerificationKey: import_o1js10.Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: import_o1js10.Permissions.impossible(),
        access: import_o1js10.Permissions.proof(),
        send: import_o1js10.Permissions.proof(),
        setZkappUri: import_o1js10.Permissions.none(),
        setTokenSymbol: import_o1js10.Permissions.none()
      });
    }
    /**
     * Initializes the collection with a master NFT and initial data.
     *
     * @param masterNFT - The master NFT parameters.
     * @param collectionData - Initial collection data including flags and configurations.
     */
    async initialize(masterNFT, collectionData) {
      this.account.provedState.requireEquals((0, import_o1js10.Bool)(false));
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
    /**
     * Retrieves the Admin Contract instance.
     *
     * @returns The Admin Contract instance implementing NFTAdminBase.
     */
    getAdminContract() {
      const admin = this.admin.getAndRequireEquals();
      const AdminContract = adminContract();
      return new AdminContract(admin);
    }
    /**
     * Retrieves the NFT Owner Contract instance.
     *
     * @returns The Owner Contract instance implementing NFTOwnerBase.
     */
    getOwnerContract(address) {
      const OwnerContract = ownerContract();
      return new OwnerContract(address);
    }
    /**
     * Retrieves the NFT Approval Contract instance.
     *
     * @returns The Approval Contract instance implementing NFTApprovalBase.
     */
    getApprovalContract(address) {
      const ApprovalContract = approvalContract();
      return new ApprovalContract(address);
    }
    /**
     * Ensures that the transaction is authorized by the creator.
     *
     * @returns The AccountUpdate of the creator.
     */
    async ensureCreatorSignature() {
      const creator = this.creator.getAndRequireEquals();
      const creatorUpdate = import_o1js10.AccountUpdate.createSigned(creator);
      creatorUpdate.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      return creatorUpdate;
    }
    /**
     * Ensures that the transaction is authorized by the NFT owner
     *
     * @returns The AccountUpdate of the NFT owner.
     */
    async ensureOwnerSignature(owner) {
      const ownerUpdate = import_o1js10.AccountUpdate.createSigned(owner);
      ownerUpdate.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      return ownerUpdate;
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
      const creatorUpdate = await this.ensureCreatorSignature();
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
      const { name, address, data, metadata, storage, metadataVerificationKeyHash, expiry } = params2;
      this.network.globalSlotSinceGenesis.requireBetween(import_o1js10.UInt32.zero, expiry);
      data.version.assertEquals(import_o1js10.UInt32.zero);
      const packedData = data.pack();
      const tokenId = this.deriveTokenId();
      const update = import_o1js10.AccountUpdate.createSigned(address, tokenId);
      update.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      update.account.isNew.getAndRequireEquals().assertTrue();
      this.internal.mint({ address: update, amount: 1e9 });
      const verificationKey = import_o1js10.Provable.witness(import_o1js10.VerificationKey, () => {
        const networkId = import_o1js10.Mina.getNetworkId() === "mainnet" ? "mainnet" : "devnet";
        const verificationKey2 = new import_o1js10.VerificationKey({
          data: nftVerificationKeys[networkId].vk.NFT.data,
          hash: (0, import_o1js10.Field)(nftVerificationKeys[networkId].vk.NFT.hash)
        });
        const vkHash = NFT._verificationKey?.hash;
        if (!verificationKey2 || !verificationKey2.hash || !verificationKey2.data)
          throw Error("NFT verification key is incorrect");
        if (vkHash && vkHash.equals(verificationKey2.hash).toBoolean() === false)
          throw Error("NFT verification key does not match the compiled verification key");
        return verificationKey2;
      });
      const mainnetVerificationKeyHash = (0, import_o1js10.Field)(nftVerificationKeys.mainnet.vk.NFT.hash);
      const devnetVerificationKeyHash = (0, import_o1js10.Field)(nftVerificationKeys.devnet.vk.NFT.hash);
      const isMainnet = import_o1js10.Provable.witness(import_o1js10.Bool, () => {
        return (0, import_o1js10.Bool)(import_o1js10.Mina.getNetworkId() === "mainnet");
      });
      verificationKey.hash.assertEquals(import_o1js10.Provable.if(isMainnet, mainnetVerificationKeyHash, devnetVerificationKeyHash));
      update.body.update.verificationKey = {
        isSome: (0, import_o1js10.Bool)(true),
        value: verificationKey
      };
      update.body.update.permissions = {
        isSome: (0, import_o1js10.Bool)(true),
        value: {
          ...import_o1js10.Permissions.default(),
          send: import_o1js10.Permissions.proof(),
          // Allow the upgrade authority to set the verification key
          // even when there is no protocol upgrade
          setVerificationKey: import_o1js10.Permissions.VerificationKey.proofDuringCurrentVersion(),
          setPermissions: import_o1js10.Permissions.impossible(),
          access: import_o1js10.Permissions.proof(),
          setZkappUri: import_o1js10.Permissions.none(),
          setTokenSymbol: import_o1js10.Permissions.none()
        }
      };
      const initialState = new NFTStateStruct({
        name,
        metadata,
        storage,
        packedData,
        metadataVerificationKeyHash
      });
      update.body.update.appState = NFTStateStruct.toFields(initialState).map((field) => ({
        isSome: (0, import_o1js10.Bool)(true),
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
      metadataVerificationKeyHash.assertEquals(vk.hash);
      proof.verify(vk);
    }
    /**
     * Transfers ownership of an NFT from contract without admin approval using a proof.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async transferByProof(params2) {
      const { address, from, to, price } = params2;
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertFalse(CollectionErrors.transferApprovalRequired);
      const transferEventDraft = new TransferEvent({
        from,
        to,
        collection: this.address,
        nft: address,
        fee: UInt64Option.none(),
        // will be added later
        price,
        transferByOwner: (0, import_o1js10.Bool)(false),
        // will be added later
        approved: import_o1js10.PublicKey.empty()
        // will be added later
      });
      const transferEvent = await this._transfer({
        transferEventDraft,
        transferFee: collectionData.transferFee,
        royaltyFee: collectionData.royaltyFee
      });
      const approvalContract2 = this.getApprovalContract(from);
      const canTransfer = await approvalContract2.canTransfer(transferEvent);
      canTransfer.assertTrue();
    }
    // /**
    //  * Transfers ownership of an NFT from contract with admin approval.
    //  *
    //  * @param address - The address of the NFT.
    //  * @param to - The recipient's public key.
    //  */
    // @method async transferByProofWithApproval(
    //   address: PublicKey,
    //   from: PublicKey,
    //   to: PublicKey,
    //   price: UInt64Option
    // ): Promise<void> {
    //   const collectionData = await this.ensureNotPaused();
    //   collectionData.requireTransferApproval.assertTrue(
    //     CollectionErrors.transferApprovalNotRequired
    //   );
    //   const ownerContract = this.getOwnerContract(from);
    //   const canTransferApprovalByOwner = await ownerContract.canTransfer(
    //     this.address,
    //     address,
    //     to,
    //     price
    //   );
    //   canTransferApprovalByOwner.assertTrue();
    //   const event = await this._transfer(
    //     address,
    //     from,
    //     to,
    //     price,
    //     collectionData.transferFee,
    //     collectionData.royaltyFee
    //   );
    //   const adminContract = this.getAdminContract();
    //   const canTransferApprovalByAdmin = await adminContract.canTransfer(
    //     address,
    //     from,
    //     to,
    //     price
    //   );
    //   canTransferApprovalByAdmin.assertTrue();
    //   this.emitEvent("approveTransfer", event);
    // }
    /**
     * Transfers ownership of an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async approveAddress(nftAddress, approved) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(nftAddress, tokenId);
      const owner = await nft.approveAddress(approved);
      await this.ensureOwnerSignature(owner);
      this.emitEvent("approve", new ApproveEvent({ nftAddress, approved }));
    }
    /**
     * Transfers ownership of an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async approveAddressByProof(nftAddress, approved) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(nftAddress, tokenId);
      const owner = await nft.approveAddress(approved);
      const ownerContract2 = this.getOwnerContract(owner);
      const canApprove = await ownerContract2.canApproveAddress(this.address, nftAddress, approved);
      canApprove.assertTrue();
      this.emitEvent("approve", new ApproveEvent({ nftAddress, approved }));
    }
    /**
     * Transfers ownership of an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async transferNFT(address, to, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertFalse(CollectionErrors.transferApprovalRequired);
      const transferEventDraft = new TransferEvent({
        from: import_o1js10.PublicKey.empty(),
        // will be added later
        to,
        collection: this.address,
        nft: address,
        fee: UInt64Option.none(),
        // will be added later
        price,
        transferByOwner: (0, import_o1js10.Bool)(false),
        // will be added later
        approved: import_o1js10.PublicKey.empty()
        // will be added later
      });
      await this._transfer({
        transferEventDraft,
        transferFee: collectionData.transferFee,
        royaltyFee: collectionData.royaltyFee
      });
    }
    /**
     * Transfers ownership of an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    async transferNFTWithApproval(address, to, price) {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertTrue(CollectionErrors.transferApprovalNotRequired);
      const transferEventDraft = new TransferEvent({
        from: import_o1js10.PublicKey.empty(),
        // will be added later
        to,
        collection: this.address,
        nft: address,
        fee: UInt64Option.none(),
        // will be added later
        price,
        transferByOwner: (0, import_o1js10.Bool)(false),
        // will be added later
        approved: import_o1js10.PublicKey.empty()
        // will be added later
      });
      const transferEvent = await this._transfer({
        transferEventDraft,
        transferFee: collectionData.transferFee,
        royaltyFee: collectionData.royaltyFee
      });
      const adminContract2 = this.getAdminContract();
      const canTransfer = await adminContract2.canTransfer(transferEvent);
      canTransfer.assertTrue();
      this.emitEvent("approveTransfer", transferEvent);
    }
    /**
     * Internal method to transfer an NFT.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     * @param transferFee - The transfer fee amount.
     * @returns The TransferEvent emitted.
     */
    async _transfer(params2) {
      const { transferEventDraft, transferFee, royaltyFee } = params2;
      const sender = this.sender.getUnconstrained();
      const isFromEmpty = transferEventDraft.from.equals(import_o1js10.PublicKey.empty());
      transferEventDraft.from = import_o1js10.Provable.if(isFromEmpty, sender, transferEventDraft.from);
      const tokenId = this.deriveTokenId();
      const nft = new NFT(transferEventDraft.nft, tokenId);
      const transferEvent = await nft.transfer(transferEventDraft);
      const creator = this.creator.getAndRequireEquals();
      let fee = import_o1js10.Provable.if(
        transferEventDraft.price.isSome,
        // We cannot check the price here, so we just rely on owner contract
        // Malicious owner contracts can be blocked by the admin contract
        // or by setting the transfer fee to a higher value reflecting the market price
        transferEventDraft.price.orElse(1000000000n).div(1e5).mul(import_o1js10.UInt64.from(royaltyFee)),
        transferFee
      );
      const isOwnedByCreator = transferEvent.from.equals(creator);
      fee = import_o1js10.Provable.if(
        isOwnedByCreator,
        import_o1js10.UInt64.zero,
        // The minimum fee is the transfer fee
        import_o1js10.Provable.if(fee.lessThanOrEqual(transferFee), transferFee, fee)
      );
      const senderUpdate = import_o1js10.AccountUpdate.createIf(fee.equals(import_o1js10.UInt64.zero).not().or(isFromEmpty), sender);
      senderUpdate.requireSignature();
      senderUpdate.body.useFullCommitment = (0, import_o1js10.Bool)(true);
      senderUpdate.account.balance.requireBetween(transferEventDraft.price.orElse(fee), import_o1js10.UInt64.MAXINT());
      senderUpdate.send({
        to: this.creator.getAndRequireEquals(),
        amount: fee
      });
      transferEventDraft.fee = UInt64Option.fromValue({
        value: fee,
        isSome: isOwnedByCreator.not()
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
      await this._upgrade(address, vk);
    }
    /**
     * Upgrades the verification key of a specific NFT by Proof.
     *
     * @param address - The address of the NFT.
     * @param vk - The new verification key.
     */
    async upgradeNFTVerificationKeyByProof(address, vk) {
      const { data } = await this._upgrade(address, vk);
      const ownerContract2 = this.getOwnerContract(data.owner);
      const canUpgrade = await ownerContract2.canChangeVerificationKey(this.address, address, vk);
      canUpgrade.assertTrue();
    }
    async _upgrade(address, vk) {
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      const sender = this.sender.getAndRequireSignature();
      const creator = this.creator.getAndRequireEquals();
      creator.equals(sender).or(collectionData.requireCreatorSignatureToUpgradeNFT.not()).assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeNFT);
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const adminContract2 = this.getAdminContract();
      const canUpgrade = await adminContract2.canChangeVerificationKey(vk, address, tokenId);
      canUpgrade.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
      const data = await nft.upgradeVerificationKey(vk);
      const event = new UpgradeVerificationKeyEvent({
        address,
        tokenId,
        verificationKeyHash: vk.hash
      });
      this.emitEvent("upgradeNFTVerificationKey", event);
      return { data, sender };
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
      const adminContract2 = this.getAdminContract();
      const canUpgrade = await adminContract2.canChangeVerificationKey(vk, this.address, this.tokenId);
      canUpgrade.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
      this.account.verificationKey.set(vk);
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }
    /**
     * Limits further minting of NFTs in the collection.
     */
    async limitMinting() {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint = (0, import_o1js10.Bool)(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent("limitMinting", new LimitMintingEvent({ mintingLimited: (0, import_o1js10.Bool)(true) }));
    }
    /**
     * Pauses the collection, disabling certain actions.
     */
    async pause() {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToPause);
      collectionData.isPaused = (0, import_o1js10.Bool)(true);
      this.packedData.set(collectionData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: (0, import_o1js10.Bool)(true) }));
    }
    /**
     * Resumes the collection, re-enabling actions.
     */
    async resume() {
      await this.ensureCreatorSignature();
      const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToResume);
      collectionData.isPaused.assertTrue(CollectionErrors.collectionNotPaused);
      collectionData.isPaused = (0, import_o1js10.Bool)(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: (0, import_o1js10.Bool)(false) }));
    }
    /**
     * Pauses a specific NFT, disabling its actions.
     *
     * @param address - The address of the NFT to pause.
     */
    async pauseNFT(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const owner = await nft.pause();
      await this.ensureOwnerSignature(owner);
      this.emitEvent("pauseNFT", new PauseNFTEvent({ isPaused: (0, import_o1js10.Bool)(true), address }));
    }
    /**
     * Pauses a specific NFT, disabling its actions.
     *
     * @param address - The address of the NFT to pause.
     */
    async pauseNFTByProof(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const owner = await nft.pause();
      const ownerContract2 = this.getOwnerContract(owner);
      const canPause = await ownerContract2.canPause(this.address, address);
      canPause.assertTrue();
      this.emitEvent("pauseNFT", new PauseNFTEvent({ isPaused: (0, import_o1js10.Bool)(true), address }));
    }
    /**
     * Resumes a specific NFT, re-enabling its actions.
     *
     * @param address - The address of the NFT to resume.
     */
    async resumeNFT(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const owner = await nft.resume();
      await this.ensureOwnerSignature(owner);
      this.emitEvent("resumeNFT", new PauseNFTEvent({ isPaused: (0, import_o1js10.Bool)(false), address }));
    }
    /**
     * Resumes a specific NFT, re-enabling its actions.
     *
     * @param address - The address of the NFT to resume.
     */
    async resumeNFTByProof(address) {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const owner = await nft.resume();
      const ownerContract2 = this.getOwnerContract(owner);
      const canResume = await ownerContract2.canResume(this.address, address);
      canResume.assertTrue();
      this.emitEvent("resumeNFT", new PauseNFTEvent({ isPaused: (0, import_o1js10.Bool)(false), address }));
    }
    /**
     * Sets a new name for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setName' event with the new name.
     *
     * @param name - The new name for the collection as a Field value
     * @throws {Error} If caller lacks permission to change name
     */
    async setName(name) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeName.assertTrue(CollectionErrors.noPermissionToChangeName);
      this.collectionName.set(name);
      this.emitEvent("setName", name);
    }
    /**
     * Updates the base URL for the collection's metadata.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setBaseURL' event with the new URL.
     *
     * @param baseURL - The new base URL as a Field value
     * @throws {Error} If caller lacks permission to change base URI
     */
    async setBaseURL(baseURL) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeBaseUri.assertTrue(CollectionErrors.noPermissionToChangeBaseUri);
      this.baseURL.set(baseURL);
      this.emitEvent("setBaseURL", baseURL);
    }
    /**
     * Sets a new admin address for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setAdmin' event with the new admin address.
     *
     * @param admin - The public key of the new admin
     * @throws {Error} If caller lacks permission to set admin
     */
    async setAdmin(admin) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canSetAdmin.assertTrue(CollectionErrors.noPermissionToSetAdmin);
      this.admin.set(admin);
      this.emitEvent("setAdmin", admin);
    }
    /**
     * Updates the royalty fee for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setRoyaltyFee' event with the new fee.
     *
     * @param royaltyFee - The new royalty fee as a UInt32 value
     * @throws {Error} If caller lacks permission to change royalty fee
     */
    async setRoyaltyFee(royaltyFee) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeRoyalty.assertTrue(CollectionErrors.noPermissionToChangeRoyalty);
      collectionData.royaltyFee = royaltyFee;
      this.packedData.set(collectionData.pack());
      this.emitEvent("setRoyaltyFee", royaltyFee);
    }
    /**
     * Updates the transfer fee for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setTransferFee' event with the new fee.
     *
     * @param transferFee - The new transfer fee as a UInt64 value
     * @throws {Error} If caller lacks permission to change transfer fee
     */
    async setTransferFee(transferFee) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeTransferFee.assertTrue(CollectionErrors.noPermissionToChangeTransferFee);
      collectionData.transferFee = transferFee;
      this.packedData.set(collectionData.pack());
      this.emitEvent("setTransferFee", transferFee);
    }
    /**
     * Transfers ownership of the collection to a new owner.
     *
     * @param to - The public key of the new owner.
     * @returns The public key of the old owner.
     */
    async transferOwnership(to) {
      await this.ensureCreatorSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeCreator.assertTrue(CollectionErrors.noPermissionToChangeCreator);
      const from = this.creator.getAndRequireEquals();
      this.creator.set(to);
      this.emitEvent("ownershipChange", new OwnershipChangeEvent({
        from,
        to
      }));
      return from;
    }
  }
  (0, import_tslib5.__decorate)([
    (0, import_o1js10.state)(import_o1js10.Field),
    (0, import_tslib5.__metadata)("design:type", Object)
  ], Collection2.prototype, "collectionName", void 0);
  (0, import_tslib5.__decorate)([
    (0, import_o1js10.state)(import_o1js10.PublicKey),
    (0, import_tslib5.__metadata)("design:type", Object)
  ], Collection2.prototype, "creator", void 0);
  (0, import_tslib5.__decorate)([
    (0, import_o1js10.state)(import_o1js10.PublicKey),
    (0, import_tslib5.__metadata)("design:type", Object)
  ], Collection2.prototype, "admin", void 0);
  (0, import_tslib5.__decorate)([
    (0, import_o1js10.state)(import_o1js10.Field),
    (0, import_tslib5.__metadata)("design:type", Object)
  ], Collection2.prototype, "baseURL", void 0);
  (0, import_tslib5.__decorate)([
    (0, import_o1js10.state)(import_o1js10.Field),
    (0, import_tslib5.__metadata)("design:type", Object)
  ], Collection2.prototype, "packedData", void 0);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [MintParams, CollectionData]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "initialize", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [MintParams]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "mintByCreator", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [MintRequest]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "mint", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      NFTUpdateProof,
      import_o1js10.VerificationKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "update", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      NFTUpdateProof,
      import_o1js10.VerificationKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "updateWithApproval", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [TransferParams]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferByProof", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.PublicKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "approveAddress", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.PublicKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "approveAddressByProof", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.PublicKey,
      UInt64Option
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferNFT", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.PublicKey,
      UInt64Option
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferNFTWithApproval", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.VerificationKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "upgradeNFTVerificationKey", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [
      import_o1js10.PublicKey,
      import_o1js10.VerificationKey
    ]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "upgradeNFTVerificationKeyByProof", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.VerificationKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "upgradeVerificationKey", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", []),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "limitMinting", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", []),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "pause", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", []),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "resume", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "pauseNFT", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "pauseNFTByProof", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "resumeNFT", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "resumeNFTByProof", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.Field]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "setName", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.Field]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "setBaseURL", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "setAdmin", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.UInt32]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "setRoyaltyFee", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method,
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.UInt64]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "setTransferFee", null);
  (0, import_tslib5.__decorate)([
    import_o1js10.method.returns(import_o1js10.PublicKey),
    (0, import_tslib5.__metadata)("design:type", Function),
    (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js10.PublicKey]),
    (0, import_tslib5.__metadata)("design:returntype", Promise)
  ], Collection2.prototype, "transferOwnership", null);
  return Collection2;
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

// dist/node/zkprogram/update.js
var import_o1js14 = require("o1js");
var NFTProgram = (0, import_o1js14.ZkProgram)({
  name: "NFTProgram",
  publicInput: NFTState,
  publicOutput: NFTState,
  methods: {
    /**
     * Inserts a metadata key-value pair into the NFT's metadata map.
     *
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
      privateInputs: [MetadataMap, import_o1js14.Field, import_o1js14.Field, import_o1js14.Signature],
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
            approved: initialState.approved,
            name: initialState.name,
            storage: initialState.storage,
            isPaused: initialState.isPaused,
            version: initialState.version.add(1),
            metadataVerificationKeyHash: initialState.metadataVerificationKeyHash,
            creator: initialState.creator,
            oracle: initialState.oracle
          }),
          auxiliaryOutput: metadata
        };
      }
    },
    /**
     * Merges two self-proofs to produce a new NFT state.
     *
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
      privateInputs: [import_o1js14.SelfProof, import_o1js14.SelfProof],
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

// dist/node/marketplace/bid.js
var import_tslib7 = require("tslib");
var import_o1js17 = require("o1js");
var import_storage6 = require("@minatokens/storage");

// dist/node/contracts.js
var import_upgradable2 = require("@minatokens/upgradable");

// dist/node/marketplace/offer.js
var import_tslib6 = require("tslib");
var import_o1js15 = require("o1js");
function OfferFactory(params) {
  const { collectionContract } = params;
  class NonFungibleTokenOfferContract extends import_o1js15.SmartContract {
    constructor() {
      super(...arguments);
      this.owner = (0, import_o1js15.State)();
      this.price = (0, import_o1js15.State)();
      this.collection = (0, import_o1js15.State)();
      this.nft = (0, import_o1js15.State)();
      this.insideBuy = (0, import_o1js15.State)();
      this.events = {
        buy: TransferEvent
      };
    }
    async deploy(args) {
      await super.deploy(args);
      this.owner.set(args.owner);
      this.price.set(args.price);
      this.collection.set(args.collection);
      this.nft.set(args.nft);
      this.insideBuy.set((0, import_o1js15.Bool)(false));
      this.account.permissions.set({
        ...import_o1js15.Permissions.default(),
        send: import_o1js15.Permissions.proof(),
        setVerificationKey: import_o1js15.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
        setPermissions: import_o1js15.Permissions.impossible()
      });
    }
    getCollectionContract(address) {
      const CollectionContract = collectionContract();
      return new CollectionContract(address);
    }
    async buy() {
      const insideBuy = this.insideBuy.getAndRequireEquals();
      insideBuy.assertFalse("Already inside buy method");
      this.insideBuy.set((0, import_o1js15.Bool)(true));
      const collectionAddress = this.collection.getAndRequireEquals();
      const nftAddress = this.nft.getAndRequireEquals();
      const price = this.price.getAndRequireEquals();
      const collection = this.getCollectionContract(collectionAddress);
      await collection.transferByProof({
        address: nftAddress,
        from: this.address,
        to: this.sender.getUnconstrained(),
        price: UInt64Option.fromValue(price)
      });
    }
    // @method async sellWithApproval(nftAddress: NFTAddress, price: UInt64) {
    //   await this._sell(nftAddress, price);
    //   const buyer = this.buyer.getAndRequireEquals();
    //   const collection = new Collection(nftAddress.collection);
    //   await collection.sellWithApproval(nftAddress.nft, price, buyer);
    // }
    async canTransfer(transferEvent) {
      this.insideBuy.requireEquals((0, import_o1js15.Bool)(true));
      const collectionAddress = this.collection.getAndRequireEquals();
      const nftAddress = this.nft.getAndRequireEquals();
      const owner = this.owner.getAndRequireEquals();
      const price = this.price.getAndRequireEquals();
      transferEvent.collection.assertEquals(collectionAddress);
      transferEvent.nft.assertEquals(nftAddress);
      transferEvent.from.assertEquals(owner);
      transferEvent.approved.assertEquals(this.address);
      transferEvent.price.assertSome().assertEquals(price);
      transferEvent.from.assertEquals(owner);
      transferEvent.fee.orElse(import_o1js15.UInt64.zero).assertLessThan(price, "Fee is too high");
      const payment = price.sub(transferEvent.fee.orElse(import_o1js15.UInt64.zero));
      const sender = this.sender.getUnconstrained();
      const senderUpdate = import_o1js15.AccountUpdate.createSigned(sender);
      transferEvent.to.assertEquals(sender);
      senderUpdate.account.balance.requireBetween(payment, import_o1js15.UInt64.MAXINT());
      senderUpdate.balance.subInPlace(payment);
      const ownerUpdate = import_o1js15.AccountUpdate.create(owner);
      ownerUpdate.balance.addInPlace(payment);
      senderUpdate.body.useFullCommitment = (0, import_o1js15.Bool)(true);
      ownerUpdate.body.useFullCommitment = (0, import_o1js15.Bool)(true);
      this.emitEvent("buy", transferEvent);
      return (0, import_o1js15.Bool)(true);
    }
  }
  (0, import_tslib6.__decorate)([
    (0, import_o1js15.state)(import_o1js15.PublicKey),
    (0, import_tslib6.__metadata)("design:type", Object)
  ], NonFungibleTokenOfferContract.prototype, "owner", void 0);
  (0, import_tslib6.__decorate)([
    (0, import_o1js15.state)(import_o1js15.UInt64),
    (0, import_tslib6.__metadata)("design:type", Object)
  ], NonFungibleTokenOfferContract.prototype, "price", void 0);
  (0, import_tslib6.__decorate)([
    (0, import_o1js15.state)(import_o1js15.PublicKey),
    (0, import_tslib6.__metadata)("design:type", Object)
  ], NonFungibleTokenOfferContract.prototype, "collection", void 0);
  (0, import_tslib6.__decorate)([
    (0, import_o1js15.state)(import_o1js15.PublicKey),
    (0, import_tslib6.__metadata)("design:type", Object)
  ], NonFungibleTokenOfferContract.prototype, "nft", void 0);
  (0, import_tslib6.__decorate)([
    (0, import_o1js15.state)(import_o1js15.Bool),
    (0, import_tslib6.__metadata)("design:type", Object)
  ], NonFungibleTokenOfferContract.prototype, "insideBuy", void 0);
  (0, import_tslib6.__decorate)([
    import_o1js15.method,
    (0, import_tslib6.__metadata)("design:type", Function),
    (0, import_tslib6.__metadata)("design:paramtypes", []),
    (0, import_tslib6.__metadata)("design:returntype", Promise)
  ], NonFungibleTokenOfferContract.prototype, "buy", null);
  (0, import_tslib6.__decorate)([
    import_o1js15.method.returns(import_o1js15.Bool),
    (0, import_tslib6.__metadata)("design:type", Function),
    (0, import_tslib6.__metadata)("design:paramtypes", [TransferEvent]),
    (0, import_tslib6.__metadata)("design:returntype", Promise)
  ], NonFungibleTokenOfferContract.prototype, "canTransfer", null);
  return NonFungibleTokenOfferContract;
}

// dist/node/contracts.js
var NFTAdvancedAdmin = NFTAdvancedAdminContract({
  upgradeContract: import_upgradable2.VerificationKeyUpgradeAuthority
});
function NonFungibleTokenContractsFactory(params) {
  const { approvalFactory, adminContract, ownerContract } = params;
  let Collection2;
  let Approval2;
  let Owner2 = ownerContract;
  let Admin2 = adminContract;
  function getCollection() {
    if (!Collection2) {
      throw new Error("Collection constructor not set up yet!");
    }
    return Collection2;
  }
  function getApproval() {
    if (!Approval2) {
      throw new Error("Approval constructor not set up yet!");
    }
    return Approval2;
  }
  Approval2 = approvalFactory({
    collectionContract: getCollection
  });
  Collection2 = CollectionFactory({
    adminContract: () => adminContract,
    ownerContract: () => ownerContract,
    approvalContract: getApproval
  });
  return { Collection: Collection2, Approval: Approval2, Owner: Owner2, Admin: Admin2 };
}
var { Collection, Approval, Owner, Admin } = NonFungibleTokenContractsFactory({
  approvalFactory: OfferFactory,
  adminContract: NFTAdmin,
  ownerContract: NFTStandardOwner
});
var { Collection: AdvancedCollection, Approval: AdvancedApproval, Owner: AdvancedOwner, Admin: AdvancedAdmin } = NonFungibleTokenContractsFactory({
  approvalFactory: OfferFactory,
  adminContract: NFTAdvancedAdmin,
  ownerContract: NFTStandardOwner
});

// dist/node/marketplace/types.js
var import_o1js16 = require("o1js");
var import_storage5 = require("@minatokens/storage");
var NFTAddress = class extends (0, import_o1js16.Struct)({
  collection: import_o1js16.PublicKey,
  nft: import_o1js16.PublicKey
}) {
};
var SellEvent = class extends (0, import_o1js16.Struct)({
  collection: import_o1js16.PublicKey,
  nft: import_o1js16.PublicKey,
  price: import_o1js16.UInt64
}) {
};
var DepositEvent = class extends (0, import_o1js16.Struct)({
  buyer: import_o1js16.PublicKey,
  amount: import_o1js16.UInt64,
  maxPoints: import_o1js16.UInt64
}) {
};
var WithdrawEvent = class extends (0, import_o1js16.Struct)({
  buyer: import_o1js16.PublicKey,
  amount: import_o1js16.UInt64,
  maxPoints: import_o1js16.UInt64
}) {
};
var BidEvent = class extends (0, import_o1js16.Struct)({
  bids: import_o1js16.Field,
  whitelist: import_o1js16.Field,
  storage: import_storage5.Storage
}) {
};

// dist/node/marketplace/bid.js
var Bid = class _Bid extends (0, import_o1js17.Struct)({
  price: import_o1js17.UInt64,
  points: import_o1js17.UInt64
}) {
  pack() {
    return import_o1js17.Field.fromBits([
      ...this.price.value.toBits(64),
      ...this.points.value.toBits(64)
    ]);
  }
  static unpack(field) {
    const bits = field.toBits(64 + 64);
    const price = import_o1js17.UInt64.Unsafe.fromField(import_o1js17.Field.fromBits(bits.slice(0, 64)));
    const points = import_o1js17.UInt64.Unsafe.fromField(import_o1js17.Field.fromBits(bits.slice(64, 64 + 64)));
    return new _Bid({
      price,
      points
    });
  }
};
var NonFungibleTokenBidContract = class extends import_o1js17.SmartContract {
  constructor() {
    super(...arguments);
    this.buyer = (0, import_o1js17.State)();
    this.whitelist = (0, import_o1js17.State)();
    this.bids = (0, import_o1js17.State)();
    this.storage = (0, import_o1js17.State)();
    this.maxPoints = (0, import_o1js17.State)();
    this.consumedPoints = (0, import_o1js17.State)();
    this.events = {
      deposit: DepositEvent,
      withdraw: WithdrawEvent,
      sell: SellEvent,
      updateWhitelist: import_storage6.Whitelist,
      bid: BidEvent
    };
  }
  async deploy(args) {
    await super.deploy(args);
    this.whitelist.set(args.whitelist);
    this.bids.set(args.bids);
    this.storage.set(args.storage);
    this.account.permissions.set({
      ...import_o1js17.Permissions.default(),
      send: import_o1js17.Permissions.proof(),
      setVerificationKey: import_o1js17.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js17.Permissions.impossible()
    });
  }
  async initialize(amount, maxPoints) {
    this.account.provedState.requireEquals((0, import_o1js17.Bool)(false));
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js17.AccountUpdate.createSigned(buyer);
    buyerUpdate.balance.subInPlace(amount.add(import_o1js17.UInt64.from(1e9)));
    this.self.balance.addInPlace(amount);
    buyerUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    this.buyer.set(buyer);
    this.maxPoints.set(maxPoints);
    this.emitEvent("deposit", new DepositEvent({
      buyer,
      amount,
      maxPoints
    }));
  }
  async deposit(amount, maxPoints) {
    amount.equals(import_o1js17.UInt64.from(0)).assertFalse();
    const sender = this.sender.getUnconstrained();
    const buyer = this.buyer.getAndRequireEquals();
    sender.assertEquals(buyer);
    const buyerUpdate = import_o1js17.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount });
    buyerUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    this.maxPoints.set(maxPoints);
    this.emitEvent("deposit", new DepositEvent({
      buyer,
      amount,
      maxPoints
    }));
  }
  async withdraw(amount, maxPoints) {
    amount.equals(import_o1js17.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js17.UInt64.MAXINT());
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js17.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    sender.assertEquals(buyer);
    let bidUpdate = this.send({ to: senderUpdate, amount });
    bidUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    this.maxPoints.set(maxPoints);
    this.emitEvent("withdraw", new WithdrawEvent({
      buyer,
      amount,
      maxPoints
    }));
  }
  async sell(nftAddress, price) {
    await this._sell(nftAddress, price);
    const buyer = this.buyer.getAndRequireEquals();
    const collection = new Collection(nftAddress.collection);
    await collection.transferNFT(nftAddress.nft, buyer, UInt64Option.fromValue(price));
  }
  // @method async sellWithApproval(nftAddress: NFTAddress, price: UInt64) {
  //   await this._sell(nftAddress, price);
  //   const buyer = this.buyer.getAndRequireEquals();
  //   const collection = new Collection(nftAddress.collection);
  //   await collection.sellWithApproval(nftAddress.nft, price, buyer);
  // }
  async _sell(nftAddress, price) {
    price.equals(import_o1js17.UInt64.from(0)).assertFalse();
    const key = import_o1js17.Poseidon.hashPacked(NFTAddress, nftAddress);
    const storage = this.storage.getAndRequireEquals();
    const bids = new import_storage6.OffChainList({
      root: this.bids.getAndRequireEquals(),
      storage
    });
    const bid = Bid.unpack((await bids.getValue(key, "bids")).assertSome("bid not found"));
    price.assertLessThanOrEqual(bid.price, "price is too high");
    this.account.balance.requireBetween(price, import_o1js17.UInt64.MAXINT());
    const consumedPoints = this.consumedPoints.getAndRequireEquals();
    const maxPoints = this.maxPoints.getAndRequireEquals();
    const newConsumedPoints = consumedPoints.add(bid.points);
    newConsumedPoints.assertLessThanOrEqual(maxPoints, "consumed points exceed max points");
    this.consumedPoints.set(newConsumedPoints);
    const seller = this.sender.getUnconstrained();
    const sellerUpdate = import_o1js17.AccountUpdate.createSigned(seller);
    sellerUpdate.balance.addInPlace(price);
    this.self.balance.subInPlace(price);
    sellerUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    const whitelist = new import_storage6.Whitelist({
      list: new import_storage6.OffChainList({
        root: this.whitelist.getAndRequireEquals(),
        storage
      })
    });
    const whitelistedAmount = await whitelist.getWhitelistedAmount(seller, "whitelist");
    const whitelistDisabled = whitelist.isNone();
    whitelistedAmount.isSome.or(whitelistDisabled).assertTrue("Cannot buy from non-whitelisted address");
    const maxPrice = import_o1js17.Provable.if(whitelistDisabled, import_o1js17.UInt64.MAXINT(), whitelistedAmount.value);
    price.assertLessThanOrEqual(maxPrice, "price is higher than whitelisted price");
    this.emitEvent("sell", new SellEvent({
      collection: nftAddress.collection,
      nft: nftAddress.nft,
      price
    }));
  }
  async bid(bids, whitelist, storage) {
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js17.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js17.Bool)(true);
    sender.assertEquals(buyer);
    this.bids.set(bids);
    this.whitelist.set(whitelist);
    this.storage.set(storage);
    this.emitEvent("bid", new BidEvent({ bids, whitelist, storage }));
  }
};
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_o1js17.PublicKey),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "buyer", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_o1js17.Field),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "whitelist", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_o1js17.Field),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "bids", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_storage6.Storage),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "storage", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_o1js17.UInt64),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "maxPoints", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js17.state)(import_o1js17.UInt64),
  (0, import_tslib7.__metadata)("design:type", Object)
], NonFungibleTokenBidContract.prototype, "consumedPoints", void 0);
(0, import_tslib7.__decorate)([
  import_o1js17.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js17.UInt64, import_o1js17.UInt64]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "initialize", null);
(0, import_tslib7.__decorate)([
  import_o1js17.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js17.UInt64, import_o1js17.UInt64]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "deposit", null);
(0, import_tslib7.__decorate)([
  import_o1js17.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js17.UInt64, import_o1js17.UInt64]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "withdraw", null);
(0, import_tslib7.__decorate)([
  import_o1js17.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [NFTAddress, import_o1js17.UInt64]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "sell", null);
(0, import_tslib7.__decorate)([
  import_o1js17.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js17.Field, import_o1js17.Field, import_storage6.Storage]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], NonFungibleTokenBidContract.prototype, "bid", null);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Admin,
  AdvancedAdmin,
  AdvancedApproval,
  AdvancedCollection,
  AdvancedOwner,
  Approval,
  ApproveEvent,
  Bid,
  BidEvent,
  BuyEvent,
  Collection,
  CollectionData,
  CollectionErrors,
  CollectionFactory,
  ColorPlugin,
  DepositEvent,
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
  NFTAddress,
  NFTAdmin,
  NFTAdvancedAdmin,
  NFTAdvancedAdminContract,
  NFTData,
  NFTDataPacked,
  NFTImmutableState,
  NFTOraclePreconditions,
  NFTProgram,
  NFTStandardApproval,
  NFTStandardOwner,
  NFTState,
  NFTStateStruct,
  NFTUpdateProof,
  NonFungibleTokenBidContract,
  NonFungibleTokenContractsFactory,
  OfferEvent,
  OfferFactory,
  Owner,
  OwnershipChangeEvent,
  PauseData,
  PauseEvent,
  PauseNFTEvent,
  SaleEvent,
  SellEvent,
  StateElementPrecondition,
  TEXT_TREE_HEIGHT,
  Text,
  TransferEvent,
  TransferParams,
  UInt64Option,
  UpdateEvent,
  UpgradeVerificationKeyData,
  UpgradeVerificationKeyEvent,
  WithdrawEvent,
  fieldFromString,
  fieldToString,
  nftVerificationKeys
});
