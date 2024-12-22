---
title: ValidatorsState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsState
order: 296
---

# Class: ValidatorsState

## Properties overview

- chainId:  Field = Field; [↗](#chainid)
- count:  UInt32 = UInt32; [↗](#count)
- root:  Field = Field; [↗](#root)

## Methods overview

- hash() [↗](#hash)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)

Represents the state of the validators.

## Extends

- \{
  `chainId`: `Field`;
  `count`: `UInt32`;
  `root`: `Field`;
 \}

## Constructors

### new ValidatorsState()

```ts
new ValidatorsState(value: {
  chainId: Field;
  count: UInt32;
  root: Field;
 }): ValidatorsState
```

#### Parameters

##### value

###### chainId

`Field` = `Field`

Chain ID (e.g., 'mina:mainnet')

###### count

`UInt32` = `UInt32`

Number of validators

###### root

`Field` = `Field`

Merkle root of the ValidatorsList

#### Returns

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

#### Inherited from

`Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Number of validators */
  count: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### chainId

```ts
chainId: Field = Field;
```

Chain ID (e.g., 'mina:mainnet')

#### Inherited from

`Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Number of validators */
  count: UInt32,
}).chainId`

#### Defined in

[packages/upgradable/src/validators.ts:81](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L81)

***

### count

```ts
count: UInt32 = UInt32;
```

Number of validators

#### Inherited from

`Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Number of validators */
  count: UInt32,
}).count`

#### Defined in

[packages/upgradable/src/validators.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L85)

***

### root

```ts
root: Field = Field;
```

Merkle root of the ValidatorsList

#### Inherited from

`Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Number of validators */
  count: UInt32,
}).root`

#### Defined in

[packages/upgradable/src/validators.ts:83](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L83)

## Methods

### hash()

```ts
hash(): Field
```

Computes the hash of the validators state.

#### Returns

`Field`

Hash of the current state.

#### Defined in

[packages/upgradable/src/validators.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L102)

***

### assertEquals()

```ts
static assertEquals(a: ValidatorsState, b: ValidatorsState): void
```

Asserts that two `ValidatorsState` instances are equal.

#### Parameters

##### a

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

First `ValidatorsState` instance.

##### b

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

Second `ValidatorsState` instance.

#### Returns

`void`

#### Defined in

[packages/upgradable/src/validators.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L92)

***

### empty()

```ts
static empty(): ValidatorsState
```

Returns an empty `ValidatorsState`.

#### Returns

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

An empty `ValidatorsState` instance.

#### Overrides

`Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Number of validators */
  count: UInt32,
}).empty`

#### Defined in

[packages/upgradable/src/validators.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L110)
