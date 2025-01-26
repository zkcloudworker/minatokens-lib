---
title: ValidatorsDecisionState
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsDecisionState
order: 357
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

Defined in: [packages/upgradable/src/validators.ts:280](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L280)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

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

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).constructor
```

## Properties

### abstainVotes

```ts
abstainVotes: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:290](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L290)

Number of votes of abstention

#### Inherited from

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).abstainVotes
```

***

### alreadyVoted

```ts
alreadyVoted: Field = Field;
```

Defined in: [packages/upgradable/src/validators.ts:284](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L284)

Indexed Merkle Map root of the validators who have voted

#### Inherited from

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).alreadyVoted
```

***

### decision

```ts
decision: ValidatorsDecision = ValidatorsDecision;
```

Defined in: [packages/upgradable/src/validators.ts:282](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L282)

The validators' decision

#### Inherited from

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).decision
```

***

### noVotes

```ts
noVotes: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:288](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L288)

Number of votes against the decision

#### Inherited from

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).noVotes
```

***

### yesVotes

```ts
yesVotes: UInt32 = UInt32;
```

Defined in: [packages/upgradable/src/validators.ts:286](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L286)

Number of votes in favor of the decision

#### Inherited from

```ts
Struct({
  / The validators' decision /
  decision: ValidatorsDecision,
  / Indexed Merkle Map root of the validators who have voted /
  alreadyVoted: Field,
  / Number of votes in favor of the decision /
  yesVotes: UInt32,
  / Number of votes against the decision /
  noVotes: UInt32,
  / Number of votes of abstention /
  abstainVotes: UInt32,
}).yesVotes
```

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

Defined in: [packages/upgradable/src/validators.ts:312](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L312)

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

***

### assertEquals()

```ts
static assertEquals(a: ValidatorsDecisionState, b: ValidatorsDecisionState): void
```

Defined in: [packages/upgradable/src/validators.ts:368](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L368)

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

***

### startVoting()

```ts
static startVoting(decision: ValidatorsDecision): ValidatorsDecisionState
```

Defined in: [packages/upgradable/src/validators.ts:292](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L292)

#### Parameters

##### decision

[`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)

#### Returns

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)
