---
title: SaleEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.SaleEvent
order: 199
---

# Class: SaleEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- buyer:  PublicKey = PublicKey; [↗](#buyer)
- price:  UInt64 = UInt64; [↗](#price)
- seller:  PublicKey = PublicKey; [↗](#seller)

Emitted when an NFT is sold to a buyer

## Extends

- \{
  `address`: `PublicKey`;
  `buyer`: `PublicKey`;
  `price`: `UInt64`;
  `seller`: `PublicKey`;
 \}

## Constructors

### new SaleEvent()

```ts
new SaleEvent(value: {
  address: PublicKey;
  buyer: PublicKey;
  price: UInt64;
  seller: PublicKey;
 }): SaleEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT being sold.

###### buyer

`PublicKey` = `PublicKey`

The public key of the bidder.

###### price

`UInt64` = `UInt64`

The price at which the NFT is listed for sale.

###### seller

`PublicKey` = `PublicKey`

The public key of the seller.

#### Returns

[`SaleEvent`](nftsrcclasssaleevent)

#### Inherited from

`Struct({
  /** The public key of the seller. */
  seller: PublicKey,
  /** The public key of the bidder. */
  buyer: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
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
  /** The public key of the seller. */
  seller: PublicKey,
  /** The public key of the bidder. */
  buyer: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L96)

***

### buyer

```ts
buyer: PublicKey = PublicKey;
```

The public key of the bidder.

#### Inherited from

`Struct({
  /** The public key of the seller. */
  seller: PublicKey,
  /** The public key of the bidder. */
  buyer: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
}).buyer`

#### Defined in

[packages/nft/src/contracts/events.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L92)

***

### price

```ts
price: UInt64 = UInt64;
```

The price at which the NFT is listed for sale.

#### Inherited from

`Struct({
  /** The public key of the seller. */
  seller: PublicKey,
  /** The public key of the bidder. */
  buyer: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
}).price`

#### Defined in

[packages/nft/src/contracts/events.ts:94](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L94)

***

### seller

```ts
seller: PublicKey = PublicKey;
```

The public key of the seller.

#### Inherited from

`Struct({
  /** The public key of the seller. */
  seller: PublicKey,
  /** The public key of the bidder. */
  buyer: PublicKey,
  /** The price at which the NFT is listed for sale. */
  price: UInt64,
  /** The public key address of the NFT being sold. */
  address: PublicKey,
}).seller`

#### Defined in

[packages/nft/src/contracts/events.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L90)
