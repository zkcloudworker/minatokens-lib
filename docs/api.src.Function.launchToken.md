---
title: launchToken
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.launchToken
order: 156
---

# Function: launchToken()

```ts
function launchToken<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & LaunchTokenData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Deploy a new fungible token contract.
The `launch` endpoint is used to deploy a new fungible token on the Mina blockchain.
It allows users to create a new token with customizable parameters such as symbol,
decimals, URI, and admin contract type (standard or advanced).

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`LaunchTokenData`](apisrctypealiaslaunchtokendata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L15)
