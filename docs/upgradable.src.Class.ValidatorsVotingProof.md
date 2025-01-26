---
title: ValidatorsVotingProof
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsVotingProof
order: 362
---

# Class: ValidatorsVotingProof

## Properties overview

- featureFlags: static featureFlags: {} = FeatureFlags.allMaybe; [↗](#featureflags)
- Overrides: DynamicProof.featureFlags [↗](#overrides)
- maxProofsVerified: static maxProofsVerified: 2; [↗](#maxproofsverified)
- Overrides: DynamicProof.maxProofsVerified [↗](#overrides)
- publicInputType: static publicInputType: typeof ValidatorsDecisionState = ValidatorsDecisionState; [↗](#publicinputtype)
- Overrides: DynamicProof.publicInputType [↗](#overrides)
- publicOutputType: static publicOutputType: typeof ValidatorsDecisionState = ValidatorsDecisionState; [↗](#publicoutputtype)
- Overrides: DynamicProof.publicOutputType [↗](#overrides)

Defined in: [packages/upgradable/src/validators.ts:466](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L466)

## Extends

- `DynamicProof`\<[`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate), [`ValidatorsDecisionState`](upgradablesrcclassvalidatorsdecisionstate)\>

## Constructors

### new ValidatorsVotingProof()

```ts
new ValidatorsVotingProof(__namedParameters: {}): ValidatorsVotingProof
```

Defined in: node\_modules/o1js/dist/node/lib/proof-system/proof.d.ts:23

#### Parameters

##### \_\_namedParameters

#### Returns

[`ValidatorsVotingProof`](upgradablesrcclassvalidatorsvotingproof)

#### Inherited from

```ts
DynamicProof<
  ValidatorsDecisionState,
  ValidatorsDecisionState
>.constructor
```

## Properties

### featureFlags

```ts
static featureFlags: {} = FeatureFlags.allMaybe;
```

Defined in: [packages/upgradable/src/validators.ts:473](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L473)

As the name indicates, feature flags are features of the proof system.

If we want to side load proofs and verification keys, we first have to tell Pickles what _shape_ of proofs it should expect.

For example, if we want to side load proofs that use foreign field arithmetic custom gates, we have to make Pickles aware of that by defining
these custom gates.

_Note:_ Only proofs that use the exact same composition of custom gates which were expected by Pickles can be verified using side loading.
If you want to verify _any_ proof, no matter what custom gates it uses, you can use FeatureFlags.allMaybe. Please note that this might incur a significant overhead.

You can also toggle specific feature flags manually by specifying them here.
Alternatively, you can use FeatureFlags.fromZkProgram to compute the set of feature flags that are compatible with a given program.

#### Overrides

```ts
DynamicProof.featureFlags
```

***

### maxProofsVerified

```ts
static maxProofsVerified: 2;
```

Defined in: [packages/upgradable/src/validators.ts:472](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L472)

#### Overrides

```ts
DynamicProof.maxProofsVerified
```

***

### publicInputType

```ts
static publicInputType: typeof ValidatorsDecisionState = ValidatorsDecisionState;
```

Defined in: [packages/upgradable/src/validators.ts:470](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L470)

#### Overrides

```ts
DynamicProof.publicInputType
```

***

### publicOutputType

```ts
static publicOutputType: typeof ValidatorsDecisionState = ValidatorsDecisionState;
```

Defined in: [packages/upgradable/src/validators.ts:471](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/validators.ts#L471)

#### Overrides

```ts
DynamicProof.publicOutputType
```
