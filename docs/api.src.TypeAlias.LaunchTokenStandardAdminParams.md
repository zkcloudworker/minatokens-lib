---
title: LaunchTokenStandardAdminParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.LaunchTokenStandardAdminParams
order: 74
---

# Type Alias: LaunchTokenStandardAdminParams

```ts
type LaunchTokenStandardAdminParams = LaunchTokenTransactionBaseParams & {
  adminContract: "standard";
};
```

Defined in: [packages/api/src/client/types.gen.ts:190](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L190)

## Type declaration

### adminContract?

```ts
optional adminContract: "standard";
```

Must be "standard" for standard admin contract.
