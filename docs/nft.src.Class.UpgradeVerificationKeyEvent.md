---
title: UpgradeVerificationKeyEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.UpgradeVerificationKeyEvent
order: 203
---

# Class: UpgradeVerificationKeyEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- verificationKeyHash:  Field = Field; [↗](#verificationkeyhash)
- version:  UInt32 = UInt32; [↗](#version)

Emitted when the verification key of an NFT is upgraded.

## Extends

- \{
  `address`: `PublicKey`;
  `verificationKeyHash`: `Field`;
  `version`: `UInt32`;
 \}

## Constructors

### new UpgradeVerificationKeyEvent()

```ts
new UpgradeVerificationKeyEvent(value: {
  address: PublicKey;
  verificationKeyHash: Field;
  version: UInt32;
 }): UpgradeVerificationKeyEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT whose verification key is upgraded.

###### verificationKeyHash

`Field` = `Field`

The hash of the new verification key.

###### version

`UInt32` = `UInt32`

The version number of the NFT state after the upgrade.

#### Returns

[`UpgradeVerificationKeyEvent`](nftsrcclassupgradeverificationkeyevent)

#### Inherited from

`Struct({
  /** The hash of the new verification key. */
  verificationKeyHash: Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: PublicKey,
  /** The version number of the NFT state after the upgrade. */
  version: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the NFT whose verification key is upgraded.

#### Inherited from

`Struct({
  /** The hash of the new verification key. */
  verificationKeyHash: Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: PublicKey,
  /** The version number of the NFT state after the upgrade. */
  version: UInt32,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L122)

***

### verificationKeyHash

```ts
verificationKeyHash: Field = Field;
```

The hash of the new verification key.

#### Inherited from

`Struct({
  /** The hash of the new verification key. */
  verificationKeyHash: Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: PublicKey,
  /** The version number of the NFT state after the upgrade. */
  version: UInt32,
}).verificationKeyHash`

#### Defined in

[packages/nft/src/contracts/events.ts:120](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L120)

***

### version

```ts
version: UInt32 = UInt32;
```

The version number of the NFT state after the upgrade.

#### Inherited from

`Struct({
  /** The hash of the new verification key. */
  verificationKeyHash: Field,
  /** The public key address of the NFT whose verification key is upgraded. */
  address: PublicKey,
  /** The version number of the NFT state after the upgrade. */
  version: UInt32,
}).version`

#### Defined in

[packages/nft/src/contracts/events.ts:124](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L124)
