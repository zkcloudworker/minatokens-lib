---
title: NFTStandardOwner
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTStandardOwner
order: 211
---

# Class: NFTStandardOwner

## Properties overview

- admin:  State<PublicKey>; [↗](#admin)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- canApproveAddress() [↗](#canapproveaddress)
- canChangeVerificationKey() [↗](#canchangeverificationkey)
- canPause() [↗](#canpause)
- canResume() [↗](#canresume)
- canTransfer() [↗](#cantransfer)
- deploy() [↗](#deploy)
- ensureOwnerSignature() [↗](#ensureownersignature)

Defined in: [packages/nft/src/interfaces/owner.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L73)

The **NFTStandardOwner** contract is the default implementation of the `NFTOwnerBase` interface.

## Extends

- `SmartContract`

## Implements

- [`NFTOwnerBase`](nftsrctypealiasnftownerbase)

## Constructors

### new NFTStandardOwner()

```ts
new NFTStandardOwner(address: PublicKey, tokenId?: Field): NFTStandardOwner
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFTStandardOwner`](nftsrcclassnftstandardowner)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### admin

```ts
admin: State<PublicKey>;
```

Defined in: [packages/nft/src/interfaces/owner.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L78)

The public key of the contract's administrator.
This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.

## Methods

### canApproveAddress()

```ts
canApproveAddress(
   collection: PublicKey, 
   nft: PublicKey, 
approved: PublicKey): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/owner.ts:135](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L135)

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

##### approved

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTOwnerBase.canApproveAddress
```

***

### canChangeVerificationKey()

```ts
canChangeVerificationKey(
   collection: PublicKey, 
   nft: PublicKey, 
vk: VerificationKey): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/owner.ts:125](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L125)

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

##### vk

`VerificationKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTOwnerBase.canChangeVerificationKey
```

***

### canPause()

```ts
canPause(collection: PublicKey, nft: PublicKey): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/owner.ts:113](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L113)

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTOwnerBase.canPause
```

***

### canResume()

```ts
canResume(collection: PublicKey, nft: PublicKey): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/owner.ts:119](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L119)

#### Parameters

##### collection

`PublicKey`

##### nft

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTOwnerBase.canResume
```

***

### canTransfer()

```ts
canTransfer(params: TransferExtendedParams): Promise<Bool>
```

Defined in: [packages/nft/src/interfaces/owner.ts:107](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L107)

Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.

#### Parameters

##### params

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

The transfer event details.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.

#### Implementation of

```ts
NFTOwnerBase.canTransfer
```

***

### deploy()

```ts
deploy(props: NFTOwnerDeployProps): Promise<void>
```

Defined in: [packages/nft/src/interfaces/owner.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L84)

Deploys the contract with initial settings.

#### Parameters

##### props

[`NFTOwnerDeployProps`](nftsrcinterfacenftownerdeployprops)

Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
NFTOwnerBase.deploy
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

Defined in: [packages/nft/src/interfaces/owner.ts:99](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/owner.ts#L99)

Ensures that the transaction is authorized by the contract owner.

#### Returns

`Promise`\<`AccountUpdate`\>

A signed `AccountUpdate` from the admin.
