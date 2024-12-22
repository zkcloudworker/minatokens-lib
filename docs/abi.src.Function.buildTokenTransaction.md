---
title: buildTokenTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.Function.buildTokenTransaction
order: 21
---

# Function: buildTokenTransaction()

```ts
function buildTokenTransaction(params: {
  args:   | TokenMintTransactionParams
     | TokenTransferTransactionParams
     | TokenAirdropTransactionParams
     | TokenOfferTransactionParams
     | TokenBidTransactionParams
     | TokenBuyTransactionParams
     | TokenSellTransactionParams
     | TokenWithdrawBidTransactionParams
     | TokenWithdrawOfferTransactionParams
     | TokenUpdateBidWhitelistTransactionParams
     | TokenUpdateOfferWhitelistTransactionParams
     | TokenUpdateAdminWhitelistTransactionParams;
  chain: blockchain;
  developerAddress: string;
  provingFee: number;
  provingKey: string;
 }): Promise<{
  adminAddress: PublicKey;
  adminContractAddress: PublicKey;
  isAdvanced: boolean;
  request: Exclude<TokenTransactionParams, LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams>;
  symbol: string;
  tx: Transaction<false, false>;
  verificationKeyHashes: string[];
}>
```

## Parameters

### params

#### args

  \| `TokenMintTransactionParams`
  \| `TokenTransferTransactionParams`
  \| `TokenAirdropTransactionParams`
  \| `TokenOfferTransactionParams`
  \| `TokenBidTransactionParams`
  \| `TokenBuyTransactionParams`
  \| `TokenSellTransactionParams`
  \| `TokenWithdrawBidTransactionParams`
  \| `TokenWithdrawOfferTransactionParams`
  \| `TokenUpdateBidWhitelistTransactionParams`
  \| `TokenUpdateOfferWhitelistTransactionParams`
  \| `TokenUpdateAdminWhitelistTransactionParams`

#### chain

[`blockchain`](abisrctypealiasblockchain)

#### developerAddress

`string`

#### provingFee

`number`

#### provingKey

`string`

## Returns

`Promise`\<\{
  `adminAddress`: `PublicKey`;
  `adminContractAddress`: `PublicKey`;
  `isAdvanced`: `boolean`;
  `request`: `Exclude`\<`TokenTransactionParams`, `LaunchTokenStandardAdminParams` \| `LaunchTokenAdvancedAdminParams`\>;
  `symbol`: `string`;
  `tx`: `Transaction`\<`false`, `false`\>;
  `verificationKeyHashes`: `string`[];
 \}\>

## Defined in

[packages/abi/src/token/build.ts:222](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/token/build.ts#L222)
