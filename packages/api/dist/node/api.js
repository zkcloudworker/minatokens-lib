export class MinaTokensAPI {
    constructor(params) {
        const { chain, apiKey } = params;
        this.chain = chain ?? "devnet";
        this.apiKey = apiKey;
    }
    getTokenInfo(tokenAddress) {
        return this.apiCall({
            endpoint: "info",
            callParams: { tokenAddress },
        });
    }
    getBalance(params) {
        return this.apiCall({
            endpoint: "balance",
            callParams: params,
        });
    }
    getNFTInfo(params) {
        return this.apiCall({
            endpoint: "nft",
            callParams: params,
        });
    }
    buildTransaction(params) {
        return this.apiCall({
            endpoint: params.txType,
            callParams: params,
        });
    }
    buildAirdrop(params) {
        return this.apiCall({
            endpoint: "airdrop",
            callParams: params,
        });
    }
    proveTransactions(params) {
        return this.apiCall({
            endpoint: "prove",
            callParams: params,
        });
    }
    getProof(params) {
        return this.apiCall({
            endpoint: "proof",
            callParams: params,
        });
    }
    faucet(params) {
        return this.apiCall({
            endpoint: "faucet",
            callParams: params,
        });
    }
    txStatus(params) {
        return this.apiCall({
            endpoint: "tx-status",
            callParams: params,
        });
    }
    async waitForProofs(jobId) {
        console.log("Job ID:", jobId);
        let errorCount = 0;
        const startTime = Date.now();
        console.log("Waiting for job result...");
        while (errorCount < 100 && Date.now() - startTime < 1000 * 60 * 10) {
            try {
                const jobResults = await this.getProof({ jobId });
                const jobStatus = jobResults.jobStatus;
                if (jobResults.success &&
                    (jobStatus === "finished" || jobStatus === "used")) {
                    return jobResults.results?.map((result) => result.hash ?? "") ?? [];
                }
                if (jobStatus === "failed") {
                    console.error(`Job ${jobId} failed`);
                    return undefined;
                }
            }
            catch (error) {
                errorCount++;
                console.error(error);
            }
            await this.sleep(10000);
        }
        return undefined;
    }
    async waitForTransaction(hash, timeout = 1000 * 60 * 60 * 5) {
        console.log(`Waiting for transaction ${hash} to be included in a block...`);
        const startTime = Date.now();
        let status = "pending";
        let errorCount = 0;
        while (status !== "applied" &&
            errorCount < 100 &&
            Date.now() - startTime < timeout) {
            try {
                const result = await this.txStatus({ hash });
                status = result.status;
                if (status === "failed") {
                    throw new Error(`Transaction ${hash} failed: ${JSON.stringify({ result })}`);
                }
                else if (status === "applied") {
                    console.log(`Transaction ${hash} included in a block`, result);
                    return;
                }
            }
            catch (error) {
                errorCount++;
                console.error(error);
            }
            await this.sleep(30000);
        }
        throw new Error(`Transaction ${hash} not included in a block, timeout or too many errors`);
    }
    async apiCall(params) {
        const { endpoint, callParams } = params;
        if (this.chain === "mainnet") {
            throw new Error("Mainnet is not supported yet");
        }
        const endpointUrl = this.chain === "devnet"
            ? "https://minatokens.com/api/v1"
            : this.chain === "zeko"
                ? "https://zekotokens.com/api/v1"
                : "http://localhost:3000/api/v1";
        try {
            const response = await fetch(`${endpointUrl}/${endpoint.toLowerCase()}`, {
                method: "POST",
                headers: {
                    "x-api-key": this.apiKey,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(callParams),
            });
            if (!response.ok) {
                const result = await response.json();
                throw new Error(`API call failed: ${response.status} ${response.statusText} ${result?.error ?? "unknown error"}`);
            }
            const result = (await response.json());
            if (process.env.DEBUG === "true") {
                console.log(`API call:\nendpoint: ${endpoint}\nbody: ${JSON.stringify(callParams)}\nstatus: ${response.status}\nstatusText: ${response.statusText}\nresponse: ${JSON.stringify(result)}`);
            }
            return result;
        }
        catch (error) {
            throw new Error(error?.message ?? (error ? String(error) : "Token API call failed"));
        }
    }
    async sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
//# sourceMappingURL=api.js.map