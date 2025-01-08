---
title: AdminData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.AdminData
order: 182
---

# Class: AdminData

## Properties overview

- allowChangeAdmin:  Bool = Bool; [↗](#allowchangeadmin)
- allowChangeBaseUri:  Bool = Bool; [↗](#allowchangebaseuri)
- allowChangeCreator:  Bool = Bool; [↗](#allowchangecreator)
- allowChangeName:  Bool = Bool; [↗](#allowchangename)
- allowChangeRoyalty:  Bool = Bool; [↗](#allowchangeroyalty)
- allowChangeTransferFee:  Bool = Bool; [↗](#allowchangetransferfee)
- canPause:  Bool = Bool; [↗](#canpause)
- isPaused:  Bool = Bool; [↗](#ispaused)

## Methods overview

- pack() [↗](#pack)
- isPaused() [↗](#ispaused)
- new() [↗](#new)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/admin/advanced.ts:66](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L66)

Represents pause-related data, containing flags for pause functionality.

## Extends

- \{
  `allowChangeAdmin`: `Bool`;
  `allowChangeBaseUri`: `Bool`;
  `allowChangeCreator`: `Bool`;
  `allowChangeName`: `Bool`;
  `allowChangeRoyalty`: `Bool`;
  `allowChangeTransferFee`: `Bool`;
  `canPause`: `Bool`;
  `isPaused`: `Bool`;
 \}

## Constructors

### new AdminData()

```ts
new AdminData(value: {
  allowChangeAdmin: Bool;
  allowChangeBaseUri: Bool;
  allowChangeCreator: Bool;
  allowChangeName: Bool;
  allowChangeRoyalty: Bool;
  allowChangeTransferFee: Bool;
  canPause: Bool;
  isPaused: Bool;
 }): AdminData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### allowChangeAdmin

`Bool` = `Bool`

Indicates whether the contract can change the admin.

###### allowChangeBaseUri

`Bool` = `Bool`

Indicates whether the contract can change the base URI.

###### allowChangeCreator

`Bool` = `Bool`

Indicates whether the contract can change the creator.

###### allowChangeName

`Bool` = `Bool`

Indicates whether the contract can change the name.

###### allowChangeRoyalty

`Bool` = `Bool`

Indicates whether the contract can change the royalty fee.

###### allowChangeTransferFee

`Bool` = `Bool`

Indicates whether the contract can change the transfer fee.

###### canPause

`Bool` = `Bool`

Indicates whether the contract can be paused.

###### isPaused

`Bool` = `Bool`

Indicates whether the contract is currently paused.

#### Returns

[`AdminData`](nftsrcclassadmindata)

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).constructor
```

## Properties

### allowChangeAdmin

```ts
allowChangeAdmin: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L80)

Indicates whether the contract can change the admin.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeAdmin
```

***

### allowChangeBaseUri

```ts
allowChangeBaseUri: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L76)

Indicates whether the contract can change the base URI.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeBaseUri
```

***

### allowChangeCreator

```ts
allowChangeCreator: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L78)

Indicates whether the contract can change the creator.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeCreator
```

***

### allowChangeName

```ts
allowChangeName: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L82)

Indicates whether the contract can change the name.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeName
```

***

### allowChangeRoyalty

```ts
allowChangeRoyalty: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L72)

Indicates whether the contract can change the royalty fee.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeRoyalty
```

***

### allowChangeTransferFee

```ts
allowChangeTransferFee: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L74)

Indicates whether the contract can change the transfer fee.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).allowChangeTransferFee
```

***

### canPause

```ts
canPause: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L68)

Indicates whether the contract can be paused.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).canPause
```

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/admin/advanced.ts:70](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L70)

Indicates whether the contract is currently paused.

#### Inherited from

```ts
Struct({
  / Indicates whether the contract can be paused. /
  canPause: Bool,
  / Indicates whether the contract is currently paused. /
  isPaused: Bool,
  / Indicates whether the contract can change the royalty fee. /
  allowChangeRoyalty: Bool,
  / Indicates whether the contract can change the transfer fee. /
  allowChangeTransferFee: Bool,
  / Indicates whether the contract can change the base URI. /
  allowChangeBaseUri: Bool,
  / Indicates whether the contract can change the creator. /
  allowChangeCreator: Bool,
  / Indicates whether the contract can change the admin. /
  allowChangeAdmin: Bool,
  / Indicates whether the contract can change the name. /
  allowChangeName: Bool,
}).isPaused
```

## Methods

### pack()

```ts
pack(): Field
```

Defined in: [packages/nft/src/admin/advanced.ts:121](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L121)

Packs the pause data into a `Field`.

#### Returns

`Field`

A `Field` representing the packed pause data.

***

### isPaused()

```ts
static isPaused(field: Field): Bool
```

Defined in: [packages/nft/src/admin/advanced.ts:160](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L160)

#### Parameters

##### field

`Field`

#### Returns

`Bool`

***

### new()

```ts
static new(params: {
  allowChangeAdmin: boolean;
  allowChangeBaseUri: boolean;
  allowChangeCreator: boolean;
  allowChangeName: boolean;
  allowChangeRoyalty: boolean;
  allowChangeTransferFee: boolean;
  canPause: boolean;
  isPaused: boolean;
 }): AdminData
```

Defined in: [packages/nft/src/admin/advanced.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L84)

#### Parameters

##### params

###### allowChangeAdmin

`boolean`

###### allowChangeBaseUri

`boolean`

###### allowChangeCreator

`boolean`

###### allowChangeName

`boolean`

###### allowChangeRoyalty

`boolean`

###### allowChangeTransferFee

`boolean`

###### canPause

`boolean`

###### isPaused

`boolean`

#### Returns

[`AdminData`](nftsrcclassadmindata)

***

### unpack()

```ts
static unpack(field: Field): AdminData
```

Defined in: [packages/nft/src/admin/advanced.ts:138](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L138)

Unpacks a `Field` into `PauseData`.

#### Parameters

##### field

`Field`

The `Field` to unpack.

#### Returns

[`AdminData`](nftsrcclassadmindata)

An instance of `PauseData`.
