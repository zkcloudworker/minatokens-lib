---
title: NonFungibleTokenContracts
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NonFungibleTokenContracts
order: 258
---

# Type Alias: NonFungibleTokenContracts

## Properties overview

- Admin:  NFTAdminContractConstructor; [↗](#admin)
- Approval:  NFTApprovalContractConstructor; [↗](#approval)
- Collection:  ReturnType<typeof CollectionFactory>; [↗](#collection)
- Owner:  NFTOwnerContractConstructor; [↗](#owner)
- Update:  NFTUpdateContractConstructor; [↗](#update)

```ts
type NonFungibleTokenContracts = {
  Admin: NFTAdminContractConstructor;
  Approval: NFTApprovalContractConstructor;
  Collection: ReturnType<typeof CollectionFactory>;
  Owner: NFTOwnerContractConstructor;
  Update: NFTUpdateContractConstructor;
};
```

Defined in: [packages/nft/src/contracts.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts.ts#L21)

## Type declaration

### Admin

```ts
Admin: NFTAdminContractConstructor;
```

### Approval

```ts
Approval: NFTApprovalContractConstructor;
```

### Collection

```ts
Collection: ReturnType<typeof CollectionFactory>;
```

### Owner

```ts
Owner: NFTOwnerContractConstructor;
```

### Update

```ts
Update: NFTUpdateContractConstructor;
```
