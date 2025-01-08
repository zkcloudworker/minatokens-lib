---
title: OffChainMapEntries
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.TypeAlias.OffChainMapEntries
order: 301
---

# Type Alias: OffChainMapEntries

```ts
type OffChainMapEntries = 
  | OffChainMapEntry[]
  | IpfsHash;
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L37)

IpfsHash is used when the map is already pinned to IPFS, it should be string with IPFS hash
