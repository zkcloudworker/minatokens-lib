---
title: getProof
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.getProof
order: 153
---

# Function: getProof()

```ts
function getProof<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError, string>, "body" | "url"> & GetProofData & Pick<RequestOptions<ThrowOnError, string>, "headers">): RequestResult<JobResults, ErrorResponse, ThrowOnError>
```

Check the status of a proof generation job and retrieve proofs.
The `proof` endpoint allows you to check the status of a proof generation job initiated via the `/prove` endpoint.
It returns the status of the job and the proofs or tx hashes if they are ready.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"body"` \| `"url"`\> & [`GetProofData`](apisrctypealiasgetproofdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`, `string`\>, `"headers"`\>

## Returns

`RequestResult`\<[`JobResults`](apisrctypealiasjobresults), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>

## Defined in

[packages/api/src/client/sdk.gen.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L87)
