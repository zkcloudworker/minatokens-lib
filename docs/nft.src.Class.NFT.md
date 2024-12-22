---
title: NFT
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFT
order: 186
---

# Class: NFT

## Properties overview

- events:  {
  buy: typeof BuyEvent;
  offer: typeof OfferEvent;
  ownershipChange: typeof OwnershipChangeEvent;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  transfer: typeof TransferEvent;
  update: typeof UpdateEvent;
  upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
}; [↗](#events)
- buy:  typeof BuyEvent = BuyEvent; [↗](#buy)
- offer:  typeof OfferEvent = OfferEvent; [↗](#offer)
- ownershipChange:  typeof OwnershipChangeEvent = OwnershipChangeEvent; [↗](#ownershipchange)
- pause:  typeof PauseEvent = PauseEvent; [↗](#pause)
- resume:  typeof PauseEvent = PauseEvent; [↗](#resume)
- transfer:  typeof TransferEvent = TransferEvent; [↗](#transfer)
- update:  typeof UpdateEvent = UpdateEvent; [↗](#update)
- upgradeVerificationKey:  typeof UpgradeVerificationKeyEvent = UpgradeVerificationKeyEvent; [↗](#upgradeverificationkey)
- metadata:  State<Field>; [↗](#metadata)
- metadataVerificationKeyHash:  State<Field>; [↗](#metadataverificationkeyhash)
- name:  State<Field>; [↗](#name)
- owner:  State<PublicKey>; [↗](#owner)
- packedData:  State<Field>; [↗](#packeddata)
- storage:  State<Storage>; [↗](#storage)

## Methods overview

- buy() [↗](#buy)
- ensureOwnerSignature() [↗](#ensureownersignature)
- offer() [↗](#offer)
- pause() [↗](#pause)
- resume() [↗](#resume)
- transfer() [↗](#transfer)
- update() [↗](#update)
- upgradeVerificationKey() [↗](#upgradeverificationkey)

The NFT Contract represents an individual NFT within a collection.

It manages the state and behavior of a single NFT, including ownership, metadata,
storage, pricing, and permissions. The contract provides functionality for updating
NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
upgrading the verification key, and pausing or resuming the NFT.

## Extends

- `SmartContract`

## Implements

- [`PausableContract`](nftsrctypealiaspausablecontract)

## Constructors

### new NFT()

```ts
new NFT(address: PublicKey, tokenId?: Field): NFT
```

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFT`](nftsrcclassnft)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

## Properties

### events

```ts
events: {
  buy: typeof BuyEvent;
  offer: typeof OfferEvent;
  ownershipChange: typeof OwnershipChangeEvent;
  pause: typeof PauseEvent;
  resume: typeof PauseEvent;
  transfer: typeof TransferEvent;
  update: typeof UpdateEvent;
  upgradeVerificationKey: typeof UpgradeVerificationKeyEvent;
};
```

Events emitted by the NFT contract.

#### buy

```ts
buy: typeof BuyEvent = BuyEvent;
```

#### offer

```ts
offer: typeof OfferEvent = OfferEvent;
```

#### ownershipChange

```ts
ownershipChange: typeof OwnershipChangeEvent = OwnershipChangeEvent;
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
transfer: typeof TransferEvent = TransferEvent;
```

#### update

```ts
update: typeof UpdateEvent = UpdateEvent;
```

#### upgradeVerificationKey

```ts
upgradeVerificationKey: typeof UpgradeVerificationKeyEvent = UpgradeVerificationKeyEvent;
```

#### Implementation of

`PausableContract.events`

#### Overrides

`SmartContract.events`

#### Defined in

[packages/nft/src/contracts/nft.ts:74](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L74)

***

### metadata

```ts
metadata: State<Field>;
```

The metadata associated with the NFT (`Field`).

#### Defined in

[packages/nft/src/contracts/nft.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L59)

***

### metadataVerificationKeyHash

```ts
metadataVerificationKeyHash: State<Field>;
```

The hash of the verification key used for metadata proofs (`Field`).

#### Defined in

[packages/nft/src/contracts/nft.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L71)

***

### name

```ts
name: State<Field>;
```

The name of the NFT (`Field`).

#### Defined in

[packages/nft/src/contracts/nft.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L56)

***

### owner

```ts
owner: State<PublicKey>;
```

The current owner of the NFT (`PublicKey`).

#### Defined in

[packages/nft/src/contracts/nft.ts:62](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L62)

***

### packedData

```ts
packedData: State<Field>;
```

A packed field containing additional NFT data and flags (`Field`).

#### Defined in

[packages/nft/src/contracts/nft.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L68)

***

### storage

```ts
storage: State<Storage>;
```

Holds off-chain storage information, e.g., IPFS hash (`Storage`).

#### Defined in

[packages/nft/src/contracts/nft.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L65)

## Methods

### buy()

```ts
buy(price: UInt64, buyer: PublicKey): Promise<BuyEvent>
```

Purchases the NFT, transferring ownership and handling payment.

#### Parameters

##### price

`UInt64`

The price at which to buy the NFT (`UInt64`).

##### buyer

`PublicKey`

The public key of the buyer (`PublicKey`).

#### Returns

`Promise`\<[`BuyEvent`](nftsrcclassbuyevent)\>

An event emitted after the NFT is purchased (`BuyEvent`).

#### Defined in

[packages/nft/src/contracts/nft.ts:264](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L264)

***

### ensureOwnerSignature()

```ts
ensureOwnerSignature(): Promise<AccountUpdate>
```

Ensures that the transaction is authorized by the current owner.

#### Returns

`Promise`\<`AccountUpdate`\>

A signed account update for the owner.

#### Defined in

[packages/nft/src/contracts/nft.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L90)

***

### offer()

```ts
offer(price: UInt64, seller: PublicKey): Promise<OfferEvent>
```

Lists the NFT for sale at a specified price.

#### Parameters

##### price

`UInt64`

The price at which to sell the NFT (`UInt64`).

##### seller

`PublicKey`

The public key of the seller (`PublicKey`).

#### Returns

`Promise`\<[`OfferEvent`](nftsrcclassofferevent)\>

An event emitted after the NFT is listed for sale (`SellEvent`).

#### Defined in

[packages/nft/src/contracts/nft.ts:236](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L236)

***

### pause()

```ts
pause(): Promise<void>
```

Pauses the NFT, disabling certain actions.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the NFT is paused.

#### Implementation of

`PausableContract.pause`

#### Defined in

[packages/nft/src/contracts/nft.ts:361](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L361)

***

### resume()

```ts
resume(): Promise<void>
```

Resumes the NFT, re-enabling actions.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the NFT is resumed.

#### Implementation of

`PausableContract.resume`

#### Defined in

[packages/nft/src/contracts/nft.ts:377](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L377)

***

### transfer()

```ts
transfer(from: PublicKey, to: PublicKey): Promise<PublicKey>
```

Transfers ownership of the NFT from one user to another.

#### Parameters

##### from

`PublicKey`

The public key of the current owner (`PublicKey`).

##### to

`PublicKey`

The public key of the new owner (`PublicKey`).

#### Returns

`Promise`\<`PublicKey`\>

The public key of the old owner (`PublicKey`).

#### Defined in

[packages/nft/src/contracts/nft.ts:303](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L303)

***

### update()

```ts
update(
   input: NFTState, 
   output: NFTState, 
creator: PublicKey): Promise<Field>
```

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

#### Defined in

[packages/nft/src/contracts/nft.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L108)

***

### upgradeVerificationKey()

```ts
upgradeVerificationKey(vk: VerificationKey, sender: PublicKey): Promise<UpgradeVerificationKeyEvent>
```

Upgrades the verification key used by the NFT contract.

#### Parameters

##### vk

`VerificationKey`

The new verification key (`VerificationKey`).

##### sender

`PublicKey`

The public key of the sender (`PublicKey`).

#### Returns

`Promise`\<[`UpgradeVerificationKeyEvent`](nftsrcclassupgradeverificationkeyevent)\>

An event emitted after the verification key is upgraded (`UpgradeVerificationKeyEvent`).

#### Defined in

[packages/nft/src/contracts/nft.ts:329](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/nft.ts#L329)
