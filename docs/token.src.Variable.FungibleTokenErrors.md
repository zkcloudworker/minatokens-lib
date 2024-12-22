---
title: FungibleTokenErrors
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: token.src.Variable.FungibleTokenErrors
order: 285
---

# Variable: FungibleTokenErrors

## Properties overview

- flashMinting:  string = "Flash-minting or unbalanced transaction detected. Please make sure that your transaction is balanced, and that your AccountUpdates are ordered properly, so that tokens are not received before they are sent."; [↗](#flashminting)
- noAdminKey:  string = "could not fetch admin contract key"; [↗](#noadminkey)
- noPermissionChangeAllowed:  string = "Can't change permissions for access or receive on token accounts"; [↗](#nopermissionchangeallowed)
- noPermissionToChangeAdmin:  string = "Not allowed to change admin contract"; [↗](#nopermissiontochangeadmin)
- noPermissionToMint:  string = "Not allowed to mint tokens"; [↗](#nopermissiontomint)
- noPermissionToPause:  string = "Not allowed to pause token"; [↗](#nopermissiontopause)
- noPermissionToResume:  string = "Not allowed to resume token"; [↗](#nopermissiontoresume)
- noTransferFromCirculation:  string = "Can't transfer to/from the circulation account"; [↗](#notransferfromcirculation)
- tokenPaused:  string = "Token is currently paused"; [↗](#tokenpaused)
- unbalancedTransaction:  string = "Transaction is unbalanced"; [↗](#unbalancedtransaction)

```ts
const FungibleTokenErrors: {
  flashMinting: string;
  noAdminKey: string;
  noPermissionChangeAllowed: string;
  noPermissionToChangeAdmin: string;
  noPermissionToMint: string;
  noPermissionToPause: string;
  noPermissionToResume: string;
  noTransferFromCirculation: string;
  tokenPaused: string;
  unbalancedTransaction: string;
};
```

## Type declaration

### flashMinting

```ts
flashMinting: string = "Flash-minting or unbalanced transaction detected. Please make sure that your transaction is balanced, and that your AccountUpdates are ordered properly, so that tokens are not received before they are sent.";
```

### noAdminKey

```ts
noAdminKey: string = "could not fetch admin contract key";
```

### noPermissionChangeAllowed

```ts
noPermissionChangeAllowed: string = "Can't change permissions for access or receive on token accounts";
```

### noPermissionToChangeAdmin

```ts
noPermissionToChangeAdmin: string = "Not allowed to change admin contract";
```

### noPermissionToMint

```ts
noPermissionToMint: string = "Not allowed to mint tokens";
```

### noPermissionToPause

```ts
noPermissionToPause: string = "Not allowed to pause token";
```

### noPermissionToResume

```ts
noPermissionToResume: string = "Not allowed to resume token";
```

### noTransferFromCirculation

```ts
noTransferFromCirculation: string = "Can't transfer to/from the circulation account";
```

### tokenPaused

```ts
tokenPaused: string = "Token is currently paused";
```

### unbalancedTransaction

```ts
unbalancedTransaction: string = "Transaction is unbalanced";
```

## Defined in

[packages/token/src/FungibleTokenContract.ts:48](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/token/src/FungibleTokenContract.ts#L48)
