---
title: OwnableContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.OwnableContract
order: 241
---

# Interface: OwnableContract

## Methods overview

- transferOwnership() [↗](#transferownership)

Defined in: [packages/nft/src/interfaces/ownable.ts:14](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/ownable.ts#L14)

Interface representing ownable functionality for smart contracts.

The `OwnableContract` interface extends `SmartContract` and provides methods to ensure that only the owner
can perform certain actions and to allow the transfer of ownership to a new owner.

By implementing the Ownable interface, contracts can secure critical operations and provide a transparent
mechanism for ownership management.

## Methods

### transferOwnership()

```ts
transferOwnership(to: PublicKey): Promise<PublicKey>
```

Defined in: [packages/nft/src/interfaces/ownable.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/ownable.ts#L21)

Transfers ownership of the contract to a new owner.

#### Parameters

##### to

`PublicKey`

The public key of the new owner.

#### Returns

`Promise`\<`PublicKey`\>

A promise that resolves to the public key of the old owner.
