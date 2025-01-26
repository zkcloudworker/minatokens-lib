---
title: FungibleTokenClaimContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenClaimContract
order: 332
---

# Class: FungibleTokenClaimContract

## Properties overview

- events:  {
  claim: typeof ClaimEvent;
  offer: typeof ClaimEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof ClaimEvent;
}; [↗](#events)
- claim:  typeof ClaimEvent = ClaimEvent; [↗](#claim)
- offer:  typeof ClaimEvent = ClaimEvent; [↗](#offer)
- updateWhitelist:  typeof Whitelist = Whitelist; [↗](#updatewhitelist)
- withdraw:  typeof ClaimEvent = ClaimEvent; [↗](#withdraw)
- Overrides: SmartContract.events [↗](#overrides)
- maxAmount:  State<UInt64>; [↗](#maxamount)
- owner:  State<PublicKey>; [↗](#owner)
- token:  State<PublicKey>; [↗](#token)
- whitelist:  State<Whitelist>; [↗](#whitelist)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- claim() [↗](#claim)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- offer() [↗](#offer)
- updateWhitelist() [↗](#updatewhitelist)
- withdraw() [↗](#withdraw)

Defined in: [packages/token/src/claim.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L31)

## Extends

- `SmartContract`

## Constructors

### new FungibleTokenClaimContract()

```ts
new FungibleTokenClaimContract(address: PublicKey, tokenId?: Field): FungibleTokenClaimContract
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenClaimContract`](tokensrcclassfungibletokenclaimcontract)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### events

```ts
events: {
  claim: typeof ClaimEvent;
  offer: typeof ClaimEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof ClaimEvent;
};
```

Defined in: [packages/token/src/claim.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L50)

A list of event types that can be emitted using this.emitEvent()`.

#### claim

```ts
claim: typeof ClaimEvent = ClaimEvent;
```

#### offer

```ts
offer: typeof ClaimEvent = ClaimEvent;
```

#### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

#### withdraw

```ts
withdraw: typeof ClaimEvent = ClaimEvent;
```

#### Overrides

```ts
SmartContract.events
```

***

### maxAmount

```ts
maxAmount: State<UInt64>;
```

Defined in: [packages/token/src/claim.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L35)

***

### owner

```ts
owner: State<PublicKey>;
```

Defined in: [packages/token/src/claim.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L32)

***

### token

```ts
token: State<PublicKey>;
```

Defined in: [packages/token/src/claim.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L33)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

Defined in: [packages/token/src/claim.ts:34](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L34)

## Methods

### claim()

```ts
claim(amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/claim.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L110)

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### deploy()

```ts
deploy(args: FungibleTokenClaimContractDeployProps): Promise<void>
```

Defined in: [packages/token/src/claim.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L37)

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

#### Parameters

##### args

[`FungibleTokenClaimContractDeployProps`](tokensrcinterfacefungibletokenclaimcontractdeployprops)

#### Returns

`Promise`\<`void`\>

#### Overrides

```ts
SmartContract.deploy
```

***

### initialize()

```ts
initialize(
   owner: PublicKey, 
   token: PublicKey, 
amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/claim.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L57)

#### Parameters

##### owner

`PublicKey`

##### token

`PublicKey`

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### offer()

```ts
offer(amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/claim.ts:73](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L73)

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

Defined in: [packages/token/src/claim.ts:141](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L141)

#### Parameters

##### whitelist

`Whitelist`

#### Returns

`Promise`\<`void`\>

***

### withdraw()

```ts
withdraw(amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/claim.ts:89](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L89)

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>
