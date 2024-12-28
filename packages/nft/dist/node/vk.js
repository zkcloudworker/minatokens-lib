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
                data: "AAC9a8e2SGkYRQQ5OfO0PfAblqVZy1JUrdswDCrHb+70PGp0KETkNTVRI7HOZuyhA/eNxMU7TRG3GaNks7aLCzQFXyhw2G8QfBDKhY8RQvpC/EYC+EEUSaqB7pk8NCc20C1uHvyIL3FoGBZvXHh9056VdO2Sui6izUUxBEJ2rTTMKehvUTgLC2+n+/qZY/fo8L5uqt1AKUSS0uHKBhSeW8EBzUd3gFax/A9enpuBM8xQwgIIfO2lVVDVj4EpRlwikiL2cp07e0y7haHCTiDPfM0gEH8dh+mlCyT8uu6CkTA8LnPllP2RmFm4/s8VF8vQQqxpBpXob4U1Mq1QCohbRtkAK1/AIi7GXUApT3Tgi2CIzNnremE2fu9k3gmUch92/yRMcxj2uljaH9NbQE+MqPpPQ5F5++kMsAIdAMKMbslgAqEHJg7kSjz0ioYrq5R1RStpH3uHnr5I34ia802/hHw1IIlvkmoF/eVu/vy9kyxmV23XQc8xW/z/ODBZPexZIA8wojOIfE2FaAIWXL1wuVuwt1M9Eo+BRjtiTNcLvslPHoSUZyJcqI/GPo58coTvMHez3J4LcKfT8zCpnzFuHDcNAB58E3kWZ9uv5ofCt57yoEyz7ywb+5M6BhPf09p77BcSko3CD99vGrk7a5sSxRXdEZTs1TiyhP/hmQ2tVMR9bBNLOLYDU/oS+VZo76fEE3pxuJvsG/rFsxOU/5j45IFCDsOSj1BuO5eONTy1vHKlNy44kTtSc2p6efOSyescLdMU24ei5w46Fw3jsqf2BYJWkggBBWEWVstYh0MOZCRUDTegQgalpImsddf+ZOb37toSROqcB+XRboW9QCufQ+ZLEDXRJTYSRHUgsrKTBE2uO1V/8BZKhwP6lUa880xI29AtpsggroJ0HCZ/3kI1emqoWu00xgHJT+VvLwaxzhAWARYBNAxZuBTap9p9ZnlrbINAqhlVrkp9Eas7SV9pDvSkCbGe9cEENFql2W0Dzmuv/XLrESh1kNiiAvP60L1E7Nkn4kI/WrRTDWBtg1vmEpZ+TIsqXefRK8XMmdBA+0s6phbtD8XvD1DuCfuPTQZ1b6RWs1dcfOmd3GKZSPDM6VjrDqIcfK0Ha+prG+3/OrEvSr8jt8GXfLS1oQjMpXwZ9e80Z7VMop01O0pELzVRJc+Wd6oxE5cdKo/cYCsf9kI31gDGgY5gKrNFynw9EVAzQHHFEmNQ/AnfQFVfU8Q0qPSAAunIzvG/Ru67R+E3k0jckI6mf/w3ENtL7nldYFWQZ3gnd619b8kUWhTR1zGjOFVXdULeOx2LVp3n8OGno7C5PCKbJkPzD2uMYPk0L0O7X/sTuIk4aabFeCTGtUQ2ZCdgNNZgUJ79aHybrP7AaLZUqfja40hAnEu08G9up6lR1d4Kqgf14tTrqLDR2DiE2EsrAzgHzIDhatXZ7SwWBNLQUjjiyvyfPBVio0XjamATxTRgJXRzLYx25PwFYeA4OOmvKHwYgdK1LJuWnjJb/X4pRvnmobSsXo8uzpZ8VOeMcJQbRe7zVKe8CcHPqAajwmL8vV+o/Y6yYUOnShz001HH4gDVLAjAkDSZQbrWuUWKVg5IiH4pp/HuFJqAGnZIfyWNIMTrlQXNwarOFgmlOG9wsZXFmjEpG+ZWJPO4NtzfGGEG+LkiI+LfoDsSu8SC8XXngjgUlGYyW3zLGqBZn7kzZTYAAlki1ivsqFPUPI5OU9yGs12q+8wr7zY6cydhxoFdFBWQj3bFoeCsuYBEW6OR5z5wApcFdLQpFR7svXtDk5YUrTduFyF2W5x+C92wfLQ8/NgzDKly/mYg8QpQmP39dx37bNg7r+ir5Svnc7OLrDjFUkiLRI8rUa5sEvaYAmsBHAAaRxrLsGaV6kKje3J8mLSpW0M3fjSDa574o2Jnxqc4FGsPVkRMSa7IA6N0I2lRw1rNGE/efHxYD4WdJXiME401cSxBfL2GdgISqGNoonoCC/XiS72yLjwblgkktNU6fjTu9kDY9ewdXgFb0sV2LCH4ozyBSNrixCDhjNObzc4aL+lZMCcSosvEm3yKJPhyBHYE6ioq5S9MW2BGR8iFTpA+CBSrQsETiWiKl5WYDq+so+2uen4hDRiJVnbBG1BFuxHtjblgNQ2P1E8HyqNc5PcXkB4sNSqylTDXP7/L9vOlHmidKt6D+pQsMGMC75LfX+HSRWc5w1pxPfe0FSlo1kgjYU249+Q/XomvVESJyupfnTSt7Sq/9AYsiSpBFUm5NCmOrSwSfWRFxW87+vz1y2M8TT45njvVQof6jL210OjJHwNk7ez1mjLzJbcHdCGiWRAGpTGp+MrbQow0YTcp+TQs9UlbYr3WLLOWtRbN84uKEmdPOdOEMECl2Aa2RoPUtxw=",
                type: "nft",
            },
        },
    },
    devnet: {
        o1js: "2.2.0",
        vk: {
            NFT: {
                hash: "3759129938434863538377514940020087841580552042403628000774601374509380086013",
                data: "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",
                type: "nft",
            },
        },
    },
};
//# sourceMappingURL=vk.js.map