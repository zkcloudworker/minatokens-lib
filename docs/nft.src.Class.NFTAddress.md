---
title: NFTAddress
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTAddress
order: 187
---

# Class: NFTAddress

## Properties overview

- collection:  PublicKey = PublicKey; [↗](#collection)
- nft:  PublicKey = PublicKey; [↗](#nft)

## Extends

- \{
  `collection`: `PublicKey`;
  `nft`: `PublicKey`;
 \}

## Constructors

### new NFTAddress()

```ts
new NFTAddress(value: {
  collection: PublicKey;
  nft: PublicKey;
 }): NFTAddress
```

#### Parameters

##### value

###### collection

`PublicKey` = `PublicKey`

###### nft

`PublicKey` = `PublicKey`

#### Returns

[`NFTAddress`](nftsrcclassnftaddress)

#### Inherited from

`Struct({
  collection: PublicKey,
  nft: PublicKey,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### collection

```ts
collection: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  collection: PublicKey,
  nft: PublicKey,
}).collection`

#### Defined in

[packages/nft/src/marketplace/bid.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L21)

***

### nft

```ts
nft: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  collection: PublicKey,
  nft: PublicKey,
}).nft`

#### Defined in

[packages/nft/src/marketplace/bid.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L22)
