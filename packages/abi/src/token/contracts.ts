import { Cache, Field } from "o1js";
import {
  FungibleToken,
  AdvancedFungibleToken,
  FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract,
  FungibleTokenOfferContract,
  FungibleTokenClaimContract,
} from "@minatokens/token";

export type Compilable = {
  compile({ cache }?: { cache: Cache }): Promise<{
    verificationKey: {
      data: string;
      hash: Field;
    };
  }>;
};

export const tokenContracts: Record<string, Compilable> = {
  FungibleToken: FungibleToken,
  FungibleTokenAdmin: FungibleTokenAdmin,
  AdvancedFungibleToken: AdvancedFungibleToken,
  FungibleTokenAdvancedAdmin: FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract: FungibleTokenBidContract,
  FungibleTokenOfferContract: FungibleTokenOfferContract,
  FungibleTokenClaimContract: FungibleTokenClaimContract,
};

export type CompileDependencies = Record<
  /** Transaction type */
  string,
  /** List of contract names */
  string[]
>;
