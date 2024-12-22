---
title: BuyEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.BuyEvent
order: 172
---

# Class: BuyEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- buyer:  PublicKey = PublicKey; [↗](#buyer)
- price:  UInt64 = UInt64; [↗](#price)
- seller:  PublicKey = PublicKey; [↗](#seller)
- version:  UInt32 = UInt32; [↗](#version)

Emitted when an NFT is purchased.

## Extends

- \{
  `address`: `PublicKey`;
  `buyer`: `PublicKey`;
  `price`: `UInt64`;
  `seller`: `PublicKey`;
  `version`: `UInt32`;
 \}

## Constructors

### new BuyEvent()

```ts
new BuyEvent(value: {
  address: PublicKey;
  buyer: PublicKey;
  price: UInt64;
  seller: PublicKey;
  version: UInt32;
 }): BuyEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT being purchased.

###### buyer

`PublicKey` = `PublicKey`

The public key of the buyer who purchased the NFT.

###### price

`UInt64` = `UInt64`

The price at which the NFT was purchased.

###### seller

`PublicKey` = `PublicKey`

The public key of the seller from whom the NFT is purchased.

###### version

`UInt32` = `UInt32`

The version number of the NFT state at the time of purchase.

#### Returns

[`BuyEvent`](nftsrcclassbuyevent)

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the NFT being purchased.

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L110)

***

### buyer

```ts
buyer: PublicKey = PublicKey;
```

The public key of the buyer who purchased the NFT.

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).buyer`

#### Defined in

[packages/nft/src/contracts/events.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L106)

***

### price

```ts
price: UInt64 = UInt64;
```

The price at which the NFT was purchased.

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).price`

#### Defined in

[packages/nft/src/contracts/events.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L108)

***

### seller

```ts
seller: PublicKey = PublicKey;
```

The public key of the seller from whom the NFT is purchased.

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).seller`

#### Defined in

[packages/nft/src/contracts/events.ts:104](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L104)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state at the time of purchase.

#### Inherited from

`Struct({
  /** The public key of the seller from whom the NFT is purchased. */
  seller: PublicKey,
  /** The public key of the buyer who purchased the NFT. */
  buyer: PublicKey,
  /** The price at which the NFT was purchased. */
  price: UInt64,
  /** The public key address of the NFT being purchased. */
  address: PublicKey,
  /** The version number of the NFT state at the time of purchase. */
  version: UInt32,
}).version`

#### Defined in

[packages/nft/src/contracts/events.ts:112](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L112)
