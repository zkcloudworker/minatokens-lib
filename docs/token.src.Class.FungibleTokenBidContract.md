---
title: FungibleTokenBidContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.FungibleTokenBidContract
order: 268
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
- price:  State<UInt64>; [↗](#price)
- token:  State<PublicKey>; [↗](#token)
- whitelist:  State<Whitelist>; [↗](#whitelist)

## Methods overview

- bid() [↗](#bid)
- deploy() [↗](#deploy)
- initialize() [↗](#initialize)
- sell() [↗](#sell)
- updateWhitelist() [↗](#updatewhitelist)
- withdraw() [↗](#withdraw)

## Extends

- `SmartContract`

## Constructors

### new FungibleTokenBidContract()

```ts
new FungibleTokenBidContract(address: PublicKey, tokenId?: Field): FungibleTokenBidContract
```

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`FungibleTokenBidContract`](tokensrcclassfungibletokenbidcontract)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

## Properties

### buyer

```ts
buyer: State<PublicKey>;
```

#### Defined in

[packages/token/src/bid.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L31)

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

`SmartContract.events`

#### Defined in

[packages/token/src/bid.ts:47](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L47)

***

### price

```ts
price: State<UInt64>;
```

#### Defined in

[packages/token/src/bid.ts:30](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L30)

***

### token

```ts
token: State<PublicKey>;
```

#### Defined in

[packages/token/src/bid.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L32)

***

### whitelist

```ts
whitelist: State<Whitelist>;
```

#### Defined in

[packages/token/src/bid.ts:33](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L33)

## Methods

### bid()

```ts
bid(amount: UInt64, price: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/bid.ts:78](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L78)

***

### deploy()

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

#### Parameters

##### args

[`FungibleTokenBidContractDeployProps`](tokensrcinterfacefungibletokenbidcontractdeployprops)

#### Returns

`Promise`\<`void`\>

#### Overrides

`SmartContract.deploy`

#### Defined in

[packages/token/src/bid.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L35)

***

### initialize()

```ts
initialize(
   token: PublicKey, 
   amount: UInt64, 
price: UInt64): Promise<void>
```

#### Parameters

##### token

`PublicKey`

##### amount

`UInt64`

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/bid.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L54)

***

### sell()

```ts
sell(amount: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/bid.ts:128](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L128)

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

[packages/token/src/bid.ts:160](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L160)

***

### withdraw()

```ts
withdraw(amountInMina: UInt64): Promise<void>
```

#### Parameters

##### amountInMina

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/token/src/bid.ts:110](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/bid.ts#L110)
