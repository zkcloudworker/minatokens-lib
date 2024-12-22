---
title: TokenInfo
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenInfo
order: 87
---

# Type Alias: TokenInfo

```ts
type TokenInfo = {
  adminContractsCode: string[];
  description: string;
  discord: string;
  facebook: string;
  imageBase64: string;
  imageUrl: string;
  instagram: string;
  name: string;
  symbol: string;
  telegram: string;
  tokenContractCode: string;
  twitter: string;
  website: string;
};
```

## Type declaration

### adminContractsCode?

```ts
optional adminContractsCode: string[];
```

Optional. Code for the admin contracts.

### description?

```ts
optional description: string;
```

Optional. Description of the token.

### discord?

```ts
optional discord: string;
```

Optional. Discord link associated with the token.

### facebook?

```ts
optional facebook: string;
```

Optional. Facebook page associated with the token.

### imageBase64?

```ts
optional imageBase64: string;
```

Optional. Base64-encoded image data (max 1 MB).

### imageUrl?

```ts
optional imageUrl: string;
```

Optional. URL of the token image.

### instagram?

```ts
optional instagram: string;
```

Optional. Instagram handle associated with the token.

### name?

```ts
optional name: string;
```

Optional. The name of the token.

### symbol?

```ts
optional symbol: string;
```

The symbol of the token.

### telegram?

```ts
optional telegram: string;
```

Optional. Telegram link associated with the token.

### tokenContractCode?

```ts
optional tokenContractCode: string;
```

Optional. Code for the token contract.

### twitter?

```ts
optional twitter: string;
```

Optional. Twitter handle associated with the token.

### website?

```ts
optional website: string;
```

Optional. Official website of the token.

## Defined in

[packages/api/src/client/types.gen.ts:377](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L377)
