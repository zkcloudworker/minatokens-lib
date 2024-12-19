/**
 * Type representing the supported network IDs for the Mina Protocol.
 *
 * Currently supports:
 * - `"devnet"`: The Mina local blockchain and devnet
 * - `"mainnet"`: The Mina mainnet
 */
export type SupportedNetworkId = "devnet" | "mainnet";
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
export declare const nftVerificationKeys: {
    [key in "mainnet" | "devnet"]: {
        o1js: string;
        zkcloudworker: string;
        vk: {
            [key: string]: {
                hash: string;
                data: string;
                type: "nft" | "collection" | "admin" | "upgrade" | "user";
            };
        };
    };
};
