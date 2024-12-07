---
title: DeployTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.DeployTransaction
order: 11
---

# Interface: DeployTransaction

## Properties overview

- adminContractAddress:  string; [↗](#admincontractaddress)
- adminType:  "standard" | "advanced"; [↗](#admintype)
- fee:  number; [↗](#fee)
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
- tokenAddress:  string; [↗](#tokenaddress)
- transaction:  string; [↗](#transaction)
- txType:  "launch"; [↗](#txtype)
- uri:  string; [↗](#uri)
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

### adminContractAddress

```ts
adminContractAddress: string;
```

#### Defined in

[types.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L73)

***

### adminContractPrivateKey?

```ts
optional adminContractPrivateKey: string;
```

#### Defined in

[types.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L75)

***

### adminType

```ts
adminType: "standard" | "advanced";
```

#### Defined in

[types.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L72)

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

### tokenAddress

```ts
tokenAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`tokenAddress`](Interface.TokenTransactionPayloads.md#tokenaddress)

#### Defined in

[types.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L63)

***

### tokenContractPrivateKey?

```ts
optional tokenContractPrivateKey: string;
```

#### Defined in

[types.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L74)

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
txType: "launch";
```

#### Overrides

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`txType`](Interface.TokenTransactionPayloads.md#txtype)

#### Defined in

[types.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L71)

***

### uri

```ts
uri: string;
```

#### Defined in

[types.ts:76](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L76)

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
