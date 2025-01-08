---
title: UpgradeDatabaseState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.UpgradeDatabaseState
order: 348
---

# Class: UpgradeDatabaseState

## Properties overview

- nextUpgradeAuthority:  PublicKeyOption = PublicKeyOption; [↗](#nextupgradeauthority)
- root:  Field = Field; [↗](#root)
- storage:  Storage = Storage; [↗](#storage)
- validFrom:  UInt32 = UInt32; [↗](#validfrom)
- version:  UInt32 = UInt32; [↗](#version)
- Overrides: Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).empty [↗](#overrides)

## Methods overview

- pack() [↗](#pack)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)
- unpack() [↗](#unpack)

Defined in: [packages/upgradable/src/validators.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L136)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).constructor
```

## Properties

### nextUpgradeAuthority

```ts
nextUpgradeAuthority: PublicKeyOption = PublicKeyOption;
```

Defined in: [packages/upgradable/src/validators.ts:142](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L142)

Optional public key of the next upgrade authority

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).nextUpgradeAuthority
```

***

### root

```ts
root: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:138](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L138)

Root of the UpgradeAuthority database

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).root
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/upgradable/src/validators.ts:140](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L140)

Storage information (e.g., IPFS hash)

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).storage
```

***

### validFrom

```ts
validFrom: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:146](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L146)

Slot when the UpgradeAuthority is valid from

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).validFrom
```

***

### version

```ts
version: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:144](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L144)

Version of the UpgradeAuthorityDatabase

#### Inherited from

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).version
```

## Methods

### pack()

```ts
pack(): UpgradeDatabaseStatePacked
```

Defined in: [packages/upgradable/src/validators.ts:179](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L179)

Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.

#### Returns

[`UpgradeDatabaseStatePacked`](upgradablesrcclassupgradedatabasestatepacked)

A packed representation of the upgrade database state.

***

### assertEquals()

```ts
static assertEquals(a: UpgradeDatabaseState, b: UpgradeDatabaseState): void
```

Defined in: [packages/upgradable/src/validators.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L153)

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

***

### empty()

```ts
static empty(): UpgradeDatabaseState
```

Defined in: [packages/upgradable/src/validators.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L165)

Returns an empty `UpgradeDatabaseState`.

#### Returns

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

An empty `UpgradeDatabaseState` instance.

#### Overrides

```ts
Struct({
  / Root of the UpgradeAuthority database /
  root: Field,
  / Storage information (e.g., IPFS hash) /
  storage: Storage,
  / Optional public key of the next upgrade authority /
  nextUpgradeAuthority: PublicKeyOption,
  / Version of the UpgradeAuthorityDatabase /
  version: UInt32,
  / Slot when the UpgradeAuthority is valid from /
  validFrom: UInt32,
}).empty
```

***

### unpack()

```ts
static unpack(packed: UpgradeDatabaseStatePacked): UpgradeDatabaseState
```

Defined in: [packages/upgradable/src/validators.ts:200](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L200)

Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.

#### Parameters

##### packed

[`UpgradeDatabaseStatePacked`](upgradablesrcclassupgradedatabasestatepacked)

The packed upgrade database state.

#### Returns

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate)

An unpacked `UpgradeDatabaseState` instance.
