---
title: MintEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintEvent
order: 182
---

# Class: MintEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- initialState:  NFTStateStruct = NFTStateStruct; [↗](#initialstate)

Emitted when a new NFT is minted in the collection.

## Extends

- \{
  `address`: `PublicKey`;
  `initialState`: [`NFTStateStruct`](nftsrcclassnftstatestruct);
 \}

## Constructors

### new MintEvent()

```ts
new MintEvent(value: {
  address: PublicKey;
  initialState: NFTStateStruct;
 }): MintEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the minted NFT.

###### initialState

[`NFTStateStruct`](nftsrcclassnftstatestruct) = `NFTStateStruct`

The initial state of the NFT at the time of minting.

#### Returns

[`MintEvent`](nftsrcclassmintevent)

#### Inherited from

`Struct({
  /** The initial state of the NFT at the time of minting. */
  initialState: NFTStateStruct,
  /** The public key address of the minted NFT. */
  address: PublicKey,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the minted NFT.

#### Inherited from

`Struct({
  /** The initial state of the NFT at the time of minting. */
  initialState: NFTStateStruct,
  /** The public key address of the minted NFT. */
  address: PublicKey,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L24)

***

### initialState

```ts
initialState: NFTStateStruct = NFTStateStruct;
```

The initial state of the NFT at the time of minting.

#### Inherited from

`Struct({
  /** The initial state of the NFT at the time of minting. */
  initialState: NFTStateStruct,
  /** The public key address of the minted NFT. */
  address: PublicKey,
}).initialState`

#### Defined in

[packages/nft/src/contracts/events.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L22)
