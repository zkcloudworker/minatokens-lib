---
title: BondingRedeemEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BondingRedeemEvent
order: 327
---

# Class: BondingRedeemEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- fee:  UInt64 = UInt64; [↗](#fee)
- maxSupply:  UInt64 = UInt64; [↗](#maxsupply)
- minBalance:  UInt64 = UInt64; [↗](#minbalance)
- payment:  UInt64 = UInt64; [↗](#payment)
- seller:  PublicKey = PublicKey; [↗](#seller)

Defined in: [packages/token/src/BondingCurveAdmin.ts:93](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L93)

## Extends

- \{
  `amount`: `UInt64`;
  `fee`: `UInt64`;
  `maxSupply`: `UInt64`;
  `minBalance`: `UInt64`;
  `payment`: `UInt64`;
  `seller`: `PublicKey`;
 \}

## Constructors

### new BondingRedeemEvent()

```ts
new BondingRedeemEvent(value: {
  amount: UInt64;
  fee: UInt64;
  maxSupply: UInt64;
  minBalance: UInt64;
  payment: UInt64;
  seller: PublicKey;
 }): BondingRedeemEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### fee

`UInt64` = `UInt64`

###### maxSupply

`UInt64` = `UInt64`

###### minBalance

`UInt64` = `UInt64`

###### payment

`UInt64` = `UInt64`

###### seller

`PublicKey` = `PublicKey`

#### Returns

[`BondingRedeemEvent`](tokensrcclassbondingredeemevent)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).constructor
```

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:95](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L95)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).amount
```

***

### fee

```ts
fee: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:99](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L99)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).fee
```

***

### maxSupply

```ts
maxSupply: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:98](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L98)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).maxSupply
```

***

### minBalance

```ts
minBalance: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:97](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L97)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).minBalance
```

***

### payment

```ts
payment: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L96)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).payment
```

***

### seller

```ts
seller: PublicKey = PublicKey;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:94](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L94)

#### Inherited from

```ts
Struct({
  seller: PublicKey,
  amount: UInt64,
  payment: UInt64,
  minBalance: UInt64,
  maxSupply: UInt64,
  fee: UInt64,
}).seller
```
