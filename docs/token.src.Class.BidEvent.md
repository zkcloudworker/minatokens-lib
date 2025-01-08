---
title: BidEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BidEvent
order: 322
---

# Class: BidEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- amount:  UInt64 = UInt64; [↗](#amount)

Defined in: [packages/token/src/bid.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L24)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

#### Returns

[`BidEvent`](tokensrcclassbidevent)

#### Inherited from

```ts
Struct({
  amount: UInt64,
  address: PublicKey,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/token/src/bid.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L26)

#### Inherited from

```ts
Struct({
  amount: UInt64,
  address: PublicKey,
}).address
```

***

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/token/src/bid.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L25)

#### Inherited from

```ts
Struct({
  amount: UInt64,
  address: PublicKey,
}).amount
```
