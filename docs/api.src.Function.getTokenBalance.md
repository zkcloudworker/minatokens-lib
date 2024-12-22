---
title: getTokenBalance
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getTokenBalance
order: 154
---

# Function: getTokenBalance()

```ts
function getTokenBalance<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & GetTokenBalanceData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<BalanceResponse, ErrorResponse, ThrowOnError>
```

Retrieve the balance of a specific token for an address.
The `balance` endpoint retrieves the balance of a specific fungible token for a given Mina address.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`GetTokenBalanceData`](apisrctypealiasgettokenbalancedata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`BalanceResponse`](apisrctypealiasbalanceresponse), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L61)
