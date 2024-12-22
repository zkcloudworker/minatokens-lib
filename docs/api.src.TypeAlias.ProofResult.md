---
title: ProofResult
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.ProofResult
order: 71
---

# Type Alias: ProofResult

```ts
type ProofResult = {
  error: string;
  hash: string;
  success: boolean;
};
```

## Type declaration

### error?

```ts
optional error: string;
```

Error message if proof generation failed.

### hash?

```ts
optional hash: string;
```

The transaction hash if the proof was successfully applied.

### success?

```ts
optional success: boolean;
```

Indicates whether the proof generation was successful.

## Defined in

[packages/api/src/client/types.gen.ts:262](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L262)