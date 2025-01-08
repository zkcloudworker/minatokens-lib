---
title: Whitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.Whitelist
order: 150
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

Defined in: [packages/api/src/client/types.gen.ts:958](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L958)

Optional. List of whitelisted addresses with optional amounts, or a string.
