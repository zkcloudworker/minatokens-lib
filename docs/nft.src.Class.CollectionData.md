---
title: CollectionData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.CollectionData
order: 173
---

# Class: CollectionData

## Properties overview

- canChangeBaseUri:  Bool = Bool; [↗](#canchangebaseuri)
- canChangeCreator:  Bool = Bool; [↗](#canchangecreator)
- canChangeName:  Bool = Bool; [↗](#canchangename)
- canChangeRoyalty:  Bool = Bool; [↗](#canchangeroyalty)
- canChangeTransferFee:  Bool = Bool; [↗](#canchangetransferfee)
- canMint:  Bool = Bool; [↗](#canmint)
- canPause:  Bool = Bool; [↗](#canpause)
- canSetAdmin:  Bool = Bool; [↗](#cansetadmin)
- isPaused:  Bool = Bool; [↗](#ispaused)
- requireBuyApproval:  Bool = Bool; [↗](#requirebuyapproval)
- requireCreatorSignatureToUpgradeCollection:  Bool = Bool; [↗](#requirecreatorsignaturetoupgradecollection)
- requireCreatorSignatureToUpgradeNFT:  Bool = Bool; [↗](#requirecreatorsignaturetoupgradenft)
- requireOfferApproval:  Bool = Bool; [↗](#requireofferapproval)
- requireSaleApproval:  Bool = Bool; [↗](#requiresaleapproval)
- requireTransferApproval:  Bool = Bool; [↗](#requiretransferapproval)
- requireUpdateApproval:  Bool = Bool; [↗](#requireupdateapproval)
- royaltyFee:  UInt32 = UInt32; [↗](#royaltyfee)
- transferFee:  UInt64 = UInt64; [↗](#transferfee)
- upgradeAuthority:  PublicKey = PublicKey; [↗](#upgradeauthority)

## Methods overview

- pack() [↗](#pack)
- new() [↗](#new)
- unpack() [↗](#unpack)

Represents the data associated with an NFT collection, including configuration parameters and permission flags.

## Extends

- \{
  `canChangeBaseUri`: `Bool`;
  `canChangeCreator`: `Bool`;
  `canChangeName`: `Bool`;
  `canChangeRoyalty`: `Bool`;
  `canChangeTransferFee`: `Bool`;
  `canMint`: `Bool`;
  `canPause`: `Bool`;
  `canSetAdmin`: `Bool`;
  `isPaused`: `Bool`;
  `requireBuyApproval`: `Bool`;
  `requireCreatorSignatureToUpgradeCollection`: `Bool`;
  `requireCreatorSignatureToUpgradeNFT`: `Bool`;
  `requireOfferApproval`: `Bool`;
  `requireSaleApproval`: `Bool`;
  `requireTransferApproval`: `Bool`;
  `requireUpdateApproval`: `Bool`;
  `royaltyFee`: `UInt32`;
  `transferFee`: `UInt64`;
  `upgradeAuthority`: `PublicKey`;
 \}

## Constructors

### new CollectionData()

```ts
new CollectionData(value: {
  canChangeBaseUri: Bool;
  canChangeCreator: Bool;
  canChangeName: Bool;
  canChangeRoyalty: Bool;
  canChangeTransferFee: Bool;
  canMint: Bool;
  canPause: Bool;
  canSetAdmin: Bool;
  isPaused: Bool;
  requireBuyApproval: Bool;
  requireCreatorSignatureToUpgradeCollection: Bool;
  requireCreatorSignatureToUpgradeNFT: Bool;
  requireOfferApproval: Bool;
  requireSaleApproval: Bool;
  requireTransferApproval: Bool;
  requireUpdateApproval: Bool;
  royaltyFee: UInt32;
  transferFee: UInt64;
  upgradeAuthority: PublicKey;
 }): CollectionData
```

#### Parameters

##### value

###### canChangeBaseUri

`Bool` = `Bool`

If true, the base URI for the collection's metadata can be changed.

###### canChangeCreator

`Bool` = `Bool`

If true, the creator of the collection can be changed.

###### canChangeName

`Bool` = `Bool`

If true, the name of the collection can be changed.

###### canChangeRoyalty

`Bool` = `Bool`

If true, the royalty fee configuration can be changed.

###### canChangeTransferFee

`Bool` = `Bool`

If true, the transfer fee configuration can be changed.

###### canMint

`Bool` = `Bool`

If true, new NFTs can be minted in this collection.

###### canPause

`Bool` = `Bool`

If true, the collection can be paused and resumed by authorized parties.

###### canSetAdmin

`Bool` = `Bool`

If true, the admin contract associated with the collection can be changed.

###### isPaused

`Bool` = `Bool`

Indicates whether the collection is currently paused.

###### requireBuyApproval

`Bool` = `Bool`

If true, purchasing NFTs requires approval from the admin contract.

###### requireCreatorSignatureToUpgradeCollection

`Bool` = `Bool`

If true, upgrading the collection's verification key requires the creator's signature.

###### requireCreatorSignatureToUpgradeNFT

`Bool` = `Bool`

If true, upgrading an NFT's verification key requires the creator's signature.

###### requireOfferApproval

`Bool` = `Bool`

If true, listing NFTs for sale requires approval from the admin contract.

###### requireSaleApproval

`Bool` = `Bool`

If true, selling NFTs requires approval from the admin contract.

###### requireTransferApproval

`Bool` = `Bool`

If true, transferring NFTs requires approval from the admin contract.

###### requireUpdateApproval

`Bool` = `Bool`

If true, updating NFTs requires approval from the admin contract.

###### royaltyFee

`UInt32` = `UInt32`

The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%).

###### transferFee

`UInt64` = `UInt64`

The transfer fee amount.

###### upgradeAuthority

`PublicKey` = `PublicKey`

The public key of the upgrade authority contract.

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### canChangeBaseUri

```ts
canChangeBaseUri: Bool = Bool;
```

If true, the base URI for the collection's metadata can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canChangeBaseUri`

#### Defined in

[packages/nft/src/contracts/types.ts:489](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L489)

***

### canChangeCreator

```ts
canChangeCreator: Bool = Bool;
```

If true, the creator of the collection can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canChangeCreator`

#### Defined in

[packages/nft/src/contracts/types.ts:487](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L487)

***

### canChangeName

```ts
canChangeName: Bool = Bool;
```

If true, the name of the collection can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canChangeName`

#### Defined in

[packages/nft/src/contracts/types.ts:485](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L485)

***

### canChangeRoyalty

```ts
canChangeRoyalty: Bool = Bool;
```

If true, the royalty fee configuration can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canChangeRoyalty`

#### Defined in

[packages/nft/src/contracts/types.ts:491](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L491)

***

### canChangeTransferFee

```ts
canChangeTransferFee: Bool = Bool;
```

If true, the transfer fee configuration can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canChangeTransferFee`

#### Defined in

[packages/nft/src/contracts/types.ts:493](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L493)

***

### canMint

```ts
canMint: Bool = Bool;
```

If true, new NFTs can be minted in this collection.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canMint`

#### Defined in

[packages/nft/src/contracts/types.ts:481](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L481)

***

### canPause

```ts
canPause: Bool = Bool;
```

If true, the collection can be paused and resumed by authorized parties.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canPause`

#### Defined in

[packages/nft/src/contracts/types.ts:483](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L483)

***

### canSetAdmin

```ts
canSetAdmin: Bool = Bool;
```

If true, the admin contract associated with the collection can be changed.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).canSetAdmin`

#### Defined in

[packages/nft/src/contracts/types.ts:495](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L495)

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the collection is currently paused.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).isPaused`

#### Defined in

[packages/nft/src/contracts/types.ts:497](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L497)

***

### requireBuyApproval

```ts
requireBuyApproval: Bool = Bool;
```

If true, purchasing NFTs requires approval from the admin contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireBuyApproval`

#### Defined in

[packages/nft/src/contracts/types.ts:475](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L475)

***

### requireCreatorSignatureToUpgradeCollection

```ts
requireCreatorSignatureToUpgradeCollection: Bool = Bool;
```

If true, upgrading the collection's verification key requires the creator's signature.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireCreatorSignatureToUpgradeCollection`

#### Defined in

[packages/nft/src/contracts/types.ts:477](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L477)

***

### requireCreatorSignatureToUpgradeNFT

```ts
requireCreatorSignatureToUpgradeNFT: Bool = Bool;
```

If true, upgrading an NFT's verification key requires the creator's signature.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireCreatorSignatureToUpgradeNFT`

#### Defined in

[packages/nft/src/contracts/types.ts:479](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L479)

***

### requireOfferApproval

```ts
requireOfferApproval: Bool = Bool;
```

If true, listing NFTs for sale requires approval from the admin contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireOfferApproval`

#### Defined in

[packages/nft/src/contracts/types.ts:471](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L471)

***

### requireSaleApproval

```ts
requireSaleApproval: Bool = Bool;
```

If true, selling NFTs requires approval from the admin contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireSaleApproval`

#### Defined in

[packages/nft/src/contracts/types.ts:473](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L473)

***

### requireTransferApproval

```ts
requireTransferApproval: Bool = Bool;
```

If true, transferring NFTs requires approval from the admin contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireTransferApproval`

#### Defined in

[packages/nft/src/contracts/types.ts:467](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L467)

***

### requireUpdateApproval

```ts
requireUpdateApproval: Bool = Bool;
```

If true, updating NFTs requires approval from the admin contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).requireUpdateApproval`

#### Defined in

[packages/nft/src/contracts/types.ts:469](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L469)

***

### royaltyFee

```ts
royaltyFee: UInt32 = UInt32;
```

The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%).

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).royaltyFee`

#### Defined in

[packages/nft/src/contracts/types.ts:463](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L463)

***

### transferFee

```ts
transferFee: UInt64 = UInt64;
```

The transfer fee amount.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).transferFee`

#### Defined in

[packages/nft/src/contracts/types.ts:465](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L465)

***

### upgradeAuthority

```ts
upgradeAuthority: PublicKey = PublicKey;
```

The public key of the upgrade authority contract.

#### Inherited from

`Struct({
  /** The public key of the upgrade authority contract. */
  upgradeAuthority: PublicKey,
  /** The royalty fee percentage (e.g., 1000 = 1%, 100 = 0.1%). */
  royaltyFee: UInt32, // 1000 = 1%, 100 = 0.1%, 10000 = 10%
  /** The transfer fee amount. */
  transferFee: UInt64,
  /** If true, transferring NFTs requires approval from the admin contract. */
  requireTransferApproval: Bool,
  /** If true, updating NFTs requires approval from the admin contract. */
  requireUpdateApproval: Bool,
  /** If true, listing NFTs for sale requires approval from the admin contract. */
  requireOfferApproval: Bool,
  /** If true, selling NFTs requires approval from the admin contract. */
  requireSaleApproval: Bool,
  /** If true, purchasing NFTs requires approval from the admin contract. */
  requireBuyApproval: Bool,
  /** If true, upgrading the collection's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeCollection: Bool,
  /** If true, upgrading an NFT's verification key requires the creator's signature. */
  requireCreatorSignatureToUpgradeNFT: Bool,
  /** If true, new NFTs can be minted in this collection. */
  canMint: Bool,
  /** If true, the collection can be paused and resumed by authorized parties. */
  canPause: Bool,
  /** If true, the name of the collection can be changed. */
  canChangeName: Bool,
  /** If true, the creator of the collection can be changed. */
  canChangeCreator: Bool,
  /** If true, the base URI for the collection's metadata can be changed. */
  canChangeBaseUri: Bool,
  /** If true, the royalty fee configuration can be changed. */
  canChangeRoyalty: Bool,
  /** If true, the transfer fee configuration can be changed. */
  canChangeTransferFee: Bool,
  /** If true, the admin contract associated with the collection can be changed. */
  canSetAdmin: Bool,
  /** Indicates whether the collection is currently paused. */
  isPaused: Bool,
}).upgradeAuthority`

#### Defined in

[packages/nft/src/contracts/types.ts:461](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L461)

## Methods

### pack()

```ts
pack(): CollectionDataPacked
```

Packs the CollectionData into a CollectionDataPacked representation for efficient storage.

#### Returns

[`CollectionDataPacked`](nftsrcclasscollectiondatapacked)

The packed CollectionDataPacked instance.

#### Defined in

[packages/nft/src/contracts/types.ts:577](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L577)

***

### new()

```ts
static new(params: {
  canChangeBaseUri: boolean;
  canChangeCreator: boolean;
  canChangeName: boolean;
  canChangeRoyalty: boolean;
  canChangeTransferFee: boolean;
  canMint: boolean;
  canPause: boolean;
  canSetAdmin: boolean;
  isPaused: boolean;
  requireBuyApproval: boolean;
  requireCreatorSignatureToUpgradeCollection: boolean;
  requireCreatorSignatureToUpgradeNFT: boolean;
  requireOfferApproval: boolean;
  requireSaleApproval: boolean;
  requireTransferApproval: boolean;
  requireUpdateApproval: boolean;
  royaltyFee: number;
  transferFee: number;
  upgradeAuthority: PublicKey;
 }): CollectionData
```

Creates a new CollectionData instance with specified parameters.

#### Parameters

##### params

The parameters to create the CollectionData.

###### canChangeBaseUri

`boolean`

###### canChangeCreator

`boolean`

###### canChangeName

`boolean`

###### canChangeRoyalty

`boolean`

###### canChangeTransferFee

`boolean`

###### canMint

`boolean`

###### canPause

`boolean`

###### canSetAdmin

`boolean`

###### isPaused

`boolean`

###### requireBuyApproval

`boolean`

###### requireCreatorSignatureToUpgradeCollection

`boolean`

###### requireCreatorSignatureToUpgradeNFT

`boolean`

###### requireOfferApproval

`boolean`

###### requireSaleApproval

`boolean`

###### requireTransferApproval

`boolean`

###### requireUpdateApproval

`boolean`

###### royaltyFee

`number`

###### transferFee

`number`

###### upgradeAuthority

`PublicKey`

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

A new CollectionData instance.

#### Defined in

[packages/nft/src/contracts/types.ts:504](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L504)

***

### unpack()

```ts
static unpack(packed: CollectionDataPacked): CollectionData
```

Unpacks a CollectionDataPacked instance into a CollectionData instance.

#### Parameters

##### packed

[`CollectionDataPacked`](nftsrcclasscollectiondatapacked)

The packed CollectionDataPacked instance.

#### Returns

[`CollectionData`](nftsrcclasscollectiondata)

A new CollectionData instance.

#### Defined in

[packages/nft/src/contracts/types.ts:609](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L609)
