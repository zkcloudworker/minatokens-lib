import { DeployTokenParams, DeployTransaction, JobId, ProveTokenTransaction, TokenTransaction, JobResult, TransactionTokenParams, FaucetParams, FaucetResponse, TransactionStatusParams, TransactionStatus, TokenState, NFTRequestAnswer, NFTRequestParams, BalanceResponse, BalanceRequestParams } from "./types.js";
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
    buildDeployTokenTransaction(params: DeployTokenParams): Promise<DeployTransaction>;
    tokenTransaction(params: TransactionTokenParams): Promise<TokenTransaction>;
    proveTokenTransaction(params: ProveTokenTransaction): Promise<JobId>;
    proveJobResult(params: JobId): Promise<JobResult>;
    faucet(params: FaucetParams): Promise<FaucetResponse>;
    txStatus(params: TransactionStatusParams): Promise<TransactionStatus>;
    waitForJobResult(jobId: string): Promise<string | undefined>;
    waitForTransaction(hash: string, timeout?: number): Promise<void>;
    apiCall<TParams, TResponse>(params: {
        endpoint: string;
        callParams: TParams;
    }): Promise<TResponse>;
    sleep(ms: number): Promise<unknown>;
}
