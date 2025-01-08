---
title: ColorPlugin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.ColorPlugin
order: 191
---

# Class: ColorPlugin

## Properties overview

- name: readonly name: "color" = "color"; [↗](#name)
- Overrides: MetadataPlugin.name [↗](#overrides)
- Overrides: MetadataPlugin.fromJSON [↗](#overrides)
- Returns: {
  canonicalRepresentation: number;
  key: Field;
  value: MetadataValue;
} [↗](#returns)
- canonicalRepresentation:  number; [↗](#canonicalrepresentation)
- key:  Field; [↗](#key)
- value:  MetadataValue; [↗](#value)
- Overrides: MetadataPlugin.getTrait [↗](#overrides)
- Overrides: MetadataPlugin.toJSON [↗](#overrides)

## Methods overview

- fromJSON() [↗](#fromjson)
- getColor() [↗](#getcolor)
- getTrait() [↗](#gettrait)
- toJSON() [↗](#tojson)

Defined in: [packages/nft/src/metadata/metadata.ts:154](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L154)

A plugin for handling color metadata.

## Extends

- `MetadataPlugin`

## Constructors

### new ColorPlugin()

```ts
new ColorPlugin(): ColorPlugin
```

#### Returns

[`ColorPlugin`](nftsrcclasscolorplugin)

#### Inherited from

```ts
MetadataPlugin.constructor
```

## Properties

### name

```ts
readonly name: "color" = "color";
```

Defined in: [packages/nft/src/metadata/metadata.ts:158](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L158)

The name of the plugin.

#### Overrides

```ts
MetadataPlugin.name
```

## Methods

### fromJSON()

```ts
fromJSON(value: string | object): number
```

Defined in: [packages/nft/src/metadata/metadata.ts:234](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L234)

Parses the color value from a JSON string or object.

#### Parameters

##### value

The JSON value.

`string` | `object`

#### Returns

`number`

The numeric representation of the color.

#### Overrides

```ts
MetadataPlugin.fromJSON
```

***

### getColor()

```ts
getColor(value: string | number): number
```

Defined in: [packages/nft/src/metadata/metadata.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L165)

Converts a color name or value into its numeric representation.

#### Parameters

##### value

The color value (name, string, or number).

`string` | `number`

#### Returns

`number`

The numeric representation of the color.

***

### getTrait()

```ts
getTrait(params: {
  key: string;
  type: string;
  value: string | number;
 }): {
  canonicalRepresentation: number;
  key: Field;
  value: MetadataValue;
}
```

Defined in: [packages/nft/src/metadata/metadata.ts:199](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L199)

Retrieves the trait representation of the color value.

#### Parameters

##### params

The parameters including key, type, and value.

###### key

`string`

###### type

`string`

###### value

`string` \| `number`

#### Returns

```ts
{
  canonicalRepresentation: number;
  key: Field;
  value: MetadataValue;
}
```

An object containing the key, value, and canonical representation.

##### canonicalRepresentation

```ts
canonicalRepresentation: number;
```

##### key

```ts
key: Field;
```

##### value

```ts
value: MetadataValue;
```

#### Overrides

```ts
MetadataPlugin.getTrait
```

***

### toJSON()

```ts
toJSON(value: string | number): string
```

Defined in: [packages/nft/src/metadata/metadata.ts:226](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L226)

Converts the color value to a JSON string.

#### Parameters

##### value

The color value.

`string` | `number`

#### Returns

`string`

The JSON string representation.

#### Overrides

```ts
MetadataPlugin.toJSON
```
