---
title: FaucetResponse
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.FaucetResponse
order: 42
---

# Type Alias: FaucetResponse

```ts
type FaucetResponse = {
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

Error message if the request failed.

### hash?

```ts
optional hash: string;
```

The transaction hash of the faucet transfer if successful.

### success?

```ts
optional success: boolean;
```

Indicates whether the faucet request was successful.

## Defined in

[packages/api/src/client/types.gen.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L65)