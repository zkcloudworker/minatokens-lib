---
title: FungibleTokenAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenAdmin
order: 266
---

# Class: FungibleTokenAdmin

## Methods overview

- canChangeAdmin() [↗](#canchangeadmin)
- canChangeVerificationKey() [↗](#canchangeverificationkey)
- canMint() [↗](#canmint)
- canPause() [↗](#canpause)
- canResume() [↗](#canresume)
- deploy() [↗](#deploy)
- updateVerificationKey() [↗](#updateverificationkey)

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

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenAdmin`](tokensrcclassfungibletokenadmin)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

## Methods

### canChangeAdmin()

```ts
canChangeAdmin(_admin: PublicKey): Promise<Bool>
```

#### Parameters

##### \_admin

`PublicKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

`FungibleTokenAdminBase.canChangeAdmin`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L73)

***

### canChangeVerificationKey()

```ts
canChangeVerificationKey(_vk: VerificationKey): Promise<Bool>
```

#### Parameters

##### \_vk

`VerificationKey`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

`FungibleTokenAdminBase.canChangeVerificationKey`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L91)

***

### canMint()

```ts
canMint(_accountUpdate: AccountUpdate): Promise<Bool>
```

#### Parameters

##### \_accountUpdate

`AccountUpdate`

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

`FungibleTokenAdminBase.canMint`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L67)

***

### canPause()

```ts
canPause(): Promise<Bool>
```

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

`FungibleTokenAdminBase.canPause`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L79)

***

### canResume()

```ts
canResume(): Promise<Bool>
```

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

`FungibleTokenAdminBase.canResume`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L85)

***

### deploy()

```ts
deploy(props: FungibleTokenAdminDeployProps): Promise<void>
```

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

`FungibleTokenAdminBase.deploy`

#### Overrides

`SmartContract.deploy`

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L37)

***

### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Update the verification key.
Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.

#### Parameters

##### vk

`VerificationKey`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/FungibleTokenStandardAdmin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenStandardAdmin.ts#L52)
