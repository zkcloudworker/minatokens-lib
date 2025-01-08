---
title: NFTAdvancedAdminContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.NFTAdvancedAdminContract
order: 283
---

# Function: NFTAdvancedAdminContract()

```ts
function NFTAdvancedAdminContract(params: {
  upgradeContract: UpgradeAuthorityContractConstructor;
 }): typeof NFTAdvancedAdmin
```

Defined in: [packages/nft/src/admin/advanced.ts:179](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L179)

Constructs the `NFTAdvancedAdmin` class, an admin contract that uses a whitelist to control access.

## Parameters

### params

Object containing the upgrade contract constructor.

#### upgradeContract

`UpgradeAuthorityContractConstructor`

## Returns

*typeof* `NFTAdvancedAdmin`

The `NFTAdvancedAdmin` class.
