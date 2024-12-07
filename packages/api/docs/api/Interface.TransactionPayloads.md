---
title: TransactionPayloads
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TransactionPayloads
order: 34
---

# Interface: TransactionPayloads

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
- transaction:  string; [↗](#transaction)
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

## Extended by

- [`TokenTransactionPayloads`](interfacetokentransactionpayloads)

## Properties

### fee

```ts
fee: number;
```

#### Defined in

[types.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L37)

***

### memo

```ts
memo: string;
```

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

#### Defined in

[types.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L47)

***

### nonce

```ts
nonce: number;
```

#### Defined in

[types.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L35)

***

### proverPayload

```ts
proverPayload: string;
```

#### Defined in

[types.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L56)

***

### sender

```ts
sender: string;
```

#### Defined in

[types.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L34)

***

### signedData

```ts
signedData: string;
```

#### Defined in

[types.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L57)

***

### transaction

```ts
transaction: string;
```

#### Defined in

[types.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L58)

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

#### Defined in

[types.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L38)
