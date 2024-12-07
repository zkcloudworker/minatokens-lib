---
title: TokenTransactionPayloads
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TokenTransactionPayloads
order: 32
---

# Interface: TokenTransactionPayloads

## Properties overview

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
- txType:  FungibleTokenTransactionType | "launch"; [↗](#txtype)
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

- [`TransactionPayloads`](interfacetransactionpayloads)

## Extended by

- [`DeployTransaction`](interfacedeploytransaction)
- [`TokenTransaction`](interfacetokentransaction)

## Properties

### developerAddress?

```ts
optional developerAddress: string;
```

#### Defined in

[types.ts:66](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L66)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Defined in

[types.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L67)

***

### fee

```ts
fee: number;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`fee`](Interface.TransactionPayloads.md#fee)

#### Defined in

[types.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L37)

***

### memo

```ts
memo: string;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`memo`](Interface.TransactionPayloads.md#memo)

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

[`TransactionPayloads`](interfacetransactionpayloads).[`minaSignerPayload`](Interface.TransactionPayloads.md#minasignerpayload)

#### Defined in

[types.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L47)

***

### nonce

```ts
nonce: number;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`nonce`](Interface.TransactionPayloads.md#nonce-1)

#### Defined in

[types.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L35)

***

### proverPayload

```ts
proverPayload: string;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`proverPayload`](Interface.TransactionPayloads.md#proverpayload)

#### Defined in

[types.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L56)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`sender`](Interface.TransactionPayloads.md#sender)

#### Defined in

[types.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L34)

***

### sendTransaction?

```ts
optional sendTransaction: boolean;
```

#### Defined in

[types.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L68)

***

### signedData

```ts
signedData: string;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`signedData`](Interface.TransactionPayloads.md#signeddata)

#### Defined in

[types.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L57)

***

### symbol

```ts
symbol: string;
```

#### Defined in

[types.ts:64](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L64)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Defined in

[types.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L63)

***

### transaction

```ts
transaction: string;
```

#### Inherited from

[`TransactionPayloads`](interfacetransactionpayloads).[`transaction`](Interface.TransactionPayloads.md#transaction)

#### Defined in

[types.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L58)

***

### txType

```ts
txType: FungibleTokenTransactionType | "launch";
```

#### Defined in

[types.ts:62](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L62)

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

[`TransactionPayloads`](interfacetransactionpayloads).[`walletPayload`](Interface.TransactionPayloads.md#walletpayload)

#### Defined in

[types.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L38)

***

### whitelist?

```ts
optional whitelist: string;
```

#### Defined in

[types.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L65)
