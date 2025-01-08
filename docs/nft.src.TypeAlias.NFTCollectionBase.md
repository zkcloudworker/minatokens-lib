---
title: NFTCollectionBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTCollectionBase
order: 252
---

# Type Alias: NFTCollectionBase

```ts
type NFTCollectionBase = TokenContract & {
  approvedTransferByProof: Promise<void>;
  approvedTransferBySignature: Promise<void>;
  getNFTState: Promise<NFTStateStruct>;
  transferByProof: Promise<void>;
  transferBySignature: Promise<void>;
};
```

Defined in: [packages/nft/src/interfaces/collection.ts:17](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/collection.ts#L17)

The `NFTCollectionBase` interface defines the functionalities required for managing an NFT collection on the Mina Protocol.
It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

## Type declaration

### approvedTransferByProof()

Transfers ownership of an NFT from contract without admin approval using a proof.

#### Parameters

##### params

[`TransferParams`](nftsrcclasstransferparams)

The transfer details.

#### Returns

`Promise`\<`void`\>

### approvedTransferBySignature()

Transfers ownership of an NFT from contract without admin approval.

#### Parameters

##### params

[`TransferParams`](nftsrcclasstransferparams)

The transfer details.

#### Returns

`Promise`\<`void`\>

### getNFTState()

Returns the state of an NFT.

#### Parameters

##### address

`PublicKey`

The address of the NFT.

#### Returns

`Promise`\<[`NFTStateStruct`](nftsrcclassnftstatestruct)\>

The state of the NFT.

### transferByProof()

Transfers ownership of an NFT from contract without admin approval using a proof.

#### Parameters

##### params

[`TransferParams`](nftsrcclasstransferparams)

The transfer details.

#### Returns

`Promise`\<`void`\>

### transferBySignature()

Transfers ownership of an NFT from contract without admin approval.

#### Parameters

##### params

[`TransferParams`](nftsrcclasstransferparams)

The transfer details.

#### Returns

`Promise`\<`void`\>
