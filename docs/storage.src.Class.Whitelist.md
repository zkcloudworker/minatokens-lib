---
title: Whitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.Whitelist
order: 236
---

# Class: Whitelist

## Properties overview

- list:  OffChainList = OffChainList; [↗](#list)

## Methods overview

- getWhitelistedAmount() [↗](#getwhitelistedamount)
- isNone() [↗](#isnone)
- isSome() [↗](#issome)
- load() [↗](#load)
- toString() [↗](#tostring)
- create() [↗](#create)
- empty() [↗](#empty)
- fromString() [↗](#fromstring)

## Extends

- \{
  `list`: [`OffChainList`](storagesrcclassoffchainlist);
 \}

## Constructors

### new Whitelist()

```ts
new Whitelist(value: {
  list: OffChainList;
 }): Whitelist
```

#### Parameters

##### value

###### list

[`OffChainList`](storagesrcclassoffchainlist) = `OffChainList`

#### Returns

[`Whitelist`](storagesrcclasswhitelist)

#### Inherited from

`Struct({
  list: OffChainList,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### list

```ts
list: OffChainList = OffChainList;
```

#### Inherited from

`Struct({
  list: OffChainList,
}).list`

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:16](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L16)

## Methods

### getWhitelistedAmount()

```ts
getWhitelistedAmount(address: PublicKey, name: string): Promise<UInt64Option>
```

The function fetches a whitelisted amount associated with a given address using a map and returns it
as a UInt64Option.

#### Parameters

##### address

`PublicKey`

The `address` parameter is of type `PublicKey`, which represents a
public key used in cryptography for various purposes such as encryption, digital signatures, and
authentication. In the context of the `fetchWhitelistedAmount` function, the `address` parameter is
used to retrieve a whitelisted amount

##### name

`string` = `"whitelist"`

#### Returns

`Promise`\<[`UInt64Option`](storagesrcclassuint64option)\>

The `fetchWhitelistedAmount` function returns a `Promise` that resolves to a `UInt64Option`
object. This object contains a `value` property representing the amount retrieved from a map based
on the provided address. The `isSome` property indicates whether the value is present or not.
The value is not present if the whitelist is NOT empty and the address is NOT whitelisted.
The value is present if the whitelist is NOT empty or the address IS whitelisted.
The value is present and equals to UInt64.MAXINT() if the whitelist IS empty.

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:44](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L44)

***

### isNone()

```ts
isNone(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L18)

***

### isSome()

```ts
isSome(): Bool
```

#### Returns

`Bool`

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L22)

***

### load()

```ts
load(): Promise<OffchainMapOption>
```

#### Returns

`Promise`\<[`OffchainMapOption`](storagesrcclassoffchainmapoption)\>

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L26)

***

### toString()

```ts
toString(): string
```

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:134](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L134)

***

### create()

```ts
static create(params: {
  attempts: number;
  auth: string;
  filename: string;
  json: OffchainMapSerialized;
  keyvalues: object;
  list: WhitelistedAddress[];
  name: string;
  pin: boolean;
  timeout: number;
 }): Promise<{
  json: OffchainMapSerialized;
  whitelist: Whitelist;
}>
```

Creates a new whitelist and pins it to IPFS.

#### Parameters

##### params

The parameters for creating the whitelist.

###### attempts

`number`

###### auth

`string`

###### filename

`string`

###### json

[`OffchainMapSerialized`](storagesrcinterfaceoffchainmapserialized)

###### keyvalues

`object`

###### list

[`WhitelistedAddress`](storagesrcclasswhitelistedaddress)[]

###### name

`string`

###### pin

`boolean`

###### timeout

`number`

#### Returns

`Promise`\<\{
  `json`: [`OffchainMapSerialized`](storagesrcinterfaceoffchainmapserialized);
  `whitelist`: [`Whitelist`](storagesrcclasswhitelist);
 \}\>

A new `Whitelist` instance.

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:71](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L71)

***

### empty()

```ts
static empty(): Whitelist
```

#### Returns

[`Whitelist`](storagesrcclasswhitelist)

#### Overrides

`Struct({
  list: OffChainList,
}).empty`

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L60)

***

### fromString()

```ts
static fromString(str: string): Whitelist
```

#### Parameters

##### str

`string`

#### Returns

[`Whitelist`](storagesrcclasswhitelist)

#### Defined in

[packages/storage/src/whitelist/whitelist.ts:138](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L138)
