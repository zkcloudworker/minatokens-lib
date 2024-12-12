export type NonFungibleTokenTransactionType =
  | "collection:launch"
  | "collection:limit-minting"
  | "collection:pause"
  | "collection:resume"
  | "collection:transfer"
  | "collection:upgrade"
  | "collection:set-name"
  | "collection:set-base-url"
  | "collection:set-admin"
  | "collection:set-royalty-fee"
  | "collection:set-transfer-fee"
  | "nft:mint"
  | "nft:mint-creator"
  | "nft:update"
  | "nft:update-approval"
  | "nft:offer"
  | "nft:offer-approval"
  | "nft:sell"
  | "nft:sell-approval"
  | "nft:buy"
  | "nft:buy-approval"
  | "nft:transfer"
  | "nft:transfer-approval"
  | "nft:auction"
  | "nft:cancel-auction"
  | "nft:settle-auction"
  | "nft:upgrade"
  | "nft:pause-nft"
  | "nft:resume"
  | "admin:pause"
  | "admin:resume"
  | "admin:transfer"
  | "admin:upgrade"
  | "admin:whitelist"
  | "upgrade:deploy"
  | "upgrade:validators"
  | "upgrade:database"
  | "bid:create"
  | "bid:deposit"
  | "bid:withdraw"
  | "bid:bid"
  | "bid:sell"
  | "bid:sell-approval"
  | "pin:image"
  | "pin:metadata";

export const tokenTransactionTypes: NonFungibleTokenTransactionType[] = [
  "collection:launch",
  "collection:limit-minting",
  "collection:pause",
  "collection:resume",
  "collection:transfer",
  "collection:upgrade",
  "collection:configuration",
  "nft:mint",
  "nft:mint-creator",
  "nft:update",
  "nft:update-approval",
  "nft:sell",
  "nft:sell-approval",
  "nft:buy",
  "nft:buy-approval",
  "nft:transfer",
  "nft:transfer-approval",
  "nft:upgrade",
  "nft:pause-nft",
  "nft:resume",
  "admin:pause",
  "admin:resume",
  "admin:transfer",
  "admin:upgrade",
  "admin:whitelist",
  "upgrade:deploy",
  "upgrade:validators",
  "upgrade:database",
];

export interface NftInfo {
  symbol: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  imageBase64?: string; // max 1 MB
  twitter?: string;
  discord?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  tokenContractCode?: string;
  adminContractsCode?: string[];
}

export interface NftTransactionBaseParams {
  txType: NonFungibleTokenTransactionType | "launch";
  tokenAddress?: string;
  sender: string;
  nonce?: number;
  memo?: string;
  developerFee?: number;
}

export interface DeployedNftTransactionBaseParams
  extends NftTransactionBaseParams {
  txType: NonFungibleTokenTransactionType;
  tokenAddress: string;
}

export interface LaunchNftTransactionBaseParams
  extends NftTransactionBaseParams {
  txType: "launch";
  adminContract: "standard" | "advanced";
  symbol: string;
  decimals?: number;
  uri: string | NftInfo;
  tokenAddress?: string;
  adminContractAddress?: string;
  tokenContractPrivateKey?: string;
  adminContractPrivateKey?: string;
}

export interface LaunchNftStandardAdminParams
  extends LaunchNftTransactionBaseParams {
  adminContract: "standard";
}

export interface LaunchNftAdvancedAdminParams
  extends LaunchNftTransactionBaseParams {
  adminContract: "advanced";
  canMint: "whitelist" | "anyone";
  requireAdminSignatureForMint?: boolean;
  whitelist?: { address: string; amount?: number }[] | string;
  totalSupply?: number; // UInt64.MAXINT() if not provided
}

export interface MintTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "mint";
  to: string;
  amount: number;
}

export interface TransferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "transfer";
  to: string;
  amount: number;
}

export interface AirdropTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "airdrop";
  recipients: { address: string; amount: number; memo?: string }[];
}

// export interface AirdropTransaction extends TokenTransactionPayloads {
//   txType: "airdrop";
//   request: AirdropTransactionParams;
// }

export interface OfferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "offer";
  offerPrivateKey?: string;
  offerAddress?: string;
  amount: number;
  price: number;
  whitelist?: { address: string; amount?: number }[] | string;
}

