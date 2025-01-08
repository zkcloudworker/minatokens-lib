---
title: ApproveEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.ApproveEvent
order: 183
---

# Class: ApproveEvent

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- nftAddress:  PublicKey = PublicKey; [↗](#nftaddress)

Defined in: [packages/nft/src/interfaces/events.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L51)

Emitted when an NFT's approved address is updated.

## Extends

- \{
  `approved`: `PublicKey`;
  `nftAddress`: `PublicKey`;
 \}

## Constructors

### new ApproveEvent()

```ts
new ApproveEvent(value: {
  approved: PublicKey;
  nftAddress: PublicKey;
 }): ApproveEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approved

`PublicKey` = `PublicKey`

The public key of the approved address.

###### nftAddress

`PublicKey` = `PublicKey`

The public key address of the NFT.

#### Returns

[`ApproveEvent`](nftsrcclassapproveevent)

#### Inherited from

```ts
Struct({
  / The public key address of the NFT. /
  nftAddress: PublicKey,
  / The public key of the approved address. /
  approved: PublicKey,
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L55)

The public key of the approved address.

#### Inherited from

```ts
Struct({
  / The public key address of the NFT. /
  nftAddress: PublicKey,
  / The public key of the approved address. /
  approved: PublicKey,
}).approved
```

***

### nftAddress

```ts
nftAddress: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L53)

The public key address of the NFT.

#### Inherited from

```ts
Struct({
  / The public key address of the NFT. /
  nftAddress: PublicKey,
  / The public key of the approved address. /
  approved: PublicKey,
}).nftAddress
```
