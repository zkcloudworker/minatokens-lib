---
title: withdrawTokenOffer
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.withdrawTokenOffer
order: 181
---

# Function: withdrawTokenOffer()

```ts
function withdrawTokenOffer<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & WithdrawTokenOfferData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:225](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L225)

Withdraw a previously made offer to sell a token.
Allows users to withdraw an offer they have previously made using the `/offer` endpoint.
This transaction cancels the active offer, releasing any locked tokens.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`WithdrawTokenOfferData`](apisrctypealiaswithdrawtokenofferdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