// export interface OfferTransaction extends TokenTransactionPayloads {
//   txType: "offer";
//   request: OfferTransactionParams;
// }

export interface BidTransactionParams extends DeployedNftTransactionBaseParams {
  txType: "bid";
  bidPrivateKey?: string;
  bidAddress?: string;
  amount: number;
  price: number;
  whitelist?: { address: string; amount?: number }[] | string;
}

// export interface BidTransaction extends TokenTransactionPayloads {
//   txType: "bid";
//   request: BidTransactionParams;
// }

export interface BuyTransactionParams extends DeployedNftTransactionBaseParams {
  txType: "buy";
  offerAddress: string;
  amount: number;
}

// export interface BuyTransaction extends TokenTransactionPayloads {
//   txType: "buy";
//   request: BuyTransactionParams;
// }

export interface SellTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "sell";
  bidAddress: string;
  amount: number;
}

// export interface SellTransaction extends TokenTransactionPayloads {
//   txType: "sell";
//   request: SellTransactionParams;
// }

export interface WithdrawBidTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "withdrawBid";
  bidAddress: string;
  amount: number;
}

// export interface WithdrawBidTransaction extends TokenTransactionPayloads {
//   txType: "withdrawBid";
//   request: WithdrawBidTransactionParams;
// }

export interface WithdrawOfferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "withdrawOffer";
  offerAddress: string;
  amount: number;
}

// export interface WithdrawOfferTransaction extends TokenTransactionPayloads {
//   txType: "withdrawOffer";
//   request: WithdrawOfferTransactionParams;
// }

export interface UpdateBidWhitelistTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "updateBidWhitelist";
  bidAddress: string;
  whitelist: { address: string; amount?: number }[] | string;
}

// export interface UpdateBidWhitelistTransaction
//   extends TokenTransactionPayloads {
//   txType: "updateBidWhitelist";
//   request: UpdateBidWhitelistTransactionParams;
// }

export interface UpdateOfferWhitelistTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "updateOfferWhitelist";
  offerAddress: string;
  whitelist: { address: string; amount?: number }[] | string;
}

// export interface UpdateOfferWhitelistTransaction
//   extends TokenTransactionPayloads {
//   txType: "updateOfferWhitelist";
//   request: UpdateOfferWhitelistTransactionParams;
// }

export interface UpdateAdminWhitelistTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "updateAdminWhitelist";
  adminAddress: string;
  whitelist: { address: string; amount?: number }[] | string;
}

// export interface UpdateAdminWhitelistTransaction
//   extends TokenTransactionPayloads {
//   txType: "updateAdminWhitelist";
//   request: UpdateAdminWhitelistTransactionParams;
// }

export type TransactionParams =
  | LaunchNftStandardAdminParams
  | LaunchNftAdvancedAdminParams
  | MintTransactionParams
  | TransferTransactionParams
  | AirdropTransactionParams
  | OfferTransactionParams
  | BidTransactionParams
  | BuyTransactionParams
  | SellTransactionParams
  | WithdrawBidTransactionParams
  | WithdrawOfferTransactionParams
  | UpdateBidWhitelistTransactionParams
  | UpdateOfferWhitelistTransactionParams
  | UpdateAdminWhitelistTransactionParams;

export interface NftTransaction extends NftTransactionPayloads {
  request: TransactionParams;
}

export interface NftTransactions {
  txs: NftTransaction[];
}

export interface ProveNftTransaction {
  tx: NftTransaction;
  signedData: string;
  sendTransaction?: boolean;
}

export interface ProveNftTransactions {
  txs: ProveNftTransaction[];
}

export interface NftStateRequestParams {
  tokenAddress: string;
}
export interface NftState {
  tokenAddress: string;
  tokenId: string;
  adminContractAddress: string;
  adminAddress: string;
  adminTokenBalance: number;
  totalSupply: number;
  isPaused: boolean;
  decimals: number;
  tokenSymbol: string;
  verificationKeyHash: string;
  uri: string;
  version: number;
  adminTokenSymbol: string;
  adminUri: string;
  adminVerificationKeyHash: string;
  adminVersion: number;
}

export interface NftSymbolAndAdmin {
  tokenAddress: string;
  adminContractAddress: string;
  adminAddress: string;
  tokenSymbol: string;
}
