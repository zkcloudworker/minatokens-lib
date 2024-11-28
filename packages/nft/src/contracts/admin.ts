import { Bool, PublicKey, SmartContract, UInt64 } from "o1js";
import { MintParamsOption, MintRequest, NFTState } from "./types.js";
export { NFTAdminBase, NFTAdminContractConstructor };

/**
 * The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol.
 * It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.
 */
type NFTAdminBase = SmartContract & {
  /**
   * Validates whether a new NFT can be minted based on the provided `MintRequest`.
   *
   * @param nft - The mint request containing details of the NFT to be minted.
   * @returns A `Promise` resolving to `MintParamsOption`, containing mint parameters if minting is allowed, or an empty option if not.
   */
  canMint(nft: MintRequest): Promise<MintParamsOption>;

  /**
   * Checks if an NFT can be updated from its current state (`input`) to a new state (`output`).
   *
   * @param input - The current state of the NFT.
   * @param output - The desired new state of the NFT.
   * @returns A `Promise` resolving to a `Bool` indicating whether the update is permitted.
   */
  canUpdate(input: NFTState, output: NFTState): Promise<Bool>;

  /**
   * Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.
   *
   * @param address - The public key of the NFT contract address.
   * @param from - The public key of the current owner.
   * @param to - The public key of the intended new owner.
   * @returns A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.
   */
  canTransfer(
    address: PublicKey,
    from: PublicKey,
    to: PublicKey
  ): Promise<Bool>;

  /**
   * Validates if an NFT can be listed for sale by a seller at a specified price.
   *
   * @param address - The public key of the NFT contract address.
   * @param seller - The public key of the seller.
   * @param price - The price at which the NFT is to be sold.
   * @returns A `Promise` resolving to a `Bool` indicating whether the sale is permissible.
   */
  canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<Bool>;

  /**
   * Checks whether a buyer is allowed to purchase an NFT from a seller at a given price.
   *
   * @param address - The public key of the NFT contract address.
   * @param seller - The public key of the seller.
   * @param buyer - The public key of the buyer.
   * @param price - The price at which the NFT is being bought.
   * @returns A `Promise` resolving to a `Bool` indicating whether the purchase is allowed.
   */
  canBuy(
    address: PublicKey,
    seller: PublicKey,
    buyer: PublicKey,
    price: UInt64
  ): Promise<Bool>;
};

/**
 * Defines a constructor for contracts implementing `NFTAdminBase`, accepting an `admin` public key and returning an instance of `NFTAdminBase`.
 *
 * @param admin - The public key of the contract's administrator.
 * @returns An instance of `NFTAdminBase`.
 */
type NFTAdminContractConstructor = new (admin: PublicKey) => NFTAdminBase;
