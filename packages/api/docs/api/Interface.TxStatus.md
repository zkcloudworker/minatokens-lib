---
title: TxStatus
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.TxStatus
order: 39
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
- failureReason:  string; [↗](#failurereason)
- index:  number; [↗](#index)
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
- accountAddress:  string; [↗](#accountaddress)
- accountImg:  null | string; [↗](#accountimg)
- accountName:  null | string; [↗](#accountname)
- callData:  string; [↗](#calldata)
- callDepth:  number; [↗](#calldepth)
- incrementNonce:  boolean; [↗](#incrementnonce)
- isZkappAccount:  boolean; [↗](#iszkappaccount)
- tokenId:  string; [↗](#tokenid)
- totalBalanceChange:  number; [↗](#totalbalancechange)
- totalBalanceChangeUsd:  number; [↗](#totalbalancechangeusd)
- update:  {
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
}; [↗](#update)
- useFullCommitment:  boolean; [↗](#usefullcommitment)
- verificationKey:  null | string; [↗](#verificationkey)
- verificationKeyHash:  null | string; [↗](#verificationkeyhash)
- updatedAccountsCount:  number; [↗](#updatedaccountscount)

## Properties

### blockConfirmationsCount

```ts
blockConfirmationsCount: number;
```

#### Defined in

[types.ts:218](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L218)

***

### blockHeight

```ts
blockHeight: number;
```

#### Defined in

[types.ts:152](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L152)

***

### blockStatus

```ts
blockStatus: string;
```

#### Defined in

[types.ts:154](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L154)

***

### failures

```ts
failures: {
  failureReason: string;
  index: number;
 }[];
```

#### failureReason

```ts
failureReason: string;
```

#### index

```ts
index: number;
```

#### Defined in

[types.ts:158](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L158)

***

### fee

```ts
fee: number;
```

#### Defined in

[types.ts:166](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L166)

***

### feePayerAddress

```ts
feePayerAddress: string;
```

#### Defined in

[types.ts:163](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L163)

***

### feePayerImg

```ts
feePayerImg: null | string;
```

#### Defined in

[types.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L165)

***

### feePayerName

```ts
feePayerName: null | string;
```

#### Defined in

[types.ts:164](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L164)

***

### feeUsd

```ts
feeUsd: number;
```

#### Defined in

[types.ts:167](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L167)

***

### isAccountHijack

```ts
isAccountHijack: null | boolean;
```

#### Defined in

[types.ts:221](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L221)

***

### isZkappAccount

```ts
isZkappAccount: boolean;
```

#### Defined in

[types.ts:219](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L219)

***

### memo

```ts
memo: string;
```

#### Defined in

[types.ts:162](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L162)

***

### nonce

```ts
nonce: number;
```

#### Defined in

[types.ts:220](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L220)

***

### stateHash

```ts
stateHash: string;
```

#### Defined in

[types.ts:153](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L153)

***

### timestamp

```ts
timestamp: number;
```

#### Defined in

[types.ts:155](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L155)

***

### totalBalanceChange

```ts
totalBalanceChange: number;
```

#### Defined in

[types.ts:168](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L168)

***

### totalBalanceChangeUsd

```ts
totalBalanceChangeUsd: number;
```

#### Defined in

[types.ts:169](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L169)

***

### txHash

```ts
txHash: string;
```

#### Defined in

[types.ts:156](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L156)

***

### txStatus

```ts
txStatus: string;
```

#### Defined in

[types.ts:157](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L157)

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

#### accountAddress

```ts
accountAddress: string;
```

#### accountImg

```ts
accountImg: null | string;
```

#### accountName

```ts
accountName: null | string;
```

#### callData

```ts
callData: string;
```

#### callDepth

```ts
callDepth: number;
```

#### incrementNonce

```ts
incrementNonce: boolean;
```

#### isZkappAccount

```ts
isZkappAccount: boolean;
```

#### tokenId

```ts
tokenId: string;
```

#### totalBalanceChange

```ts
totalBalanceChange: number;
```

#### totalBalanceChangeUsd

```ts
totalBalanceChangeUsd: number;
```

#### update

```ts
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
```

##### update.appState

```ts
appState: string[];
```

##### update.delegateeAddress

```ts
delegateeAddress: null | string;
```

##### update.delegateeImg

```ts
delegateeImg: null | string;
```

##### update.delegateeName

```ts
delegateeName: null | string;
```

##### update.permissions

```ts
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
```

##### update.permissions.access

```ts
access: null | string;
```

##### update.permissions.editActionState

```ts
editActionState: null | string;
```

##### update.permissions.editState

```ts
editState: null | string;
```

##### update.permissions.incrementNonce

```ts
incrementNonce: null | string;
```

##### update.permissions.receive

```ts
receive: null | string;
```

##### update.permissions.send

```ts
send: null | string;
```

##### update.permissions.setDelegate

```ts
setDelegate: null | string;
```

##### update.permissions.setPermissions

```ts
setPermissions: null | string;
```

##### update.permissions.setTiming

```ts
setTiming: null | string;
```

##### update.permissions.setTokenSymbol

```ts
setTokenSymbol: null | string;
```

##### update.permissions.setVerificationKey

```ts
setVerificationKey: null | string;
```

##### update.permissions.setVotingFor

```ts
setVotingFor: null | string;
```

##### update.permissions.setZkappUri

```ts
setZkappUri: null | string;
```

##### update.timing

```ts
timing: {
  cliffAmount: null | string;
  cliffTime: null | number;
  initialMinimumBalance: null | string;
  vestingIncrement: null | string;
  vestingPeriod: null | number;
};
```

##### update.timing.cliffAmount

```ts
cliffAmount: null | string;
```

##### update.timing.cliffTime

```ts
cliffTime: null | number;
```

##### update.timing.initialMinimumBalance

```ts
initialMinimumBalance: null | string;
```

##### update.timing.vestingIncrement

```ts
vestingIncrement: null | string;
```

##### update.timing.vestingPeriod

```ts
vestingPeriod: null | number;
```

##### update.tokenSymbol

```ts
tokenSymbol: null | string;
```

##### update.verificationKey

```ts
verificationKey: null | string;
```

##### update.votingFor

```ts
votingFor: null | string;
```

##### update.zkappUri

```ts
zkappUri: null | string;
```

#### useFullCommitment

```ts
useFullCommitment: boolean;
```

#### verificationKey

```ts
verificationKey: null | string;
```

#### verificationKeyHash

```ts
verificationKeyHash: null | string;
```

#### Defined in

[types.ts:171](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L171)

***

### updatedAccountsCount

```ts
updatedAccountsCount: number;
```

#### Defined in

[types.ts:170](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L170)
