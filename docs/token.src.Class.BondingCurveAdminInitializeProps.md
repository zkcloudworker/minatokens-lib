---
title: BondingCurveAdminInitializeProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BondingCurveAdminInitializeProps
order: 324
---

# Class: BondingCurveAdminInitializeProps

## Properties overview

- curveK:  UInt64 = UInt64; [↗](#curvek)
- fee:  UInt32 = UInt32; [↗](#fee)
- feeMaster:  PublicKey = PublicKey; [↗](#feemaster)
- launchFee:  UInt64 = UInt64; [↗](#launchfee)
- numberOfNewAccounts:  UInt64 = UInt64; [↗](#numberofnewaccounts)
- startPrice:  UInt64 = UInt64; [↗](#startprice)
- tokenAddress:  PublicKey = PublicKey; [↗](#tokenaddress)

Defined in: [packages/token/src/BondingCurveAdmin.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L102)

## Extends

- \{
  `curveK`: `UInt64`;
  `fee`: `UInt32`;
  `feeMaster`: `PublicKey`;
  `launchFee`: `UInt64`;
  `numberOfNewAccounts`: `UInt64`;
  `startPrice`: `UInt64`;
  `tokenAddress`: `PublicKey`;
 \}

## Constructors

### new BondingCurveAdminInitializeProps()

```ts
new BondingCurveAdminInitializeProps(value: {
  curveK: UInt64;
  fee: UInt32;
  feeMaster: PublicKey;
  launchFee: UInt64;
  numberOfNewAccounts: UInt64;
  startPrice: UInt64;
  tokenAddress: PublicKey;
 }): BondingCurveAdminInitializeProps
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### curveK

`UInt64` = `UInt64`

###### fee

`UInt32` = `UInt32`

###### feeMaster

`PublicKey` = `PublicKey`

###### launchFee

`UInt64` = `UInt64`

###### numberOfNewAccounts

`UInt64` = `UInt64`

###### startPrice

`UInt64` = `UInt64`

###### tokenAddress

`PublicKey` = `PublicKey`

#### Returns

[`BondingCurveAdminInitializeProps`](tokensrcclassbondingcurveadmininitializeprops)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).constructor
```

## Properties

### curveK

```ts
curveK: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:105](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L105)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).curveK
```

***

### fee

```ts
fee: UInt32 = UInt32;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:107](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L107)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).fee
```

***

### feeMaster

```ts
feeMaster: PublicKey = PublicKey;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L106)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).feeMaster
```

***

### launchFee

```ts
launchFee: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L108)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).launchFee
```

***

### numberOfNewAccounts

```ts
numberOfNewAccounts: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:109](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L109)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).numberOfNewAccounts
```

***

### startPrice

```ts
startPrice: UInt64 = UInt64;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:104](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L104)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).startPrice
```

***

### tokenAddress

```ts
tokenAddress: PublicKey = PublicKey;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:103](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L103)

#### Inherited from

```ts
Struct({
  tokenAddress: PublicKey,
  startPrice: UInt64,
  curveK: UInt64,
  feeMaster: PublicKey,
  fee: UInt32, // 1000 = 1%
  launchFee: UInt64,
  numberOfNewAccounts: UInt64,
}).tokenAddress
```
