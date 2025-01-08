---
title: OffChainListBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.OffChainListBase
order: 289
---

# Class: OffChainListBase

## Properties overview

- root:  Field = Field; [↗](#root)
- Overrides: Struct({
  / The root hash of the Merkle tree representing the whitelist. /
  root: Field,
}).empty [↗](#overrides)

## Methods overview

- getValue() [↗](#getvalue)
- isNone() [↗](#isnone)
- isSome() [↗](#issome)
- load() [↗](#load)
- toString() [↗](#tostring)
- create() [↗](#create)
- empty() [↗](#empty)
- fromString() [↗](#fromstring)

Defined in: [packages/storage/src/whitelist/offchain-map.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L42)

Base class for offchain lists and maps that does not have storage

## Extends

- \{
  `root`: `Field`;
 \}

## Constructors

### new OffChainListBase()

```ts
new OffChainListBase(value: {
  root: Field;
 }): OffChainListBase
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### root

`Field` = `Field`

The root hash of the Merkle tree representing the whitelist.

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)

#### Inherited from

```ts
Struct({
  / The root hash of the Merkle tree representing the whitelist. /
  root: Field,
}).constructor
```

## Properties

### root

```ts
root: Field = Field;
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L44)

The root hash of the Merkle tree representing the whitelist.

#### Inherited from

```ts
Struct({
  / The root hash of the Merkle tree representing the whitelist. /
  root: Field,
}).root
```

## Methods

### getValue()

```ts
getValue(
   key: Field, 
   storage: Storage, 
name: string): Promise<FieldOption>
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L92)

The function fetches a whitelisted amount associated with a given key using a map and returns it
as a FieldOption.

#### Parameters

##### key

`Field`

The `key` parameter is of type `Field`,
which represents a field element in the context of a cryptographic system.

##### storage

[`Storage`](storagesrcclassstorage)

##### name

`string` = `"offchain-map"`

#### Returns

`Promise`\<[`FieldOption`](storagesrcclassfieldoption)\>

The `getValue` function returns a `Promise` that resolves to a `FieldOption`
object. This object contains a `value` property representing the amount retrieved from a map based
on the provided key. The `isSome` property indicates whether the value is present or not.
The value is not present if the list is NOT empty and the key is NOT in the map.
The value is present if the list IS empty or the key IS in the map.
The value is present and equals to Field(0) if the list IS empty.

***

### isNone()

```ts
isNone(): Bool
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L46)

#### Returns

`Bool`

***

### isSome()

```ts
isSome(): Bool
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L50)

#### Returns

`Bool`

***

### load()

```ts
load(storage: Storage, name: string): Promise<OffchainMapOption>
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L54)

#### Parameters

##### storage

[`Storage`](storagesrcclassstorage)

##### name

`string` = `"offchain-map"`

#### Returns

`Promise`\<[`OffchainMapOption`](storagesrcclassoffchainmapoption)\>

***

### toString()

```ts
toString(): string
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L165)

Returns a string representation of an object.

#### Returns

`string`

***

### create()

```ts
static create(params: {
  data: object;
  list:   | OffChainMapEntry[]
     | {
     key: string;
     value: number;
    }[];
  name: string;
 }): Promise<{
  json: OffchainMapSerialized;
  listBase: OffChainListBase;
}>
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:119](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L119)

Creates a new OffchainListBase

#### Parameters

##### params

The parameters for creating the list.

###### data

`object`

The JSON data that should be added to the IPFS storage that represent the initial data

###### list

  \| [`OffChainMapEntry`](storagesrcinterfaceoffchainmapentry)[]
  \| \{
  `key`: `string`;
  `value`: `number`;
 \}[]

The list of entries to be added to the map.

###### name

`string`

#### Returns

`Promise`\<\{
  `json`: [`OffchainMapSerialized`](storagesrcinterfaceoffchainmapserialized);
  `listBase`: [`OffChainListBase`](storagesrcclassoffchainlistbase);
 \}\>

A new `OffChainList` instance.

***

### empty()

```ts
static empty(): OffChainListBase
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L106)

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)

#### Overrides

```ts
Struct({
  / The root hash of the Merkle tree representing the whitelist. /
  root: Field,
}).empty
```

***

### fromString()

```ts
static fromString(str: string): OffChainListBase
```

Defined in: [packages/storage/src/whitelist/offchain-map.ts:169](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L169)

#### Parameters

##### str

`string`

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)
