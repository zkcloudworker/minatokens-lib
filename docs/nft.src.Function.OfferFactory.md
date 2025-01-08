---
title: OfferFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.OfferFactory
order: 286
---

# Function: OfferFactory()

```ts
function OfferFactory(params: {
  collectionContract: () => NFTCollectionContractConstructor;
 }): typeof NonFungibleTokenOfferContract
```

Defined in: [packages/nft/src/marketplace/offer.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L45)

Creates a new NFT Collection Contract class.

## Parameters

### params

Constructor parameters including admin and upgrade contracts, and network ID.

#### collectionContract

() => [`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)

## Returns

*typeof* `NonFungibleTokenOfferContract`

The Collection class extending TokenContract and implementing required interfaces.
