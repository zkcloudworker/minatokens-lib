---
title: BondingCurveAdmin
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.BondingCurveAdmin
order: 323
---

# Class: BondingCurveAdmin

## Properties overview

- curve:  State<Field>; [↗](#curve)
- events:  {
  mint: typeof BondingMintEvent;
  redeem: typeof BondingRedeemEvent;
}; [↗](#events)
- mint:  typeof BondingMintEvent = BondingMintEvent; [↗](#mint)
- redeem:  typeof BondingRedeemEvent = BondingRedeemEvent; [↗](#redeem)
- Overrides: TokenContract.events [↗](#overrides)
- feeMaster:  State<PublicKey>; [↗](#feemaster)
- insideMint:  State<Bool>; [↗](#insidemint)
- owner:  State<PublicKey>; [↗](#owner)
- token:  State<PublicKey>; [↗](#token)
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
- ensureOwnerSignature() [↗](#ensureownersignature)
- initialize() [↗](#initialize)
- mint() [↗](#mint)
- redeem() [↗](#redeem)
- sync() [↗](#sync)
- updateVerificationKey() [↗](#updateverificationkey)

Defined in: [packages/token/src/BondingCurveAdmin.ts:112](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L112)

## Extends

- `TokenContract`

## Implements

- `FungibleTokenAdminBase`

## Constructors

### new BondingCurveAdmin()

```ts
new BondingCurveAdmin(address: PublicKey, tokenId?: Field): BondingCurveAdmin
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`BondingCurveAdmin`](tokensrcclassbondingcurveadmin)

#### Inherited from

```ts
TokenContract.constructor
```

## Properties

### curve

```ts
curve: State<Field>;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:119](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L119)

***

### events

```ts
events: {
  mint: typeof BondingMintEvent;
  redeem: typeof BondingRedeemEvent;
};
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:122](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L122)

A list of event types that can be emitted using this.emitEvent()`.

#### mint

```ts
mint: typeof BondingMintEvent = BondingMintEvent;
```

#### redeem

```ts
redeem: typeof BondingRedeemEvent = BondingRedeemEvent;
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

### feeMaster

```ts
feeMaster: State<PublicKey>;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:118](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L118)

***

### insideMint

```ts
insideMint: State<Bool>;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:120](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L120)

***

### owner

```ts
owner: State<PublicKey>;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:116](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L116)

***

### token

```ts
token: State<PublicKey>;
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:117](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L117)

## Methods

### approveBase()

```ts
approveBase(forest: AccountUpdateForest): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:146](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L146)

#### Parameters

##### forest

`AccountUpdateForest`

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

Defined in: [packages/token/src/BondingCurveAdmin.ts:516](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L516)

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

Defined in: [packages/token/src/BondingCurveAdmin.ts:534](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L534)

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

Defined in: [packages/token/src/BondingCurveAdmin.ts:509](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L509)

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

Defined in: [packages/token/src/BondingCurveAdmin.ts:522](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L522)

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

Defined in: [packages/token/src/BondingCurveAdmin.ts:528](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L528)

#### Returns

`Promise`\<`Bool`\>

#### Implementation of

```ts
FungibleTokenAdminBase.canResume
```

***

### deploy()

```ts
deploy(props: DeployArgs): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:127](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L127)

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

`DeployArgs`

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

### ensureOwnerSignature()

```ts
ensureOwnerSignature(): AccountUpdate
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:501](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L501)

#### Returns

`AccountUpdate`

***

### initialize()

```ts
initialize(props: BondingCurveAdminInitializeProps): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:151](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L151)

#### Parameters

##### props

[`BondingCurveAdminInitializeProps`](tokensrcclassbondingcurveadmininitializeprops)

#### Returns

`Promise`\<`void`\>

***

### mint()

```ts
mint(
   to: PublicKey, 
   amount: UInt64, 
price: UInt64): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:203](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L203)

#### Parameters

##### to

`PublicKey`

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### redeem()

```ts
redeem(
   amount: UInt64, 
   minPrice: UInt64, 
slippage: UInt32): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:329](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L329)

#### Parameters

##### amount

`UInt64`

##### minPrice

`UInt64`

##### slippage

`UInt32`

#### Returns

`Promise`\<`void`\>

***

### sync()

```ts
sync(): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:479](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L479)

In case the user burned tokens without calling the redeem method,
we need to sync the supply to the actual circulated supply

#### Returns

`Promise`\<`void`\>

***

### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Defined in: [packages/token/src/BondingCurveAdmin.ts:497](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/BondingCurveAdmin.ts#L497)

Update the verification key.
Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.

#### Parameters

##### vk

`VerificationKey`

#### Returns

`Promise`\<`void`\>
