import {
  Field,
  PublicKey,
  Bool,
  VerificationKey,
  Struct,
  UInt32,
  UInt8,
  UInt64,
  Encoding,
  Provable,
  DynamicProof,
  FeatureFlags,
  Option,
  Account,
} from "o1js";
export {
  Storage,
  MintParams,
  MintParamsOption,
  MintRequest,
  NFTData,
  CollectionData,
  NFTState,
  NFTImmutableState,
  NFTUpdateProof,
  CollectionDataPacked,
  CollectionConfigurationUpdate,
  NFTStateStruct,
};

/**
 * Represents the off-chain storage information for an NFT,
 * such as an IPFS hash.
 */
class Storage extends Struct({
  url: Provable.Array(Field, 2),
}) {
  constructor(value: { url: [Field, Field] }) {
    super(value);
  }

  /**
   * Asserts that two Storage instances are equal.
   * @param a The first Storage instance.
   * @param b The second Storage instance.
   */
  static assertEquals(a: Storage, b: Storage) {
    a.url[0].assertEquals(b.url[0]);
    a.url[1].assertEquals(b.url[1]);
  }

  /**
   * Checks if two Storage instances are equal.
   * @param a The first Storage instance.
   * @param b The second Storage instance.
   * @returns A Bool indicating whether the two instances are equal.
   */
  static equals(a: Storage, b: Storage): Bool {
    return a.url[0].equals(b.url[0]).and(a.url[1].equals(b.url[1]));
  }

  /**
   * Creates a Storage instance from a string.
   * @param url The string representing the storage URL.
   * @returns A new Storage instance.
   */
  static fromString(url: string): Storage {
    const fields = Encoding.stringToFields(url);
    if (fields.length !== 2) throw new Error("Invalid string length");
    return new Storage({ url: [fields[0], fields[1]] });
  }

  /**
   * Converts the Storage instance to a string.
   * @returns The string representation of the storage URL.
   */
  toString(): string {
    if (this.url[0].toBigInt() === 0n && this.url[1].toBigInt() === 0n) {
      throw new Error("Invalid string");
    }
    return Encoding.stringFromFields([this.url[0], this.url[1]]);
  }
}

/**
 * Represents the on-chain state structure of an NFT.
 * The order of the fields is important and should match the NFT SmartContract.
 */
class NFTStateStruct extends Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
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
    a.owner.assertEquals(b.owner);
    Storage.assertEquals(a.storage, b.storage);
    a.packedData.assertEquals(b.packedData);
    a.metadataVerificationKeyHash.assertEquals(b.metadataVerificationKeyHash);
  }
}

/**
 * Represents the immutable state of an NFT, containing read-only properties
 * and flags that determine the NFT's behavior and permissions.
 */
class NFTImmutableState extends Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
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
  id: UInt32, // readonly
}) {
  /**
   * Asserts that two NFTImmutableState instances are equal.
   * @param a The first NFTImmutableState instance.
   * @param b The second NFTImmutableState instance.
   */
  static assertEqual(a: NFTImmutableState, b: NFTImmutableState) {
    a.creator.assertEquals(b.creator);
    a.canChangeOwnerByProof.assertEquals(b.canChangeOwnerByProof);
    a.canChangeOwnerBySignature.assertEquals(b.canChangeOwnerBySignature);
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
    creator: PublicKey;
    address: PublicKey;
    tokenId: Field;
  }) {
    const { nftData, creator, address, tokenId } = params;
    return new NFTImmutableState({
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
      canChangeMetadataVerificationKeyHash:
        nftData.canChangeMetadataVerificationKeyHash,
      canPause: nftData.canPause,
    });
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
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
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
  static fromNFTState(params: {
    nftState: NFTStateStruct;
    creator: PublicKey;
    address: PublicKey;
    tokenId: Field;
  }) {
    const { nftState, creator, address, tokenId } = params;
    const nftData = NFTData.unpack(nftState.packedData);
    const immutableState = NFTImmutableState.fromNFTData({
      nftData,
      creator,
      address,
      tokenId,
    });
    return new NFTState({
      immutableState,
      name: nftState.name,
      metadata: nftState.metadata,
      storage: nftState.storage,
      owner: nftState.owner,
      price: nftData.price,
      version: nftData.version,
      isPaused: nftData.isPaused,
      metadataVerificationKeyHash: nftState.metadataVerificationKeyHash,
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
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
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
      price?: number;
      version?: number;
      id?: number;
      canChangeOwnerByProof?: boolean;
      canChangeOwnerBySignature?: boolean;
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
      requireOwnerSignatureToUpgrade,
    } = params;
    return new NFTData({
      price: UInt64.from(price ?? 0),
      version: UInt32.from(version ?? 0),
      id: UInt32.from(id ?? 0),
      canChangeOwnerByProof: Bool(canChangeOwnerByProof ?? false),
      canChangeOwnerBySignature: Bool(canChangeOwnerBySignature ?? true),
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
  pack(): Field {
    const price = this.price.value.toBits(64);
    const version = this.version.value.toBits(32);
    const id = this.id.value.toBits(32);
    return Field.fromBits([
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
      this.requireOwnerSignatureToUpgrade,
    ]);
  }

  /**
   * Unpacks a Field into an NFTData instance.
   * @param packed The packed Field representation of the NFTData.
   * @returns A new NFTData instance.
   */
  static unpack(packed: Field) {
    const bits = packed.toBits(64 + 32 + 32 + 10);
    const price = UInt64.Unsafe.fromField(Field.fromBits(bits.slice(0, 64)));
    const version = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64, 64 + 32))
    );
    const id = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(64 + 32, 64 + 32 + 32))
    );
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
    return new NFTData({
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
      requireOwnerSignatureToUpgrade,
    });
  }
}

