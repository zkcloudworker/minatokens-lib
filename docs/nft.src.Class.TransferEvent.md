---
title: TransferEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.TransferEvent
order: 201
---

# Class: TransferEvent

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- from:  PublicKey = PublicKey; [↗](#from)
- to:  PublicKey = PublicKey; [↗](#to)

Emitted when an NFT is transferred from one owner to another.

## Extends

- \{
  `address`: `PublicKey`;
  `from`: `PublicKey`;
  `to`: `PublicKey`;
 \}

## Constructors

### new TransferEvent()

```ts
new TransferEvent(value: {
  address: PublicKey;
  from: PublicKey;
  to: PublicKey;
 }): TransferEvent
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The public key address of the NFT being transferred.

###### from

`PublicKey` = `PublicKey`

The public key of the sender (current owner) before the transfer.

###### to

`PublicKey` = `PublicKey`

The public key of the recipient (new owner) after the transfer.

#### Returns

[`TransferEvent`](nftsrcclasstransferevent)

#### Inherited from

`Struct({
  /** The public key of the sender (current owner) before the transfer. */
  from: PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: PublicKey,
  /** The public key address of the NFT being transferred. */
  address: PublicKey,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The public key address of the NFT being transferred.

#### Inherited from

`Struct({
  /** The public key of the sender (current owner) before the transfer. */
  from: PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: PublicKey,
  /** The public key address of the NFT being transferred. */
  address: PublicKey,
}).address`

#### Defined in

[packages/nft/src/contracts/events.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L58)

***

### from

```ts
from: PublicKey = PublicKey;
```

The public key of the sender (current owner) before the transfer.

#### Inherited from

`Struct({
  /** The public key of the sender (current owner) before the transfer. */
  from: PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: PublicKey,
  /** The public key address of the NFT being transferred. */
  address: PublicKey,
}).from`

#### Defined in

[packages/nft/src/contracts/events.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L54)

***

### to

```ts
to: PublicKey = PublicKey;
```

The public key of the recipient (new owner) after the transfer.

#### Inherited from

`Struct({
  /** The public key of the sender (current owner) before the transfer. */
  from: PublicKey,
  /** The public key of the recipient (new owner) after the transfer. */
  to: PublicKey,
  /** The public key address of the NFT being transferred. */
  address: PublicKey,
}).to`

#### Defined in

[packages/nft/src/contracts/events.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/events.ts#L56)
