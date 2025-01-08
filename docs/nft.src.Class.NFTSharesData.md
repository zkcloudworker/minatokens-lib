---
title: NFTSharesData
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Class.NFTSharesData
order: 208
---

# Class: NFTSharesData

## Properties overview

- admin:  PublicKey = PublicKey; [↗](#admin)
- auction:  PublicKey = PublicKey; [↗](#auction)
- collection:  PublicKey = PublicKey; [↗](#collection)
- maxBuyPrice:  UInt64 = UInt64; [↗](#maxbuyprice)
- minSellPrice:  UInt64 = UInt64; [↗](#minsellprice)
- nft:  PublicKey = PublicKey; [↗](#nft)
- owner:  PublicKey = PublicKey; [↗](#owner)

## Methods overview

- pack() [↗](#pack)
- unpack() [↗](#unpack)

Defined in: [packages/nft/src/marketplace/nft-shares.ts:52](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L52)

## Extends

- \{
  `admin`: `PublicKey`;
  `auction`: `PublicKey`;
  `collection`: `PublicKey`;
  `maxBuyPrice`: `UInt64`;
  `minSellPrice`: `UInt64`;
  `nft`: `PublicKey`;
  `owner`: `PublicKey`;
 \}

## Constructors

### new NFTSharesData()

```ts
new NFTSharesData(value: {
  admin: PublicKey;
  auction: PublicKey;
  collection: PublicKey;
  maxBuyPrice: UInt64;
  minSellPrice: UInt64;
  nft: PublicKey;
  owner: PublicKey;
 }): NFTSharesData
```

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### admin

`PublicKey` = `PublicKey`

###### auction

`PublicKey` = `PublicKey`

###### collection

`PublicKey` = `PublicKey`

###### maxBuyPrice

`UInt64` = `UInt64`

###### minSellPrice

`UInt64` = `UInt64`

###### nft

`PublicKey` = `PublicKey`

###### owner

`PublicKey` = `PublicKey`

#### Returns

[`NFTSharesData`](nftsrcclassnftsharesdata)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).constructor
```

## Properties

### admin

```ts
admin: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L53)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).admin
```

***

### auction

```ts
auction: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:57](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L57)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).auction
```

***

### collection

```ts
collection: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L55)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).collection
```

***

### maxBuyPrice

```ts
maxBuyPrice: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L58)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).maxBuyPrice
```

***

### minSellPrice

```ts
minSellPrice: UInt64 = UInt64;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:59](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L59)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).minSellPrice
```

***

### nft

```ts
nft: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L56)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).nft
```

***

### owner

```ts
owner: PublicKey = PublicKey;
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:54](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L54)

#### Inherited from

```ts
Struct({
  admin: PublicKey,
  owner: PublicKey,
  collection: PublicKey,
  nft: PublicKey,
  auction: PublicKey,
  maxBuyPrice: UInt64,
  minSellPrice: UInt64,
}).owner
```

## Methods

### pack()

```ts
pack(): NFTSharesDataPacked
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:61](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L61)

#### Returns

[`NFTSharesDataPacked`](nftsrcclassnftsharesdatapacked)

***

### unpack()

```ts
static unpack(packed: NFTSharesDataPacked): NFTSharesData
```

Defined in: [packages/nft/src/marketplace/nft-shares.ts:80](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/marketplace/nft-shares.ts#L80)

#### Parameters

##### packed

[`NFTSharesDataPacked`](nftsrcclassnftsharesdatapacked)

#### Returns

[`NFTSharesData`](nftsrcclassnftsharesdata)
