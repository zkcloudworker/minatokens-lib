---
title: ValidatorsDecisionState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsDecisionState
order: 293
---

# Class: ValidatorsDecisionState

## Properties overview

- abstainVotes:  UInt32 = UInt32; [↗](#abstainvotes)
- alreadyVoted:  Field = Field; [↗](#alreadyvoted)
- decision:  ValidatorsDecision = ValidatorsDecision; [↗](#decision)
- noVotes:  UInt32 = UInt32; [↗](#novotes)
- yesVotes:  UInt32 = UInt32; [↗](#yesvotes)

## Methods overview

- vote() [↗](#vote)
- assertEquals() [↗](#assertequals)
- startVoting() [↗](#startvoting)

Represents the state of a validators decision during the voting process.

## Extends

- \{
  `abstainVotes`: `UInt32`;
  `alreadyVoted`: `Field`;
  `decision`: [`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision);
  `noVotes`: `UInt32`;
  `yesVotes`: `UInt32`;
 \}

## Constructors

### new ValidatorsDecisionState()

```ts
new ValidatorsDecisionState(value: {
  abstainVotes: UInt32;
  alreadyVoted: Field;
  decision: ValidatorsDecision;
  noVotes: UInt32;
  yesVotes: UInt32;
 }): ValidatorsDecisionState
```

#### Parameters

##### value

###### abstainVotes

`UInt32` = `UInt32`

Number of votes of abstention

###### alreadyVoted

`Field` = `Field`

Indexed Merkle Map root of the validators who have voted

###### decision

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision) = `ValidatorsDecision`

The validators' decision

###### noVotes

`UInt32` = `UInt32`

Number of votes against the decision

###### yesVotes

`UInt32` = `UInt32`

Number of votes in favor of the decision

#### Returns

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### abstainVotes

```ts
abstainVotes: UInt32 = UInt32;
```

Number of votes of abstention

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).abstainVotes`

#### Defined in

[packages/upgradable/src/validators.ts:290](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L290)

***

### alreadyVoted

```ts
alreadyVoted: Field = Field;
```

Indexed Merkle Map root of the validators who have voted

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).alreadyVoted`

#### Defined in

[packages/upgradable/src/validators.ts:284](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L284)

***

### decision

```ts
decision: ValidatorsDecision = ValidatorsDecision;
```

The validators' decision

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).decision`

#### Defined in

[packages/upgradable/src/validators.ts:282](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L282)

***

### noVotes

```ts
noVotes: UInt32 = UInt32;
```

Number of votes against the decision

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).noVotes`

#### Defined in

[packages/upgradable/src/validators.ts:288](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L288)

***

### yesVotes

```ts
yesVotes: UInt32 = UInt32;
```

Number of votes in favor of the decision

#### Inherited from

`Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: Field,
  /** Number of votes in favor of the decision */
  yesVotes: UInt32,
  /** Number of votes against the decision */
  noVotes: UInt32,
  /** Number of votes of abstention */
  abstainVotes: UInt32,
}).yesVotes`

#### Defined in

[packages/upgradable/src/validators.ts:286](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L286)

## Methods

### vote()

```ts
vote(
   validatorNullifier: Nullifier, 
   validatorsList: ValidatorsList, 
   votedList: ValidatorsList, 
   yes: Bool, 
   no: Bool, 
   abstain: Bool, 
   signature: Signature): ValidatorsDecisionState
```

Records a vote

#### Parameters

##### validatorNullifier

`Nullifier`

The nullifier of the validator.

##### validatorsList

[`ValidatorsList`](upgradablesrcclassvalidatorslist)

The ValidatorsList containing authorized validators.

##### votedList

[`ValidatorsList`](upgradablesrcclassvalidatorslist)

The ValidatorsList tracking who has already voted.

##### yes

`Bool`

Whether this is a "yes" vote.

##### no

`Bool`

Whether this is a "no" vote.

##### abstain

`Bool`

Whether this is an "abstain" vote.

##### signature

`Signature`

The signature of the validator.

#### Returns

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

A new `ValidatorsDecisionState` reflecting the vote.

#### Defined in

[packages/upgradable/src/validators.ts:312](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L312)

***

### assertEquals()

```ts
static assertEquals(a: ValidatorsDecisionState, b: ValidatorsDecisionState): void
```

Asserts that two `ValidatorsDecisionState` instances are equal.

#### Parameters

##### a

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

First `ValidatorsDecisionState` instance.

##### b

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

Second `ValidatorsDecisionState` instance.

#### Returns

`void`

#### Defined in

[packages/upgradable/src/validators.ts:368](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L368)

***

### startVoting()

```ts
static startVoting(decision: ValidatorsDecision): ValidatorsDecisionState
```

#### Parameters

##### decision

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)

#### Returns

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

#### Defined in

[packages/upgradable/src/validators.ts:292](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L292)
