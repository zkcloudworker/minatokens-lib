---
title: NFTStandardUpdate
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTStandardUpdate
order: 212
---

# Class: NFTStandardUpdate

## Properties overview

- admin:  State<PublicKey>; [↗](#admin)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- canUpdate() [↗](#canupdate)
- deploy() [↗](#deploy)
- ensureOwnerSignature() [↗](#ensureownersignature)

Defined in: packages/nft/src/interfaces/update.ts:62

The **NFTStandardUpdate** contract is the default implementation of the `NFTUpdateBase` interface.

## Extends

- `SmartContract`

## Implements

- [`NFTUpdateBase`](nftsrctypealiasnftupdatebase)

## Constructors

### new NFTStandardUpdate()

```ts
new NFTStandardUpdate(address: PublicKey, tokenId?: Field): NFTStandardUpdate
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NFTStandardUpdate`](nftsrcclassnftstandardupdate)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### admin

```ts
admin: State<PublicKey>;
```

Defined in: packages/nft/src/interfaces/update.ts:66

The public key of the contract's administrator.

## Methods

### canUpdate()

```ts
canUpdate(
   collectionAddress: PublicKey, 
   nftAddress: PublicKey, 
   input: NFTState, 
output: NFTState): Promise<Bool>
```

Defined in: packages/nft/src/interfaces/update.ts:95

Checks if an NFT can be updated from its current state (`input`) to a new state (`output`).

#### Parameters

##### collectionAddress

`PublicKey`

The public key of the NFT collection address.

##### nftAddress

`PublicKey`

The public key of the NFT.

##### input

[`NFTState`](nftsrcclassnftstate)

The current state of the NFT.

##### output

[`NFTState`](nftsrcclassnftstate)

The desired new state of the NFT.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the update is permitted.

#### Implementation of

```ts
NFTUpdateBase.canUpdate
```

***

### deploy()

```ts
deploy(props: NFTUpdateDeployProps): Promise<void>
```

Defined in: packages/nft/src/interfaces/update.ts:72

Deploys the contract with initial settings.

#### Parameters

##### props

[`NFTUpdateDeployProps`](nftsrcinterfacenftupdatedeployprops)

Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
NFTUpdateBase.deploy
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

Defined in: packages/nft/src/interfaces/update.ts:87

Ensures that the transaction is authorized by the contract owner.

#### Returns

`Promise`\<`AccountUpdate`\>

A signed `AccountUpdate` from the admin.
