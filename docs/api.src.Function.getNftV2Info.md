---
title: getNftV2Info
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getNftV2Info
order: 163
---

# Function: getNftV2Info()

```ts
function getNftV2Info<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & GetNftV2InfoData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<NFTRequestAnswer, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L37)

Retrieve NFT Info
Retrieves detailed information about a Mina NFT V2.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`GetNftV2InfoData`](apisrctypealiasgetnftv2infodata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`NFTRequestAnswer`](apisrctypealiasnftrequestanswer), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
