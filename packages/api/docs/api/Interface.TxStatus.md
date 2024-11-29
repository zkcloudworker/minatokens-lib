---
title: TxStatus
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TxStatus
order: 25
---

# Interface: TxStatus

## Properties overview

- blockConfirmationsCount:  number; [↗](#blockconfirmationscount)
- blockHeight:  number; [↗](#blockheight)
- blockStatus:  string; [↗](#blockstatus)
- failures:  {
  failureReason: string;
  index: number;
 }[]; [↗](#failures)
- fee:  number; [↗](#fee)
- feePayerAddress:  string; [↗](#feepayeraddress)
- feePayerImg:  null | string; [↗](#feepayerimg)
- feePayerName:  null | string; [↗](#feepayername)
- feeUsd:  number; [↗](#feeusd)
- isAccountHijack:  null | boolean; [↗](#isaccounthijack)
- isZkappAccount:  boolean; [↗](#iszkappaccount)
- memo:  string; [↗](#memo)
- nonce:  number; [↗](#nonce)
- stateHash:  string; [↗](#statehash)
- timestamp:  number; [↗](#timestamp)
- totalBalanceChange:  number; [↗](#totalbalancechange)
- totalBalanceChangeUsd:  number; [↗](#totalbalancechangeusd)
- txHash:  string; [↗](#txhash)
- txStatus:  string; [↗](#txstatus)
- updatedAccounts:  {
  accountAddress: string;
  accountImg: null | string;
  accountName: null | string;
  callData: string;
  callDepth: number;
  incrementNonce: boolean;
  isZkappAccount: boolean;
  tokenId: string;
  totalBalanceChange: number;
  totalBalanceChangeUsd: number;
  update: {
     appState: string[];
     delegateeAddress: null | string;
     delegateeImg: null | string;
     delegateeName: null | string;
     permissions: {
        access: null | string;
        editActionState: null | string;
        editState: null | string;
        incrementNonce: null | string;
        receive: null | string;
        send: null | string;
        setDelegate: null | string;
        setPermissions: null | string;
        setTiming: null | string;
        setTokenSymbol: null | string;
        setVerificationKey: null | string;
        setVotingFor: null | string;
        setZkappUri: null | string;
       };
     timing: {
        cliffAmount: null | string;
        cliffTime: null | number;
        initialMinimumBalance: null | string;
        vestingIncrement: null | string;
        vestingPeriod: null | number;
       };
     tokenSymbol: null | string;
     verificationKey: null | string;
     votingFor: null | string;
     zkappUri: null | string;
    };
  useFullCommitment: boolean;
  verificationKey: null | string;
  verificationKeyHash: null | string;
 }[]; [↗](#updatedaccounts)
- updatedAccountsCount:  number; [↗](#updatedaccountscount)

## Properties

### blockConfirmationsCount

```ts
blockConfirmationsCount: number;
```

#### Defined in

[types.ts:207](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L207)

***

### blockHeight

```ts
blockHeight: number;
```

#### Defined in

[types.ts:141](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L141)

***

### blockStatus

```ts
blockStatus: string;
```

#### Defined in

[types.ts:143](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L143)

***

### failures

```ts
failures: {
  failureReason: string;
  index: number;
 }[];
```

#### Defined in

[types.ts:147](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L147)

***

### fee

```ts
fee: number;
```

#### Defined in

[types.ts:155](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L155)

***

### feePayerAddress

```ts
feePayerAddress: string;
```

#### Defined in

[types.ts:152](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L152)

***

### feePayerImg

```ts
feePayerImg: null | string;
```

#### Defined in

[types.ts:154](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L154)

***

### feePayerName

```ts
feePayerName: null | string;
```

#### Defined in

[types.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L153)

***

### feeUsd

```ts
feeUsd: number;
```

#### Defined in

[types.ts:156](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L156)

***

### isAccountHijack

```ts
isAccountHijack: null | boolean;
```

#### Defined in

[types.ts:210](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L210)

***

### isZkappAccount

```ts
isZkappAccount: boolean;
```

#### Defined in

[types.ts:208](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L208)

***

### memo

```ts
memo: string;
```

#### Defined in

[types.ts:151](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L151)

***

### nonce

```ts
nonce: number;
```

#### Defined in

[types.ts:209](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L209)

***

### stateHash

```ts
stateHash: string;
```

#### Defined in

[types.ts:142](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L142)

***

### timestamp

```ts
timestamp: number;
```

#### Defined in

[types.ts:144](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L144)

***

### totalBalanceChange

```ts
totalBalanceChange: number;
```

#### Defined in

[types.ts:157](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L157)

***

### totalBalanceChangeUsd

```ts
totalBalanceChangeUsd: number;
```

#### Defined in

[types.ts:158](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L158)

***

### txHash

```ts
txHash: string;
```

#### Defined in

[types.ts:145](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L145)

***

### txStatus

```ts
txStatus: string;
```

#### Defined in

[types.ts:146](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L146)

***

### updatedAccounts

```ts
updatedAccounts: {
  accountAddress: string;
  accountImg: null | string;
  accountName: null | string;
  callData: string;
  callDepth: number;
  incrementNonce: boolean;
  isZkappAccount: boolean;
  tokenId: string;
  totalBalanceChange: number;
  totalBalanceChangeUsd: number;
  update: {
     appState: string[];
     delegateeAddress: null | string;
     delegateeImg: null | string;
     delegateeName: null | string;
     permissions: {
        access: null | string;
        editActionState: null | string;
        editState: null | string;
        incrementNonce: null | string;
        receive: null | string;
        send: null | string;
        setDelegate: null | string;
        setPermissions: null | string;
        setTiming: null | string;
        setTokenSymbol: null | string;
        setVerificationKey: null | string;
        setVotingFor: null | string;
        setZkappUri: null | string;
       };
     timing: {
        cliffAmount: null | string;
        cliffTime: null | number;
        initialMinimumBalance: null | string;
        vestingIncrement: null | string;
        vestingPeriod: null | number;
       };
     tokenSymbol: null | string;
     verificationKey: null | string;
     votingFor: null | string;
     zkappUri: null | string;
    };
  useFullCommitment: boolean;
  verificationKey: null | string;
  verificationKeyHash: null | string;
 }[];
```

#### Defined in

[types.ts:160](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L160)

***

### updatedAccountsCount

```ts
updatedAccountsCount: number;
```

#### Defined in

[types.ts:159](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L159)
