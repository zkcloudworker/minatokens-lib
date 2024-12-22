---
title: VerificationKeyUpgradeData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.VerificationKeyUpgradeData
order: 300
---

# Class: VerificationKeyUpgradeData

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- newVerificationKeyHash:  Field = Field; [↗](#newverificationkeyhash)
- previousVerificationKeyHash:  Field = Field; [↗](#previousverificationkeyhash)
- tokenId:  Field = Field; [↗](#tokenid)

## Methods overview

- hash() [↗](#hash)

Represents the data required to upgrade a contract's verification key.
It includes the contract's address, token ID, previous verification key hash,
and the new verification key hash. This class also provides a `hash()` method
to generate a unique identifier for the upgrade data.

## Extends

- \{
  `address`: `PublicKey`;
  `newVerificationKeyHash`: `Field`;
  `previousVerificationKeyHash`: `Field`;
  `tokenId`: `Field`;
 \}

## Constructors

### new VerificationKeyUpgradeData()

```ts
new VerificationKeyUpgradeData(value: {
  address: PublicKey;
  newVerificationKeyHash: Field;
  previousVerificationKeyHash: Field;
  tokenId: Field;
 }): VerificationKeyUpgradeData
```

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

The address of the contract to be upgraded.

###### newVerificationKeyHash

`Field` = `Field`

The hash of the new verification key.

###### previousVerificationKeyHash

`Field` = `Field`

The hash of the previous verification key.

###### tokenId

`Field` = `Field`

The token ID associated with the contract.

#### Returns

[`VerificationKeyUpgradeData`](upgradablesrcclassverificationkeyupgradedata)

#### Inherited from

`Struct({
  /** The address of the contract to be upgraded. */
  address: PublicKey,
  /** The token ID associated with the contract. */
  tokenId: Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

The address of the contract to be upgraded.

#### Inherited from

`Struct({
  /** The address of the contract to be upgraded. */
  address: PublicKey,
  /** The token ID associated with the contract. */
  tokenId: Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: Field,
}).address`

#### Defined in

[packages/upgradable/src/upgradable.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L29)

***

### newVerificationKeyHash

```ts
newVerificationKeyHash: Field = Field;
```

The hash of the new verification key.

#### Inherited from

`Struct({
  /** The address of the contract to be upgraded. */
  address: PublicKey,
  /** The token ID associated with the contract. */
  tokenId: Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: Field,
}).newVerificationKeyHash`

#### Defined in

[packages/upgradable/src/upgradable.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L35)

***

### previousVerificationKeyHash

```ts
previousVerificationKeyHash: Field = Field;
```

The hash of the previous verification key.

#### Inherited from

`Struct({
  /** The address of the contract to be upgraded. */
  address: PublicKey,
  /** The token ID associated with the contract. */
  tokenId: Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: Field,
}).previousVerificationKeyHash`

#### Defined in

[packages/upgradable/src/upgradable.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L33)

***

### tokenId

```ts
tokenId: Field = Field;
```

The token ID associated with the contract.

#### Inherited from

`Struct({
  /** The address of the contract to be upgraded. */
  address: PublicKey,
  /** The token ID associated with the contract. */
  tokenId: Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: Field,
}).tokenId`

#### Defined in

[packages/upgradable/src/upgradable.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L31)

## Methods

### hash()

```ts
hash(): Field
```

Generates a unique hash for the upgrade data using the Poseidon hash function.

#### Returns

`Field`

The hash representing the upgrade data.

#### Defined in

[packages/upgradable/src/upgradable.ts:41](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L41)
