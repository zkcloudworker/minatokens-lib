---
title: CollectionDataPacked
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.CollectionDataPacked
order: 174
---

# Class: CollectionDataPacked

## Properties overview

- packedData:  Field = Field; [↗](#packeddata)
- upgradeAuthorityX:  Field = Field; [↗](#upgradeauthorityx)

Represents the packed collection data, including the upgrade authority's x-coordinate and packed data fields.

## Extends

- \{
  `packedData`: `Field`;
  `upgradeAuthorityX`: `Field`;
 \}

## Constructors

### new CollectionDataPacked()

```ts
new CollectionDataPacked(value: {
  packedData: Field;
  upgradeAuthorityX: Field;
 }): CollectionDataPacked
```

#### Parameters

##### value

###### packedData

`Field` = `Field`

The packed data field containing collection parameters and flags.

###### upgradeAuthorityX

`Field` = `Field`

The x-coordinate of the upgrade authority's public key.

#### Returns

[`CollectionDataPacked`](nftsrcclasscollectiondatapacked)

#### Inherited from

`Struct({
  /** The x-coordinate of the upgrade authority's public key. */
  upgradeAuthorityX: Field,
  /** The packed data field containing collection parameters and flags. */
  packedData: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### packedData

```ts
packedData: Field = Field;
```

The packed data field containing collection parameters and flags.

#### Inherited from

`Struct({
  /** The x-coordinate of the upgrade authority's public key. */
  upgradeAuthorityX: Field,
  /** The packed data field containing collection parameters and flags. */
  packedData: Field,
}).packedData`

#### Defined in

[packages/nft/src/contracts/types.ts:453](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L453)

***

### upgradeAuthorityX

```ts
upgradeAuthorityX: Field = Field;
```

The x-coordinate of the upgrade authority's public key.

#### Inherited from

`Struct({
  /** The x-coordinate of the upgrade authority's public key. */
  upgradeAuthorityX: Field,
  /** The packed data field containing collection parameters and flags. */
  packedData: Field,
}).upgradeAuthorityX`

#### Defined in

[packages/nft/src/contracts/types.ts:451](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L451)
