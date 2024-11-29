---
title: Contracts
category: 6749f91cfa3765005489621e
hidden: false
order: 2
---

# @minatokens/token

## BalanceChangeEvent

### Extends

- \{
  `address`: `PublicKey`;
  `amount`: `Int64`;
  \}

### Constructors

#### new BalanceChangeEvent()

```ts
new BalanceChangeEvent(value: {
  address: PublicKey;
  amount: Int64;
 }): BalanceChangeEvent
```

##### Parameters

###### value

###### value.address

`PublicKey` = `PublicKey`

###### value.amount

`Int64` = `Int64`

##### Returns

[`BalanceChangeEvent`](globals.md#balancechangeevent)

##### Inherited from

`Struct({
  address: PublicKey,
  amount: Int64,
}).constructor`

##### Defined in

node_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

### Properties

#### address

```ts
address: PublicKey = PublicKey;
```

##### Inherited from

`Struct({
  address: PublicKey,
  amount: Int64,
}).address`

##### Defined in

[src/FungibleTokenContract.ts:325](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L325)

#### amount

```ts
amount: Int64 = Int64;
```

##### Inherited from

`Struct({
  address: PublicKey,
  amount: Int64,
}).amount`

##### Defined in

[src/FungibleTokenContract.ts:326](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L326)

---

## BurnEvent

### Extends

- \{
  `amount`: `UInt64`;
  `from`: `PublicKey`;
  \}

### Constructors

#### new BurnEvent()

```ts
new BurnEvent(value: {
  amount: UInt64;
  from: PublicKey;
 }): BurnEvent
```

##### Parameters

###### value

###### value.amount

`UInt64` = `UInt64`

###### value.from

`PublicKey` = `PublicKey`

##### Returns

[`BurnEvent`](globals.md#burnevent)

##### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).constructor`

##### Defined in

node_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

### Properties

#### amount

```ts
amount: UInt64 = UInt64;
```

##### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).amount`

##### Defined in

[src/FungibleTokenContract.ts:321](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L321)

#### from

```ts
from: PublicKey = PublicKey;
```

##### Inherited from

`Struct({
  from: PublicKey,
  amount: UInt64,
}).from`

##### Defined in

[src/FungibleTokenContract.ts:320](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L320)

---

## FungibleTokenAdmin

A contract that grants permissions for administrative actions on a token.

We separate this out into a dedicated contract. That way, when issuing a token, a user can
specify their own rules for administrative actions, without changing the token contract itself.

The advantage is that third party applications that only use the token in a non-privileged way
can integrate against the unchanged token contract.

### Extends

- `SmartContract`

### Implements

- [`FungibleTokenAdminBase`](globals.md#fungibletokenadminbase)

### Constructors

#### new FungibleTokenAdmin()

```ts
new FungibleTokenAdmin(address: PublicKey, tokenId?: Field): FungibleTokenAdmin
```

##### Parameters

###### address

`PublicKey`

###### tokenId?

`Field`

##### Returns

[`FungibleTokenAdmin`](globals.md#fungibletokenadmin)

##### Inherited from

`SmartContract.constructor`

##### Defined in

node_modules/o1js/dist/node/lib/mina/zkapp.d.ts:146

### Methods

#### canChangeAdmin()

```ts
canChangeAdmin(_admin: PublicKey): Promise<Bool>
```

##### Parameters

###### \_admin

`PublicKey`

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canChangeAdmin`

##### Defined in

[src/FungibleTokenAdmin.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L73)

#### canMint()

```ts
canMint(_accountUpdate: AccountUpdate): Promise<Bool>
```

##### Parameters

###### \_accountUpdate

`AccountUpdate`

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canMint`

##### Defined in

[src/FungibleTokenAdmin.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L67)

#### canPause()

```ts
canPause(): Promise<Bool>
```

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canPause`

##### Defined in

[src/FungibleTokenAdmin.ts:79](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L79)

#### canResume()

```ts
canResume(): Promise<Bool>
```

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canResume`

##### Defined in

[src/FungibleTokenAdmin.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L85)

#### deploy()

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

##### Parameters

###### props

[`FungibleTokenAdminDeployProps`](globals.md#fungibletokenadmindeployprops)

##### Returns

`Promise`\<`void`\>

##### Implementation of

`FungibleTokenAdminBase.deploy`

##### Overrides

`SmartContract.deploy`

##### Defined in

[src/FungibleTokenAdmin.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L37)

#### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Update the verification key.
Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.

##### Parameters

###### vk

`VerificationKey`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/FungibleTokenAdmin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L52)

---

## FungibleTokenBidContract

### Extends

- `SmartContract`

### Constructors

#### new FungibleTokenBidContract()

```ts
new FungibleTokenBidContract(address: PublicKey, tokenId?: Field): FungibleTokenBidContract
```

##### Parameters

###### address

`PublicKey`

###### tokenId?

`Field`

##### Returns

[`FungibleTokenBidContract`](globals.md#fungibletokenbidcontract)

##### Inherited from

`SmartContract.constructor`

##### Defined in

node_modules/o1js/dist/node/lib/mina/zkapp.d.ts:146

### Properties

#### buyer

```ts
buyer: State<PublicKey>;
```

##### Defined in

[src/bid.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L28)

#### events

```ts
events: {
  bid: typeof UInt64;
  sell: typeof UInt64;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof UInt64;
}
```

A list of event types that can be emitted using this.emitEvent()`.

##### bid

```ts
bid: typeof UInt64 = UInt64;
```

##### sell

```ts
sell: typeof UInt64 = UInt64;
```

##### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

##### withdraw

```ts
withdraw: typeof UInt64 = UInt64;
```

##### Overrides

`SmartContract.events`

##### Defined in

[src/bid.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L60)

#### price

```ts
price: State<UInt64>;
```

##### Defined in

[src/bid.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L27)

#### token

```ts
token: State<PublicKey>;
```

##### Defined in

[src/bid.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L29)

#### whitelist

```ts
whitelist: State<Whitelist>;
```

##### Defined in

[src/bid.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L30)

### Methods

#### bid()

```ts
bid(amount: UInt64, price: UInt64): Promise<void>
```

##### Parameters

###### amount

`UInt64`

###### price

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/bid.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L91)

#### deploy()

```ts
deploy(args: FungibleTokenBidContractDeployProps): Promise<void>
```

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

##### Parameters

###### args

[`FungibleTokenBidContractDeployProps`](globals.md#fungibletokenbidcontractdeployprops)

##### Returns

`Promise`\<`void`\>

##### Overrides

`SmartContract.deploy`

##### Defined in

[src/bid.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L32)

#### initialize()

```ts
initialize(
   token: PublicKey,
   amount: UInt64,
price: UInt64): Promise<void>
```

##### Parameters

###### token

`PublicKey`

###### amount

`UInt64`

###### price

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/bid.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L67)

#### sell()

```ts
sell(amount: UInt64): Promise<void>
```

##### Parameters

###### amount

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/bid.ts:138](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L138)

#### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

##### Parameters

###### whitelist

`Whitelist`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/bid.ts:164](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L164)

#### withdraw()

```ts
withdraw(amountInMina: UInt64): Promise<void>
```

##### Parameters

###### amountInMina

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/bid.ts:123](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L123)

---

## FungibleTokenOfferContract

### Extends

- `SmartContract`

### Constructors

#### new FungibleTokenOfferContract()

```ts
new FungibleTokenOfferContract(address: PublicKey, tokenId?: Field): FungibleTokenOfferContract
```

##### Parameters

###### address

`PublicKey`

###### tokenId?

`Field`

##### Returns

[`FungibleTokenOfferContract`](globals.md#fungibletokenoffercontract)

##### Inherited from

`SmartContract.constructor`

##### Defined in

node_modules/o1js/dist/node/lib/mina/zkapp.d.ts:146

### Properties

#### events

```ts
events: {
  buy: typeof UInt64;
  offer: typeof UInt64;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof UInt64;
}
```

A list of event types that can be emitted using this.emitEvent()`.

##### buy

```ts
buy: typeof UInt64 = UInt64;
```

##### offer

```ts
offer: typeof UInt64 = UInt64;
```

##### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

##### withdraw

```ts
withdraw: typeof UInt64 = UInt64;
```

##### Overrides

`SmartContract.events`

##### Defined in

[src/offer.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L60)

#### price

```ts
price: State<UInt64>;
```

##### Defined in

[src/offer.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L26)

#### seller

```ts
seller: State<PublicKey>;
```

##### Defined in

[src/offer.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L27)

#### token

```ts
token: State<PublicKey>;
```

##### Defined in

[src/offer.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L28)

#### whitelist

```ts
whitelist: State<Whitelist>;
```

##### Defined in

[src/offer.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L29)

### Methods

#### buy()

```ts
buy(amount: UInt64): Promise<void>
```

##### Parameters

###### amount

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/offer.ts:131](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L131)

#### deploy()

```ts
deploy(args: FungibleTokenOfferContractDeployProps): Promise<void>
```

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

##### Parameters

###### args

[`FungibleTokenOfferContractDeployProps`](globals.md#fungibletokenoffercontractdeployprops)

##### Returns

`Promise`\<`void`\>

##### Overrides

`SmartContract.deploy`

##### Defined in

[src/offer.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L31)

#### initialize()

```ts
initialize(
   seller: PublicKey,
   token: PublicKey,
   amount: UInt64,
price: UInt64): Promise<void>
```

##### Parameters

###### seller

`PublicKey`

###### token

`PublicKey`

###### amount

`UInt64`

###### price

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/offer.ts:67](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L67)

#### offer()

```ts
offer(amount: UInt64, price: UInt64): Promise<void>
```

##### Parameters

###### amount

`UInt64`

###### price

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/offer.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L85)

#### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

##### Parameters

###### whitelist

`Whitelist`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/offer.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L165)

#### withdraw()

```ts
withdraw(amount: UInt64): Promise<void>
```

##### Parameters

###### amount

`UInt64`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/offer.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L110)

---

## FungibleTokenWhitelistedAdmin

A contract that grants permissions for administrative actions on a token.

We separate this out into a dedicated contract. That way, when issuing a token, a user can
specify their own rules for administrative actions, without changing the token contract itself.

The advantage is that third party applications that only use the token in a non-privileged way
can integrate against the unchanged token contract.

### Extends

- `SmartContract`

### Implements

- [`FungibleTokenAdminBase`](globals.md#fungibletokenadminbase)

### Constructors

#### new FungibleTokenWhitelistedAdmin()

```ts
new FungibleTokenWhitelistedAdmin(address: PublicKey, tokenId?: Field): FungibleTokenWhitelistedAdmin
```

##### Parameters

###### address

`PublicKey`

###### tokenId?

`Field`

##### Returns

[`FungibleTokenWhitelistedAdmin`](globals.md#fungibletokenwhitelistedadmin)

##### Inherited from

`SmartContract.constructor`

##### Defined in

node_modules/o1js/dist/node/lib/mina/zkapp.d.ts:146

### Properties

#### adminPublicKey

```ts
adminPublicKey: State<PublicKey>;
```

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L37)

#### events

```ts
events: {
  updateWhitelist: typeof Whitelist;
}
```

A list of event types that can be emitted using this.emitEvent()`.

##### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

##### Implementation of

`FungibleTokenAdminBase.events`

##### Overrides

`SmartContract.events`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L52)

#### whitelist

```ts
whitelist: State<Whitelist>;
```

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L38)

### Methods

#### canChangeAdmin()

```ts
canChangeAdmin(_admin: PublicKey): Promise<Bool>
```

##### Parameters

###### \_admin

`PublicKey`

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canChangeAdmin`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L85)

#### canMint()

```ts
canMint(_accountUpdate: AccountUpdate): Promise<Bool>
```

##### Parameters

###### \_accountUpdate

`AccountUpdate`

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canMint`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L73)

#### canPause()

```ts
canPause(): Promise<Bool>
```

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canPause`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:91](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L91)

