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
  airdropTokens: () => airdropTokens,
  buyTokens: () => buyTokens,
  client: () => client,
  config: () => config,
  faucet: () => faucet,
  getNftV2Info: () => getNftV2Info,
  getProof: () => getProof,
  getTokenBalance: () => getTokenBalance,
  getTokenInfo: () => getTokenInfo,
  launchToken: () => launchToken,
  mintTokens: () => mintTokens,
  prove: () => prove,
  sellTokens: () => sellTokens,
  tokenBid: () => tokenBid,
  tokenOffer: () => tokenOffer,
  transferTokens: () => transferTokens,
  txStatus: () => txStatus,
  updateTokenAdminWhitelist: () => updateTokenAdminWhitelist,
  updateTokenBidWhitelist: () => updateTokenBidWhitelist,
  updateTokenOfferWhitelist: () => updateTokenOfferWhitelist,
  waitForProofs: () => waitForProofs,
  waitForTransaction: () => waitForTransaction,
  withdrawTokenBid: () => withdrawTokenBid,
  withdrawTokenOffer: () => withdrawTokenOffer
});
module.exports = __toCommonJS(node_exports);

// dist/node/client/sdk.gen.js
var import_client_fetch = require("@hey-api/client-fetch");
var client = (0, import_client_fetch.createClient)((0, import_client_fetch.createConfig)());
var launchToken = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/launch"
  });
};
var getNftV2Info = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/info/nft-v2"
  });
};
var faucet = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/faucet"
  });
};
var getTokenInfo = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/info/token"
  });
};
var getTokenBalance = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/info/balance"
  });
};
var prove = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/transaction/prove"
  });
};
var getProof = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/transaction/proof"
  });
};
var txStatus = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/transaction/status"
  });
};
var mintTokens = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/mint"
  });
};
var transferTokens = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/transfer"
  });
};
var airdropTokens = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/airdrop"
  });
};
var tokenBid = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/bid/create"
  });
};
var tokenOffer = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/offer/create"
  });
};
var buyTokens = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/offer/buy"
  });
};
var sellTokens = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/bid/sell"
  });
};
var withdrawTokenBid = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/bid/withdraw"
  });
};
var withdrawTokenOffer = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/offer/withdraw"
  });
};
var updateTokenBidWhitelist = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/bid/whitelist"
  });
};
var updateTokenOfferWhitelist = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/offer/whitelist"
  });
};
var updateTokenAdminWhitelist = (options) => {
  return (options?.client ?? client).post({
    ...options,
    url: "/token/admin/whitelist"
  });
};

// dist/node/config.js
function config({ apiKey, chain, throwOnError }) {
  client.setConfig({
    headers: {
      "x-api-key": apiKey
    },
    baseUrl: chain === "zeko" ? "https://zekotokens.com/api/v1/" : "https://minatokens.com/api/v1/",
    throwOnError: throwOnError ?? true
  });
}

// dist/node/wait.js
async function waitForProofs(jobId) {
  console.log("Job ID:", jobId);
  let errorCount = 0;
  const startTime = Date.now();
  console.log("Waiting for job result...");
  while (errorCount < 100 && Date.now() - startTime < 1e3 * 60 * 10) {
    try {
      const jobResults = (await getProof({ body: { jobId } })).data;
      const jobStatus = jobResults?.jobStatus;
      if (jobResults?.success === true && (jobStatus === "finished" || jobStatus === "used")) {
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
    await sleep(1e4);
  }
  return void 0;
}
async function waitForTransaction(hash, timeout = 1e3 * 60 * 60 * 5) {
  console.log(`Waiting for transaction ${hash} to be included in a block...`);
  const startTime = Date.now();
  let status = "pending";
  let errorCount = 0;
  while (status !== "applied" && errorCount < 100 && Date.now() - startTime < timeout) {
    try {
      const result = (await txStatus({ body: { hash } })).data;
      status = result?.status ?? "pending";
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
    await sleep(3e4);
  }
  throw new Error(`Transaction ${hash} not included in a block, timeout or too many errors`);
}
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  airdropTokens,
  buyTokens,
  client,
  config,
  faucet,
  getNftV2Info,
  getProof,
  getTokenBalance,
  getTokenInfo,
  launchToken,
  mintTokens,
  prove,
  sellTokens,
  tokenBid,
  tokenOffer,
  transferTokens,
  txStatus,
  updateTokenAdminWhitelist,
  updateTokenBidWhitelist,
  updateTokenOfferWhitelist,
  waitForProofs,
  waitForTransaction,
  withdrawTokenBid,
  withdrawTokenOffer
});
