---
title: DefineApprovalFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.DefineApprovalFactory
order: 242
---

# Type Alias: DefineApprovalFactory()

```ts
type DefineApprovalFactory = (params: {
  collectionContract: () => NFTCollectionContractConstructor;
 }) => NFTApprovalContractConstructor;
```

Defined in: [packages/nft/src/interfaces/approval.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L21)

## Parameters

### params

#### collectionContract

() => [`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)

## Returns

[`NFTApprovalContractConstructor`](nftsrctypealiasnftapprovalcontractconstructor)
