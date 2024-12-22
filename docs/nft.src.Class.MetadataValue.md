---
title: MetadataValue
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MetadataValue
order: 181
---

# Class: MetadataValue

## Properties overview

- height:  Field = Field; [↗](#height)
- length:  Field = Field; [↗](#length)
- type:  Field = Field; [↗](#type)
- value:  Field = Field; [↗](#value)

## Methods overview

- hash() [↗](#hash)
- new() [↗](#new)

Represents a metadata value with its type and associated data.

## Extends

- \{
  `height`: `Field`;
  `length`: `Field`;
  `type`: `Field`;
  `value`: `Field`;
 \}

## Constructors

### new MetadataValue()

```ts
new MetadataValue(value: {
  height: Field;
  length: Field;
  type: Field;
  value: Field;
 }): MetadataValue
```

#### Parameters

##### value

###### height

`Field` = `Field`

###### length

`Field` = `Field`

###### type

`Field` = `Field`

###### value

`Field` = `Field`

#### Returns

[`MetadataValue`](nftsrcclassmetadatavalue)

#### Inherited from

`Struct({
  value: Field,
  type: Field,
  length: Field,
  height: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### height

```ts
height: Field = Field;
```

#### Inherited from

`Struct({
  value: Field,
  type: Field,
  length: Field,
  height: Field,
}).height`

#### Defined in

[packages/nft/src/metadata/metadata.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L45)

***

### length

```ts
length: Field = Field;
```

#### Inherited from

`Struct({
  value: Field,
  type: Field,
  length: Field,
  height: Field,
}).length`

#### Defined in

[packages/nft/src/metadata/metadata.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L44)

***

### type

```ts
type: Field = Field;
```

#### Inherited from

`Struct({
  value: Field,
  type: Field,
  length: Field,
  height: Field,
}).type`

#### Defined in

[packages/nft/src/metadata/metadata.ts:43](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L43)

***

### value

```ts
value: Field = Field;
```

#### Inherited from

`Struct({
  value: Field,
  type: Field,
  length: Field,
  height: Field,
}).value`

#### Defined in

[packages/nft/src/metadata/metadata.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L42)

## Methods

### hash()

```ts
hash(): Field
```

Computes the Poseidon hash of the metadata value.

#### Returns

`Field`

The hash as a Field.

#### Defined in

[packages/nft/src/metadata/metadata.ts:105](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L105)

***

### new()

```ts
static new(params: {
  type: MetadataFieldType;
  value:   | Field
     | Text
     | MetadataTree
     | Metadata;
 }): MetadataValue
```

Creates a new MetadataValue instance.

#### Parameters

##### params

The parameters including value and type.

###### type

[`MetadataFieldType`](nftsrctypealiasmetadatafieldtype)

###### value

  \| `Field`
  \| [`Text`](nftsrcclasstext)
  \| [`MetadataTree`](nftsrcclassmetadatatree)
  \| [`Metadata`](nftsrcclassmetadata)

#### Returns

[`MetadataValue`](nftsrcclassmetadatavalue)

A new MetadataValue.

#### Defined in

[packages/nft/src/metadata/metadata.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L52)
