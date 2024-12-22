---
title: BidEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BidEvent
order: 264
---

# Class: BidEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- amount:  UInt64 = UInt64; [↗](#amount)

## Extends

- \{
  `address`: `PublicKey`;
  `amount`: `UInt64`;
 \}

## Constructors

### new BidEvent()

```ts
new BidEvent(value: {
  address: PublicKey;
  amount: UInt64;
 }): BidEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

#### Returns

[`BidEvent`](tokensrcclassbidevent)

#### Inherited from

`Struct({
  amount: UInt64,
  address: PublicKey,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  amount: UInt64,
  address: PublicKey,
}).address`

#### Defined in

[packages/token/src/bid.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L26)

***

### amount

```ts
amount: UInt64 = UInt64;
```

#### Inherited from

`Struct({
  amount: UInt64,
  address: PublicKey,
}).amount`

#### Defined in

[packages/token/src/bid.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L25)
