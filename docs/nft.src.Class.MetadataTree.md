---
title: MetadataTree
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MetadataTree
order: 180
---

# Class: MetadataTree

## Properties overview

- height: readonly height: number; [↗](#height)
- root: readonly root: Field; [↗](#root)
- values: readonly values: {
  key: bigint;
  value: Field;
 }[]; [↗](#values)
- key:  bigint; [↗](#key)
- value:  Field; [↗](#value)
- Returns: {
  height: number;
  root: string;
  values: {
     key: string;
     value: string;
    }[];
} [↗](#returns)
- height:  number; [↗](#height)
- root:  string; [↗](#root)
- values:  {
  key: string;
  value: string;
 }[]; [↗](#values)

## Methods overview

- toJSON() [↗](#tojson)
- fromJSON() [↗](#fromjson)

Represents a metadata tree using a Merkle tree structure.

The `MetadataTree` class is used to manage a set of key-value pairs representing metadata,
storing them in a Merkle tree for efficient verification and integrity checks.

This class is a utility within the NFT standard on Mina Protocol, enabling secure and verifiable
storage of metadata. By leveraging the Merkle tree, clients can prove the inclusion of specific
metadata entries without exposing the entire dataset.

## Constructors

### new MetadataTree()

```ts
new MetadataTree(height: number, values: {
  key: bigint;
  value: Field;
 }[]): MetadataTree
```

Constructs a new `MetadataTree` with the specified height and key-value pairs.

#### Parameters

##### height

`number`

The height of the Merkle tree (must be between 1 and 254).

##### values

\{
  `key`: `bigint`;
  `value`: `Field`;
 \}[]

An array of key-value pairs to store in the tree.

#### Returns

[`MetadataTree`](nftsrcclassmetadatatree)

#### Throws

Will throw an error if the number of values exceeds the maximum capacity of the tree.

#### Throws

Will throw an error if any key is out of bounds for the tree height.

#### Defined in

[packages/nft/src/metadata/tree.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L42)

## Properties

### height

```ts
readonly height: number;
```

The height of the Merkle tree.
Determines the maximum number of elements the tree can hold.

#### Defined in

[packages/nft/src/metadata/tree.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L25)

***

### root

```ts
readonly root: Field;
```

The root of the Merkle tree.
Used for verifying the integrity of the tree and its contents.

#### Defined in

[packages/nft/src/metadata/tree.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L31)

***

### values

```ts
readonly values: {
  key: bigint;
  value: Field;
 }[];
```

The list of key-value pairs stored in the tree.
Each key is a `bigint` representing the index in the Merkle tree,
and each value is a `Field` element from o1js.

#### key

```ts
key: bigint;
```

#### value

```ts
value: Field;
```

#### Defined in

[packages/nft/src/metadata/tree.ts:19](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L19)

## Methods

### toJSON()

```ts
toJSON(): {
  height: number;
  root: string;
  values: {
     key: string;
     value: string;
    }[];
}
```

Serializes the `MetadataTree` to a JSON object.

#### Returns

```ts
{
  height: number;
  root: string;
  values: {
     key: string;
     value: string;
    }[];
}
```

An object containing the tree's height, root, and values.

##### height

```ts
height: number;
```

##### root

```ts
root: string;
```

##### values

```ts
values: {
  key: string;
  value: string;
 }[];
```

#### Defined in

[packages/nft/src/metadata/tree.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L71)

***

### fromJSON()

```ts
static fromJSON(json: {
  height: number;
  root: string;
  values: {
     key: string;
     value: string;
    }[];
 }): MetadataTree
```

Deserializes a JSON object into a `MetadataTree` instance.

#### Parameters

##### json

The JSON object containing the tree data.

###### height

`number`

###### root

`string`

###### values

\{
  `key`: `string`;
  `value`: `string`;
 \}[]

#### Returns

[`MetadataTree`](nftsrcclassmetadatatree)

A new `MetadataTree` instance constructed from the JSON data.

#### Throws

Will throw an error if the JSON data is invalid or inconsistent.

#### Defined in

[packages/nft/src/metadata/tree.ts:95](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/tree.ts#L95)
