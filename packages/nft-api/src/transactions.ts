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
  | "nft:airdrop"
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
  | "bid:whitelist"
  | "offer:create"
  | "offer:deposit"
  | "offer:withdraw"
  | "offer:bid"
  | "offer:sell"
  | "offer:sell-approval"
  | "offer:whitelist"
  | "pin:image"
  | "pin:metadata";

export const tokenTransactionTypes: NonFungibleTokenTransactionType[] = [
  "collection:launch",
  "collection:limit-minting",
  "collection:pause",
  "collection:resume",
  "collection:transfer",
  "collection:upgrade",
  "collection:set-name",
  "collection:set-base-url",
  "collection:set-admin",
  "collection:set-royalty-fee",
  "collection:set-transfer-fee",
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
  txType: "nft:mint";
  to: string;
  amount: number;
}

export interface TransferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "nft:transfer";
  to: string;
  amount: number;
}

export interface AirdropTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "nft:airdrop";
  recipients: { address: string; amount: number; memo?: string }[];
}

// export interface AirdropTransaction extends TokenTransactionPayloads {
//   txType: "airdrop";
//   request: AirdropTransactionParams;
// }

export interface OfferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "nft:offer";
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
  txType: "bid:create";
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
  txType: "nft:buy";
  offerAddress: string;
  amount: number;
}

// export interface BuyTransaction extends TokenTransactionPayloads {
//   txType: "buy";
//   request: BuyTransactionParams;
// }

export interface SellTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "nft:sell";
  bidAddress: string;
  amount: number;
}

// export interface SellTransaction extends TokenTransactionPayloads {
//   txType: "sell";
//   request: SellTransactionParams;
// }

export interface WithdrawBidTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "bid:withdraw";
  bidAddress: string;
  amount: number;
}

// export interface WithdrawBidTransaction extends TokenTransactionPayloads {
//   txType: "withdrawBid";
//   request: WithdrawBidTransactionParams;
// }

export interface WithdrawOfferTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "offer:withdraw";
  offerAddress: string;
  amount: number;
}

// export interface WithdrawOfferTransaction extends TokenTransactionPayloads {
//   txType: "withdrawOffer";
//   request: WithdrawOfferTransactionParams;
// }

export interface UpdateBidWhitelistTransactionParams
  extends DeployedNftTransactionBaseParams {
  txType: "bid:whitelist";
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
  txType: "offer:whitelist";
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
  txType: "admin:whitelist";
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

export type TransactionPayloads = {
  /**
   * The address initiating the transaction.
   */
  sender: string;
  /**
   * The nonce for the transaction.
   */
  nonce: number;
  /**
   * A memo for the transaction.
   */
  memo: string;
  /**
   * The fee for the transaction.
   */
  fee: number;
  walletPayload: {
    /**
     * The nonce for the transaction.
     */
    nonce?: number;
    /**
     * The transaction data.
     */
    transaction?: string;
    /**
     * Indicates if only signature is needed.
     */
    onlySign?: boolean;
    feePayer?: {
      /**
       * The fee for the transaction.
       */
      fee?: number;
      /**
       * A memo for the transaction.
       */
      memo?: string;
    };
  };
  minaSignerPayload: {
    /**
     * The zkApp command data.
     */
    zkappCommand: unknown;
    feePayer: {
      /**
       * The fee payer's address.
       */
      feePayer?: string;
      /**
       * The fee for the transaction.
       */
      fee?: number;
      /**
       * The nonce for the transaction.
       */
      nonce?: number;
      /**
       * A memo for the transaction.
       */
      memo?: string;
    };
  };
  /**
   * The payload for the prover.
   */
  proverPayload: string;
  /**
   * The signed data for the transaction.
   */
  signedData: string;
  /**
   * The raw transaction data.
   */
  transaction: string;
  /**
   * Optional. Whether to broadcast the transaction after proving.
   */
  sendTransaction?: boolean;
};

export interface NftTransaction extends TransactionPayloads {
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
