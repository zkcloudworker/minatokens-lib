/**
 * blockchain is the type for the chain ID.
 */
export type blockchain = "local" | "devnet" | "lightnet" | "mainnet" | "zeko";

export type FungibleTokenTransactionType =
  | "mint"
  | "transfer"
  | "bid"
  | "offer"
  | "buy"
  | "sell"
  | "withdrawBid"
  | "withdrawOffer"
  | "whitelistBid"
  | "whitelistOffer"
  | "whitelistAdmin";
