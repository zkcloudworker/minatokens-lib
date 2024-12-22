---
title: ValidatorsDecision
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsDecision
order: 292
---

# Class: ValidatorsDecision

## Properties overview

- chainId:  Field = Field; [↗](#chainid)
- contractAddress:  PublicKey = PublicKey; [↗](#contractaddress)
- decisionType:  Field = Field; [↗](#decisiontype)
- expiry:  UInt32 = UInt32; [↗](#expiry)
- message:  Field = Field; [↗](#message)
- updateValidatorsList:  ValidatorsState = ValidatorsState; [↗](#updatevalidatorslist)
- upgradeDatabase:  UpgradeDatabaseState = UpgradeDatabaseState; [↗](#upgradedatabase)
- validators:  ValidatorsState = ValidatorsState; [↗](#validators)

## Methods overview

- createJsonNullifier() [↗](#createjsonnullifier)
- createNullifierMessage() [↗](#createnullifiermessage)
- assertEquals() [↗](#assertequals)

Represents a decision made by the validators.

## Extends

- \{
  `chainId`: `Field`;
  `contractAddress`: `PublicKey`;
  `decisionType`: `Field`;
  `expiry`: `UInt32`;
  `message`: `Field`;
  `updateValidatorsList`: [`ValidatorsState`](upgradablesrcclassvalidatorsstate);
  `upgradeDatabase`: [`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate);
  `validators`: [`ValidatorsState`](upgradablesrcclassvalidatorsstate);
 \}

## Constructors

### new ValidatorsDecision()

```ts
new ValidatorsDecision(value: {
  chainId: Field;
  contractAddress: PublicKey;
  decisionType: Field;
  expiry: UInt32;
  message: Field;
  updateValidatorsList: ValidatorsState;
  upgradeDatabase: UpgradeDatabaseState;
  validators: ValidatorsState;
 }): ValidatorsDecision
```

#### Parameters

##### value

###### chainId

`Field` = `Field`

Chain ID

###### contractAddress

`PublicKey` = `PublicKey`

UpgradeAuthority contract address

###### decisionType

`Field` = `Field`

Type of decision (e.g., 'updateDatabase')

###### expiry

`UInt32` = `UInt32`

Slot when decision expires

###### message

`Field` = `Field`

Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks

###### updateValidatorsList

[`ValidatorsState`](upgradablesrcclassvalidatorsstate) = `ValidatorsState`

Proposed update to validators state

###### upgradeDatabase

[`UpgradeDatabaseState`](upgradablesrcclassupgradedatabasestate) = `UpgradeDatabaseState`

Current upgrade database state

###### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate) = `ValidatorsState`

Current validators state

#### Returns

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### chainId

```ts
chainId: Field = Field;
```

Chain ID

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).chainId`

#### Defined in

[packages/upgradable/src/validators.ts:233](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L233)

***

### contractAddress

```ts
contractAddress: PublicKey = PublicKey;
```

UpgradeAuthority contract address

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).contractAddress`

#### Defined in

[packages/upgradable/src/validators.ts:231](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L231)

***

### decisionType

```ts
decisionType: Field = Field;
```

Type of decision (e.g., 'updateDatabase')

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).decisionType`

#### Defined in

[packages/upgradable/src/validators.ts:229](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L229)

***

### expiry

```ts
expiry: UInt32 = UInt32;
```

Slot when decision expires

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).expiry`

#### Defined in

[packages/upgradable/src/validators.ts:241](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L241)

***

### message

```ts
message: Field = Field;
```

Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).message`

#### Defined in

[packages/upgradable/src/validators.ts:227](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L227)

***

### updateValidatorsList

```ts
updateValidatorsList: ValidatorsState = ValidatorsState;
```

Proposed update to validators state

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).updateValidatorsList`

#### Defined in

[packages/upgradable/src/validators.ts:239](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L239)

***

### upgradeDatabase

```ts
upgradeDatabase: UpgradeDatabaseState = UpgradeDatabaseState;
```

Current upgrade database state

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).upgradeDatabase`

#### Defined in

[packages/upgradable/src/validators.ts:237](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L237)

***

### validators

```ts
validators: ValidatorsState = ValidatorsState;
```

Current validators state

#### Inherited from

`Struct({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}).validators`

#### Defined in

[packages/upgradable/src/validators.ts:235](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L235)

## Methods

### createJsonNullifier()

```ts
createJsonNullifier(params: {
  network: "mainnet" | "testnet";
  privateKey: PrivateKey;
 }): Nullifier
```

#### Parameters

##### params

###### network

`"mainnet"` \| `"testnet"`

###### privateKey

`PrivateKey`

#### Returns

`Nullifier`

#### Defined in

[packages/upgradable/src/validators.ts:262](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L262)

***

### createNullifierMessage()

```ts
createNullifierMessage(): Field[]
```

#### Returns

`Field`[]

#### Defined in

[packages/upgradable/src/validators.ts:258](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L258)

***

### assertEquals()

```ts
static assertEquals(a: ValidatorsDecision, b: ValidatorsDecision): void
```

Asserts that two `ValidatorsDecision` instances are equal.

#### Parameters

##### a

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)

First `ValidatorsDecision` instance.

##### b

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)

Second `ValidatorsDecision` instance.

#### Returns

`void`

#### Defined in

[packages/upgradable/src/validators.ts:248](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L248)
