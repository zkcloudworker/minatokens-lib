---
title: MintParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintParams
order: 183
---

# Class: MintParams

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- data:  NFTData = NFTData; [↗](#data)
- expiry:  UInt32 = UInt32; [↗](#expiry)
- fee:  UInt64 = UInt64; [↗](#fee)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- storage:  Storage = Storage; [↗](#storage)
- tokenId:  Field = Field; [↗](#tokenid)

Represents the parameters required for minting a new NFT.

## Extends

- \{
  `address`: `PublicKey`;
  `data`: [`NFTData`](nftsrcclassnftdata);
  `expiry`: `UInt32`;
  `fee`: `UInt64`;
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `owner`: `PublicKey`;
  `storage`: `Storage`;
  `tokenId`: `Field`;
 \}

## Constructors

### new MintParams()

```ts
new MintParams(value: {
  address: PublicKey;
  data: NFTData;
  expiry: UInt32;
  fee: UInt64;
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  storage: Storage;
  tokenId: Field;
 }): MintParams
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract.

###### data

[`NFTData`](nftsrcclassnftdata) = `NFTData`

The data associated with the NFT, including permissions and flags.

###### expiry

`UInt32` = `UInt32`

The expiry time for minting the NFT.

###### fee

`UInt64` = `UInt64`

The fee associated with minting the NFT.

###### metadata

`Field` = `Field`

The metadata associated with the NFT.

###### metadataVerificationKeyHash

`Field` = `Field`

The hash of the verification key used for metadata proofs.

###### name

`Field` = `Field`

The name of the NFT.

###### owner

`PublicKey` = `PublicKey`

The owner of the NFT.

###### storage

`Storage` = `Storage`

The off-chain storage information (e.g., IPFS hash).

###### tokenId

`Field` = `Field`

The token ID of the NFT.

#### Returns

[`MintParams`](nftsrcclassmintparams)

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The address of the NFT contract.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).address`

#### Defined in

[packages/nft/src/contracts/types.ts:655](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L655)

***

### data

```ts
data: NFTData = NFTData;
```

The data associated with the NFT, including permissions and flags.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).data`

#### Defined in

[packages/nft/src/contracts/types.ts:661](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L661)

***

### expiry

```ts
expiry: UInt32 = UInt32;
```

The expiry time for minting the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).expiry`

#### Defined in

[packages/nft/src/contracts/types.ts:671](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L671)

***

### fee

```ts
fee: UInt64 = UInt64;
```

The fee associated with minting the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).fee`

#### Defined in

[packages/nft/src/contracts/types.ts:663](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L663)

***

### metadata

```ts
metadata: Field = Field;
```

The metadata associated with the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).metadata`

#### Defined in

[packages/nft/src/contracts/types.ts:665](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L665)

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

The hash of the verification key used for metadata proofs.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).metadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/types.ts:669](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L669)

***

### name

```ts
name: Field = Field;
```

The name of the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).name`

#### Defined in

[packages/nft/src/contracts/types.ts:653](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L653)

***

### owner

```ts
owner: PublicKey = PublicKey;
```

The owner of the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).owner`

#### Defined in

[packages/nft/src/contracts/types.ts:659](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L659)

***

### storage

```ts
storage: Storage = Storage;
```

The off-chain storage information (e.g., IPFS hash).

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).storage`

#### Defined in

[packages/nft/src/contracts/types.ts:667](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L667)

***

### tokenId

```ts
tokenId: Field = Field;
```

The token ID of the NFT.

#### Inherited from

`Struct({
  /** The name of the NFT. */
  name: Field,
  /** The address of the NFT contract. */
  address: PublicKey,
  /** The token ID of the NFT. */
  tokenId: Field,
  /** The owner of the NFT. */
  owner: PublicKey,
  /** The data associated with the NFT, including permissions and flags. */
  data: NFTData,
  /** The fee associated with minting the NFT. */
  fee: UInt64,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
  /** The expiry time for minting the NFT. */
  expiry: UInt32,
}).tokenId`

#### Defined in

[packages/nft/src/contracts/types.ts:657](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L657)
