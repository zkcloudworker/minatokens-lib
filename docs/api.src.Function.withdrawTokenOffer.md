---
title: withdrawTokenOffer
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.withdrawTokenOffer
order: 170
---

# Function: withdrawTokenOffer()

```ts
function withdrawTokenOffer<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & WithdrawTokenOfferData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Withdraw a previously made offer to sell a token.
Allows users to withdraw an offer they have previously made using the `/offer` endpoint.
This transaction cancels the active offer, releasing any locked tokens.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`WithdrawTokenOfferData`](apisrctypealiaswithdrawtokenofferdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:214](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L214)
