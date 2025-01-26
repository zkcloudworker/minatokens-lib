---
title: FungibleTokenClaimContractDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Interface.FungibleTokenClaimContractDeployProps
order: 340
---

# Interface: FungibleTokenClaimContractDeployProps

## Properties overview

- whitelist:  Whitelist; [↗](#whitelist)

Defined in: [packages/token/src/claim.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L24)

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### maxAmount?

```ts
optional maxAmount: UInt64;
```

Defined in: [packages/token/src/claim.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L29)

The maximum amount of tokens to claim in case the whitelist is empty.

***

### whitelist

```ts
whitelist: Whitelist;
```

Defined in: [packages/token/src/claim.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L27)

The whitelist.
