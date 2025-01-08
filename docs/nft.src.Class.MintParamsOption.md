---
title: MintParamsOption
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintParamsOption
order: 200
---

# Class: MintParamsOption

Defined in: [packages/nft/src/interfaces/types.ts:574](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L574)

Represents an optional MintParams, used in scenarios where minting may or may not be allowed.

## Extends

- `Option`\<[`MintParams`](nftsrcclassmintparams), \{
  `address`: \{\};
  `data`: \{
     `approved`: \{\};
     `canApprove`: `boolean`;
     `canChangeMetadata`: `boolean`;
     `canChangeMetadataVerificationKeyHash`: `boolean`;
     `canChangeName`: `boolean`;
     `canChangeOwnerByProof`: `boolean`;
     `canChangeStorage`: `boolean`;
     `canPause`: `boolean`;
     `canTransfer`: `boolean`;
     `id`: `bigint`;
     `isPaused`: `boolean`;
     `owner`: \{\};
     `requireOwnerAuthorizationToUpgrade`: `boolean`;
     `version`: `bigint`;
    \};
  `expiry`: `bigint`;
  `fee`: `bigint`;
  `metadata`: `bigint`;
  `metadataVerificationKeyHash`: `bigint`;
  `name`: `bigint`;
  `storage`: \{\};
  `tokenId`: `bigint`;
 \}\>

## Constructors

### new MintParamsOption()

```ts
new MintParamsOption(option: {}): MintParamsOption
```

Defined in: node\_modules/o1js/dist/node/lib/provable/option.d.ts:35

#### Parameters

##### option

#### Returns

[`MintParamsOption`](nftsrcclassmintparamsoption)

#### Inherited from

```ts
Option(MintParams).constructor
```
