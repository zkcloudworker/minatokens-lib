---
title: NFTAdminBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTAdminBase
order: 248
---

# Type Alias: NFTAdminBase

```ts
type NFTAdminBase = SmartContract & {
  canChangeBaseUri: Promise<Bool>;
  canChangeCreator: Promise<Bool>;
  canChangeName: Promise<Bool>;
  canChangeRoyalty: Promise<Bool>;
  canChangeTransferFee: Promise<Bool>;
  canChangeVerificationKey: Promise<Bool>;
  canMint: Promise<MintParamsOption>;
  canPause: Promise<Bool>;
  canResume: Promise<Bool>;
  canSetAdmin: Promise<Bool>;
  canTransfer: Promise<Bool>;
  canUpdate: Promise<Bool>;
};
```

Defined in: [packages/nft/src/interfaces/admin.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/admin.ts#L18)

The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol.
It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

## Type declaration

### canChangeBaseUri()

Determines if the base URI can be changed for a Collection.

#### Parameters

##### baseUri

`Field`

The new base URI for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the base URI change is allowed.

### canChangeCreator()

Determines if the creator can be changed for a Collection.

#### Parameters

##### creator

`PublicKey`

The new creator for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the creator change is allowed.

### canChangeName()

Determines if the name can be changed for a Collection.

#### Parameters

##### name

`Field`

The new name for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the name change is allowed.

### canChangeRoyalty()

Determines if the royalty fee can be changed for a Collection.

#### Parameters

##### royaltyFee

`UInt32`

The new royalty fee for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the royalty fee change is allowed.

### canChangeTransferFee()

Determines if the transfer fee can be changed for a Collection.

#### Parameters

##### transferFee

`UInt64`

The new transfer fee for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer fee change is allowed.

### canChangeVerificationKey()

Determines if the verification key can be changed for a specific NFT contract address and token ID.

#### Parameters

##### vk

`VerificationKey`

The verification key to be changed.

##### address

`PublicKey`

The public key of the NFT contract address or CollectionContract address.

##### tokenId

`Field`

The token ID of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the verification key change is allowed.

### canMint()

Validates whether a new NFT can be minted based on the provided `MintRequest`.

#### Parameters

##### nft

[`MintRequest`](nftsrcclassmintrequest)

The mint request containing details of the NFT to be minted.

#### Returns

`Promise`\<[`MintParamsOption`](nftsrcclassmintparamsoption)\>

A `Promise` resolving to `MintParamsOption`, containing mint parameters if minting is allowed, or an empty option if not.

### canPause()

Determines if the collection can be paused.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the collection can be paused.

### canResume()

Determines if the collection can be resumed.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the collection can be resumed.

### canSetAdmin()

Determines if the admin contract can be changed for a Collection.

#### Parameters

##### admin

`PublicKey`

The new admin for the Collection.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the admin contract change is allowed.

### canTransfer()

Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.

#### Parameters

##### transferEvent

[`TransferEvent`](nftsrcclasstransferevent)

The transfer event containing details of the transfer.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.

### canUpdate()

Checks if an NFT can be updated from its current state (`input`) to a new state (`output`).

#### Parameters

##### input

[`NFTState`](nftsrcclassnftstate)

The current state of the NFT.

##### output

[`NFTState`](nftsrcclassnftstate)

The desired new state of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the update is permitted.
