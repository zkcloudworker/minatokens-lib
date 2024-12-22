---
title: transferTokens
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.transferTokens
order: 162
---

# Function: transferTokens()

```ts
function transferTokens<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & TransferTokensData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Transfer tokens from one address to another.
The `transfer` endpoint allows users to transfer tokens of a fungible token on the Mina blockchain from one address to another.
The sender must have sufficient balance and appropriate permissions to perform the transfer.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`TransferTokensData`](apisrctypealiastransfertokensdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:126](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L126)
