---
title: DefineNFTSharesFactory
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.DefineNFTSharesFactory
order: 244
---

# Type Alias: DefineNFTSharesFactory()

```ts
type DefineNFTSharesFactory = (params: {
  auctionContract: () => ReturnType<typeof AuctionFactory>;
}) => ReturnType<typeof NFTSharesFactory>;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:118](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L118)

## Parameters

### params

#### auctionContract

() => `ReturnType`\<*typeof* [`AuctionFactory`](nftsrcfunctionauctionfactory)\>

## Returns

`ReturnType`\<*typeof* [`NFTSharesFactory`](nftsrcfunctionnftsharesfactory)\>
