import { type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { LaunchTokenData, GetContractInfoData, GetContractInfoResponse, GetNftV2InfoData, FaucetData, GetTokenInfoData, GetTokenBalanceData, ProveData, GetProofData, TxStatusData, MintTokensData, TransferTokensData, AirdropTokensData, RedeemTokensData, BurnTokensData, TokenBidData, TokenOfferData, BuyTokensData, SellTokensData, WithdrawTokenBidData, WithdrawTokenOfferData, UpdateTokenBidWhitelistData, UpdateTokenOfferWhitelistData, UpdateTokenAdminWhitelistData } from './types.gen.js';
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptions<boolean, string>>;
/**
 * Deploy a new fungible token contract.
 * The `launch` endpoint is used to deploy a new fungible token on the Mina blockchain.
 * It allows users to create a new token with customizable parameters such as symbol,
 * decimals, URI, and admin contract type (standard or advanced).
 *
 */
export declare const launchToken: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<LaunchTokenData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Retrieve contract info
 * Retrieves detailed information about a contract.
 */
export declare const getContractInfo: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetContractInfoData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<GetContractInfoResponse, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Retrieve NFT Info
 * Retrieves detailed information about a Mina NFT V2.
 */
export declare const getNftV2Info: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetNftV2InfoData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").NFTRequestAnswer, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Request Funds from Faucet
 * Requests funds from the faucet for testing purposes.
 */
export declare const faucet: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<FaucetData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").FaucetResponse, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Retrieve information about a fungible token.
 * The `info` endpoint retrieves detailed information about a specific fungible token deployed on the Mina blockchain.
 *
 */
export declare const getTokenInfo: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetTokenInfoData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenState, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Retrieve the balance of a specific token for an address.
 * The `balance` endpoint retrieves the balance of a specific fungible token for a given Mina address.
 *
 */
export declare const getTokenBalance: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetTokenBalanceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").BalanceResponse, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Generate proofs for signed token transactions.
 * The `prove` endpoint initiates the proof generation process for a set of signed token transactions.
 * It returns a job ID which can be used to check the status and retrieve the proofs or tx hashes using the `/proof` endpoint.
 *
 */
export declare const prove: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ProveData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").JobId, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Check the status of a proof generation job and retrieve proofs.
 * The `proof` endpoint allows you to check the status of a proof generation job initiated via the `/prove` endpoint.
 * It returns the status of the job and the proofs or tx hashes if they are ready.
 *
 */
export declare const getProof: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProofData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").JobResults, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Retrieve the status of a transaction by its hash.
 * The `tx-status` endpoint allows you to check the current status of a transaction on the Mina blockchain by providing the transaction hash. It returns whether the transaction has been applied, failed, or is still pending.
 *
 */
export declare const txStatus: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<TxStatusData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TransactionStatus, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Mint new tokens to a specified address.
 * The `mint` endpoint allows authorized users to mint new tokens of a fungible token on the Mina blockchain.
 * This transaction increases the total supply of the token by creating new tokens and assigning them to a specified address.
 * The sender must have the authority to mint tokens, typically the admin of the token contract.
 *
 */
export declare const mintTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<MintTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Transfer tokens from one address to another.
 * The `transfer` endpoint allows users to transfer tokens of a fungible token on the Mina blockchain from one address to another.
 * The sender must have sufficient balance and appropriate permissions to perform the transfer.
 *
 */
export declare const transferTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<TransferTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Distribute tokens to multiple addresses via airdrop.
 * Allows users to distribute tokens to multiple addresses in a single transaction.
 * This is efficient for distributing tokens during events like token launches or community rewards.
 *
 */
export declare const airdropTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<AirdropTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").AirdropTransactionResponse, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Redeem tokens for a MINA (applicable for Fungible Tokens with Bonding Curve Admin)
 * The `redeem` endpoint allows users to redeem tokens of a fungible token on the Mina blockchain for a MINA.
 * The sender must have sufficient balance and appropriate permissions to perform the transfer.
 *
 */
export declare const redeemTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<RedeemTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Burn tokens from one address.
 * The `burn` endpoint allows users to burn tokens of a fungible token on the Mina blockchain from one address.
 * The sender must have sufficient balance and appropriate permissions to perform the burn.
 *
 */
export declare const burnTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<BurnTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Place a bid on a token
 * Allows users to place a bid on an token.
 *
 */
export declare const tokenBid: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<TokenBidData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Create an offer to sell tokens at a specified price.
 * Allows users to create an offer to sell a specified amount of tokens at a given price.
 *
 */
export declare const tokenOffer: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<TokenOfferData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Purchase tokens from an existing offer.
 * Allows users to purchase tokens from an existing offer on the Mina blockchain.
 * This endpoint facilitates the transaction where tokens are transferred from the offer address to the buyer's address in exchange for the specified price.
 *
 */
export declare const buyTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<BuyTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Sell a token to the Bid contract.
 * Allows token owners to sell their tokens to the Bid contract.
 *
 */
export declare const sellTokens: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<SellTokensData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Withdraw a previously placed bid on an token.
 * Allows users to withdraw a bid they have previously placed using the `/bid` endpoint.
 * This transaction cancels the active bid, releasing any locked funds.
 *
 */
export declare const withdrawTokenBid: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<WithdrawTokenBidData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Withdraw a previously made offer to sell a token.
 * Allows users to withdraw an offer they have previously made using the `/offer` endpoint.
 * This transaction cancels the active offer, releasing any locked tokens.
 *
 */
export declare const withdrawTokenOffer: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<WithdrawTokenOfferData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Update the bid whitelist
 * Allows administrators to update the whitelist of addresses permitted to interact with the Bid contract.
 * This is essential for managing participation in bidding processes, especially for controlled or private auctions.
 *
 */
export declare const updateTokenBidWhitelist: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateTokenBidWhitelistData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Update the offer whitelist
 * Allows administrators to update the whitelist of addresses permitted to interact with the Offer contract.
 * This is essential for managing participation in offer processes, especially for controlled or private sales.
 *
 */
export declare const updateTokenOfferWhitelist: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateTokenOfferWhitelistData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
/**
 * Update the advanced admin whitelist
 * Allows administrators to update the whitelist of admin contracts.
 *
 */
export declare const updateTokenAdminWhitelist: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateTokenAdminWhitelistData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").TokenTransaction, import("./types.gen.js").ErrorResponse, ThrowOnError>;
