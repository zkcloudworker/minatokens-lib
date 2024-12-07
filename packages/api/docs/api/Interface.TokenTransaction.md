---
title: TokenTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TokenTransaction
order: 30
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

[types.ts:83](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L83)

***

### developerAddress?

```ts
optional developerAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`developerAddress`](Interface.TokenTransactionPayloads.md#developeraddress)

#### Defined in

[types.ts:66](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L66)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`developerFee`](Interface.TokenTransactionPayloads.md#developerfee)

#### Defined in

[types.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L67)

***

### fee

```ts
fee: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`fee`](Interface.TokenTransactionPayloads.md#fee)

#### Defined in

[types.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L37)

***

### from

```ts
from: string;
```

#### Defined in

[types.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L82)

***

### memo

```ts
memo: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`memo`](Interface.TokenTransactionPayloads.md#memo)

#### Defined in

[types.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L36)

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

[types.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L47)

***

### nonce

```ts
nonce: number;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`nonce`](Interface.TokenTransactionPayloads.md#nonce-1)

#### Defined in

[types.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L35)

***

### price?

```ts
optional price: number;
```

#### Defined in

[types.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L84)

***

### proverPayload

```ts
proverPayload: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`proverPayload`](Interface.TokenTransactionPayloads.md#proverpayload)

#### Defined in

[types.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L56)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`sender`](Interface.TokenTransactionPayloads.md#sender)

#### Defined in

[types.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L34)

***

### sendTransaction?

```ts
optional sendTransaction: boolean;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`sendTransaction`](Interface.TokenTransactionPayloads.md#sendtransaction)

#### Defined in

[types.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L68)

***

### signedData

```ts
signedData: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`signedData`](Interface.TokenTransactionPayloads.md#signeddata)

#### Defined in

[types.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L57)

***

### symbol

```ts
symbol: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`symbol`](Interface.TokenTransactionPayloads.md#symbol)

#### Defined in

[types.ts:64](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L64)

***

### to

```ts
to: string;
```

#### Defined in

[types.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L80)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`tokenAddress`](Interface.TokenTransactionPayloads.md#tokenaddress)

#### Defined in

[types.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L63)

***

### toPrivateKey?

```ts
optional toPrivateKey: string;
```

#### Defined in

[types.ts:81](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L81)

***

### transaction

```ts
transaction: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`transaction`](Interface.TokenTransactionPayloads.md#transaction)

#### Defined in

[types.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L58)

***

### txType

```ts
txType: FungibleTokenTransactionType;
```

#### Overrides

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`txType`](Interface.TokenTransactionPayloads.md#txtype)

#### Defined in

[types.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L79)

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

[types.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L38)

***

### whitelist?

```ts
optional whitelist: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`whitelist`](Interface.TokenTransactionPayloads.md#whitelist)

#### Defined in

[types.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L65)
