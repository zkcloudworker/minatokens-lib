---
title: getTokenInfo
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getTokenInfo
order: 155
---

# Function: getTokenInfo()

```ts
function getTokenInfo<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & GetTokenInfoData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenState, ErrorResponse, ThrowOnError>
```

Retrieve information about a fungible token.
The `info` endpoint retrieves detailed information about a specific fungible token deployed on the Mina blockchain.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`GetTokenInfoData`](apisrctypealiasgettokeninfodata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenState`](apisrctypealiastokenstate), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:49](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L49)
