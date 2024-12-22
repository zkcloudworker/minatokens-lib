---
title: ValidatorsListEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsListEvent
order: 295
---

# Class: ValidatorsListEvent

## Properties overview

- storage:  Storage = Storage; [↗](#storage)
- validators:  ValidatorsState = ValidatorsState; [↗](#validators)

Event emitted when the validators list is updated.

## Extends

- \{
  `storage`: `Storage`;
  `validators`: [`ValidatorsState`](upgradablesrcclassvalidatorsstate);
 \}

## Constructors

### new ValidatorsListEvent()

```ts
new ValidatorsListEvent(value: {
  storage: Storage;
  validators: ValidatorsState;
 }): ValidatorsListEvent
```

#### Parameters

##### value

###### storage

`Storage` = `Storage`

###### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate) = `ValidatorsState`

#### Returns

[`ValidatorsListEvent`](upgradablesrcclassvalidatorslistevent)

#### Inherited from

`Struct({
  validators: ValidatorsState,
  storage: Storage,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### storage

```ts
storage: Storage = Storage;
```

#### Inherited from

`Struct({
  validators: ValidatorsState,
  storage: Storage,
}).storage`

#### Defined in

[packages/upgradable/src/upgrade.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L59)

***

### validators

```ts
validators: ValidatorsState = ValidatorsState;
```

#### Inherited from

`Struct({
  validators: ValidatorsState,
  storage: Storage,
}).validators`

#### Defined in

[packages/upgradable/src/upgrade.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L58)
