import { TokenTransactionType, TokenTransactionParams, LaunchTokenAdvancedAdminParams, LaunchTokenStandardAdminParams, LaunchTokenBondingCurveAdminParams } from "@minatokens/api";
import { blockchain } from "../types.js";
import { PublicKey, Transaction } from "o1js";
export type AdminType = "standard" | "advanced" | "bondingCurve" | "unknown";
export declare function buildTokenLaunchTransaction(params: {
    chain: blockchain;
    args: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | LaunchTokenBondingCurveAdminParams;
    developerAddress?: string;
    provingKey?: string;
    provingFee?: number;
}): Promise<{
    request: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | LaunchTokenBondingCurveAdminParams;
    tx: Transaction<false, false>;
    adminType: AdminType;
    verificationKeyHashes: string[];
}>;
export declare function buildTokenTransaction(params: {
    chain: blockchain;
    args: Exclude<TokenTransactionParams, LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | LaunchTokenBondingCurveAdminParams>;
    developerAddress?: string;
    provingKey?: string;
    provingFee?: number;
}): Promise<{
    request: Exclude<TokenTransactionParams, LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | LaunchTokenBondingCurveAdminParams>;
    tx: Transaction<false, false>;
    adminType: AdminType;
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
    adminType: AdminType;
    isToNewAccount?: boolean;
    verificationKeyHashes: string[];
}>;
