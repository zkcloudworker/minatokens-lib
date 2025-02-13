---
title: txStatus
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.Function.txStatus
order: 174
---

# Function: txStatus()

```ts
function txStatus<ThrowOnError>(options: OmitKeys<RequestOptions<ThrowOnError>, "body" | "url"> & TxStatusData & Pick<RequestOptions<ThrowOnError>, "headers">): RequestResult<TransactionStatus, ErrorResponse, ThrowOnError>
```

Defined in: [packages/api/src/client/sdk.gen.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/sdk.gen.ts#L110)

Retrieve the status of a transaction by its hash.
The `tx-status` endpoint allows you to check the current status of a transaction on the Mina blockchain by providing the transaction hash. It returns whether the transaction has been applied, failed, or is still pending.

## Type Parameters

• **ThrowOnError** *extends* `boolean` = `false`

## Parameters

### options

`OmitKeys`\<`RequestOptions`\<`ThrowOnError`\>, `"body"` \| `"url"`\> & [`TxStatusData`](apisrctypealiastxstatusdata) & `Pick`\<`RequestOptions`\<`ThrowOnError`\>, `"headers"`\>

## Returns

`RequestResult`\<[`TransactionStatus`](apisrctypealiastransactionstatus), [`ErrorResponse`](apisrctypealiaserrorresponse), `ThrowOnError`\>
