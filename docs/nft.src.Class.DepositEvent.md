---
title: DepositEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.DepositEvent
order: 192
---

# Class: DepositEvent

## Properties overview

- amount:  UInt64 = UInt64; [↗](#amount)
- buyer:  PublicKey = PublicKey; [↗](#buyer)
- maxPoints:  UInt64 = UInt64; [↗](#maxpoints)

Defined in: [packages/nft/src/marketplace/types.ts:17](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L17)

## Extends

- \{
  `amount`: `UInt64`;
  `buyer`: `PublicKey`;
  `maxPoints`: `UInt64`;
 \}

## Constructors

### new DepositEvent()

```ts
new DepositEvent(value: {
  amount: UInt64;
  buyer: PublicKey;
  maxPoints: UInt64;
 }): DepositEvent
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

[`DepositEvent`](nftsrcclassdepositevent)

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

Defined in: [packages/nft/src/marketplace/types.ts:19](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L19)

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

Defined in: [packages/nft/src/marketplace/types.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L18)

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

Defined in: [packages/nft/src/marketplace/types.ts:20](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L20)

#### Inherited from

```ts
Struct({
  buyer: PublicKey,
  amount: UInt64,
  maxPoints: UInt64,
}).maxPoints
```
