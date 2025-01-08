---
title: TokenUpdateOfferWhitelistTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenUpdateOfferWhitelistTransactionParams
order: 115
---

# Type Alias: TokenUpdateOfferWhitelistTransactionParams

## Properties overview

- offerAddress:  string; [↗](#offeraddress)
- whitelist:  Whitelist; [↗](#whitelist)

```ts
type TokenUpdateOfferWhitelistTransactionParams = DeployedTokenTransactionBaseParams & {
  offerAddress: string;
  txType: "token:offer:whitelist";
  whitelist: Whitelist;
};
```

Defined in: [packages/api/src/client/types.gen.ts:729](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L729)

## Type declaration

### offerAddress

```ts
offerAddress: string;
```

The address of the offer to update whitelist for.

### txType?

```ts
optional txType: "token:offer:whitelist";
```

Must be "token:offer:whitelist"

### whitelist

```ts
whitelist: Whitelist;
```

Either a list of whitelisted addresses with optional amounts, or a string representing a whitelist contract address
