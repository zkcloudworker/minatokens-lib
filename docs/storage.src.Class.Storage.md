---
title: Storage
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.Storage
order: 234
---

# Class: Storage

## Properties overview

- url:  Field[]; [↗](#url)

## Methods overview

- isEmpty() [↗](#isempty)
- toString() [↗](#tostring)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)
- equals() [↗](#equals)
- fromString() [↗](#fromstring)

Represents the off-chain storage information,
such as an IPFS hash.

## Extends

- \{
  `url`: `Field`[];
 \}

## Constructors

### new Storage()

```ts
new Storage(value: {
  url: [Field, Field];
 }): Storage
```

#### Parameters

##### value

###### url

[`Field`, `Field`]

#### Returns

[`Storage`](storagesrcclassstorage)

#### Overrides

`Struct({
  url: Provable.Array(Field, 2),
}).constructor`

#### Defined in

[packages/storage/src/storage/storage.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L11)

## Properties

### url

```ts
url: Field[];
```

#### Inherited from

`Struct({
  url: Provable.Array(Field, 2),
}).url`

#### Defined in

[packages/storage/src/storage/storage.ts:9](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L9)

## Methods

### isEmpty()

```ts
isEmpty(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/storage/storage.ts:62](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L62)

***

### toString()

```ts
toString(): string
```

Converts the Storage instance to a string.

#### Returns

`string`

The string representation of the storage URL.

#### Defined in

[packages/storage/src/storage/storage.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L51)

***

### assertEquals()

```ts
static assertEquals(a: Storage, b: Storage): void
```

Asserts that two Storage instances are equal.

#### Parameters

##### a

[`Storage`](storagesrcclassstorage)

The first Storage instance.

##### b

[`Storage`](storagesrcclassstorage)

The second Storage instance.

#### Returns

`void`

#### Defined in

[packages/storage/src/storage/storage.ts:20](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L20)

***

### empty()

```ts
static empty(): Storage
```

#### Returns

[`Storage`](storagesrcclassstorage)

#### Overrides

`Struct({
  url: Provable.Array(Field, 2),
}).empty`

#### Defined in

[packages/storage/src/storage/storage.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L58)

***

### equals()

```ts
static equals(a: Storage, b: Storage): Bool
```

Checks if two Storage instances are equal.

#### Parameters

##### a

[`Storage`](storagesrcclassstorage)

The first Storage instance.

##### b

[`Storage`](storagesrcclassstorage)

The second Storage instance.

#### Returns

`Bool`

A Bool indicating whether the two instances are equal.

#### Defined in

[packages/storage/src/storage/storage.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L31)

***

### fromString()

```ts
static fromString(url: string): Storage
```

Creates a Storage instance from a string.

#### Parameters

##### url

`string`

The string representing the storage URL.

#### Returns

[`Storage`](storagesrcclassstorage)

A new Storage instance.

#### Defined in

[packages/storage/src/storage/storage.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L40)
