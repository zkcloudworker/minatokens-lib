---
title: NFTDataPacked
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTDataPacked
order: 206
---

# Class: NFTDataPacked

## Properties overview

- approvedX:  Field = Field; [↗](#approvedx)
- data:  Field = Field; [↗](#data)
- ownerX:  Field = Field; [↗](#ownerx)

## Methods overview

- assertEqual() [↗](#assertequal)

Defined in: [packages/nft/src/interfaces/types.ts:35](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L35)

## Extends

- \{
  `approvedX`: `Field`;
  `data`: `Field`;
  `ownerX`: `Field`;
 \}

## Constructors

### new NFTDataPacked()

```ts
new NFTDataPacked(value: {
  approvedX: Field;
  data: Field;
  ownerX: Field;
 }): NFTDataPacked
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### approvedX

`Field` = `Field`

###### data

`Field` = `Field`

###### ownerX

`Field` = `Field`

#### Returns

[`NFTDataPacked`](nftsrcclassnftdatapacked)

#### Inherited from

```ts
Struct({
  ownerX: Field,
  approvedX: Field,
  data: Field,
}).constructor
```

## Properties

### approvedX

```ts
approvedX: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:37](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L37)

#### Inherited from

```ts
Struct({
  ownerX: Field,
  approvedX: Field,
  data: Field,
}).approvedX
```

***

### data

```ts
data: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:38](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L38)

#### Inherited from

```ts
Struct({
  ownerX: Field,
  approvedX: Field,
  data: Field,
}).data
```

***

### ownerX

```ts
ownerX: Field = Field;
```

Defined in: [packages/nft/src/interfaces/types.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L36)

#### Inherited from

```ts
Struct({
  ownerX: Field,
  approvedX: Field,
  data: Field,
}).ownerX
```

## Methods

### assertEqual()

```ts
static assertEqual(a: NFTDataPacked, b: NFTDataPacked): void
```

Defined in: [packages/nft/src/interfaces/types.ts:40](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/types.ts#L40)

#### Parameters

##### a

[`NFTDataPacked`](nftsrcclassnftdatapacked)

##### b

[`NFTDataPacked`](nftsrcclassnftdatapacked)

#### Returns

`void`
