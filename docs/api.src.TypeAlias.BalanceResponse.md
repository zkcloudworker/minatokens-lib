---
title: BalanceResponse
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.BalanceResponse
order: 32
---

# Type Alias: BalanceResponse

## Properties overview

- address:  string; [↗](#address)
- balance:  number | null; [↗](#balance)

```ts
type BalanceResponse = {
  address: string;
  balance: number | null;
  tokenAddress: string;
  tokenId: string;
};
```

## Type declaration

### address

```ts
address: string;
```

The Mina address for which the balance was requested.

### balance

```ts
balance: number | null;
```

The balance of the token for the specified address.

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

[packages/api/src/client/types.gen.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L25)
