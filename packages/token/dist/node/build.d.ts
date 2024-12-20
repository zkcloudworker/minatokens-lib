import { TokenTransactionType, TokenTransactionParams, LaunchTokenAdvancedAdminParams, LaunchTokenStandardAdminParams } from "@minatokens/api";
import { blockchain } from "./types.js";
import { PublicKey, Transaction } from "o1js";
export declare function buildTokenLaunchTransaction(params: {
    chain: blockchain;
    args: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
    developerAddress?: string;
    provingKey?: string;
    provingFee?: number;
}): Promise<{
    request: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
    tx: Transaction<false, false>;
    isAdvanced: boolean;
    verificationKeyHashes: string[];
}>;
export declare function buildTokenTransaction(params: {
    chain: blockchain;
    args: Exclude<TokenTransactionParams, LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams>;
    developerAddress?: string;
    provingKey?: string;
    provingFee?: number;
}): Promise<{
    request: Exclude<TokenTransactionParams, LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams>;
    tx: Transaction<false, false>;
    isAdvanced: boolean;
    adminContractAddress: PublicKey;
    adminAddress: PublicKey;
    symbol: string;
    verificationKeyHashes: string[];
}>;
export declare function getTokenSymbolAndAdmin(params: {
    txType: TokenTransactionType;
    to?: PublicKey;
    offerAddress?: PublicKey;
    bidAddress?: PublicKey;
    tokenAddress: PublicKey;
    chain: blockchain;
}): Promise<{
    adminContractAddress: PublicKey;
    adminAddress: PublicKey;
    symbol: string;
    isAdvanced: boolean;
    isToNewAccount?: boolean;
    verificationKeyHashes: string[];
}>;
