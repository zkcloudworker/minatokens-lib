---
title: FungibleTokenDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Interface.FungibleTokenDeployProps
order: 278
---

# Interface: FungibleTokenDeployProps

## Properties overview

- allowUpdates:  boolean; [↗](#allowupdates)
- src:  string; [↗](#src)
- symbol:  string; [↗](#symbol)

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### allowUpdates

```ts
allowUpdates: boolean;
```

Setting this to `true` will allow changing the verification key later with a signature from the deployer. This will allow updating the token contract at a later stage, for instance to react to an update of the o1js library.
Setting it to `false` will make changes to the contract impossible, unless there is a backward incompatible change to the protocol. (see https://docs.minaprotocol.com/zkapps/writing-a-zkapp/feature-overview/permissions#example-impossible-to-upgrade and https://minafoundation.github.io/mina-fungible-token/deploy.html)

#### Defined in

[packages/token/src/FungibleTokenContract.ts:45](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L45)

***

### src

```ts
src: string;
```

A source code reference, which is placed within the `zkappUri` of the contract account.
Typically a link to a file on github.

#### Defined in

[packages/token/src/FungibleTokenContract.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L42)

***

### symbol

```ts
symbol: string;
```

The token symbol.

#### Defined in

[packages/token/src/FungibleTokenContract.ts:39](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L39)