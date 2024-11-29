---
title: MinaTokensAPI
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Class.MinaTokensAPI
order: 4
---

# Class: MinaTokensAPI

## Properties overview

- apiKey: readonly apiKey: string; [↗](#apikey)
- chain: readonly chain: "mainnet" | "devnet" | "zeko" | "local"; [↗](#chain)

## Methods overview

- apiCall() [↗](#apicall)
- buildDeployTokenTransaction() [↗](#builddeploytokentransaction)
- faucet() [↗](#faucet)
- getBalance() [↗](#getbalance)
- getNFTInfo() [↗](#getnftinfo)
- getProof() [↗](#getproof)
- getTokenInfo() [↗](#gettokeninfo)
- proveTokenTransaction() [↗](#provetokentransaction)
- sleep() [↗](#sleep)
- tokenTransaction() [↗](#tokentransaction)
- txStatus() [↗](#txstatus)
- waitForJobResult() [↗](#waitforjobresult)
- waitForTransaction() [↗](#waitfortransaction)

## Constructors

### new MinaTokensAPI()

```ts
new MinaTokensAPI(params: {
  apiKey: string;
  chain: "mainnet" | "devnet" | "zeko" | "local";
 }): MinaTokensAPI
```

#### Parameters

##### params

###### params.apiKey

`string`

###### params.chain

`"mainnet"` \| `"devnet"` \| `"zeko"` \| `"local"`

#### Returns

[`MinaTokensAPI`](classminatokensapi)

#### Defined in

[api.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L24)

## Properties

### apiKey

```ts
readonly apiKey: string;
```

#### Defined in

[api.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L22)

***

### chain

```ts
readonly chain: "mainnet" | "devnet" | "zeko" | "local";
```

#### Defined in

[api.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L21)

## Methods

### apiCall()

```ts
apiCall<TParams, TResponse>(params: {
  callParams: TParams;
  endpoint: string;
}): Promise<TResponse>
```

#### Type Parameters

• **TParams**

• **TResponse**

#### Parameters

##### params

###### params.callParams

`TParams`

###### params.endpoint

`string`

#### Returns

`Promise`\<`TResponse`\>

#### Defined in

[api.ts:157](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L157)

***

### buildDeployTokenTransaction()

```ts
buildDeployTokenTransaction(params: DeployTokenParams): Promise<DeployTransaction>
```

#### Parameters

##### params

[`DeployTokenParams`](interfacedeploytokenparams)

#### Returns

`Promise`\<[`DeployTransaction`](interfacedeploytransaction)\>

#### Defined in

[api.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L54)

***

### faucet()

```ts
faucet(params: FaucetParams): Promise<FaucetResponse>
```

#### Parameters

##### params

[`FaucetParams`](interfacefaucetparams)

#### Returns

`Promise`\<[`FaucetResponse`](interfacefaucetresponse)\>

#### Defined in

[api.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L82)

***

### getBalance()

```ts
getBalance(params: BalanceRequestParams): Promise<BalanceResponse>
```

#### Parameters

##### params

[`BalanceRequestParams`](interfacebalancerequestparams)

#### Returns

`Promise`\<[`BalanceResponse`](interfacebalanceresponse)\>

#### Defined in

[api.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L40)

***

### getNFTInfo()

```ts
getNFTInfo(params: NFTRequestParams): Promise<NFTRequestAnswer>
```

#### Parameters

##### params

[`NFTRequestParams`](interfacenftrequestparams)

#### Returns

`Promise`\<[`NFTRequestAnswer`](interfacenftrequestanswer)\>

#### Defined in

[api.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L47)

***

### getProof()

```ts
getProof(params: JobId): Promise<JobResult>
```

#### Parameters

##### params

[`JobId`](interfacejobid)

#### Returns

`Promise`\<[`JobResult`](interfacejobresult)\>

#### Defined in

[api.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L75)

***

### getTokenInfo()

```ts
getTokenInfo(tokenAddress: string): Promise<TokenState>
```

#### Parameters

##### tokenAddress

`string`

#### Returns

`Promise`\<[`TokenState`](interfacetokenstate)\>

#### Defined in

[api.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L33)

***

### proveTokenTransaction()

```ts
proveTokenTransaction(params: ProveTokenTransaction): Promise<JobId>
```

#### Parameters

##### params

[`ProveTokenTransaction`](interfaceprovetokentransaction)

#### Returns

`Promise`\<[`JobId`](interfacejobid)\>

#### Defined in

[api.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L68)

***

### sleep()

```ts
sleep(ms: number): Promise<unknown>
```

#### Parameters

##### ms

`number`

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[api.ts:198](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L198)

***

### tokenTransaction()

```ts
tokenTransaction(params: TransactionTokenParams): Promise<TokenTransaction>
```

#### Parameters

##### params

[`TransactionTokenParams`](interfacetransactiontokenparams)

#### Returns

`Promise`\<[`TokenTransaction`](interfacetokentransaction)\>

#### Defined in

[api.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L61)

***

### txStatus()

```ts
txStatus(params: TransactionStatusParams): Promise<TransactionStatus>
```

#### Parameters

##### params

[`TransactionStatusParams`](interfacetransactionstatusparams)

#### Returns

`Promise`\<[`TransactionStatus`](interfacetransactionstatus)\>

#### Defined in

[api.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L89)

***

### waitForJobResult()

```ts
waitForJobResult(jobId: string): Promise<undefined | string>
```

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[api.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L96)

***

### waitForTransaction()

```ts
waitForTransaction(hash: string, timeout: number): Promise<void>
```

#### Parameters

##### hash

`string`

##### timeout

`number` = `...`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api.ts:124](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L124)
