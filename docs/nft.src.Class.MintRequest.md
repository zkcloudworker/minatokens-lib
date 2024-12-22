---
title: MintRequest
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.MintRequest
order: 185
---

# Class: MintRequest

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- customFlag:  Bool = Bool; [↗](#customflag)
- customId:  Field = Field; [↗](#customid)
- owner:  PublicKey = PublicKey; [↗](#owner)

Represents a request to mint a new NFT, used by the admin contract to determine if minting is allowed.

## Extends

- \{
  `address`: `PublicKey`;
  `customFlag`: `Bool`;
  `customId`: `Field`;
  `owner`: `PublicKey`;
 \}

## Constructors

### new MintRequest()

```ts
new MintRequest(value: {
  address: PublicKey;
  customFlag: Bool;
  customId: Field;
  owner: PublicKey;
 }): MintRequest
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the NFT contract where the NFT will be minted.

###### customFlag

`Bool` = `Bool`

A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId.

###### customId

`Field` = `Field`

A custom identifier that can be interpreted by the admin contract.

###### owner

`PublicKey` = `PublicKey`

The owner of the new NFT (can be different from the sender).

#### Returns

[`MintRequest`](nftsrcclassmintrequest)

#### Inherited from

`Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The address of the NFT contract where the NFT will be minted.

#### Inherited from

`Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}).address`

#### Defined in

[packages/nft/src/contracts/types.ts:684](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L684)

***

### customFlag

```ts
customFlag: Bool = Bool;
```

A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId.

#### Inherited from

`Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}).customFlag`

#### Defined in

[packages/nft/src/contracts/types.ts:690](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L690)

***

### customId

```ts
customId: Field = Field;
```

A custom identifier that can be interpreted by the admin contract.

#### Inherited from

`Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}).customId`

#### Defined in

[packages/nft/src/contracts/types.ts:688](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L688)

***

### owner

```ts
owner: PublicKey = PublicKey;
```

The owner of the new NFT (can be different from the sender).

#### Inherited from

`Struct({
  /** The address of the NFT contract where the NFT will be minted. */
  address: PublicKey,
  /** The owner of the new NFT (can be different from the sender). */
  owner: PublicKey, // can be different from the sender
  /** A custom identifier that can be interpreted by the admin contract. */
  customId: Field, // should be interpreted by the admin contract
  /** A custom flag that can be interpreted by the admin contract, possibly forming a PublicKey with customId. */
  customFlag: Bool, // should be interpreted by the admin contract, can form PublicKey together with customId
}).owner`

#### Defined in

[packages/nft/src/contracts/types.ts:686](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L686)
