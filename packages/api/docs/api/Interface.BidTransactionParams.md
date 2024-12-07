---
title: BidTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.BidTransactionParams
order: 8
---

# Interface: BidTransactionParams

## Properties overview

- amount:  number; [↗](#amount)
- price:  number; [↗](#price)
- sender:  string; [↗](#sender)
- tokenAddress:  string; [↗](#tokenaddress)
- txType:  "bid"; [↗](#txtype)

## Extends

- [`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams)

## Properties

### amount

```ts
amount: number;
```

#### Defined in

[transaction.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L92)

***

### bidPrivateKey?

```ts
optional bidPrivateKey: string;
```

#### Defined in

[transaction.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L91)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`developerFee`](Interface.DeployedTokenTransactionBaseParams.md#developerfee)

#### Defined in

[transaction.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L24)

***

### memo?

```ts
optional memo: string;
```

#### Inherited from

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`memo`](Interface.DeployedTokenTransactionBaseParams.md#memo)

#### Defined in

[transaction.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L23)

***

### nonce?

```ts
optional nonce: number;
```

#### Inherited from

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`nonce`](Interface.DeployedTokenTransactionBaseParams.md#nonce)

#### Defined in

[transaction.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L22)

***

### price

```ts
price: number;
```

#### Defined in

[transaction.ts:93](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L93)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`sender`](Interface.DeployedTokenTransactionBaseParams.md#sender)

#### Defined in

[transaction.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L21)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Inherited from

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`tokenAddress`](Interface.DeployedTokenTransactionBaseParams.md#tokenaddress)

#### Defined in

[transaction.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L56)

***

### txType

```ts
txType: "bid";
```

#### Overrides

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`txType`](Interface.DeployedTokenTransactionBaseParams.md#txtype)

#### Defined in

[transaction.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L90)

***

### whitelist?

```ts
optional whitelist: string | {
  address: string;
  amount: number;
 }[];
```

#### Defined in

[transaction.ts:94](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L94)
