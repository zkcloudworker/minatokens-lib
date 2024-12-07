---
title: UpdateBidWhitelistTransactionParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.UpdateBidWhitelistTransactionParams
order: 41
---

# Interface: UpdateBidWhitelistTransactionParams

## Properties overview

- bidAddress:  string; [↗](#bidaddress)
- sender:  string; [↗](#sender)
- tokenAddress:  string; [↗](#tokenaddress)
- txType:  "updateBidWhitelist"; [↗](#txtype)
- whitelist:  string | {
  address: string;
  amount: number;
 }[]; [↗](#whitelist)

## Extends

- [`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams)

## Properties

### bidAddress

```ts
bidAddress: string;
```

#### Defined in

[transaction.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L128)

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
txType: "updateBidWhitelist";
```

#### Overrides

[`DeployedTokenTransactionBaseParams`](interfacedeployedtokentransactionbaseparams).[`txType`](Interface.DeployedTokenTransactionBaseParams.md#txtype)

#### Defined in

[transaction.ts:127](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L127)

***

### whitelist

```ts
whitelist: string | {
  address: string;
  amount: number;
 }[];
```

#### Defined in

[transaction.ts:129](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L129)
