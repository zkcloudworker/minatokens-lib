---
title: deserializeIndexedMerkleMap
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Function.deserializeIndexedMerkleMap
order: 307
---

# Function: deserializeIndexedMerkleMap()

```ts
function deserializeIndexedMerkleMap(params: {
  serializedIndexedMap: IndexedMapSerialized;
  type: typeof IndexedMerkleMapBase;
 }): 
  | InstanceType<ReturnType<typeof IndexedMerkleMap>>
  | undefined
```

Defined in: [packages/storage/src/indexed-map/indexed-map.ts:111](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/indexed-map/indexed-map.ts#L111)

## Parameters

### params

#### serializedIndexedMap

[`IndexedMapSerialized`](storagesrcinterfaceindexedmapserialized)

#### type

*typeof* `IndexedMerkleMapBase`

## Returns

  \| `InstanceType`\<`ReturnType`\<*typeof* `IndexedMerkleMap`\>\>
  \| `undefined`
