import { CollectionFactory } from "./contracts/collection.js";
import { NFTAdmin, NFTAdvancedAdminContract } from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";
import { OfferFactory } from "./marketplace/offer.js";
import { NFTStandardOwner, } from "./interfaces/index.js";
export const NFTAdvancedAdmin = NFTAdvancedAdminContract({
    upgradeContract: VerificationKeyUpgradeAuthority,
});
export function NonFungibleTokenContractsFactory(params) {
    const { approvalFactory, adminContract, ownerContract } = params;
    let Collection;
    let Approval;
    let Owner = ownerContract;
    let Admin = adminContract;
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
export const { Collection, Approval, Owner, Admin } = NonFungibleTokenContractsFactory({
    approvalFactory: OfferFactory,
    adminContract: NFTAdmin,
    ownerContract: NFTStandardOwner,
});
export const { Collection: AdvancedCollection, Approval: AdvancedApproval, Owner: AdvancedOwner, Admin: AdvancedAdmin, } = NonFungibleTokenContractsFactory({
    approvalFactory: OfferFactory,
    adminContract: NFTAdvancedAdmin,
    ownerContract: NFTStandardOwner,
});
//# sourceMappingURL=contracts.js.map