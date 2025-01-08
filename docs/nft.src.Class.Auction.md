---
title: Auction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Auction
order: 184
---

# Class: Auction

## Properties overview

- auctioneer:  PublicKey = PublicKey; [↗](#auctioneer)
- auctionEndTime:  UInt32 = UInt32; [↗](#auctionendtime)
- bidder:  PublicKey = PublicKey; [↗](#bidder)
- collection:  PublicKey = PublicKey; [↗](#collection)
- isNFTtransferred:  Bool = Bool; [↗](#isnfttransferred)
- isNFTwithdrawn:  Bool = Bool; [↗](#isnftwithdrawn)
- isOwnerPaid:  Bool = Bool; [↗](#isownerpaid)
- minimumPrice:  UInt64 = UInt64; [↗](#minimumprice)
- nft:  PublicKey = PublicKey; [↗](#nft)
- owner:  PublicKey = PublicKey; [↗](#owner)
- saleFee:  UInt32 = UInt32; [↗](#salefee)
- transferFee:  UInt64 = UInt64; [↗](#transferfee)
- withdrawPeriod:  UInt32 = UInt32; [↗](#withdrawperiod)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/marketplace/auction.ts:41](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L41)

## Extends

- \{
  `auctioneer`: `PublicKey`;
  `auctionEndTime`: `UInt32`;
  `bidder`: `PublicKey`;
  `collection`: `PublicKey`;
  `isNFTtransferred`: `Bool`;
  `isNFTwithdrawn`: `Bool`;
  `isOwnerPaid`: `Bool`;
  `minimumPrice`: `UInt64`;
  `nft`: `PublicKey`;
  `owner`: `PublicKey`;
  `saleFee`: `UInt32`;
  `transferFee`: `UInt64`;
  `withdrawPeriod`: `UInt32`;
 \}

## Constructors

### new Auction()

```ts
new Auction(value: {
  auctioneer: PublicKey;
  auctionEndTime: UInt32;
  bidder: PublicKey;
  collection: PublicKey;
  isNFTtransferred: Bool;
  isNFTwithdrawn: Bool;
  isOwnerPaid: Bool;
  minimumPrice: UInt64;
  nft: PublicKey;
  owner: PublicKey;
  saleFee: UInt32;
  transferFee: UInt64;
  withdrawPeriod: UInt32;
 }): Auction
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### auctioneer

`PublicKey` = `PublicKey`

###### auctionEndTime

`UInt32` = `UInt32`

###### bidder

`PublicKey` = `PublicKey`

###### collection

`PublicKey` = `PublicKey`

###### isNFTtransferred

`Bool` = `Bool`

###### isNFTwithdrawn

`Bool` = `Bool`

###### isOwnerPaid

`Bool` = `Bool`

###### minimumPrice

`UInt64` = `UInt64`

###### nft

`PublicKey` = `PublicKey`

###### owner

`PublicKey` = `PublicKey`

###### saleFee

`UInt32` = `UInt32`

The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%).

###### transferFee

`UInt64` = `UInt64`

###### withdrawPeriod

`UInt32` = `UInt32`

#### Returns

[`Auction`](nftsrcclassauction)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).constructor
```

## Properties

### auctioneer

```ts
auctioneer: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L45)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).auctioneer
```

***

### auctionEndTime

```ts
auctionEndTime: UInt32 = UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L51)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).auctionEndTime
```

***

### bidder

```ts
bidder: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L46)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).bidder
```

***

### collection

```ts
collection: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:43](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L43)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).collection
```

***

### isNFTtransferred

```ts
isNFTtransferred: Bool = Bool;
```

Defined in: [packages/nft/src/marketplace/auction.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L54)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).isNFTtransferred
```

***

### isNFTwithdrawn

```ts
isNFTwithdrawn: Bool = Bool;
```

Defined in: [packages/nft/src/marketplace/auction.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L55)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).isNFTwithdrawn
```

***

### isOwnerPaid

```ts
isOwnerPaid: Bool = Bool;
```

Defined in: [packages/nft/src/marketplace/auction.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L53)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).isOwnerPaid
```

***

### minimumPrice

```ts
minimumPrice: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L47)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).minimumPrice
```

***

### nft

```ts
nft: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L44)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).nft
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L42)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).owner
```

***

### saleFee

```ts
saleFee: UInt32 = UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L50)

The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%).

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).saleFee
```

***

### transferFee

```ts
transferFee: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:48](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L48)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).transferFee
```

***

### withdrawPeriod

```ts
withdrawPeriod: UInt32 = UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L52)

#### Inherited from

```ts
Struct({
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auctioneer: PublicKey,
  bidder: PublicKey,
  minimumPrice: UInt64,
  transferFee: UInt64,
  / The sale fee percentage (e.g., 1000 = 1%, 100 = 0.1%, 10000 = 10%, 100000 = 100%). /
  saleFee: UInt32,
  auctionEndTime: UInt32,
  withdrawPeriod: UInt32, // in slots
  isOwnerPaid: Bool,
  isNFTtransferred: Bool,
  isNFTwithdrawn: Bool,
}).withdrawPeriod
```

## Methods

### pack()

```ts
pack(): AuctionPacked
```

Defined in: [packages/nft/src/marketplace/auction.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L57)

#### Returns

[`AuctionPacked`](nftsrcclassauctionpacked)

***

### unpack()

```ts
static unpack(packed: AuctionPacked): Auction
```

Defined in: [packages/nft/src/marketplace/auction.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L82)

#### Parameters

##### packed

[`AuctionPacked`](nftsrcclassauctionpacked)

#### Returns

[`Auction`](nftsrcclassauction)
