---
title: PauseData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.PauseData
order: 196
---

# Class: PauseData

## Properties overview

- canPause:  Bool = Bool; [↗](#canpause)
- isPaused:  Bool = Bool; [↗](#ispaused)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

Represents pause-related data, containing flags for pause functionality.

## Extends

- \{
  `canPause`: `Bool`;
  `isPaused`: `Bool`;
 \}

## Constructors

### new PauseData()

```ts
new PauseData(value: {
  canPause: Bool;
  isPaused: Bool;
 }): PauseData
```

#### Parameters

##### value

###### canPause

`Bool` = `Bool`

Indicates whether the contract can be paused.

###### isPaused

`Bool` = `Bool`

Indicates whether the contract is currently paused.

#### Returns

[`PauseData`](nftsrcclasspausedata)

#### Inherited from

`Struct({
  /** Indicates whether the contract can be paused. */
  canPause: Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: Bool,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### canPause

```ts
canPause: Bool = Bool;
```

Indicates whether the contract can be paused.

#### Inherited from

`Struct({
  /** Indicates whether the contract can be paused. */
  canPause: Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: Bool,
}).canPause`

#### Defined in

[packages/nft/src/admin/whitelisted.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L80)

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the contract is currently paused.

#### Inherited from

`Struct({
  /** Indicates whether the contract can be paused. */
  canPause: Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: Bool,
}).isPaused`

#### Defined in

[packages/nft/src/admin/whitelisted.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L82)

## Methods

### pack()

```ts
pack(): Field
```

Packs the pause data into a `Field`.

#### Returns

`Field`

A `Field` representing the packed pause data.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L88)

***

### unpack()

```ts
static unpack(field: Field): PauseData
```

Unpacks a `Field` into `PauseData`.

#### Parameters

##### field

`Field`

The `Field` to unpack.

#### Returns

[`PauseData`](nftsrcclasspausedata)

An instance of `PauseData`.

#### Defined in

[packages/nft/src/admin/whitelisted.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/whitelisted.ts#L96)
