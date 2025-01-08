---
title: Storage
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.Storage
order: 292
---

# Class: Storage

## Properties overview

- Overrides: Struct({
  url: Provable.Array(Field, 2),
}).constructor [↗](#overrides)
- url:  Field[]; [↗](#url)
- Overrides: Struct({
  url: Provable.Array(Field, 2),
}).empty [↗](#overrides)

## Methods overview

- isEmpty() [↗](#isempty)
- toString() [↗](#tostring)
- assertEquals() [↗](#assertequals)
- empty() [↗](#empty)
- equals() [↗](#equals)
- fromString() [↗](#fromstring)

Defined in: [packages/storage/src/storage/storage.ts:8](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L8)

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

Defined in: [packages/storage/src/storage/storage.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L11)

#### Parameters

##### value

###### url

\[`Field`, `Field`\]

#### Returns

[`Storage`](storagesrcclassstorage)

#### Overrides

```ts
Struct({
  url: Provable.Array(Field, 2),
}).constructor
```

## Properties

### url

```ts
url: Field[];
```

Defined in: [packages/storage/src/storage/storage.ts:9](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L9)

#### Inherited from

```ts
Struct({
  url: Provable.Array(Field, 2),
}).url
```

## Methods

### isEmpty()

```ts
isEmpty(): Bool
```

Defined in: [packages/storage/src/storage/storage.ts:62](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L62)

#### Returns

`Bool`

***

### toString()

```ts
toString(): string
```

Defined in: [packages/storage/src/storage/storage.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L51)

Converts the Storage instance to a string.

#### Returns

`string`

The string representation of the storage URL.

***

### assertEquals()

```ts
static assertEquals(a: Storage, b: Storage): void
```

Defined in: [packages/storage/src/storage/storage.ts:20](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L20)

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

***

### empty()

```ts
static empty(): Storage
```

Defined in: [packages/storage/src/storage/storage.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L58)

#### Returns

[`Storage`](storagesrcclassstorage)

#### Overrides

```ts
Struct({
  url: Provable.Array(Field, 2),
}).empty
```

***

### equals()

```ts
static equals(a: Storage, b: Storage): Bool
```

Defined in: [packages/storage/src/storage/storage.ts:31](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L31)

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

***

### fromString()

```ts
static fromString(url: string): Storage
```

Defined in: [packages/storage/src/storage/storage.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/storage/storage.ts#L40)

Creates a Storage instance from a string.

#### Parameters

##### url

`string`

The string representing the storage URL.

#### Returns

[`Storage`](storagesrcclassstorage)

A new Storage instance.
