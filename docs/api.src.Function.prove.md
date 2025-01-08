---
title: prove
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.prove
order: 169
---

# Function: prove()

```ts
function prove<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & ProveData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<JobId, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L85)

Generate proofs for signed token transactions.
The `prove` endpoint initiates the proof generation process for a set of signed token transactions.
It returns a job ID which can be used to check the status and retrieve the proofs or tx hashes using the `/proof` endpoint.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`ProveData`](apisrctypealiasprovedata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`JobId`](apisrctypealiasjobid), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
