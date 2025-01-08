---
title: getContractInfo
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.Function.getContractInfo
order: 24
---

# Function: getContractInfo()

```ts
function getContractInfo(params: {
  address: string | PublicKey;
  chain: "mainnet" | "devnet";
  decimals: number;
  parentTokenId: Field;
  tokenId: string | Field;
}): Promise<ContractInfo[]>
```

Defined in: [packages/abi/src/token/info.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/token/info.ts#L22)

## Parameters

### params

#### address

`string` \| `PublicKey`

#### chain

`"mainnet"` \| `"devnet"`

#### decimals

`number`

#### parentTokenId

`Field`

#### tokenId

`string` \| `Field`

## Returns

`Promise`\<`ContractInfo`[]\>
