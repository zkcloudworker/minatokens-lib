---
title: TokenBidTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenBidTransactionParams
order: 85
---

# Type Alias: TokenBidTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- price:  number; [↗](#price)

```ts
type TokenBidTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  bidAddress: string;
  bidPrivateKey: string;
  price: number;
  txType: "token:bid:create";
  whitelist: Whitelist;
};
```

## Type declaration

### amount

```ts
amount: number;
```

The amount to bid.

### bidAddress?

```ts
optional bidAddress: string;
```

Optional. The address for bidding.

### bidPrivateKey?

```ts
optional bidPrivateKey: string;
```

Optional. The private key for bidding.

### price

```ts
price: number;
```

The price to bid.

### txType?

```ts
optional txType: "token:bid:create";
```

Must be "token:bid:create"

### whitelist?

```ts
optional whitelist: Whitelist;
```

## Defined in

[packages/api/src/client/types.gen.ts:328](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L328)
