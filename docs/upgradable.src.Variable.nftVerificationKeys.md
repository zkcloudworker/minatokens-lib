---
title: nftVerificationKeys
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: upgradable.src.Variable.nftVerificationKeys
order: 309
---

# Variable: nftVerificationKeys

```ts
const nftVerificationKeys: { [key in "mainnet" | "testnet"]: { o1js: string; vk: (key: string) => { data: string; hash: string; type: "nft" | "collection" | "admin" | "upgrade" | "user" }; zkcloudworker: string } };
```

An object containing the verification keys for the NFT Collection and NFT contracts on different networks.

## Remarks

The `NFTVerificationKeys` object maps a `SupportedNetworkId` to the corresponding verification keys for the NFT Collection and NFT contracts.

**Structure:**
- `network`: The network identifier (`"testnet"` or `"mainnet"`).
  - `collection`:
    - `hash`: The hash of the verification key for the NFT Collection contract.
    - `data`: The verification key data for the NFT Collection contract.
  - `nft`:
    - `hash`: The hash of the verification key for the NFT contract.
    - `data`: The verification key data for the NFT contract.

## Example

Accessing the verification key hash for the NFT Collection on testnet:
```typescript
const testnetCollectionVKHash = NFTVerificationKeys["testnet"].collection.hash;
```

## Defined in

[packages/upgradable/src/vk.ts:32](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/upgradable/src/vk.ts#L32)
