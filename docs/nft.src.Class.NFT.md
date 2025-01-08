---
title: NFT
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFT
order: 202
---

# Class: NFT

## Properties overview

- events:  {
  approve: typeof PublicKey;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  transfer: typeof OwnershipChangeEvent;
  update: typeof UpdateEvent;
  upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
}; [↗](#events)
- approve:  typeof PublicKey = PublicKey; [↗](#approve)
- pause:  typeof PauseEvent = PauseEvent; [↗](#pause)
- resume:  typeof PauseEvent = PauseEvent; [↗](#resume)
- transfer:  typeof OwnershipChangeEvent = OwnershipChangeEvent; [↗](#transfer)
- update:  typeof UpdateEvent = UpdateEvent; [↗](#update)
- upgradeVerificationKey:  typeof UpgradeVerificationKeyEvent = UpgradeVerificationKeyEvent; [↗](#upgradeverificationkey)
- Overrides: SmartContract.events [↗](#overrides)
- metadata:  State<Field>; [↗](#metadata)
- metadataVerificationKeyHash:  State<Field>; [↗](#metadataverificationkeyhash)
- name:  State<Field>; [↗](#name)
- packedData:  State<NFTDataPacked>; [↗](#packeddata)
- storage:  State<Storage>; [↗](#storage)

## Methods overview

- approveAddress() [↗](#approveaddress)
- getState() [↗](#getstate)
- pause() [↗](#pause)
- resume() [↗](#resume)
- transfer() [↗](#transfer)
- update() [↗](#update)
- upgradeVerificationKey() [↗](#upgradeverificationkey)

Defined in: [packages/nft/src/contracts/nft.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L52)

The NFT Contract represents an individual NFT within a collection.

It manages the state and behavior of a single NFT, including ownership, metadata,
storage, pricing, and permissions. The contract provides functionality for updating
NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
upgrading the verification key, and pausing or resuming the NFT.

## Extends

- `SmartContract`

## Constructors

### new NFT()

```ts
new NFT(address: PublicKey, tokenId?: Field): NFT
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFT`](nftsrcclassnft)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### events

```ts
events: {
  approve: typeof PublicKey;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  transfer: typeof OwnershipChangeEvent;
  update: typeof UpdateEvent;
  upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
};
```

Defined in: [packages/nft/src/contracts/nft.ts:69](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L69)

Events emitted by the NFT contract.

#### approve

```ts
approve: typeof PublicKey = PublicKey;
```

#### pause

```ts
pause: typeof PauseEvent = PauseEvent;
```

#### resume

```ts
resume: typeof PauseEvent = PauseEvent;
```

#### transfer

```ts
transfer: typeof OwnershipChangeEvent = OwnershipChangeEvent;
```

#### update

```ts
update: typeof UpdateEvent = UpdateEvent;
```

#### upgradeVerificationKey

```ts
upgradeVerificationKey: typeof UpgradeVerificationKeyEvent = UpgradeVerificationKeyEvent;
```

#### Overrides

```ts
SmartContract.events
```

***

### metadata

```ts
metadata: State<Field>;
```

Defined in: [packages/nft/src/contracts/nft.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L57)

The metadata associated with the NFT (`Field`).

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: State<Field>;
```

Defined in: [packages/nft/src/contracts/nft.ts:66](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L66)

The hash of the verification key used for metadata proofs (`Field`).

***

### name

```ts
name: State<Field>;
```

Defined in: [packages/nft/src/contracts/nft.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L54)

The name of the NFT (`Field`).

***

### packedData

```ts
packedData: State<NFTDataPacked>;
```

Defined in: [packages/nft/src/contracts/nft.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L63)

A packed field containing additional NFT data and flags (`Field`).

***

### storage

```ts
storage: State<Storage>;
```

Defined in: [packages/nft/src/contracts/nft.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L60)

Holds off-chain storage information, e.g., IPFS hash (`Storage`).

## Methods

### approveAddress()

```ts
approveAddress(approved: PublicKey): Promise<PublicKey>
```

Defined in: [packages/nft/src/contracts/nft.ts:282](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L282)

Transfers ownership of the NFT from one user to another.

#### Parameters

##### approved

`PublicKey`

The public key of the approved address (`PublicKey`).

#### Returns

`Promise`\<`PublicKey`\>

The public key of the owner (`PublicKey`).

***

### getState()

```ts
getState(): Promise<NFTStateStruct>
```

Defined in: [packages/nft/src/contracts/nft.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L79)

#### Returns

`Promise`\<[`NFTStateStruct`](nftsrcclassnftstatestruct)\>

***

### pause()

```ts
pause(): Promise<PublicKey>
```

Defined in: [packages/nft/src/contracts/nft.ts:319](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L319)

Pauses the NFT, disabling certain actions.

#### Returns

`Promise`\<`PublicKey`\>

An owner public key to be checked by the Collection contract

***

### resume()

```ts
resume(): Promise<PublicKey>
```

Defined in: [packages/nft/src/contracts/nft.ts:335](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L335)

Resumes the NFT, re-enabling actions.

#### Returns

`Promise`\<`PublicKey`\>

An owner public key to be checked by the Collection contract

***

### transfer()

```ts
transfer(params: TransferExtendedParams): Promise<TransferExtendedParams>
```

Defined in: [packages/nft/src/contracts/nft.ts:239](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L239)

Transfers ownership of the NFT from one user to another.

#### Parameters

##### params

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

The parameters for the transfer (`TransferExtendedParams`).

#### Returns

`Promise`\<[`TransferExtendedParams`](nftsrcclasstransferextendedparams)\>

The public key of the old owner (`PublicKey`).

***

### update()

```ts
update(
   input: NFTState, 
   output: NFTState, 
creator: PublicKey): Promise<Field>
```

Defined in: [packages/nft/src/contracts/nft.ts:104](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L104)

Updates the NFT's state with provided proofs and permissions.

#### Parameters

##### input

[`NFTState`](nftsrcclassnftstate)

The current state of the NFT (`NFTState`).

##### output

[`NFTState`](nftsrcclassnftstate)

The desired new state of the NFT (`NFTState`).

##### creator

`PublicKey`

The public key of the creator (`PublicKey`).

#### Returns

`Promise`\<`Field`\>

The hash of the metadata verification key (`Field`).

***

### upgradeVerificationKey()

```ts
upgradeVerificationKey(vk: VerificationKey): Promise<UpgradeVerificationKeyData>
```

Defined in: [packages/nft/src/contracts/nft.ts:298](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L298)

Upgrades the verification key used by the NFT contract.

#### Parameters

##### vk

`VerificationKey`

The new verification key (`VerificationKey`).

#### Returns

`Promise`\<[`UpgradeVerificationKeyData`](nftsrcclassupgradeverificationkeydata)\>

An owner public key to be checked by the Collection contract and the Boolean flag indicating if the owner's authorization is required
