---
title: getTokenBalance
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getTokenBalance
order: 165
---

# Function: getTokenBalance()

```ts
function getTokenBalance<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & GetTokenBalanceData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<BalanceResponse, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L72)

Retrieve the balance of a specific token for an address.
The `balance` endpoint retrieves the balance of a specific fungible token for a given Mina address.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`GetTokenBalanceData`](apisrctypealiasgettokenbalancedata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`BalanceResponse`](apisrctypealiasbalanceresponse), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
