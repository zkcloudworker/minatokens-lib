---
title: PauseNFTEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.PauseNFTEvent
order: 198
---

# Class: PauseNFTEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- isPaused:  Bool = Bool; [↗](#ispaused)

Emitted when an NFT is paused or resumed.

## Extends

- \{
  `address`: `PublicKey`;
  `isPaused`: `Bool`;
 \}

## Constructors

### new PauseNFTEvent()

```ts
new PauseNFTEvent(value: {
  address: PublicKey;
  isPaused: Bool;
 }): PauseNFTEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT.

###### isPaused

`Bool` = `Bool`

Indicates whether the NFT is paused (`true`) or resumed (`false`).

#### Returns

[`PauseNFTEvent`](nftsrcclasspausenftevent)

#### Inherited from

Struct(\{
  /\*\* The public key address of the NFT. \*/
  address: PublicKey,
  /\*\* Indicates whether the NFT is paused (\`true\`) or resumed (\`false\`). \*/
  isPaused: Bool,
\}).constructor

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the NFT.

#### Inherited from

Struct(\{
  /\*\* The public key address of the NFT. \*/
  address: PublicKey,
  /\*\* Indicates whether the NFT is paused (\`true\`) or resumed (\`false\`). \*/
  isPaused: Bool,
\}).address

#### Defined in

[packages/nft/src/contracts/events.ts:66](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L66)

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the NFT is paused (`true`) or resumed (`false`).

#### Inherited from

Struct(\{
  /\*\* The public key address of the NFT. \*/
  address: PublicKey,
  /\*\* Indicates whether the NFT is paused (\`true\`) or resumed (\`false\`). \*/
  isPaused: Bool,
\}).isPaused

#### Defined in

[packages/nft/src/contracts/events.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L68)
