---
title: getTokenInfo
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getTokenInfo
order: 166
---

# Function: getTokenInfo()

```ts
function getTokenInfo<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & GetTokenInfoData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenState, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L60)

Retrieve information about a fungible token.
The `info` endpoint retrieves detailed information about a specific fungible token deployed on the Mina blockchain.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`GetTokenInfoData`](apisrctypealiasgettokeninfodata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenState`](apisrctypealiastokenstate), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
