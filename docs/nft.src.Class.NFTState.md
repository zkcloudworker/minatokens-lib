---
title: NFTState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTState
order: 190
---

# Class: NFTState

## Properties overview

- immutableState:  NFTImmutableState = NFTImmutableState; [↗](#immutablestate)
- isPaused:  Bool = Bool; [↗](#ispaused)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- price:  UInt64 = UInt64; [↗](#price)
- storage:  Storage = Storage; [↗](#storage)
- version:  UInt32 = UInt32; [↗](#version)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromNFTState() [↗](#fromnftstate)

Represents the full state of an NFT, including both immutable and mutable properties.

## Extends

- \{
  `immutableState`: [`NFTImmutableState`](nftsrcclassnftimmutablestate);
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

### new NFTState()

```ts
new NFTState(value: {
  immutableState: NFTImmutableState;
  isPaused: Bool;
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  price: UInt64;
  storage: Storage;
  version: UInt32;
 }): NFTState
```

#### Parameters

##### value

###### immutableState

[`NFTImmutableState`](nftsrcclassnftimmutablestate) = `NFTImmutableState`

The immutable state of the NFT.

###### isPaused

`Bool` = `Bool`

Indicates whether the NFT contract is currently paused.

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

The current owner of the NFT.

###### price

`UInt64` = `UInt64`

The price of the NFT.

###### storage

`Storage` = `Storage`

The off-chain storage information (e.g., IPFS hash).

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`NFTState`](nftsrcclassnftstate)

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### immutableState

```ts
immutableState: NFTImmutableState = NFTImmutableState;
```

The immutable state of the NFT.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).immutableState`

#### Defined in

[packages/nft/src/contracts/types.ts:212](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L212)

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the NFT contract is currently paused.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).isPaused`

#### Defined in

[packages/nft/src/contracts/types.ts:226](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L226)

***

### metadata

```ts
metadata: Field = Field;
```

The metadata associated with the NFT.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).metadata`

#### Defined in

[packages/nft/src/contracts/types.ts:216](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L216)

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

The hash of the verification key used for metadata proofs.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).metadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/types.ts:228](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L228)

***

### name

```ts
name: Field = Field;
```

The name of the NFT.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).name`

#### Defined in

[packages/nft/src/contracts/types.ts:214](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L214)

***

### owner

```ts
owner: PublicKey = PublicKey;
```

The current owner of the NFT.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).owner`

#### Defined in

[packages/nft/src/contracts/types.ts:220](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L220)

***

### price

```ts
price: UInt64 = UInt64;
```

The price of the NFT.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).price`

#### Defined in

[packages/nft/src/contracts/types.ts:222](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L222)

***

### storage

```ts
storage: Storage = Storage;
```

The off-chain storage information (e.g., IPFS hash).

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).storage`

#### Defined in

[packages/nft/src/contracts/types.ts:218](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L218)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state.

#### Inherited from

`Struct({
  /** The immutable state of the NFT. */
  immutableState: NFTImmutableState,
  /** The name of the NFT. */
  name: Field,
  /** The metadata associated with the NFT. */
  metadata: Field,
  /** The off-chain storage information (e.g., IPFS hash). */
  storage: Storage,
  /** The current owner of the NFT. */
  owner: PublicKey,
  /** The price of the NFT. */
  price: UInt64,
  /** The version number of the NFT state. */
  version: UInt32,
  /** Indicates whether the NFT contract is currently paused. */
  isPaused: Bool,
  /** The hash of the verification key used for metadata proofs. */
  metadataVerificationKeyHash: Field,
}).version`

#### Defined in

[packages/nft/src/contracts/types.ts:224](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L224)

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTState, b: NFTState): void
```

Asserts that two NFTState instances are equal.

#### Parameters

##### a

[`NFTState`](nftsrcclassnftstate)

The first NFTState instance.

##### b

[`NFTState`](nftsrcclassnftstate)

The second NFTState instance.

#### Returns

`void`

#### Defined in

[packages/nft/src/contracts/types.ts:235](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L235)

***

### fromNFTState()

```ts
static fromNFTState(params: {
  address: PublicKey;
  creator: PublicKey;
  nftState: NFTStateStruct;
  tokenId: Field;
 }): NFTState
```

Creates a new NFTState from an NFTStateStruct and other parameters.

#### Parameters

##### params

The parameters including nftState, creator, address, and tokenId.

###### address

`PublicKey`

###### creator

`PublicKey`

###### nftState

[`NFTStateStruct`](nftsrcclassnftstatestruct)

###### tokenId

`Field`

#### Returns

[`NFTState`](nftsrcclassnftstate)

A new NFTState instance.

#### Defined in

[packages/nft/src/contracts/types.ts:252](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L252)
