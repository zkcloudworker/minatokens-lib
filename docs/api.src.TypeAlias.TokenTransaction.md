---
title: TokenTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenTransaction
order: 107
---

# Type Alias: TokenTransaction

## Properties overview

- request:  TokenTransactionParams & {
  txType: TokenTransactionType;
}; [↗](#request)
- txType:  TokenTransactionType; [↗](#txtype)
- symbol:  string; [↗](#symbol)

```ts
type TokenTransaction = TransactionPayloads & {
  request: TokenTransactionParams & {
     txType: TokenTransactionType;
    };
  symbol: string;
};
```

Defined in: [packages/api/src/client/types.gen.ts:614](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L614)

## Type declaration

### request

```ts
request: TokenTransactionParams & {
  txType: TokenTransactionType;
};
```

#### Type declaration

##### txType

```ts
txType: TokenTransactionType;
```

The type of the transaction.

### symbol

```ts
symbol: string;
```

The symbol of the token.
