---
title: fetchMinaAccount
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: abi.src.Function.fetchMinaAccount
order: 22
---

# Function: fetchMinaAccount()

```ts
function fetchMinaAccount(params: {
  force: boolean;
  publicKey: string | PublicKey;
  tokenId: string | Field;
}): Promise<Account | undefined>
```

Fetches the Mina account for a given public key with error handling

## Parameters

### params

the parameters for fetching the account

#### force

`boolean`

whether to force the fetch - use it only if you are sure the account exists

#### publicKey

`string` \| `PublicKey`

the public key of the account

#### tokenId

`string` \| `Field`

the token id of the account

## Returns

`Promise`\<`Account` \| `undefined`\>

the account object

## Defined in

[packages/abi/src/fetch.ts:11](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/abi/src/fetch.ts#L11)
