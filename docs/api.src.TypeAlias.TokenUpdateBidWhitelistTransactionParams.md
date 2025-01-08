---
title: TokenUpdateBidWhitelistTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenUpdateBidWhitelistTransactionParams
order: 114
---

# Type Alias: TokenUpdateBidWhitelistTransactionParams

## Properties overview

- bidAddress:  string; [↗](#bidaddress)
- whitelist:  Whitelist; [↗](#whitelist)

```ts
type TokenUpdateBidWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
  bidAddress: string;
  txType: "token:bid:whitelist";
  whitelist: Whitelist;
};
```

Defined in: [packages/api/src/client/types.gen.ts:709](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L709)

## Type declaration

### bidAddress

```ts
bidAddress: string;
```

The address of the bid to update whitelist for.

### txType?

```ts
optional txType: "token:bid:whitelist";
```

Must be "token:bid:whitelist"

### whitelist

```ts
whitelist: Whitelist;
```

Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
