---
title: Text
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.Text
order: 221
---

# Class: Text

## Properties overview

- height: readonly height: number; [↗](#height)
- root: readonly root: Field; [↗](#root)
- size: readonly size: number; [↗](#size)
- text: readonly text: string; [↗](#text)

## Methods overview

- toString() [↗](#tostring)

Defined in: [packages/nft/src/metadata/text.ts:14](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L14)

The `Text` class represents textual data in the form of a Merkle tree. Each character of the text is converted to its
ASCII code and stored as a leaf in the Merkle tree. The root of the tree can be used as a compact representation
of the text data in cryptographic proofs.

## Constructors

### new Text()

```ts
new Text(text: string, height: number): Text
```

Defined in: [packages/nft/src/metadata/text.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L40)

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

## Properties

### height

```ts
readonly height: number;
```

Defined in: [packages/nft/src/metadata/text.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L30)

The height of the Merkle tree.

***

### root

```ts
readonly root: Field;
```

Defined in: [packages/nft/src/metadata/text.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L26)

The root of the Merkle tree representing the text data.

***

### size

```ts
readonly size: number;
```

Defined in: [packages/nft/src/metadata/text.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L18)

The length of the text.

***

### text

```ts
readonly text: string;
```

Defined in: [packages/nft/src/metadata/text.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L22)

The original text string.

## Methods

### toString()

```ts
toString(): string
```

Defined in: [packages/nft/src/metadata/text.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/metadata/text.ts#L57)

Returns the original text string.

#### Returns

`string`

The text string.
