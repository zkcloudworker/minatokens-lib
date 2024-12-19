export type AirdropTransactionResponse = {
    /**
     * List of token transactions created for the airdrop.
     */
    txs?: Array<TokenTransaction>;
};
export type BalanceRequestParams = {
    /**
     * The address of the token contract (optional).
     */
    tokenAddress?: string;
    /**
     * The token ID (optional).
     */
    tokenId?: string;
    /**
     * The Mina address for which to retrieve the balance.
     */
    address: string;
};
export type BalanceResponse = {
    /**
     * The address of the token contract (optional).
     */
    tokenAddress?: string;
    /**
     * The token ID (optional).
     */
    tokenId?: string;
    /**
     * The Mina address for which the balance was requested.
     */
    address: string;
    /**
     * The balance of the token for the specified address.
     */
    balance: (number) | null;
};
export type DeployedTokenTransactionBaseParams = TokenTransactionBaseParams & {
    /**
     * The address of the token contract.
     */
    tokenAddress: string;
};
export type ErrorResponse = {
    /**
     * Error message detailing the issue.
     */
    error?: string;
};
export type FaucetParams = {
    /**
     * The Mina address (public key) to receive the test tokens.
     */
    address: string;
};
export type FaucetResponse = {
    /**
     * Indicates whether the faucet request was successful.
     */
    success?: boolean;
    /**
     * The transaction hash of the faucet transfer if successful.
     */
    hash?: string;
    /**
     * Error message if the request failed.
     */
    error?: string;
};
export type JobId = {
    /**
     * The job ID returned by the `/prove` endpoint.
     */
    jobId: string;
};
export type JobResult = {
    /**
     * Indicates whether the proof generation for this transaction was successful.
     */
    success?: boolean;
    /**
     * Error message if proof generation failed for this transaction.
     */
    error?: string;
    /**
     * The transaction data.
     */
    tx?: string;
    /**
     * The transaction hash if broadcasted.
     */
    hash?: string;
};
export type JobResults = {
    /**
     * Indicates whether the job was successful.
     */
    success?: boolean;
    /**
     * The current status of the job.
     */
    jobStatus?: 'created' | 'started' | 'finished' | 'failed' | 'used' | 'restarted';
    /**
     * Error message if the job failed.
     */
    error?: string;
    /**
     * Results for each transaction in the job.
     */
    results?: Array<JobResult>;
};
/**
 * The current status of the job.
 */
export type jobStatus = 'created' | 'started' | 'finished' | 'failed' | 'used' | 'restarted';
export type LaunchTokenAdvancedAdminParams = LaunchTokenTransactionBaseParams & {
    /**
     * Must be "advanced" for advanced admin contract.
     */
    adminContract: 'advanced';
    /**
     * Specifies who can mint tokens.
     */
    canMint: 'whitelist' | 'anyone';
    /**
     * Optional. Whether admin signature is required for minting.
     */
    requireAdminSignatureForMint?: boolean;
    /**
     * Optional. List of whitelisted addresses with optional amounts, or a string.
     */
    whitelist?: Whitelist;
    /**
     * Optional. Maximum total supply. Uses UInt64.MAXINT() if not provided.
     */
    totalSupply?: number;
};
/**
 * Must be "advanced" for advanced admin contract.
 */
export type adminContract = 'advanced';
/**
 * Specifies who can mint tokens.
 */
export type canMint = 'whitelist' | 'anyone';
export type LaunchTokenStandardAdminParams = LaunchTokenTransactionBaseParams & {
    /**
     * Must be "standard" for standard admin contract.
     */
    adminContract?: 'standard';
};
/**
 * Must be "standard" for standard admin contract.
 */
