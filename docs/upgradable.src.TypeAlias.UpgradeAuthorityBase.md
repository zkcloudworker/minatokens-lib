---
title: UpgradeAuthorityBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.TypeAlias.UpgradeAuthorityBase
order: 362
---

# Type Alias: UpgradeAuthorityBase

```ts
type UpgradeAuthorityBase = SmartContract & {
  verifyUpgradeData: Promise<UpgradeAuthorityAnswer>;
};
```

Defined in: [packages/upgradable/src/upgradable.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L78)

Interface that any upgrade authority contract should implement.
Extends `SmartContract` and requires the implementation of the `verifyUpgradeData()` method,
which takes `VerificationKeyUpgradeData` as input and returns an `UpgradeAuthorityAnswer`.

## Type declaration

### verifyUpgradeData()

Verifies the upgrade data for upgrading a contract's verification key.

#### Parameters

##### data

[`VerificationKeyUpgradeData`](upgradablesrcclassverificationkeyupgradedata)

The data required for verification.

#### Returns

`Promise`\<[`UpgradeAuthorityAnswer`](upgradablesrcclassupgradeauthorityanswer)\>

The result of the verification.
