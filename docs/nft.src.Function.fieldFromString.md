---
title: fieldFromString
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Function.fieldFromString
order: 281
---

# Function: fieldFromString()

```ts
function fieldFromString(storage: string): Field
```

Defined in: [packages/nft/src/interfaces/encoding.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/encoding.ts#L28)

Reconstructs a `Field` element from its string representation.
This function is essential for deserializing strings back into `Field` elements,
which can then be used within the smart contract logic.

## Parameters

### storage

`string`

The string representation of the `Field`.

## Returns

`Field`

The reconstructed `Field` element.

## Throws

Will throw an error if the input string does not correspond to exactly one `Field`.
