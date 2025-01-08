---
title: NFTStateStruct
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTStateStruct
order: 214
---

# Class: NFTStateStruct

## Properties overview

- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- packedData:  NFTDataPacked = NFTDataPacked; [↗](#packeddata)
- storage:  Storage = Storage; [↗](#storage)
- Returns: {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  packedData: NFTDataPacked;
  storage: Storage;
} [↗](#returns)
- metadata:  Field = Field; [↗](#metadata)
- metadataVerificationKeyHash:  Field = Field; [↗](#metadataverificationkeyhash)
- name:  Field = Field; [↗](#name)
- packedData:  NFTDataPacked = NFTDataPacked; [↗](#packeddata)
- storage:  Storage = Storage; [↗](#storage)

## Methods overview

- assertEqual() [↗](#assertequal)
- fromAccount() [↗](#fromaccount)

Defined in: [packages/nft/src/interfaces/types.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L51)

Represents the on-chain state structure of an NFT.
The order of the fields is important and should match the NFT SmartContract.

## Extends

- \{
  `metadata`: `Field`;
  `metadataVerificationKeyHash`: `Field`;
  `name`: `Field`;
  `packedData`: [`NFTDataPacked`](nftsrcclassnftdatapacked);
  `storage`: `Storage`;
 \}

## Constructors

### new NFTStateStruct()

```ts
new NFTStateStruct(value: {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  packedData: NFTDataPacked;
  storage: Storage;
 }): NFTStateStruct
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### metadata

`Field` = `Field`

###### metadataVerificationKeyHash

`Field` = `Field`

###### name

`Field` = `Field`

###### packedData

[`NFTDataPacked`](nftsrcclassnftdatapacked) = `NFTDataPacked`

###### storage

`Storage` = `Storage`

#### Returns

[`NFTStateStruct`](nftsrcclassnftstatestruct)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).constructor
```

## Properties

### metadata

```ts
metadata: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L53)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).metadata
```

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L56)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).metadataVerificationKeyHash
```

***

### name

```ts
name: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L52)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).name
```

***

### packedData

```ts
packedData: NFTDataPacked = NFTDataPacked;
```

Defined in: [packages/nft/src/interfaces/types.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L55)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).packedData
```

***

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/nft/src/interfaces/types.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L54)

#### Inherited from

```ts
Struct({
  name: Field,
  metadata: Field,
  storage: Storage,
  packedData: NFTDataPacked,
  metadataVerificationKeyHash: Field,
}).storage
```

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTStateStruct, b: NFTStateStruct): void
```

Defined in: [packages/nft/src/interfaces/types.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L78)

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

***

### fromAccount()

```ts
static fromAccount(account: Account): {
  metadata: Field;
  metadataVerificationKeyHash: Field;
  name: Field;
  packedData: NFTDataPacked;
  storage: Storage;
}
```

Defined in: [packages/nft/src/interfaces/types.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L63)

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
  packedData: NFTDataPacked;
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

##### packedData

```ts
packedData: NFTDataPacked = NFTDataPacked;
```

##### storage

```ts
storage: Storage = Storage;
```