/**
 * Represents an update to the collection's configuration, such as name, base URL, fees, and admin.
 */
class CollectionConfigurationUpdate extends Struct({
  /** The name of the collection. */
  name: Field,
  /** The base URL for the metadata of the NFTs in the collection. */
  baseURL: Field,
  /** The royalty fee percentage (e.g., 1000 = 1%). */
  royaltyFee: UInt32,
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** The public key of the admin contract. */
  admin: PublicKey,
}) {}

/**
 * Represents the packed collection data, including the upgrade authority's x-coordinate and packed data fields.
 */
class CollectionDataPacked extends Struct({
  /** The x-coordinate of the upgrade authority's public key. */
  upgradeAuthorityX: Field,
  /** The packed data field containing collection parameters and flags. */
  packedData: Field,
}) {}

/**
 * Represents the data associated with an NFT collection, including configuration parameters and permission flags.
 */
class CollectionData extends Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
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
    upgradeAuthority?: PublicKey;
    royaltyFee?: number;
    transferFee?: number;
    requireTransferApproval?: boolean;
    requireUpdateApproval?: boolean;
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
      upgradeAuthority,
      royaltyFee,
      transferFee,
      requireTransferApproval,
      requireUpdateApproval,
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
      upgradeAuthority: upgradeAuthority ?? PublicKey.empty(),
      royaltyFee: UInt32.from(royaltyFee ?? 0),
      transferFee: UInt64.from(transferFee ?? 0),
      requireTransferApproval: Bool(requireTransferApproval ?? false),
      requireUpdateApproval: Bool(requireUpdateApproval ?? false),
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
  pack(): CollectionDataPacked {
    return new CollectionDataPacked({
      upgradeAuthorityX: this.upgradeAuthority.x,
      packedData: Field.fromBits([
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
        this.upgradeAuthority.isOdd,
      ]),
    });
  }

  /**
   * Unpacks a CollectionDataPacked instance into a CollectionData instance.
   * @param packed The packed CollectionDataPacked instance.
   * @returns A new CollectionData instance.
   */
  static unpack(packed: CollectionDataPacked) {
    const bits = packed.packedData.toBits(32 + 64 + 16);
    const royaltyFee = UInt32.Unsafe.fromField(
      Field.fromBits(bits.slice(0, 32))
    );
    const transferFee = UInt64.Unsafe.fromField(
      Field.fromBits(bits.slice(32, 32 + 64))
    );

    const upgradeAuthorityIsOdd = bits[32 + 64 + 15];
    const upgradeAuthority = PublicKey.from({
      x: packed.upgradeAuthorityX,
      isOdd: upgradeAuthorityIsOdd,
    });

    return new CollectionData({
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
      isPaused: bits[32 + 64 + 14],
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
