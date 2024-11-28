import { NFT, CollectionContract } from "./contracts/index.js";
import {
  NFTAdminContract,
  NFTWhitelistedAdminContract,
} from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "./upgrade/index.js";

export {
  AdminContract,
  WhitelistedAdminContract,
  Collection,
  WhitelistedCollection,
  contractList,
};

const AdminContract = NFTAdminContract({
  upgradeContract: VerificationKeyUpgradeAuthority,
});
const WhitelistedAdminContract = NFTWhitelistedAdminContract({
  upgradeContract: VerificationKeyUpgradeAuthority,
});

const Collection = CollectionContract({
  adminContract: AdminContract,
  upgradeContract: VerificationKeyUpgradeAuthority,
  networkId: "testnet",
});

const WhitelistedCollection = CollectionContract({
  adminContract: WhitelistedAdminContract,
  upgradeContract: VerificationKeyUpgradeAuthority,
  networkId: "testnet",
});

const contractList = {
  NFT: NFT,
  Collection: Collection,
  WhitelistedCollection: WhitelistedCollection,
  AdminContract: AdminContract,
  WhitelistedAdminContract: WhitelistedAdminContract,
  VerificationKeyUpgradeAuthority: VerificationKeyUpgradeAuthority,
};
