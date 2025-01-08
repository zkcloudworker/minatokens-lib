---
title: AuctionState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.AuctionState
order: 187
---

# Class: AuctionState

## Properties overview

- auction:  Auction = Auction; [↗](#auction)
- bidAmount:  UInt64 = UInt64; [↗](#bidamount)
- settled:  Bool = Bool; [↗](#settled)

Defined in: [packages/nft/src/marketplace/auction.ts:144](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L144)

## Extends

- \{
  `auction`: [`Auction`](nftsrcclassauction);
  `bidAmount`: `UInt64`;
  `settled`: `Bool`;
 \}

## Constructors

### new AuctionState()

```ts
new AuctionState(value: {
  auction: Auction;
  bidAmount: UInt64;
  settled: Bool;
 }): AuctionState
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### auction

[`Auction`](nftsrcclassauction) = `Auction`

###### bidAmount

`UInt64` = `UInt64`

###### settled

`Bool` = `Bool`

#### Returns

[`AuctionState`](nftsrcclassauctionstate)

#### Inherited from

```ts
Struct({
  bidAmount: UInt64,
  auction: Auction,
  settled: Bool,
}).constructor
```

## Properties

### auction

```ts
auction: Auction = Auction;
```

Defined in: [packages/nft/src/marketplace/auction.ts:146](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L146)

#### Inherited from

```ts
Struct({
  bidAmount: UInt64,
  auction: Auction,
  settled: Bool,
}).auction
```

***

### bidAmount

```ts
bidAmount: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:145](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L145)

#### Inherited from

```ts
Struct({
  bidAmount: UInt64,
  auction: Auction,
  settled: Bool,
}).bidAmount
```

***

### settled

```ts
settled: Bool = Bool;
```

Defined in: [packages/nft/src/marketplace/auction.ts:147](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L147)

#### Inherited from

```ts
Struct({
  bidAmount: UInt64,
  auction: Auction,
  settled: Bool,
}).settled
```
