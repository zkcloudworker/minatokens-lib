---
title: LimitMintingEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.LimitMintingEvent
order: 193
---

# Class: LimitMintingEvent

## Properties overview

- mintingLimited:  Bool = Bool; [↗](#mintinglimited)

Defined in: [packages/nft/src/interfaces/events.ts:112](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L112)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### mintingLimited

`Bool` = `Bool`

Indicates whether minting is limited (`true`) or not (`false`).

#### Returns

[`LimitMintingEvent`](nftsrcclasslimitmintingevent)

#### Inherited from

```ts
Struct({
  / Indicates whether minting is limited (true) or not (false). /
  mintingLimited: Bool,
}).constructor
```

## Properties

### mintingLimited

```ts
mintingLimited: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/events.ts:114](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L114)

Indicates whether minting is limited (`true`) or not (`false`).

#### Inherited from

```ts
Struct({
  / Indicates whether minting is limited (true) or not (false). /
  mintingLimited: Bool,
}).mintingLimited
```
