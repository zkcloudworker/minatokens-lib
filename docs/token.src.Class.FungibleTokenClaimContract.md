---
title: FungibleTokenClaimContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenClaimContract
order: 269
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
- owner:  State<PublicKey>; [↗](#owner)
- token:  State<PublicKey>; [↗](#token)
- whitelist:  State<Whitelist>; [↗](#whitelist)

## Methods overview

- claim() [↗](#claim)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- offer() [↗](#offer)
- updateWhitelist() [↗](#updatewhitelist)
- withdraw() [↗](#withdraw)

## Extends

- `SmartContract`

## Constructors

### new FungibleTokenClaimContract()

```ts
new FungibleTokenClaimContract(address: PublicKey, tokenId?: Field): FungibleTokenClaimContract
```

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenClaimContract`](tokensrcclassfungibletokenclaimcontract)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

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

`SmartContract.events`

#### Defined in

[packages/token/src/claim.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L45)

***

### owner

```ts
owner: State<PublicKey>;
```

#### Defined in

[packages/token/src/claim.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L29)

***

### token

```ts
token: State<PublicKey>;
```

#### Defined in

[packages/token/src/claim.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L30)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

#### Defined in

[packages/token/src/claim.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L31)

## Methods

### claim()

```ts
claim(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/claim.ts:107](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L107)

***

### deploy()

```ts
deploy(args: FungibleTokenClaimContractDeployProps): Promise<void>
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

##### args

[`FungibleTokenClaimContractDeployProps`](tokensrcinterfacefungibletokenclaimcontractdeployprops)

#### Returns

`Promise`\<`void`\>

#### Overrides

`SmartContract.deploy`

#### Defined in

[packages/token/src/claim.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L33)

***

### initialize()

```ts
initialize(
   owner: PublicKey, 
   token: PublicKey, 
amount: UInt64): Promise<void>
```

#### Parameters

##### owner

`PublicKey`

##### token

`PublicKey`

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/claim.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L52)

***

### offer()

```ts
offer(amount: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/claim.ts:68](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L68)

***

### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

#### Parameters

##### whitelist

`Whitelist`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/claim.ts:131](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L131)

***

### withdraw()

```ts
withdraw(amount: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/claim.ts:86](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/claim.ts#L86)
