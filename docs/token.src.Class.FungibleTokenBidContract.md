---
title: FungibleTokenBidContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenBidContract
order: 331
---

# Class: FungibleTokenBidContract

## Properties overview

- buyer:  State<PublicKey>; [↗](#buyer)
- events:  {
  bid: typeof BidEvent;
  sell: typeof BidEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof BidEvent;
}; [↗](#events)
- bid:  typeof BidEvent = BidEvent; [↗](#bid)
- sell:  typeof BidEvent = BidEvent; [↗](#sell)
- updateWhitelist:  typeof Whitelist = Whitelist; [↗](#updatewhitelist)
- withdraw:  typeof BidEvent = BidEvent; [↗](#withdraw)
- Overrides: SmartContract.events [↗](#overrides)
- price:  State<UInt64>; [↗](#price)
- token:  State<PublicKey>; [↗](#token)
- whitelist:  State<Whitelist>; [↗](#whitelist)
- Overrides: SmartContract.deploy [↗](#overrides)

## Methods overview

- bid() [↗](#bid)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- sell() [↗](#sell)
- updateWhitelist() [↗](#updatewhitelist)
- withdraw() [↗](#withdraw)

Defined in: [packages/token/src/bid.ts:29](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L29)

## Extends

- `SmartContract`

## Constructors

### new FungibleTokenBidContract()

```ts
new FungibleTokenBidContract(address: PublicKey, tokenId?: Field): FungibleTokenBidContract
```

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenBidContract`](tokensrcclassfungibletokenbidcontract)

#### Inherited from

```ts
SmartContract.constructor
```

## Properties

### buyer

```ts
buyer: State<PublicKey>;
```

Defined in: [packages/token/src/bid.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L31)

***

### events

```ts
events: {
  bid: typeof BidEvent;
  sell: typeof BidEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof BidEvent;
};
```

Defined in: [packages/token/src/bid.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L47)

A list of event types that can be emitted using this.emitEvent()`.

#### bid

```ts
bid: typeof BidEvent = BidEvent;
```

#### sell

```ts
sell: typeof BidEvent = BidEvent;
```

#### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

#### withdraw

```ts
withdraw: typeof BidEvent = BidEvent;
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

Defined in: [packages/token/src/bid.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L30)

***

### token

```ts
token: State<PublicKey>;
```

Defined in: [packages/token/src/bid.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L32)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

Defined in: [packages/token/src/bid.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L33)

## Methods

### bid()

```ts
bid(amount: UInt64, price: UInt64): Promise<void>
```

Defined in: [packages/token/src/bid.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L78)

#### Parameters

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### deploy()

```ts
deploy(args: FungibleTokenBidContractDeployProps): Promise<void>
```

Defined in: [packages/token/src/bid.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L35)

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

[`FungibleTokenBidContractDeployProps`](tokensrcinterfacefungibletokenbidcontractdeployprops)

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
   token: PublicKey, 
   amount: UInt64, 
price: UInt64): Promise<void>
```

Defined in: [packages/token/src/bid.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L54)

#### Parameters

##### token

`PublicKey`

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

***

### sell()

```ts
sell(amount: UInt64): Promise<void>
```

Defined in: [packages/token/src/bid.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L128)

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

Defined in: [packages/token/src/bid.ts:160](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L160)

#### Parameters

##### whitelist

`Whitelist`

#### Returns

`Promise`\<`void`\>

***

### withdraw()

```ts
withdraw(amountInMina: UInt64): Promise<void>
```

Defined in: [packages/token/src/bid.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L110)

#### Parameters

##### amountInMina

`UInt64`

#### Returns

`Promise`\<`void`\>
