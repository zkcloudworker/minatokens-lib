---
title: NFTAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTAdmin
order: 204
---

# Class: NFTAdmin

## Properties overview

- admin:  State<PublicKey>; [↗](#admin)
- allowChangeRoyalty:  State<Bool>; [↗](#allowchangeroyalty)
- allowChangeTransferFee:  State<Bool>; [↗](#allowchangetransferfee)
- canBePaused:  State<Bool>; [↗](#canbepaused)
- events:  {
  ownershipChange: typeof OwnershipChangeEvent;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  upgradeVerificationKey: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
}; [↗](#events)
- ownershipChange:  typeof OwnershipChangeEvent = OwnershipChangeEvent; [↗](#ownershipchange)
- pause:  typeof PauseEvent = PauseEvent; [↗](#pause)
- resume:  typeof PauseEvent = PauseEvent; [↗](#resume)
- upgradeVerificationKey:  typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field = Field; [↗](#upgradeverificationkey)
- Overrides: SmartContract.events [↗](#overrides)
- isPaused:  State<Bool>; [↗](#ispaused)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- canChangeBaseUri() [↗](#canchangebaseuri)
- canChangeCreator() [↗](#canchangecreator)
- canChangeName() [↗](#canchangename)
- canChangeRoyalty() [↗](#canchangeroyalty)
- canChangeTransferFee() [↗](#canchangetransferfee)
- canChangeVerificationKey() [↗](#canchangeverificationkey)
- canMint() [↗](#canmint)
- canPause() [↗](#canpause)
- canResume() [↗](#canresume)
- canSetAdmin() [↗](#cansetadmin)
- canTransfer() [↗](#cantransfer)
- canUpdate() [↗](#canupdate)
- deploy() [↗](#deploy)
- ensureOwnerSignature() [↗](#ensureownersignature)
- pause() [↗](#pause)
- resume() [↗](#resume)
- transferOwnership() [↗](#transferownership)
- upgradeVerificationKey() [↗](#upgradeverificationkey)

Defined in: [packages/nft/src/contracts/admin.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L44)

The **NFTAdmin** contract serves as the foundational administrative layer for NFT collections on the Mina Protocol.
It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management.
This contract can be extended by custom admin contracts to implement specific administrative logic,
ensuring flexibility while maintaining a standardized interface.

## Extends

- `SmartContract`

## Implements

- [`NFTAdminBase`](nftsrctypealiasnftadminbase)
- [`PausableContract`](nftsrctypealiaspausablecontract)
- [`OwnableContract`](nftsrcinterfaceownablecontract)

## Constructors

### new NFTAdmin()

```ts
new NFTAdmin(address: PublicKey, tokenId?: Field): NFTAdmin
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFTAdmin`](nftsrcclassnftadmin)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### admin

```ts
admin: State<PublicKey>;
```

Defined in: [packages/nft/src/contracts/admin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L52)

The public key of the contract's administrator.
This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.

***

### allowChangeRoyalty

```ts
allowChangeRoyalty: State<Bool>;
```

Defined in: [packages/nft/src/contracts/admin.ts:69](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L69)

A boolean flag indicating whether the contract has the ability to change the royalty fee.

***

### allowChangeTransferFee

```ts
allowChangeTransferFee: State<Bool>;
```

Defined in: [packages/nft/src/contracts/admin.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L74)

A boolean flag indicating whether the contract has the ability to change the transfer fee.

***

### canBePaused

```ts
canBePaused: State<Bool>;
```

Defined in: [packages/nft/src/contracts/admin.ts:64](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L64)

A boolean flag indicating whether the contract has the ability to be paused.
This allows for disabling the pause functionality if desired.

***

### events

```ts
events: {
  ownershipChange: typeof OwnershipChangeEvent;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  upgradeVerificationKey: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field;
};
```

Defined in: [packages/nft/src/contracts/admin.ts:107](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L107)

Contract events emitted during various operations.

#### ownershipChange

```ts
ownershipChange: typeof OwnershipChangeEvent = OwnershipChangeEvent;
```

Emitted when ownership of the contract changes.

#### pause

```ts
pause: typeof PauseEvent = PauseEvent;
```

Emitted when the contract is paused.

#### resume

```ts
resume: typeof PauseEvent = PauseEvent;
```

Emitted when the contract is resumed.

#### upgradeVerificationKey

```ts
upgradeVerificationKey: typeof Field & (x: string | number | bigint | Field | FieldVar | FieldConst) => Field = Field;
```

Emitted when the verification key is upgraded.

#### Implementation of

```ts
NFTAdminBase.events
```

#### Overrides

```ts
SmartContract.events
```

***

### isPaused

```ts
isPaused: State<Bool>;
```

Defined in: [packages/nft/src/contracts/admin.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L58)

A boolean flag indicating whether the contract is currently paused.
When `true`, certain operations are disabled.

## Methods

### canChangeBaseUri()

```ts
canChangeBaseUri(baseUri: Field): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:254](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L254)

Determines if the base URI can be changed for a Collection.

#### Parameters

##### baseUri

`Field`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canChangeBaseUri
```

***

### canChangeCreator()

```ts
canChangeCreator(creator: PublicKey): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:246](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L246)

Determines if the creator can be changed for a Collection.

#### Parameters

##### creator

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canChangeCreator
```

***

### canChangeName()

```ts
canChangeName(name: Field): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:238](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L238)

Determines if the name can be changed for a Collection.

#### Parameters

##### name

`Field`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canChangeName
```

***

### canChangeRoyalty()

```ts
canChangeRoyalty(royaltyFee: UInt32): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:262](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L262)

Determines if the royalty fee can be changed for a Collection.

#### Parameters

##### royaltyFee

`UInt32`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canChangeRoyalty
```

***

### canChangeTransferFee()

```ts
canChangeTransferFee(transferFee: UInt64): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:271](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L271)

Determines if the transfer fee can be changed for a Collection.

#### Parameters

##### transferFee

`UInt64`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canChangeTransferFee
```

***

### canChangeVerificationKey()

```ts
canChangeVerificationKey(
   vk: VerificationKey, 
   address: PublicKey, 
tokenId: Field): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:225](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L225)

Determines if the verification key can be changed for a specific NFT contract address and token ID.

#### Parameters

##### vk

`VerificationKey`

The verification key to be changed.

##### address

`PublicKey`

The public key of the NFT contract address or CollectionContract address.

##### tokenId

`Field`

The token ID of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the verification key change is allowed.

#### Implementation of

```ts
NFTAdminBase.canChangeVerificationKey
```

***

### canMint()

```ts
canMint(mintRequest: MintRequest): Promise<MintParamsOption>
```

Defined in: [packages/nft/src/contracts/admin.ts:151](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L151)

Determines whether minting is allowed for the given request.
Returns mint parameters if allowed, or none if not allowed.

#### Parameters

##### mintRequest

[`MintRequest`](nftsrcclassmintrequest)

The minting request details.

#### Returns

`Promise`\<[`MintParamsOption`](nftsrcclassmintparamsoption)\>

A `MintParamsOption` indicating if minting is permitted.

#### Implementation of

```ts
NFTAdminBase.canMint
```

***

### canPause()

```ts
canPause(): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:288](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L288)

Determines if the collection can be paused.

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canPause
```

***

### canResume()

```ts
canResume(): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:297](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L297)

Determines if the collection can be resumed.

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canResume
```

***

### canSetAdmin()

```ts
canSetAdmin(admin: PublicKey): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:280](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L280)

Determines if the admin contract can be changed for a Collection.

#### Parameters

##### admin

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
NFTAdminBase.canSetAdmin
```

***

### canTransfer()

```ts
canTransfer(transferEvent: TransferEvent): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:174](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L174)

Determines whether a transfer between the specified addresses is permitted.

#### Parameters

##### transferEvent

[`TransferEvent`](nftsrcclasstransferevent)

The transfer event details.

#### Returns

`Promise`\<`Bool`\>

A `Bool` indicating whether the transfer is allowed.

#### Implementation of

```ts
NFTAdminBase.canTransfer
```

***

### canUpdate()

```ts
canUpdate(input: NFTState, output: NFTState): Promise<Bool>
```

Defined in: [packages/nft/src/contracts/admin.ts:164](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L164)

Checks whether the NFT state can be updated.
Typically returns true if the contract is not paused.

#### Parameters

##### input

[`NFTState`](nftsrcclassnftstate)

The current state of the NFT.

##### output

[`NFTState`](nftsrcclassnftstate)

The desired new state of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Bool` indicating whether the update is allowed.

#### Implementation of

```ts
NFTAdminBase.canUpdate
```

***

### deploy()

```ts
deploy(props: NFTAdminDeployProps): Promise<void>
```

Defined in: [packages/nft/src/contracts/admin.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L80)

Deploys the contract with initial settings.

#### Parameters

##### props

[`NFTAdminDeployProps`](nftsrcinterfacenftadmindeployprops)

Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
NFTAdminBase.deploy
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

Defined in: [packages/nft/src/contracts/admin.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L122)

Ensures that the transaction is authorized by the contract owner.

#### Returns

`Promise`\<`AccountUpdate`\>

A signed `AccountUpdate` from the admin.

***

### pause()

```ts
pause(): Promise<void>
```

Defined in: [packages/nft/src/contracts/admin.ts:183](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L183)

Pauses the contract, disabling certain administrative actions.
Can only be called by the admin if `canPause` is `true`.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
PausableContract.pause
```

***

### resume()

```ts
resume(): Promise<void>
```

Defined in: [packages/nft/src/contracts/admin.ts:195](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L195)

Resumes the contract, re-enabling administrative actions.
Can only be called by the admin if `canPause` is `true`.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
PausableContract.resume
```

***

### transferOwnership()

```ts
transferOwnership(to: PublicKey): Promise<PublicKey>
```

Defined in: [packages/nft/src/contracts/admin.ts:208](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L208)

Transfers ownership of the contract to a new admin.

#### Parameters

##### to

`PublicKey`

The public key of the new owner.

#### Returns

`Promise`\<`PublicKey`\>

The public key of the previous owner.

#### Implementation of

[`OwnableContract`](nftsrcinterfaceownablecontract).[`transferOwnership`](nft.src.Interface.OwnableContract.md#transferownership)

***

### upgradeVerificationKey()

```ts
upgradeVerificationKey(vk: VerificationKey): Promise<void>
```

Defined in: [packages/nft/src/contracts/admin.ts:134](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/admin.ts#L134)

Upgrades the contract's verification key after validating with the upgrade authority.

#### Parameters

##### vk

`VerificationKey`

The new verification key to upgrade to.

#### Returns

`Promise`\<`void`\>
