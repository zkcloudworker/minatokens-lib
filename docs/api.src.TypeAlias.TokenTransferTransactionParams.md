---
title: TokenTransferTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenTransferTransactionParams
order: 102
---

# Type Alias: TokenTransferTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- to:  string; [↗](#to)

```ts
type TokenTransferTransactionParams = DeployedTokenTransactionBaseParams & {
  amount: number;
  to: string;
  txType: "token:transfer";
};
```

## Type declaration

### amount

```ts
amount: number;
```

The amount of tokens to transfer.

### to

```ts
to: string;
```

The address to which tokens are to be transferred.

### txType?

```ts
optional txType: "token:transfer";
```

Must be "token:transfer"

## Defined in

[packages/api/src/client/types.gen.ts:646](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L646)
