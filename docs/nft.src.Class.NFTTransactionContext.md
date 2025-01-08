---
title: NFTTransactionContext
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTTransactionContext
order: 215
---

# Class: NFTTransactionContext

## Properties overview

- custom:  Field[]; [↗](#custom)

## Methods overview

- assertEqual() [↗](#assertequal)

Defined in: [packages/nft/src/interfaces/types.ts:164](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L164)

## Extends

- \{
  `custom`: `Field`[];
 \}

## Constructors

### new NFTTransactionContext()

```ts
new NFTTransactionContext(value: {
  custom: Field[];
 }): NFTTransactionContext
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### custom

`Field`[] = `...`

Custom context that can be interpreted by the owner or approved contract.
Can hold Storage and root or two PublicKeys and UInt64
In case of holding Storage and root, the contracts can fetch using witnessAsync any off-chain data with unlimited size
and verify it using the root.

#### Returns

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext)

#### Inherited from

```ts
Struct({
  / Custom context that can be interpreted by the owner or approved contract.
    Can hold Storage and root or two PublicKeys and UInt64
    In case of holding Storage and root, the contracts can fetch using witnessAsync any off-chain data with unlimited size
    and verify it using the root.
   /
  custom: Provable.Array(Field, 3),
}).constructor
```

## Properties

### custom

```ts
custom: Field[];
```

Defined in: [packages/nft/src/interfaces/types.ts:170](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L170)

Custom context that can be interpreted by the owner or approved contract.
Can hold Storage and root or two PublicKeys and UInt64
In case of holding Storage and root, the contracts can fetch using witnessAsync any off-chain data with unlimited size
and verify it using the root.

#### Inherited from

```ts
Struct({
  / Custom context that can be interpreted by the owner or approved contract.
    Can hold Storage and root or two PublicKeys and UInt64
    In case of holding Storage and root, the contracts can fetch using witnessAsync any off-chain data with unlimited size
    and verify it using the root.
   /
  custom: Provable.Array(Field, 3),
}).custom
```

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTTransactionContext, b: NFTTransactionContext): void
```

Defined in: [packages/nft/src/interfaces/types.ts:172](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L172)

#### Parameters

##### a

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext)

##### b

[`NFTTransactionContext`](nftsrcclassnfttransactioncontext)

#### Returns

`void`
