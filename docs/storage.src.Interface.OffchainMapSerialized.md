---
title: OffchainMapSerialized
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Interface.OffchainMapSerialized
order: 298
---

# Interface: OffchainMapSerialized

Defined in: [packages/storage/src/whitelist/offchain-map.ts:17](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L17)

## Extends

- [`IndexedMapSerializedJson`](storagesrctypealiasindexedmapserializedjson)

## Indexable

```ts
[key: string]: {
  data: object;
  list: {
     key: string;
     value: string;
    }[];
  map: IndexedMapSerialized;
}
```
