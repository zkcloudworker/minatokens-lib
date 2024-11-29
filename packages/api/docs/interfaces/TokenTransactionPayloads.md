[**@minatokens/api**](../README.md)

***

[@minatokens/api](../globals.md) / TokenTransactionPayloads

# Interface: TokenTransactionPayloads

## Extends

- [`TransactionPayloads`](TransactionPayloads.md)

## Extended by

- [`DeployTransaction`](DeployTransaction.md)
- [`TokenTransaction`](TokenTransaction.md)

## Properties

### developerAddress?

> `optional` **developerAddress**: `string`

#### Defined in

[types.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L75)

***

### developerFee?

> `optional` **developerFee**: `number`

#### Defined in

[types.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L76)

***

### fee

> **fee**: `number`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`fee`](TransactionPayloads.md#fee)

#### Defined in

[types.ts:5](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L5)

***

### memo

> **memo**: `string`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`memo`](TransactionPayloads.md#memo)

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

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`minaSignerPayload`](TransactionPayloads.md#minasignerpayload)

#### Defined in

[types.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L15)

***

### nonce

> **nonce**: `number`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`nonce`](TransactionPayloads.md#nonce-1)

#### Defined in

[types.ts:3](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L3)

***

### proverPayload

> **proverPayload**: `string`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`proverPayload`](TransactionPayloads.md#proverpayload)

#### Defined in

[types.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L24)

***

### sender

> **sender**: `string`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`sender`](TransactionPayloads.md#sender)

#### Defined in

[types.ts:2](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L2)

***

### sendTransaction?

> `optional` **sendTransaction**: `boolean`

#### Defined in

[types.ts:77](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L77)

***

### signedData

> **signedData**: `string`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`signedData`](TransactionPayloads.md#signeddata)

#### Defined in

[types.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L25)

***

### symbol

> **symbol**: `string`

#### Defined in

[types.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L73)

***

### tokenAddress

> **tokenAddress**: `string`

#### Defined in

[types.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L72)

***

### transaction

> **transaction**: `string`

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`transaction`](TransactionPayloads.md#transaction)

#### Defined in

[types.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L26)

***

### txType

> **txType**: [`FungibleTokenTransactionType`](../type-aliases/FungibleTokenTransactionType.md) \| `"deploy"`

#### Defined in

[types.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L71)

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

#### Inherited from

[`TransactionPayloads`](TransactionPayloads.md).[`walletPayload`](TransactionPayloads.md#walletpayload)

#### Defined in

[types.ts:6](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L6)

***

### whitelist?

> `optional` **whitelist**: `string`

#### Defined in

[types.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L74)
