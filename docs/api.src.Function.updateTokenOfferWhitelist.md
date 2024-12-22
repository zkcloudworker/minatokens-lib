---
title: updateTokenOfferWhitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.updateTokenOfferWhitelist
order: 166
---

# Function: updateTokenOfferWhitelist()

```ts
function updateTokenOfferWhitelist<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & UpdateTokenOfferWhitelistData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Update the offer whitelist
Allows administrators to update the whitelist of addresses permitted to interact with the Offer contract.
This is essential for managing participation in offer processes, especially for controlled or private sales.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`UpdateTokenOfferWhitelistData`](apisrctypealiasupdatetokenofferwhitelistdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:240](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L240)
