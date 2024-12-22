---
title: LaunchTokenAdvancedAdminParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.LaunchTokenAdvancedAdminParams
order: 60
---

# Type Alias: LaunchTokenAdvancedAdminParams

## Properties overview

- adminContract:  "advanced"; [↗](#admincontract)
- canMint:  "whitelist" | "anyone"; [↗](#canmint)

```ts
type LaunchTokenAdvancedAdminParams = LaunchTokenTransactionBaseParams & {
  adminContract: "advanced";
  canMint: "whitelist" | "anyone";
  requireAdminSignatureForMint: boolean;
  totalSupply: number;
  whitelist: Whitelist;
};
```

## Type declaration

### adminContract

```ts
adminContract: "advanced";
```

Must be "advanced" for advanced admin contract.

### canMint

```ts
canMint: "whitelist" | "anyone";
```

Specifies who can mint tokens.

### requireAdminSignatureForMint?

```ts
optional requireAdminSignatureForMint: boolean;
```

Optional. Whether admin signature is required for minting.

### totalSupply?

```ts
optional totalSupply: number;
```

Optional. Maximum total supply. Uses UInt64.MAXINT() if not provided.

### whitelist?

```ts
optional whitelist: Whitelist;
```

Optional. List of whitelisted addresses with optional amounts, or a string.

## Defined in

[packages/api/src/client/types.gen.ts:134](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L134)