export type adminContract2 = 'standard';
export type LaunchTokenTransactionBaseParams = TokenTransactionBaseParams & {
    /**
     * Must be "token:launch"
     */
    txType?: 'token:launch';
    /**
     * The type of admin contract to use.
     */
    adminContract: 'standard' | 'advanced';
    /**
     * The symbol of the token.
     */
    symbol: string;
    /**
     * Optional. The number of decimal places for the token.
     */
    decimals?: number;
    /**
     * URI or token info object containing metadata.
     */
    uri: (string | TokenInfo);
    /**
     * Optional. The address of the token contract.
     */
    tokenAddress?: string;
    /**
     * Optional. The address of the admin contract.
     */
    adminContractAddress?: string;
    /**
     * Optional. Private key for the token contract.
     */
    tokenContractPrivateKey?: string;
    /**
     * Optional. Private key for the admin contract.
     */
    adminContractPrivateKey?: string;
};
/**
 * Must be "token:launch"
 */
export type txType = 'token:launch';
/**
 * The type of admin contract to use.
 */
export type adminContract3 = 'standard' | 'advanced';
export type NFTRequestAnswer = {
    contractAddress?: string;
    nftAddress?: string;
    tokenId?: string;
    tokenSymbol?: string;
    contractUri?: (string) | null;
    name?: string;
    metadataRoot?: {
        data?: string;
        kind?: string;
    };
    storage?: string;
    owner?: string;
    price?: number;
    version?: number;
    metadata?: {
        [key: string]: unknown;
    } | null;
    algolia?: {
        [key: string]: unknown;
    } | null;
};
export type NFTRequestParams = {
    /**
     * Always set to this contract address for Mina NFTs.
     */
    contractAddress: string;
    /**
     * The unique NFT address.
     */
    nftAddress: string;
};
export type ProofResult = {
    /**
     * Indicates whether the proof generation was successful.
     */
    success?: boolean;
    /**
     * The transaction hash if the proof was successfully applied.
     */
    hash?: string;
    /**
     * Error message if proof generation failed.
     */
    error?: string;
};
export type ProveTokenTransaction = {
    /**
     * The transaction object.
     */
    tx: TokenTransaction;
    /**
     * The signed data for the transaction.
     */
    signedData: string;
    /**
     * Optional. Whether to broadcast the transaction after proving.
     */
    sendTransaction?: boolean;
};
export type ProveTokenTransactions = {
    /**
     * Array of transactions to be proved.
     */
    txs: Array<ProveTokenTransaction>;
};
export type TokenAirdropTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:airdrop"
     */
    txType?: 'token:airdrop';
    /**
     * List of recipients and amounts for the airdrop
     */
    recipients: Array<{
        /**
         * The recipient's address
         */
        address: string;
        /**
         * The amount to airdrop
         */
        amount: number;
        /**
         * Optional memo for this recipient
         */
        memo?: string;
    }>;
};
/**
 * Must be "token:airdrop"
 */
export type txType2 = 'token:airdrop';
export type TokenBidTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:bid:create"
     */
    txType?: 'token:bid:create';
    /**
     * Optional. The private key for bidding.
     */
    bidPrivateKey?: string;
    /**
     * Optional. The address for bidding.
     */
    bidAddress?: string;
    /**
     * The amount to bid.
     */
    amount: number;
    /**
     * The price to bid.
     */
    price: number;
    whitelist?: Whitelist;
};
/**
 * Must be "token:bid:create"
 */
export type txType3 = 'token:bid:create';
export type TokenBuyTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:bid:buy"
     */
    txType?: 'token:bid:buy';
    /**
     * The address of the offer to buy from.
     */
    offerAddress: string;
    /**
     * The amount of tokens to buy.
     */
    amount: number;
};
/**
 * Must be "token:bid:buy"
 */
