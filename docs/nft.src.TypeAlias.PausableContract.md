---
title: PausableContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.PausableContract
order: 259
---

# Type Alias: PausableContract

```ts
type PausableContract = SmartContract & {
  pause: Promise<void>;
  resume: Promise<void>;
};
```

Defined in: [packages/nft/src/interfaces/pausable.ts:13](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/pausable.ts#L13)

The **PausableContract** interface provides a mechanism to dynamically enable or disable
certain functionalities within smart contracts. It extends the `SmartContract` class
and introduces methods that allow a contract to be paused and resumed, which is crucial
for managing emergencies, upgrades, or maintenance periods.

By implementing the PausableContract interface, contracts gain greater control over their
operational states, enhancing security and flexibility in response to various scenarios.

## Type declaration

### pause()

Pauses the contract, potentially halting critical operations to protect against
unforeseen issues or to perform maintenance. When called, the contract enters a paused
state where certain functions are restricted.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the contract has been successfully paused.

### resume()

Resumes the contract's operations after it has been paused. This method restores
the contract to its normal working state, allowing all functionalities to be accessible again.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the contract has been successfully resumed.
