---
title: ValidatorsVoting
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Variable.ValidatorsVoting
order: 311
---

# Variable: ValidatorsVoting

## Methods overview

- merge() [↗](#merge)
- startVoting() [↗](#startvoting)
- vote() [↗](#vote)

```ts
const ValidatorsVoting: {} & {
  merge: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
  startVoting: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof ValidatorsDecision]>) => Promise<{}>;
  vote: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof ValidatorsDecision, typeof Nullifier, typeof ValidatorsList, typeof ValidatorsList, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Signature]>) => Promise<{}>;
};
```

The `ValidatorsVoting` ZkProgram implements the voting logic for validators.

## Type declaration

### merge()

```ts
merge: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof SelfProof, typeof SelfProof]>) => Promise<{}>;
```

Merges two `ValidatorsDecisionState` proofs.

#### Parameters

##### publicInput

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

##### args

...`TupleToInstances`\<[*typeof* `SelfProof`, *typeof* `SelfProof`]\>

#### Returns

`Promise`\<\{\}\>

### startVoting()

```ts
startVoting: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof ValidatorsDecision]>) => Promise<{}>;
```

Starts the voting process for a decision.

#### Parameters

##### publicInput

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

##### args

...`TupleToInstances`\<[*typeof* [`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision)]\>

#### Returns

`Promise`\<\{\}\>

### vote()

```ts
vote: (publicInput: ValidatorsDecisionState, ...args: TupleToInstances<[typeof ValidatorsDecision, typeof Nullifier, typeof ValidatorsList, typeof ValidatorsList, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Bool & (x: boolean | Bool | FieldVar) => Bool, typeof Signature]>) => Promise<{}>;
```

Records a vote

#### Parameters

##### publicInput

[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)

##### args

...`TupleToInstances`\<[*typeof* [`ValidatorsDecision`](upgradablesrcclassvalidatorsdecision), *typeof* `Nullifier`, *typeof* [`ValidatorsList`](upgradablesrcclassvalidatorslist), *typeof* [`ValidatorsList`](upgradablesrcclassvalidatorslist), *typeof* `Bool` & (`x`: `boolean` \| `Bool` \| `FieldVar`) => `Bool`, *typeof* `Bool` & (`x`: `boolean` \| `Bool` \| `FieldVar`) => `Bool`, *typeof* `Bool` & (`x`: `boolean` \| `Bool` \| `FieldVar`) => `Bool`, *typeof* `Signature`]\>

#### Returns

`Promise`\<\{\}\>

## Defined in

[packages/upgradable/src/validators.ts:380](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L380)
