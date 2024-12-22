---
title: UpgradeDatabaseState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.UpgradeDatabaseState
order: 290
---

# Class: UpgradeDatabaseState

## Properties overview

- nextUpgradeAuthority:  PublicKeyOption = PublicKeyOption; [↗](#nextupgradeauthority)
- root:  Field = Field; [↗](#root)
- storage:  Storage = Storage; [↗](#storage)
- validFrom:  UInt32 = UInt32; [↗](#validfrom)
- version:  UInt32 = UInt32; [↗](#version)

## Methods overview

- pack() [↗](#pack)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)
- unpack() [↗](#unpack)

Represents the state of the upgrade database.

## Extends

- \{
  `nextUpgradeAuthority`: [`PublicKeyOption`](upgradablesrcclasspublickeyoption);
  `root`: `Field`;
  `storage`: `Storage`;
  `validFrom`: `UInt32`;
  `version`: `UInt32`;
 \}

## Constructors

### new UpgradeDatabaseState()

```ts
new UpgradeDatabaseState(value: {
  nextUpgradeAuthority: PublicKeyOption;
  root: Field;
  storage: Storage;
  validFrom: UInt32;
  version: UInt32;
 }): UpgradeDatabaseState
```

#### Parameters

##### value

###### nextUpgradeAuthority

[`PublicKeyOption`](upgradablesrcclasspublickeyoption) = `PublicKeyOption`

Optional public key of the next upgrade authority

###### root

`Field` = `Field`

Root of the UpgradeAuthority database

###### storage

`Storage` = `Storage`

Storage information (e.g., IPFS hash)

###### validFrom

`UInt32` = `UInt32`

Slot when the UpgradeAuthority is valid from

###### version

`UInt32` = `UInt32`

Version of the UpgradeAuthorityDatabase

#### Returns

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### nextUpgradeAuthority

```ts
nextUpgradeAuthority: PublicKeyOption = PublicKeyOption;
```

Optional public key of the next upgrade authority

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).nextUpgradeAuthority`

#### Defined in

[packages/upgradable/src/validators.ts:142](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L142)

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
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).root`

#### Defined in

[packages/upgradable/src/validators.ts:138](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L138)

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
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).storage`

#### Defined in

[packages/upgradable/src/validators.ts:140](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L140)

***

### validFrom

```ts
validFrom: UInt32 = UInt32;
```

Slot when the UpgradeAuthority is valid from

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).validFrom`

#### Defined in

[packages/upgradable/src/validators.ts:146](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L146)

***

### version

```ts
version: UInt32 = UInt32;
```

Version of the UpgradeAuthorityDatabase

#### Inherited from

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).version`

#### Defined in

[packages/upgradable/src/validators.ts:144](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L144)

## Methods

### pack()

```ts
pack(): UpgradeDatabaseStatePacked
```

Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.

#### Returns

[`UpgradeDatabaseStatePacked`](upgradablesrcclassupgradedatabasestatepacked)

A packed representation of the upgrade database state.

#### Defined in

[packages/upgradable/src/validators.ts:179](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L179)

***

### assertEquals()

```ts
static assertEquals(a: UpgradeDatabaseState, b: UpgradeDatabaseState): void
```

Asserts that two `UpgradeDatabaseState` instances are equal.

#### Parameters

##### a

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

First `UpgradeDatabaseState` instance.

##### b

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

Second `UpgradeDatabaseState` instance.

#### Returns

`void`

#### Defined in

[packages/upgradable/src/validators.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L153)

***

### empty()

```ts
static empty(): UpgradeDatabaseState
```

Returns an empty `UpgradeDatabaseState`.

#### Returns

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

An empty `UpgradeDatabaseState` instance.

#### Overrides

`Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}).empty`

#### Defined in

[packages/upgradable/src/validators.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L165)

***

### unpack()

```ts
static unpack(packed: UpgradeDatabaseStatePacked): UpgradeDatabaseState
```

Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.

#### Parameters

##### packed

[`UpgradeDatabaseStatePacked`](upgradablesrcclassupgradedatabasestatepacked)

The packed upgrade database state.

#### Returns

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

An unpacked `UpgradeDatabaseState` instance.

#### Defined in

[packages/upgradable/src/validators.ts:200](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L200)
