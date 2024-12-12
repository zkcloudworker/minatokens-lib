export type PublicKeyString = string;
export type FieldString = string;

export interface NftMintParams {
  collection?: PublicKeyString;
  /** The name of the NFT. */
  name: string;
  /** The owner of the NFT. */
  owner: PublicKeyString;
  /** The metadata associated with the NFT. */
  metadata: FieldString;
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: string;
  /** The address of the NFT contract. */
  address?: PublicKeyString;
  /** The fee associated with minting the NFT. */
  fee?: number;
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash?: FieldString;
  /** The expiry time for minting the NFT. */
  expiry: number;
  customId: FieldString; // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: boolean; // should be interpreted by the admin contract, can form PublicKey together with customId
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
}

export interface CollectionLaunchParams {
  collectionName: string;
  adminType: "standard" | "whitelisted";
  creator: PublicKeyString;
  admin: PublicKeyString;
  baseURL: string;
  symbol: string;
  url: string;
  upgradeAuthority?: string;
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
}
