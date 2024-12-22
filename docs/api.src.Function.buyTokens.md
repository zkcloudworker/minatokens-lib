---
title: buyTokens
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.buyTokens
order: 149
---

# Function: buyTokens()

```ts
function buyTokens<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & BuyTokensData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Purchase tokens from an existing offer.
Allows users to purchase tokens from an existing offer on the Mina blockchain.
This endpoint facilitates the transaction where tokens are transferred from the offer address to the buyer's address in exchange for the specified price.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`BuyTokensData`](apisrctypealiasbuytokensdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:176](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L176)
