---
title: MintEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintEvent
order: 198
---

# Class: MintEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- initialState:  NFTStateStruct = NFTStateStruct; [↗](#initialstate)

Defined in: [packages/nft/src/interfaces/events.ts:19](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L19)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / The initial state of the NFT at the time of minting. /
  initialState: NFTStateStruct,
  / The public key address of the minted NFT. /
  address: PublicKey,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L23)

The public key address of the minted NFT.

#### Inherited from

```ts
Struct({
  / The initial state of the NFT at the time of minting. /
  initialState: NFTStateStruct,
  / The public key address of the minted NFT. /
  address: PublicKey,
}).address
```

***

### initialState

```ts
initialState: NFTStateStruct = NFTStateStruct;
```

Defined in: [packages/nft/src/interfaces/events.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L21)

The initial state of the NFT at the time of minting.

#### Inherited from

```ts
Struct({
  / The initial state of the NFT at the time of minting. /
  initialState: NFTStateStruct,
  / The public key address of the minted NFT. /
  address: PublicKey,
}).initialState
```
