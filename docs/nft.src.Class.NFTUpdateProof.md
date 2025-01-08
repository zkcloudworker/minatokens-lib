---
title: NFTUpdateProof
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTUpdateProof
order: 216
---

# Class: NFTUpdateProof

## Properties overview

- featureFlags: static featureFlags: {} = FeatureFlags.allMaybe; [↗](#featureflags)
- Overrides: DynamicProof.featureFlags [↗](#overrides)
- maxProofsVerified: static maxProofsVerified: 2; [↗](#maxproofsverified)
- Overrides: DynamicProof.maxProofsVerified [↗](#overrides)
- publicInputType: static publicInputType: typeof NFTState = NFTState; [↗](#publicinputtype)
- Overrides: DynamicProof.publicInputType [↗](#overrides)
- publicOutputType: static publicOutputType: typeof NFTState = NFTState; [↗](#publicoutputtype)
- Overrides: DynamicProof.publicOutputType [↗](#overrides)

Defined in: [packages/nft/src/interfaces/types.ts:269](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L269)

Represents a dynamic proof used for updating the state of an NFT.

## Extends

- `DynamicProof`\<[`NFTState`](nftsrcclassnftstate), [`NFTState`](nftsrcclassnftstate)\>

## Constructors

### new NFTUpdateProof()

```ts
new NFTUpdateProof(__namedParameters: {}): NFTUpdateProof
```

Defined in: node\_modules/o1js/dist/node/lib/proof-system/proof.d.ts:23

#### Parameters

##### \_\_namedParameters

#### Returns

[`NFTUpdateProof`](nftsrcclassnftupdateproof)

#### Inherited from

```ts
DynamicProof<NFTState, NFTState>.constructor
```

## Properties

### featureFlags

```ts
static featureFlags: {} = FeatureFlags.allMaybe;
```

Defined in: [packages/nft/src/interfaces/types.ts:273](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L273)

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

Defined in: [packages/nft/src/interfaces/types.ts:272](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L272)

#### Overrides

```ts
DynamicProof.maxProofsVerified
```

***

### publicInputType

```ts
static publicInputType: typeof NFTState = NFTState;
```

Defined in: [packages/nft/src/interfaces/types.ts:270](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L270)

#### Overrides

```ts
DynamicProof.publicInputType
```

***

### publicOutputType

```ts
static publicOutputType: typeof NFTState = NFTState;
```

Defined in: [packages/nft/src/interfaces/types.ts:271](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L271)

#### Overrides

```ts
DynamicProof.publicOutputType
```
