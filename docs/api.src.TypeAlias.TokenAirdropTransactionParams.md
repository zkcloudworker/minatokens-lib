---
title: TokenAirdropTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenAirdropTransactionParams
order: 91
---

# Type Alias: TokenAirdropTransactionParams

## Properties overview

- recipients:  {
  address: string;
  amount: number;
  memo: string;
 }[]; [↗](#recipients)

```ts
type TokenAirdropTransactionParams = DeployedTokenTransactionBaseParams & {
  recipients: {
     address: string;
     amount: number;
     memo: string;
    }[];
  txType: "token:airdrop";
};
```

Defined in: [packages/api/src/client/types.gen.ts:322](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L322)

## Type declaration

### recipients

```ts
recipients: {
  address: string;
  amount: number;
  memo: string;
 }[];
```

List of recipients and amounts for the airdrop

### txType?

```ts
optional txType: "token:airdrop";
```

Must be "token:airdrop"
