---
title: PauseEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.PauseEvent
order: 218
---

# Class: PauseEvent

## Properties overview

- isPaused:  Bool = Bool; [↗](#ispaused)

Defined in: [packages/nft/src/interfaces/pausable.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/pausable.ts#L36)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isPaused

`Bool` = `Bool`

Indicates whether the contract is currently paused.

#### Returns

[`PauseEvent`](nftsrcclasspauseevent)

#### Inherited from

```ts
Struct({
  /
    Indicates whether the contract is currently paused.
   /
  isPaused: Bool,
}).constructor
```

## Properties

### isPaused

```ts
isPaused: Bool = Bool;
```

Defined in: [packages/nft/src/interfaces/pausable.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/pausable.ts#L40)

Indicates whether the contract is currently paused.

#### Inherited from

```ts
Struct({
  /
    Indicates whether the contract is currently paused.
   /
  isPaused: Bool,
}).isPaused
```
