---
title: NFTGameProgram
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.NFTGameProgram
order: 272
---

# Variable: NFTGameProgram

## Methods overview

- merge() [↗](#merge)
- updateMetadataAndOwner() [↗](#updatemetadataandowner)

```ts
const NFTGameProgram: {} & {
  merge: (publicInput: NFTState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
  updateMetadataAndOwner: (publicInput: NFTState, ...args: TupleToInstances<[typeof MetadataMap, typeof PublicKey, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Storage, typeof PublicKey]>) => Promise<{}>;
};
```

Defined in: packages/nft/src/zkprogram-example/game.ts:17

Defines the NFTProgram ZkProgram with methods for updating NFT metadata.

## Type declaration

### merge()

```ts
merge: (publicInput: NFTState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
```

#### Parameters

##### publicInput

[`NFTState`](nftsrcclassnftstate)

##### args

...`TupleToInstances`\<\[*typeof* `SelfProof`, *typeof* `SelfProof`\]\>

#### Returns

`Promise`\<\{\}\>

### updateMetadataAndOwner()

```ts
updateMetadataAndOwner: (publicInput: NFTState, ...args: TupleToInstances<[typeof MetadataMap, typeof PublicKey, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field, typeof Storage, typeof PublicKey]>) => Promise<{}>;
```

Updates the NFT's metadata map with a new key-value pairs.

#### Parameters

##### publicInput

[`NFTState`](nftsrcclassnftstate)

##### args

...`TupleToInstances`\<\[*typeof* [`MetadataMap`](nftsrcclassmetadatamap), *typeof* `PublicKey`, *typeof* `Field` & (`x`: `string` \| `number` \| `bigint` \| `Field` \| `FieldVar` \| `FieldConst`) => `Field`, *typeof* `Field` & (`x`: `string` \| `number` \| `bigint` \| `Field` \| `FieldVar` \| `FieldConst`) => `Field`, *typeof* `Storage`, *typeof* `PublicKey`\]\>

#### Returns

`Promise`\<\{\}\>

A promise resolving to an object containing the updated NFT state and auxiliary output.

#### Remarks

This method verifies that the provided signature is valid and corresponds to the NFT owner.
It then inserts the new key-value pair into the metadata map, ensuring that the key does not already exist.
The method returns an updated NFT state with the new metadata root and increments the version.
