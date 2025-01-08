---
title: TokenSellTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenSellTransactionParams
order: 104
---

# Type Alias: TokenSellTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- bidAddress:  string; [↗](#bidaddress)

```ts
type TokenSellTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  bidAddress: string;
  txType: "token:bid:sell";
};
```

Defined in: [packages/api/src/client/types.gen.ts:511](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L511)

## Type declaration

### amount

```ts
amount: number;
```

The amount of tokens to sell.

### bidAddress

```ts
bidAddress: string;
```

The address of the bid to sell to.

### txType?

```ts
optional txType: "token:bid:sell";
```

Must be "token:bid:sell"
