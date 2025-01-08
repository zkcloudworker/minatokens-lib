---
title: NFTData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTData
order: 205
---

# Class: NFTData

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- canApprove:  Bool = Bool; [↗](#canapprove)
- canChangeMetadata:  Bool = Bool; [↗](#canchangemetadata)
- canChangeMetadataVerificationKeyHash:  Bool = Bool; [↗](#canchangemetadataverificationkeyhash)
- canChangeName:  Bool = Bool; [↗](#canchangename)
- canChangeOwnerByProof:  Bool = Bool; [↗](#canchangeownerbyproof)
- canChangeStorage:  Bool = Bool; [↗](#canchangestorage)
- canPause:  Bool = Bool; [↗](#canpause)
- canTransfer:  Bool = Bool; [↗](#cantransfer)
- id:  UInt64 = UInt64; [↗](#id)
- isPaused:  Bool = Bool; [↗](#ispaused)
- owner:  PublicKey = PublicKey; [↗](#owner)
- requireOwnerAuthorizationToUpgrade:  Bool = Bool; [↗](#requireownerauthorizationtoupgrade)
- version:  UInt32 = UInt32; [↗](#version)

## Methods overview

- pack() [↗](#pack)
- new() [↗](#new)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/interfaces/types.ts:279](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L279)

Represents the data associated with an NFT, including state and permission flags.

## Extends

- \{
  `approved`: `PublicKey`;
  `canApprove`: `Bool`;
  `canChangeMetadata`: `Bool`;
  `canChangeMetadataVerificationKeyHash`: `Bool`;
  `canChangeName`: `Bool`;
  `canChangeOwnerByProof`: `Bool`;
  `canChangeStorage`: `Bool`;
  `canPause`: `Bool`;
  `canTransfer`: `Bool`;
  `id`: `UInt64`;
  `isPaused`: `Bool`;
  `owner`: `PublicKey`;
  `requireOwnerAuthorizationToUpgrade`: `Bool`;
  `version`: `UInt32`;
 \}

## Constructors

### new NFTData()

```ts
new NFTData(value: {
  approved: PublicKey;
  canApprove: Bool;
  canChangeMetadata: Bool;
  canChangeMetadataVerificationKeyHash: Bool;
  canChangeName: Bool;
  canChangeOwnerByProof: Bool;
  canChangeStorage: Bool;
  canPause: Bool;
  canTransfer: Bool;
  id: UInt64;
  isPaused: Bool;
  owner: PublicKey;
  requireOwnerAuthorizationToUpgrade: Bool;
  version: UInt32;
 }): NFTData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approved

`PublicKey` = `PublicKey`

The approved address of the NFT.

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

Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly).

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

The unique identifier of the NFT within the collection.

###### isPaused

`Bool` = `Bool`

Indicates whether the NFT contract is currently paused.

###### owner

`PublicKey` = `PublicKey`

The owner of the NFT.

###### requireOwnerAuthorizationToUpgrade

`Bool` = `Bool`

Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly).

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`NFTData`](nftsrcclassnftdata)

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:283](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L283)

The approved address of the NFT.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).approved
```

***

### canApprove

```ts
canApprove: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:293](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L293)

Specifies if the NFT's approved address can be changed (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canApprove
```

***

### canChangeMetadata

```ts
canChangeMetadata: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:295](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L295)

Indicates whether the NFT's metadata can be updated (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canChangeMetadata
```

***

### canChangeMetadataVerificationKeyHash

```ts
canChangeMetadataVerificationKeyHash: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:301](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L301)

Indicates whether the verification key hash for the metadata can be changed (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canChangeMetadataVerificationKeyHash
```

***

### canChangeName

```ts
canChangeName: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:299](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L299)

Specifies if the name of the NFT can be changed (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canChangeName
```

***

### canChangeOwnerByProof

```ts
canChangeOwnerByProof: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:289](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L289)

Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canChangeOwnerByProof
```

***

### canChangeStorage

```ts
canChangeStorage: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:297](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L297)

Determines whether the storage associated with the NFT can be altered (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canChangeStorage
```

***

### canPause

```ts
canPause: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:303](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L303)

Specifies if the NFT contract can be paused, preventing certain operations (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canPause
```

***

### canTransfer

```ts
canTransfer: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:291](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L291)

Specifies if the NFT's ownership can be transferred (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).canTransfer
```

***

### id

```ts
id: UInt64 = UInt64;
```

Defined in: [packages/nft/src/interfaces/types.ts:287](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L287)

The unique identifier of the NFT within the collection.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).id
```

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:305](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L305)

Indicates whether the NFT contract is currently paused.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).isPaused
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:281](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L281)

The owner of the NFT.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).owner
```

***

### requireOwnerAuthorizationToUpgrade

```ts
requireOwnerAuthorizationToUpgrade: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:307](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L307)

Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly).

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).requireOwnerAuthorizationToUpgrade
```

***

### version

```ts
version: UInt32 = UInt32;
```

Defined in: [packages/nft/src/interfaces/types.ts:285](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L285)

The version number of the NFT state.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / The unique identifier of the NFT within the collection. /
  id: UInt64,
  / Determines whether the NFT's ownership can be changed via a zero-knowledge proof (readonly). /
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
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / Determines whether the owner's authorization is required to upgrade the NFT's verification key (readonly). /
  requireOwnerAuthorizationToUpgrade: Bool, // readonly
}).version
```

## Methods

### pack()

```ts
pack(): NFTDataPacked
```

Defined in: [packages/nft/src/interfaces/types.ts:376](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L376)

Packs the NFTData into a single Field for efficient storage.

#### Returns

[`NFTDataPacked`](nftsrcclassnftdatapacked)

The packed Field representation of the NFTData.

***

### new()

```ts
static new(params: {
  approved: string | PublicKey;
  canApprove: boolean;
  canChangeMetadata: boolean;
  canChangeMetadataVerificationKeyHash: boolean;
  canChangeName: boolean;
  canChangeOwnerByProof: boolean;
  canChangeStorage: boolean;
  canPause: boolean;
  canTransfer: boolean;
  id: bigint;
  isPaused: boolean;
  owner: string | PublicKey;
  requireOwnerAuthorizationToUpgrade: boolean;
  version: number;
 }): NFTData
```

Defined in: [packages/nft/src/interfaces/types.ts:314](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L314)

Creates a new NFTData instance with optional parameters.

#### Parameters

##### params

The parameters to create the NFTData.

###### approved

`string` \| `PublicKey`

###### canApprove

`boolean`

###### canChangeMetadata

`boolean`

###### canChangeMetadataVerificationKeyHash

`boolean`

###### canChangeName

`boolean`

###### canChangeOwnerByProof

`boolean`

###### canChangeStorage

`boolean`

###### canPause

`boolean`

###### canTransfer

`boolean`

###### id

`bigint`

###### isPaused

`boolean`

###### owner

`string` \| `PublicKey`

###### requireOwnerAuthorizationToUpgrade

`boolean`

###### version

`number`

#### Returns

[`NFTData`](nftsrcclassnftdata)

A new NFTData instance.

***

### unpack()

```ts
static unpack(packed: NFTDataPacked): NFTData
```

Defined in: [packages/nft/src/interfaces/types.ts:406](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L406)

Unpacks a Field into an NFTData instance.

#### Parameters

##### packed

[`NFTDataPacked`](nftsrcclassnftdatapacked)

The packed Field representation of the NFTData.

#### Returns

[`NFTData`](nftsrcclassnftdata)

A new NFTData instance.
