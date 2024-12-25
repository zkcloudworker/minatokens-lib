import { NFT, CollectionContract } from "./contracts/index.js";
import {
  NFTAdminContract,
  NFTWhitelistedAdminContract,
} from "./admin/index.js";
import { VerificationKeyUpgradeAuthority } from "@minatokens/upgradable";

export {
  AdminContract,
  WhitelistedAdminContract,
  Collection,
  WhitelistedCollection,
  nftContractList,
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
});

const WhitelistedCollection = CollectionContract({
  adminContract: WhitelistedAdminContract,
  upgradeContract: VerificationKeyUpgradeAuthority,
});

const nftContractList = {
  NFT: NFT,
  Collection: Collection,
  WhitelistedCollection: WhitelistedCollection,
  AdminContract: AdminContract,
  WhitelistedAdminContract: WhitelistedAdminContract,
  VerificationKeyUpgradeAuthority: VerificationKeyUpgradeAuthority,
};
