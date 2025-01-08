---
title: SellEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.SellEvent
order: 220
---

# Class: SellEvent

## Properties overview

- collection:  PublicKey = PublicKey; [↗](#collection)
- nft:  PublicKey = PublicKey; [↗](#nft)
- price:  UInt64 = UInt64; [↗](#price)

Defined in: [packages/nft/src/marketplace/types.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L11)

## Extends

- \{
  `collection`: `PublicKey`;
  `nft`: `PublicKey`;
  `price`: `UInt64`;
 \}

## Constructors

### new SellEvent()

```ts
new SellEvent(value: {
  collection: PublicKey;
  nft: PublicKey;
  price: UInt64;
 }): SellEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### collection

`PublicKey` = `PublicKey`

###### nft

`PublicKey` = `PublicKey`

###### price

`UInt64` = `UInt64`

#### Returns

[`SellEvent`](nftsrcclasssellevent)

#### Inherited from

```ts
Struct({
  collection: PublicKey,
  nft: PublicKey,
  price: UInt64,
}).constructor
```

## Properties

### collection

```ts
collection: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/types.ts:12](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L12)

#### Inherited from

```ts
Struct({
  collection: PublicKey,
  nft: PublicKey,
  price: UInt64,
}).collection
```

***

### nft

```ts
nft: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/types.ts:13](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L13)

#### Inherited from

```ts
Struct({
  collection: PublicKey,
  nft: PublicKey,
  price: UInt64,
}).nft
```

***

### price

```ts
price: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/types.ts:14](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L14)

#### Inherited from

```ts
Struct({
  collection: PublicKey,
  nft: PublicKey,
  price: UInt64,
}).price
```
