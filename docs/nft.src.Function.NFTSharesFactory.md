---
title: NFTSharesFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.NFTSharesFactory
order: 284
---

# Function: NFTSharesFactory()

## Properties overview

- Returns: {} [↗](#returns)
- NFTSharesAdmin:  typeof NFTSharesAdmin; [↗](#nftsharesadmin)
- NFTSharesOwner:  typeof NFTSharesOwner; [↗](#nftsharesowner)

## Methods overview

- FungibleToken() [↗](#fungibletoken)

```ts
function NFTSharesFactory(params: {
  auctionContract: () => typeof NonFungibleTokenAuctionContract;
 }): {
  FungibleToken: (address: PublicKey, tokenId?: Field) => {};
  NFTSharesAdmin: typeof NFTSharesAdmin;
  NFTSharesOwner: typeof NFTSharesOwner;
}
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L122)

## Parameters

### params

#### auctionContract

() => *typeof* `NonFungibleTokenAuctionContract`

## Returns

```ts
{
  FungibleToken: (address: PublicKey, tokenId?: Field) => {};
  NFTSharesAdmin: typeof NFTSharesAdmin;
  NFTSharesOwner: typeof NFTSharesOwner;
}
```

### FungibleToken()

```ts
FungibleToken: (address: PublicKey, tokenId?: Field) => {};
```

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

```ts
{}
```

### NFTSharesAdmin

```ts
NFTSharesAdmin: typeof NFTSharesAdmin;
```

### NFTSharesOwner

```ts
NFTSharesOwner: typeof NFTSharesOwner;
```
