---
title: BurnEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BurnEvent
order: 265
---

# Class: BurnEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- from:  PublicKey = PublicKey; [↗](#from)

## Extends

- \{
  `amount`: `UInt64`;
  `from`: `PublicKey`;
 \}

## Constructors

### new BurnEvent()

```ts
new BurnEvent(value: {
  amount: UInt64;
  from: PublicKey;
 }): BurnEvent
```

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### from

`PublicKey` = `PublicKey`

#### Returns

[`BurnEvent`](tokensrcclassburnevent)

#### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

#### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).amount`

#### Defined in

[packages/token/src/FungibleTokenContract.ts:331](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L331)

***

### from

```ts
from: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).from`

#### Defined in

[packages/token/src/FungibleTokenContract.ts:330](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L330)
