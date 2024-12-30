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
    devnet: {
        o1js: "2.2.0",
        vk: {
            NFT: {
                hash: "22672183687474255247327733767212931787817838018374864965847009591372827193963",
                data: "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",
                type: "nft",
            },
        },
    },
    mainnet: {
        o1js: "2.2.0",
        vk: {
            NFT: {
                hash: "9754802211789498812705502485011240651744182275724373875129409800585031516514",
                data: "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",
                type: "nft",
            },
        },
    },
};
//# sourceMappingURL=vk.js.map