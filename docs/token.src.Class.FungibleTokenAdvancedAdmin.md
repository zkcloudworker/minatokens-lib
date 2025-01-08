---
title: FungibleTokenAdvancedAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenAdvancedAdmin
order: 325
---

# Class: FungibleTokenAdvancedAdmin

## Properties overview

- adminData:  State<Field>; [↗](#admindata)
- adminPublicKey:  State<PublicKey>; [↗](#adminpublickey)
- events:  {
  updateWhitelist: typeof Whitelist;
}; [↗](#events)
- updateWhitelist:  typeof Whitelist = Whitelist; [↗](#updatewhitelist)
- Overrides: TokenContract.events [↗](#overrides)
- tokenContract:  State<PublicKey>; [↗](#tokencontract)
- whitelist:  State<Whitelist>; [↗](#whitelist)
- Overrides: TokenContract.approveBase [↗](#overrides)
- Overrides: TokenContract.deploy [↗](#overrides)

## Methods overview

- approveBase() [↗](#approvebase)
- canChangeAdmin() [↗](#canchangeadmin)
- canChangeVerificationKey() [↗](#canchangeverificationkey)
- canMint() [↗](#canmint)
- canPause() [↗](#canpause)
- canResume() [↗](#canresume)
- deploy() [↗](#deploy)
- updateVerificationKey() [↗](#updateverificationkey)
- updateWhitelist() [↗](#updatewhitelist)

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L84)

A contract that grants permissions for administrative actions on a token.

We separate this out into a dedicated contract. That way, when issuing a token, a user can
specify their own rules for administrative actions, without changing the token contract itself.

The advantage is that third party applications that only use the token in a non-privileged way
can integrate against the unchanged token contract.

## Extends

- `TokenContract`

## Implements

- [`FungibleTokenAdminBase`](tokensrctypealiasfungibletokenadminbase)

## Constructors

### new FungibleTokenAdvancedAdmin()

```ts
new FungibleTokenAdvancedAdmin(address: PublicKey, tokenId?: Field): FungibleTokenAdvancedAdmin
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenAdvancedAdmin`](tokensrcclassfungibletokenadvancedadmin)

#### Inherited from

```ts
TokenContract.constructor
```

## Properties

### adminData

```ts
adminData: State<Field>;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L91)

***

### adminPublicKey

```ts
adminPublicKey: State<PublicKey>;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:88](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L88)

***

### events

```ts
events: {
  updateWhitelist: typeof Whitelist;
};
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L122)

A list of event types that can be emitted using this.emitEvent()`.

#### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

#### Implementation of

```ts
FungibleTokenAdminBase.events
```

#### Overrides

```ts
TokenContract.events
```

***

### tokenContract

```ts
tokenContract: State<PublicKey>;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L89)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L90)

## Methods

### approveBase()

```ts
approveBase(forest: AccountUpdateForest): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:98](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L98)

Overrides the approveBase method to prevent transfers of tokens.

#### Parameters

##### forest

`AccountUpdateForest`

The account update forest.

#### Returns

`Promise`\<`void`\>

#### Overrides

```ts
TokenContract.approveBase
```

***

### canChangeAdmin()

```ts
canChangeAdmin(_admin: PublicKey): Promise<Bool>
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:227](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L227)

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

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:256](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L256)

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

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:145](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L145)

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

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:233](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L233)

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

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:239](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L239)

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canResume
```

***

### deploy()

```ts
deploy(props: FungibleTokenWhitelistedAdminDeployProps): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L102)

Deploys a TokenContract.

In addition to base smart contract deployment, this adds two steps:
- set the `access` permission to `proofOrSignature()`, to prevent against unauthorized token operations
  - not doing this would imply that anyone can bypass token contract authorization and simply mint themselves tokens
- require the zkapp account to be new, using the `isNew` precondition.
  this guarantees that the access permission is set from the very start of the existence of this account.
  creating the zkapp account before deployment would otherwise be a security vulnerability that is too easy to introduce.

Note that because of the `isNew` precondition, the zkapp account must not be created prior to calling `deploy()`.

If the contract needs to be re-deployed, you can switch off this behaviour by overriding the `isNew` precondition:
```ts
async deploy() {
  await super.deploy();
  // DON'T DO THIS ON THE INITIAL DEPLOYMENT!
  this.account.isNew.requireNothing();
}
```

#### Parameters

##### props

[`FungibleTokenWhitelistedAdminDeployProps`](tokensrcinterfacefungibletokenwhitelistedadmindeployprops)

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
FungibleTokenAdminBase.deploy
```

#### Overrides

```ts
TokenContract.deploy
```

***

### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:130](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L130)

Update the verification key.
Note that because we have set the permissions for setting
the verification key to `impossibleDuringCurrentVersion()`,
this will only be possible in case of a protocol update that requires an update.

#### Parameters

##### vk

`VerificationKey`

#### Returns

`Promise`\<`void`\>

***

### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:244](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L244)

#### Parameters

##### whitelist

`Whitelist`

#### Returns

`Promise`\<`void`\>
