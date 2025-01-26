---
title: NFTProgram
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.NFTProgram
order: 273
---

# Variable: NFTProgram

## Methods overview

- insertMetadata() [↗](#insertmetadata)
- merge() [↗](#merge)

```ts
const NFTProgram: {} & {
  insertMetadata: (publicInput: NFTState, ...args: TupleToInstances<[typeof MetadataMap, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Signature]>) => Promise<{}>;
  merge: (publicInput: NFTState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
};
```

Defined in: [packages/nft/src/zkprogram-example/update.ts:16](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/zkprogram-example/update.ts#L16)

Defines the NFTProgram ZkProgram with methods for updating NFT metadata.

## Type declaration

### insertMetadata()

```ts
insertMetadata: (publicInput: NFTState, ...args: TupleToInstances<[typeof MetadataMap, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Signature]>) => Promise<{}>;
```

Inserts a metadata key-value pair into the NFT's metadata map.

#### Parameters

##### publicInput

[`NFTState`](nftsrcclassnftstate)

##### args

...`TupleToInstances`\<\[*typeof* [`MetadataMap`](nftsrcclassmetadatamap), *typeof* `Field` & (`x`: `string` \| `number` \| `bigint` \| `Field` \| `FieldVar` \| `FieldConst`) => `Field`, *typeof* `Field` & (`x`: `string` \| `number` \| `bigint` \| `Field` \| `FieldVar` \| `FieldConst`) => `Field`, *typeof* `Signature`\]\>

#### Returns

`Promise`\<\{\}\>

A promise resolving to an object containing the updated NFT state and auxiliary output.

#### Remarks

This method verifies that the provided signature is valid and corresponds to the NFT owner.
It then inserts the new key-value pair into the metadata map, ensuring that the key does not already exist.
The method returns an updated NFT state with the new metadata root and increments the version.

### merge()

```ts
merge: (publicInput: NFTState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
```

Merges two self-proofs to produce a new NFT state.

#### Parameters

##### publicInput

[`NFTState`](nftsrcclassnftstate)

##### args

...`TupleToInstances`\<\[*typeof* `SelfProof`, *typeof* `SelfProof`\]\>

#### Returns

`Promise`\<\{\}\>

A promise resolving to an object containing the merged NFT state.

#### Remarks

This method verifies both proofs and asserts the consistency of their inputs and outputs.
It ensures that the initial state matches the public input of the first proof,
and that the public output of the first proof matches the public input of the second proof.
The method returns the public output of the second proof as the new merged NFT state.
