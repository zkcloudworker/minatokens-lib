---
title: NFTData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTData
order: 188
---

# Class: NFTData

## Properties overview

- canChangeMetadata:  Bool = Bool; [↗](#canchangemetadata)
- canChangeMetadataVerificationKeyHash:  Bool = Bool; [↗](#canchangemetadataverificationkeyhash)
- canChangeName:  Bool = Bool; [↗](#canchangename)
- canChangeOwnerByProof:  Bool = Bool; [↗](#canchangeownerbyproof)
- canChangeOwnerBySignature:  Bool = Bool; [↗](#canchangeownerbysignature)
- canChangePrice:  Bool = Bool; [↗](#canchangeprice)
- canChangeStorage:  Bool = Bool; [↗](#canchangestorage)
- canPause:  Bool = Bool; [↗](#canpause)
- id:  UInt32 = UInt32; [↗](#id)
- isPaused:  Bool = Bool; [↗](#ispaused)
- price:  UInt64 = UInt64; [↗](#price)
- requireOwnerSignatureToUpgrade:  Bool = Bool; [↗](#requireownersignaturetoupgrade)
- version:  UInt32 = UInt32; [↗](#version)

## Methods overview

- pack() [↗](#pack)
- new() [↗](#new)
- unpack() [↗](#unpack)

Represents the data associated with an NFT, including state and permission flags.

## Extends

- \{
  `canChangeMetadata`: `Bool`;
  `canChangeMetadataVerificationKeyHash`: `Bool`;
  `canChangeName`: `Bool`;
  `canChangeOwnerByProof`: `Bool`;
  `canChangeOwnerBySignature`: `Bool`;
  `canChangePrice`: `Bool`;
  `canChangeStorage`: `Bool`;
  `canPause`: `Bool`;
  `id`: `UInt32`;
  `isPaused`: `Bool`;
  `price`: `UInt64`;
  `requireOwnerSignatureToUpgrade`: `Bool`;
  `version`: `UInt32`;
 \}

## Constructors

### new NFTData()

```ts
new NFTData(value: {
  canChangeMetadata: Bool;
  canChangeMetadataVerificationKeyHash: Bool;
  canChangeName: Bool;
  canChangeOwnerByProof: Bool;
  canChangeOwnerBySignature: Bool;
  canChangePrice: Bool;
  canChangeStorage: Bool;
  canPause: Bool;
  id: UInt32;
  isPaused: Bool;
  price: UInt64;
  requireOwnerSignatureToUpgrade: Bool;
  version: UInt32;
 }): NFTData
```

#### Parameters

##### value

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

Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly).

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

###### id

`UInt32` = `UInt32`

The unique identifier of the NFT within the collection.

###### isPaused

`Bool` = `Bool`

Indicates whether the NFT contract is currently paused.

###### price

`UInt64` = `UInt64`

The price of the NFT.

###### requireOwnerSignatureToUpgrade

`Bool` = `Bool`

Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly).

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`NFTData`](nftsrcclassnftdata)

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### canChangeMetadata

```ts
canChangeMetadata: Bool = Bool;
```

Indicates whether the NFT's metadata can be updated (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeMetadata`

#### Defined in

[packages/nft/src/contracts/types.ts:305](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L305)

***

### canChangeMetadataVerificationKeyHash

```ts
canChangeMetadataVerificationKeyHash: Bool = Bool;
```

Indicates whether the verification key hash for the metadata can be changed (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeMetadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/types.ts:313](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L313)

***

### canChangeName

```ts
canChangeName: Bool = Bool;
```

Specifies if the name of the NFT can be changed (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeName`

#### Defined in

[packages/nft/src/contracts/types.ts:311](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L311)

***

### canChangeOwnerByProof

```ts
canChangeOwnerByProof: Bool = Bool;
```

Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeOwnerByProof`

#### Defined in

[packages/nft/src/contracts/types.ts:301](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L301)

***

### canChangeOwnerBySignature

```ts
canChangeOwnerBySignature: Bool = Bool;
```

Specifies if the NFT's ownership can be transferred through the owner's signature (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeOwnerBySignature`

#### Defined in

[packages/nft/src/contracts/types.ts:303](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L303)

***

### canChangePrice

```ts
canChangePrice: Bool = Bool;
```

Indicates if the price of the NFT can be modified (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangePrice`

#### Defined in

[packages/nft/src/contracts/types.ts:307](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L307)

***

### canChangeStorage

```ts
canChangeStorage: Bool = Bool;
```

Determines whether the storage associated with the NFT can be altered (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canChangeStorage`

#### Defined in

[packages/nft/src/contracts/types.ts:309](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L309)

***

### canPause

```ts
canPause: Bool = Bool;
```

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).canPause`

#### Defined in

[packages/nft/src/contracts/types.ts:315](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L315)

***

### id

```ts
id: UInt32 = UInt32;
```

The unique identifier of the NFT within the collection.

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).id`

#### Defined in

[packages/nft/src/contracts/types.ts:299](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L299)

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the NFT contract is currently paused.

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).isPaused`

#### Defined in

[packages/nft/src/contracts/types.ts:317](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L317)

***

### price

```ts
price: UInt64 = UInt64;
```

The price of the NFT.

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).price`

#### Defined in

[packages/nft/src/contracts/types.ts:295](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L295)

***

### requireOwnerSignatureToUpgrade

```ts
requireOwnerSignatureToUpgrade: Bool = Bool;
```

Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly).

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).requireOwnerSignatureToUpgrade`

#### Defined in

[packages/nft/src/contracts/types.ts:319](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L319)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state.

#### Inherited from

`Struct({
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** The unique identifier of the NFT within the collection. */
  id: UInt32,
  /** Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). */
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
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** Determines whether the owner's signature is required to upgrade the NFT's verification key (readonly). */
  requireOwnerSignatureToUpgrade: Bool, // readonly
}).version`

#### Defined in

[packages/nft/src/contracts/types.ts:297](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L297)

## Methods

### pack()

```ts
pack(): Field
```

Packs the NFTData into a single Field for efficient storage.

#### Returns

`Field`

The packed Field representation of the NFTData.

#### Defined in

[packages/nft/src/contracts/types.ts:383](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L383)

***

### new()

```ts
static new(params: {
  canChangeMetadata: boolean;
  canChangeMetadataVerificationKeyHash: boolean;
  canChangeName: boolean;
  canChangeOwnerByProof: boolean;
  canChangeOwnerBySignature: boolean;
  canChangePrice: boolean;
  canChangeStorage: boolean;
  canPause: boolean;
  id: number;
  isPaused: boolean;
  price: number;
  requireOwnerSignatureToUpgrade: boolean;
  version: number;
 }): NFTData
```

Creates a new NFTData instance with optional parameters.

#### Parameters

##### params

The parameters to create the NFTData.

###### canChangeMetadata

`boolean`

###### canChangeMetadataVerificationKeyHash

`boolean`

###### canChangeName

`boolean`

###### canChangeOwnerByProof

`boolean`

###### canChangeOwnerBySignature

`boolean`

###### canChangePrice

`boolean`

###### canChangeStorage

`boolean`

###### canPause

`boolean`

###### id

`number`

###### isPaused

`boolean`

###### price

`number`

###### requireOwnerSignatureToUpgrade

`boolean`

###### version

`number`

#### Returns

[`NFTData`](nftsrcclassnftdata)

A new NFTData instance.

#### Defined in

[packages/nft/src/contracts/types.ts:326](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L326)

***

### unpack()

```ts
static unpack(packed: Field): NFTData
```

Unpacks a Field into an NFTData instance.

#### Parameters

##### packed

`Field`

The packed Field representation of the NFTData.

#### Returns

[`NFTData`](nftsrcclassnftdata)

A new NFTData instance.

#### Defined in

[packages/nft/src/contracts/types.ts:409](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L409)
