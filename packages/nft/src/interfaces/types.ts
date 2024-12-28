import {
  Field,
  PublicKey,
  Bool,
  Struct,
  UInt32,
  UInt64,
  Provable,
  DynamicProof,
  FeatureFlags,
  Option,
  Account,
} from "o1js";
import { Storage } from "@minatokens/storage";
export {
  MintParams,
  MintParamsOption,
  MintRequest,
  NFTDataPacked,
  NFTData,
  CollectionData,
  NFTState,
  NFTImmutableState,
  NFTUpdateProof,
  NFTStateStruct,
  NFTOraclePreconditions,
  StateElementPrecondition,
  UInt64Option,
  TransferParams,
};

class UInt64Option extends Option(UInt64) {}

class NFTDataPacked extends Struct({
  ownerX: Field,
  approvedX: Field,
  data: Field,
}) {
  static assertEqual(a: NFTDataPacked, b: NFTDataPacked) {
    a.ownerX.assertEquals(b.ownerX);
    a.approvedX.assertEquals(b.approvedX);
    a.data.assertEquals(b.data);
  }
}

/**
 * Represents the on-chain state structure of an NFT.
 * The order of the fields is important and should match the NFT SmartContract.
 */
class NFTStateStruct extends Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}) {
  /**
   * Creates an NFTStateStruct from an account's app state.
   * @param account The account containing the zkApp state.
   * @returns A new NFTStateStruct instance.
   */
  static fromAccount(account: Account) {
    if (!account.zkapp?.appState) {
      throw new Error("Invalid zkApp account state");
    }
    if (NFTStateStruct.sizeInFields() !== account.zkapp?.appState.length) {
      throw new Error("Invalid NFTStateStruct size");
    }
    return NFTStateStruct.fromFields(account.zkapp?.appState);
  }

  /**
   * Asserts that two NFTStateStruct instances are equal.
   * @param a The first NFTStateStruct instance.
   * @param b The second NFTStateStruct instance.
   */
  static assertEqual(a: NFTStateStruct, b: NFTStateStruct) {
    a.name.assertEquals(b.name);
    a.metadata.assertEquals(b.metadata);
    Storage.assertEquals(a.storage, b.storage);
    NFTDataPacked.assertEqual(a.packedData, b.packedData);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
  }
}

/**
 * Represents the immutable state of an NFT, containing read-only properties
 * and flags that determine the NFT's behavior and permissions.
 */
