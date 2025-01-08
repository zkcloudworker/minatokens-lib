---
title: NFTOwnerContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTOwnerContractConstructor
order: 255
---

# Type Alias: NFTOwnerContractConstructor()

```ts
type NFTOwnerContractConstructor = (address: PublicKey) => NFTOwnerBase;
```

Defined in: [packages/nft/src/interfaces/owner.ts:62](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L62)

Defines a constructor for contracts implementing `NFTOwnerBase`, accepting an `address` public key and returning an instance of `NFTOwnerBase`.

## Parameters

### address

`PublicKey`

The public key of the contract's owner.

## Returns

[`NFTOwnerBase`](nftsrctypealiasnftownerbase)

An instance of `NFTOwnerBase`.
