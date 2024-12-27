/**
 * An object containing the verification keys for the NFT Collection and NFT contracts on different networks.
 *
 *
 * @remarks
 * The `NFTVerificationKeys` object maps a `SupportedNetworkId` to the corresponding verification keys for the NFT Collection and NFT contracts.
 *
 * **Structure:**
 * - `network`: The network identifier (`"devnet"` or `"mainnet"`).
 *   - `collection`:
 *     - `hash`: The hash of the verification key for the NFT Collection contract.
 *     - `data`: The verification key data for the NFT Collection contract.
 *   - `nft`:
 *     - `hash`: The hash of the verification key for the NFT contract.
 *     - `data`: The verification key data for the NFT contract.
 *
 * @example
 * Accessing the verification key hash for the NFT Collection on testnet:
 * ```typescript
 * const testnetCollectionVKHash = NFTVerificationKeys["devnet"].collection.hash;
 * ```
 */
export const nftVerificationKeys = {
    mainnet: {
        o1js: "2.2.0",
        vk: {
            NFT: {
                hash: "4139873419466911647335133355229626577074415960725687329241140435336073618941",
                data: "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",
                type: "nft",
            },
        },
    },
    devnet: {
        o1js: "2.2.0",
        vk: {
            NFT: {
                hash: "13746079407990464162189636748966411098497115333657710415049917997546959751859",
                data: "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",
                type: "nft",
            },
        },
    },
};
//# sourceMappingURL=vk.js.map