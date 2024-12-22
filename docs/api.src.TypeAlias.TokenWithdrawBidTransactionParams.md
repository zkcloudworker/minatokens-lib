---
title: TokenWithdrawBidTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenWithdrawBidTransactionParams
order: 106
---

# Type Alias: TokenWithdrawBidTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- bidAddress:  string; [↗](#bidaddress)

```ts
type TokenWithdrawBidTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  bidAddress: string;
  txType: "token:bid:withdraw";
};
```

## Type declaration

### amount

```ts
amount: number;
```

The amount to withdraw from the bid.

### bidAddress

```ts
bidAddress: string;
```

The address of the bid to withdraw from.

### txType?

```ts
optional txType: "token:bid:withdraw";
```

Must be "token:bid:withdraw"

## Defined in

[packages/api/src/client/types.gen.ts:726](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L726)
