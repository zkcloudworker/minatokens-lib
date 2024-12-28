import {
  AccountUpdate,
  Bool,
  DeployArgs,
  method,
  PublicKey,
  SmartContract,
  state,
  State,
  Permissions,
} from "o1js";
import { TransferEvent } from "./events.js";
export {
  NFTOwnerBase,
  NFTOwnerContractConstructor,
  NFTOwnerDeployProps,
  NFTStandardOwner,
};

/**
 * The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol.
 * It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.
 */
type NFTOwnerBase = SmartContract & {
  /**
   * Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.
   *
   * @param collectionAddress - The public key of the NFT collection address.
   * @param nftAddress - The public key of the NFT.
   * @param to - The public key of the intended new owner.
   * @returns A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.
   */
  canTransfer(transferEvent: TransferEvent): Promise<Bool>;
};

/**
 * Defines a constructor for contracts implementing `NFTOwnerBase`, accepting an `address` public key and returning an instance of `NFTOwnerBase`.
 *
 * @param address - The public key of the contract's owner.
 * @returns An instance of `NFTOwnerBase`.
 */
type NFTOwnerContractConstructor = new (address: PublicKey) => NFTOwnerBase;

interface NFTOwnerDeployProps extends Exclude<DeployArgs, undefined> {
  admin: PublicKey;
  uri: string;
}

/**
 * The **NFTStandardOwner** contract serves as the foundational owner layer for NFT collections on the Mina Protocol.
 * It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management.
 * This contract can be extended by custom admin contracts to implement specific administrative logic,
 * ensuring flexibility while maintaining a standardized interface.
 */
class NFTStandardOwner extends SmartContract implements NFTOwnerBase {
  /**
   * The public key of the contract's administrator.
   * This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.
   */
  @state(PublicKey) admin = State<PublicKey>();

  /**
   * Deploys the contract with initial settings.
   * @param props - Deployment properties including admin, upgradeAuthority, uri, canPause, and isPaused.
   */
  async deploy(props: NFTOwnerDeployProps) {
    await super.deploy(props);
    this.admin.set(props.admin);
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
   * Ensures that the transaction is authorized by the contract owner.
   * @returns A signed `AccountUpdate` from the admin.
   */
  async ensureOwnerSignature(): Promise<AccountUpdate> {
    const admin = this.admin.getAndRequireEquals();
    const adminUpdate = AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
    return adminUpdate;
  }

  @method.returns(Bool)
  async canTransfer(transferEvent: TransferEvent): Promise<Bool> {
    await this.ensureOwnerSignature();
    return Bool(true);
  }
}
