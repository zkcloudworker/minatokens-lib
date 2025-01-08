---
title: ValidatorsListData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Interface.ValidatorsListData
order: 359
---

# Interface: ValidatorsListData

## Properties overview

- map:  IndexedMapSerialized; [↗](#map)
- root:  string; [↗](#root)
- validators:  {
  authorizedToVote: boolean;
  publicKey: string;
 }[]; [↗](#validators)
- authorizedToVote:  boolean; [↗](#authorizedtovote)
- publicKey:  string; [↗](#publickey)
- validatorsCount:  number; [↗](#validatorscount)

Defined in: [packages/upgradable/src/upgrade.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L44)

Interface representing the data for a list of validators.

## Properties

### map

```ts
map: IndexedMapSerialized;
```

Defined in: [packages/upgradable/src/upgrade.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L51)

***

### root

```ts
root: string;
```

Defined in: [packages/upgradable/src/upgrade.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L50)

***

### validators

```ts
validators: {
  authorizedToVote: boolean;
  publicKey: string;
 }[];
```

Defined in: [packages/upgradable/src/upgrade.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L45)

#### authorizedToVote

```ts
authorizedToVote: boolean;
```

#### publicKey

```ts
publicKey: string;
```

***

### validatorsCount

```ts
validatorsCount: number;
```

Defined in: [packages/upgradable/src/upgrade.ts:49](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L49)
