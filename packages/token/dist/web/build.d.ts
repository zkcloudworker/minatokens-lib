import { WhitelistedAddressList } from "@minatokens/storage";
import { FungibleTokenTransactionType, blockchain } from "./types.js";
import { PublicKey, UInt64, UInt8, Transaction } from "o1js";
export declare function buildTokenDeployTransaction(params: {
    chain: blockchain;
    fee: UInt64;
    sender: PublicKey;
    nonce: number;
    tokenAddress: PublicKey;
    adminContractAddress: PublicKey;
    adminAddress: PublicKey;
    uri: string;
    symbol: string;
    memo?: string;
    whitelist?: WhitelistedAddressList | string;
    developerAddress?: PublicKey;
    developerFee?: UInt64;
    provingKey: PublicKey;
    provingFee: UInt64;
    decimals: UInt8;
}): Promise<{
    tx: Transaction<false, false>;
    isWhitelisted: boolean;
    verificationKeyHashes: string[];
    whitelist: string | undefined;
}>;
export declare function getTokenTransactionSender(params: {
    txType: FungibleTokenTransactionType;
    from: PublicKey;
    to: PublicKey;
}): PublicKey;
export declare function buildTokenTransaction(params: {
    txType: FungibleTokenTransactionType;
    chain: blockchain;
    fee: UInt64;
    nonce: number;
    memo?: string;
    tokenAddress: PublicKey;
    from: PublicKey;
    to: PublicKey;
    amount?: UInt64;
    price?: UInt64;
    whitelist?: WhitelistedAddressList | string;
    developerAddress?: PublicKey;
    developerFee?: UInt64;
    provingKey: PublicKey;
    provingFee: UInt64;
}): Promise<{
    tx: Transaction<false, false>;
    isWhitelisted: boolean;
    adminContractAddress: PublicKey;
    adminAddress: PublicKey;
    symbol: string;
    verificationKeyHashes: string[];
    whitelist: string | undefined;
}>;
export declare function getTokenSymbolAndAdmin(params: {
    txType: FungibleTokenTransactionType;
    tokenAddress: PublicKey;
    chain: blockchain;
}): Promise<{
    adminContractAddress: PublicKey;
    adminAddress: PublicKey;
    symbol: string;
    isWhitelisted: boolean;
    verificationKeyHashes: string[];
}>;
