import { Cache, Field } from "o1js";
import { FungibleToken, AdvancedFungibleToken } from "./FungibleToken.js";
import { FungibleTokenAdmin } from "./FungibleTokenStandardAdmin.js";
import { FungibleTokenAdvancedAdmin } from "./FungibleTokenAdvancedAdmin.js";
import { FungibleTokenBidContract } from "./bid.js";
import { FungibleTokenOfferContract } from "./offer.js";

export { tokenContracts };

export type Compilable = {
  compile({ cache }?: { cache: Cache }): Promise<{
    verificationKey: {
      data: string;
      hash: Field;
    };
  }>;
};

const tokenContracts: {
  [key: string]: Compilable;
} = {
  FungibleToken: FungibleToken,
  FungibleTokenAdmin: FungibleTokenAdmin,
  AdvancedFungibleToken: AdvancedFungibleToken,
  FungibleTokenAdvancedAdmin: FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract: FungibleTokenBidContract,
  FungibleTokenOfferContract: FungibleTokenOfferContract,
};