export type txType4 = 'token:bid:buy';
export type TokenInfo = {
    /**
     * The symbol of the token.
     */
    symbol?: string;
    /**
     * Optional. The name of the token.
     */
    name?: string;
    /**
     * Optional. Description of the token.
     */
    description?: string;
    /**
     * Optional. URL of the token image.
     */
    imageUrl?: string;
    /**
     * Optional. Base64-encoded image data (max 1 MB).
     */
    imageBase64?: string;
    /**
     * Optional. Twitter handle associated with the token.
     */
    twitter?: string;
    /**
     * Optional. Discord link associated with the token.
     */
    discord?: string;
    /**
     * Optional. Telegram link associated with the token.
     */
    telegram?: string;
    /**
     * Optional. Instagram handle associated with the token.
     */
    instagram?: string;
    /**
     * Optional. Facebook page associated with the token.
     */
    facebook?: string;
    /**
     * Optional. Official website of the token.
     */
    website?: string;
    /**
     * Optional. Code for the token contract.
     */
    tokenContractCode?: string;
    /**
     * Optional. Code for the admin contracts.
     */
    adminContractsCode?: Array<(string)>;
};
export type TokenMintTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:mint"
     */
    txType?: 'token:mint';
    /**
     * The address to which tokens are to be minted.
     */
    to: string;
    /**
     * The amount of tokens to mint.
     */
    amount: number;
};
/**
 * Must be "token:mint"
 */
export type txType5 = 'token:mint';
export type TokenOfferTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:offer:create"
     */
    txType?: 'token:offer:create';
    /**
     * Optional. The private key for offering.
     */
    offerPrivateKey?: string;
    /**
     * Optional. The address for offering.
     */
    offerAddress?: string;
    /**
     * The amount to offer.
     */
    amount: number;
    /**
     * The price to offer.
     */
    price: number;
    whitelist?: Whitelist;
};
/**
 * Must be "token:offer:create"
 */
export type txType6 = 'token:offer:create';
export type TokenSellTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:offer:sell"
     */
    txType?: 'token:offer:sell';
    /**
     * The address of the bid to sell to.
     */
    bidAddress: string;
    /**
     * The amount of tokens to sell.
     */
    amount: number;
};
/**
 * Must be "token:offer:sell"
 */
export type txType7 = 'token:offer:sell';
export type TokenState = {
    /**
     * The address of the token contract.
     */
    tokenAddress: string;
    /**
     * The unique identifier of the token.
     */
    tokenId: string;
    /**
     * The address of the admin contract.
     */
    adminContractAddress: string;
    /**
     * The address of the administrator.
     */
    adminAddress: string;
    /**
     * The token balance of the administrator.
     */
    adminTokenBalance: number;
    /**
     * The total supply of the token.
     */
    totalSupply: number;
    /**
     * Indicates if the token contract is paused.
     */
    isPaused: boolean;
    /**
     * The number of decimal places the token uses.
     */
    decimals: number;
    /**
     * The symbol of the token.
     */
    tokenSymbol: string;
    /**
     * The verification key hash of the token contract.
     */
    verificationKeyHash: string;
    /**
     * The URI of the token metadata.
     */
    uri: string;
    /**
     * The version number of the token contract.
     */
    version: number;
    /**
     * The symbol of the admin token.
     */
    adminTokenSymbol: string;
    /**
     * The URI of the admin token metadata.
     */
    adminUri: string;
    /**
     * The verification key hash of the admin contract.
     */
    adminVerificationKeyHash: string;
    adminVersion: number;
};
export type TokenTransaction = TokenTransactionPayloads & {
    request?: TokenTransactionParams;
};
export type TokenTransactionBaseParams = {
    /**
     * Type of the token transaction.
     */
    txType?: string;
    /**
     * Optional. The address of the token contract.
     */
    tokenAddress?: string;
    /**
     * The address (public key) of the sender.
     */
    sender: string;
    /**
     * The private key of the sender. It is NOT recommended to use this field. Please use the `sender` field instead. Use this field at your own risk and only if you know what you are doing and do not have access to mina-signer or wallet to get the signature.
     */
    senderPrivateKey?: string;
    /**
     * Optional. The nonce for the transaction.
     */
    nonce?: number;
    /**
     * Optional. A memo for the transaction.
     */
    memo?: string;
    /**
     * Optional. The developer fee for the transaction.
     */
    developerFee?: number;
};
export type TokenTransactionParams = LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams | TokenMintTransactionParams | TokenTransferTransactionParams | TokenAirdropTransactionParams | TokenOfferTransactionParams | TokenBidTransactionParams | TokenBuyTransactionParams | TokenSellTransactionParams | TokenWithdrawBidTransactionParams | TokenWithdrawOfferTransactionParams | TokenUpdateBidWhitelistTransactionParams | TokenUpdateOfferWhitelistTransactionParams | TokenUpdateAdminWhitelistTransactionParams;
export type TokenTransactionPayloads = {
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
};
export type TokenTransactions = {
    /**
     * Array of token transactions.
     */
    txs: Array<TokenTransaction>;
};
export type TokenTransactionType = 'token:launch' | 'token:mint' | 'token:transfer' | 'token:bid:create' | 'token:offer:create' | 'token:bid:buy' | 'token:offer:sell' | 'token:airdrop' | 'token:bid:withdraw' | 'token:offer:withdraw' | 'token:bid:whitelist' | 'token:offer:whitelist' | 'token:admin:whitelist';
export type TokenTransferTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:transfer"
     */
    txType?: 'token:transfer';
    /**
     * The address to which tokens are to be transferred.
     */
    to: string;
    /**
     * The amount of tokens to transfer.
     */
    amount: number;
};
/**
 * Must be "token:transfer"
 */
