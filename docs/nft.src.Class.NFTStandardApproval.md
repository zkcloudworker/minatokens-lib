---
title: NFTStandardApproval
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTStandardApproval
order: 210
---

# Class: NFTStandardApproval

## Properties overview

- admin:  State<PublicKey>; [↗](#admin)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- canTransfer() [↗](#cantransfer)
- deploy() [↗](#deploy)
- ensureOwnerSignature() [↗](#ensureownersignature)

Defined in: [packages/nft/src/interfaces/approval.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L56)

The **NFTStandardApproval** contract is the default implementation of the `NFTApprovalBase` interface.

## Extends

- `SmartContract`

## Implements

- [`NFTApprovalBase`](nftsrctypealiasnftapprovalbase)

## Constructors

### new NFTStandardApproval()

```ts
new NFTStandardApproval(address: PublicKey, tokenId?: Field): NFTStandardApproval
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFTStandardApproval`](nftsrcclassnftstandardapproval)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### admin

```ts
admin: State<PublicKey>;
```

Defined in: [packages/nft/src/interfaces/approval.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L61)

The public key of the contract's administrator.
This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.

## Methods

### canTransfer()

```ts
canTransfer(params: TransferExtendedParams): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/approval.ts:95](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L95)

Determines if an NFT can be transferred.

#### Parameters

##### params

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

The transfer details.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.

#### Implementation of

```ts
NFTApprovalBase.canTransfer
```

***

### deploy()

```ts
deploy(props: NFTApprovalDeployProps): Promise<void>
```

Defined in: [packages/nft/src/interfaces/approval.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L67)

Deploys the contract with initial settings.

#### Parameters

##### props

[`NFTApprovalDeployProps`](nftsrcinterfacenftapprovaldeployprops)

Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
NFTApprovalBase.deploy
```

#### Overrides

```ts
SmartContract.deploy
```

***

### ensureOwnerSignature()

```ts
ensureOwnerSignature(): Promise<AccountUpdate>
```

Defined in: [packages/nft/src/interfaces/approval.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L82)

Ensures that the transaction is authorized by the contract owner.

#### Returns

`Promise`\<`AccountUpdate`\>

A signed `AccountUpdate` from the admin.
