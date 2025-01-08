---
title: DefineOwnerFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.DefineOwnerFactory
order: 245
---

# Type Alias: DefineOwnerFactory()

```ts
type DefineOwnerFactory = (params: {
  collectionContract: () => NFTCollectionContractConstructor;
 }) => NFTOwnerContractConstructor;
```

Defined in: [packages/nft/src/interfaces/owner.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L22)

## Parameters

### params

#### collectionContract

() => [`NFTCollectionContractConstructor`](nftsrctypealiasnftcollectioncontractconstructor)

## Returns

[`NFTOwnerContractConstructor`](nftsrctypealiasnftownercontractconstructor)
