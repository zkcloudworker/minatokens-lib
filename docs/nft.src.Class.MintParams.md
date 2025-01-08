---
title: MintParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintParams
order: 199
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
- storage:  Storage = Storage; [↗](#storage)
- tokenId:  Field = Field; [↗](#tokenid)

Defined in: [packages/nft/src/interfaces/types.ts:550](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L550)

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
  storage: Storage;
  tokenId: Field;
 }): MintParams
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract.

###### data

[`NFTData`](nftsrcclassnftdata) = `NFTData`

The data associated with the NFT, including owner, approved, version, id, permissions and flags.

###### expiry

`UInt32` = `UInt32`

The expiry time slot for minting the NFT.

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

###### storage

`Storage` = `Storage`

The off-chain storage information (e.g., IPFS hash).

###### tokenId

`Field` = `Field`

The token ID of the NFT.

#### Returns

[`MintParams`](nftsrcclassmintparams)

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:554](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L554)

The address of the NFT contract.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).address
```

***

### data

```ts
data: NFTData = NFTData;
```

Defined in: [packages/nft/src/interfaces/types.ts:558](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L558)

The data associated with the NFT, including owner, approved, version, id, permissions and flags.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).data
```

***

### expiry

```ts
expiry: UInt32 = UInt32;
```

Defined in: [packages/nft/src/interfaces/types.ts:568](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L568)

The expiry time slot for minting the NFT.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).expiry
```

***

### fee

```ts
fee: UInt64 = UInt64;
```

Defined in: [packages/nft/src/interfaces/types.ts:560](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L560)

The fee associated with minting the NFT.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).fee
```

***

### metadata

```ts
metadata: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:562](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L562)

The metadata associated with the NFT.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).metadata
```

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:566](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L566)

The hash of the verification key used for metadata proofs.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).metadataVerificationKeyHash
```

***

### name

```ts
name: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:552](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L552)

The name of the NFT.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).name
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/nft/src/interfaces/types.ts:564](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L564)

The off-chain storage information (e.g., IPFS hash).

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).storage
```

***

### tokenId

```ts
tokenId: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:556](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L556)

The token ID of the NFT.

#### Inherited from

```ts
Struct({
  / The name of the NFT. /
  name: Field,
  / The address of the NFT contract. /
  address: PublicKey,
  / The token ID of the NFT. /
  tokenId: Field,
  / The data associated with the NFT, including owner, approved, version, id, permissions and flags. /
  data: NFTData,
  / The fee associated with minting the NFT. /
  fee: UInt64,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
  / The expiry time slot for minting the NFT. /
  expiry: UInt32,
}).tokenId
```
