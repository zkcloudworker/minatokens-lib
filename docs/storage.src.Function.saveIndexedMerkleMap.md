---
title: saveIndexedMerkleMap
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Function.saveIndexedMerkleMap
order: 316
---

# Function: saveIndexedMerkleMap()

```ts
function saveIndexedMerkleMap(params: {
  auth: string;
  filename: string;
  keyvalues: {
     key: string;
     value: string;
    }[];
  map: IndexedMerkleMapBase;
  name: string;
}): Promise<string | undefined>
```

Defined in: [packages/storage/src/indexed-map/indexed-map.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/indexed-map/indexed-map.ts#L63)

## Parameters

### params

#### auth

`string`

#### filename

`string`

#### keyvalues

\{
  `key`: `string`;
  `value`: `string`;
 \}[]

#### map

`IndexedMerkleMapBase`

#### name

`string`

## Returns

`Promise`\<`string` \| `undefined`\>
