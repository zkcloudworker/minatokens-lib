import { DeployTransaction, JobId, TokenTransaction, TokenTransactions, FaucetParams, FaucetResponse, TransactionStatusParams, TransactionStatus, TokenState, NFTRequestAnswer, NFTRequestParams, BalanceResponse, BalanceRequestParams, ProveTokenTransactions, JobResults } from "./types.js";
import { TransactionParams, AirdropTransactionParams } from "./transaction.js";
export type ApiResponse<T> = {
    /** Bad request - invalid input parameters */
    status: 400;
    json: {
        error: string;
    };
} | {
    /** Unauthorized - user not authenticated */
    status: 401;
    json: {
        error: string;
    };
} | {
    /** Forbidden - user doesn't have permission */
    status: 403;
    json: {
        error: string;
    };
} | {
    /** Too many requests */
    status: 429;
    json: {
        error: string;
    };
} | {
    /** Internal server error - something went wrong during deployment */
    status: 500;
    json: {
        error: string;
    };
} | {
    /** Service unavailable - blockchain or other external service is down */
    status: 503;
    json: {
        error: string;
    };
} | {
    /** Success - API response */
    status: 200;
    json: T;
};
export declare class MinaTokensAPI {
    readonly chain: "mainnet" | "devnet" | "zeko" | "local";
    readonly apiKey: string;
    constructor(params: {
        apiKey: string;
        chain?: "mainnet" | "devnet" | "zeko" | "local";
    });
    getTokenInfo(tokenAddress: string): Promise<TokenState>;
    getBalance(params: BalanceRequestParams): Promise<BalanceResponse>;
    getNFTInfo(params: NFTRequestParams): Promise<NFTRequestAnswer>;
    buildTransaction(params: TransactionParams): Promise<DeployTransaction | TokenTransaction>;
    buildAirdrop(params: AirdropTransactionParams): Promise<TokenTransactions>;
    proveTransactions(params: ProveTokenTransactions): Promise<JobId>;
    getProof(params: JobId): Promise<JobResults>;
    faucet(params: FaucetParams): Promise<FaucetResponse>;
    txStatus(params: TransactionStatusParams): Promise<TransactionStatus>;
    waitForProofs(jobId: string): Promise<(string | undefined)[] | undefined>;
    waitForTransaction(hash: string, timeout?: number): Promise<void>;
    apiCall<TParams, TResponse>(params: {
        endpoint: string;
        callParams: TParams;
    }): Promise<TResponse>;
    sleep(ms: number): Promise<unknown>;
}
