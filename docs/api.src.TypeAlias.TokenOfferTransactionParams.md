---
title: TokenOfferTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenOfferTransactionParams
order: 93
---

# Type Alias: TokenOfferTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- price:  number; [↗](#price)

```ts
type TokenOfferTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  offerAddress: string;
  offerPrivateKey: string;
  price: number;
  txType: "token:offer:create";
  whitelist: Whitelist;
};
```

## Type declaration

### amount

```ts
amount: number;
```

The amount to offer.

### offerAddress?

```ts
optional offerAddress: string;
```

Optional. The address for offering.

### offerPrivateKey?

```ts
optional offerPrivateKey: string;
```

Optional. The private key for offering.

### price

```ts
price: number;
```

The price to offer.

### txType?

```ts
optional txType: "token:offer:create";
```

Must be "token:offer:create"

### whitelist?

```ts
optional whitelist: Whitelist;
```

## Defined in

[packages/api/src/client/types.gen.ts:459](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L459)
