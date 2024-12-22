---
title: NFTUpdateProof
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTUpdateProof
order: 192
---

# Class: NFTUpdateProof

## Properties overview

- featureFlags: static featureFlags: {} = FeatureFlags.allMaybe; [↗](#featureflags)
- maxProofsVerified: static maxProofsVerified: 2; [↗](#maxproofsverified)
- publicInputType: static publicInputType: typeof NFTState = NFTState; [↗](#publicinputtype)
- publicOutputType: static publicOutputType: typeof NFTState = NFTState; [↗](#publicoutputtype)

Represents a dynamic proof used for updating the state of an NFT.

## Extends

- `DynamicProof`\<[`NFTState`](nftsrcclassnftstate), [`NFTState`](nftsrcclassnftstate)\>

## Constructors

### new NFTUpdateProof()

```ts
new NFTUpdateProof(__namedParameters: {}): NFTUpdateProof
```

#### Parameters

##### \_\_namedParameters

#### Returns

[`NFTUpdateProof`](nftsrcclassnftupdateproof)

#### Inherited from

`DynamicProof<NFTState, NFTState>.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/proof-system/proof.d.ts:23

## Properties

### featureFlags

```ts
static featureFlags: {} = FeatureFlags.allMaybe;
```

As the name indicates, feature flags are features of the proof system.

If we want to side load proofs and verification keys, we first have to tell Pickles what _shape_ of proofs it should expect.

For example, if we want to side load proofs that use foreign field arithmetic custom gates, we have to make Pickles aware of that by defining
these custom gates.

_Note:_ Only proofs that use the exact same composition of custom gates which were expected by Pickles can be verified using side loading.
If you want to verify _any_ proof, no matter what custom gates it uses, you can use FeatureFlags.allMaybe. Please note that this might incur a significant overhead.

You can also toggle specific feature flags manually by specifying them here.
Alternatively, you can use FeatureFlags.fromZkProgram to compute the set of feature flags that are compatible with a given program.

#### Overrides

`DynamicProof.featureFlags`

#### Defined in

[packages/nft/src/contracts/types.ts:287](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L287)

***

### maxProofsVerified

```ts
static maxProofsVerified: 2;
```

#### Overrides

`DynamicProof.maxProofsVerified`

#### Defined in

[packages/nft/src/contracts/types.ts:286](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L286)

***

### publicInputType

```ts
static publicInputType: typeof NFTState = NFTState;
```

#### Overrides

`DynamicProof.publicInputType`

#### Defined in

[packages/nft/src/contracts/types.ts:284](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L284)

***

### publicOutputType

```ts
static publicOutputType: typeof NFTState = NFTState;
```

#### Overrides

`DynamicProof.publicOutputType`

#### Defined in

[packages/nft/src/contracts/types.ts:285](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/types.ts#L285)
