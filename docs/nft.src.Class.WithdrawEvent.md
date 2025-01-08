---
title: WithdrawEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.WithdrawEvent
order: 229
---

# Class: WithdrawEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- buyer:  PublicKey = PublicKey; [↗](#buyer)
- maxPoints:  UInt64 = UInt64; [↗](#maxpoints)

Defined in: [packages/nft/src/marketplace/types.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L23)

## Extends

- \{
  `amount`: `UInt64`;
  `buyer`: `PublicKey`;
  `maxPoints`: `UInt64`;
 \}

## Constructors

### new WithdrawEvent()

```ts
new WithdrawEvent(value: {
  amount: UInt64;
  buyer: PublicKey;
  maxPoints: UInt64;
 }): WithdrawEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### amount

`UInt64` = `UInt64`

###### buyer

`PublicKey` = `PublicKey`

###### maxPoints

`UInt64` = `UInt64`

#### Returns

[`WithdrawEvent`](nftsrcclasswithdrawevent)

#### Inherited from

```ts
Struct({
  buyer: PublicKey,
  amount: UInt64,
  maxPoints: UInt64,
}).constructor
```

## Properties

### amount

```ts
amount: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/types.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L25)

#### Inherited from

```ts
Struct({
  buyer: PublicKey,
  amount: UInt64,
  maxPoints: UInt64,
}).amount
```

***

### buyer

```ts
buyer: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/types.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L24)

#### Inherited from

```ts
Struct({
  buyer: PublicKey,
  amount: UInt64,
  maxPoints: UInt64,
}).buyer
```

***

### maxPoints

```ts
maxPoints: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/types.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L26)

#### Inherited from

```ts
Struct({
  buyer: PublicKey,
  amount: UInt64,
  maxPoints: UInt64,
}).maxPoints
```
