---
title: TransferParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.TransferParams
order: 224
---

# Class: TransferParams

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- context:  NFTTransactionContext = NFTTransactionContext; [↗](#context)
- from:  PublicKey = PublicKey; [↗](#from)
- price:  UInt64Option = UInt64Option; [↗](#price)
- to:  PublicKey = PublicKey; [↗](#to)

Defined in: [packages/nft/src/interfaces/types.ts:591](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L591)

Represents the parameters required for transferring an NFT.

## Extends

- \{
  `address`: `PublicKey`;
  `context`: [`NFTTransactionContext`](nftsrcclassnfttransactioncontext);
  `from`: `PublicKey`;
  `price`: [`UInt64Option`](nftsrcclassuint64option);
  `to`: `PublicKey`;
 \}

## Constructors

### new TransferParams()

```ts
new TransferParams(value: {
  address: PublicKey;
  context: NFTTransactionContext;
  from: PublicKey;
  price: UInt64Option;
  to: PublicKey;
 }): TransferParams
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract.

###### context

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext) = `NFTTransactionContext`

Custom value that can be interpreted by the owner or approved contract.

###### from

`PublicKey` = `PublicKey`

The sender's public key.

###### price

[`UInt64Option`](nftsrcclassuint64option) = `UInt64Option`

Optional price for the transfer.

###### to

`PublicKey` = `PublicKey`

The receiver's public key.

#### Returns

[`TransferParams`](nftsrcclasstransferparams)

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:593](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L593)

The address of the NFT contract.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).address
```

***

### context

```ts
context: NFTTransactionContext = NFTTransactionContext;
```

Defined in: [packages/nft/src/interfaces/types.ts:601](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L601)

Custom value that can be interpreted by the owner or approved contract.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).context
```

***

### from

```ts
from: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:595](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L595)

The sender's public key.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).from
```

***

### price

```ts
price: UInt64Option = UInt64Option;
```

Defined in: [packages/nft/src/interfaces/types.ts:599](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L599)

Optional price for the transfer.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).price
```

***

### to

```ts
to: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:597](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L597)

The receiver's public key.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract. /
  address: PublicKey,
  / The sender's public key. /
  from: PublicKey,
  / The receiver's public key. /
  to: PublicKey,
  / Optional price for the transfer. /
  price: UInt64Option,
  / Custom value that can be interpreted by the owner or approved contract. /
  context: NFTTransactionContext,
}).to
```
