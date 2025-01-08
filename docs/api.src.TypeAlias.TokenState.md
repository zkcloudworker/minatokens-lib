---
title: TokenState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenState
order: 105
---

# Type Alias: TokenState

## Properties overview

- adminAddress:  string; [↗](#adminaddress)
- adminContractAddress:  string; [↗](#admincontractaddress)
- adminTokenBalance:  number; [↗](#admintokenbalance)
- adminTokenSymbol:  string; [↗](#admintokensymbol)
- adminUri:  string; [↗](#adminuri)
- adminVerificationKeyHash:  string; [↗](#adminverificationkeyhash)
- adminVersion:  number; [↗](#adminversion)
- decimals:  number; [↗](#decimals)
- isPaused:  boolean; [↗](#ispaused)
- tokenAddress:  string; [↗](#tokenaddress)
- tokenId:  string; [↗](#tokenid)
- tokenSymbol:  string; [↗](#tokensymbol)
- totalSupply:  number; [↗](#totalsupply)
- uri:  string; [↗](#uri)
- verificationKeyHash:  string; [↗](#verificationkeyhash)
- version:  number; [↗](#version)

```ts
type TokenState = {
  adminAddress: string;
  adminContractAddress: string;
  adminTokenBalance: number;
  adminTokenSymbol: string;
  adminUri: string;
  adminVerificationKeyHash: string;
  adminVersion: number;
  decimals: number;
  isPaused: boolean;
  tokenAddress: string;
  tokenId: string;
  tokenSymbol: string;
  totalSupply: number;
  uri: string;
  verificationKeyHash: string;
  version: number;
};
```

Defined in: [packages/api/src/client/types.gen.ts:531](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L531)

## Type declaration

### adminAddress

```ts
adminAddress: string;
```

The address of the administrator.

### adminContractAddress

```ts
adminContractAddress: string;
```

The address of the admin contract.

### adminTokenBalance

```ts
adminTokenBalance: number;
```

The token balance of the administrator.

### adminTokenSymbol

```ts
adminTokenSymbol: string;
```

The symbol of the admin token.

### adminUri

```ts
adminUri: string;
```

The URI of the admin token metadata.

### adminVerificationKeyHash

```ts
adminVerificationKeyHash: string;
```

The verification key hash of the admin contract.

### adminVersion

```ts
adminVersion: number;
```

### decimals

```ts
decimals: number;
```

The number of decimal places the token uses.

### isPaused

```ts
isPaused: boolean;
```

Indicates if the token contract is paused.

### tokenAddress

```ts
tokenAddress: string;
```

The address of the token contract.

### tokenId

```ts
tokenId: string;
```

The unique identifier of the token.

### tokenSymbol

```ts
tokenSymbol: string;
```

The symbol of the token.

### totalSupply

```ts
totalSupply: number;
```

The total supply of the token.

### uri

```ts
uri: string;
```

The URI of the token metadata.

### verificationKeyHash

```ts
verificationKeyHash: string;
```

The verification key hash of the token contract.

### version

```ts
version: number;
```

The version number of the token contract.
