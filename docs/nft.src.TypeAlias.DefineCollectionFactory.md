---
title: DefineCollectionFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.DefineCollectionFactory
order: 243
---

# Type Alias: DefineCollectionFactory()

```ts
type DefineCollectionFactory = (params: {
  adminContract: () => NFTAdminContractConstructor;
  approvalContract: () => NFTApprovalContractConstructor;
  ownerContract: () => NFTOwnerContractConstructor;
  updateContract: () => NFTUpdateContractConstructor;
 }) => NFTCollectionContractConstructor;
```

Defined in: [packages/nft/src/interfaces/collection.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/collection.ts#L63)

## Parameters

### params

#### adminContract

() => [`NFTAdminContractConstructor`](nftsrctypealiasnftadmincontractconstructor)

#### approvalContract

() => [`NFTApprovalContractConstructor`](nftsrctypealiasnftapprovalcontractconstructor)

#### ownerContract

() => [`NFTOwnerContractConstructor`](nftsrctypealiasnftownercontractconstructor)

#### updateContract

() => [`NFTUpdateContractConstructor`](nftsrctypealiasnftupdatecontractconstructor)

## Returns

[`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)
