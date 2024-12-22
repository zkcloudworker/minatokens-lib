---
title: OwnableContract
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.OwnableContract
order: 208
---

# Interface: OwnableContract

## Methods overview

- ensureOwnerSignature() [↗](#ensureownersignature)
- transferOwnership() [↗](#transferownership)

Interface representing ownable functionality for smart contracts.

The `OwnableContract` interface extends `SmartContract` and provides methods to ensure that only the owner
can perform certain actions and to allow the transfer of ownership to a new owner.

By implementing the Ownable interface, contracts can secure critical operations and provide a transparent
mechanism for ownership management.

## Methods

### ensureOwnerSignature()

```ts
ensureOwnerSignature(): Promise<AccountUpdate>
```

Ensures that the transaction is authorized by the contract owner.
Typically used to restrict access to sensitive functions.

#### Returns

`Promise`\<`AccountUpdate`\>

A promise that resolves to an `AccountUpdate`, representing the action of ensuring the owner's signature.

#### Defined in

[packages/nft/src/contracts/ownable.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/ownable.ts#L28)

***

### transferOwnership()

```ts
transferOwnership(newOwner: PublicKey): Promise<PublicKey>
```

Transfers ownership of the contract to a new owner.

#### Parameters

##### newOwner

`PublicKey`

The public key of the new owner.

#### Returns

`Promise`\<`PublicKey`\>

A promise that resolves to the public key of the old owner.

#### Defined in

[packages/nft/src/contracts/ownable.ts:36](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/ownable.ts#L36)
