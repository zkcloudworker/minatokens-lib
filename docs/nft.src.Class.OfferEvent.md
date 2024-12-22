---
title: OfferEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.OfferEvent
order: 194
---

# Class: OfferEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- price:  UInt64 = UInt64; [↗](#price)
- seller:  PublicKey = PublicKey; [↗](#seller)
- version:  UInt32 = UInt32; [↗](#version)

Emitted when an NFT is listed for sale.

## Extends

- \{
  `address`: `PublicKey`;
  `price`: `UInt64`;
  `seller`: `PublicKey`;
  `version`: `UInt32`;
 \}

## Constructors

### new OfferEvent()

```ts
new OfferEvent(value: {
  address: PublicKey;
  price: UInt64;
  seller: PublicKey;
  version: UInt32;
 }): OfferEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT being sold.

###### price

`UInt64` = `UInt64`

The price at which the NFT is listed for sale.

###### seller

`PublicKey` = `PublicKey`

The public key of the seller listing the NFT for sale.

###### version

`UInt32` = `UInt32`

The version number of the NFT state at the time of listing.

#### Returns

[`OfferEvent`](nftsrcclassofferevent)

#### Inherited from

`Struct({
  /** The public key of the seller listing the NFT for sale. */
  seller: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the NFT being sold.

#### Inherited from

`Struct({
  /** The public key of the seller listing the NFT for sale. */
  seller: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: UInt32,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L80)

***

### price

```ts
price: UInt64 = UInt64;
```

The price at which the NFT is listed for sale.

#### Inherited from

`Struct({
  /** The public key of the seller listing the NFT for sale. */
  seller: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: UInt32,
}).price`

#### Defined in

[packages/nft/src/contracts/events.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L78)

***

### seller

```ts
seller: PublicKey = PublicKey;
```

The public key of the seller listing the NFT for sale.

#### Inherited from

`Struct({
  /** The public key of the seller listing the NFT for sale. */
  seller: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: UInt32,
}).seller`

#### Defined in

[packages/nft/src/contracts/events.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L76)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state at the time of listing.

#### Inherited from

`Struct({
  /** The public key of the seller listing the NFT for sale. */
  seller: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
  /** The version number of the NFT state at the time of listing. */
  version: UInt32,
}).version`

#### Defined in

[packages/nft/src/contracts/events.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L82)
