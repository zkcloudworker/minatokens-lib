---
title: nftVerificationKeys
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.nftVerificationKeys
order: 274
---

# Variable: nftVerificationKeys

```ts
const nftVerificationKeys: { [key in "mainnet" | "devnet"]: { o1js: string; vk: (key: string) => { data: string; hash: string; type: "nft" } } };
```

Defined in: [packages/nft/src/vk.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/vk.ts#L32)

An object containing the verification keys for the NFT Collection and NFT contracts on different networks.

## Remarks

The `NFTVerificationKeys` object maps a `SupportedNetworkId` to the corresponding verification keys for the NFT Collection and NFT contracts.

**Structure:**
- `network`: The network identifier (`"devnet"` or `"mainnet"`).
  - `collection`:
    - `hash`: The hash of the verification key for the NFT Collection contract.
    - `data`: The verification key data for the NFT Collection contract.
  - `nft`:
    - `hash`: The hash of the verification key for the NFT contract.
    - `data`: The verification key data for the NFT contract.

## Example

Accessing the verification key hash for the NFT Collection on testnet:
```typescript
const testnetCollectionVKHash = NFTVerificationKeys["devnet"].collection.hash;
```
