---
title: UpgradableContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.TypeAlias.UpgradableContract
order: 361
---

# Type Alias: UpgradableContract

```ts
type UpgradableContract = SmartContract & {
  getUpgradeContract: Promise<UpgradeAuthorityBase>;
  upgradeVerificationKey: Promise<void>;
};
```

Defined in: [packages/upgradable/src/upgradable.ts:94](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L94)

Interface for contracts that can be upgraded.
Extends `SmartContract` and requires methods to retrieve the associated upgrade authority contract
and to upgrade the contract's verification key using the provided verification key.

## Type declaration

### getUpgradeContract()

Retrieves the associated upgrade authority contract.

#### Returns

`Promise`\<[`UpgradeAuthorityBase`](upgradablesrctypealiasupgradeauthoritybase)\>

The upgrade authority contract.

### upgradeVerificationKey()

Upgrades the contract's verification key using the provided verification key.

#### Parameters

##### vk

`VerificationKey`

The new verification key.

#### Returns

`Promise`\<`void`\>
