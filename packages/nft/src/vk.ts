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
export const nftVerificationKeys: {
  [key in "mainnet" | "devnet"]: {
    o1js: string;
    vk: {
      [key: string]: {
        hash: string;
        data: string;
        type: "nft";
      };
    };
  };
} = {
  devnet: {
    o1js: "2.2.0",
    vk: {
      NFT: {
        hash: "15308085653355989023493655486469147944796663405691317499290838146334429932615",
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
