---
title: BidEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.BidEvent
order: 189
---

# Class: BidEvent

## Properties overview

- bids:  Field = Field; [↗](#bids)
- storage:  Storage = Storage; [↗](#storage)
- whitelist:  Field = Field; [↗](#whitelist)

Defined in: [packages/nft/src/marketplace/types.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L29)

## Extends

- \{
  `bids`: `Field`;
  `storage`: `Storage`;
  `whitelist`: `Field`;
 \}

## Constructors

### new BidEvent()

```ts
new BidEvent(value: {
  bids: Field;
  storage: Storage;
  whitelist: Field;
 }): BidEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### bids

`Field` = `Field`

###### storage

`Storage` = `Storage`

###### whitelist

`Field` = `Field`

#### Returns

[`BidEvent`](nftsrcclassbidevent)

#### Inherited from

```ts
Struct({
  bids: Field,
  whitelist: Field,
  storage: Storage,
}).constructor
```

## Properties

### bids

```ts
bids: Field = Field;
```

Defined in: [packages/nft/src/marketplace/types.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L30)

#### Inherited from

```ts
Struct({
  bids: Field,
  whitelist: Field,
  storage: Storage,
}).bids
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/nft/src/marketplace/types.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L32)

#### Inherited from

```ts
Struct({
  bids: Field,
  whitelist: Field,
  storage: Storage,
}).storage
```

***

### whitelist

```ts
whitelist: Field = Field;
```

Defined in: [packages/nft/src/marketplace/types.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/types.ts#L31)

#### Inherited from

```ts
Struct({
  bids: Field,
  whitelist: Field,
  storage: Storage,
}).whitelist
```
