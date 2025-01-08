---
title: UpdateEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.UpdateEvent
order: 226
---

# Class: UpdateEvent

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- isPaused:  Bool = Bool; [↗](#ispaused)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- storage:  Storage = Storage; [↗](#storage)
- version:  UInt32 = UInt32; [↗](#version)

Defined in: [packages/nft/src/interfaces/events.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L29)

Emitted when an NFT's state is updated.

## Extends

- \{
  `approved`: `PublicKey`;
  `isPaused`: `Bool`;
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `owner`: `PublicKey`;
  `storage`: `Storage`;
  `version`: `UInt32`;
 \}

## Constructors

### new UpdateEvent()

```ts
new UpdateEvent(value: {
  approved: PublicKey;
  isPaused: Bool;
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  storage: Storage;
  version: UInt32;
 }): UpdateEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approved

`PublicKey` = `PublicKey`

The approved address of the NFT after the update.

###### isPaused

`Bool` = `Bool`

Indicates whether the NFT is paused after the update.

###### metadata

`Field` = `Field`

The updated metadata hash of the NFT.

###### metadataVerificationKeyHash

`Field` = `Field`

The hash of the verification key used for metadata proofs.

###### name

`Field` = `Field`

The updated name of the NFT.

###### owner

`PublicKey` = `PublicKey`

The owner of the NFT after the update.

###### storage

`Storage` = `Storage`

Off-chain storage information, e.g., IPFS hash.

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`UpdateEvent`](nftsrcclassupdateevent)

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:39](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L39)

The approved address of the NFT after the update.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).approved
```

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/events.ts:43](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L43)

Indicates whether the NFT is paused after the update.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).isPaused
```

***

### metadata

```ts
metadata: Field = Field;
```

Defined in: [packages/nft/src/interfaces/events.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L33)

The updated metadata hash of the NFT.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).metadata
```

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

Defined in: [packages/nft/src/interfaces/events.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L45)

The hash of the verification key used for metadata proofs.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).metadataVerificationKeyHash
```

***

### name

```ts
name: Field = Field;
```

Defined in: [packages/nft/src/interfaces/events.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L31)

The updated name of the NFT.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).name
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L37)

The owner of the NFT after the update.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).owner
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/nft/src/interfaces/events.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L35)

Off-chain storage information, e.g., IPFS hash.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).storage
```

***

### version

```ts
version: UInt32 = UInt32;
```

Defined in: [packages/nft/src/interfaces/events.ts:41](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L41)

The version number of the NFT state.

#### Inherited from

```ts
Struct({
  / The updated name of the NFT. /
  name: Field,
  / The updated metadata hash of the NFT. /
  metadata: Field,
  / Off-chain storage information, e.g., IPFS hash. /
  storage: Storage,
  / The owner of the NFT after the update. /
  owner: PublicKey,
  / The approved address of the NFT after the update. /
  approved: PublicKey,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT is paused after the update. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,
}).version
```
