import {
  DeployTokenParams,
  DeployTransaction,
  JobId,
  ProveTokenTransaction,
  TokenTransaction,
  JobResult,
  TransactionTokenParams,
  FaucetParams,
  FaucetResponse,
  TransactionStatusParams,
  TransactionStatus,
  TokenState,
  NFTRequestAnswer,
  NFTRequestParams,
  BalanceResponse,
  BalanceRequestParams,
} from "./types.js";

export class MinaTokensAPI {
  readonly chain: "mainnet" | "devnet" | "zeko" | "local";
  readonly apiKey: string;

  constructor(params: {
    apiKey: string;
    chain?: "mainnet" | "devnet" | "zeko" | "local";
  }) {
    const { chain, apiKey } = params;
    this.chain = chain ?? "devnet";
    this.apiKey = apiKey;
  }

  getTokenInfo(tokenAddress: string) {
    return this.apiCall<{ tokenAddress: string }, TokenState>({
      endpoint: "info",
      callParams: { tokenAddress },
    });
  }

  getBalance(params: BalanceRequestParams) {
    return this.apiCall<BalanceRequestParams, BalanceResponse>({
      endpoint: "balance",
      callParams: params,
    });
  }

  getNFTInfo(params: NFTRequestParams) {
    return this.apiCall<NFTRequestParams, NFTRequestAnswer>({
      endpoint: "nft",
      callParams: params,
    });
  }

  buildDeployTokenTransaction(params: DeployTokenParams) {
    return this.apiCall<DeployTokenParams, DeployTransaction>({
      endpoint: "deploy",
      callParams: params,
    });
  }

  tokenTransaction(params: TransactionTokenParams) {
    return this.apiCall<TransactionTokenParams, TokenTransaction>({
      endpoint: "transaction",
      callParams: params,
    });
  }

  proveTokenTransaction(params: ProveTokenTransaction) {
    return this.apiCall<ProveTokenTransaction, JobId>({
      endpoint: "prove",
      callParams: params,
    });
  }

  proveJobResult(params: JobId) {
    return this.apiCall<JobId, JobResult>({
      endpoint: "result",
      callParams: params,
    });
  }

  faucet(params: FaucetParams) {
    return this.apiCall<FaucetParams, FaucetResponse>({
      endpoint: "faucet",
      callParams: params,
    });
  }

  txStatus(params: TransactionStatusParams) {
    return this.apiCall<TransactionStatusParams, TransactionStatus>({
      endpoint: "tx-status",
      callParams: params,
    });
  }

  async waitForJobResult(jobId: string): Promise<string | undefined> {
    console.log("Job ID:", jobId);
    let errorCount = 0;
    const startTime = Date.now();
    console.log("Waiting for job result...");
    while (errorCount < 100 && Date.now() - startTime < 1000 * 60 * 10) {
      try {
        const jobResult = await this.proveJobResult({ jobId });

        if (jobResult.hash) {
          const hash = jobResult.hash;
          console.log("Transaction hash:", hash);
          return hash;
        }
        const jobStatus = jobResult.jobStatus;
        if (jobStatus === "failed") {
          console.log(`Job ${jobId} failed`);
          return undefined;
        }
      } catch (error) {
        errorCount++;
        console.error(error);
      }
      await this.sleep(10000);
    }
    return undefined;
  }

  async waitForTransaction(hash: string, timeout = 1000 * 60 * 60 * 5) {
    console.log(`Waiting for transaction ${hash} to be included in a block...`);
    const startTime = Date.now();
    let status = "pending";
    let errorCount = 0;
    while (
      status !== "applied" &&
      errorCount < 100 &&
      Date.now() - startTime < timeout
    ) {
      try {
        const result = await this.txStatus({ hash });
        status = result.status;
        if (status === "failed") {
          throw new Error(
            `Transaction ${hash} failed: ${JSON.stringify({ result })}`
          );
        } else if (status === "applied") {
          console.log(`Transaction ${hash} included in a block`, result);
          return;
        }
      } catch (error) {
        errorCount++;
        console.error(error);
      }

      await this.sleep(30000);
    }
    throw new Error(
      `Transaction ${hash} not included in a block, timeout or too many errors`
    );
  }

  async apiCall<TParams, TResponse>(params: {
    endpoint: string;
    callParams: TParams;
  }): Promise<TResponse> {
    const { endpoint, callParams } = params;
    if (this.chain === "mainnet") {
      throw new Error("Mainnet is not supported yet");
    }
    const endpointUrl =
      this.chain === "devnet"
        ? "https://minatokens.com/api/v1"
        : this.chain === "zeko"
        ? "https://zekotokens.com/api/v1"
        : "http://localhost:3000/api/v1";
    try {
      const response = await fetch(`${endpointUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(callParams),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(
          `API call failed: ${response.status} ${response.statusText} ${
            result?.error ?? "unknown error"
          }`
        );
      }

      return (await response.json()) as TResponse;
    } catch (error: any) {
      throw new Error(
        error?.message ?? (error ? String(error) : "Token API call failed")
      );
    }
  }

  async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
