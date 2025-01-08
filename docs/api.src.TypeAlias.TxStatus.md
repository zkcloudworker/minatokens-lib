---
title: TxStatus
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TxStatus
order: 124
---

# Type Alias: TxStatus

```ts
type TxStatus = {
  blockHeight: number;
  blockStatus: string;
  stateHash: string;
  timestamp: number;
  txHash: string;
  txStatus: string;
};
```

Defined in: [packages/api/src/client/types.gen.ts:928](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L928)

## Type declaration

### blockHeight?

```ts
optional blockHeight: number;
```

The height of the block containing the transaction.

### blockStatus?

```ts
optional blockStatus: string;
```

The status of the block.

### stateHash?

```ts
optional stateHash: string;
```

The state hash of the block.

### timestamp?

```ts
optional timestamp: number;
```

The timestamp of the block.

### txHash?

```ts
optional txHash: string;
```

The transaction hash.

### txStatus?

```ts
optional txStatus: string;
```

The status of the transaction in the block.
