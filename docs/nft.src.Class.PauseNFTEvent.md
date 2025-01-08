---
title: PauseNFTEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.PauseNFTEvent
order: 219
---

# Class: PauseNFTEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- isPaused:  Bool = Bool; [↗](#ispaused)

Defined in: [packages/nft/src/interfaces/events.ts:83](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L83)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / The public key address of the NFT. /
  address: PublicKey,
  / Indicates whether the NFT is paused (true) or resumed (false). /
  isPaused: Bool,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L85)

The public key address of the NFT.

#### Inherited from

```ts
Struct({
  / The public key address of the NFT. /
  address: PublicKey,
  / Indicates whether the NFT is paused (true) or resumed (false). /
  isPaused: Bool,
}).address
```

***

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/events.ts:87](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L87)

Indicates whether the NFT is paused (`true`) or resumed (`false`).

#### Inherited from

```ts
Struct({
  / The public key address of the NFT. /
  address: PublicKey,
  / Indicates whether the NFT is paused (true) or resumed (false). /
  isPaused: Bool,
}).isPaused
```