export type txType8 = 'token:transfer';
export type TokenUpdateAdminWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:admin:whitelist"
     */
    txType?: 'token:admin:whitelist';
    /**
     * The address of the admin to update whitelist for.
     */
    adminAddress: string;
    /**
     * Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
     */
    whitelist: Whitelist;
};
/**
 * Must be "token:admin:whitelist"
 */
export type txType9 = 'token:admin:whitelist';
export type TokenUpdateBidWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:bid:whitelist"
     */
    txType?: 'token:bid:whitelist';
    /**
     * The address of the bid to update whitelist for.
     */
    bidAddress: string;
    /**
     * Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
     */
    whitelist: Whitelist;
};
/**
 * Must be "token:bid:whitelist"
 */
export type txType10 = 'token:bid:whitelist';
export type TokenUpdateOfferWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:offer:whitelist"
     */
    txType?: 'token:offer:whitelist';
    /**
     * The address of the offer to update whitelist for.
     */
    offerAddress: string;
    /**
     * Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
     */
    whitelist: Whitelist;
};
/**
 * Must be "token:offer:whitelist"
 */
export type txType11 = 'token:offer:whitelist';
export type TokenWithdrawBidTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:bid:withdraw"
     */
    txType?: 'token:bid:withdraw';
    /**
     * The address of the bid to withdraw from.
     */
    bidAddress: string;
    /**
     * The amount to withdraw from the bid.
     */
    amount: number;
};
/**
 * Must be "token:bid:withdraw"
 */
export type txType12 = 'token:bid:withdraw';
export type TokenWithdrawOfferTransactionParams = DeployedTokenTransactionBaseParams & {
    /**
     * Must be "token:offer:withdraw"
     */
    txType?: 'token:offer:withdraw';
    /**
     * The address of the offer to withdraw from.
     */
    offerAddress: string;
    /**
     * The amount to withdraw from the offer.
     */
    amount: number;
};
/**
 * Must be "token:offer:withdraw"
 */
export type txType13 = 'token:offer:withdraw';
export type TransactionStatus = {
    /**
     * The transaction hash.
     */
    hash?: string;
    /**
     * The status of the transaction (e.g., applied, failed, pending).
     */
    status?: string;
};
export type TransactionStatusParams = {
    /**
     * The transaction hash to check the status of.
     */
    hash: string;
};
export type TxStatus = {
    /**
     * The height of the block containing the transaction.
     */
    blockHeight?: number;
    /**
     * The state hash of the block.
     */
    stateHash?: string;
    /**
     * The status of the block.
     */
    blockStatus?: string;
    /**
     * The timestamp of the block.
     */
    timestamp?: number;
    /**
     * The transaction hash.
     */
    txHash?: string;
    /**
     * The status of the transaction in the block.
     */
    txStatus?: string;
};
/**
 * Optional. List of whitelisted addresses with optional amounts, or a string.
 */
