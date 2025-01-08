---
title: CollectionFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.CollectionFactory
order: 280
---

# Function: CollectionFactory()

```ts
function CollectionFactory(params: {
  adminContract: () => NFTAdminContractConstructor;
  approvalContract: () => NFTApprovalContractConstructor;
  ownerContract: () => NFTOwnerContractConstructor;
  updateContract: () => NFTUpdateContractConstructor;
 }): typeof Collection
```

Defined in: [packages/nft/src/contracts/collection.ts:104](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L104)

Creates a new NFT Collection Contract class.

## Parameters

### params

Constructor parameters including admin and upgrade contracts, and network ID.

#### adminContract

() => [`NFTAdminContractConstructor`](nftsrctypealiasnftadmincontractconstructor)

#### approvalContract

() => [`NFTApprovalContractConstructor`](nftsrctypealiasnftapprovalcontractconstructor)

#### ownerContract

() => [`NFTOwnerContractConstructor`](nftsrctypealiasnftownercontractconstructor)

#### updateContract

() => [`NFTUpdateContractConstructor`](nftsrctypealiasnftupdatecontractconstructor)

## Returns

*typeof* `Collection`

The Collection class extending TokenContract and implementing required interfaces.
