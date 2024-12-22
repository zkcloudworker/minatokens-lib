---
title: AdvancedAdminData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Class.AdvancedAdminData
order: 262
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

`Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).constructor`

#### Defined in

node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

## Properties

### anyoneCanMint

```ts
anyoneCanMint: Bool = Bool;
```

#### Inherited from

`Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).anyoneCanMint`

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:25](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L25)

***

### requireAdminSignatureForMint

```ts
requireAdminSignatureForMint: Bool = Bool;
```

#### Inherited from

`Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).requireAdminSignatureForMint`

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L24)

***

### totalSupply

```ts
totalSupply: UInt64 = UInt64;
```

#### Inherited from

`Struct({
  totalSupply: UInt64,
  requireAdminSignatureForMint: Bool,
  anyoneCanMint: Bool,
}).totalSupply`

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L23)

## Methods

### pack()

```ts
pack(): Field
```

#### Returns

`Field`

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:42](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L42)

***

### new()

```ts
static new(params: {
  anyoneCanMint: boolean;
  requireAdminSignatureForMint: boolean;
  totalSupply: number;
 }): AdvancedAdminData
```

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

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:27](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L27)

***

### unpack()

```ts
static unpack(packed: Field): AdvancedAdminData
```

#### Parameters

##### packed

`Field`

#### Returns

[`AdvancedAdminData`](tokensrcclassadvancedadmindata)

#### Defined in

[packages/token/src/FungibleTokenAdvancedAdmin.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenAdvancedAdmin.ts#L51)
