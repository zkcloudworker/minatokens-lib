---
title: BalanceChangeEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BalanceChangeEvent
order: 321
---

# Class: BalanceChangeEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- amount:  Int64 = Int64; [↗](#amount)

Defined in: [packages/token/src/FungibleTokenContract.ts:334](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L334)

## Extends

- \{
  `address`: `PublicKey`;
  `amount`: `Int64`;
 \}

## Constructors

### new BalanceChangeEvent()

```ts
new BalanceChangeEvent(value: {
  address: PublicKey;
  amount: Int64;
 }): BalanceChangeEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`Int64` = `Int64`

#### Returns

[`BalanceChangeEvent`](tokensrcclassbalancechangeevent)

#### Inherited from

```ts
Struct({
  address: PublicKey,
  amount: Int64,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:335](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L335)

#### Inherited from

```ts
Struct({
  address: PublicKey,
  amount: Int64,
}).address
```

***

### amount

```ts
amount: Int64 = Int64;
```

Defined in: [packages/token/src/FungibleTokenContract.ts:336](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L336)

#### Inherited from

```ts
Struct({
  address: PublicKey,
  amount: Int64,
}).amount
```
