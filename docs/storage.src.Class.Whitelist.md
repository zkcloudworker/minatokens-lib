---
title: Whitelist
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: storage.src.Class.Whitelist
order: 294
---

# Class: Whitelist

## Properties overview

- list:  OffChainList = OffChainList; [↗](#list)
- Overrides: Struct({
  list: OffChainList,
}).empty [↗](#overrides)

## Methods overview

- getWhitelistedAmount() [↗](#getwhitelistedamount)
- isNone() [↗](#isnone)
- isSome() [↗](#issome)
- load() [↗](#load)
- toString() [↗](#tostring)
- create() [↗](#create)
- empty() [↗](#empty)
- fromString() [↗](#fromstring)

Defined in: [packages/storage/src/whitelist/whitelist.ts:15](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L15)

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

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### list

[`OffChainList`](storagesrcclassoffchainlist) = `OffChainList`

#### Returns

[`Whitelist`](storagesrcclasswhitelist)

#### Inherited from

```ts
Struct({
  list: OffChainList,
}).constructor
```

## Properties

### list

```ts
list: OffChainList = OffChainList;
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:16](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L16)

#### Inherited from

```ts
Struct({
  list: OffChainList,
}).list
```

## Methods

### getWhitelistedAmount()

```ts
getWhitelistedAmount(address: PublicKey, name: string): Promise<UInt64Option>
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L42)

The function fetches a whitelisted amount associated with a given address using a map and returns it
as a UInt64Option.

#### Parameters

##### address

`PublicKey`

The `address` parameter is of type `PublicKey`,
used to retrieve a whitelisted amount for the given address.

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

***

### isNone()

```ts
isNone(): Bool
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:18](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L18)

#### Returns

`Bool`

***

### isSome()

```ts
isSome(): Bool
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L22)

#### Returns

`Bool`

***

### load()

```ts
load(): Promise<OffchainMapOption>
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:26](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L26)

#### Returns

`Promise`\<[`OffchainMapOption`](storagesrcclassoffchainmapoption)\>

***

### toString()

```ts
toString(): string
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:132](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L132)

Returns a string representation of an object.

#### Returns

`string`

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

Defined in: [packages/storage/src/whitelist/whitelist.ts:69](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L69)

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

***

### empty()

```ts
static empty(): Whitelist
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L58)

#### Returns

[`Whitelist`](storagesrcclasswhitelist)

#### Overrides

```ts
Struct({
  list: OffChainList,
}).empty
```

***

### fromString()

```ts
static fromString(str: string): Whitelist
```

Defined in: [packages/storage/src/whitelist/whitelist.ts:136](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/storage/src/whitelist/whitelist.ts#L136)

#### Parameters

##### str

`string`

#### Returns

[`Whitelist`](storagesrcclasswhitelist)
