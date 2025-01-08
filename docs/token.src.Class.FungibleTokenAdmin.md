---
title: FungibleTokenAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenAdmin
order: 324
---

# Class: FungibleTokenAdmin

## Properties overview

- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- canChangeAdmin() [↗](#canchangeadmin)
- canChangeVerificationKey() [↗](#canchangeverificationkey)
- canMint() [↗](#canmint)
- canPause() [↗](#canpause)
- canResume() [↗](#canresume)
- deploy() [↗](#deploy)
- updateVerificationKey() [↗](#updateverificationkey)

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L30)

A contract that grants permissions for administrative actions on a token.

We separate this out into a dedicated contract. That way, when issuing a token, a user can
specify their own rules for administrative actions, without changing the token contract itself.

The advantage is that third party applications that only use the token in a non-privileged way
can integrate against the unchanged token contract.

## Extends

- `SmartContract`

## Implements

- [`FungibleTokenAdminBase`](tokensrctypealiasfungibletokenadminbase)

## Constructors

### new FungibleTokenAdmin()

```ts
new FungibleTokenAdmin(address: PublicKey, tokenId?: Field): FungibleTokenAdmin
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenAdmin`](tokensrcclassfungibletokenadmin)

#### Inherited from

```ts
SmartContract.constructor
```

## Methods

### canChangeAdmin()

```ts
canChangeAdmin(_admin: PublicKey): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L73)

#### Parameters

##### \_admin

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canChangeAdmin
```

***

### canChangeVerificationKey()

```ts
canChangeVerificationKey(_vk: VerificationKey): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L91)

#### Parameters

##### \_vk

`VerificationKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canChangeVerificationKey
```

***

### canMint()

```ts
canMint(_accountUpdate: AccountUpdate): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L67)

#### Parameters

##### \_accountUpdate

`AccountUpdate`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canMint
```

***

### canPause()

```ts
canPause(): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L79)

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canPause
```

***

### canResume()

```ts
canResume(): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L85)

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canResume
```

***

### deploy()

```ts
deploy(props: FungibleTokenAdminDeployProps): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L37)

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

#### Parameters

##### props

[`FungibleTokenAdminDeployProps`](tokensrcinterfacefungibletokenadmindeployprops)

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
FungibleTokenAdminBase.deploy
```

#### Overrides

```ts
SmartContract.deploy
```

***

### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenStandardAdmin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L52)

Update the verification key.
Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.

#### Parameters

##### vk

`VerificationKey`

#### Returns

`Promise`\<`void`\>
