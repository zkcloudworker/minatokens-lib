import { Cache, Field } from "o1js";
import { FungibleToken, WhitelistedFungibleToken } from "./FungibleToken.js";
import { FungibleTokenAdmin } from "./FungibleTokenAdmin.js";
import { FungibleTokenWhitelistedAdmin } from "./FungibleTokenWhitelistedAdmin.js";
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
  WhitelistedFungibleToken: WhitelistedFungibleToken,
  FungibleTokenWhitelistedAdmin: FungibleTokenWhitelistedAdmin,
  FungibleTokenBidContract: FungibleTokenBidContract,
  FungibleTokenOfferContract: FungibleTokenOfferContract,
};
