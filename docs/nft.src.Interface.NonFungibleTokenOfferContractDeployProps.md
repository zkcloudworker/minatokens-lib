---
title: NonFungibleTokenOfferContractDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.NonFungibleTokenOfferContractDeployProps
order: 240
---

# Interface: NonFungibleTokenOfferContractDeployProps

## Properties overview

- collection:  PublicKey; [↗](#collection)
- nft:  PublicKey; [↗](#nft)
- owner:  PublicKey; [↗](#owner)
- price:  UInt64; [↗](#price)

Defined in: [packages/nft/src/marketplace/offer.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L24)

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### collection

```ts
collection: PublicKey;
```

Defined in: [packages/nft/src/marketplace/offer.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L31)

The collection of the NFT.

***

### nft

```ts
nft: PublicKey;
```

Defined in: [packages/nft/src/marketplace/offer.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L33)

The address of the NFT.

***

### owner

```ts
owner: PublicKey;
```

Defined in: [packages/nft/src/marketplace/offer.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L35)

The owner of the NFT.

***

### price

```ts
price: UInt64;
```

Defined in: [packages/nft/src/marketplace/offer.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/offer.ts#L29)

The offers.
