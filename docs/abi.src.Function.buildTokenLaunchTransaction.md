---
title: buildTokenLaunchTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.Function.buildTokenLaunchTransaction
order: 20
---

# Function: buildTokenLaunchTransaction()

```ts
function buildTokenLaunchTransaction(params: {
  args: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
  chain: blockchain;
  developerAddress: string;
  provingFee: number;
  provingKey: string;
 }): Promise<{
  isAdvanced: boolean;
  request: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
  tx: Transaction<false, false>;
  verificationKeyHashes: string[];
}>
```

## Parameters

### params

#### args

`LaunchTokenStandardAdminParams` \| `LaunchTokenAdvancedAdminParams`

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
  `isAdvanced`: `boolean`;
  `request`: `LaunchTokenStandardAdminParams` \| `LaunchTokenAdvancedAdminParams`;
  `tx`: `Transaction`\<`false`, `false`\>;
  `verificationKeyHashes`: `string`[];
 \}\>

## Defined in

[packages/abi/src/token/build.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/token/build.ts#L32)
