---
title: NFTStateStruct
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTStateStruct
order: 191
---

# Class: NFTStateStruct

## Properties overview

- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- packedData:  Field = Field; [↗](#packeddata)
- storage:  Storage = Storage; [↗](#storage)
- Returns: {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  packedData: Field;
  storage: Storage;
} [↗](#returns)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- owner:  PublicKey = PublicKey; [↗](#owner)
- packedData:  Field = Field; [↗](#packeddata)
- storage:  Storage = Storage; [↗](#storage)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromAccount() [↗](#fromaccount)

Represents the on-chain state structure of an NFT.
The order of the fields is important and should match the NFT SmartContract.

## Extends

- \{
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `owner`: `PublicKey`;
  `packedData`: `Field`;
  `storage`: `Storage`;
 \}

## Constructors

### new NFTStateStruct()

```ts
new NFTStateStruct(value: {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  packedData: Field;
  storage: Storage;
 }): NFTStateStruct
```

#### Parameters

##### value

###### metadata

`Field` = `Field`

###### metadataVerificationKeyHash

`Field` = `Field`

###### name

`Field` = `Field`

###### owner

`PublicKey` = `PublicKey`

###### packedData

`Field` = `Field`

###### storage

`Storage` = `Storage`

#### Returns

[`NFTStateStruct`](nftsrcclassnftstatestruct)

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### metadata

```ts
metadata: Field = Field;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).metadata`

#### Defined in

[packages/nft/src/contracts/types.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L89)

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).metadataVerificationKeyHash`

#### Defined in

[packages/nft/src/contracts/types.ts:93](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L93)

***

### name

```ts
name: Field = Field;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).name`

#### Defined in

[packages/nft/src/contracts/types.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L88)

***

### owner

```ts
owner: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).owner`

#### Defined in

[packages/nft/src/contracts/types.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L90)

***

### packedData

```ts
packedData: Field = Field;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).packedData`

#### Defined in

[packages/nft/src/contracts/types.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L92)

***

### storage

```ts
storage: Storage = Storage;
```

#### Inherited from

`Struct({
  name: Field,
  metadata: Field,
  owner: PublicKey,
  storage: Storage,
  packedData: Field,
  metadataVerificationKeyHash: Field,
}).storage`

#### Defined in

[packages/nft/src/contracts/types.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L91)

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTStateStruct, b: NFTStateStruct): void
```

Asserts that two NFTStateStruct instances are equal.

#### Parameters

##### a

[`NFTStateStruct`](nftsrcclassnftstatestruct)

The first NFTStateStruct instance.

##### b

[`NFTStateStruct`](nftsrcclassnftstatestruct)

The second NFTStateStruct instance.

#### Returns

`void`

#### Defined in

[packages/nft/src/contracts/types.ts:115](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L115)

***

### fromAccount()

```ts
static fromAccount(account: Account): {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  packedData: Field;
  storage: Storage;
}
```

Creates an NFTStateStruct from an account's app state.

#### Parameters

##### account

`Account`

The account containing the zkApp state.

#### Returns

```ts
{
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  owner: PublicKey;
  packedData: Field;
  storage: Storage;
}
```

A new NFTStateStruct instance.

##### metadata

```ts
metadata: Field = Field;
```

##### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

##### name

```ts
name: Field = Field;
```

##### owner

```ts
owner: PublicKey = PublicKey;
```

##### packedData

```ts
packedData: Field = Field;
```

##### storage

```ts
storage: Storage = Storage;
```

#### Defined in

[packages/nft/src/contracts/types.ts:100](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L100)
