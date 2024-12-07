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
- buildAirdrop() [↗](#buildairdrop)
- buildTransaction() [↗](#buildtransaction)
- faucet() [↗](#faucet)
- getBalance() [↗](#getbalance)
- getNFTInfo() [↗](#getnftinfo)
- getProof() [↗](#getproof)
- getTokenInfo() [↗](#gettokeninfo)
- proveTransactions() [↗](#provetransactions)
- sleep() [↗](#sleep)
- txStatus() [↗](#txstatus)
- waitForProofs() [↗](#waitforproofs)
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

###### apiKey

`string`

###### chain

`"mainnet"` \| `"devnet"` \| `"zeko"` \| `"local"`

#### Returns

[`MinaTokensAPI`](classminatokensapi)

#### Defined in

[api.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L61)

## Properties

### apiKey

```ts
readonly apiKey: string;
```

#### Defined in

[api.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L59)

***

### chain

```ts
readonly chain: "mainnet" | "devnet" | "zeko" | "local";
```

#### Defined in

[api.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L58)

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

###### callParams

`TParams`

###### endpoint

`string`

#### Returns

`Promise`\<`TResponse`\>

#### Defined in

[api.ts:201](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L201)

***

### buildAirdrop()

```ts
buildAirdrop(params: AirdropTransactionParams): Promise<TokenTransactions>
```

#### Parameters

##### params

[`AirdropTransactionParams`](interfaceairdroptransactionparams)

#### Returns

`Promise`\<[`TokenTransactions`](interfacetokentransactions)\>

#### Defined in

[api.ts:101](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L101)

***

### buildTransaction()

```ts
buildTransaction(params: TransactionParams): Promise<DeployTransaction | TokenTransaction>
```

#### Parameters

##### params

[`TransactionParams`](typealiastransactionparams)

#### Returns

`Promise`\<[`DeployTransaction`](interfacedeploytransaction) \| [`TokenTransaction`](interfacetokentransaction)\>

#### Defined in

[api.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L91)

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

[api.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L122)

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

[api.ts:77](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L77)

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

[api.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L84)

***

### getProof()

```ts
getProof(params: JobId): Promise<JobResults>
```

#### Parameters

##### params

[`JobId`](interfacejobid)

#### Returns

`Promise`\<[`JobResults`](typealiasjobresults)\>

#### Defined in

[api.ts:115](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L115)

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

[api.ts:70](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L70)

***

### proveTransactions()

```ts
proveTransactions(params: ProveTokenTransactions): Promise<JobId>
```

#### Parameters

##### params

[`ProveTokenTransactions`](interfaceprovetokentransactions)

#### Returns

`Promise`\<[`JobId`](interfacejobid)\>

#### Defined in

[api.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L108)

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

[api.ts:253](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L253)

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

[api.ts:129](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L129)

***

### waitForProofs()

```ts
waitForProofs(jobId: string): Promise<undefined | (undefined | string)[]>
```

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<`undefined` \| (`undefined` \| `string`)[]\>

#### Defined in

[api.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L136)

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

[api.ts:168](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L168)
