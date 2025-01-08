---
title: TokenBuyTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenBuyTransactionParams
order: 96
---

# Type Alias: TokenBuyTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- offerAddress:  string; [↗](#offeraddress)

```ts
type TokenBuyTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  offerAddress: string;
  txType: "token:offer:buy";
};
```

Defined in: [packages/api/src/client/types.gen.ts:380](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L380)

## Type declaration

### amount

```ts
amount: number;
```

The amount of tokens to buy.

### offerAddress

```ts
offerAddress: string;
```

The address of the offer to buy from.

### txType?

```ts
optional txType: "token:offer:buy";
```

Must be "token:offer:buy"
