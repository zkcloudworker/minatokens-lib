---
title: updateTokenBidWhitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.updateTokenBidWhitelist
order: 165
---

# Function: updateTokenBidWhitelist()

```ts
function updateTokenBidWhitelist<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & UpdateTokenBidWhitelistData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Update the bid whitelist
Allows administrators to update the whitelist of addresses permitted to interact with the Bid contract.
This is essential for managing participation in bidding processes, especially for controlled or private auctions.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`UpdateTokenBidWhitelistData`](apisrctypealiasupdatetokenbidwhitelistdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:227](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L227)
