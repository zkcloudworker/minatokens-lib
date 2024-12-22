---
title: TokenTransactionBaseParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.TokenTransactionBaseParams
order: 98
---

# Type Alias: TokenTransactionBaseParams

## Properties overview

- sender:  string; [↗](#sender)

```ts
type TokenTransactionBaseParams = {
  developerFee: number;
  memo: string;
  nonce: number;
  sender: string;
  senderPrivateKey: string;
  tokenAddress: string;
  txType: string;
};
```

## Type declaration

### developerFee?

```ts
optional developerFee: number;
```

Optional. The developer fee for the transaction.

### memo?

```ts
optional memo: string;
```

Optional. A memo for the transaction.

### nonce?

```ts
optional nonce: number;
```

Optional. The nonce for the transaction.

### sender

```ts
sender: string;
```

The address (public key) of the sender.

### senderPrivateKey?

```ts
optional senderPrivateKey: string;
```

The private key of the sender. It is NOT recommended to use this field. Please use the `sender` field instead. Use this field at your own risk and only if you know what you are doing and do not have access to mina-signer or wallet to get the signature.

### tokenAddress?

```ts
optional tokenAddress: string;
```

Optional. The address of the token contract.

### txType?

```ts
optional txType: string;
```

Type of the token transaction.

## Defined in

[packages/api/src/client/types.gen.ts:604](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L604)
