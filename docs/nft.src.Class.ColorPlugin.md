---
title: ColorPlugin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.ColorPlugin
order: 176
---

# Class: ColorPlugin

## Properties overview

- name: readonly name: "color" = "color"; [↗](#name)
- Returns: {
  canonicalRepresentation: number;
  key: Field;
  value: MetadataValue;
} [↗](#returns)
- canonicalRepresentation:  number; [↗](#canonicalrepresentation)
- key:  Field; [↗](#key)
- value:  MetadataValue; [↗](#value)

## Methods overview

- fromJSON() [↗](#fromjson)
- getColor() [↗](#getcolor)
- getTrait() [↗](#gettrait)
- toJSON() [↗](#tojson)

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

`MetadataPlugin.constructor`

## Properties

### name

```ts
readonly name: "color" = "color";
```

The name of the plugin.

#### Overrides

`MetadataPlugin.name`

#### Defined in

[packages/nft/src/metadata/metadata.ts:158](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L158)

## Methods

### fromJSON()

```ts
fromJSON(value: string | object): number
```

Parses the color value from a JSON string or object.

#### Parameters

##### value

The JSON value.

`string` | `object`

#### Returns

`number`

The numeric representation of the color.

#### Overrides

`MetadataPlugin.fromJSON`

#### Defined in

[packages/nft/src/metadata/metadata.ts:234](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L234)

***

### getColor()

```ts
getColor(value: string | number): number
```

Converts a color name or value into its numeric representation.

#### Parameters

##### value

The color value (name, string, or number).

`string` | `number`

#### Returns

`number`

The numeric representation of the color.

#### Defined in

[packages/nft/src/metadata/metadata.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L165)

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

`MetadataPlugin.getTrait`

#### Defined in

[packages/nft/src/metadata/metadata.ts:199](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L199)

***

### toJSON()

```ts
toJSON(value: string | number): string
```

Converts the color value to a JSON string.

#### Parameters

##### value

The color value.

`string` | `number`

#### Returns

`string`

The JSON string representation.

#### Overrides

`MetadataPlugin.toJSON`

#### Defined in

[packages/nft/src/metadata/metadata.ts:226](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/metadata.ts#L226)