#### canResume()

```ts
canResume(): Promise<Bool>
```

##### Returns

`Promise`\<`Bool`\>

##### Implementation of

`FungibleTokenAdminBase.canResume`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:97](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L97)

#### deploy()

```ts
deploy(props: FungibleTokenWhitelistedAdminDeployProps): Promise<void>
```

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

##### Parameters

###### props

[`FungibleTokenWhitelistedAdminDeployProps`](globals.md#fungibletokenwhitelistedadmindeployprops)

##### Returns

`Promise`\<`void`\>

##### Implementation of

`FungibleTokenAdminBase.deploy`

##### Overrides

`SmartContract.deploy`

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L40)

#### updateVerificationKey()

```ts
updateVerificationKey(vk: VerificationKey): Promise<void>
```

Update the verification key.
Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.

##### Parameters

###### vk

`VerificationKey`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L58)

#### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

##### Parameters

###### whitelist

`Whitelist`

##### Returns

`Promise`\<`void`\>

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:102](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L102)

---

## MintEvent

### Extends

- \{
  `amount`: `UInt64`;
  `recipient`: `PublicKey`;
  \}

### Constructors

#### new MintEvent()

```ts
new MintEvent(value: {
  amount: UInt64;
  recipient: PublicKey;
 }): MintEvent
```

