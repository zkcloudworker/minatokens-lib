"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/node/index.js
var node_exports = {};
__export(node_exports, {
  MinaTokensAPI: () => MinaTokensAPI,
  tokenTransactionTypes: () => tokenTransactionTypes
});
module.exports = __toCommonJS(node_exports);

// dist/node/api.js
var MinaTokensAPI = class {
  constructor(params) {
    const { chain, apiKey } = params;
    this.chain = chain ?? "devnet";
    this.apiKey = apiKey;
  }
  getTokenInfo(tokenAddress) {
    return this.apiCall({
      endpoint: "info",
      callParams: { tokenAddress }
    });
  }
  getBalance(params) {
    return this.apiCall({
      endpoint: "balance",
      callParams: params
    });
  }
  getNFTInfo(params) {
    return this.apiCall({
      endpoint: "nft",
      callParams: params
    });
  }
  buildTransaction(params) {
    return this.apiCall({
      endpoint: params.txType,
      callParams: params
    });
  }
  buildAirdrop(params) {
    return this.apiCall({
      endpoint: "airdrop",
      callParams: params
    });
  }
  proveTransactions(params) {
    return this.apiCall({
      endpoint: "prove",
      callParams: params
    });
  }
  getProof(params) {
    return this.apiCall({
      endpoint: "proof",
      callParams: params
    });
  }
  faucet(params) {
    return this.apiCall({
      endpoint: "faucet",
      callParams: params
    });
  }
  txStatus(params) {
    return this.apiCall({
      endpoint: "tx-status",
      callParams: params
    });
  }
  async waitForProofs(jobId) {
    console.log("Job ID:", jobId);
    let errorCount = 0;
    const startTime = Date.now();
    console.log("Waiting for job result...");
    while (errorCount < 100 && Date.now() - startTime < 1e3 * 60 * 10) {
      try {
        const jobResults = await this.getProof({ jobId });
        const jobStatus = jobResults.jobStatus;
        if (jobResults.success && (jobStatus === "finished" || jobStatus === "used")) {
          return jobResults.results?.map((result) => result.hash ?? "") ?? [];
        }
        if (jobStatus === "failed") {
          console.error(`Job ${jobId} failed`);
          return void 0;
        }
      } catch (error) {
        errorCount++;
        console.error(error);
      }
      await this.sleep(1e4);
    }
    return void 0;
  }
  async waitForTransaction(hash, timeout = 1e3 * 60 * 60 * 5) {
    console.log(`Waiting for transaction ${hash} to be included in a block...`);
    const startTime = Date.now();
    let status = "pending";
    let errorCount = 0;
    while (status !== "applied" && errorCount < 100 && Date.now() - startTime < timeout) {
      try {
        const result = await this.txStatus({ hash });
        status = result.status;
        if (status === "failed") {
          throw new Error(`Transaction ${hash} failed: ${JSON.stringify({ result })}`);
        } else if (status === "applied") {
          console.log(`Transaction ${hash} included in a block`, result);
          return;
        }
      } catch (error) {
        errorCount++;
        console.error(error);
      }
      await this.sleep(3e4);
    }
    throw new Error(`Transaction ${hash} not included in a block, timeout or too many errors`);
  }
  async apiCall(params) {
    const { endpoint, callParams } = params;
    if (this.chain === "mainnet") {
      throw new Error("Mainnet is not supported yet");
    }
    const endpointUrl = this.chain === "devnet" ? "https://minatokens.com/api/v1" : this.chain === "zeko" ? "https://zekotokens.com/api/v1" : "http://localhost:3000/api/v1";
    try {
      const response = await fetch(`${endpointUrl}/${endpoint.toLowerCase()}`, {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(callParams)
      });
      if (!response.ok) {
        const result2 = await response.json();
        throw new Error(`API call failed: ${response.status} ${response.statusText} ${result2?.error ?? "unknown error"}`);
      }
      const result = await response.json();
      if (process.env.DEBUG === "true") {
        console.log(`API call:
endpoint: ${endpoint}
body: ${JSON.stringify(callParams)}
status: ${response.status}
statusText: ${response.statusText}
response: ${JSON.stringify(result)}`);
      }
      return result;
    } catch (error) {
      throw new Error(error?.message ?? (error ? String(error) : "Token API call failed"));
    }
  }
  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

// dist/node/types.js
var tokenTransactionTypes = [
  "launch",
  "mint",
  "transfer",
  "bid",
  "offer",
  "buy",
  "sell",
  "airdrop",
  "withdrawBid",
  "withdrawOffer",
  "updateBidWhitelist",
  "updateOfferWhitelist",
  "updateAdminWhitelist"
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MinaTokensAPI,
  tokenTransactionTypes
});
