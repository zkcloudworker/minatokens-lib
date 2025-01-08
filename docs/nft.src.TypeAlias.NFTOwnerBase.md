---
title: NFTOwnerBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTOwnerBase
order: 254
---

# Type Alias: NFTOwnerBase

```ts
type NFTOwnerBase = SmartContract & {
  canApproveAddress: Promise<Bool>;
  canChangeVerificationKey: Promise<Bool>;
  canPause: Promise<Bool>;
  canResume: Promise<Bool>;
  canTransfer: Promise<Bool>;
};
```

Defined in: [packages/nft/src/interfaces/owner.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L30)

The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol.
It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

## Type declaration

### canApproveAddress()

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

##### approved

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

### canChangeVerificationKey()

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

##### vk

`VerificationKey`

#### Returns

`Promise`\<`Bool`\>

### canPause()

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

### canResume()

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

### canTransfer()

Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.

#### Parameters

##### params

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

The transfer event details.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.
