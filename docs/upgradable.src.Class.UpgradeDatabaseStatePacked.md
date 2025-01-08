---
title: UpgradeDatabaseStatePacked
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.UpgradeDatabaseStatePacked
order: 349
---

# Class: UpgradeDatabaseStatePacked

## Properties overview

- data:  Field = Field; [↗](#data)
- nextUpgradeAuthorityX:  Field = Field; [↗](#nextupgradeauthorityx)
- root:  Field = Field; [↗](#root)
- storage:  Storage = Storage; [↗](#storage)

Defined in: [packages/upgradable/src/validators.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L122)

Represents the packed state of the upgrade database.

## Extends

- \{
  `data`: `Field`;
  `nextUpgradeAuthorityX`: `Field`;
  `root`: `Field`;
  `storage`: `Storage`;
 \}

## Constructors

### new UpgradeDatabaseStatePacked()

```ts
new UpgradeDatabaseStatePacked(value: {
  data: Field;
  nextUpgradeAuthorityX: Field;
  root: Field;
  storage: Storage;
 }): UpgradeDatabaseStatePacked
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### data

`Field` = `Field`

Packed data containing version, validFrom, and flags

###### nextUpgradeAuthorityX

`Field` = `Field`

X-coordinate of the next upgrade authority's public key

###### root

`Field` = `Field`

Root of the UpgradeAuthority database

###### storage

`Storage` = `Storage`

Storage information (e.g., IPFS hash)

#### Returns

[`UpgradeDatabaseStatePacked`](upgradablesrcclassupgradedatabasestatepacked)

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / X-coordinate of the next upgrade authority's public key /
  nextUpgradeAuthorityX: Field,
  / Packed data containing version, validFrom, and flags /
  data: Field,
}).constructor
```

## Properties

### data

```ts
data: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:130](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L130)

Packed data containing version, validFrom, and flags

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / X-coordinate of the next upgrade authority's public key /
  nextUpgradeAuthorityX: Field,
  / Packed data containing version, validFrom, and flags /
  data: Field,
}).data
```

***

### nextUpgradeAuthorityX

```ts
nextUpgradeAuthorityX: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L128)

X-coordinate of the next upgrade authority's public key

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / X-coordinate of the next upgrade authority's public key /
  nextUpgradeAuthorityX: Field,
  / Packed data containing version, validFrom, and flags /
  data: Field,
}).nextUpgradeAuthorityX
```

***

### root

```ts
root: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:124](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L124)

Root of the UpgradeAuthority database

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / X-coordinate of the next upgrade authority's public key /
  nextUpgradeAuthorityX: Field,
  / Packed data containing version, validFrom, and flags /
  data: Field,
}).root
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/upgradable/src/validators.ts:126](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L126)

Storage information (e.g., IPFS hash)

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / X-coordinate of the next upgrade authority's public key /
  nextUpgradeAuthorityX: Field,
  / Packed data containing version, validFrom, and flags /
  data: Field,
}).storage
```
