---
title: OfferEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.OfferEvent
order: 272
---

# Class: OfferEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- amount:  UInt64 = UInt64; [↗](#amount)

## Extends

- \{
  `address`: `PublicKey`;
  `amount`: `UInt64`;
 \}

## Constructors

### new OfferEvent()

```ts
new OfferEvent(value: {
  address: PublicKey;
  amount: UInt64;
 }): OfferEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

#### Returns

[`OfferEvent`](tokensrcclassofferevent)

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

[packages/token/src/offer.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L26)

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

[packages/token/src/offer.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L25)
