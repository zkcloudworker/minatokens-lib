import { CollectionContract } from "./contracts/index.js";
import { NFTAdmin, NFTAdvancedAdminContract } from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";
export { NFTAdvancedAdmin, Collection, AdvancedCollection };
const NFTAdvancedAdmin = NFTAdvancedAdminContract({
    upgradeContract: VerificationKeyUpgradeAuthority,
});
const Collection = CollectionContract({
    adminContract: NFTAdmin,
});
const AdvancedCollection = CollectionContract({
    adminContract: NFTAdvancedAdmin,
});
//# sourceMappingURL=contracts.js.map