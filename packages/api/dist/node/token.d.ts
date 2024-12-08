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
    tokenAddress: string;
    symbol: string;
    developerAddress?: string;
    developerFee?: number;
    sendTransaction?: boolean;
}
export interface TokenTransactionBaseParams {
    txType: FungibleTokenTransactionType | "launch";
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
export interface LaunchTransaction extends TokenTransactionPayloads {
    txType: "launch";
    request: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
}
export interface MintTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "mint";
    to: string;
    amount: number;
}
export interface MintTransaction extends TokenTransactionPayloads {
    txType: "mint";
    request: MintTransactionParams;
}
export interface TransferTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "transfer";
    to: string;
    amount: number;
}
export interface TransferTransaction extends TokenTransactionPayloads {
    txType: "transfer";
    request: TransferTransactionParams;
}
export interface AirdropTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "airdrop";
    recipients: {
        address: string;
        amount: number;
        memo?: string;
    }[];
}
export interface AirdropTransaction extends TokenTransactionPayloads {
    txType: "airdrop";
    request: AirdropTransactionParams;
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
export interface OfferTransaction extends TokenTransactionPayloads {
    txType: "offer";
    request: OfferTransactionParams;
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
export interface BidTransaction extends TokenTransactionPayloads {
    txType: "bid";
    request: BidTransactionParams;
}
export interface BuyTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "buy";
    offerAddress: string;
    amount: number;
}
export interface BuyTransaction extends TokenTransactionPayloads {
    txType: "buy";
    request: BuyTransactionParams;
}
export interface SellTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "sell";
    bidAddress: string;
    amount: number;
}
export interface SellTransaction extends TokenTransactionPayloads {
    txType: "sell";
    request: SellTransactionParams;
}
export interface WithdrawBidTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "withdrawBid";
    bidAddress: string;
    amount: number;
}
export interface WithdrawBidTransaction extends TokenTransactionPayloads {
    txType: "withdrawBid";
    request: WithdrawBidTransactionParams;
}
export interface WithdrawOfferTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "withdrawOffer";
    offerAddress: string;
    amount: number;
}
export interface WithdrawOfferTransaction extends TokenTransactionPayloads {
    txType: "withdrawOffer";
    request: WithdrawOfferTransactionParams;
}
export interface UpdateBidWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateBidWhitelist";
    bidAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface UpdateBidWhitelistTransaction extends TokenTransactionPayloads {
    txType: "updateBidWhitelist";
    request: UpdateBidWhitelistTransactionParams;
}
export interface UpdateOfferWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateOfferWhitelist";
    offerAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface UpdateOfferWhitelistTransaction extends TokenTransactionPayloads {
    txType: "updateOfferWhitelist";
    request: UpdateOfferWhitelistTransactionParams;
}
export interface UpdateAdminWhitelistTransactionParams extends DeployedTokenTransactionBaseParams {
    txType: "updateAdminWhitelist";
    adminAddress: string;
    whitelist: {
        address: string;
        amount?: number;
    }[] | string;
}
export interface UpdateAdminWhitelistTransaction extends TokenTransactionPayloads {
    txType: "updateAdminWhitelist";
    request: UpdateAdminWhitelistTransactionParams;
}
export type TransactionParams = LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | MintTransactionParams | TransferTransactionParams | AirdropTransactionParams | OfferTransactionParams | BidTransactionParams | BuyTransactionParams | SellTransactionParams | WithdrawBidTransactionParams | WithdrawOfferTransactionParams | UpdateBidWhitelistTransactionParams | UpdateOfferWhitelistTransactionParams | UpdateAdminWhitelistTransactionParams;
export type TokenTransaction = LaunchTransaction | MintTransaction | TransferTransaction | AirdropTransaction | OfferTransaction | BidTransaction | BuyTransaction | SellTransaction | WithdrawBidTransaction | WithdrawOfferTransaction | UpdateBidWhitelistTransaction | UpdateOfferWhitelistTransaction | UpdateAdminWhitelistTransaction;
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
