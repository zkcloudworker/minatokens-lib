[**@minatokens/api**](../README.md)

***

[@minatokens/api](../globals.md) / MinaTokensAPI

# Class: MinaTokensAPI

## Constructors

### new MinaTokensAPI()

> **new MinaTokensAPI**(`params`): [`MinaTokensAPI`](MinaTokensAPI.md)

#### Parameters

##### params

###### params.apiKey

`string`

###### params.chain

`"mainnet"` \| `"devnet"` \| `"zeko"` \| `"local"`

#### Returns

[`MinaTokensAPI`](MinaTokensAPI.md)

#### Defined in

[api.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L24)

## Properties

### apiKey

> `readonly` **apiKey**: `string`

#### Defined in

[api.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L22)

***

### chain

> `readonly` **chain**: `"mainnet"` \| `"devnet"` \| `"zeko"` \| `"local"`

#### Defined in

[api.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L21)

## Methods

### apiCall()

> **apiCall**\<`TParams`, `TResponse`\>(`params`): `Promise`\<`TResponse`\>

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

> **buildDeployTokenTransaction**(`params`): `Promise`\<[`DeployTransaction`](../interfaces/DeployTransaction.md)\>

#### Parameters

##### params

[`DeployTokenParams`](../interfaces/DeployTokenParams.md)

#### Returns

`Promise`\<[`DeployTransaction`](../interfaces/DeployTransaction.md)\>

#### Defined in

[api.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L54)

***

### faucet()

> **faucet**(`params`): `Promise`\<[`FaucetResponse`](../interfaces/FaucetResponse.md)\>

#### Parameters

##### params

[`FaucetParams`](../interfaces/FaucetParams.md)

#### Returns

`Promise`\<[`FaucetResponse`](../interfaces/FaucetResponse.md)\>

#### Defined in

[api.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L82)

***

### getBalance()

> **getBalance**(`params`): `Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

#### Parameters

##### params

[`BalanceRequestParams`](../interfaces/BalanceRequestParams.md)

#### Returns

`Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

#### Defined in

[api.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L40)

***

### getNFTInfo()

> **getNFTInfo**(`params`): `Promise`\<[`NFTRequestAnswer`](../interfaces/NFTRequestAnswer.md)\>

#### Parameters

##### params

[`NFTRequestParams`](../interfaces/NFTRequestParams.md)

#### Returns

`Promise`\<[`NFTRequestAnswer`](../interfaces/NFTRequestAnswer.md)\>

#### Defined in

[api.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L47)

***

### getProof()

> **getProof**(`params`): `Promise`\<[`JobResult`](../interfaces/JobResult.md)\>

#### Parameters

##### params

[`JobId`](../interfaces/JobId.md)

#### Returns

`Promise`\<[`JobResult`](../interfaces/JobResult.md)\>

#### Defined in

[api.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L75)

***

### getTokenInfo()

> **getTokenInfo**(`tokenAddress`): `Promise`\<[`TokenState`](../interfaces/TokenState.md)\>

#### Parameters

##### tokenAddress

`string`

#### Returns

`Promise`\<[`TokenState`](../interfaces/TokenState.md)\>

#### Defined in

[api.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L33)

***

### proveTokenTransaction()

> **proveTokenTransaction**(`params`): `Promise`\<[`JobId`](../interfaces/JobId.md)\>

#### Parameters

##### params

[`ProveTokenTransaction`](../interfaces/ProveTokenTransaction.md)

#### Returns

`Promise`\<[`JobId`](../interfaces/JobId.md)\>

#### Defined in

[api.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L68)

***

### sleep()

> **sleep**(`ms`): `Promise`\<`unknown`\>

#### Parameters

##### ms

`number`

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[api.ts:198](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L198)

***

### tokenTransaction()

> **tokenTransaction**(`params`): `Promise`\<[`TokenTransaction`](../interfaces/TokenTransaction.md)\>

#### Parameters

##### params

[`TransactionTokenParams`](../interfaces/TransactionTokenParams.md)

#### Returns

`Promise`\<[`TokenTransaction`](../interfaces/TokenTransaction.md)\>

#### Defined in

[api.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L61)

***

### txStatus()

> **txStatus**(`params`): `Promise`\<[`TransactionStatus`](../interfaces/TransactionStatus.md)\>

#### Parameters

##### params

[`TransactionStatusParams`](../interfaces/TransactionStatusParams.md)

#### Returns

`Promise`\<[`TransactionStatus`](../interfaces/TransactionStatus.md)\>

#### Defined in

[api.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L89)

***

### waitForJobResult()

> **waitForJobResult**(`jobId`): `Promise`\<`undefined` \| `string`\>

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[api.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L96)

***

### waitForTransaction()

> **waitForTransaction**(`hash`, `timeout`): `Promise`\<`void`\>

#### Parameters

##### hash

`string`

##### timeout

`number` = `...`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api.ts:124](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L124)
