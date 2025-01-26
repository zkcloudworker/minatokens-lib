---
title: VerificationKeyUpgradeData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.VerificationKeyUpgradeData
order: 364
---

# Class: VerificationKeyUpgradeData

## Properties overview

- address:  PublicKey = PublicKey; [↗](#address)
- newVerificationKeyHash:  Field = Field; [↗](#newverificationkeyhash)
- previousVerificationKeyHash:  Field = Field; [↗](#previousverificationkeyhash)
- tokenId:  Field = Field; [↗](#tokenid)

## Methods overview

- hash() [↗](#hash)

Defined in: [packages/upgradable/src/upgradable.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L27)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / The address of the contract to be upgraded. /
  address: PublicKey,
  / The token ID associated with the contract. /
  tokenId: Field,
  / The hash of the previous verification key. /
  previousVerificationKeyHash: Field,
  / The hash of the new verification key. /
  newVerificationKeyHash: Field,
}).constructor
```

## Properties

### address

```ts
address: PublicKey = PublicKey;
```

Defined in: [packages/upgradable/src/upgradable.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L29)

The address of the contract to be upgraded.

#### Inherited from

```ts
Struct({
  / The address of the contract to be upgraded. /
  address: PublicKey,
  / The token ID associated with the contract. /
  tokenId: Field,
  / The hash of the previous verification key. /
  previousVerificationKeyHash: Field,
  / The hash of the new verification key. /
  newVerificationKeyHash: Field,
}).address
```

***

### newVerificationKeyHash

```ts
newVerificationKeyHash: Field = Field;
```

Defined in: [packages/upgradable/src/upgradable.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L35)

The hash of the new verification key.

#### Inherited from

```ts
Struct({
  / The address of the contract to be upgraded. /
  address: PublicKey,
  / The token ID associated with the contract. /
  tokenId: Field,
  / The hash of the previous verification key. /
  previousVerificationKeyHash: Field,
  / The hash of the new verification key. /
  newVerificationKeyHash: Field,
}).newVerificationKeyHash
```

***

### previousVerificationKeyHash

```ts
previousVerificationKeyHash: Field = Field;
```

Defined in: [packages/upgradable/src/upgradable.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L33)

The hash of the previous verification key.

#### Inherited from

```ts
Struct({
  / The address of the contract to be upgraded. /
  address: PublicKey,
  / The token ID associated with the contract. /
  tokenId: Field,
  / The hash of the previous verification key. /
  previousVerificationKeyHash: Field,
  / The hash of the new verification key. /
  newVerificationKeyHash: Field,
}).previousVerificationKeyHash
```

***

### tokenId

```ts
tokenId: Field = Field;
```

Defined in: [packages/upgradable/src/upgradable.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L31)

The token ID associated with the contract.

#### Inherited from

```ts
Struct({
  / The address of the contract to be upgraded. /
  address: PublicKey,
  / The token ID associated with the contract. /
  tokenId: Field,
  / The hash of the previous verification key. /
  previousVerificationKeyHash: Field,
  / The hash of the new verification key. /
  newVerificationKeyHash: Field,
}).tokenId
```

## Methods

### hash()

```ts
hash(): Field
```

Defined in: [packages/upgradable/src/upgradable.ts:41](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgradable.ts#L41)

Generates a unique hash for the upgrade data using the Poseidon hash function.

#### Returns

`Field`

The hash representing the upgrade data.
