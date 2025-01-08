---
title: getTokenSymbolAndAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.Function.getTokenSymbolAndAdmin
order: 25
---

# Function: getTokenSymbolAndAdmin()

```ts
function getTokenSymbolAndAdmin(params: {
  bidAddress: PublicKey;
  chain: blockchain;
  offerAddress: PublicKey;
  to: PublicKey;
  tokenAddress: PublicKey;
  txType: TokenTransactionType;
 }): Promise<{
  adminAddress: PublicKey;
  adminContractAddress: PublicKey;
  isAdvanced: boolean;
  isToNewAccount: boolean;
  symbol: string;
  verificationKeyHashes: string[];
}>
```

Defined in: [packages/abi/src/token/build.ts:714](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/token/build.ts#L714)

## Parameters

### params

#### bidAddress

`PublicKey`

#### chain

[`blockchain`](abisrctypealiasblockchain)

#### offerAddress

`PublicKey`

#### to

`PublicKey`

#### tokenAddress

`PublicKey`

#### txType

`TokenTransactionType`

## Returns

`Promise`\<\{
  `adminAddress`: `PublicKey`;
  `adminContractAddress`: `PublicKey`;
  `isAdvanced`: `boolean`;
  `isToNewAccount`: `boolean`;
  `symbol`: `string`;
  `verificationKeyHashes`: `string`[];
 \}\>
