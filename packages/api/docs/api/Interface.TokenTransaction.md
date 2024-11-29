---
title: TokenTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TokenTransaction
order: 19
---

# Interface: TokenTransaction

## Properties overview

- fee:  number; [↗](#fee)
- from:  string; [↗](#from)
- memo:  string; [↗](#memo)
- minaSignerPayload:  {
  feePayer: {
     fee: number;
     feePayer: string;
     memo: string;
     nonce: number;
    };
  zkappCommand: any;
}; [↗](#minasignerpayload)
- feePayer:  {
  fee: number;
  feePayer: string;
  memo: string;
  nonce: number;
}; [↗](#feepayer)
- zkappCommand:  any; [↗](#zkappcommand)
- nonce:  number; [↗](#nonce)
- proverPayload:  string; [↗](#proverpayload)
- sender:  string; [↗](#sender)
- signedData:  string; [↗](#signeddata)
- symbol:  string; [↗](#symbol)
- to:  string; [↗](#to)
- tokenAddress:  string; [↗](#tokenaddress)
- transaction:  string; [↗](#transaction)
- txType:  FungibleTokenTransactionType; [↗](#txtype)
- walletPayload:  {
  feePayer: {
     fee: number;
     memo: string;
    };
  nonce: number;
  onlySign: boolean;
  transaction: string;
}; [↗](#walletpayload)
- feePayer:  {
  fee: number;
  memo: string;
}; [↗](#feepayer)
- nonce:  number; [↗](#nonce)
- onlySign:  boolean; [↗](#onlysign)
- transaction:  string; [↗](#transaction)

## Extends

- [`TokenTransactionPayloads`](interfacetokentransactionpayloads)

## Properties

### amount?

```ts
optional amount: number;
```

#### Defined in

[types.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L91)

***

### developerAddress?

```ts
optional developerAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`developerAddress`](Interface.TokenTransactionPayloads.md#developeraddress)

#### Defined in

[types.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L75)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`developerFee`](Interface.TokenTransactionPayloads.md#developerfee)

#### Defined in

[types.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L76)

***

### fee

```ts
fee: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`fee`](Interface.TokenTransactionPayloads.md#fee)

#### Defined in

[types.ts:5](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L5)

***

### from

```ts
from: string;
```

#### Defined in

[types.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L90)

***

### memo

```ts
memo: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`memo`](Interface.TokenTransactionPayloads.md#memo)

#### Defined in

[types.ts:4](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L4)

***

### minaSignerPayload

```ts
minaSignerPayload: {
  feePayer: {
     fee: number;
     feePayer: string;
     memo: string;
     nonce: number;
    };
  zkappCommand: any;
};
```

#### feePayer

```ts
feePayer: {
  fee: number;
  feePayer: string;
  memo: string;
  nonce: number;
};
```

##### feePayer.fee

```ts
fee: number;
```

##### feePayer.feePayer

```ts
feePayer: string;
```

##### feePayer.memo

```ts
memo: string;
```

##### feePayer.nonce

```ts
nonce: number;
```

#### zkappCommand

```ts
zkappCommand: any;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`minaSignerPayload`](Interface.TokenTransactionPayloads.md#minasignerpayload)

#### Defined in

[types.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L15)

***

### nonce

```ts
nonce: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`nonce`](Interface.TokenTransactionPayloads.md#nonce-1)

#### Defined in

[types.ts:3](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L3)

***

### price?

```ts
optional price: number;
```

#### Defined in

[types.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L92)

***

### proverPayload

```ts
proverPayload: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`proverPayload`](Interface.TokenTransactionPayloads.md#proverpayload)

#### Defined in

[types.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L24)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`sender`](Interface.TokenTransactionPayloads.md#sender)

#### Defined in

[types.ts:2](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L2)

***

### sendTransaction?

```ts
optional sendTransaction: boolean;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`sendTransaction`](Interface.TokenTransactionPayloads.md#sendtransaction)

#### Defined in

[types.ts:77](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L77)

***

### signedData

```ts
signedData: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`signedData`](Interface.TokenTransactionPayloads.md#signeddata)

#### Defined in

[types.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L25)

***

### symbol

```ts
symbol: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`symbol`](Interface.TokenTransactionPayloads.md#symbol)

#### Defined in

[types.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L73)

***

### to

```ts
to: string;
```

#### Defined in

[types.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L88)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`tokenAddress`](Interface.TokenTransactionPayloads.md#tokenaddress)

#### Defined in

[types.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L72)

***

### toPrivateKey?

```ts
optional toPrivateKey: string;
```

#### Defined in

[types.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L89)

***

### transaction

```ts
transaction: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`transaction`](Interface.TokenTransactionPayloads.md#transaction)

#### Defined in

[types.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L26)

***

### txType

```ts
txType: FungibleTokenTransactionType;
```

#### Overrides

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`txType`](Interface.TokenTransactionPayloads.md#txtype)

#### Defined in

[types.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L87)

***

### walletPayload

```ts
walletPayload: {
  feePayer: {
     fee: number;
     memo: string;
    };
  nonce: number;
  onlySign: boolean;
  transaction: string;
};
```

#### feePayer

```ts
feePayer: {
  fee: number;
  memo: string;
};
```

##### feePayer.fee

```ts
fee: number;
```

##### feePayer.memo

```ts
memo: string;
```

#### nonce

```ts
nonce: number;
```

#### onlySign

```ts
onlySign: boolean;
```

#### transaction

```ts
transaction: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`walletPayload`](Interface.TokenTransactionPayloads.md#walletpayload)

#### Defined in

[types.ts:6](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L6)

***

### whitelist?

```ts
optional whitelist: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`whitelist`](Interface.TokenTransactionPayloads.md#whitelist)

#### Defined in

[types.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L74)
