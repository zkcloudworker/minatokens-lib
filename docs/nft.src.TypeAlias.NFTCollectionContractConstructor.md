---
title: NFTCollectionContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTCollectionContractConstructor
order: 253
---

# Type Alias: NFTCollectionContractConstructor()

```ts
type NFTCollectionContractConstructor = (address: PublicKey) => NFTCollectionBase;
```

Defined in: [packages/nft/src/interfaces/collection.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/collection.ts#L59)

Defines a constructor for contracts implementing `NFTCollectionBase`, accepting an `address` public key and returning an instance of `NFTCollectionBase`.

## Parameters

### address

`PublicKey`

The contract's address.

## Returns

[`NFTCollectionBase`](nftsrctypealiasnftcollectionbase)

An instance of `NFTCollectionBase`.
