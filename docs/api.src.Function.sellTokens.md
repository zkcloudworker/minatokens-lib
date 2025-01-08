---
title: sellTokens
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.sellTokens
order: 170
---

# Function: sellTokens()

```ts
function sellTokens<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & SellTokensData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:199](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L199)

Sell a token to the Bid contract.
Allows token owners to sell their tokens to the Bid contract.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`SellTokensData`](apisrctypealiasselltokensdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
