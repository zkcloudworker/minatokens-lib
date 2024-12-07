---
title: LaunchTokenAdvancedAdminParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.LaunchTokenAdvancedAdminParams
order: 16
---

# Interface: LaunchTokenAdvancedAdminParams

## Properties overview

- adminContract:  "advanced"; [↗](#admincontract)
- canMint:  "whitelist" | "anyone"; [↗](#canmint)
- sender:  string; [↗](#sender)
- symbol:  string; [↗](#symbol)
- txType:  "launch"; [↗](#txtype)
- uri:  string | TokenInfo; [↗](#uri)

## Extends

- [`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams)

## Properties

### adminContract

```ts
adminContract: "advanced";
```

#### Overrides

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`adminContract`](Interface.LaunchTokenTransactionBaseParams.md#admincontract)

#### Defined in

[transaction.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L46)

***

### adminContractPrivateKey?

```ts
optional adminContractPrivateKey: string;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`adminContractPrivateKey`](Interface.LaunchTokenTransactionBaseParams.md#admincontractprivatekey)

#### Defined in

[transaction.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L36)

***

### canMint

```ts
canMint: "whitelist" | "anyone";
```

#### Defined in

[transaction.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L47)

***

### contractPrivateKey?

```ts
optional contractPrivateKey: string;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`contractPrivateKey`](Interface.LaunchTokenTransactionBaseParams.md#contractprivatekey)

#### Defined in

[transaction.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L35)

***

### decimals?

```ts
optional decimals: number;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`decimals`](Interface.LaunchTokenTransactionBaseParams.md#decimals)

#### Defined in

[transaction.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L32)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`developerFee`](Interface.LaunchTokenTransactionBaseParams.md#developerfee)

#### Defined in

[transaction.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L24)

***

### memo?

```ts
optional memo: string;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`memo`](Interface.LaunchTokenTransactionBaseParams.md#memo)

#### Defined in

[transaction.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L23)

***

### nonce?

```ts
optional nonce: number;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`nonce`](Interface.LaunchTokenTransactionBaseParams.md#nonce)

#### Defined in

[transaction.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L22)

***

### requireAdminSignatureForMint?

```ts
optional requireAdminSignatureForMint: boolean;
```

#### Defined in

[transaction.ts:48](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L48)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`sender`](Interface.LaunchTokenTransactionBaseParams.md#sender)

#### Defined in

[transaction.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L21)

***

### symbol

```ts
symbol: string;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`symbol`](Interface.LaunchTokenTransactionBaseParams.md#symbol)

#### Defined in

[transaction.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L31)

***

### totalSupply?

```ts
optional totalSupply: number;
```

#### Defined in

[transaction.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L50)

***

### txType

```ts
txType: "launch";
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`txType`](Interface.LaunchTokenTransactionBaseParams.md#txtype)

#### Defined in

[transaction.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L29)

***

### uri

```ts
uri: string | TokenInfo;
```

#### Inherited from

[`LaunchTokenTransactionBaseParams`](interfacelaunchtokentransactionbaseparams).[`uri`](Interface.LaunchTokenTransactionBaseParams.md#uri)

#### Defined in

[transaction.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L33)

***

### whitelist?

```ts
optional whitelist: string | {
  address: string;
  amount: number;
 }[];
```

#### Defined in

[transaction.ts:49](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L49)
