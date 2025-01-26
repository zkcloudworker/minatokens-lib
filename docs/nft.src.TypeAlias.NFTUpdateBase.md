---
title: NFTUpdateBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTUpdateBase
order: 256
---

# Type Alias: NFTUpdateBase

```ts
type NFTUpdateBase = SmartContract & {
  canUpdate: Promise<Bool>;
};
```

Defined in: [packages/nft/src/interfaces/update.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/update.ts#L28)

The `NFTUpdateBase` interface defines the update functionalities required for managing an NFT update

## Type declaration

### canUpdate()

Checks if an NFT can be updated from its current state (`input`) to a new state (`output`).

#### Parameters

##### collectionAddress

`PublicKey`

The public key of the NFT collection address.

##### nftAddress

`PublicKey`

The public key of the NFT.

##### input

[`NFTState`](nftsrcclassnftstate)

The current state of the NFT.

##### output

[`NFTState`](nftsrcclassnftstate)

The desired new state of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the update is permitted.
