---
title: VerificationKeyUpgradeAuthority
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.VerificationKeyUpgradeAuthority
order: 299
---

# Class: VerificationKeyUpgradeAuthority

## Properties overview

- events:  {
  updateDatabase: typeof UpgradeDatabaseState;
  validatorsList: typeof ValidatorsListEvent;
}; [↗](#events)
- updateDatabase:  typeof UpgradeDatabaseState = UpgradeDatabaseState; [↗](#updatedatabase)
- validatorsList:  typeof ValidatorsListEvent = ValidatorsListEvent; [↗](#validatorslist)
- upgradeDatabasePacked:  State<UpgradeDatabaseStatePacked>; [↗](#upgradedatabasepacked)
- validators:  State<Field>; [↗](#validators)
- verificationKeyHash:  State<Field>; [↗](#verificationkeyhash)

## Methods overview

- checkValidatorsDecision() [↗](#checkvalidatorsdecision)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- setValidatorsList() [↗](#setvalidatorslist)
- updateDatabase() [↗](#updatedatabase)
- updateValidatorsList() [↗](#updatevalidatorslist)
- verifyUpgradeData() [↗](#verifyupgradedata)

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

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`VerificationKeyUpgradeAuthority`](upgradablesrcclassverificationkeyupgradeauthority)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

## Properties

### events

```ts
events: {
  updateDatabase: typeof UpgradeDatabaseState;
  validatorsList: typeof ValidatorsListEvent;
};
```

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

`UpgradeAuthorityBase.events`

#### Overrides

`SmartContract.events`

#### Defined in

[packages/upgradable/src/upgrade.ts:108](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L108)

***

### upgradeDatabasePacked

```ts
upgradeDatabasePacked: State<UpgradeDatabaseStatePacked>;
```

Packed state containing the upgrade database information.

#### Defined in

[packages/upgradable/src/upgrade.ts:103](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L103)

***

### validators

```ts
validators: State<Field>;
```

The hash representing the current state of the validators list.

#### Defined in

[packages/upgradable/src/upgrade.ts:96](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L96)

***

### verificationKeyHash

```ts
verificationKeyHash: State<Field>;
```

The hash of the verification key.

#### Defined in

[packages/upgradable/src/upgrade.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L90)

## Methods

### checkValidatorsDecision()

```ts
checkValidatorsDecision(
   proof: ValidatorsVotingProof, 
   vk: VerificationKey, 
   decisionType: Field, 
validatorsState: ValidatorsState): Promise<void>
```

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

#### Defined in

[packages/upgradable/src/upgrade.ts:274](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L274)

***

### deploy()

```ts
deploy(): Promise<void>
```

Deploys the contract and sets the initial state.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`UpgradeAuthorityBase.deploy`

#### Overrides

`SmartContract.deploy`

#### Defined in

[packages/upgradable/src/upgrade.ts:116](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L116)

***

### initialize()

```ts
initialize(
   validators: ValidatorsState, 
   storage: Storage, 
verificationKeyHash: Field): Promise<void>
```

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

#### Defined in

[packages/upgradable/src/upgrade.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L136)

***

### setValidatorsList()

```ts
setValidatorsList(validators: ValidatorsState, storage: Storage): Promise<void>
```

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

#### Defined in

[packages/upgradable/src/upgrade.ts:152](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L152)

***

### updateDatabase()

```ts
updateDatabase(
   proof: ValidatorsVotingProof, 
   vk: VerificationKey, 
validators: ValidatorsState): Promise<void>
```

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

#### Defined in

[packages/upgradable/src/upgrade.ts:208](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L208)

***

### updateValidatorsList()

```ts
updateValidatorsList(
   validators: ValidatorsState, 
   storage: Storage, 
   proof: ValidatorsVotingProof, 
vk: VerificationKey): Promise<void>
```

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

#### Defined in

[packages/upgradable/src/upgrade.ts:252](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L252)

***

### verifyUpgradeData()

```ts
verifyUpgradeData(data: VerificationKeyUpgradeData): Promise<UpgradeAuthorityAnswer>
```

Verifies the upgrade data provided by another contract.

#### Parameters

##### data

[`VerificationKeyUpgradeData`](upgradablesrcclassverificationkeyupgradedata)

The upgrade data to verify.

#### Returns

`Promise`\<[`UpgradeAuthorityAnswer`](upgradablesrcclassupgradeauthorityanswer)\>

- The answer indicating verification result.

#### Implementation of

`UpgradeAuthorityBase.verifyUpgradeData`

#### Defined in

[packages/upgradable/src/upgrade.ts:167](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L167)
