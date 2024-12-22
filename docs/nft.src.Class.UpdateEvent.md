---
title: UpdateEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.UpdateEvent
order: 202
---

# Class: UpdateEvent

## Properties overview

- isPaused:  Bool = Bool; [↗](#ispaused)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- price:  UInt64 = UInt64; [↗](#price)
- storage:  Storage = Storage; [↗](#storage)
- version:  UInt32 = UInt32; [↗](#version)

Emitted when an NFT's state is updated.

## Extends

- \{
  `isPaused`: `Bool`;
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `owner`: `PublicKey`;
  `price`: `UInt64`;
  `storage`: `Storage`;
  `version`: `UInt32`;
 \}

## Constructors

### new UpdateEvent()

```ts
new UpdateEvent(value: {
  isPaused: Bool;
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  price: UInt64;
  storage: Storage;
  version: UInt32;
 }): UpdateEvent
```

#### Parameters

##### value

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

###### price

`UInt64` = `UInt64`

The updated price of the NFT.

###### storage

`Storage` = `Storage`

Off-chain storage information, e.g., IPFS hash.

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`UpdateEvent`](nftsrcclassupdateevent)

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the NFT is paused after the update.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).isPaused`

#### Defined in

[packages/nft/src/contracts/events.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L44)

***

### metadata

```ts
metadata: Field = Field;
```

The updated metadata hash of the NFT.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).metadata`

#### Defined in

[packages/nft/src/contracts/events.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L34)

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

The hash of the verification key used for metadata proofs.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).metadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/events.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L46)

***

### name

```ts
name: Field = Field;
```

The updated name of the NFT.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).name`

#### Defined in

[packages/nft/src/contracts/events.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L32)

***

### owner

```ts
owner: PublicKey = PublicKey;
```

The owner of the NFT after the update.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).owner`

#### Defined in

[packages/nft/src/contracts/events.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L38)

***

### price

```ts
price: UInt64 = UInt64;
```

The updated price of the NFT.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).price`

#### Defined in

[packages/nft/src/contracts/events.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L40)

***

### storage

```ts
storage: Storage = Storage;
```

Off-chain storage information, e.g., IPFS hash.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).storage`

#### Defined in

[packages/nft/src/contracts/events.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L36)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state.

#### Inherited from

`Struct({
  /** The updated name of the NFT. */
  name: Field,
  /** The updated metadata hash of the NFT. */
  metadata: Field,
  /** Off-chain storage information, e.g., IPFS hash. */
  storage: Storage,
  /** The owner of the NFT after the update. */
  owner: PublicKey,
  /** The updated price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT is paused after the update. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).version`

#### Defined in

[packages/nft/src/contracts/events.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L42)
