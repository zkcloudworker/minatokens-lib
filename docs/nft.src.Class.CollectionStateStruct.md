---
title: CollectionStateStruct
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.CollectionStateStruct
order: 175
---

# Class: CollectionStateStruct

## Properties overview

- admin:  PublicKey = PublicKey; [↗](#admin)
- baseURL:  Field = Field; [↗](#baseurl)
- collectionName:  Field = Field; [↗](#collectionname)
- creator:  PublicKey = PublicKey; [↗](#creator)
- packedData:  CollectionDataPacked = CollectionDataPacked; [↗](#packeddata)

## Extends

- \{
  `admin`: `PublicKey`;
  `baseURL`: `Field`;
  `collectionName`: `Field`;
  `creator`: `PublicKey`;
  `packedData`: [`CollectionDataPacked`](nftsrcclasscollectiondatapacked);
 \}

## Constructors

### new CollectionStateStruct()

```ts
new CollectionStateStruct(value: {
  admin: PublicKey;
  baseURL: Field;
  collectionName: Field;
  creator: PublicKey;
  packedData: CollectionDataPacked;
 }): CollectionStateStruct
```

#### Parameters

##### value

###### admin

`PublicKey` = `PublicKey`

###### baseURL

`Field` = `Field`

###### collectionName

`Field` = `Field`

###### creator

`PublicKey` = `PublicKey`

###### packedData

[`CollectionDataPacked`](nftsrcclasscollectiondatapacked) = `CollectionDataPacked`

#### Returns

[`CollectionStateStruct`](nftsrcclasscollectionstatestruct)

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### admin

```ts
admin: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).admin`

#### Defined in

[packages/nft/src/contracts/collection.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L110)

***

### baseURL

```ts
baseURL: Field = Field;
```

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).baseURL`

#### Defined in

[packages/nft/src/contracts/collection.ts:111](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L111)

***

### collectionName

```ts
collectionName: Field = Field;
```

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).collectionName`

#### Defined in

[packages/nft/src/contracts/collection.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L108)

***

### creator

```ts
creator: PublicKey = PublicKey;
```

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).creator`

#### Defined in

[packages/nft/src/contracts/collection.ts:109](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L109)

***

### packedData

```ts
packedData: CollectionDataPacked = CollectionDataPacked;
```

#### Inherited from

`Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}).packedData`

#### Defined in

[packages/nft/src/contracts/collection.ts:112](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L112)
