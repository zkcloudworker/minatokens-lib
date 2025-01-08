---
title: TransactionStatus
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TransactionStatus
order: 119
---

# Type Alias: TransactionStatus

```ts
type TransactionStatus = {
  details: {
     blockHeight: number;
     blockStatus: string;
     stateHash: string;
     timestamp: number;
     txHash: string;
     txStatus: string;
    };
  error: string;
  hash: string;
  status: "pending" | "applied" | "failed" | "unknown";
};
```

Defined in: [packages/api/src/client/types.gen.ts:872](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L872)

## Type declaration

### details?

```ts
optional details: {
  blockHeight: number;
  blockStatus: string;
  stateHash: string;
  timestamp: number;
  txHash: string;
  txStatus: string;
};
```

The details of the transaction.

#### details.blockHeight?

```ts
optional blockHeight: number;
```

The height of the block containing the transaction.

#### details.blockStatus?

```ts
optional blockStatus: string;
```

The status of the block.

#### details.stateHash?

```ts
optional stateHash: string;
```

The state hash of the block.

#### details.timestamp?

```ts
optional timestamp: number;
```

The timestamp of the block.

#### details.txHash?

```ts
optional txHash: string;
```

The transaction hash.

#### details.txStatus?

```ts
optional txStatus: string;
```

The status of the transaction in the block.

### error?

```ts
optional error: string;
```

The transaction hash.

### hash?

```ts
optional hash: string;
```

The transaction hash.

### status?

```ts
optional status: "pending" | "applied" | "failed" | "unknown";
```

The status of the transaction.