class NFTImmutableState extends Struct({
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred (readonly). */
  canTransfer: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt64, // readonly
}) {
  /**
   * Asserts that two NFTImmutableState instances are equal.
   * @param a The first NFTImmutableState instance.
   * @param b The second NFTImmutableState instance.
   */
  static assertEqual(a: NFTImmutableState, b: NFTImmutableState) {
    a.canChangeOwnerByProof.assertEquals(b.canChangeOwnerByProof);
    a.canTransfer.assertEquals(b.canTransfer);
    a.canChangeMetadata.assertEquals(b.canChangeMetadata);
    a.canChangePrice.assertEquals(b.canChangePrice);
    a.canChangeStorage.assertEquals(b.canChangeStorage);
    a.canChangeName.assertEquals(b.canChangeName);
    a.canChangeMetadataVerificationKeyHash.assertEquals(
      b.canChangeMetadataVerificationKeyHash
    );
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
  static fromNFTData(params: {
    nftData: NFTData;
    address: PublicKey;
    tokenId: Field;
  }) {
    const { nftData, address, tokenId } = params;
    return new NFTImmutableState({
      address,
      tokenId,
      id: nftData.id,
      canChangeOwnerByProof: nftData.canChangeOwnerByProof,
      canTransfer: nftData.canTransfer,
      canChangeMetadata: nftData.canChangeMetadata,
      canChangePrice: nftData.canChangePrice,
      canChangeStorage: nftData.canChangeStorage,
      canChangeName: nftData.canChangeName,
      canChangeMetadataVerificationKeyHash:
        nftData.canChangeMetadataVerificationKeyHash,
      canPause: nftData.canPause,
    });
  }
}

class StateElementPrecondition extends Struct({
  isSome: Bool,
  value: Field,
}) {}

class NFTOraclePreconditions extends Struct({
  /** The lower slot of the validity of the NFT update proof. */
  lowerSlot: UInt32,
  /** The upper slot of the validity of the NFT update proof. */
  upperSlot: UInt32,
  /** The public key of the Oracle. */
  publicKey: PublicKey,
  /** The token Id of the Oracle. */
  tokenId: Field,
  /** The lower balance of the Oracle. */
  balanceLower: UInt64,
  /** The upper balance of the Oracle. */
  balanceUpper: UInt64,
  /** The lower nonce of the Oracle. */
  nonceLower: UInt32,
  /** The upper nonce of the Oracle. */
  nonceUpper: UInt32,
  /** The action state of the Oracle. */
  actionState: StateElementPrecondition,
  /** The state of the Oracle. */
  state: Provable.Array(StateElementPrecondition, 8),
}) {
  static new(
    params: {
      lowerSlot?: UInt32;
      upperSlot?: UInt32;
      publicKey?: PublicKey;
      tokenId?: Field;
      balanceLower?: UInt64;
      balanceUpper?: UInt64;
      nonceLower?: UInt32;
      nonceUpper?: UInt32;
      actionState?: StateElementPrecondition;
      state?: StateElementPrecondition[];
    } = {}
  ) {
    return new NFTOraclePreconditions({
      lowerSlot: params.lowerSlot ?? UInt32.zero,
      upperSlot: params.upperSlot ?? UInt32.MAXINT(),
      publicKey: params.publicKey ?? PublicKey.empty(),
      tokenId: params.tokenId ?? Field(1),
      balanceLower: params.balanceLower ?? UInt64.zero,
      balanceUpper: params.balanceUpper ?? UInt64.MAXINT(),
      nonceLower: params.nonceLower ?? UInt32.zero,
      nonceUpper: params.nonceUpper ?? UInt32.MAXINT(),
      actionState:
        params.actionState ??
        new StateElementPrecondition({ isSome: Bool(false), value: Field(0) }),
      state:
        params.state ??
        [...Array(8)].map(
          (_, i) =>
            new StateElementPrecondition({
              isSome: Bool(false),
              value: Field(0),
            })
        ),
    });
  }

  static assertEqual(a: NFTOraclePreconditions, b: NFTOraclePreconditions) {
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
}

/**
 * Represents the full state of an NFT, including both immutable and mutable properties.
 */
class NFTState extends Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The approved address of the NFT. */
  approved: PublicKey,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,

  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** The state of the owner of the NFT - 8 Fields (readonly). */
  oracle: NFTOraclePreconditions, // readonly
}) {
  /**
   * Asserts that two NFTState instances are equal.
   * @param a The first NFTState instance.
   * @param b The second NFTState instance.
   */
  static assertEqual(a: NFTState, b: NFTState) {
    NFTImmutableState.assertEqual(a.immutableState, b.immutableState);
    a.name.assertEquals(b.name);
    a.metadata.assertEquals(b.metadata);
    Storage.assertEquals(a.storage, b.storage);
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
  static fromNFTState(params: {
    nftState: NFTStateStruct;
    creator: PublicKey;
    address: PublicKey;
    tokenId: Field;
    oracle: NFTOraclePreconditions;
  }) {
    const { nftState, creator, address, tokenId, oracle } = params;
    const nftData = NFTData.unpack(nftState.packedData);
    const immutableState = NFTImmutableState.fromNFTData({
      nftData,
      address,
      tokenId,
    });
    return new NFTState({
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
      oracle,
    });
  }
}

/**
 * Represents a dynamic proof used for updating the state of an NFT.
 */
class NFTUpdateProof extends DynamicProof<NFTState, NFTState> {
  static publicInputType = NFTState;
  static publicOutputType = NFTState;
  static maxProofsVerified = 2 as const;
  static featureFlags = FeatureFlags.allMaybe;
}

/**
 * Represents the data associated with an NFT, including state and permission flags.
 */
class NFTData extends Struct({
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The approved address of the NFT. */
  approved: PublicKey,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt64,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred (readonly). */
  canTransfer: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}) {
  /**
   * Creates a new NFTData instance with optional parameters.
   * @param params The parameters to create the NFTData.
   * @returns A new NFTData instance.
   */
  static new(
    params: {
      owner?: PublicKey;
      approved?: PublicKey;
      version?: number;
      id?: number;
      canChangeOwnerByProof?: boolean;
      canTransfer?: boolean;
      canChangeMetadata?: boolean;
      canChangePrice?: boolean;
      canChangeStorage?: boolean;
      canChangeName?: boolean;
      canChangeMetadataVerificationKeyHash?: boolean;
      canPause?: boolean;
      isPaused?: boolean;
      requireOwnerSignatureToUpgrade?: boolean;
    } = {}
  ): NFTData {
    const {
      owner,
      approved,
      version,
      id,
      canChangeOwnerByProof,
      canTransfer,
      canChangeMetadata,
      canChangePrice,
      canChangeStorage,
      canChangeName,
      canChangeMetadataVerificationKeyHash,
      canPause,
      isPaused,
      requireOwnerSignatureToUpgrade,
    } = params;
    return new NFTData({
      owner: owner ? PublicKey.from(owner) : PublicKey.empty(),
      approved: approved ? PublicKey.from(approved) : PublicKey.empty(),
      version: UInt32.from(version ?? 0),
      id: UInt64.from(id ?? 0),
      canChangeOwnerByProof: Bool(canChangeOwnerByProof ?? false),
      canTransfer: Bool(canTransfer ?? true),
      canChangeMetadata: Bool(canChangeMetadata ?? false),
      canChangePrice: Bool(canChangePrice ?? true),
      canChangeStorage: Bool(canChangeStorage ?? false),
      canChangeName: Bool(canChangeName ?? false),
      canChangeMetadataVerificationKeyHash: Bool(
        canChangeMetadataVerificationKeyHash ?? false
      ),
      canPause: Bool(canPause ?? false),
      isPaused: Bool(isPaused ?? false),
      requireOwnerSignatureToUpgrade: Bool(
        requireOwnerSignatureToUpgrade ?? false
      ),
    });
  }

  /**
   * Packs the NFTData into a single Field for efficient storage.
   * @returns The packed Field representation of the NFTData.
   */
  pack(): NFTDataPacked {
    const id = this.id.value.toBits(64);
    const version = this.version.value.toBits(32);
    return new NFTDataPacked({
      ownerX: this.owner.x,
      approvedX: this.approved.x,
      data: Field.fromBits([
        ...id,
        ...version,
        this.canChangeOwnerByProof,
        this.canTransfer,
        this.canChangeMetadata,
        this.canChangePrice,
        this.canChangeStorage,
        this.canChangeName,
        this.canChangeMetadataVerificationKeyHash,
        this.canPause,
        this.isPaused,
        this.requireOwnerSignatureToUpgrade,
        this.owner.isOdd,
        this.approved.isOdd,
      ]),
    });
  }

  /**
   * Unpacks a Field into an NFTData instance.
   * @param packed The packed Field representation of the NFTData.
   * @returns A new NFTData instance.
   */
  static unpack(packed: NFTDataPacked): NFTData {
    const bits = packed.data.toBits(64 + 32 + 12);
    const id = UInt64.Unsafe.fromField(Field.fromBits(bits.slice(0, 64)));
    const version = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64, 64 + 32))
    );

    const canChangeOwnerByProof = bits[64 + 32 + 0];
    const canTransfer = bits[64 + 32 + 1];
    const canChangeMetadata = bits[64 + 32 + 2];
    const canChangePrice = bits[64 + 32 + 3];
    const canChangeStorage = bits[64 + 32 + 4];
    const canChangeName = bits[64 + 32 + 5];
    const canChangeMetadataVerificationKeyHash = bits[64 + 32 + 6];
    const canPause = bits[64 + 32 + 7];
    const isPaused = bits[64 + 32 + 8];
    const requireOwnerSignatureToUpgrade = bits[64 + 32 + 9];
    const ownerIsOdd = bits[64 + 32 + 10];
    const approvedIsOdd = bits[64 + 32 + 11];
    const owner = PublicKey.from({ x: packed.ownerX, isOdd: ownerIsOdd });
    const approved = PublicKey.from({
      x: packed.approvedX,
      isOdd: approvedIsOdd,
    });
    return new NFTData({
      owner,
      approved,
      id,
      version,
      canChangeOwnerByProof,
      canTransfer,
      canChangeMetadata,
      canChangePrice,
      canChangeStorage,
      canChangeName,
      canChangeMetadataVerificationKeyHash,
      canPause,
      isPaused,
      requireOwnerSignatureToUpgrade,
    });
  }
}

