---
title: FungibleTokenOfferContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenOfferContract
order: 333
---

# Class: FungibleTokenOfferContract

## Properties overview

- events:  {
  buy: typeof OfferEvent;
  offer: typeof OfferEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof OfferEvent;
}; [↗](#events)
- buy:  typeof OfferEvent = OfferEvent; [↗](#buy)
- offer:  typeof OfferEvent = OfferEvent; [↗](#offer)
- updateWhitelist:  typeof Whitelist = Whitelist; [↗](#updatewhitelist)
- withdraw:  typeof OfferEvent = OfferEvent; [↗](#withdraw)
- Overrides: SmartContract.events [↗](#overrides)
- price:  State<UInt64>; [↗](#price)
- seller:  State<PublicKey>; [↗](#seller)
- token:  State<PublicKey>; [↗](#token)
- whitelist:  State<Whitelist>; [↗](#whitelist)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- buy() [↗](#buy)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- offer() [↗](#offer)
- updateWhitelist() [↗](#updatewhitelist)
- withdraw() [↗](#withdraw)

Defined in: [packages/token/src/offer.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L29)

## Extends

- `SmartContract`

## Constructors

### new FungibleTokenOfferContract()

```ts
new FungibleTokenOfferContract(address: PublicKey, tokenId?: Field): FungibleTokenOfferContract
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenOfferContract`](tokensrcclassfungibletokenoffercontract)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### events

```ts
events: {
  buy: typeof OfferEvent;
  offer: typeof OfferEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof OfferEvent;
};
```

Defined in: [packages/token/src/offer.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L47)

A list of event types that can be emitted using this.emitEvent()`.

#### buy

```ts
buy: typeof OfferEvent = OfferEvent;
```

#### offer

```ts
offer: typeof OfferEvent = OfferEvent;
```

#### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

#### withdraw

```ts
withdraw: typeof OfferEvent = OfferEvent;
```

#### Overrides

```ts
SmartContract.events
```

***

### price

```ts
price: State<UInt64>;
```

Defined in: [packages/token/src/offer.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L30)

***

### seller

```ts
seller: State<PublicKey>;
```

Defined in: [packages/token/src/offer.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L31)

***

### token

```ts
token: State<PublicKey>;
```

Defined in: [packages/token/src/offer.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L32)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

Defined in: [packages/token/src/offer.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L33)

## Methods

### buy()

```ts
buy(amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/offer.ts:118](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L118)

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### deploy()

```ts
deploy(args: FungibleTokenOfferContractDeployProps): Promise<void>
```

Defined in: [packages/token/src/offer.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L35)

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

[`FungibleTokenOfferContractDeployProps`](tokensrcinterfacefungibletokenoffercontractdeployprops)

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
   seller: PublicKey, 
   token: PublicKey, 
   amount: UInt64, 
price: UInt64): Promise<void>
```

Defined in: [packages/token/src/offer.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L54)

#### Parameters

##### seller

`PublicKey`

##### token

`PublicKey`

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### offer()

```ts
offer(amount: UInt64, price: UInt64): Promise<void>
```

Defined in: [packages/token/src/offer.ts:72](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L72)

#### Parameters

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### updateWhitelist()

```ts
updateWhitelist(whitelist: Whitelist): Promise<void>
```

Defined in: [packages/token/src/offer.ts:154](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L154)

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

Defined in: [packages/token/src/offer.ts:97](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/offer.ts#L97)

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>
