import { CollectionFactory } from "./contracts/collection.js";
import { NFTAdmin, NFTAdvancedAdminContract } from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";
import { OfferFactory } from "./marketplace/offer.js";
import {
  NFTOwnerContractConstructor,
  NFTAdminContractConstructor,
  NFTApprovalContractConstructor,
  NFTCollectionContractConstructor,
  NFTStandardOwner,
  NFTStandardApproval,
  DefineApprovalFactory,
} from "./interfaces/index.js";

export const NFTAdvancedAdmin = NFTAdvancedAdminContract({
  upgradeContract: VerificationKeyUpgradeAuthority,
});

export type NonFungibleTokenContracts = {
  Collection: ReturnType<typeof CollectionFactory>;
  Approval: NFTApprovalContractConstructor;
  Owner: NFTOwnerContractConstructor;
  Admin: NFTAdminContractConstructor;
};

export function NonFungibleTokenContractsFactory(params: {
  approvalFactory: DefineApprovalFactory;
  adminContract: NFTAdminContractConstructor;
  ownerContract: NFTOwnerContractConstructor;
}): NonFungibleTokenContracts {
  const { approvalFactory, adminContract, ownerContract } = params;

  let Collection: ReturnType<typeof CollectionFactory>;
  let Approval: NFTApprovalContractConstructor;
  let Owner: NFTOwnerContractConstructor = ownerContract;
  let Admin: NFTAdminContractConstructor = adminContract;

  function getCollection() {
    if (!Collection) {
      throw new Error("Collection constructor not set up yet!");
    }
    return Collection;
  }
  function getApproval() {
    if (!Approval) {
      throw new Error("Approval constructor not set up yet!");
    }
    return Approval;
  }

  Approval = approvalFactory({
    collectionContract: getCollection,
  });

  Collection = CollectionFactory({
    adminContract: () => adminContract,
    ownerContract: () => ownerContract,
    approvalContract: getApproval,
  });

  return { Collection, Approval, Owner, Admin };
}

export const { Collection, Approval, Owner, Admin } =
  NonFungibleTokenContractsFactory({
    approvalFactory: OfferFactory,
    adminContract: NFTAdmin,
    ownerContract: NFTStandardOwner,
  });

export const {
  Collection: AdvancedCollection,
  Approval: AdvancedApproval,
  Owner: AdvancedOwner,
  Admin: AdvancedAdmin,
} = NonFungibleTokenContractsFactory({
  approvalFactory: OfferFactory,
  adminContract: NFTAdvancedAdmin,
  ownerContract: NFTStandardOwner,
});
