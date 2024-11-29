[**@minatokens/api**](../README.md)

***

[@minatokens/api](../globals.md) / TokenTransaction

# Interface: TokenTransaction

## Extends

- [`TokenTransactionPayloads`](TokenTransactionPayloads.md)

## Properties

### amount?

> `optional` **amount**: `number`

#### Defined in

[types.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L91)

***

### developerAddress?

> `optional` **developerAddress**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`developerAddress`](TokenTransactionPayloads.md#developeraddress)

#### Defined in

[types.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L75)

***

### developerFee?

> `optional` **developerFee**: `number`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`developerFee`](TokenTransactionPayloads.md#developerfee)

#### Defined in

[types.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L76)

***

### fee

> **fee**: `number`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`fee`](TokenTransactionPayloads.md#fee)

#### Defined in

[types.ts:5](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L5)

***

### from

> **from**: `string`

#### Defined in

[types.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L90)

***

### memo

> **memo**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`memo`](TokenTransactionPayloads.md#memo)

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

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`minaSignerPayload`](TokenTransactionPayloads.md#minasignerpayload)

#### Defined in

[types.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L15)

***

### nonce

> **nonce**: `number`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`nonce`](TokenTransactionPayloads.md#nonce-1)

#### Defined in

[types.ts:3](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L3)

***

### price?

> `optional` **price**: `number`

#### Defined in

[types.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L92)

***

### proverPayload

> **proverPayload**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`proverPayload`](TokenTransactionPayloads.md#proverpayload)

#### Defined in

[types.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L24)

***

### sender

> **sender**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`sender`](TokenTransactionPayloads.md#sender)

#### Defined in

[types.ts:2](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L2)

***

### sendTransaction?

> `optional` **sendTransaction**: `boolean`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`sendTransaction`](TokenTransactionPayloads.md#sendtransaction)

#### Defined in

[types.ts:77](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L77)

***

### signedData

> **signedData**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`signedData`](TokenTransactionPayloads.md#signeddata)

#### Defined in

[types.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L25)

***

### symbol

> **symbol**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`symbol`](TokenTransactionPayloads.md#symbol)

#### Defined in

[types.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L73)

***

### to

> **to**: `string`

#### Defined in

[types.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L88)

***

### tokenAddress

> **tokenAddress**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`tokenAddress`](TokenTransactionPayloads.md#tokenaddress)

#### Defined in

[types.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L72)

***

### toPrivateKey?

> `optional` **toPrivateKey**: `string`

#### Defined in

[types.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L89)

***

### transaction

> **transaction**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`transaction`](TokenTransactionPayloads.md#transaction)

#### Defined in

[types.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L26)

***

### txType

> **txType**: [`FungibleTokenTransactionType`](../type-aliases/FungibleTokenTransactionType.md)

#### Overrides

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`txType`](TokenTransactionPayloads.md#txtype)

#### Defined in

[types.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L87)

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

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`walletPayload`](TokenTransactionPayloads.md#walletpayload)

#### Defined in

[types.ts:6](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L6)

***

### whitelist?

> `optional` **whitelist**: `string`

#### Inherited from

[`TokenTransactionPayloads`](TokenTransactionPayloads.md).[`whitelist`](TokenTransactionPayloads.md#whitelist)

#### Defined in

[types.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L74)
