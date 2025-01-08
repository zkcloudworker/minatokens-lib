---
title: TransferExtendedParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.TransferExtendedParams
order: 223
---

# Class: TransferExtendedParams

## Properties overview

- approved:  PublicKey = PublicKey; [↗](#approved)
- collection:  PublicKey = PublicKey; [↗](#collection)
- context:  NFTTransactionContext = NFTTransactionContext; [↗](#context)
- fee:  UInt64Option = UInt64Option; [↗](#fee)
- from:  PublicKey = PublicKey; [↗](#from)
- nft:  PublicKey = PublicKey; [↗](#nft)
- price:  UInt64Option = UInt64Option; [↗](#price)
- to:  PublicKey = PublicKey; [↗](#to)
- transferByOwner:  Bool = Bool; [↗](#transferbyowner)

Defined in: [packages/nft/src/interfaces/types.ts:604](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L604)

## Extends

- \{
  `approved`: `PublicKey`;
  `collection`: `PublicKey`;
  `context`: [`NFTTransactionContext`](nftsrcclassnfttransactioncontext);
  `fee`: [`UInt64Option`](nftsrcclassuint64option);
  `from`: `PublicKey`;
  `nft`: `PublicKey`;
  `price`: [`UInt64Option`](nftsrcclassuint64option);
  `to`: `PublicKey`;
  `transferByOwner`: `Bool`;
 \}

## Constructors

### new TransferExtendedParams()

```ts
new TransferExtendedParams(value: {
  approved: PublicKey;
  collection: PublicKey;
  context: NFTTransactionContext;
  fee: UInt64Option;
  from: PublicKey;
  nft: PublicKey;
  price: UInt64Option;
  to: PublicKey;
  transferByOwner: Bool;
 }): TransferExtendedParams
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

###### context

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext) = `NFTTransactionContext`

Custom value that can be interpreted by the owner or approved contract.

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

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).constructor
```

## Properties

### approved

```ts
approved: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:620](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L620)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).approved
```

***

### collection

```ts
collection: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:610](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L610)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).collection
```

***

### context

```ts
context: NFTTransactionContext = NFTTransactionContext;
```

Defined in: [packages/nft/src/interfaces/types.ts:622](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L622)

Custom value that can be interpreted by the owner or approved contract.

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).context
```

***

### fee

```ts
fee: UInt64Option = UInt64Option;
```

Defined in: [packages/nft/src/interfaces/types.ts:614](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L614)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).fee
```

***

### from

```ts
from: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:606](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L606)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).from
```

***

### nft

```ts
nft: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:612](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L612)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).nft
```

***

### price

```ts
price: UInt64Option = UInt64Option;
```

Defined in: [packages/nft/src/interfaces/types.ts:616](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L616)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).price
```

***

### to

```ts
to: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:608](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L608)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).to
```

***

### transferByOwner

```ts
transferByOwner: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/types.ts:618](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L618)

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
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).transferByOwner
```