/**
 * Represents the data associated with an NFT collection, including configuration parameters and permission flags.
 */
class CollectionData extends Struct({
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}) {
  /**
   * Creates a new CollectionData instance with specified parameters.
   * @param params The parameters to create the CollectionData.
   * @returns A new CollectionData instance.
   */
  static new(params: {
    royaltyFee?: number;
    transferFee?: number;
    requireTransferApproval?: boolean;
    requireUpdateApproval?: boolean;
    requireOfferApproval?: boolean;
    requireSaleApproval?: boolean;
    requireBuyApproval?: boolean;
    requireCreatorSignatureToUpgradeCollection?: boolean;
    requireCreatorSignatureToUpgradeNFT?: boolean;
    canMint?: boolean;
    canChangeName?: boolean;
    canChangeCreator?: boolean;
    canChangeBaseUri?: boolean;
    canChangeRoyalty?: boolean;
    canChangeTransferFee?: boolean;
    canSetAdmin?: boolean;
    canPause?: boolean;
    isPaused?: boolean;
  }): CollectionData {
    const {
      royaltyFee,
      transferFee,
      requireTransferApproval,
      requireUpdateApproval,
      requireOfferApproval,
      requireSaleApproval,
      requireBuyApproval,
      requireCreatorSignatureToUpgradeCollection,
      requireCreatorSignatureToUpgradeNFT,
      canMint,
      canChangeName,
      canChangeCreator,
      canChangeBaseUri,
      canChangeRoyalty,
      canChangeTransferFee,
      canSetAdmin,
      canPause,
      isPaused,
    } = params;
    return new CollectionData({
      royaltyFee: UInt32.from(royaltyFee ?? 0),
      transferFee: UInt64.from(transferFee ?? 0),
      requireTransferApproval: Bool(requireTransferApproval ?? false),
      requireUpdateApproval: Bool(requireUpdateApproval ?? false),
      requireOfferApproval: Bool(requireOfferApproval ?? false),
      requireSaleApproval: Bool(requireSaleApproval ?? false),
      requireBuyApproval: Bool(requireBuyApproval ?? false),
      requireCreatorSignatureToUpgradeCollection: Bool(
        requireCreatorSignatureToUpgradeCollection ?? false
      ),
      requireCreatorSignatureToUpgradeNFT: Bool(
        requireCreatorSignatureToUpgradeNFT ?? false
      ),
      canMint: Bool(canMint ?? true),
      canPause: Bool(canPause ?? true),
      canChangeName: Bool(canChangeName ?? false),
      canChangeCreator: Bool(canChangeCreator ?? false),
      canChangeBaseUri: Bool(canChangeBaseUri ?? false),
      canChangeRoyalty: Bool(canChangeRoyalty ?? false),
      canChangeTransferFee: Bool(canChangeTransferFee ?? false),
      canSetAdmin: Bool(canSetAdmin ?? false),
      isPaused: Bool(isPaused ?? false),
    });
  }

  /**
   * Packs the CollectionData into a CollectionDataPacked representation for efficient storage.
   * @returns The packed CollectionDataPacked instance.
   */
  pack(): Field {
    return Field.fromBits([
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
      this.isPaused,
    ]);
  }

  /**
   * Unpacks a CollectionDataPacked instance into a CollectionData instance.
   * @param packed The packed CollectionDataPacked instance.
   * @returns A new CollectionData instance.
   */
  static unpack(packed: Field) {
    const bits = packed.toBits(32 + 64 + 16);
    const royaltyFee = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 32))
    );
    const transferFee = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(32, 32 + 64))
    );

    return new CollectionData({
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
      isPaused: bits[32 + 64 + 15],
    });
  }
}

/**
 * Represents the parameters required for minting a new NFT.
 */
class MintParams extends Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}) {}

/**
 * Represents an optional MintParams, used in scenarios where minting may or may not be allowed.
 */
class MintParamsOption extends Option(MintParams) {}

/**
 * Represents a request to mint a new NFT, used by the admin contract to determine if minting is allowed.
 */
class MintRequest extends Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}) {}

/**
 * Represents the parameters required for transferring an NFT.
 */
class TransferParams extends Struct({
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The sender's public key. */
  from: PublicKey,
  /** The receiver's public key. */
  to: PublicKey,
  /** Optional price for the transfer. */
  price: UInt64Option,
}) {}
