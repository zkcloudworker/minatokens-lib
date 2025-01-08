---
title: UpgradeVerificationKeyData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.UpgradeVerificationKeyData
order: 227
---

# Class: UpgradeVerificationKeyData

## Properties overview

- isOwnerApprovalRequired:  Bool = Bool; [↗](#isownerapprovalrequired)
- owner:  PublicKey = PublicKey; [↗](#owner)

Defined in: [packages/nft/src/interfaces/events.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L102)

## Extends

- \{
  `isOwnerApprovalRequired`: `Bool`;
  `owner`: `PublicKey`;
 \}

## Constructors

### new UpgradeVerificationKeyData()

```ts
new UpgradeVerificationKeyData(value: {
  isOwnerApprovalRequired: Bool;
  owner: PublicKey;
 }): UpgradeVerificationKeyData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isOwnerApprovalRequired

`Bool` = `Bool`

Indicates whether the owner approval is required to upgrade the verification key.

###### owner

`PublicKey` = `PublicKey`

The owner of the NFT.

#### Returns

[`UpgradeVerificationKeyData`](nftsrcclassupgradeverificationkeydata)

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / Indicates whether the owner approval is required to upgrade the verification key. /
  isOwnerApprovalRequired: Bool,
}).constructor
```

## Properties

### isOwnerApprovalRequired

```ts
isOwnerApprovalRequired: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/events.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L106)

Indicates whether the owner approval is required to upgrade the verification key.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / Indicates whether the owner approval is required to upgrade the verification key. /
  isOwnerApprovalRequired: Bool,
}).isOwnerApprovalRequired
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:104](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L104)

The owner of the NFT.

#### Inherited from

```ts
Struct({
  / The owner of the NFT. /
  owner: PublicKey,
  / Indicates whether the owner approval is required to upgrade the verification key. /
  isOwnerApprovalRequired: Bool,
}).owner
```
