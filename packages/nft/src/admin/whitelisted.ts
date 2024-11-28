/**
 * The `NFTWhitelistedAdminContract` is an implementation of an admin contract that uses a whitelist to control access to certain actions within the NFT ecosystem.
 * This contract ensures that only whitelisted addresses can perform specific actions such as minting, updating, transferring, buying, or selling NFTs.
 * It also introduces functionality for pausing and resuming the contract, upgrading the contract's verification key, and transferring ownership.
 */

import {
  Bool,
  DeployArgs,
  method,
  Permissions,
  PublicKey,
  SmartContract,
  State,
  state,
  VerificationKey,
  UInt64,
  Provable,
  Field,
  AccountUpdate,
  Mina,
  Poseidon,
  UInt32,
  Struct,
} from "o1js";
import {
  loadIndexedMerkleMap,
  createIpfsURL,
  Whitelist,
} from "@minatokens/storage";
import {
  MintRequest,
  NFTState,
  NFTAdminBase,
  MintParamsOption,
  UpgradeAuthorityBase,
  VerificationKeyUpgradeData,
  UpgradableContract,
  UpgradeAuthorityContractConstructor,
  Storage,
  PauseEvent,
  PausableContract,
  OwnershipChangeEvent,
  OwnableContract,
} from "../contracts/index.js";

export {
  NFTWhitelistedAdminContract,
  PauseData,
  NFTWhitelistedAdminDeployProps,
};

/**
 * Deployment properties for the `NFTWhitelistedAdminContract`.
 */
interface NFTWhitelistedAdminDeployProps
  extends Exclude<DeployArgs, undefined> {
  /** The public key of the admin or owner of the contract. */
  admin: PublicKey;
  /** The public key of the Upgrade Authority Contract. */
  upgradeAuthority: PublicKey;
  /** The whitelist. */
  whitelist: Whitelist;

  /** The URI of the zkApp. */
  uri: string;
  /** Flag indicating whether the contract can be paused. */
  canPause: Bool;
  /** Flag indicating whether the contract is currently paused. */
  isPaused: Bool;
}

/**
 * Represents pause-related data, containing flags for pause functionality.
 */
class PauseData extends Struct({
  /** Indicates whether the contract can be paused. */
  canPause: Bool,
  /** Indicates whether the contract is currently paused. */
  isPaused: Bool,
}) {
  /**
   * Packs the pause data into a `Field`.
   * @returns A `Field` representing the packed pause data.
   */
  pack(): Field {
    return Field.fromBits([this.canPause, this.isPaused]);
  }
  /**
   * Unpacks a `Field` into `PauseData`.
   * @param field The `Field` to unpack.
   * @returns An instance of `PauseData`.
   */
  static unpack(field: Field): PauseData {
    const [canPause, isPaused] = field.toBits(2);
    return new PauseData({ canPause, isPaused });
  }
}

const NFTWhitelistedAdminContractErrors = {
  contractIsPaused: "Contract is paused",
  notWhitelisted: "Address not whitelisted",
  senderNotWhitelisted: "Sender address not whitelisted",
  cannotMint: "Cannot mint",
  verificationKeyHashNotFound: "Verification key hash not found",
  cannotUpgradeVerificationKey: "Cannot upgrade verification key",
};

/**
 * Constructs the `NFTWhitelistedAdmin` class, an admin contract that uses a whitelist to control access.
 * @param params Object containing the upgrade contract constructor.
 * @returns The `NFTWhitelistedAdmin` class.
 */
