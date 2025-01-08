---
title: airdropTokens
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.airdropTokens
order: 158
---

# Function: airdropTokens()

```ts
function airdropTokens<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & AirdropTokensData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<AirdropTransactionResponse, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:150](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L150)

Distribute tokens to multiple addresses via airdrop.
Allows users to distribute tokens to multiple addresses in a single transaction.
This is efficient for distributing tokens during events like token launches or community rewards.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`AirdropTokensData`](apisrctypealiasairdroptokensdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`AirdropTransactionResponse`](apisrctypealiasairdroptransactionresponse), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
