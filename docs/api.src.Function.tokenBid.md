---
title: tokenBid
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.tokenBid
order: 171
---

# Function: tokenBid()

```ts
function tokenBid<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & TokenBidData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:162](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L162)

Place a bid on a token
Allows users to place a bid on an token.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`TokenBidData`](apisrctypealiastokenbiddata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
