---
title: TokenWithdrawOfferTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenWithdrawOfferTransactionParams
order: 107
---

# Type Alias: TokenWithdrawOfferTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- offerAddress:  string; [↗](#offeraddress)

```ts
type TokenWithdrawOfferTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  offerAddress: string;
  txType: "token:offer:withdraw";
};
```

## Type declaration

### amount

```ts
amount: number;
```

The amount to withdraw from the offer.

### offerAddress

```ts
offerAddress: string;
```

The address of the offer to withdraw from.

### txType?

```ts
optional txType: "token:offer:withdraw";
```

Must be "token:offer:withdraw"

## Defined in

[packages/api/src/client/types.gen.ts:746](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L746)
