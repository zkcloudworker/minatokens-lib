---
title: AdvancedAdminData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.AdvancedAdminData
order: 320
---

# Class: AdvancedAdminData

## Properties overview

- anyoneCanMint:  Bool = Bool; [↗](#anyonecanmint)
- requireAdminSignatureForMint:  Bool = Bool; [↗](#requireadminsignatureformint)
- totalSupply:  UInt64 = UInt64; [↗](#totalsupply)

## Methods overview

- pack() [↗](#pack)
- new() [↗](#new)
- unpack() [↗](#unpack)

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L22)

## Extends

- \{
  `anyoneCanMint`: `Bool`;
  `requireAdminSignatureForMint`: `Bool`;
  `totalSupply`: `UInt64`;
 \}

## Constructors

### new AdvancedAdminData()

```ts
new AdvancedAdminData(value: {
  anyoneCanMint: Bool;
  requireAdminSignatureForMint: Bool;
  totalSupply: UInt64;
 }): AdvancedAdminData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### anyoneCanMint

`Bool` = `Bool`

###### requireAdminSignatureForMint

`Bool` = `Bool`

###### totalSupply

`UInt64` = `UInt64`

#### Returns

[`AdvancedAdminData`](tokensrcclassadvancedadmindata)

#### Inherited from

```ts
Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).constructor
```

## Properties

### anyoneCanMint

```ts
anyoneCanMint: Bool = Bool;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L25)

#### Inherited from

```ts
Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).anyoneCanMint
```

***

### requireAdminSignatureForMint

```ts
requireAdminSignatureForMint: Bool = Bool;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L24)

#### Inherited from

```ts
Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).requireAdminSignatureForMint
```

***

### totalSupply

```ts
totalSupply: UInt64 = UInt64;
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L23)

#### Inherited from

```ts
Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).totalSupply
```

## Methods

### pack()

```ts
pack(): Field
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L42)

#### Returns

`Field`

***

### new()

```ts
static new(params: {
  anyoneCanMint: boolean;
  requireAdminSignatureForMint: boolean;
  totalSupply: number;
 }): AdvancedAdminData
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L27)

#### Parameters

##### params

###### anyoneCanMint

`boolean`

###### requireAdminSignatureForMint

`boolean`

###### totalSupply

`number`

#### Returns

[`AdvancedAdminData`](tokensrcclassadvancedadmindata)

***

### unpack()

```ts
static unpack(packed: Field): AdvancedAdminData
```

Defined in: [packages/token/src/FungibleTokenAdvancedAdmin.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L51)

#### Parameters

##### packed

`Field`

#### Returns

[`AdvancedAdminData`](tokensrcclassadvancedadmindata)
