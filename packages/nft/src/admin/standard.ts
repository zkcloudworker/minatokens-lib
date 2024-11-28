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
} from "o1js";
import {
  MintRequest,
  NFTState,
  NFTAdminBase,
  MintParamsOption,
  UpgradeAuthorityBase,
  VerificationKeyUpgradeData,
  UpgradableContract,
  UpgradeAuthorityContractConstructor,
  PausableContract,
  PauseEvent,
  OwnershipChangeEvent,
  OwnableContract,
} from "../contracts/index.js";
export { NFTAdminContract, NFTAdminDeployProps };

interface NFTAdminDeployProps extends Exclude<DeployArgs, undefined> {
  admin: PublicKey;
  upgradeAuthority: PublicKey;
  uri: string;
  canPause: Bool;
  isPaused: Bool;
}

function NFTAdminContract(
  params: {
    upgradeContract?: UpgradeAuthorityContractConstructor;
  } = {}
) {
  const { upgradeContract } = params;

  /**
   * The **NFTAdmin** contract serves as the foundational administrative layer for NFT collections on the Mina Protocol.
   * It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management.
   * This contract can be extended by custom admin contracts to implement specific administrative logic,
   * ensuring flexibility while maintaining a standardized interface.
   */
  class NFTAdmin
    extends SmartContract
    implements
      NFTAdminBase,
      UpgradableContract,
      PausableContract,
      OwnableContract
  {
    /**
     * The public key of the contract's administrator.
     * This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.
     */
    @state(PublicKey) admin = State<PublicKey>();

    /**
     * The public key of the upgrade authority contract.
     * This is the contract responsible for validating and authorizing upgrades to the verification key.
     */
    @state(PublicKey) upgradeAuthority = State<PublicKey>();

    /**
     * A boolean flag indicating whether the contract is currently paused.
     * When `true`, certain operations are disabled.
     */
    @state(Bool) isPaused = State<Bool>();

    /**
     * A boolean flag indicating whether the contract has the ability to be paused.
     * This allows for disabling the pause functionality if desired.
     */
    @state(Bool) canPause = State<Bool>();

    /**
     * Deploys the contract with initial settings.
     * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
     */
    async deploy(props: NFTAdminDeployProps) {
      await super.deploy(props);
      this.admin.set(props.admin);
      this.upgradeAuthority.set(props.upgradeAuthority);
      this.isPaused.set(props.isPaused);
      this.canPause.set(props.canPause);
      this.account.zkappUri.set(props.uri);
      this.account.permissions.set({
        ...Permissions.default(),
        // Allow the upgrade authority to set the verification key even without a protocol upgrade,
        // enabling upgrades in case of o1js breaking changes.
        setVerificationKey:
          Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: Permissions.impossible(),
      });
    }

    /**
     * Contract events emitted during various operations.
     */
    events = {
      /** Emitted when the verification key is upgraded. */
      upgradeVerificationKey: Field,
      /** Emitted when the contract is paused. */
      pause: PauseEvent,
      /** Emitted when the contract is resumed. */
      resume: PauseEvent,
      /** Emitted when ownership of the contract changes. */
      ownershipChange: OwnershipChangeEvent,
    };

    /**
     * Ensures that the transaction is authorized by the contract owner.
     * @returns A signed `AccountUpdate` from the admin.
     */
    async ensureOwnerSignature(): Promise<AccountUpdate> {
      const sender = this.sender.getUnconstrained();
      const admin = this.admin.getAndRequireEquals();
      admin.assertEquals(sender);
      const adminUpdate = AccountUpdate.createSigned(admin);
      adminUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      return adminUpdate;
    }

    /**
     * Retrieves the associated upgrade authority contract.
     * @returns An instance of `UpgradeAuthorityBase`.
     * @throws If the upgrade contract is not provided.
     */
    async getUpgradeContract(): Promise<UpgradeAuthorityBase> {
      if (!upgradeContract) {
        throw Error("Upgrade contract not provided");
      }
      return new upgradeContract(this.upgradeAuthority.getAndRequireEquals());
    }

    /**
     * Upgrades the contract's verification key after validating with the upgrade authority.
     * @param vk - The new verification key to upgrade to.
     */
    @method
    async upgradeVerificationKey(vk: VerificationKey) {
      await this.ensureOwnerSignature();
      const upgradeContract = await this.getUpgradeContract();
      // Fetch the previous verification key hash
      const previousVerificationKeyHash = Provable.witness(Field, () => {
        const account = Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      // Create the upgrade data
      const data = new VerificationKeyUpgradeData({
        address: this.address,
        tokenId: this.tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash,
      });
      // Verify the upgrade data with the upgrade authority
      const upgradeAuthorityAnswer = await upgradeContract.verifyUpgradeData(
        data
      );
      upgradeAuthorityAnswer.isVerified.assertTrue(
        "Cannot upgrade verification key"
      );
      // Set the new verification key
      this.account.verificationKey.set(vk);
      // Update the upgrade authority if provided
      this.upgradeAuthority.set(
        upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(
          this.upgradeAuthority.getAndRequireEquals()
        )
      );
      // Emit the upgrade event
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }

    /**
     * Determines whether minting is allowed for the given request.
     * Returns mint parameters if allowed, or none if not allowed.
     * @param mintRequest - The minting request details.
     * @returns A `MintParamsOption` indicating if minting is permitted.
     */
    @method.returns(MintParamsOption)
    async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
      // Only the creator can mint by default
      return MintParamsOption.none();
    }

    /**
     * Checks whether the NFT state can be updated.
     * Typically returns true if the contract is not paused.
     * @param input - The current state of the NFT.
     * @param output - The desired new state of the NFT.
     * @returns A `Bool` indicating whether the update is allowed.
     */
    @method.returns(Bool)
    async canUpdate(input: NFTState, output: NFTState) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }

    /**
     * Determines whether a transfer between the specified addresses is permitted.
     * @param address - The NFT contract address.
     * @param from - The sender's public key.
     * @param to - The recipient's public key.
     * @returns A `Bool` indicating whether the transfer is allowed.
     */
    @method.returns(Bool)
    async canTransfer(address: PublicKey, from: PublicKey, to: PublicKey) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }

    /**
     * Determines whether the NFT can be listed for sale at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param price - The listing price.
     * @returns A `Bool` indicating whether the sale is permitted.
     */
    @method.returns(Bool)
    async canSell(address: PublicKey, seller: PublicKey, price: UInt64) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }

    /**
     * Determines whether the NFT can be purchased by the buyer from the seller at the given price.
     * @param address - The NFT contract address.
     * @param seller - The seller's public key.
     * @param buyer - The buyer's public key.
     * @param price - The purchase price.
     * @returns A `Bool` indicating whether the purchase is allowed.
     */
    @method.returns(Bool)
    async canBuy(
      address: PublicKey,
      seller: PublicKey,
      buyer: PublicKey,
      price: UInt64
    ) {
      const isPaused = this.isPaused.getAndRequireEquals();
      return isPaused.not();
    }

    /**
     * Pauses the contract, disabling certain administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    @method
    async pause(): Promise<void> {
      await this.ensureOwnerSignature();
      this.canPause.getAndRequireEquals().assertTrue();
      this.isPaused.set(Bool(true));
      this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
    }

    /**
     * Resumes the contract, re-enabling administrative actions.
     * Can only be called by the admin if `canPause` is `true`.
     */
    @method
    async resume(): Promise<void> {
      await this.ensureOwnerSignature();
      this.canPause.getAndRequireEquals().assertTrue();
      this.isPaused.set(Bool(false));
      this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
    }

    /**
     * Transfers ownership of the contract to a new admin.
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the previous owner.
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

  return NFTAdmin;
}
