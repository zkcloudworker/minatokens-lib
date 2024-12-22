---
title: mintTokens
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.mintTokens
order: 157
---

# Function: mintTokens()

```ts
function mintTokens<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & MintTokensData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<TokenTransaction, ErrorResponse, ThrowOnError>
```

Mint new tokens to a specified address.
The `mint` endpoint allows authorized users to mint new tokens of a fungible token on the Mina blockchain.
This transaction increases the total supply of the token by creating new tokens and assigning them to a specified address.
The sender must have the authority to mint tokens, typically the admin of the token contract.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`MintTokensData`](apisrctypealiasminttokensdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TokenTransaction`](apisrctypealiastokentransaction), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:113](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L113)
