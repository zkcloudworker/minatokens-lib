---
title: ProveTokenTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.ProveTokenTransaction
order: 85
---

# Type Alias: ProveTokenTransaction

## Properties overview

- signedData:  string; [↗](#signeddata)
- tx:  TokenTransaction; [↗](#tx)

```ts
type ProveTokenTransaction = {
  sendTransaction: boolean;
  signedData: string;
  tx: TokenTransaction;
};
```

Defined in: [packages/api/src/client/types.gen.ts:300](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L300)

## Type declaration

### sendTransaction?

```ts
optional sendTransaction: boolean;
```

Optional. Whether to broadcast the transaction after proving.

### signedData

```ts
signedData: string;
```

The signed data for the transaction.

### tx

```ts
tx: TokenTransaction;
```

The transaction object.
