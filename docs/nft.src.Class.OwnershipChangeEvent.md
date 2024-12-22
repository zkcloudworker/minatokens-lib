---
title: OwnershipChangeEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.OwnershipChangeEvent
order: 195
---

# Class: OwnershipChangeEvent

## Properties overview

- newOwner:  PublicKey = PublicKey; [↗](#newowner)
- oldOwner:  PublicKey = PublicKey; [↗](#oldowner)

Event emitted when the ownership of the contract changes.

Contains the old owner's and new owner's public keys.

## Extends

- \{
  `newOwner`: `PublicKey`;
  `oldOwner`: `PublicKey`;
 \}

## Constructors

### new OwnershipChangeEvent()

```ts
new OwnershipChangeEvent(value: {
  newOwner: PublicKey;
  oldOwner: PublicKey;
 }): OwnershipChangeEvent
```

#### Parameters

##### value

###### newOwner

`PublicKey` = `PublicKey`

###### oldOwner

`PublicKey` = `PublicKey`

#### Returns

[`OwnershipChangeEvent`](nftsrcclassownershipchangeevent)

#### Inherited from

`Struct({
  oldOwner: PublicKey,
  newOwner: PublicKey,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### newOwner

```ts
newOwner: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  oldOwner: PublicKey,
  newOwner: PublicKey,
}).newOwner`

#### Defined in

[packages/nft/src/contracts/ownable.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/ownable.ts#L46)

***

### oldOwner

```ts
oldOwner: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  oldOwner: PublicKey,
  newOwner: PublicKey,
}).oldOwner`

#### Defined in

[packages/nft/src/contracts/ownable.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/ownable.ts#L45)
