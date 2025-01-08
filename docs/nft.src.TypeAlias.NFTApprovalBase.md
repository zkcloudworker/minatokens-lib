---
title: NFTApprovalBase
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.TypeAlias.NFTApprovalBase
order: 250
---

# Type Alias: NFTApprovalBase

```ts
type NFTApprovalBase = SmartContract & {
  canTransfer: Promise<Bool>;
};
```

Defined in: [packages/nft/src/interfaces/approval.ts:28](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/interfaces/approval.ts#L28)

The `NFTApprovalBase` interface defines the administrative functionalities required for managing an NFT transfer approval on the Mina Protocol.

## Type declaration

### canTransfer()

Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.

#### Parameters

##### params

[`TransferExtendedParams`](nftsrcclasstransferextendedparams)

The transfer details.

#### Returns

`Promise`\<`Bool`\>

A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.
