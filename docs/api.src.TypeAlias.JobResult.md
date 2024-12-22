---
title: JobResult
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.JobResult
order: 57
---

# Type Alias: JobResult

## Properties overview

- success:  boolean; [↗](#success)

```ts
type JobResult = {
  error: string;
  hash: string;
  status: string;
  success: boolean;
  tx: string;
};
```

## Type declaration

### error?

```ts
optional error: string;
```

Error message if proof generation failed for this transaction.

### hash?

```ts
optional hash: string;
```

The transaction hash if broadcasted.

### status?

```ts
optional status: string;
```

The status of the transaction.

### success

```ts
success: boolean;
```

Indicates whether the proof generation for this transaction was successful.

### tx?

```ts
optional tx: string;
```

The transaction data.

## Defined in

[packages/api/src/client/types.gen.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L87)
