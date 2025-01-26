---
title: BondingMintEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BondingMintEvent
order: 326
---

# Class: BondingMintEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- fee:  UInt64 = UInt64; [↗](#fee)
- payment:  UInt64 = UInt64; [↗](#payment)
- price:  UInt64 = UInt64; [↗](#price)
- to:  PublicKey = PublicKey; [↗](#to)

Defined in: [packages/token/src/BondingCurveAdmin.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L85)

## Extends

- \{
  `amount`: `UInt64`;
  `fee`: `UInt64`;
  `payment`: `UInt64`;
  `price`: `UInt64`;
  `to`: `PublicKey`;
 \}

## Constructors

### new BondingMintEvent()

```ts
new BondingMintEvent(value: {
  amount: UInt64;
  fee: UInt64;
  payment: UInt64;
  price: UInt64;
  to: PublicKey;
 }): BondingMintEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### fee

`UInt64` = `UInt64`

###### payment

`UInt64` = `UInt64`

###### price

`UInt64` = `UInt64`

###### to

`PublicKey` = `PublicKey`

#### Returns

[`BondingMintEvent`](tokensrcclassbondingmintevent)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).constructor
```

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L87)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).amount
```

***

### fee

```ts
fee: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L90)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).fee
```

***

### payment

```ts
payment: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L89)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).payment
```

***

### price

```ts
price: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L88)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).price
```

***

### to

```ts
to: PublicKey = PublicKey;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:86](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L86)

#### Inherited from

```ts
Struct({
  to: PublicKey,
  amount: UInt64,
  price: UInt64,
  payment: UInt64,
  fee: UInt64,
}).to
```
