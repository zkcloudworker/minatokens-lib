---
title: UpgradeVerificationKeyEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.UpgradeVerificationKeyEvent
order: 228
---

# Class: UpgradeVerificationKeyEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- tokenId:  Field = Field; [↗](#tokenid)
- verificationKeyHash:  Field = Field; [↗](#verificationkeyhash)

Defined in: [packages/nft/src/interfaces/events.ts:93](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L93)

Emitted when the verification key of an NFT is upgraded.

## Extends

- \{
  `address`: `PublicKey`;
  `tokenId`: `Field`;
  `verificationKeyHash`: `Field`;
 \}

## Constructors

### new UpgradeVerificationKeyEvent()

```ts
new UpgradeVerificationKeyEvent(value: {
  address: PublicKey;
  tokenId: Field;
  verificationKeyHash: Field;
 }): UpgradeVerificationKeyEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT whose verification key is upgraded.

###### tokenId

`Field` = `Field`

The version number of the NFT state after the upgrade.

###### verificationKeyHash

`Field` = `Field`

The hash of the new verification key.

#### Returns

[`UpgradeVerificationKeyEvent`](nftsrcclassupgradeverificationkeyevent)

#### Inherited from

```ts
Struct({
  / The hash of the new verification key. /
  verificationKeyHash: Field,
  / The public key address of the NFT whose verification key is upgraded. /
  address: PublicKey,
  / The version number of the NFT state after the upgrade. /
  tokenId: Field,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:97](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L97)

The public key address of the NFT whose verification key is upgraded.

#### Inherited from

```ts
Struct({
  / The hash of the new verification key. /
  verificationKeyHash: Field,
  / The public key address of the NFT whose verification key is upgraded. /
  address: PublicKey,
  / The version number of the NFT state after the upgrade. /
  tokenId: Field,
}).address
```

***

### tokenId

```ts
tokenId: Field = Field;
```

Defined in: [packages/nft/src/interfaces/events.ts:99](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L99)

The version number of the NFT state after the upgrade.

#### Inherited from

```ts
Struct({
  / The hash of the new verification key. /
  verificationKeyHash: Field,
  / The public key address of the NFT whose verification key is upgraded. /
  address: PublicKey,
  / The version number of the NFT state after the upgrade. /
  tokenId: Field,
}).tokenId
```

***

### verificationKeyHash

```ts
verificationKeyHash: Field = Field;
```

Defined in: [packages/nft/src/interfaces/events.ts:95](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L95)

The hash of the new verification key.

#### Inherited from

```ts
Struct({
  / The hash of the new verification key. /
  verificationKeyHash: Field,
  / The public key address of the NFT whose verification key is upgraded. /
  address: PublicKey,
  / The version number of the NFT state after the upgrade. /
  tokenId: Field,
}).verificationKeyHash
```
