---
title: NFTWhitelistedAdminContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.NFTWhitelistedAdminContract
order: 228
---

# Function: NFTWhitelistedAdminContract()

```ts
function NFTWhitelistedAdminContract(params: {
  upgradeContract: UpgradeAuthorityContractConstructor;
 }): typeof NFTWhitelistedAdmin
```

Constructs the `NFTWhitelistedAdmin` class, an admin contract that uses a whitelist to control access.

## Parameters

### params

Object containing the upgrade contract constructor.

#### upgradeContract

`UpgradeAuthorityContractConstructor`

## Returns

*typeof* `NFTWhitelistedAdmin`

The `NFTWhitelistedAdmin` class.

## Defined in

[packages/nft/src/admin/whitelisted.ts:116](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L116)
