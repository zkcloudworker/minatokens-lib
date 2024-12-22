---
title: Whitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.Whitelist
order: 140
---

# Type Alias: Whitelist

```ts
type Whitelist = 
  | {
  address: string;
  amount: number;
 }[]
  | string;
```

Optional. List of whitelisted addresses with optional amounts, or a string.

## Defined in

[packages/api/src/client/types.gen.ts:935](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L935)
