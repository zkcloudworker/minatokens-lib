---
title: NonFungibleTokenAuctionContractDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.NonFungibleTokenAuctionContractDeployProps
order: 238
---

# Interface: NonFungibleTokenAuctionContractDeployProps

## Properties overview

- auctioneer:  PublicKey; [↗](#auctioneer)
- auctionEndTime:  UInt32; [↗](#auctionendtime)
- collection:  PublicKey; [↗](#collection)
- minimumPrice:  UInt64; [↗](#minimumprice)
- nft:  PublicKey; [↗](#nft)
- owner:  PublicKey; [↗](#owner)
- saleFee:  UInt32; [↗](#salefee)
- transferFee:  UInt64; [↗](#transferfee)
- withdrawPeriod:  UInt32; [↗](#withdrawperiod)

Defined in: [packages/nft/src/marketplace/auction.ts:150](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L150)

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### auctioneer

```ts
auctioneer: PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:163](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L163)

The auctioneer of the NFT.

***

### auctionEndTime

```ts
auctionEndTime: UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:155](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L155)

The auction end time.

***

### collection

```ts
collection: PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:157](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L157)

The collection of the NFT.

***

### minimumPrice

```ts
minimumPrice: UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L153)

The minimum price.

***

### nft

```ts
nft: PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:159](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L159)

The address of the NFT.

***

### owner

```ts
owner: PublicKey;
```

Defined in: [packages/nft/src/marketplace/auction.ts:161](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L161)

The owner of the NFT.

***

### saleFee

```ts
saleFee: UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:167](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L167)

The sale fee.

***

### transferFee

```ts
transferFee: UInt64;
```

Defined in: [packages/nft/src/marketplace/auction.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L165)

The transfer fee.

***

### withdrawPeriod

```ts
withdrawPeriod: UInt32;
```

Defined in: [packages/nft/src/marketplace/auction.ts:169](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/auction.ts#L169)

The withdraw period.
