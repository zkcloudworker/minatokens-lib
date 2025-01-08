---
title: Bid
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Bid
order: 188
---

# Class: Bid

## Properties overview

- points:  UInt64 = UInt64; [↗](#points)
- price:  UInt64 = UInt64; [↗](#price)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/marketplace/bid.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L33)

## Extends

- \{
  `points`: `UInt64`;
  `price`: `UInt64`;
 \}

## Constructors

### new Bid()

```ts
new Bid(value: {
  points: UInt64;
  price: UInt64;
 }): Bid
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### points

`UInt64` = `UInt64`

###### price

`UInt64` = `UInt64`

#### Returns

[`Bid`](nftsrcclassbid)

#### Inherited from

```ts
Struct({
  price: UInt64,
  points: UInt64,
}).constructor
```

## Properties

### points

```ts
points: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/bid.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L35)

#### Inherited from

```ts
Struct({
  price: UInt64,
  points: UInt64,
}).points
```

***

### price

```ts
price: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/bid.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L34)

#### Inherited from

```ts
Struct({
  price: UInt64,
  points: UInt64,
}).price
```

## Methods

### pack()

```ts
pack(): Field
```

Defined in: [packages/nft/src/marketplace/bid.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L37)

#### Returns

`Field`

***

### unpack()

```ts
static unpack(field: Field): Bid
```

Defined in: [packages/nft/src/marketplace/bid.ts:43](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L43)

#### Parameters

##### field

`Field`

#### Returns

[`Bid`](nftsrcclassbid)
