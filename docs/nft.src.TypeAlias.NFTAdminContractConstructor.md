---
title: NFTAdminContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTAdminContractConstructor
order: 249
---

# Type Alias: NFTAdminContractConstructor()

```ts
type NFTAdminContractConstructor = (address: PublicKey) => NFTAdminBase;
```

Defined in: [packages/nft/src/interfaces/admin.ts:127](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/admin.ts#L127)

Defines a constructor for contracts implementing `NFTAdminBase`, accepting an `address` public key and returning an instance of `NFTAdminBase`.

## Parameters

### address

`PublicKey`

The contract's address.

## Returns

[`NFTAdminBase`](nftsrctypealiasnftadminbase)

An instance of `NFTAdminBase`.
