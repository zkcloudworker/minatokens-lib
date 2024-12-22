---
title: NFTAdminContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTAdminContractConstructor
order: 211
---

# Type Alias: NFTAdminContractConstructor()

```ts
type NFTAdminContractConstructor = (admin: PublicKey) => NFTAdminBase;
```

Defines a constructor for contracts implementing `NFTAdminBase`, accepting an `admin` public key and returning an instance of `NFTAdminBase`.

## Parameters

### admin

`PublicKey`

The public key of the contract's administrator.

## Returns

[`NFTAdminBase`](nftsrctypealiasnftadminbase)

An instance of `NFTAdminBase`.

## Defined in

[packages/nft/src/contracts/admin.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L74)
