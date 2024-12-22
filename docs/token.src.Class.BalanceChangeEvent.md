---
title: BalanceChangeEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BalanceChangeEvent
order: 263
---

# Class: BalanceChangeEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- amount:  Int64 = Int64; [↗](#amount)

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

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`Int64` = `Int64`

#### Returns

[`BalanceChangeEvent`](tokensrcclassbalancechangeevent)

#### Inherited from

`Struct({
  address: PublicKey,
  amount: Int64,
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
  address: PublicKey,
  amount: Int64,
}).address`

#### Defined in

[packages/token/src/FungibleTokenContract.ts:335](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L335)

***

### amount

```ts
amount: Int64 = Int64;
```

#### Inherited from

`Struct({
  address: PublicKey,
  amount: Int64,
}).amount`

#### Defined in

[packages/token/src/FungibleTokenContract.ts:336](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L336)
