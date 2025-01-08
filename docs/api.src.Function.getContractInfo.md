---
title: getContractInfo
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getContractInfo
order: 162
---

# Function: getContractInfo()

```ts
function getContractInfo<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & GetContractInfoData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<GetContractInfoResponse, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L26)

Retrieve contract info
Retrieves detailed information about a contract.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`GetContractInfoData`](apisrctypealiasgetcontractinfodata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`GetContractInfoResponse`](apisrctypealiasgetcontractinforesponse), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
