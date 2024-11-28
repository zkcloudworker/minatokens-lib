import {
  FungibleTokenContract,
  FungibleTokenAdminBase,
} from "./FungibleTokenContract.js";
import { FungibleTokenAdmin } from "./FungibleTokenAdmin.js";
import { FungibleTokenWhitelistedAdmin } from "./FungibleTokenWhitelistedAdmin.js";

export { FungibleToken, WhitelistedFungibleToken };

const FungibleToken = FungibleTokenContract(FungibleTokenAdmin);
const WhitelistedFungibleToken = FungibleTokenContract(
  FungibleTokenWhitelistedAdmin
);