##### Parameters

###### value

###### value.amount

`UInt64` = `UInt64`

###### value.recipient

`PublicKey` = `PublicKey`

##### Returns

[`MintEvent`](globals.md#mintevent)

##### Inherited from

`Struct({
  recipient: PublicKey,
  amount: UInt64,
}).constructor`

##### Defined in

node_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

### Properties

#### amount

```ts
amount: UInt64 = UInt64;
```

##### Inherited from

`Struct({
  recipient: PublicKey,
  amount: UInt64,
}).amount`

##### Defined in

[src/FungibleTokenContract.ts:316](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L316)

#### recipient

```ts
recipient: PublicKey = PublicKey;
```

##### Inherited from

`Struct({
  recipient: PublicKey,
  amount: UInt64,
}).recipient`

##### Defined in

[src/FungibleTokenContract.ts:315](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L315)

---

## PauseEvent

### Extends

- \{
  `isPaused`: `Bool`;
  \}

### Constructors

#### new PauseEvent()

```ts
new PauseEvent(value: {
  isPaused: Bool;
 }): PauseEvent
```

##### Parameters

###### value

###### value.isPaused

`Bool` = `Bool`

##### Returns

[`PauseEvent`](globals.md#pauseevent)

##### Inherited from

`Struct({
  isPaused: Bool,
}).constructor`

##### Defined in

node_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

### Properties

#### isPaused

```ts
isPaused: Bool = Bool;
```

##### Inherited from

`Struct({
  isPaused: Bool,
}).isPaused`

##### Defined in

[src/FungibleTokenContract.ts:311](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L311)

---

## SetAdminEvent

### Extends

- \{
  `adminKey`: `PublicKey`;
  \}

### Constructors

#### new SetAdminEvent()

```ts
new SetAdminEvent(value: {
  adminKey: PublicKey;
 }): SetAdminEvent
```

##### Parameters

###### value

###### value.adminKey

`PublicKey` = `PublicKey`

##### Returns

[`SetAdminEvent`](globals.md#setadminevent)

##### Inherited from

`Struct({
  adminKey: PublicKey,
}).constructor`

##### Defined in

node_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

### Properties

#### adminKey

```ts
adminKey: PublicKey = PublicKey;
```

##### Inherited from

`Struct({
  adminKey: PublicKey,
}).adminKey`

##### Defined in

[src/FungibleTokenContract.ts:307](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L307)

---

## FungibleTokenAdminDeployProps

### Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

### Properties

#### adminPublicKey

```ts
adminPublicKey: PublicKey;
```

##### Defined in

[src/FungibleTokenAdmin.ts:19](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdmin.ts#L19)

---

## FungibleTokenBidContractDeployProps

### Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

### Properties

#### whitelist

```ts
whitelist: Whitelist;
```

The whitelist.

##### Defined in

[src/bid.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L24)

---

## FungibleTokenDeployProps

### Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

### Properties

#### src

```ts
src: string;
```

A source code reference, which is placed within the `zkappUri` of the contract account.
Typically a link to a file on github.

##### Defined in

[src/FungibleTokenContract.ts:41](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L41)

#### symbol

```ts
symbol: string;
```

The token symbol.

##### Defined in

[src/FungibleTokenContract.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L38)

---

## FungibleTokenOfferContractDeployProps

### Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

### Properties

#### whitelist

```ts
whitelist: Whitelist;
```

The whitelist.

##### Defined in

[src/offer.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L23)

---

## FungibleTokenWhitelistedAdminDeployProps

### Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

### Properties

#### adminPublicKey

```ts
adminPublicKey: PublicKey;
```

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L21)

#### whitelist

```ts
whitelist: Whitelist;
```

##### Defined in

[src/FungibleTokenWhitelistedAdmin.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenWhitelistedAdmin.ts#L22)

---

## blockchain

```ts
type blockchain:
  | "local"
  | "devnet"
  | "lightnet"
  | "mainnet"
  | "zeko";
```

blockchain is the type for the chain ID.

### Defined in

[src/types.ts:4](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/types.ts#L4)

---

## Compilable

```ts
type Compilable: {
  compile: Promise<{
     verificationKey: {
        data: string;
        hash: Field;
       };
    }>;
};
```

### Type declaration

#### compile()

##### Parameters

###### \_\_namedParameters?

###### \_\_namedParameters.cache

`Cache`

##### Returns

`Promise`\<\{
`verificationKey`: \{
`data`: `string`;
`hash`: `Field`;
\};
\}\>

###### verificationKey

```ts
verificationKey: {
  data: string;
  hash: Field;
}
```

###### verificationKey.data

```ts
data: string;
```

###### verificationKey.hash

```ts
hash: Field;
```

### Defined in

[src/token.ts:10](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/token.ts#L10)

---

## FungibleTokenAdminBase

```ts
type FungibleTokenAdminBase: SmartContract & {
  canChangeAdmin: Promise<Bool>;
  canMint: Promise<Bool>;
  canPause: Promise<Bool>;
  canResume: Promise<Bool>;
};
```

### Type declaration

#### canChangeAdmin()

##### Parameters

###### admin

`PublicKey`

##### Returns

`Promise`\<`Bool`\>

#### canMint()

##### Parameters

###### accountUpdate

`AccountUpdate`

##### Returns

`Promise`\<`Bool`\>

#### canPause()

##### Returns

`Promise`\<`Bool`\>

#### canResume()

##### Returns

`Promise`\<`Bool`\>

### Defined in

[src/FungibleTokenContract.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L24)

---

## FungibleTokenAdminConstructor()

```ts
type FungibleTokenAdminConstructor: (adminPublicKey: PublicKey) => FungibleTokenAdminBase;
```

### Parameters

#### adminPublicKey

`PublicKey`

### Returns

[`FungibleTokenAdminBase`](globals.md#fungibletokenadminbase)

### Defined in

[src/FungibleTokenContract.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L31)

---

## FungibleTokenTransactionType

```ts
type FungibleTokenTransactionType:
  | "mint"
  | "transfer"
  | "bid"
  | "offer"
  | "buy"
  | "sell"
  | "withdrawBid"
  | "withdrawOffer"
  | "whitelistBid"
  | "whitelistOffer"
  | "whitelistAdmin";
```

### Defined in

[src/types.ts:6](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/types.ts#L6)

---

## FungibleToken

```ts
const FungibleToken: typeof FungibleToken;
```

### Defined in

[src/FungibleToken.ts:10](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleToken.ts#L10)

---

## FungibleTokenErrors

```ts
const FungibleTokenErrors: {
  flashMinting: string;
  noAdminKey: string;
  noPermissionChangeAllowed: string;
  noPermissionToChangeAdmin: string;
  noPermissionToMint: string;
  noPermissionToPause: string;
  noPermissionToResume: string;
  noTransferFromCirculation: string;
  tokenPaused: string;
  unbalancedTransaction: string;
};
```

### Type declaration

#### flashMinting

```ts
flashMinting: string =
  "Flash-minting or unbalanced transaction detected. Please make sure that your transaction is balanced, and that your AccountUpdates are ordered properly, so that tokens are not received before they are sent.";
```

#### noAdminKey

```ts
noAdminKey: string = "could not fetch admin contract key";
```

#### noPermissionChangeAllowed

```ts
noPermissionChangeAllowed: string =
  "Can't change permissions for access or receive on token accounts";
```

#### noPermissionToChangeAdmin

```ts
noPermissionToChangeAdmin: string = "Not allowed to change admin contract";
```

#### noPermissionToMint

```ts
noPermissionToMint: string = "Not allowed to mint tokens";
```

#### noPermissionToPause

```ts
noPermissionToPause: string = "Not allowed to pause token";
```

#### noPermissionToResume

```ts
noPermissionToResume: string = "Not allowed to resume token";
```

#### noTransferFromCirculation

```ts
noTransferFromCirculation: string =
  "Can't transfer to/from the circulation account";
```

#### tokenPaused

```ts
tokenPaused: string = "Token is currently paused";
```

#### unbalancedTransaction

```ts
unbalancedTransaction: string = "Transaction is unbalanced";
```

### Defined in

[src/FungibleTokenContract.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L44)

---

## LAUNCH_FEE

```ts
const LAUNCH_FEE: 1000000000 = 1e9;
```

### Defined in

[src/fee.ts:1](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/fee.ts#L1)

---

## tokenContracts

```ts
const tokenContracts: {};
```

### Index Signature

\[`key`: `string`\]: [`Compilable`](globals.md#compilable)

### Defined in

[src/token.ts:19](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/token.ts#L19)

---

## tokenVerificationKeys

```ts
const tokenVerificationKeys: {
  [key in "mainnet" | "testnet"]: {
    o1js: string;
    vk: (key: string) => {
      data: string;
      hash: string;
      type: "token" | "admin" | "upgrade" | "user";
    };
    zkcloudworker: string;
  };
};
```

### Defined in

[src/vk.ts:1](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/vk.ts#L1)

---

## TRANSACTION_FEE

```ts
const TRANSACTION_FEE: 100000000 = 1e8;
```

### Defined in

[src/fee.ts:2](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/fee.ts#L2)

---

## WhitelistedFungibleToken

```ts
const WhitelistedFungibleToken: typeof FungibleToken;
```

### Defined in

[src/FungibleToken.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleToken.ts#L11)

---

## buildTokenDeployTransaction()

```ts
function buildTokenDeployTransaction(params: {
  adminAddress: PublicKey;
  adminContractAddress: PublicKey;
  chain: blockchain;
  decimals: UInt8;
  developerAddress: PublicKey;
  developerFee: UInt64;
  fee: UInt64;
  memo: string;
  nonce: number;
  provingFee: UInt64;
  provingKey: PublicKey;
  sender: PublicKey;
  symbol: string;
  tokenAddress: PublicKey;
  uri: string;
  whitelist: string | WhitelistedAddressList;
}): Promise<{
  isWhitelisted: boolean;
  tx: Transaction<false, false>;
  verificationKeyHashes: string[];
  whitelist: string | undefined;
}>;
```

### Parameters

#### params

##### params.adminAddress

`PublicKey`

##### params.adminContractAddress

`PublicKey`

##### params.chain

[`blockchain`](globals.md#blockchain)

##### params.decimals

`UInt8`

##### params.developerAddress

`PublicKey`

##### params.developerFee

`UInt64`

##### params.fee

`UInt64`

##### params.memo

`string`

##### params.nonce

`number`

##### params.provingFee

`UInt64`

##### params.provingKey

`PublicKey`

##### params.sender

`PublicKey`

##### params.symbol

`string`

##### params.tokenAddress

`PublicKey`

##### params.uri

`string`

##### params.whitelist

`string` \| `WhitelistedAddressList`

### Returns

`Promise`\<\{
`isWhitelisted`: `boolean`;
`tx`: `Transaction`\<`false`, `false`\>;
`verificationKeyHashes`: `string`[];
`whitelist`: `string` \| `undefined`;
\}\>

#### isWhitelisted

```ts
isWhitelisted: boolean;
```

#### tx

```ts
tx: Transaction<false, false>;
```

#### verificationKeyHashes

```ts
verificationKeyHashes: string[];
```

#### whitelist

```ts
whitelist: string | undefined;
```

### Defined in

[src/build.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/build.ts#L22)

---

## buildTokenTransaction()

```ts
function buildTokenTransaction(params: {
  amount: UInt64;
  chain: blockchain;
  developerAddress: PublicKey;
  developerFee: UInt64;
  fee: UInt64;
  from: PublicKey;
  memo: string;
  nonce: number;
  price: UInt64;
  provingFee: UInt64;
  provingKey: PublicKey;
  to: PublicKey;
  tokenAddress: PublicKey;
  txType: FungibleTokenTransactionType;
  whitelist: string | WhitelistedAddressList;
}): Promise<{
  adminAddress: PublicKey;
  adminContractAddress: PublicKey;
  isWhitelisted: boolean;
  symbol: string;
  tx: Transaction<false, false>;
  verificationKeyHashes: string[];
  whitelist: string | undefined;
}>;
```

### Parameters

#### params

##### params.amount

`UInt64`

##### params.chain

[`blockchain`](globals.md#blockchain)

##### params.developerAddress

`PublicKey`

##### params.developerFee

`UInt64`

##### params.fee

`UInt64`

##### params.from

`PublicKey`

##### params.memo

`string`

##### params.nonce

`number`

##### params.price

`UInt64`

##### params.provingFee

`UInt64`

##### params.provingKey

`PublicKey`

##### params.to

`PublicKey`

##### params.tokenAddress

`PublicKey`

##### params.txType

[`FungibleTokenTransactionType`](globals.md#fungibletokentransactiontype)

##### params.whitelist

`string` \| `WhitelistedAddressList`

### Returns

`Promise`\<\{
`adminAddress`: `PublicKey`;
`adminContractAddress`: `PublicKey`;
`isWhitelisted`: `boolean`;
`symbol`: `string`;
`tx`: `Transaction`\<`false`, `false`\>;
`verificationKeyHashes`: `string`[];
`whitelist`: `string` \| `undefined`;
\}\>

#### adminAddress

```ts
adminAddress: PublicKey;
```

#### adminContractAddress

```ts
adminContractAddress: PublicKey;
```

#### isWhitelisted

```ts
isWhitelisted: boolean;
```

#### symbol

```ts
symbol: string;
```

#### tx

```ts
tx: Transaction<false, false>;
```

#### verificationKeyHashes

```ts
verificationKeyHashes: string[];
```

#### whitelist

```ts
whitelist: string | undefined;
```

### Defined in

[src/build.ts:189](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/build.ts#L189)

---

## fetchMinaAccount()

```ts
function fetchMinaAccount(params: {
  force: boolean;
  publicKey: string | PublicKey;
  tokenId: string | Field;
}): Promise<
  | {
      account: undefined;
    }
  | {}
>;
```

Fetches the Mina account for a given public key with error handling

### Parameters

#### params

the parameters for fetching the account

##### params.force

`boolean`

whether to force the fetch - use it only if you are sure the account exists

##### params.publicKey

`string` \| `PublicKey`

the public key of the account

##### params.tokenId

`string` \| `Field`

the token id of the account

### Returns

`Promise`\<\{
`account`: `undefined`;
\} \| \{\}\>

the account object

### Defined in

[src/fetch.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/fetch.ts#L11)

---

## FungibleTokenContract()

```ts
function FungibleTokenContract(
  adminContract: FungibleTokenAdminConstructor
): typeof FungibleToken;
```

### Parameters

#### adminContract

[`FungibleTokenAdminConstructor`](globals.md#fungibletokenadminconstructor)

### Returns

_typeof_ `FungibleToken`

### Defined in

[src/FungibleTokenContract.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L59)

---

## getTokenSymbolAndAdmin()

```ts
function getTokenSymbolAndAdmin(params: {
  chain: blockchain;
  tokenAddress: PublicKey;
  txType: FungibleTokenTransactionType;
}): Promise<{
  adminAddress: PublicKey;
  adminContractAddress: PublicKey;
  isWhitelisted: boolean;
  symbol: string;
  verificationKeyHashes: string[];
}>;
```

### Parameters

#### params

##### params.chain

[`blockchain`](globals.md#blockchain)

##### params.tokenAddress

`PublicKey`

##### params.txType

[`FungibleTokenTransactionType`](globals.md#fungibletokentransactiontype)

### Returns

`Promise`\<\{
`adminAddress`: `PublicKey`;
`adminContractAddress`: `PublicKey`;
`isWhitelisted`: `boolean`;
`symbol`: `string`;
`verificationKeyHashes`: `string`[];
\}\>

#### adminAddress

```ts
adminAddress: PublicKey;
```

#### adminContractAddress

```ts
adminContractAddress: PublicKey;
```

#### isWhitelisted

```ts
isWhitelisted: boolean;
```

#### symbol

```ts
symbol: string;
```

#### verificationKeyHashes

```ts
verificationKeyHashes: string[];
```

### Defined in

[src/build.ts:504](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/build.ts#L504)

---

## getTokenTransactionSender()

```ts
function getTokenTransactionSender(params: {
  from: PublicKey;
  to: PublicKey;
  txType: FungibleTokenTransactionType;
}): PublicKey;
```

### Parameters

#### params

##### params.from

`PublicKey`

##### params.to

`PublicKey`

##### params.txType

[`FungibleTokenTransactionType`](globals.md#fungibletokentransactiontype)

### Returns

`PublicKey`

### Defined in

[src/build.ts:173](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/build.ts#L173)
