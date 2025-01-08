---
title: LaunchTokenTransactionBaseParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.LaunchTokenTransactionBaseParams
order: 75
---

# Type Alias: LaunchTokenTransactionBaseParams

## Properties overview

- adminContract:  "standard" | "advanced"; [↗](#admincontract)
- symbol:  string; [↗](#symbol)
- uri:  string | TokenInfo; [↗](#uri)

```ts
type LaunchTokenTransactionBaseParams = TokenTransactionBaseParams & {
  adminContract: "standard" | "advanced";
  adminContractAddress: string;
  adminContractPrivateKey: string;
  decimals: number;
  symbol: string;
  tokenAddress: string;
  tokenContractPrivateKey: string;
  txType: "token:launch";
  uri: string | TokenInfo;
};
```

Defined in: [packages/api/src/client/types.gen.ts:202](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L202)

## Type declaration

### adminContract

```ts
adminContract: "standard" | "advanced";
```

The type of admin contract to use.

### adminContractAddress?

```ts
optional adminContractAddress: string;
```

Optional. The address of the admin contract.

### adminContractPrivateKey?

```ts
optional adminContractPrivateKey: string;
```

Optional. Private key for the admin contract.

### decimals?

```ts
optional decimals: number;
```

Optional. The number of decimal places for the token.

### symbol

```ts
symbol: string;
```

The symbol of the token.

### tokenAddress?

```ts
optional tokenAddress: string;
```

Optional. The address of the token contract.

### tokenContractPrivateKey?

```ts
optional tokenContractPrivateKey: string;
```

Optional. Private key for the token contract.

### txType?

```ts
optional txType: "token:launch";
```

Must be "token:launch"

### uri

```ts
uri: string | TokenInfo;
```

URI or token info object containing metadata.
