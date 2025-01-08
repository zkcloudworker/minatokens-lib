---
title: AuctionFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.AuctionFactory
order: 278
---

# Function: AuctionFactory()

```ts
function AuctionFactory(params: {
  collectionContract: () => NFTCollectionContractConstructor;
 }): typeof NonFungibleTokenAuctionContract
```

Defined in: [packages/nft/src/marketplace/auction.ts:184](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L184)

Creates a new NFT Collection Contract class.

## Parameters

### params

Constructor parameters including admin and upgrade contracts, and network ID.

#### collectionContract

() => [`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)

## Returns

*typeof* `NonFungibleTokenAuctionContract`

The Collection class extending TokenContract and implementing required interfaces.
