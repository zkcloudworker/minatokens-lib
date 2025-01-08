---
title: MintRequest
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintRequest
order: 201
---

# Class: MintRequest

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- context:  NFTTransactionContext = NFTTransactionContext; [↗](#context)
- owner:  PublicKey = PublicKey; [↗](#owner)

Defined in: [packages/nft/src/interfaces/types.ts:579](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L579)

Represents a request to mint a new NFT, used by the admin contract to determine if minting is allowed.

## Extends

- \{
  `address`: `PublicKey`;
  `context`: [`NFTTransactionContext`](nftsrcclassnfttransactioncontext);
  `owner`: `PublicKey`;
 \}

## Constructors

### new MintRequest()

```ts
new MintRequest(value: {
  address: PublicKey;
  context: NFTTransactionContext;
  owner: PublicKey;
 }): MintRequest
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract where the NFT will be minted.

###### context

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext) = `NFTTransactionContext`

A custom value that can be interpreted by the admin contract.

###### owner

`PublicKey` = `PublicKey`

The owner of the new NFT (can be different from the sender).

#### Returns

[`MintRequest`](nftsrcclassmintrequest)

#### Inherited from

```ts
Struct({
  / The address of the NFT contract where the NFT will be minted. /
  address: PublicKey,
  / The owner of the new NFT (can be different from the sender). /
  owner: PublicKey, // can be different from the sender
  / A custom value that can be interpreted by the admin contract. /
  context: NFTTransactionContext, // should be interpreted by the admin contract
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:581](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L581)

The address of the NFT contract where the NFT will be minted.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract where the NFT will be minted. /
  address: PublicKey,
  / The owner of the new NFT (can be different from the sender). /
  owner: PublicKey, // can be different from the sender
  / A custom value that can be interpreted by the admin contract. /
  context: NFTTransactionContext, // should be interpreted by the admin contract
}).address
```

***

### context

```ts
context: NFTTransactionContext = NFTTransactionContext;
```

Defined in: [packages/nft/src/interfaces/types.ts:585](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L585)

A custom value that can be interpreted by the admin contract.

#### Inherited from

```ts
Struct({
  / The address of the NFT contract where the NFT will be minted. /
  address: PublicKey,
  / The owner of the new NFT (can be different from the sender). /
  owner: PublicKey, // can be different from the sender
  / A custom value that can be interpreted by the admin contract. /
  context: NFTTransactionContext, // should be interpreted by the admin contract
}).context
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/interfaces/types.ts:583](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L583)

The owner of the new NFT (can be different from the sender).

#### Inherited from

```ts
Struct({
  / The address of the NFT contract where the NFT will be minted. /
  address: PublicKey,
  / The owner of the new NFT (can be different from the sender). /
  owner: PublicKey, // can be different from the sender
  / A custom value that can be interpreted by the admin contract. /
  context: NFTTransactionContext, // should be interpreted by the admin contract
}).owner
```
