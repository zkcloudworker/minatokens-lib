---
title: OffChainList
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.OffChainList
order: 230
---

# Class: OffChainList

## Properties overview

- root:  Field = Field; [↗](#root)
- storage:  Storage = Storage; [↗](#storage)

## Methods overview

- getValue() [↗](#getvalue)
- isNone() [↗](#isnone)
- isSome() [↗](#issome)
- load() [↗](#load)
- toString() [↗](#tostring)
- create() [↗](#create)
- empty() [↗](#empty)
- fromString() [↗](#fromstring)

## Extends

- \{
  `root`: `Field`;
  `storage`: [`Storage`](storagesrcclassstorage);
 \}

## Constructors

### new OffChainList()

```ts
new OffChainList(value: {
  root: Field;
  storage: Storage;
 }): OffChainList
```

#### Parameters

##### value

###### root

`Field` = `Field`

The root hash of the Merkle tree representing the whitelist.

###### storage

[`Storage`](storagesrcclassstorage) = `Storage`

Off-chain storage information, typically an IPFS hash pointing to the whitelist data.

#### Returns

[`OffChainList`](storagesrcclassoffchainlist)

#### Inherited from

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage,
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
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage,
}).root`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:179](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L179)

***

### storage

```ts
storage: Storage = Storage;
```

Off-chain storage information, typically an IPFS hash pointing to the whitelist data.

#### Inherited from

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage,
}).storage`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:181](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L181)

## Methods

### getValue()

```ts
getValue(key: Field, name: undefined | string): Promise<FieldOption>
```

The function fetches a whitelisted amount associated with a given key using a map and returns it
as a FieldOption.

#### Parameters

##### key

`Field`

The `key` parameter is of type `Field`,
which represents a field element in the context of a cryptographic system.

##### name

`undefined` | `string`

#### Returns

`Promise`\<[`FieldOption`](storagesrcclassfieldoption)\>

The `getValue` function returns a `Promise` that resolves to a `FieldOption`
object. This object contains a `value` property representing the amount retrieved from a map based
on the provided key. The `isSome` property indicates whether the value is present or not.
The value is not present if the list is NOT empty and the key is NOT in the map.
The value is present if the list IS empty or the key IS in the map.
The value is present and equals to Field(0) if the list IS empty.

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:228](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L228)

***

### isNone()

```ts
isNone(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:183](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L183)

***

### isSome()

```ts
isSome(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:187](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L187)

***

### load()

```ts
load(name: undefined | string): Promise<OffchainMapOption>
```

#### Parameters

##### name

`undefined` | `string`

#### Returns

`Promise`\<[`OffchainMapOption`](storagesrcclassoffchainmapoption)\>

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:191](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L191)

***

### toString()

```ts
toString(): string
```

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:326](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L326)

***

### create()

```ts
static create(params: {
  attempts: number;
  auth: string;
  data: object;
  filename: string;
  json: OffchainMapSerialized;
  keyvalues: object;
  list:   | OffChainMapEntry[]
     | {
     key: string;
     value: number;
    }[];
  name: string;
  pin: boolean;
  timeout: number;
 }): Promise<{
  json: OffchainMapSerialized;
  list: OffChainList;
}>
```

Creates a new OffchainList
and pins it to IPFS.

#### Parameters

##### params

The parameters for creating the list.

###### attempts

`number`

###### auth

`string`

###### data

`object`

The JSON data that should be added to the IPFS storage that represent the initial data

###### filename

`string`

###### json

[`OffchainMapSerialized`](storagesrcinterfaceoffchainmapserialized)

###### keyvalues

`object`

###### list

  \| [`OffChainMapEntry`](storagesrcinterfaceoffchainmapentry)[]
  \| \{
  `key`: `string`;
  `value`: `number`;
 \}[]

The list of entries to be added to the map.

###### name

`string`

###### pin

`boolean`

###### timeout

`number`

#### Returns

`Promise`\<\{
  `json`: [`OffchainMapSerialized`](storagesrcinterfaceoffchainmapserialized);
  `list`: [`OffChainList`](storagesrcclassoffchainlist);
 \}\>

A new `OffChainList` instance.

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:256](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L256)

***

### empty()

```ts
static empty(): OffChainList
```

#### Returns

[`OffChainList`](storagesrcclassoffchainlist)

#### Overrides

`Struct({
  /** The root hash of the Merkle tree representing the whitelist. */
  root: Field,
  /** Off-chain storage information, typically an IPFS hash pointing to the whitelist data. */
  storage: Storage,
}).empty`

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:241](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L241)

***

### fromString()

```ts
static fromString(str: string): OffChainList
```

#### Parameters

##### str

`string`

#### Returns

[`OffChainList`](storagesrcclassoffchainlist)

#### Defined in

[packages/storage/src/whitelist/offchain-map.ts:334](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/offchain-map.ts#L334)