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
import {
  NFT,
  Collection,
  AdvancedCollection,
  NFTAdmin,
  NFTAdvancedAdmin,
} from "@minatokens/nft";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";

export type Compilable = {
  compile({ cache }?: { cache: Cache }): Promise<{
    verificationKey: {
      data: string;
      hash: Field;
    };
  }>;
};

export type CompileDependencies = Record<
  /** Transaction type */
  string,
  /** List of contract names */
  string[] // TODO: add role
>;

export const contractList: Record<string, Compilable> = {
  FungibleToken: FungibleToken,
  FungibleTokenAdmin: FungibleTokenAdmin,
  AdvancedFungibleToken: AdvancedFungibleToken,
  FungibleTokenAdvancedAdmin: FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract: FungibleTokenBidContract,
  FungibleTokenOfferContract: FungibleTokenOfferContract,
  FungibleTokenClaimContract: FungibleTokenClaimContract,
  NFT: NFT,
  Collection: Collection,
  AdvancedCollection: AdvancedCollection,
  NFTAdmin: NFTAdmin,
  NFTAdvancedAdmin: NFTAdvancedAdmin,
  VerificationKeyUpgradeAuthority: VerificationKeyUpgradeAuthority,
};
