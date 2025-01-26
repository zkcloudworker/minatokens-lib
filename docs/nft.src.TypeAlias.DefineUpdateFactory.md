---
title: DefineUpdateFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.DefineUpdateFactory
order: 246
---

# Type Alias: DefineUpdateFactory()

```ts
type DefineUpdateFactory = (params: {
  collectionContract: () => NFTCollectionContractConstructor;
 }) => NFTUpdateContractConstructor;
```

Defined in: [packages/nft/src/interfaces/update.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/update.ts#L21)

## Parameters

### params

#### collectionContract

() => [`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)

## Returns

[`NFTUpdateContractConstructor`](nftsrctypealiasnftupdatecontractconstructor)