export type Whitelist = Array<{
    /**
     * The whitelisted address.
     */
    address: string;
    /**
     * Optional. The amount allowed to bid.
     */
    amount?: number;
}> | string;
export type LaunchTokenData = {
    body: (LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams);
};
export type LaunchTokenResponse = (TokenTransaction);
export type LaunchTokenError = (ErrorResponse);
export type GetNftV2InfoData = {
    body: NFTRequestParams;
};
export type GetNftV2InfoResponse = (NFTRequestAnswer);
export type GetNftV2InfoError = (ErrorResponse);
export type FaucetData = {
    body: FaucetParams;
};
export type FaucetResponse2 = (FaucetResponse);
export type FaucetError = (ErrorResponse);
export type GetTokenInfoData = {
    body: {
        /**
         * The address of the token contract.
         */
        tokenAddress: string;
    };
};
export type GetTokenInfoResponse = (TokenState);
export type GetTokenInfoError = (ErrorResponse);
export type GetTokenBalanceData = {
    body: BalanceRequestParams;
};
export type GetTokenBalanceResponse = (BalanceResponse);
export type GetTokenBalanceError = (ErrorResponse);
export type ProveData = {
    body: (ProveTokenTransaction | ProveTokenTransactions);
};
export type ProveResponse = (JobId);
export type ProveError = (ErrorResponse);
export type GetProofData = {
    body: JobId;
};
export type GetProofResponse = (JobResults);
export type GetProofError = (ErrorResponse);
export type TxStatusData = {
    body: TransactionStatusParams;
};
export type TxStatusResponse = (TransactionStatus);
export type TxStatusError = (ErrorResponse);
export type MintTokensData = {
    body: TokenMintTransactionParams;
};
export type MintTokensResponse = (TokenTransaction);
export type MintTokensError = (ErrorResponse);
export type TransferTokensData = {
    body: TokenTransferTransactionParams;
};
export type TransferTokensResponse = (TokenTransaction);
export type TransferTokensError = (ErrorResponse);
export type AirdropTokensData = {
    body: TokenAirdropTransactionParams;
};
export type AirdropTokensResponse = (AirdropTransactionResponse);
export type AirdropTokensError = (ErrorResponse);
export type TokenBidData = {
    body: TokenBidTransactionParams;
};
export type TokenBidResponse = (TokenTransaction);
export type TokenBidError = (ErrorResponse);
export type TokenOfferData = {
    body: TokenOfferTransactionParams;
};
export type TokenOfferResponse = (TokenTransaction);
export type TokenOfferError = (ErrorResponse);
export type BuyTokensData = {
    body: TokenBuyTransactionParams;
};
export type BuyTokensResponse = (TokenTransaction);
export type BuyTokensError = (ErrorResponse);
export type SellTokensData = {
    body: TokenSellTransactionParams;
};
export type SellTokensResponse = (TokenTransaction);
export type SellTokensError = (ErrorResponse);
export type WithdrawTokenBidData = {
    body: TokenWithdrawBidTransactionParams;
};
export type WithdrawTokenBidResponse = (TokenTransaction);
export type WithdrawTokenBidError = (ErrorResponse);
export type WithdrawTokenOfferData = {
    body: TokenWithdrawOfferTransactionParams;
};
export type WithdrawTokenOfferResponse = (TokenTransaction);
export type WithdrawTokenOfferError = (ErrorResponse);
export type UpdateTokenBidWhitelistData = {
    body: TokenUpdateBidWhitelistTransactionParams;
};
export type UpdateTokenBidWhitelistResponse = (TokenTransaction);
export type UpdateTokenBidWhitelistError = (ErrorResponse);
export type UpdateTokenOfferWhitelistData = {
    body: TokenUpdateOfferWhitelistTransactionParams;
};
export type UpdateTokenOfferWhitelistResponse = (TokenTransaction);
export type UpdateTokenOfferWhitelistError = (ErrorResponse);
export type UpdateTokenAdminWhitelistData = {
    body: TokenUpdateAdminWhitelistTransactionParams;
};
export type UpdateTokenAdminWhitelistResponse = (TokenTransaction);
export type UpdateTokenAdminWhitelistError = (ErrorResponse);
