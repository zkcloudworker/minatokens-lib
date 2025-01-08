---
title: OwnershipChangeEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.OwnershipChangeEvent
order: 217
---

# Class: OwnershipChangeEvent

## Properties overview

- from:  PublicKey = PublicKey; [↗](#from)
- to:  PublicKey = PublicKey; [↗](#to)

Defined in: [packages/nft/src/interfaces/ownable.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/ownable.ts#L29)

Event emitted when the ownership of the contract changes.

Contains the old owner's and new owner's public keys.

## Extends

- \{
  `from`: `PublicKey`;
  `to`: `PublicKey`;
 \}

## Constructors

### new OwnershipChangeEvent()

```ts
new OwnershipChangeEvent(value: {
  from: PublicKey;
  to: PublicKey;
 }): OwnershipChangeEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### from

`PublicKey` = `PublicKey`

###### to

`PublicKey` = `PublicKey`

#### Returns

[`OwnershipChangeEvent`](nftsrcclassownershipchangeevent)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  to: PublicKey,
}).constructor
```

## Properties

### from

```ts
from: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/ownable.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/ownable.ts#L30)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  to: PublicKey,
}).from
```

***

### to

```ts
to: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/ownable.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/ownable.ts#L31)

#### Inherited from

```ts
Struct({
  from: PublicKey,
  to: PublicKey,
}).to
```
