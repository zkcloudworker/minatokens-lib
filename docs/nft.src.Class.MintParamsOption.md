---
title: MintParamsOption
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintParamsOption
order: 184
---

# Class: MintParamsOption

Represents an optional MintParams, used in scenarios where minting may or may not be allowed.

## Extends

- `Option`\<[`MintParams`](nftsrcclassmintparams), \{
  `address`: \{\};
  `data`: \{
     `canChangeMetadata`: `boolean`;
     `canChangeMetadataVerificationKeyHash`: `boolean`;
     `canChangeName`: `boolean`;
     `canChangeOwnerByProof`: `boolean`;
     `canChangeOwnerBySignature`: `boolean`;
     `canChangePrice`: `boolean`;
     `canChangeStorage`: `boolean`;
     `canPause`: `boolean`;
     `id`: `bigint`;
     `isPaused`: `boolean`;
     `price`: `bigint`;
     `requireOwnerSignatureToUpgrade`: `boolean`;
     `version`: `bigint`;
    \};
  `expiry`: `bigint`;
  `fee`: `bigint`;
  `metadata`: `bigint`;
  `metadataVerificationKeyHash`: `bigint`;
  `name`: `bigint`;
  `owner`: \{\};
  `storage`: \{\};
  `tokenId`: `bigint`;
 \}\>

## Constructors

### new MintParamsOption()

```ts
new MintParamsOption(option: {}): MintParamsOption
```

#### Parameters

##### option

#### Returns

[`MintParamsOption`](nftsrcclassmintparamsoption)

#### Inherited from

`Option(MintParams).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/option.d.ts:35
