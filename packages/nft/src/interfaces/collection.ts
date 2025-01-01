import { PublicKey, TokenContract } from "o1js";
import {
  TransferParams,
  UInt64Option,
  NFTTransactionContext,
  NFTStateStruct,
} from "./types.js";
import { NFTOwnerContractConstructor } from "./owner.js";
import { NFTApprovalContractConstructor } from "./approval.js";
import { NFTAdminContractConstructor } from "./admin.js";
export {
  NFTCollectionBase,
  NFTCollectionContractConstructor,
  DefineCollectionFactory,
};

/**
 * The `NFTCollectionBase` interface defines the functionalities required for managing an NFT collection on the Mina Protocol.
 * It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.
 */
type NFTCollectionBase = TokenContract & {
  /**
   * Transfers ownership of an NFT from contract without admin approval using a proof.
   *
   * @param address - The address of the NFT.
   * @param to - The recipient's public key.
   */
  transferByProof(params: TransferParams): Promise<void>;
  /**
   * Transfers ownership of an NFT from contract without admin approval.
   *
   * @param address - The address of the NFT.
   * @param to - The recipient's public key.
   * @param price - The price of the NFT.
   */
  transferBySignature(params: TransferParams): Promise<void>;

  /**
   * Transfers ownership of an NFT from contract without admin approval using a proof.
   *
   * @param address - The address of the NFT.
   * @param to - The recipient's public key.
   */
  approvedTransferByProof(params: TransferParams): Promise<void>;
  /**
   * Transfers ownership of an NFT from contract without admin approval.
   *
   * @param address - The address of the NFT.
   * @param to - The recipient's public key.
   * @param price - The price of the NFT.
   */
  approvedTransferBySignature(params: TransferParams): Promise<void>;

  /**
   * Returns the state of an NFT.
   *
   * @param address - The address of the NFT.
   * @returns The state of the NFT.
   */
  getNFTState(address: PublicKey): Promise<NFTStateStruct>;
};

/**
 * Defines a constructor for contracts implementing `NFTCollectionBase`, accepting an `address` public key and returning an instance of `NFTCollectionBase`.
 *
 * @param address - The contract's address.
 * @returns An instance of `NFTCollectionBase`.
 */
type NFTCollectionContractConstructor = new (
  address: PublicKey
) => NFTCollectionBase;

type DefineCollectionFactory = (params: {
  adminContract: () => NFTAdminContractConstructor;
  ownerContract: () => NFTOwnerContractConstructor;
  approvalContract: () => NFTApprovalContractConstructor;
}) => NFTCollectionContractConstructor;
