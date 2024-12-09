import { TransactionPayloads } from "./transaction.js";
export type FungibleTokenTransactionType = "mint" | "transfer" | "bid" | "offer" | "buy" | "sell" | "airdrop" | "withdrawBid" | "withdrawOffer" | "updateBidWhitelist" | "updateOfferWhitelist" | "updateAdminWhitelist";
export declare const tokenTransactionTypes: (FungibleTokenTransactionType | "launch")[];
export interface TokenInfo {
    symbol: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    imageBase64?: string;
    twitter?: string;
    discord?: string;
    telegram?: string;
    instagram?: string;
    facebook?: string;
    website?: string;
    tokenContractCode?: string;
    adminContractsCode?: string[];
}
export interface TokenTransactionPayloads extends TransactionPayloads {
    txType: FungibleTokenTransactionType | "launch";
    symbol: string;
    developerAddress?: string;
    sendTransaction?: boolean;
}
export interface TokenTransactionBaseParams {
    txType: FungibleTokenTransactionType | "launch";
    tokenAddress?: string;
    sender: string;
    nonce?: number;
    memo?: string;
    developerFee?: number;
}
export interface DeployedTokenTransactionBaseParams extends TokenTransactionBaseParams {
    txType: FungibleTokenTransactionType;
    tokenAddress: string;
}
export interface LaunchTokenTransactionBaseParams extends TokenTransactionBaseParams {
    txType: "launch";
    adminContract: "standard" | "advanced";
    symbol: string;
    decimals?: number;
    uri: string | TokenInfo;
    tokenAddress?: string;
    adminContractAddress?: string;
    tokenContractPrivateKey?: string;
    adminContractPrivateKey?: string;
}
export interface LaunchTokenStandardAdminParams extends LaunchTokenTransactionBaseParams {
    adminContract: "standard";
}
export interface LaunchTokenAdvancedAdminParams extends LaunchTokenTransactionBaseParams {
    adminContract: "advanced";
    canMint: "whitelist" | "anyone";
    requireAdminSignatureForMint?: boolean;
    whitelist?: {
        address: string;
        amount?: number;
    }[] | string;
    totalSupply?: number;
}
export interface MintTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "mint";
    to: string;
    amount: number;
}
export interface TransferTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "transfer";
    to: string;
    amount: number;
}
export interface AirdropTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "airdrop";
    recipients: {
        address: string;
        amount: number;
        memo?: string;
    }[];
}
export interface OfferTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "offer";
    offerPrivateKey?: string;
    offerAddress?: string;
    amount: number;
    price: number;
    whitelist?: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface BidTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "bid";
    bidPrivateKey?: string;
    bidAddress?: string;
    amount: number;
    price: number;
    whitelist?: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface BuyTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "buy";
    offerAddress: string;
    amount: number;
}
export interface SellTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "sell";
    bidAddress: string;
    amount: number;
}
export interface WithdrawBidTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "withdrawBid";
    bidAddress: string;
    amount: number;
}
export interface WithdrawOfferTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "withdrawOffer";
    offerAddress: string;
    amount: number;
}
export interface UpdateBidWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateBidWhitelist";
    bidAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface UpdateOfferWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateOfferWhitelist";
    offerAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface UpdateAdminWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateAdminWhitelist";
    adminAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export type TransactionParams = LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | MintTransactionParams | TransferTransactionParams | AirdropTransactionParams | OfferTransactionParams | BidTransactionParams | BuyTransactionParams | SellTransactionParams | WithdrawBidTransactionParams | WithdrawOfferTransactionParams | UpdateBidWhitelistTransactionParams | UpdateOfferWhitelistTransactionParams | UpdateAdminWhitelistTransactionParams;
export interface TokenTransaction extends TokenTransactionPayloads {
    request: TransactionParams;
}
export interface TokenTransactions {
    txs: TokenTransaction[];
}
export interface ProveTokenTransaction {
    tx: TokenTransaction;
    signedData: string;
    sendTransaction?: boolean;
}
export interface ProveTokenTransactions {
    txs: ProveTokenTransaction[];
}
export interface TokenStateRequestParams {
    tokenAddress: string;
}
export interface TokenState {
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
export interface TokenSymbolAndAdmin {
    tokenAddress: string;
    adminContractAddress: string;
    adminAddress: string;
    tokenSymbol: string;
}
