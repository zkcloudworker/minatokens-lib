---
title: CollectionData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.CollectionData
order: 190
---

# Class: CollectionData

## Properties overview

- isPaused:  Bool = Bool; [↗](#ispaused)
- mintingIsLimited:  Bool = Bool; [↗](#mintingislimited)
- requireTransferApproval:  Bool = Bool; [↗](#requiretransferapproval)
- royaltyFee:  UInt32 = UInt32; [↗](#royaltyfee)
- transferFee:  UInt64 = UInt64; [↗](#transferfee)

## Methods overview

- pack() [↗](#pack)
- isPaused() [↗](#ispaused)
- mintingIsLimited() [↗](#mintingislimited)
- new() [↗](#new)
- requireTransferApproval() [↗](#requiretransferapproval)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/interfaces/types.ts:454](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L454)

Represents the data associated with an NFT collection, including configuration parameters and permission flags.

## Extends

- \{
  `isPaused`: `Bool`;
  `mintingIsLimited`: `Bool`;
  `requireTransferApproval`: `Bool`;
  `royaltyFee`: `UInt32`;
  `transferFee`: `UInt64`;
 \}

## Constructors

### new CollectionData()

```ts
new CollectionData(value: {
  isPaused: Bool;
  mintingIsLimited: Bool;
  requireTransferApproval: Bool;
  royaltyFee: UInt32;
  transferFee: UInt64;
 }): CollectionData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isPaused

`Bool` = `Bool`

Indicates whether the collection is currently paused.

###### mintingIsLimited

`Bool` = `Bool`

If true, the minting is stopped and cannot be resumed.

###### requireTransferApproval

`Bool` = `Bool`

If true, transferring NFTs requires approval from the admin contract.

###### royaltyFee

`UInt32` = `UInt32`

The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%).

###### transferFee

`UInt64` = `UInt64`

The transfer fee amount.

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).constructor
```

## Properties

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:464](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L464)

Indicates whether the collection is currently paused.

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).isPaused
```

***

### mintingIsLimited

```ts
mintingIsLimited: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:462](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L462)

If true, the minting is stopped and cannot be resumed.

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).mintingIsLimited
```

***

### requireTransferApproval

```ts
requireTransferApproval: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:460](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L460)

If true, transferring NFTs requires approval from the admin contract.

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).requireTransferApproval
```

***

### royaltyFee

```ts
royaltyFee: UInt32 = UInt32;
```

Defined in: [packages/nft/src/interfaces/types.ts:456](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L456)

The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%).

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).royaltyFee
```

***

### transferFee

```ts
transferFee: UInt64 = UInt64;
```

Defined in: [packages/nft/src/interfaces/types.ts:458](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L458)

The transfer fee amount.

#### Inherited from

```ts
Struct({
  / The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%
  / The transfer fee amount. /
  transferFee: UInt64,
  / If true, transferring NFTs requires approval from the admin contract. /
  requireTransferApproval: Bool,
  / If true, the minting is stopped and cannot be resumed. /
  mintingIsLimited: Bool,
  / Indicates whether the collection is currently paused. /
  isPaused: Bool,
}).transferFee
```

## Methods

### pack()

```ts
pack(): Field
```

Defined in: [packages/nft/src/interfaces/types.ts:498](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L498)

Packs the CollectionData into a CollectionDataPacked representation for efficient storage.

#### Returns

`Field`

The packed CollectionDataPacked instance.

***

### isPaused()

```ts
static isPaused(packed: Field): Bool
```

Defined in: [packages/nft/src/interfaces/types.ts:531](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L531)

#### Parameters

##### packed

`Field`

#### Returns

`Bool`

***

### mintingIsLimited()

```ts
static mintingIsLimited(packed: Field): Bool
```

Defined in: [packages/nft/src/interfaces/types.ts:539](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L539)

#### Parameters

##### packed

`Field`

#### Returns

`Bool`

***

### new()

```ts
static new(params: {
  isPaused: boolean;
  mintingIsLimited: boolean;
  requireTransferApproval: boolean;
  royaltyFee: number;
  transferFee: number;
 }): CollectionData
```

Defined in: [packages/nft/src/interfaces/types.ts:471](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L471)

Creates a new CollectionData instance with specified parameters.

#### Parameters

##### params

The parameters to create the CollectionData.

###### isPaused

`boolean`

###### mintingIsLimited

`boolean`

###### requireTransferApproval

`boolean`

###### royaltyFee

`number`

###### transferFee

`number`

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

A new CollectionData instance.

***

### requireTransferApproval()

```ts
static requireTransferApproval(packed: Field): Bool
```

Defined in: [packages/nft/src/interfaces/types.ts:535](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L535)

#### Parameters

##### packed

`Field`

#### Returns

`Bool`

***

### unpack()

```ts
static unpack(packed: Field): CollectionData
```

Defined in: [packages/nft/src/interfaces/types.ts:513](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L513)

Unpacks a CollectionDataPacked instance into a CollectionData instance.

#### Parameters

##### packed

`Field`

The packed CollectionDataPacked instance.

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

A new CollectionData instance.
