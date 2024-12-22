---
title: NFTImmutableState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTImmutableState
order: 189
---

# Class: NFTImmutableState

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- canChangeMetadata:  Bool = Bool; [↗](#canchangemetadata)
- canChangeMetadataVerificationKeyHash:  Bool = Bool; [↗](#canchangemetadataverificationkeyhash)
- canChangeName:  Bool = Bool; [↗](#canchangename)
- canChangeOwnerByProof:  Bool = Bool; [↗](#canchangeownerbyproof)
- canChangeOwnerBySignature:  Bool = Bool; [↗](#canchangeownerbysignature)
- canChangePrice:  Bool = Bool; [↗](#canchangeprice)
- canChangeStorage:  Bool = Bool; [↗](#canchangestorage)
- canPause:  Bool = Bool; [↗](#canpause)
- creator:  PublicKey = PublicKey; [↗](#creator)
- id:  UInt32 = UInt32; [↗](#id)
- tokenId:  Field = Field; [↗](#tokenid)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromNFTData() [↗](#fromnftdata)

Represents the immutable state of an NFT, containing read-only properties
and flags that determine the NFT's behavior and permissions.

## Extends

- \{
  `address`: `PublicKey`;
  `canChangeMetadata`: `Bool`;
  `canChangeMetadataVerificationKeyHash`: `Bool`;
  `canChangeName`: `Bool`;
  `canChangeOwnerByProof`: `Bool`;
  `canChangeOwnerBySignature`: `Bool`;
  `canChangePrice`: `Bool`;
  `canChangeStorage`: `Bool`;
  `canPause`: `Bool`;
  `creator`: `PublicKey`;
  `id`: `UInt32`;
  `tokenId`: `Field`;
 \}

## Constructors

### new NFTImmutableState()

```ts
new NFTImmutableState(value: {
  address: PublicKey;
  canChangeMetadata: Bool;
  canChangeMetadataVerificationKeyHash: Bool;
  canChangeName: Bool;
  canChangeOwnerByProof: Bool;
  canChangeOwnerBySignature: Bool;
  canChangePrice: Bool;
  canChangeStorage: Bool;
  canPause: Bool;
  creator: PublicKey;
  id: UInt32;
  tokenId: Field;
 }): NFTImmutableState
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract (readonly).

###### canChangeMetadata

`Bool` = `Bool`

Indicates whether the NFT's metadata can be updated (readonly).

###### canChangeMetadataVerificationKeyHash

`Bool` = `Bool`

Indicates whether the verification key hash for the metadata can be changed (readonly).

###### canChangeName

`Bool` = `Bool`

Specifies if the name of the NFT can be changed (readonly).

###### canChangeOwnerByProof

`Bool` = `Bool`

Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly).

###### canChangeOwnerBySignature

`Bool` = `Bool`

Specifies if the NFT's ownership can be transferred through the owner's signature (readonly).

###### canChangePrice

`Bool` = `Bool`

Indicates if the price of the NFT can be modified (readonly).

###### canChangeStorage

`Bool` = `Bool`

Determines whether the storage associated with the NFT can be altered (readonly).

###### canPause

`Bool` = `Bool`

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

###### creator

`PublicKey` = `PublicKey`

The public key of the creator of the NFT (readonly).

###### id

`UInt32` = `UInt32`

The unique identifier of the NFT within the collection (readonly).

###### tokenId

`Field` = `Field`

The token ID associated with the NFT (readonly).

#### Returns

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The address of the NFT contract (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).address`

#### Defined in

[packages/nft/src/contracts/types.ts:149](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L149)

***

### canChangeMetadata

```ts
canChangeMetadata: Bool = Bool;
```

Indicates whether the NFT's metadata can be updated (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeMetadata`

#### Defined in

[packages/nft/src/contracts/types.ts:137](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L137)

***

### canChangeMetadataVerificationKeyHash

```ts
canChangeMetadataVerificationKeyHash: Bool = Bool;
```

Indicates whether the verification key hash for the metadata can be changed (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeMetadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/types.ts:145](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L145)

***

### canChangeName

```ts
canChangeName: Bool = Bool;
```

Specifies if the name of the NFT can be changed (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeName`

#### Defined in

[packages/nft/src/contracts/types.ts:143](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L143)

***

### canChangeOwnerByProof

```ts
canChangeOwnerByProof: Bool = Bool;
```

Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeOwnerByProof`

#### Defined in

[packages/nft/src/contracts/types.ts:133](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L133)

***

### canChangeOwnerBySignature

```ts
canChangeOwnerBySignature: Bool = Bool;
```

Specifies if the NFT's ownership can be transferred through the owner's signature (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeOwnerBySignature`

#### Defined in

[packages/nft/src/contracts/types.ts:135](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L135)

***

### canChangePrice

```ts
canChangePrice: Bool = Bool;
```

Indicates if the price of the NFT can be modified (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangePrice`

#### Defined in

[packages/nft/src/contracts/types.ts:139](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L139)

***

### canChangeStorage

```ts
canChangeStorage: Bool = Bool;
```

Determines whether the storage associated with the NFT can be altered (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canChangeStorage`

#### Defined in

[packages/nft/src/contracts/types.ts:141](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L141)

***

### canPause

```ts
canPause: Bool = Bool;
```

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).canPause`

#### Defined in

[packages/nft/src/contracts/types.ts:147](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L147)

***

### creator

```ts
creator: PublicKey = PublicKey;
```

The public key of the creator of the NFT (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).creator`

#### Defined in

[packages/nft/src/contracts/types.ts:131](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L131)

***

### id

```ts
id: UInt32 = UInt32;
```

The unique identifier of the NFT within the collection (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).id`

#### Defined in

[packages/nft/src/contracts/types.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L153)

***

### tokenId

```ts
tokenId: Field = Field;
```

The token ID associated with the NFT (readonly).

#### Inherited from

`Struct({
  /** The public key of the creator of the NFT (readonly). */
  creator: PublicKey, // readonly
  /** Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
  canChangeOwnerByProof: Bool, // readonly
  /** Specifies if the NFT's ownership can be transferred through the owner's signature (readonly). */
  canChangeOwnerBySignature: Bool, // readonly
  /** Indicates whether the NFT's metadata can be updated (readonly). */
  canChangeMetadata: Bool, // readonly
  /** Indicates if the price of the NFT can be modified (readonly). */
  canChangePrice: Bool, // readonly
  /** Determines whether the storage associated with the NFT can be altered (readonly). */
  canChangeStorage: Bool, // readonly
  /** Specifies if the name of the NFT can be changed (readonly). */
  canChangeName: Bool, // readonly
  /** Indicates whether the verification key hash for the metadata can be changed (readonly). */
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  /** Specifies if the NFT contract can be paused, preventing certain operations (readonly). */
  canPause: Bool, // readonly
  /** The address of the NFT contract (readonly). */
  address: PublicKey, // readonly
  /** The token ID associated with the NFT (readonly). */
  tokenId: Field, // readonly
  /** The unique identifier of the NFT within the collection (readonly). */
  id: UInt32, // readonly
}).tokenId`

#### Defined in

[packages/nft/src/contracts/types.ts:151](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L151)

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTImmutableState, b: NFTImmutableState): void
```

Asserts that two NFTImmutableState instances are equal.

#### Parameters

##### a

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

The first NFTImmutableState instance.

##### b

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

The second NFTImmutableState instance.

#### Returns

`void`

#### Defined in

[packages/nft/src/contracts/types.ts:160](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L160)

***

### fromNFTData()

```ts
static fromNFTData(params: {
  address: PublicKey;
  creator: PublicKey;
  nftData: NFTData;
  tokenId: Field;
 }): NFTImmutableState
```

Creates a new NFTImmutableState from NFTData and other parameters.

#### Parameters

##### params

The parameters including nftData, creator, address, and tokenId.

###### address

`PublicKey`

###### creator

`PublicKey`

###### nftData

[`NFTData`](nftsrcclassnftdata)

###### tokenId

`Field`

#### Returns

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

A new NFTImmutableState instance.

#### Defined in

[packages/nft/src/contracts/types.ts:182](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L182)
