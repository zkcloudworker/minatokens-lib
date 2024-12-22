---
title: LimitMintingEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.LimitMintingEvent
order: 177
---

# Class: LimitMintingEvent

## Properties overview

- mintingLimited:  Bool = Bool; [↗](#mintinglimited)

Emitted when minting of new NFTs is limited in the collection.

## Extends

- \{
  `mintingLimited`: `Bool`;
 \}

## Constructors

### new LimitMintingEvent()

```ts
new LimitMintingEvent(value: {
  mintingLimited: Bool;
 }): LimitMintingEvent
```

#### Parameters

##### value

###### mintingLimited

`Bool` = `Bool`

Indicates whether minting is limited (`true`) or not (`false`).

#### Returns

[`LimitMintingEvent`](nftsrcclasslimitmintingevent)

#### Inherited from

Struct(\{
  /\*\* Indicates whether minting is limited (\`true\`) or not (\`false\`). \*/
  mintingLimited: Bool,
\}).constructor

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### mintingLimited

```ts
mintingLimited: Bool = Bool;
```

Indicates whether minting is limited (`true`) or not (`false`).

#### Inherited from

Struct(\{
  /\*\* Indicates whether minting is limited (\`true\`) or not (\`false\`). \*/
  mintingLimited: Bool,
\}).mintingLimited

#### Defined in

[packages/nft/src/contracts/events.ts:132](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L132)
