---
title: tokenOffer
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.tokenOffer
order: 172
---

# Function: tokenOffer()

```ts
function tokenOffer<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & TokenOfferData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:174](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L174)

Create an offer to sell tokens at a specified price.
Allows users to create an offer to sell a specified amount of tokens at a given price.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`TokenOfferData`](apisrctypealiastokenofferdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
