---
title: Bid
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Bid
order: 171
---

# Class: Bid

## Properties overview

- points:  UInt64 = UInt64; [↗](#points)
- price:  UInt64 = UInt64; [↗](#price)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

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

#### Parameters

##### value

###### points

`UInt64` = `UInt64`

###### price

`UInt64` = `UInt64`

#### Returns

[`Bid`](nftsrcclassbid)

#### Inherited from

`Struct({
  price: UInt64,
  points: UInt64,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### points

```ts
points: UInt64 = UInt64;
```

#### Inherited from

`Struct({
  price: UInt64,
  points: UInt64,
}).points`

#### Defined in

[packages/nft/src/marketplace/bid.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L51)

***

### price

```ts
price: UInt64 = UInt64;
```

#### Inherited from

`Struct({
  price: UInt64,
  points: UInt64,
}).price`

#### Defined in

[packages/nft/src/marketplace/bid.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L50)

## Methods

### pack()

```ts
pack(): Field
```

#### Returns

`Field`

#### Defined in

[packages/nft/src/marketplace/bid.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L53)

***

### unpack()

```ts
static unpack(field: Field): Bid
```

#### Parameters

##### field

`Field`

#### Returns

[`Bid`](nftsrcclassbid)

#### Defined in

[packages/nft/src/marketplace/bid.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L59)
