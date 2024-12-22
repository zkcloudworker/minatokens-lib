---
title: getNftV2Info
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getNftV2Info
order: 152
---

# Function: getNftV2Info()

```ts
function getNftV2Info<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & GetNftV2InfoData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<NFTRequestAnswer, ErrorResponse, ThrowOnError>
```

Retrieve NFT Info
Retrieves detailed information about a Mina NFT V2.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`GetNftV2InfoData`](apisrctypealiasgetnftv2infodata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`NFTRequestAnswer`](apisrctypealiasnftrequestanswer), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L26)
