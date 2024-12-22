---
title: PauseEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.PauseEvent
order: 197
---

# Class: PauseEvent

## Properties overview

- isPaused:  Bool = Bool; [↗](#ispaused)

The **PauseEvent** class represents an event emitted whenever the contract is paused or resumed.
This event contains the `isPaused` boolean field, indicating the current state of the contract.

## Extends

- \{
  `isPaused`: `Bool`;
 \}

## Constructors

### new PauseEvent()

```ts
new PauseEvent(value: {
  isPaused: Bool;
 }): PauseEvent
```

#### Parameters

##### value

###### isPaused

`Bool` = `Bool`

Indicates whether the contract is currently paused.

#### Returns

[`PauseEvent`](nftsrcclasspauseevent)

#### Inherited from

`Struct({
  /**
   * Indicates whether the contract is currently paused.
   */
  isPaused: Bool,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### isPaused

```ts
isPaused: Bool = Bool;
```

Indicates whether the contract is currently paused.

#### Inherited from

`Struct({
  /**
   * Indicates whether the contract is currently paused.
   */
  isPaused: Bool,
}).isPaused`

#### Defined in

[packages/nft/src/contracts/pausable.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/pausable.ts#L40)
