---
title: MintEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.MintEvent
order: 329
---

# Class: MintEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- recipient:  PublicKey = PublicKey; [↗](#recipient)

Defined in: [packages/token/src/FungibleTokenContract.ts:324](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L324)

## Extends

- \{
  `amount`: `UInt64`;
  `recipient`: `PublicKey`;
 \}

## Constructors

### new MintEvent()

```ts
new MintEvent(value: {
  amount: UInt64;
  recipient: PublicKey;
 }): MintEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### recipient

`PublicKey` = `PublicKey`

#### Returns

[`MintEvent`](tokensrcclassmintevent)

#### Inherited from

```ts
Struct({
  recipient: PublicKey,
  amount: UInt64,
}).constructor
```

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:326](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L326)

#### Inherited from

```ts
Struct({
  recipient: PublicKey,
  amount: UInt64,
}).amount
```

***

### recipient

```ts
recipient: PublicKey = PublicKey;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:325](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L325)

#### Inherited from

```ts
Struct({
  recipient: PublicKey,
  amount: UInt64,
}).recipient
```
