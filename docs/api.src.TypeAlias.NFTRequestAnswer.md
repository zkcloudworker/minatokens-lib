---
title: NFTRequestAnswer
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.NFTRequestAnswer
order: 69
---

# Type Alias: NFTRequestAnswer

```ts
type NFTRequestAnswer = {
  algolia: {} | null;
  contractAddress: string;
  contractUri: string | null;
  metadata: {} | null;
  metadataRoot: {
     data: string;
     kind: string;
    };
  name: string;
  nftAddress: string;
  owner: string;
  price: number;
  storage: string;
  tokenId: string;
  tokenSymbol: string;
  version: number;
};
```

## Type declaration

### algolia?

```ts
optional algolia: {} | null;
```

### contractAddress?

```ts
optional contractAddress: string;
```

### contractUri?

```ts
optional contractUri: string | null;
```

### metadata?

```ts
optional metadata: {} | null;
```

### metadataRoot?

```ts
optional metadataRoot: {
  data: string;
  kind: string;
};
```

#### metadataRoot.data?

```ts
optional data: string;
```

#### metadataRoot.kind?

```ts
optional kind: string;
```

### name?

```ts
optional name: string;
```

### nftAddress?

```ts
optional nftAddress: string;
```

### owner?

```ts
optional owner: string;
```

### price?

```ts
optional price: number;
```

### storage?

```ts
optional storage: string;
```

### tokenId?

```ts
optional tokenId: string;
```

### tokenSymbol?

```ts
optional tokenSymbol: string;
```

### version?

```ts
optional version: number;
```

## Defined in

[packages/api/src/client/types.gen.ts:228](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L228)
