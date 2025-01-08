---
title: Metadata
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Metadata
order: 194
---

# Class: Metadata

## Properties overview

- image:  string; [↗](#image)
- map: readonly map: MetadataMap; [↗](#map)
- name: readonly name: string; [↗](#name)
- plugins:  MetadataPlugin[]; [↗](#plugins)
- traits:  {} = {}; [↗](#traits)
- Returns: {
  key: Field;
  value: MetadataValue;
} [↗](#returns)
- key:  Field; [↗](#key)
- value:  MetadataValue; [↗](#value)
- Returns: {
  banner: string;
  description: string;
  image: string;
  metadataRoot: string;
  name: string;
  traits: {
     isPrivate: boolean;
     key: string;
     type: string;
     value: string | object;
    }[];
} [↗](#returns)
- image:  string; [↗](#image)
- metadataRoot:  string; [↗](#metadataroot)
- name:  string; [↗](#name)
- traits:  {
  isPrivate: boolean;
  key: string;
  type: string;
  value: string | object;
 }[]; [↗](#traits)

## Methods overview

- addTrait() [↗](#addtrait)
- toJSON() [↗](#tojson)
- fromJSON() [↗](#fromjson)

Defined in: [packages/nft/src/metadata/metadata.ts:243](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L243)

Represents the metadata for an NFT, including traits and associated data.

## Constructors

### new Metadata()

```ts
new Metadata(params: {
  banner: string;
  description: string;
  image: string;
  name: string;
  plugins: MetadataPlugin[];
 }): Metadata
```

Defined in: [packages/nft/src/metadata/metadata.ts:283](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L283)

Creates a new Metadata instance.

#### Parameters

##### params

The parameters for the metadata, including name, image, description, banner, and plugins.

###### banner

`string`

###### description

`string`

###### image

`string`

###### name

`string`

###### plugins

`MetadataPlugin`[]

#### Returns

[`Metadata`](nftsrcclassmetadata)

## Properties

### banner?

```ts
optional banner: string;
```

Defined in: [packages/nft/src/metadata/metadata.ts:259](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L259)

Optional banner image for the NFT.

***

### description?

```ts
optional description: string;
```

Defined in: [packages/nft/src/metadata/metadata.ts:263](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L263)

Optional description of the NFT.

***

### image

```ts
image: string;
```

Defined in: [packages/nft/src/metadata/metadata.ts:255](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L255)

The image associated with the NFT.

***

### map

```ts
readonly map: MetadataMap;
```

Defined in: [packages/nft/src/metadata/metadata.ts:247](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L247)

The underlying map storing the metadata key-value pairs.

***

### name

```ts
readonly name: string;
```

Defined in: [packages/nft/src/metadata/metadata.ts:251](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L251)

The name of the NFT.

***

### plugins

```ts
plugins: MetadataPlugin[];
```

Defined in: [packages/nft/src/metadata/metadata.ts:267](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L267)

Array of metadata plugins used for custom traits.

***

### traits

```ts
traits: {} = {};
```

Defined in: [packages/nft/src/metadata/metadata.ts:271](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L271)

Object containing the traits of the NFT.

#### Index Signature

```ts
[key: string]: {
  isPrivate: boolean;
  type: string;
  value: unknown;
}
```

## Methods

### addTrait()

```ts
addTrait(params: {
  isPrivate: boolean;
  key: string;
  type: string;
  value: unknown;
 }): {
  key: Field;
  value: MetadataValue;
}
```

Defined in: [packages/nft/src/metadata/metadata.ts:328](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L328)

Adds a trait to the metadata.

#### Parameters

##### params

The parameters including key, type, value, and isPrivate.

###### isPrivate

`boolean`

###### key

`string`

###### type

`string`

###### value

`unknown`

#### Returns

```ts
{
  key: Field;
  value: MetadataValue;
}
```

An object containing the key and the metadata value.

##### key

```ts
key: Field;
```

##### value

```ts
value: MetadataValue;
```

***

### toJSON()

```ts
toJSON(includePrivateTraits: boolean): {
  banner: string;
  description: string;
  image: string;
  metadataRoot: string;
  name: string;
  traits: {
     isPrivate: boolean;
     key: string;
     type: string;
     value: string | object;
    }[];
}
```

Defined in: [packages/nft/src/metadata/metadata.ts:397](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L397)

Converts the metadata to a JSON representation.

#### Parameters

##### includePrivateTraits

`boolean` = `false`

Whether to include private traits.

#### Returns

```ts
{
  banner: string;
  description: string;
  image: string;
  metadataRoot: string;
  name: string;
  traits: {
     isPrivate: boolean;
     key: string;
     type: string;
     value: string | object;
    }[];
}
```

The JSON representation of the metadata.

##### banner?

```ts
optional banner: string;
```

##### description?

```ts
optional description: string;
```

##### image

```ts
image: string;
```

##### metadataRoot

```ts
metadataRoot: string;
```

##### name

```ts
name: string;
```

##### traits

```ts
traits: {
  isPrivate: boolean;
  key: string;
  type: string;
  value: string | object;
 }[];
```

***

### fromJSON()

```ts
static fromJSON(params: {
  checkRoot: boolean;
  json: {
     banner: string;
     description: string;
     image: string;
     metadataRoot: string;
     name: string;
     traits: {
        isPrivate: boolean;
        key: string;
        type: string;
        value: string | object;
       }[];
    };
  plugins: MetadataPlugin[];
 }): Metadata
```

Defined in: [packages/nft/src/metadata/metadata.ts:466](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L466)

Constructs a Metadata instance from JSON data.

#### Parameters

##### params

The parameters including json data, checkRoot flag, and plugins.

###### checkRoot

`boolean`

###### json

\{
  `banner`: `string`;
  `description`: `string`;
  `image`: `string`;
  `metadataRoot`: `string`;
  `name`: `string`;
  `traits`: \{
     `isPrivate`: `boolean`;
     `key`: `string`;
     `type`: `string`;
     `value`: `string` \| `object`;
    \}[];
 \}

###### json.banner

`string`

###### json.description

`string`

###### json.image

`string`

###### json.metadataRoot

`string`

###### json.name

`string`

###### json.traits

\{
  `isPrivate`: `boolean`;
  `key`: `string`;
  `type`: `string`;
  `value`: `string` \| `object`;
 \}[]

###### plugins

`MetadataPlugin`[]

#### Returns

[`Metadata`](nftsrcclassmetadata)

A new Metadata instance.
