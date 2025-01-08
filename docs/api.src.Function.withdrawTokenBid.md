---
title: withdrawTokenBid
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.withdrawTokenBid
order: 180
---

# Function: withdrawTokenBid()

```ts
function withdrawTokenBid<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & WithdrawTokenBidData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:212](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L212)

Withdraw a previously placed bid on an token.
Allows users to withdraw a bid they have previously placed using the `/bid` endpoint.
This transaction cancels the active bid, releasing any locked funds.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`WithdrawTokenBidData`](apisrctypealiaswithdrawtokenbiddata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
