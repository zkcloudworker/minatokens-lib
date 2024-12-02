import { FungibleTokenTransactionType } from "./types.js";
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
export interface TokenTransactionBaseParams {
    txType: FungibleTokenTransactionType | "launch";
    sender: string;
    nonce?: number;
    memo?: string;
    developerFee?: number;
}
export interface LaunchTokenTransactionBaseParams extends TokenTransactionBaseParams {
    txType: "launch";
    adminContract: "standard" | "advanced";
    symbol: string;
    decimals?: number;
    uri: string | TokenInfo;
    contractPrivateKey?: string;
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
export interface DeployedTokenTransactionBaseParams extends TokenTransactionBaseParams {
    txType: FungibleTokenTransactionType;
    tokenAddress: string;
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
