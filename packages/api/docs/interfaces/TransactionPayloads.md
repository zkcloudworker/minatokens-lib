[**@minatokens/api**](../README.md)

***

[@minatokens/api](../globals.md) / TransactionPayloads

# Interface: TransactionPayloads

## Extended by

- [`TokenTransactionPayloads`](TokenTransactionPayloads.md)

## Properties

### fee

> **fee**: `number`

#### Defined in

[types.ts:5](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L5)

***

### memo

> **memo**: `string`

#### Defined in

[types.ts:4](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L4)

***

### minaSignerPayload

> **minaSignerPayload**: `object`

#### feePayer

> **feePayer**: `object`

##### feePayer.fee

> **fee**: `number`

##### feePayer.feePayer

> **feePayer**: `string`

##### feePayer.memo

> **memo**: `string`

##### feePayer.nonce

> **nonce**: `number`

#### zkappCommand

> **zkappCommand**: `any`

#### Defined in

[types.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L15)

***

### nonce

> **nonce**: `number`

#### Defined in

[types.ts:3](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L3)

***

### proverPayload

> **proverPayload**: `string`

#### Defined in

[types.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L24)

***

### sender

> **sender**: `string`

#### Defined in

[types.ts:2](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L2)

***

### signedData

> **signedData**: `string`

#### Defined in

[types.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L25)

***

### transaction

> **transaction**: `string`

#### Defined in

[types.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L26)

***

### walletPayload

> **walletPayload**: `object`

#### feePayer

> **feePayer**: `object`

##### feePayer.fee

> **fee**: `number`

##### feePayer.memo

> **memo**: `string`

#### nonce

> **nonce**: `number`

#### onlySign

> **onlySign**: `boolean`

#### transaction

> **transaction**: `string`

#### Defined in

[types.ts:6](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L6)
