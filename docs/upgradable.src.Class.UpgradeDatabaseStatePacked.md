---
title: UpgradeDatabaseStatePacked
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.UpgradeDatabaseStatePacked
order: 291
---

# Class: UpgradeDatabaseStatePacked

## Properties overview

- data:  Field = Field; [↗](#data)
- nextUpgradeAuthorityX:  Field = Field; [↗](#nextupgradeauthorityx)
- root:  Field = Field; [↗](#root)
- storage:  Storage = Storage; [↗](#storage)

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

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### data

```ts
data: Field = Field;
```

Packed data containing version, validFrom, and flags

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}).data`

#### Defined in

[packages/upgradable/src/validators.ts:130](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L130)

***

### nextUpgradeAuthorityX

```ts
nextUpgradeAuthorityX: Field = Field;
```

X-coordinate of the next upgrade authority's public key

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}).nextUpgradeAuthorityX`

#### Defined in

[packages/upgradable/src/validators.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L128)

***

### root

```ts
root: Field = Field;
```

Root of the UpgradeAuthority database

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}).root`

#### Defined in

[packages/upgradable/src/validators.ts:124](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L124)

***

### storage

```ts
storage: Storage = Storage;
```

Storage information (e.g., IPFS hash)

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}).storage`

#### Defined in

[packages/upgradable/src/validators.ts:126](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L126)
