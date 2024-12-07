---
title: DeployedTokenTransactionBaseParams
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: Interface.DeployedTokenTransactionBaseParams
order: 10
---

# Interface: DeployedTokenTransactionBaseParams

## Properties overview

- sender:  string; [↗](#sender)
- tokenAddress:  string; [↗](#tokenaddress)
- txType:  FungibleTokenTransactionType; [↗](#txtype)

## Extends

- [`TokenTransactionBaseParams`](interfacetokentransactionbaseparams)

## Extended by

- [`MintTransactionParams`](interfaceminttransactionparams)
- [`TransferTransactionParams`](interfacetransfertransactionparams)
- [`AirdropTransactionParams`](interfaceairdroptransactionparams)
- [`OfferTransactionParams`](interfaceoffertransactionparams)
- [`BidTransactionParams`](interfacebidtransactionparams)
- [`BuyTransactionParams`](interfacebuytransactionparams)
- [`SellTransactionParams`](interfaceselltransactionparams)
- [`WithdrawBidTransactionParams`](interfacewithdrawbidtransactionparams)
- [`WithdrawOfferTransactionParams`](interfacewithdrawoffertransactionparams)
- [`UpdateBidWhitelistTransactionParams`](interfaceupdatebidwhitelisttransactionparams)
- [`UpdateOfferWhitelistTransactionParams`](interfaceupdateofferwhitelisttransactionparams)
- [`UpdateAdminWhitelistTransactionParams`](interfaceupdateadminwhitelisttransactionparams)

## Properties

### developerFee?

```ts
optional developerFee: number;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`developerFee`](Interface.TokenTransactionBaseParams.md#developerfee)

#### Defined in

[transaction.ts:24](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L24)

***

### memo?

```ts
optional memo: string;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`memo`](Interface.TokenTransactionBaseParams.md#memo)

#### Defined in

[transaction.ts:23](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L23)

***

### nonce?

```ts
optional nonce: number;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`nonce`](Interface.TokenTransactionBaseParams.md#nonce)

#### Defined in

[transaction.ts:22](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L22)

***

### sender

```ts
sender: string;
```

#### Inherited from

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`sender`](Interface.TokenTransactionBaseParams.md#sender)

#### Defined in

[transaction.ts:21](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L21)

***

### tokenAddress

```ts
tokenAddress: string;
```

#### Defined in

[transaction.ts:56](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L56)

***

### txType

```ts
txType: FungibleTokenTransactionType;
```

#### Overrides

[`TokenTransactionBaseParams`](interfacetokentransactionbaseparams).[`txType`](Interface.TokenTransactionBaseParams.md#txtype)

#### Defined in

[transaction.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/transaction.ts#L55)
