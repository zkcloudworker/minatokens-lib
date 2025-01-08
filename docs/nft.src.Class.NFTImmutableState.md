---
title: NFTImmutableState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTImmutableState
order: 207
---

# Class: NFTImmutableState

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- canApprove:  Bool = Bool; [↗](#canapprove)
- canChangeMetadata:  Bool = Bool; [↗](#canchangemetadata)
- canChangeMetadataVerificationKeyHash:  Bool = Bool; [↗](#canchangemetadataverificationkeyhash)
- canChangeName:  Bool = Bool; [↗](#canchangename)
- canChangeOwnerByProof:  Bool = Bool; [↗](#canchangeownerbyproof)
- canChangeStorage:  Bool = Bool; [↗](#canchangestorage)
- canPause:  Bool = Bool; [↗](#canpause)
- canTransfer:  Bool = Bool; [↗](#cantransfer)
- id:  UInt64 = UInt64; [↗](#id)
- tokenId:  Field = Field; [↗](#tokenid)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromNFTData() [↗](#fromnftdata)

Defined in: [packages/nft/src/interfaces/types.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L91)

Represents the immutable state of an NFT, containing read-only properties
and flags that determine the NFT's behavior and permissions.

## Extends

- \{
  `address`: `PublicKey`;
  `canApprove`: `Bool`;
  `canChangeMetadata`: `Bool`;
  `canChangeMetadataVerificationKeyHash`: `Bool`;
  `canChangeName`: `Bool`;
  `canChangeOwnerByProof`: `Bool`;
  `canChangeStorage`: `Bool`;
  `canPause`: `Bool`;
  `canTransfer`: `Bool`;
  `id`: `UInt64`;
  `tokenId`: `Field`;
 \}

## Constructors

### new NFTImmutableState()

```ts
new NFTImmutableState(value: {
  address: PublicKey;
  canApprove: Bool;
  canChangeMetadata: Bool;
  canChangeMetadataVerificationKeyHash: Bool;
  canChangeName: Bool;
  canChangeOwnerByProof: Bool;
  canChangeStorage: Bool;
  canPause: Bool;
  canTransfer: Bool;
  id: UInt64;
  tokenId: Field;
 }): NFTImmutableState
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract (readonly).

###### canApprove

`Bool` = `Bool`

Specifies if the NFT's approved address can be changed (readonly).

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

###### canChangeStorage

`Bool` = `Bool`

Determines whether the storage associated with the NFT can be altered (readonly).

###### canPause

`Bool` = `Bool`

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

###### canTransfer

`Bool` = `Bool`

Specifies if the NFT's ownership can be transferred (readonly).

###### id

`UInt64` = `UInt64`

The unique identifier of the NFT within the collection (readonly).

###### tokenId

`Field` = `Field`

The token ID associated with the NFT (readonly).

#### Returns

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:109](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L109)

The address of the NFT contract (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).address
```

***

### canApprove

```ts
canApprove: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:97](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L97)

Specifies if the NFT's approved address can be changed (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canApprove
```

***

### canChangeMetadata

```ts
canChangeMetadata: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:99](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L99)

Indicates whether the NFT's metadata can be updated (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canChangeMetadata
```

***

### canChangeMetadataVerificationKeyHash

```ts
canChangeMetadataVerificationKeyHash: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:105](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L105)

Indicates whether the verification key hash for the metadata can be changed (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canChangeMetadataVerificationKeyHash
```

***

### canChangeName

```ts
canChangeName: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:103](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L103)

Specifies if the name of the NFT can be changed (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canChangeName
```

***

### canChangeOwnerByProof

```ts
canChangeOwnerByProof: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:93](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L93)

Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canChangeOwnerByProof
```

***

### canChangeStorage

```ts
canChangeStorage: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:101](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L101)

Determines whether the storage associated with the NFT can be altered (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canChangeStorage
```

***

### canPause

```ts
canPause: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:107](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L107)

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canPause
```

***

### canTransfer

```ts
canTransfer: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:95](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L95)

Specifies if the NFT's ownership can be transferred (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).canTransfer
```

***

### id

```ts
id: UInt64 = UInt64;
```

Defined in: [packages/nft/src/interfaces/types.ts:113](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L113)

The unique identifier of the NFT within the collection (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).id
```

***

### tokenId

```ts
tokenId: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:111](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L111)

The token ID associated with the NFT (readonly).

#### Inherited from

```ts
Struct({
  / Determines if the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
  canChangeOwnerByProof: Bool, // readonly
  / Specifies if the NFT's ownership can be transferred (readonly). /
  canTransfer: Bool, // readonly
  / Specifies if the NFT's approved address can be changed (readonly). /
  canApprove: Bool, // readonly
  / Indicates whether the NFT's metadata can be updated (readonly). /
  canChangeMetadata: Bool, // readonly
  / Determines whether the storage associated with the NFT can be altered (readonly). /
  canChangeStorage: Bool, // readonly
  / Specifies if the name of the NFT can be changed (readonly). /
  canChangeName: Bool, // readonly
  / Indicates whether the verification key hash for the metadata can be changed (readonly). /
  canChangeMetadataVerificationKeyHash: Bool, // readonly
  / Specifies if the NFT contract can be paused, preventing certain operations (readonly). /
  canPause: Bool, // readonly
  / The address of the NFT contract (readonly). /
  address: PublicKey, // readonly
  / The token ID associated with the NFT (readonly). /
  tokenId: Field, // readonly
  / The unique identifier of the NFT within the collection (readonly). /
  id: UInt64, // readonly
}).tokenId
```

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTImmutableState, b: NFTImmutableState): void
```

Defined in: [packages/nft/src/interfaces/types.ts:120](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L120)

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

***

### fromNFTData()

```ts
static fromNFTData(params: {
  address: PublicKey;
  nftData: NFTData;
  tokenId: Field;
 }): NFTImmutableState
```

Defined in: [packages/nft/src/interfaces/types.ts:141](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L141)

Creates a new NFTImmutableState from NFTData and other parameters.

#### Parameters

##### params

The parameters including nftData, creator, address, and tokenId.

###### address

`PublicKey`

###### nftData

[`NFTData`](nftsrcclassnftdata)

###### tokenId

`Field`

#### Returns

[`NFTImmutableState`](nftsrcclassnftimmutablestate)

A new NFTImmutableState instance.
