---
title: DeployTransaction
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.DeployTransaction
order: 8
---

# Interface: DeployTransaction

## Properties overview

- adminContractAddress:  string; [↗](#admincontractaddress)
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
- txType:  "deploy"; [↗](#txtype)
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

[types.ts:81](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L81)

***

### adminContractPrivateKey?

```ts
optional adminContractPrivateKey: string;
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

### tokenAddress

```ts
tokenAddress: string;
```

#### Inherited from

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`tokenAddress`](Interface.TokenTransactionPayloads.md#tokenaddress)

#### Defined in

[types.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L72)

***

### tokenContractPrivateKey?

```ts
optional tokenContractPrivateKey: string;
```

#### Defined in

[types.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L82)

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
txType: "deploy";
```

#### Overrides

[`TokenTransactionPayloads`](interfacetokentransactionpayloads).[`txType`](Interface.TokenTransactionPayloads.md#txtype)

#### Defined in

[types.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L80)

***

### uri

```ts
uri: string;
```

#### Defined in

[types.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L84)

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
