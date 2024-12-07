---
title: TransactionTokenParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TransactionTokenParams
order: 37
---

# Interface: TransactionTokenParams

## Properties overview

- from:  string; [↗](#from)
- tokenAddress:  string; [↗](#tokenaddress)
- txType:  FungibleTokenTransactionType; [↗](#txtype)

## Properties

### amount?

```ts
optional amount: number;
```

#### Defined in

[types.ts:129](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L129)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Defined in

[types.ts:134](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L134)

***

### from

```ts
from: string;
```

#### Defined in

[types.ts:127](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L127)

***

### memo?

```ts
optional memo: string;
```

#### Defined in

[types.ts:133](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L133)

***

### nonce?

```ts
optional nonce: number;
```

#### Defined in

[types.ts:132](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L132)

***

### price?

```ts
optional price: number;
```

#### Defined in

[types.ts:130](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L130)

***

### to?

```ts
optional to: string;
```

#### Defined in

[types.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L128)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Defined in

[types.ts:126](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L126)

***

### txType

```ts
txType: FungibleTokenTransactionType;
```

#### Defined in

[types.ts:125](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L125)

***

### whitelist?

```ts
optional whitelist: string | {
  address: string;
  amount: number;
 }[];
```

#### Defined in

[types.ts:131](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L131)
