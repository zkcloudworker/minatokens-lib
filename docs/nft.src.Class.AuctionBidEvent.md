---
title: AuctionBidEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.AuctionBidEvent
order: 185
---

# Class: AuctionBidEvent

## Properties overview

- bidder:  PublicKey = PublicKey; [↗](#bidder)
- price:  UInt64 = UInt64; [↗](#price)

Defined in: [packages/nft/src/marketplace/auction.ts:172](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L172)

## Extends

- \{
  `bidder`: `PublicKey`;
  `price`: `UInt64`;
 \}

## Constructors

### new AuctionBidEvent()

```ts
new AuctionBidEvent(value: {
  bidder: PublicKey;
  price: UInt64;
 }): AuctionBidEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### bidder

`PublicKey` = `PublicKey`

###### price

`UInt64` = `UInt64`

#### Returns

[`AuctionBidEvent`](nftsrcclassauctionbidevent)

#### Inherited from

```ts
Struct({
  bidder: PublicKey,
  price: UInt64,
}).constructor
```

## Properties

### bidder

```ts
bidder: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:173](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L173)

#### Inherited from

```ts
Struct({
  bidder: PublicKey,
  price: UInt64,
}).bidder
```

***

### price

```ts
price: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:174](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L174)

#### Inherited from

```ts
Struct({
  bidder: PublicKey,
  price: UInt64,
}).price
```
