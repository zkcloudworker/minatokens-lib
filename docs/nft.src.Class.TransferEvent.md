---
title: TransferEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.TransferEvent
order: 222
---

# Class: TransferEvent

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- collection:  PublicKey = PublicKey; [↗](#collection)
- fee:  UInt64Option = UInt64Option; [↗](#fee)
- from:  PublicKey = PublicKey; [↗](#from)
- nft:  PublicKey = PublicKey; [↗](#nft)
- price:  UInt64Option = UInt64Option; [↗](#price)
- to:  PublicKey = PublicKey; [↗](#to)
- transferByOwner:  Bool = Bool; [↗](#transferbyowner)

Defined in: [packages/nft/src/interfaces/events.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L61)

Emitted when an NFT is transferred from one owner to another.

## Extends

- \{
  `approved`: `PublicKey`;
  `collection`: `PublicKey`;
  `fee`: [`UInt64Option`](nftsrcclassuint64option);
  `from`: `PublicKey`;
  `nft`: `PublicKey`;
  `price`: [`UInt64Option`](nftsrcclassuint64option);
  `to`: `PublicKey`;
  `transferByOwner`: `Bool`;
 \}

## Constructors

### new TransferEvent()

```ts
new TransferEvent(value: {
  approved: PublicKey;
  collection: PublicKey;
  fee: UInt64Option;
  from: PublicKey;
  nft: PublicKey;
  price: UInt64Option;
  to: PublicKey;
  transferByOwner: Bool;
 }): TransferEvent
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approved

`PublicKey` = `PublicKey`

The public key of the approved address.

###### collection

`PublicKey` = `PublicKey`

The public key of the collection.

###### fee

[`UInt64Option`](nftsrcclassuint64option) = `UInt64Option`

The fee paid for the transfer.

###### from

`PublicKey` = `PublicKey`

The public key of the sender (current owner) before the transfer.

###### nft

`PublicKey` = `PublicKey`

The public key address of the NFT being transferred.

###### price

[`UInt64Option`](nftsrcclassuint64option) = `UInt64Option`

The price of the NFT being transferred.

###### to

`PublicKey` = `PublicKey`

The public key of the recipient (new owner) after the transfer.

###### transferByOwner

`Bool` = `Bool`

Indicates whether the transfer is by owner or by approved address.

#### Returns

[`TransferEvent`](nftsrcclasstransferevent)

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:77](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L77)

The public key of the approved address.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).approved
```

***

### collection

```ts
collection: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L67)

The public key of the collection.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).collection
```

***

### fee

```ts
fee: UInt64Option = UInt64Option;
```

Defined in: [packages/nft/src/interfaces/events.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L71)

The fee paid for the transfer.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).fee
```

***

### from

```ts
from: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L63)

The public key of the sender (current owner) before the transfer.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).from
```

***

### nft

```ts
nft: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:69](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L69)

The public key address of the NFT being transferred.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).nft
```

***

### price

```ts
price: UInt64Option = UInt64Option;
```

Defined in: [packages/nft/src/interfaces/events.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L73)

The price of the NFT being transferred.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).price
```

***

### to

```ts
to: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/events.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L65)

The public key of the recipient (new owner) after the transfer.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).to
```

***

### transferByOwner

```ts
transferByOwner: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/events.ts:75](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/events.ts#L75)

Indicates whether the transfer is by owner or by approved address.

#### Inherited from

```ts
Struct({
  / The public key of the sender (current owner) before the transfer. /
  from: PublicKey,
  / The public key of the recipient (new owner) after the transfer. /
  to: PublicKey,
  / The public key of the collection. /
  collection: PublicKey,
  / The public key address of the NFT being transferred. /
  nft: PublicKey,
  / The fee paid for the transfer. /
  fee: UInt64Option,
  / The price of the NFT being transferred. /
  price: UInt64Option,
  / Indicates whether the transfer is by owner or by approved address. /
  transferByOwner: Bool,
  / The public key of the approved address. /
  approved: PublicKey,
}).transferByOwner
```
