---
title: ValidatorsState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsState
order: 360
---

# Class: ValidatorsState

## Properties overview

- chainId:  Field = Field; [↗](#chainid)
- count:  UInt32 = UInt32; [↗](#count)
- root:  Field = Field; [↗](#root)
- Overrides: Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).empty [↗](#overrides)

## Methods overview

- hash() [↗](#hash)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)

Defined in: [packages/upgradable/src/validators.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L79)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).constructor
```

## Properties

### chainId

```ts
chainId: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:81](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L81)

Chain ID (e.g., 'mina:mainnet')

#### Inherited from

```ts
Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).chainId
```

***

### count

```ts
count: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L85)

Number of validators

#### Inherited from

```ts
Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).count
```

***

### root

```ts
root: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:83](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L83)

Merkle root of the ValidatorsList

#### Inherited from

```ts
Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).root
```

## Methods

### hash()

```ts
hash(): Field
```

Defined in: [packages/upgradable/src/validators.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L102)

Computes the hash of the validators state.

#### Returns

`Field`

Hash of the current state.

***

### assertEquals()

```ts
static assertEquals(a: ValidatorsState, b: ValidatorsState): void
```

Defined in: [packages/upgradable/src/validators.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L92)

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

***

### empty()

```ts
static empty(): ValidatorsState
```

Defined in: [packages/upgradable/src/validators.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L110)

Returns an empty `ValidatorsState`.

#### Returns

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

An empty `ValidatorsState` instance.

#### Overrides

```ts
Struct({
  / Chain ID (e.g., 'mina:mainnet') /
  chainId: Field,
  / Merkle root of the ValidatorsList /
  root: Field,
  / Number of validators /
  count: UInt32,
}).empty
```
