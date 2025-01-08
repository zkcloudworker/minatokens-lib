---
title: updateTokenAdminWhitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.updateTokenAdminWhitelist
order: 175
---

# Function: updateTokenAdminWhitelist()

```ts
function updateTokenAdminWhitelist<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & UpdateTokenAdminWhitelistData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:263](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L263)

Update the advanced admin whitelist
Allows administrators to update the whitelist of admin contracts.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`UpdateTokenAdminWhitelistData`](apisrctypealiasupdatetokenadminwhitelistdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
