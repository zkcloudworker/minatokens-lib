---
title: BalanceRequestParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.BalanceRequestParams
order: 31
---

# Type Alias: BalanceRequestParams

## Properties overview

- address:  string; [↗](#address)

```ts
type BalanceRequestParams = {
  address: string;
  tokenAddress: string;
  tokenId: string;
};
```

## Type declaration

### address

```ts
address: string;
```

The Mina address for which to retrieve the balance.

### tokenAddress?

```ts
optional tokenAddress: string;
```

The address of the token contract (optional).

### tokenId?

```ts
optional tokenId: string;
```

The token ID (optional).

## Defined in

[packages/api/src/client/types.gen.ts:10](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L10)
