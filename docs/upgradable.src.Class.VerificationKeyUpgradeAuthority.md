---
title: VerificationKeyUpgradeAuthority
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.VerificationKeyUpgradeAuthority
order: 363
---

# Class: VerificationKeyUpgradeAuthority

## Properties overview

- events:  {
  updateDatabase: typeof UpgradeDatabaseState;
  validatorsList: typeof ValidatorsListEvent;
}; [↗](#events)
- updateDatabase:  typeof UpgradeDatabaseState = UpgradeDatabaseState; [↗](#updatedatabase)
- validatorsList:  typeof ValidatorsListEvent = ValidatorsListEvent; [↗](#validatorslist)
- Overrides: SmartContract.events [↗](#overrides)
- upgradeDatabasePacked:  State<UpgradeDatabaseStatePacked>; [↗](#upgradedatabasepacked)
- validators:  State<Field>; [↗](#validators)
- verificationKeyHash:  State<Field>; [↗](#verificationkeyhash)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- checkValidatorsDecision() [↗](#checkvalidatorsdecision)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- setValidatorsList() [↗](#setvalidatorslist)
- updateDatabase() [↗](#updatedatabase)
- updateValidatorsList() [↗](#updatevalidatorslist)
- verifyUpgradeData() [↗](#verifyupgradedata)

Defined in: [packages/upgradable/src/upgrade.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L82)

**VerificationKeyUpgradeAuthority** is a smart contract that provides a secure mechanism
for upgrading the verification keys of other contracts without requiring redeployment.
It manages a list of validators who can vote on upgrade proposals, ensuring that only
authorized upgrades are applied.

**Key Features:**
- **Verification Key Management**: Allows for secure upgrades of verification keys for other contracts.
- **Validators Governance**: Maintains a list of authorized validators who can vote on upgrade proposals.
- **Secure Voting Mechanism**: Implements Zero-Knowledge proofs to validate votes from validators without revealing sensitive information.
- **Upgrade Database Management**: Keeps track of upgrade proposals and their validity periods.
- **Event Emissions**: Emits events when validators list or upgrade database is updated.

## Extends

- `SmartContract`

## Implements

- [`UpgradeAuthorityBase`](upgradablesrctypealiasupgradeauthoritybase)

## Constructors

### new VerificationKeyUpgradeAuthority()

```ts
new VerificationKeyUpgradeAuthority(address: PublicKey, tokenId?: Field): VerificationKeyUpgradeAuthority
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`VerificationKeyUpgradeAuthority`](upgradablesrcclassverificationkeyupgradeauthority)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### events

```ts
events: {
  updateDatabase: typeof UpgradeDatabaseState;
  validatorsList: typeof ValidatorsListEvent;
};
```

Defined in: [packages/upgradable/src/upgrade.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L108)

The events emitted by the VerificationKeyUpgradeAuthority contract.

#### updateDatabase

```ts
updateDatabase: typeof UpgradeDatabaseState = UpgradeDatabaseState;
```

#### validatorsList

```ts
validatorsList: typeof ValidatorsListEvent = ValidatorsListEvent;
```

#### Implementation of

```ts
UpgradeAuthorityBase.events
```

#### Overrides

```ts
SmartContract.events
```

***

### upgradeDatabasePacked

```ts
upgradeDatabasePacked: State<UpgradeDatabaseStatePacked>;
```

Defined in: [packages/upgradable/src/upgrade.ts:103](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L103)

Packed state containing the upgrade database information.

***

### validators

```ts
validators: State<Field>;
```

Defined in: [packages/upgradable/src/upgrade.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L96)

The hash representing the current state of the validators list.

***

### verificationKeyHash

```ts
verificationKeyHash: State<Field>;
```

Defined in: [packages/upgradable/src/upgrade.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L90)

The hash of the verification key.

## Methods

### checkValidatorsDecision()

```ts
checkValidatorsDecision(
   proof: ValidatorsVotingProof, 
   vk: VerificationKey, 
   decisionType: Field, 
validatorsState: ValidatorsState): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:274](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L274)

Checks the validators' decision by verifying the provided proof.

#### Parameters

##### proof

[`ValidatorsVotingProof`](upgradablesrcclassvalidatorsvotingproof)

The proof to verify.

##### vk

`VerificationKey`

The verification key to validate the proof.

##### decisionType

`Field`

The type of decision being validated.

##### validatorsState

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

#### Returns

`Promise`\<`void`\>

***

### deploy()

```ts
deploy(): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:116](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L116)

Deploys the contract and sets the initial state.

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
UpgradeAuthorityBase.deploy
```

#### Overrides

```ts
SmartContract.deploy
```

***

### initialize()

```ts
initialize(
   validators: ValidatorsState, 
   storage: Storage, 
verificationKeyHash: Field): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L136)

Initializes the contract with validators and sets the verification key hash.

#### Parameters

##### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

The initial validators state.

##### storage

`Storage`

Off-chain storage information, e.g., IPFS hash.

##### verificationKeyHash

`Field`

The hash of the verification key.

#### Returns

`Promise`\<`void`\>

***

### setValidatorsList()

```ts
setValidatorsList(validators: ValidatorsState, storage: Storage): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:152](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L152)

Sets the validators list and emits an event.

#### Parameters

##### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

The validators state to set.

##### storage

`Storage`

The storage associated with the validators list.

#### Returns

`Promise`\<`void`\>

***

### updateDatabase()

```ts
updateDatabase(
   proof: ValidatorsVotingProof, 
   vk: VerificationKey, 
validators: ValidatorsState): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:208](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L208)

Updates the upgrade database after validator consensus.

#### Parameters

##### proof

[`ValidatorsVotingProof`](upgradablesrcclassvalidatorsvotingproof)

The proof of validators voting.

##### vk

`VerificationKey`

The verification key to validate the proof.

##### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

#### Returns

`Promise`\<`void`\>

***

### updateValidatorsList()

```ts
updateValidatorsList(
   validators: ValidatorsState, 
   storage: Storage, 
   proof: ValidatorsVotingProof, 
vk: VerificationKey): Promise<void>
```

Defined in: [packages/upgradable/src/upgrade.ts:252](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L252)

Updates the validators list based on validator votes.

#### Parameters

##### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate)

The new validators state.

##### storage

`Storage`

The storage associated with the validators list.

##### proof

[`ValidatorsVotingProof`](upgradablesrcclassvalidatorsvotingproof)

The proof of validators voting.

##### vk

`VerificationKey`

The verification key to validate the proof.

#### Returns

`Promise`\<`void`\>

***

### verifyUpgradeData()

```ts
verifyUpgradeData(data: VerificationKeyUpgradeData): Promise<UpgradeAuthorityAnswer>
```

Defined in: [packages/upgradable/src/upgrade.ts:167](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L167)

Verifies the upgrade data provided by another contract.

#### Parameters

##### data

[`VerificationKeyUpgradeData`](upgradablesrcclassverificationkeyupgradedata)

The upgrade data to verify.

#### Returns

`Promise`\<[`UpgradeAuthorityAnswer`](upgradablesrcclassupgradeauthorityanswer)\>

- The answer indicating verification result.

#### Implementation of

```ts
UpgradeAuthorityBase.verifyUpgradeData
```
