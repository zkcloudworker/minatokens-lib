---
title: TokenTransactionBaseParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TokenTransactionBaseParams
order: 31
---

# Interface: TokenTransactionBaseParams

## Properties overview

- sender:  string; [↗](#sender)
- txType:  FungibleTokenTransactionType | "launch"; [↗](#txtype)

## Extended by

- [`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams)
- [`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams)

## Properties

### developerFee?

```ts
optional developerFee: number;
```

#### Defined in

[transaction.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L24)

***

### memo?

```ts
optional memo: string;
```

#### Defined in

[transaction.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L23)

***

### nonce?

```ts
optional nonce: number;
```

#### Defined in

[transaction.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L22)

***

### sender

```ts
sender: string;
```

#### Defined in

[transaction.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L21)

***

### txType

```ts
txType: FungibleTokenTransactionType | "launch";
```

#### Defined in

[transaction.ts:20](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L20)
