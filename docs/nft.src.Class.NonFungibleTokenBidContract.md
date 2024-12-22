---
title: NonFungibleTokenBidContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NonFungibleTokenBidContract
order: 193
---

# Class: NonFungibleTokenBidContract

## Properties overview

- bids:  State<Field>; [↗](#bids)
- buyer:  State<PublicKey>; [↗](#buyer)
- consumedPoints:  State<UInt64>; [↗](#consumedpoints)
- events:  {
  bid: typeof BidEvent;
  deposit: typeof DepositEvent;
  sell: typeof SellEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof WithdrawEvent;
}; [↗](#events)
- bid:  typeof BidEvent = BidEvent; [↗](#bid)
- deposit:  typeof DepositEvent = DepositEvent; [↗](#deposit)
- sell:  typeof SellEvent = SellEvent; [↗](#sell)
- updateWhitelist:  typeof Whitelist = Whitelist; [↗](#updatewhitelist)
- withdraw:  typeof WithdrawEvent = WithdrawEvent; [↗](#withdraw)
- maxPoints:  State<UInt64>; [↗](#maxpoints)
- storage:  State<Storage>; [↗](#storage)
- whitelist:  State<Field>; [↗](#whitelist)

## Methods overview

- bid() [↗](#bid)
- deploy() [↗](#deploy)
- deposit() [↗](#deposit)
- initialize() [↗](#initialize)
- sell() [↗](#sell)
- sellWithApproval() [↗](#sellwithapproval)
- withdraw() [↗](#withdraw)

## Extends

- `SmartContract`

## Constructors

### new NonFungibleTokenBidContract()

```ts
new NonFungibleTokenBidContract(address: PublicKey, tokenId?: Field): NonFungibleTokenBidContract
```

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`NonFungibleTokenBidContract`](nftsrcclassnonfungibletokenbidcontract)

#### Inherited from

`SmartContract.constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:148

## Properties

### bids

```ts
bids: State<Field>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:84](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L84)

***

### buyer

```ts
buyer: State<PublicKey>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:82](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L82)

***

### consumedPoints

```ts
consumedPoints: State<UInt64>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:90](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L90)

***

### events

```ts
events: {
  bid: typeof BidEvent;
  deposit: typeof DepositEvent;
  sell: typeof SellEvent;
  updateWhitelist: typeof Whitelist;
  withdraw: typeof WithdrawEvent;
};
```

A list of event types that can be emitted using this.emitEvent()`.

#### bid

```ts
bid: typeof BidEvent = BidEvent;
```

#### deposit

```ts
deposit: typeof DepositEvent = DepositEvent;
```

#### sell

```ts
sell: typeof SellEvent = SellEvent;
```

#### updateWhitelist

```ts
updateWhitelist: typeof Whitelist = Whitelist;
```

#### withdraw

```ts
withdraw: typeof WithdrawEvent = WithdrawEvent;
```

#### Overrides

`SmartContract.events`

#### Defined in

[packages/nft/src/marketplace/bid.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L106)

***

### maxPoints

```ts
maxPoints: State<UInt64>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:86](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L86)

***

### storage

```ts
storage: State<Storage>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:85](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L85)

***

### whitelist

```ts
whitelist: State<Field>;
```

#### Defined in

[packages/nft/src/marketplace/bid.ts:83](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L83)

## Methods

### \_sell()

```ts
_sell(nftAddress: NFTAddress, price: UInt64): Promise<void>
```

#### Parameters

##### nftAddress

[`NFTAddress`](nftsrcclassnftaddress)

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:195](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L195)

***

### bid()

```ts
bid(
   bids: Field, 
   whitelist: Field, 
storage: Storage): Promise<void>
```

#### Parameters

##### bids

`Field`

##### whitelist

`Field`

##### storage

`Storage`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:263](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L263)

***

### deploy()

```ts
deploy(args: NonFungibleTokenBidContractDeployProps): Promise<void>
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

[`NonFungibleTokenBidContractDeployProps`](nftsrcinterfacenonfungibletokenbidcontractdeployprops)

#### Returns

`Promise`\<`void`\>

#### Overrides

`SmartContract.deploy`

#### Defined in

[packages/nft/src/marketplace/bid.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L92)

***

### deposit()

```ts
deposit(amount: UInt64, maxPoints: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

##### maxPoints

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L136)

***

### initialize()

```ts
initialize(amount: UInt64, maxPoints: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

##### maxPoints

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:114](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L114)

***

### sell()

```ts
sell(nftAddress: NFTAddress, price: UInt64): Promise<void>
```

#### Parameters

##### nftAddress

[`NFTAddress`](nftsrcclassnftaddress)

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:181](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L181)

***

### sellWithApproval()

```ts
sellWithApproval(nftAddress: NFTAddress, price: UInt64): Promise<void>
```

#### Parameters

##### nftAddress

[`NFTAddress`](nftsrcclassnftaddress)

##### price

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:188](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L188)

***

### withdraw()

```ts
withdraw(amount: UInt64, maxPoints: UInt64): Promise<void>
```

#### Parameters

##### amount

`UInt64`

##### maxPoints

`UInt64`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/nft/src/marketplace/bid.ts:158](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/bid.ts#L158)
