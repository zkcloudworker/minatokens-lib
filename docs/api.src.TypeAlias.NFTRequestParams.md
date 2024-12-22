---
title: NFTRequestParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.NFTRequestParams
order: 70
---

# Type Alias: NFTRequestParams

## Properties overview

- contractAddress:  string; [↗](#contractaddress)
- nftAddress:  string; [↗](#nftaddress)

```ts
type NFTRequestParams = {
  contractAddress: string;
  nftAddress: string;
};
```

## Type declaration

### contractAddress

```ts
contractAddress: string;
```

Always set to this contract address for Mina NFTs.

### nftAddress

```ts
nftAddress: string;
```

The unique NFT address.

## Defined in

[packages/api/src/client/types.gen.ts:251](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L251)