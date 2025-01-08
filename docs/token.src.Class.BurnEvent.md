---
title: BurnEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BurnEvent
order: 323
---

# Class: BurnEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- from:  PublicKey = PublicKey; [↗](#from)

Defined in: [packages/token/src/FungibleTokenContract.ts:329](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L329)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### from

`PublicKey` = `PublicKey`

#### Returns

[`BurnEvent`](tokensrcclassburnevent)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  amount: UInt64,
}).constructor
```

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:331](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L331)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  amount: UInt64,
}).amount
```

***

### from

```ts
from: PublicKey = PublicKey;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:330](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L330)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  amount: UInt64,
}).from
```
