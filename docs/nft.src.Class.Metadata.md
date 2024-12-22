---
title: Metadata
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Metadata
order: 178
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

#### Defined in

[packages/nft/src/metadata/metadata.ts:283](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L283)

## Properties

### banner?

```ts
optional banner: string;
```

Optional banner image for the NFT.

#### Defined in

[packages/nft/src/metadata/metadata.ts:259](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L259)

***

### description?

```ts
optional description: string;
```

Optional description of the NFT.

#### Defined in

[packages/nft/src/metadata/metadata.ts:263](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L263)

***

### image

```ts
image: string;
```

The image associated with the NFT.

#### Defined in

[packages/nft/src/metadata/metadata.ts:255](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L255)

***

### map

```ts
readonly map: MetadataMap;
```

The underlying map storing the metadata key-value pairs.

#### Defined in

[packages/nft/src/metadata/metadata.ts:247](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L247)

***

### name

```ts
readonly name: string;
```

The name of the NFT.

#### Defined in

[packages/nft/src/metadata/metadata.ts:251](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L251)

***

### plugins

```ts
plugins: MetadataPlugin[];
```

Array of metadata plugins used for custom traits.

#### Defined in

[packages/nft/src/metadata/metadata.ts:267](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L267)

***

### traits

```ts
traits: {} = {};
```

Object containing the traits of the NFT.

#### Index Signature

 \[`key`: `string`\]: \{
  `isPrivate`: `boolean`;
  `type`: `string`;
  `value`: `unknown`;
 \}

#### Defined in

[packages/nft/src/metadata/metadata.ts:271](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L271)

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

#### Defined in

[packages/nft/src/metadata/metadata.ts:328](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L328)

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

#### Defined in

[packages/nft/src/metadata/metadata.ts:397](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L397)

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

#### Defined in

[packages/nft/src/metadata/metadata.ts:466](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L466)
