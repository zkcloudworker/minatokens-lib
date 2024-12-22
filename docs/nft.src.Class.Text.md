---
title: Text
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Text
order: 200
---

# Class: Text

## Properties overview

- height: readonly height: number; [↗](#height)
- root: readonly root: Field; [↗](#root)
- size: readonly size: number; [↗](#size)
- text: readonly text: string; [↗](#text)

## Methods overview

- toString() [↗](#tostring)

The `Text` class represents textual data in the form of a Merkle tree. Each character of the text is converted to its
ASCII code and stored as a leaf in the Merkle tree. The root of the tree can be used as a compact representation
of the text data in cryptographic proofs.

## Constructors

### new Text()

```ts
new Text(text: string, height: number): Text
```

Constructs a new `Text` instance by creating a Merkle tree from the given text string.
Each character in the text is converted to its ASCII code and stored as a leaf in the tree.

#### Parameters

##### text

`string`

The text string to be represented.

##### height

`number` = `TEXT_TREE_HEIGHT`

The height of the Merkle tree. Defaults to `TEXT_TREE_HEIGHT`.

#### Returns

[`Text`](nftsrcclasstext)

#### Throws

Will throw an error if the text length exceeds the number of leaves in the Merkle tree.

#### Defined in

[packages/nft/src/metadata/text.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L40)

## Properties

### height

```ts
readonly height: number;
```

The height of the Merkle tree.

#### Defined in

[packages/nft/src/metadata/text.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L30)

***

### root

```ts
readonly root: Field;
```

The root of the Merkle tree representing the text data.

#### Defined in

[packages/nft/src/metadata/text.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L26)

***

### size

```ts
readonly size: number;
```

The length of the text.

#### Defined in

[packages/nft/src/metadata/text.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L18)

***

### text

```ts
readonly text: string;
```

The original text string.

#### Defined in

[packages/nft/src/metadata/text.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L22)

## Methods

### toString()

```ts
toString(): string
```

Returns the original text string.

#### Returns

`string`

The text string.

#### Defined in

[packages/nft/src/metadata/text.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L57)