function NFTWhitelistedAdminContract(params: {
  upgradeContract: UpgradeAuthorityContractConstructor;
}) {
  const { upgradeContract } = params;

  /**
   * The `NFTWhitelistedAdmin` class ensures that only whitelisted addresses can perform specific actions such as minting, updating, transferring, buying, or selling NFTs.
   * It also provides functionality for pausing and resuming the contract, upgrading the contract's verification key, and transferring ownership.
   */
  class NFTWhitelistedAdmin
    extends SmartContract
    implements
      NFTAdminBase,
      UpgradableContract,
      PausableContract,
      OwnableContract
  {
    /** The public key of the admin or owner of the contract. */
    @state(PublicKey) admin = State<PublicKey>();
    /** The public key of the Upgrade Authority Contract. */
    @state(PublicKey) upgradeAuthority = State<PublicKey>();
    /** The root hash of the Merkle tree representing the whitelist. */
    @state(Whitelist) whitelist = State<Whitelist>();
    /** Packed field containing pause-related flags. */
    @state(Field) pauseData = State<Field>();

    /**
     * Deploys the `NFTWhitelistedAdmin` contract with the provided initial settings.
     * @param props Deployment properties.
     */
    async deploy(props: NFTWhitelistedAdminDeployProps) {
      await super.deploy(props);
      this.admin.set(props.admin);
      this.upgradeAuthority.set(props.upgradeAuthority);
      this.whitelist.set(props.whitelist);
      this.pauseData.set(
        new PauseData({
          canPause: props.canPause,
          isPaused: props.isPaused,
        }).pack()
      );
      this.account.zkappUri.set(props.uri);
      this.account.permissions.set({
        ...Permissions.default(),
        // We want to allow the upgrade authority to set the verification key
        // even in the case when there is no protocol upgrade
        // to allow the upgrade in case of o1js breaking changes
        setVerificationKey:
          Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: Permissions.impossible(),
      });
    }

    events = {
      /** Emitted when the contract's verification key is upgraded. */
      upgradeVerificationKey: Field,
      /** Emitted when the contract is paused. */
      pause: PauseEvent,
      /** Emitted when the contract is resumed. */
      resume: PauseEvent,
      /** Emitted when ownership of the contract changes. */
      ownershipChange: OwnershipChangeEvent,
      /** Emitted when the whitelist is updated. */
      updateWhitelist: Whitelist,
    };

    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns An `AccountUpdate` representing the admin's signed transaction.
     */
    async ensureOwnerSignature(): Promise<AccountUpdate> {
      const sender = this.sender.getUnconstrained();
      const admin = this.admin.getAndRequireEquals();
      admin.assertEquals(sender);
      const adminUpdate = AccountUpdate.createSigned(admin);
      adminUpdate.body.useFullCommitment = Bool(true); // prevent memo and fee change
      return adminUpdate;
    }

    /** Gets the upgrade contract constructor. */
    get getUpgradeContractConstructor() {
      return upgradeContract;
    }

    /**
     * Retrieves the `UpgradeAuthorityBase` contract instance.
     * @returns An instance of the upgrade authority contract.
     */
    async getUpgradeContract(): Promise<UpgradeAuthorityBase> {
      return new this.getUpgradeContractConstructor(
        this.upgradeAuthority.getAndRequireEquals()
      );
    }

    /**
     * Upgrades the contract's verification key using the Upgrade Authority Contract.
     * @param vk The new verification key.
     */
    @method
    async upgradeVerificationKey(vk: VerificationKey) {
      await this.ensureOwnerSignature();
      const upgradeContract = await this.getUpgradeContract();
      // fetchAccount() should be called before calling this method
      // this code should be changed after verification key precondition
      // will be added to the Mina protocol
      const previousVerificationKeyHash = Provable.witness(Field, () => {
        const account = Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error(
            NFTWhitelistedAdminContractErrors.verificationKeyHashNotFound
          );
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash,
      });
      const upgradeAuthorityAnswer = await upgradeContract.verifyUpgradeData(
        data
      );
      upgradeAuthorityAnswer.isVerified.assertTrue(
        NFTWhitelistedAdminContractErrors.cannotUpgradeVerificationKey
      );
      this.account.verificationKey.set(vk);
      this.upgradeAuthority.set(
        upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(
          this.upgradeAuthority.getAndRequireEquals()
        )
      );
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }

    /**
     * Determines if the minting request can proceed by checking if the owner and sender are whitelisted.
     * @param mintRequest The minting request parameters.
     * @returns A `MintParamsOption` indicating if minting is allowed.
     */
    @method.returns(MintParamsOption)
    async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.isPaused.assertFalse("Contract is paused");

      const whitelist = this.whitelist.getAndRequireEquals();
      const ownerAmount = await whitelist.getWhitelistedAmount(
        mintRequest.owner
      );
      ownerAmount.isSome.assertTrue(
        NFTWhitelistedAdminContractErrors.notWhitelisted
      );

      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = Bool(true); // prevent memo and fee change
      const senderAmount = await whitelist.getWhitelistedAmount(sender);
      senderAmount.isSome.assertTrue(
        NFTWhitelistedAdminContractErrors.senderNotWhitelisted
      );
      const mintParams = await Provable.witnessAsync(
        MintParamsOption,
        async () => {
          // only creator can mint
          // can be changed in the future to support CMS
          return MintParamsOption.none();
        }
      );
      return mintParams;
    }

    /**
     * Checks whether the NFT's state can be updated, ensuring the new owner is whitelisted.
     * @param input The current state of the NFT.
     * @param output The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is permitted.
     */
    @method.returns(Bool)
    async canUpdate(input: NFTState, output: NFTState) {
      const whitelist = this.whitelist.getAndRequireEquals();
      return (await whitelist.getWhitelistedAmount(output.owner)).isSome.and(
        (await whitelist.getWhitelistedAmount(input.owner)).isSome
      );
    }

    /**
     * Verifies if the transfer between `from` and `to` addresses is allowed based on whitelist status.
     * @param address The address of the NFT.
     * @param from The sender's public key.
     * @param to The receiver's public key.
     * @returns A `Bool` indicating whether the transfer is permitted.
     */
    @method.returns(Bool)
    async canTransfer(address: PublicKey, from: PublicKey, to: PublicKey) {
      const whitelist = this.whitelist.getAndRequireEquals();
      return (await whitelist.getWhitelistedAmount(to)).isSome.and(
        (await whitelist.getWhitelistedAmount(from)).isSome
      );
    }

    /**
     * Determines if the seller is permitted to list the NFT for sale at the specified price.
     * @param address The address of the NFT.
     * @param seller The seller's public key.
     * @param price The price at which the NFT is being sold.
     * @returns A `Bool` indicating whether the sale is permissible.
     */
    @method.returns(Bool)
    async canSell(address: PublicKey, seller: PublicKey, price: UInt64) {
      const whitelist = this.whitelist.getAndRequireEquals();
      const allowedPrice = (
        await whitelist.getWhitelistedAmount(seller)
      ).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      return price.lessThanOrEqual(allowedPrice);
    }

    /**
     * Determines if the buyer and seller are allowed to perform the transaction at the specified price.
     * @param address The address of the NFT.
     * @param seller The seller's public key.
     * @param buyer The buyer's public key.
     * @param price The price at which the NFT is being bought.
     * @returns A `Bool` indicating whether the purchase is permitted.
     */
    @method.returns(Bool)
    async canBuy(
      address: PublicKey,
      seller: PublicKey,
      buyer: PublicKey,
      price: UInt64
    ) {
      const whitelist = this.whitelist.getAndRequireEquals();
      const allowedBuyerPrice = (
        await whitelist.getWhitelistedAmount(buyer)
      ).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      const allowedSellerPrice = (
        await whitelist.getWhitelistedAmount(seller)
      ).assertSome(NFTWhitelistedAdminContractErrors.notWhitelisted);
      return price
        .lessThanOrEqual(allowedBuyerPrice)
        .and(price.lessThanOrEqual(allowedSellerPrice));
    }

    /**
     * Updates the whitelist's Merkle root and the associated off-chain storage reference.
     * @param whitelistRoot The new whitelist root.
     * @param storage The storage reference for the whitelist data.
     */
    @method
    async updateMerkleMapRoot(whitelist: Whitelist) {
      await this.ensureOwnerSignature();
      this.whitelist.set(whitelist);
      this.emitEvent("updateWhitelist", whitelist);
    }

    /**
     * Pauses the contract, preventing certain administrative actions from being performed.
     */
    @method
    async pause(): Promise<void> {
      await this.ensureOwnerSignature();
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.canPause.assertTrue();
      pauseData.isPaused = Bool(true);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
    }

    /**
     * Resumes the contract, allowing administrative actions to be performed again.
     */
    @method
    async resume(): Promise<void> {
      await this.ensureOwnerSignature();
      const pauseData = PauseData.unpack(this.pauseData.getAndRequireEquals());
      pauseData.canPause.assertTrue();
      pauseData.isPaused = Bool(false);
      this.pauseData.set(pauseData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
    }

    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner The public key of the new admin.
     * @returns The public key of the old owner.
     */
    @method.returns(PublicKey)
    async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
      await this.ensureOwnerSignature();
      const oldOwner = this.admin.getAndRequireEquals();
      this.admin.set(newOwner);
      this.emitEvent(
        "ownershipChange",
        new OwnershipChangeEvent({
          oldOwner,
          newOwner,
        })
      );
      return oldOwner;
    }
  }

  return NFTWhitelistedAdmin;
}
