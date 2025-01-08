---
title: NonFungibleTokenContractsFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.NonFungibleTokenContractsFactory
order: 285
---

# Function: NonFungibleTokenContractsFactory()

```ts
function NonFungibleTokenContractsFactory(params: {
  adminContract: NFTAdminContractConstructor;
  approvalFactory: DefineApprovalFactory;
  ownerFactory: DefineOwnerFactory;
  updateFactory: DefineUpdateFactory;
 }): NonFungibleTokenContracts
```

Defined in: [packages/nft/src/contracts.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts.ts#L29)

## Parameters

### params

#### adminContract

[`NFTAdminContractConstructor`](nftsrctypealiasnftadmincontractconstructor)

#### approvalFactory

[`DefineApprovalFactory`](nftsrctypealiasdefineapprovalfactory)

#### ownerFactory

[`DefineOwnerFactory`](nftsrctypealiasdefineownerfactory)

#### updateFactory

[`DefineUpdateFactory`](nftsrctypealiasdefineupdatefactory)

## Returns

[`NonFungibleTokenContracts`](nftsrctypealiasnonfungibletokencontracts)
