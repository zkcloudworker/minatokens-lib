---
title: TransactionPayloads
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TransactionPayloads
order: 108
---

# Type Alias: TransactionPayloads

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
  zkappCommand: unknown;
}; [↗](#minasignerpayload)
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

```ts
type TransactionPayloads = {
  fee: number;
  memo: string;
  minaSignerPayload: {
     feePayer: {
        fee: number;
        feePayer: string;
        memo: string;
        nonce: number;
       };
     zkappCommand: unknown;
    };
  nonce: number;
  proverPayload: string;
  sender: string;
  sendTransaction: boolean;
  signedData: string;
  transaction: string;
  walletPayload: {
     feePayer: {
        fee: number;
        memo: string;
       };
     nonce: number;
     onlySign: boolean;
     transaction: string;
    };
};
```

## Type declaration

### fee

```ts
fee: number;
```

The fee for the transaction.

### memo

```ts
memo: string;
```

A memo for the transaction.

### minaSignerPayload

```ts
minaSignerPayload: {
  feePayer: {
     fee: number;
     feePayer: string;
     memo: string;
     nonce: number;
    };
  zkappCommand: unknown;
};
```

#### minaSignerPayload.feePayer

```ts
feePayer: {
  fee: number;
  feePayer: string;
  memo: string;
  nonce: number;
};
```

#### minaSignerPayload.feePayer.fee?

```ts
optional fee: number;
```

The fee for the transaction.

#### minaSignerPayload.feePayer.feePayer?

```ts
optional feePayer: string;
```

The fee payer's address.

#### minaSignerPayload.feePayer.memo?

```ts
optional memo: string;
```

A memo for the transaction.

#### minaSignerPayload.feePayer.nonce?

```ts
optional nonce: number;
```

The nonce for the transaction.

#### minaSignerPayload.zkappCommand

```ts
zkappCommand: unknown;
```

The zkApp command data.

### nonce

```ts
nonce: number;
```

The nonce for the transaction.

### proverPayload

```ts
proverPayload: string;
```

The payload for the prover.

### sender

```ts
sender: string;
```

The address initiating the transaction.

### sendTransaction?

```ts
optional sendTransaction: boolean;
```

Optional. Whether to broadcast the transaction after proving.

### signedData

```ts
signedData: string;
```

The signed data for the transaction.

### transaction

```ts
transaction: string;
```

The raw transaction data.

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

#### walletPayload.feePayer?

```ts
optional feePayer: {
  fee: number;
  memo: string;
};
```

#### walletPayload.feePayer.fee?

```ts
optional fee: number;
```

The fee for the transaction.

#### walletPayload.feePayer.memo?

```ts
optional memo: string;
```

A memo for the transaction.

#### walletPayload.nonce?

```ts
optional nonce: number;
```

The nonce for the transaction.

#### walletPayload.onlySign?

```ts
optional onlySign: boolean;
```

Indicates if only signature is needed.

#### walletPayload.transaction?

```ts
optional transaction: string;
```

The transaction data.

## Defined in

[packages/api/src/client/types.gen.ts:766](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L766)
