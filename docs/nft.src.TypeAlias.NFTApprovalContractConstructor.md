---
title: NFTApprovalContractConstructor
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTApprovalContractConstructor
order: 251
---

# Type Alias: NFTApprovalContractConstructor()

```ts
type NFTApprovalContractConstructor = (address: PublicKey) => NFTApprovalBase;
```

Defined in: [packages/nft/src/interfaces/approval.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L44)

Defines a constructor for contracts implementing `NFTApprovalBase`, accepting an `address` public key and returning an instance of `NFTApprovalBase`.

## Parameters

### address

`PublicKey`

The public key of the contract's owner.

## Returns

[`NFTApprovalBase`](nftsrctypealiasnftapprovalbase)

An instance of `NFTApprovalBase`.
