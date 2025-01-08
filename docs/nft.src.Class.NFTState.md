---
title: NFTState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTState
order: 213
---

# Class: NFTState

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- context:  NFTTransactionContext = NFTTransactionContext; [↗](#context)
- creator:  PublicKey = PublicKey; [↗](#creator)
- immutableState:  NFTImmutableState = NFTImmutableState; [↗](#immutablestate)
- isPaused:  Bool = Bool; [↗](#ispaused)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- oracleAddress:  PublicKey = PublicKey; [↗](#oracleaddress)
- owner:  PublicKey = PublicKey; [↗](#owner)
- storage:  Storage = Storage; [↗](#storage)
- version:  UInt32 = UInt32; [↗](#version)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromNFTState() [↗](#fromnftstate)

Defined in: [packages/nft/src/interfaces/types.ts:182](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L182)

Represents the full state of an NFT, including both immutable and mutable properties.

## Extends

- \{
  `approved`: `PublicKey`;
  `context`: [`NFTTransactionContext`](nftsrcclassnfttransactioncontext);
  `creator`: `PublicKey`;
  `immutableState`: [`NFTImmutableState`](nftsrcclassnftimmutablestate);
  `isPaused`: `Bool`;
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `oracleAddress`: `PublicKey`;
  `owner`: `PublicKey`;
  `storage`: `Storage`;
  `version`: `UInt32`;
 \}

## Constructors

### new NFTState()

```ts
new NFTState(value: {
  approved: PublicKey;
  context: NFTTransactionContext;
  creator: PublicKey;
  immutableState: NFTImmutableState;
  isPaused: Bool;
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  oracleAddress: PublicKey;
  owner: PublicKey;
  storage: Storage;
  version: UInt32;
 }): NFTState
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approved

`PublicKey` = `PublicKey`

The approved address of the NFT.

###### context

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext) = `NFTTransactionContext`

The transaction context of the NFT.

###### creator

`PublicKey` = `PublicKey`

The public key of the creator of the NFT (readonly).

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

###### oracleAddress

`PublicKey` = `PublicKey`

The oracle address to link the NFT update with the network and accounts state

###### owner

`PublicKey` = `PublicKey`

The owner of the NFT.

###### storage

`Storage` = `Storage`

The off-chain storage information (e.g., IPFS hash).

###### version

`UInt32` = `UInt32`

The version number of the NFT state.

#### Returns

[`NFTState`](nftsrcclassnftstate)

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:190](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L190)

The approved address of the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).approved
```

***

### context

```ts
context: NFTTransactionContext = NFTTransactionContext;
```

Defined in: [packages/nft/src/interfaces/types.ts:205](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L205)

The transaction context of the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).context
```

***

### creator

```ts
creator: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:203](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L203)

The public key of the creator of the NFT (readonly).

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).creator
```

***

### immutableState

```ts
immutableState: NFTImmutableState = NFTImmutableState;
```

Defined in: [packages/nft/src/interfaces/types.ts:184](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L184)

The immutable state of the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).immutableState
```

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:198](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L198)

Indicates whether the NFT contract is currently paused.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).isPaused
```

***

### metadata

```ts
metadata: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:192](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L192)

The metadata associated with the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).metadata
```

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:200](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L200)

The hash of the verification key used for metadata proofs.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).metadataVerificationKeyHash
```

***

### name

```ts
name: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:186](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L186)

The name of the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).name
```

***

### oracleAddress

```ts
oracleAddress: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:207](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L207)

The oracle address to link the NFT update with the network and accounts state

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).oracleAddress
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:188](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L188)

The owner of the NFT.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).owner
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/nft/src/interfaces/types.ts:194](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L194)

The off-chain storage information (e.g., IPFS hash).

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).storage
```

***

### version

```ts
version: UInt32 = UInt32;
```

Defined in: [packages/nft/src/interfaces/types.ts:196](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L196)

The version number of the NFT state.

#### Inherited from

```ts
Struct({
  / The immutable state of the NFT. /
  immutableState: NFTImmutableState,
  / The name of the NFT. /
  name: Field,
  / The owner of the NFT. /
  owner: PublicKey,
  / The approved address of the NFT. /
  approved: PublicKey,
  / The metadata associated with the NFT. /
  metadata: Field,
  / The off-chain storage information (e.g., IPFS hash). /
  storage: Storage,
  / The version number of the NFT state. /
  version: UInt32,
  / Indicates whether the NFT contract is currently paused. /
  isPaused: Bool,
  / The hash of the verification key used for metadata proofs. /
  metadataVerificationKeyHash: Field,

  / The public key of the creator of the NFT (readonly). /
  creator: PublicKey, // readonly
  / The transaction context of the NFT. /
  context: NFTTransactionContext, // readonly
  / The oracle address to link the NFT update with the network and accounts state /
  oracleAddress: PublicKey, // readonly
}).version
```

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTState, b: NFTState): void
```

Defined in: [packages/nft/src/interfaces/types.ts:214](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L214)

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

***

### fromNFTState()

```ts
static fromNFTState(params: {
  address: PublicKey;
  context: NFTTransactionContext;
  creator: PublicKey;
  nftState: NFTStateStruct;
  oracleAddress: PublicKey;
  tokenId: Field;
 }): NFTState
```

Defined in: [packages/nft/src/interfaces/types.ts:233](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L233)

Creates a new NFTState from an NFTStateStruct and other parameters.

#### Parameters

##### params

The parameters including nftState, creator, address, and tokenId.

###### address

`PublicKey`

###### context

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext)

###### creator

`PublicKey`

###### nftState

[`NFTStateStruct`](nftsrcclassnftstatestruct)

###### oracleAddress

`PublicKey`

###### tokenId

`Field`

#### Returns

[`NFTState`](nftsrcclassnftstate)

A new NFTState instance.
