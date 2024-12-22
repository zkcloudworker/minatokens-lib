---
title: CollectionContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.CollectionContract
order: 224
---

# Function: CollectionContract()

```ts
function CollectionContract(params: {
  adminContract: NFTAdminContractConstructor;
  upgradeContract: UpgradeAuthorityContractConstructor;
 }): typeof Collection
```

Creates a new NFT Collection Contract class.

## Parameters

### params

Constructor parameters including admin and upgrade contracts, and network ID.

#### adminContract

[`NFTAdminContractConstructor`](nftsrctypealiasnftadmincontractconstructor)

#### upgradeContract

`UpgradeAuthorityContractConstructor`

## Returns

*typeof* `Collection`

The Collection class extending TokenContract and implementing required interfaces.

## Defined in

[packages/nft/src/contracts/collection.ts:121](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L121)
