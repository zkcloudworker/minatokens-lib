---
title: TransactionTokenParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TransactionTokenParams
order: 24
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

[types.ts:118](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L118)

***

### developerFee?

```ts
optional developerFee: number;
```

#### Defined in

[types.ts:123](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L123)

***

### from

```ts
from: string;
```

#### Defined in

[types.ts:116](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L116)

***

### memo?

```ts
optional memo: string;
```

#### Defined in

[types.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L122)

***

### nonce?

```ts
optional nonce: number;
```

#### Defined in

[types.ts:121](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L121)

***

### price?

```ts
optional price: number;
```

#### Defined in

[types.ts:119](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L119)

***

### to?

```ts
optional to: string;
```

#### Defined in

[types.ts:117](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L117)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Defined in

[types.ts:115](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L115)

***

### txType

```ts
txType: FungibleTokenTransactionType;
```

#### Defined in

[types.ts:114](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L114)

***

### whitelist?

```ts
optional whitelist: string | {
  address: string;
  amount: number;
 }[];
```

#### Defined in

[types.ts:120](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L120)
