---
title: UpgradeAuthorityContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.TypeAlias.UpgradeAuthorityContractConstructor
order: 363
---

# Type Alias: UpgradeAuthorityContractConstructor()

```ts
type UpgradeAuthorityContractConstructor = (upgradeAuthority: PublicKey) => UpgradeAuthorityBase;
```

Defined in: [packages/upgradable/src/upgradable.ts:113](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L113)

Defines a constructor for contracts implementing `UpgradeAuthorityBase`,
accepting an `upgradeAuthority` public key and returning an instance of `UpgradeAuthorityBase`.

## Parameters

### upgradeAuthority

`PublicKey`

## Returns

[`UpgradeAuthorityBase`](upgradablesrctypealiasupgradeauthoritybase)
