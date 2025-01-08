---
title: TokenUpdateAdminWhitelistTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenUpdateAdminWhitelistTransactionParams
order: 113
---

# Type Alias: TokenUpdateAdminWhitelistTransactionParams

## Properties overview

- adminAddress:  string; [↗](#adminaddress)
- whitelist:  Whitelist; [↗](#whitelist)

```ts
type TokenUpdateAdminWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
  adminAddress: string;
  txType: "token:admin:whitelist";
  whitelist: Whitelist;
};
```

Defined in: [packages/api/src/client/types.gen.ts:689](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L689)

## Type declaration

### adminAddress

```ts
adminAddress: string;
```

The address of the admin to update whitelist for.

### txType?

```ts
optional txType: "token:admin:whitelist";
```

Must be "token:admin:whitelist"

### whitelist

```ts
whitelist: Whitelist;
```

Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
