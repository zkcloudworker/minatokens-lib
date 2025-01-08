---
title: TokenMintTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenMintTransactionParams
order: 99
---

# Type Alias: TokenMintTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- to:  string; [↗](#to)

```ts
type TokenMintTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  to: string;
  txType: "token:mint";
};
```

Defined in: [packages/api/src/client/types.gen.ts:462](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L462)

## Type declaration

### amount

```ts
amount: number;
```

The amount of tokens to mint.

### to

```ts
to: string;
```

The address to which tokens are to be minted.

### txType?

```ts
optional txType: "token:mint";
```

Must be "token:mint"
