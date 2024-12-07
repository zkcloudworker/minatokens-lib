---
title: LaunchTokenTransactionBaseParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.LaunchTokenTransactionBaseParams
order: 18
---

# Interface: LaunchTokenTransactionBaseParams

## Properties overview

- adminContract:  "standard" | "advanced"; [↗](#admincontract)
- sender:  string; [↗](#sender)
- symbol:  string; [↗](#symbol)
- txType:  "launch"; [↗](#txtype)
- uri:  string | TokenInfo; [↗](#uri)

## Extends

- [`TokenTransactionBaseParams`](interfacetokentransactionbaseparams)

## Extended by

- [`LaunchTokenStandardAdminParams`](interfacelaunchtokenstandardadminparams)
- [`LaunchTokenAdvancedAdminParams`](interfacelaunchtokenadvancedadminparams)

## Properties

### adminContract

```ts
adminContract: "standard" | "advanced";
```

#### Defined in

[transaction.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L30)

***

### adminContractPrivateKey?

```ts
optional adminContractPrivateKey: string;
```

#### Defined in

[transaction.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L36)

***

### contractPrivateKey?

```ts
optional contractPrivateKey: string;
```

#### Defined in

[transaction.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L35)

***

### decimals?

```ts
optional decimals: number;
```

#### Defined in

[transaction.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L32)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`developerFee`](Interface.TokenTransactionBaseParams.md#developerfee)

#### Defined in

[transaction.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L24)

***

### memo?

```ts
optional memo: string;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`memo`](Interface.TokenTransactionBaseParams.md#memo)

#### Defined in

[transaction.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L23)

***

### nonce?

```ts
optional nonce: number;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`nonce`](Interface.TokenTransactionBaseParams.md#nonce)

#### Defined in

[transaction.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L22)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`sender`](Interface.TokenTransactionBaseParams.md#sender)

#### Defined in

[transaction.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L21)

***

### symbol

```ts
symbol: string;
```

#### Defined in

[transaction.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L31)

***

### txType

```ts
txType: "launch";
```

#### Overrides

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`txType`](Interface.TokenTransactionBaseParams.md#txtype)

#### Defined in

[transaction.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L29)

***

### uri

```ts
uri: string | TokenInfo;
```

#### Defined in

[transaction.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L33)
