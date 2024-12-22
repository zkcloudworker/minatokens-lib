---
title: OffChainListBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.OffChainListBase
order: 231
---

# Class: OffChainListBase

## Properties overview

- root:  Field = Field; [↗](#root)

## Methods overview

- getValue() [↗](#getvalue)
- isNone() [↗](#isnone)
- isSome() [↗](#issome)
- load() [↗](#load)
- toString() [↗](#tostring)
- create() [↗](#create)
- empty() [↗](#empty)
- fromString() [↗](#fromstring)

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

#### Parameters

##### value

###### root

`Field` = `Field`

The root hash of the Merkle tree representing the whitelist.

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)

#### Inherited from

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### root

```ts
root: Field = Field;
```

The root hash of the Merkle tree representing the whitelist.

#### Inherited from

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
}).root`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L44)

## Methods

### getValue()

```ts
getValue(
   key: Field, 
   storage: Storage, 
name: string): Promise<FieldOption>
```

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

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:92](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L92)

***

### isNone()

```ts
isNone(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:46](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L46)

***

### isSome()

```ts
isSome(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:50](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L50)

***

### load()

```ts
load(storage: Storage, name: string): Promise<OffchainMapOption>
```

#### Parameters

##### storage

[`Storage`](storagesrcclassstorage)

##### name

`string` = `"offchain-map"`

#### Returns

`Promise`\<[`OffchainMapOption`](storagesrcclassoffchainmapoption)\>

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L54)

***

### toString()

```ts
toString(): string
```

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:165](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L165)

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

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:119](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L119)

***

### empty()

```ts
static empty(): OffChainListBase
```

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)

#### Overrides

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
}).empty`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:106](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L106)

***

### fromString()

```ts
static fromString(str: string): OffChainListBase
```

#### Parameters

##### str

`string`

#### Returns

[`OffChainListBase`](storagesrcclassoffchainlistbase)

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:169](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L169)
