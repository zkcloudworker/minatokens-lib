---
title: ValidatorsListEvent
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Class.ValidatorsListEvent
order: 353
---

# Class: ValidatorsListEvent

## Properties overview

- storage:  Storage = Storage; [↗](#storage)
- validators:  ValidatorsState = ValidatorsState; [↗](#validators)

Defined in: [packages/upgradable/src/upgrade.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L57)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### storage

`Storage` = `Storage`

###### validators

[`ValidatorsState`](upgradablesrcclassvalidatorsstate) = `ValidatorsState`

#### Returns

[`ValidatorsListEvent`](upgradablesrcclassvalidatorslistevent)

#### Inherited from

```ts
Struct({
  validators: ValidatorsState,
  storage: Storage,
}).constructor
```

## Properties

### storage

```ts
storage: Storage = Storage;
```

Defined in: [packages/upgradable/src/upgrade.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L59)

#### Inherited from

```ts
Struct({
  validators: ValidatorsState,
  storage: Storage,
}).storage
```

***

### validators

```ts
validators: ValidatorsState = ValidatorsState;
```

Defined in: [packages/upgradable/src/upgrade.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/upgrade.ts#L58)

#### Inherited from

```ts
Struct({
  validators: ValidatorsState,
  storage: Storage,
}).validators
```
