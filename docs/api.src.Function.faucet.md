---
title: faucet
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.faucet
order: 161
---

# Function: faucet()

```ts
function faucet<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & FaucetData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<FaucetResponse, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:48](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L48)

Request Funds from Faucet
Requests funds from the faucet for testing purposes.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`FaucetData`](apisrctypealiasfaucetdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`FaucetResponse`](apisrctypealiasfaucetresponse), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
