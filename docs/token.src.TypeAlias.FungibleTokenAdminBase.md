---
title: FungibleTokenAdminBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.TypeAlias.FungibleTokenAdminBase
order: 281
---

# Type Alias: FungibleTokenAdminBase

```ts
type FungibleTokenAdminBase = SmartContract & {
  canChangeAdmin: Promise<Bool>;
  canChangeVerificationKey: Promise<Bool>;
  canMint: Promise<Bool>;
  canPause: Promise<Bool>;
  canResume: Promise<Bool>;
};
```

## Type declaration

### canChangeAdmin()

#### Parameters

##### admin

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

### canChangeVerificationKey()

#### Parameters

##### vk

`VerificationKey`

#### Returns

`Promise`\<`Bool`\>

### canMint()

#### Parameters

##### accountUpdate

`AccountUpdate`

#### Returns

`Promise`\<`Bool`\>

### canPause()

#### Returns

`Promise`\<`Bool`\>

### canResume()

#### Returns

`Promise`\<`Bool`\>

## Defined in

[packages/token/src/FungibleTokenContract.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L24)
