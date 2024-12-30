import { CollectionFactory, NFTAdmin } from "./contracts/index.js";
import { NFTAdvancedAdminContract } from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";
import { OfferFactory } from "./marketplace/offer.js";
import { NFTStandardOwner, } from "./interfaces/index.js";
export const NFTAdvancedAdmin = NFTAdvancedAdminContract({
    upgradeContract: VerificationKeyUpgradeAuthority,
});
export function NonFungibleTokenContractsFactory(params) {
    const { adminContract = NFTAdmin, approvalFactory = OfferFactory, ownerFactory = ({ collectionContract }) => NFTStandardOwner, } = params;
    let Collection;
    let Approval;
    let Owner;
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
    function getOwner() {
        if (!Owner) {
            throw new Error("Owner constructor not set up yet!");
        }
        return Owner;
    }
    Approval = approvalFactory({
        collectionContract: getCollection,
    });
    Collection = CollectionFactory({
        adminContract: () => adminContract,
        ownerContract: getOwner,
        approvalContract: getApproval,
    });
    Owner = ownerFactory({
        collectionContract: getCollection,
    });
    return { Collection, Approval, Owner, Admin };
}
export const { Collection, Approval, Owner, Admin } = NonFungibleTokenContractsFactory({});
export const { Collection: AdvancedCollection, Approval: AdvancedApproval, Owner: AdvancedOwner, Admin: AdvancedAdmin, } = NonFungibleTokenContractsFactory({
    adminContract: NFTAdvancedAdmin,
});
//# sourceMappingURL=contracts.js.map