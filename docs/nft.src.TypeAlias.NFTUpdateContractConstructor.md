---
title: NFTUpdateContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTUpdateContractConstructor
order: 257
---

# Type Alias: NFTUpdateContractConstructor()

```ts
type NFTUpdateContractConstructor = (address: PublicKey) => NFTUpdateBase;
```

Defined in: packages/nft/src/interfaces/update.ts:52

Defines a constructor for contracts implementing `NFTUpdateBase`, accepting an `address` public key and returning an instance of `NFTUpdateBase`.

## Parameters

### address

`PublicKey`

The public key of the contract's owner.

## Returns

[`NFTUpdateBase`](nftsrctypealiasnftupdatebase)

An instance of `NFTUpdateBase`.
