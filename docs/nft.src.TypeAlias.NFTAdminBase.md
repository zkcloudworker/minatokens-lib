---
title: NFTAdminBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTAdminBase
order: 210
---

# Type Alias: NFTAdminBase

```ts
type NFTAdminBase = SmartContract & {
  canBuy: Promise<Bool>;
  canMint: Promise<MintParamsOption>;
  canSell: Promise<Bool>;
  canTransfer: Promise<Bool>;
  canUpdate: Promise<Bool>;
};
```

The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol.
It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

## Type declaration

### canBuy()

Checks whether a buyer is allowed to purchase an NFT from a seller at a given price.

#### Parameters

##### address

`PublicKey`

The public key of the NFT contract address.

##### seller

`PublicKey`

The public key of the seller.

##### buyer

`PublicKey`

The public key of the buyer.

##### price

`UInt64`

The price at which the NFT is being bought.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the purchase is allowed.

### canMint()

Validates whether a new NFT can be minted based on the provided `MintRequest`.

#### Parameters

##### nft

[`MintRequest`](nftsrcclassmintrequest)

The mint request containing details of the NFT to be minted.

#### Returns

`Promise`\<[`MintParamsOption`](nftsrcclassmintparamsoption)\>

A `Promise` resolving to `MintParamsOption`, containing mint parameters if minting is allowed, or an empty option if not.

### canSell()

Validates if an NFT can be listed for sale by a seller at a specified price.

#### Parameters

##### address

`PublicKey`

The public key of the NFT contract address.

##### seller

`PublicKey`

The public key of the seller.

##### price

`UInt64`

The price at which the NFT is to be sold.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the sale is permissible.

### canTransfer()

Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.

#### Parameters

##### address

`PublicKey`

The public key of the NFT contract address.

##### from

`PublicKey`

The public key of the current owner.

##### to

`PublicKey`

The public key of the intended new owner.

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

## Defined in

[packages/nft/src/contracts/admin.ts:9](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L9)
