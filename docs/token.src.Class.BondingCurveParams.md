---
title: BondingCurveParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BondingCurveParams
order: 325
---

# Class: BondingCurveParams

## Properties overview

- curveK:  UInt64 = UInt64; [↗](#curvek)
- fee:  UInt32 = UInt32; [↗](#fee)
- mintingIsAllowed:  Bool = Bool; [↗](#mintingisallowed)
- startPrice:  UInt64 = UInt64; [↗](#startprice)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

Defined in: [packages/token/src/BondingCurveAdmin.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L50)

Default bonding curve:
Initial price: 1 MINA per 100,000 tokens (0.00001 MINA per token), or 10_000 / 10 ** 9
Curve K: 1 MINA per 100,000 tokens (0.00001 MINA per token), or 10_000 / 10 ** 9 MINA
Owner fee: 10% in 0.001 % units(10 * 1000 = 10_000)
Price formula: price = startPrice + curveK * totalSupply
Example:
If supply is 200,000 tokens, price = 1 MINA + 1 MINA * 200_000 / 100_000 = 3 MINA per 100,000 tokens
or per token in MINA/1e9
10000 + 10000 * 200_000 / 100_000 = 30000 per token,
or 30_000 * 100_000 = 3_000_000_000, or 3 MINA per 100,000 tokens

To calculate the max supply for the given price for 100,000 tokens:
price = startPrice + curveK * totalSupply
price - startPrice = curveK * totalSupply
(price - startPrice) / curveK = totalSupply
(3 MINA - 1 MINA) / 1 MINA = 2 * 100_000 = 200_000 tokens
(30_000 - 10_000) / 10_000 = 2 * 100_000 = 200_000 tokens
or, in 1e9 units:
(30_000 - 10_000) * 1e9 * 100_000 / 10_000 = 200_000_000_000_000, or to avoid overflow,
(30_000 - 10_000) * 1e9 / 10_000 * 100_000  = 200_000_000_000_000

## Extends

- \{
  `curveK`: `UInt64`;
  `fee`: `UInt32`;
  `mintingIsAllowed`: `Bool`;
  `startPrice`: `UInt64`;
 \}

## Constructors

### new BondingCurveParams()

```ts
new BondingCurveParams(value: {
  curveK: UInt64;
  fee: UInt32;
  mintingIsAllowed: Bool;
  startPrice: UInt64;
 }): BondingCurveParams
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### curveK

`UInt64` = `UInt64`

###### fee

`UInt32` = `UInt32`

###### mintingIsAllowed

`Bool` = `Bool`

###### startPrice

`UInt64` = `UInt64`

#### Returns

[`BondingCurveParams`](tokensrcclassbondingcurveparams)

#### Inherited from

```ts
Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}).constructor
```

## Properties

### curveK

```ts
curveK: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L52)

#### Inherited from

```ts
Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}).curveK
```

***

### fee

```ts
fee: UInt32 = UInt32;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L53)

#### Inherited from

```ts
Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}).fee
```

***

### mintingIsAllowed

```ts
mintingIsAllowed: Bool = Bool;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L54)

#### Inherited from

```ts
Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}).mintingIsAllowed
```

***

### startPrice

```ts
startPrice: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L51)

#### Inherited from

```ts
Struct({
  startPrice: UInt64,
  curveK: UInt64,
  fee: UInt32, // 1000 = 1%
  mintingIsAllowed: Bool,
}).startPrice
```

## Methods

### pack()

```ts
pack(): Field
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L56)

#### Returns

`Field`

***

### unpack()

```ts
static unpack(field: Field): BondingCurveParams
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:64](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L64)

#### Parameters

##### field

`Field`

#### Returns

[`BondingCurveParams`](tokensrcclassbondingcurveparams)
