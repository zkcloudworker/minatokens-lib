/**
 * The NFT Collection Contract is responsible for managing a collection of NFTs.
 * It handles minting new NFTs, transferring ownership, buying, selling,
 * and interfacing with Admin Contracts for additional functionalities.
 *
 * @module CollectionContract
 */

import {
  Field,
  PublicKey,
  AccountUpdate,
  Bool,
  method,
  state,
  State,
  DeployArgs,
  Permissions,
  TokenContract,
  AccountUpdateForest,
  VerificationKey,
  UInt32,
  UInt64,
  SmartContract,
  Mina,
  Provable,
  Struct,
} from "o1js";
import { NFT } from "./nft.js";
import {
  MintParams,
  MintRequest,
  CollectionData,
  CollectionDataPacked,
  NFTUpdateProof,
  NFTStateStruct,
} from "./types.js";
import {
  MintEvent,
  TransferEvent,
  OfferEvent,
  SaleEvent,
  BuyEvent,
  UpgradeVerificationKeyEvent,
  LimitMintingEvent,
  PauseNFTEvent,
} from "./events.js";
import { NFTAdminBase, NFTAdminContractConstructor } from "./admin.js";
import {
  UpgradeAuthorityBase,
  VerificationKeyUpgradeData,
  UpgradeAuthorityContractConstructor,
  UpgradableContract,
} from "@minatokens/upgradable";
import { PausableContract, PauseEvent } from "./pausable.js";
import { OwnableContract, OwnershipChangeEvent } from "./ownable.js";
import { nftVerificationKeys, SupportedNetworkId } from "../vk.js";
export {
  CollectionDeployProps,
  CollectionContract,
  CollectionErrors,
  CollectionStateStruct,
};

const CollectionErrors = {
  wrongMasterNFTaddress:
    "Master NFT address should be the same as the collection address",
  transferNotAllowed:
    "Transfers of tokens are not allowed, change the owner instead",
  collectionPaused: "Collection is currently paused",
  mintApprovalRequired: "Mint approval is required",
  mintApprovalNotRequired: "Mint approval is not required",
  cannotMintMasterNFT: "Only the creator can mint the Master NFT",
  cannotMint: "Admin contract did not provide permission to mint",
  noPermissionToPause: "Not allowed to pause collection",
  noPermissionToResume: "Not allowed to resume collection",
  collectionNotPaused: "Collection is not paused",
  transferApprovalRequired: "Transfer approval is required",
  transferApprovalNotRequired: "Transfer approval is not required",
  updateApprovalRequired: "Update approval is required",
  updateApprovalNotRequired: "Update approval is not required",
  noPermissionToChangeName: "Not allowed to change collection name",
  noPermissionToChangeBaseUri: "Not allowed to change collection base URI",
  noPermissionToChangeCreator: "Not allowed to change collection creator",
  noPermissionToChangeRoyalty: "Not allowed to change royalty fee",
  noPermissionToChangeTransferFee: "Not allowed to change transfer fee",
  noPermissionToSetAdmin: "Not allowed to set admin contract",
  cannotUpgradeVerificationKey: "Cannot upgrade verification key",
  creatorSignatureRequiredToUpgradeCollection:
    "Creator signature is required to upgrade collection",
  creatorSignatureRequiredToUpgradeNFT:
    "Creator signature is required to upgrade NFT",
  upgradeContractAddressNotSet: "Upgrade contract address is not set",
  adminContractAddressNotSet: "Admin contract address is not set",
};

interface CollectionDeployProps extends Exclude<DeployArgs, undefined> {
  collectionName: Field;
  creator: PublicKey;
  admin: PublicKey;
  baseURL: Field;
  symbol: string;
  url: string;
}

// The order of the fields is important; should be the same as in the Collection
class CollectionStateStruct extends Struct({
  collectionName: Field,
  creator: PublicKey,
  admin: PublicKey,
  baseURL: Field,
  packedData: CollectionDataPacked,
}) {}

/**
 * Creates a new NFT Collection Contract class.
 *
 * @param params - Constructor parameters including admin and upgrade contracts, and network ID.
 * @returns The Collection class extending TokenContract and implementing required interfaces.
 */
function CollectionContract(params: {
  adminContract: NFTAdminContractConstructor;
  upgradeContract: UpgradeAuthorityContractConstructor;
}) {
  const { adminContract, upgradeContract } = params;
  /**
   * The NFT Collection Contract manages a collection of NFTs.
   * It handles minting, transferring, buying, selling, and integrates with Admin Contracts.
   */
  class Collection
    extends TokenContract
    implements UpgradableContract, OwnableContract, PausableContract
  {
    /** The name of the NFT collection. */
    @state(Field) collectionName = State<Field>();
    /** The public key of the creator of the collection. */
    @state(PublicKey) creator = State<PublicKey>();
    /** The public key of the Admin Contract. */
    @state(PublicKey) admin = State<PublicKey>();
    /** The base URL for the metadata of the NFTs in the collection. */
    @state(Field) baseURL = State<Field>();
    /**
     * A packed data field containing additional collection parameters,
     * such as flags and fee configurations.
     */
    @state(CollectionDataPacked) packedData = State<CollectionDataPacked>();

    /**
     * Deploys the NFT Collection Contract with the initial settings.
     *
     * @param props - Deployment properties including collection name, creator, admin, baseURL, symbol, and URL.
     */
    async deploy(props: CollectionDeployProps): Promise<void> {
      await super.deploy(props);
      this.collectionName.set(props.collectionName);
      this.creator.set(props.creator);
      this.admin.set(props.admin);
      this.baseURL.set(props.baseURL);
      // Set the collection to be paused by default
      this.packedData.set(
        CollectionData.new({
          isPaused: true,
        }).pack()
      );
      this.account.zkappUri.set(props.url);
      this.account.tokenSymbol.set(props.symbol);
      this.account.permissions.set({
        ...Permissions.default(),
        // Allow the upgrade authority to set the verification key
        // even when there is no protocol upgrade
        setVerificationKey:
          Permissions.VerificationKey.proofDuringCurrentVersion(),
        setPermissions: Permissions.impossible(),
        access: Permissions.proof(),
        send: Permissions.proof(),
        setZkappUri: Permissions.none(),
        setTokenSymbol: Permissions.none(),
      });
    }

    /**
     * Initializes the collection with a master NFT and initial data.
     *
     * @param masterNFT - The master NFT parameters.
     * @param collectionData - Initial collection data including flags and configurations.
     */
    @method
    async initialize(masterNFT: MintParams, collectionData: CollectionData) {
      this.account.provedState.requireEquals(Bool(false));
      this.packedData.set(collectionData.pack());
      masterNFT.address
        .equals(this.address)
        .assertTrue(CollectionErrors.wrongMasterNFTaddress);
      await this._mint(masterNFT, collectionData);
    }

    /**
     * Defines the events emitted by the contract.
     */
    events = {
      mint: MintEvent,
      update: PublicKey,
      transfer: TransferEvent,
      offer: OfferEvent,
      sale: SaleEvent,
      buy: BuyEvent,
      approveBuy: BuyEvent,
      approveOffer: OfferEvent,
      approveSale: SaleEvent,
      approveTransfer: TransferEvent,
      approveMint: MintEvent,
      approveUpdate: PublicKey,
      upgradeNFTVerificationKey: UpgradeVerificationKeyEvent,
      upgradeVerificationKey: Field,
      limitMinting: LimitMintingEvent,
      pause: PauseEvent,
      resume: PauseEvent,
      pauseNFT: PauseNFTEvent,
      resumeNFT: PauseNFTEvent,
      ownershipChange: OwnershipChangeEvent,
      setName: Field,
      setBaseURL: Field,
      setRoyaltyFee: UInt32,
      setTransferFee: UInt64,
      setAdmin: PublicKey,
    };

    /**
     * Overrides the approveBase method to prevent transfers of tokens.
     *
     * @param forest - The account update forest.
     */
    async approveBase(forest: AccountUpdateForest) {
      throw Error(CollectionErrors.transferNotAllowed);
    }

    get getAdminContractConstructor() {
      return adminContract;
    }

    get getUpgradeContractConstructor() {
      return upgradeContract;
    }

    /**
     * Retrieves the Admin Contract instance.
     *
     * @returns The Admin Contract instance implementing NFTAdminBase.
     */
    getAdminContract(): NFTAdminBase {
      const admin = this.admin.getAndRequireEquals();
      admin
        .equals(PublicKey.empty())
        .assertFalse(CollectionErrors.adminContractAddressNotSet);
      return new this.getAdminContractConstructor(admin);
    }

    /**
     * Retrieves the Upgrade Authority Contract instance.
     *
     * @returns The Upgrade Authority Contract instance implementing UpgradeAuthorityBase.
     */
    async getUpgradeContract(): Promise<UpgradeAuthorityBase> {
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      collectionData.upgradeAuthority
        .equals(PublicKey.empty())
        .assertFalse(CollectionErrors.upgradeContractAddressNotSet);
      return new this.getUpgradeContractConstructor(
        collectionData.upgradeAuthority
      );
    }

    /**
     * Ensures that the transaction is authorized by the contract owner.
     *
     * @returns The AccountUpdate of the creator.
     */
    async ensureOwnerSignature(): Promise<AccountUpdate> {
      const sender = this.sender.getUnconstrained();
      const creator = this.creator.getAndRequireEquals();
      creator.assertEquals(sender);
      const creatorUpdate = AccountUpdate.createSigned(creator);
      creatorUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      return creatorUpdate;
    }

    /**
     * Ensures that the collection is not paused.
     *
     * @returns The current collection data.
     */
    async ensureNotPaused(): Promise<CollectionData> {
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      collectionData.isPaused.assertFalse(CollectionErrors.collectionPaused);
      return collectionData;
    }

    /**
     * Mints a new NFT directly by the creator.
     *
     * This method allows the creator of the collection to mint an NFT without requiring approval
     * from the admin contract. It ensures that the collection is not paused and that the caller
     * is the creator of the collection. A fee of 1 MINA is deducted from the creator's balance
     * to cover the cost of creating a new account.
     *
     * We do not constrain here the address of the NFT to allow for the Master NFT to be minted.
     * The Master NFT is the NFT with the same address as the Collection contract and it holds
     * the metadata for the collection. It can be minted only by the creator of the collection.
     *
     * @param params - The mint parameters containing details of the NFT to be minted.
     */

    @method async mintByCreator(params: MintParams): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint.assertTrue(
        CollectionErrors.mintApprovalNotRequired
      );
      const creatorUpdate = await this.ensureOwnerSignature();
      // Pay 1 MINA fee for a new account
      creatorUpdate.balance.subInPlace(1_000_000_000);
      await this._mint(params, collectionData);
    }

    /**
     * Mints a new NFT with approval.
     *
     * @param mintRequest - The minting request containing parameters and proofs.
     */
    @method async mint(mintRequest: MintRequest): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint.assertTrue(
        CollectionErrors.mintApprovalNotRequired
      );
      const adminContract = this.getAdminContract();
      // The admin contract checks that the sender is allowed to mint
      const mintParams = (await adminContract.canMint(mintRequest)).assertSome(
        CollectionErrors.cannotMint
      );

      // Prevent minting the Master NFT using this method
      mintParams.address
        .equals(this.address)
        .assertFalse(CollectionErrors.cannotMintMasterNFT);
      const event = await this._mint(mintParams, collectionData);
      this.emitEvent("approveMint", event);
    }

    /**
     * Internal method to mint an NFT.
     *
     * @param params - The mint parameters.
     * @param collectionData - The current collection data.
     * @returns The MintEvent emitted.
     */
    async _mint(
      params: MintParams,
      collectionData: CollectionData
    ): Promise<MintEvent> {
      const {
        name,
        address,
        owner,
        data,
        metadata,
        storage,
        metadataVerificationKeyHash,
        expiry,
      } = params;

      this.network.globalSlotSinceGenesis.requireBetween(UInt32.zero, expiry);
      data.version.assertEquals(UInt32.zero);
      const packedData = data.pack();
      const tokenId = this.deriveTokenId();

      const update = AccountUpdate.createSigned(address, tokenId);
      update.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      update.account.isNew.getAndRequireEquals().assertTrue();

      // Mint 1 NFT
      this.internal.mint({ address: update, amount: 1_000_000_000 });

      const verificationKey: VerificationKey = Provable.witness(
        VerificationKey,
        () => {
          // This code does NOT create a constraint on the verification key
          // as this witness can be replaced during runtime
          // We use devnet to get future compatibility https://github.com/o1-labs/o1js/pull/1938
          // As of writing this, 'testnet' is used in the o1js codebase
          const networkId =
            Mina.getNetworkId() === "mainnet" ? "mainnet" : "devnet";
          const verificationKey = new VerificationKey({
            data: nftVerificationKeys[networkId].vk.NFT.data,
            hash: Field(nftVerificationKeys[networkId].vk.NFT.hash),
          });
          const vkHash = NFT._verificationKey?.hash;
          if (
            !verificationKey ||
            !verificationKey.hash ||
            !verificationKey.data
          )
            throw Error("NFT verification key is incorrect");
          if (
            vkHash &&
            vkHash.equals(verificationKey.hash).toBoolean() === false
          )
            throw Error(
              "NFT verification key does not match the compiled verification key"
            );
          return verificationKey;
        }
      );

      const mainnetVerificationKeyHash = Field(
        nftVerificationKeys.mainnet.vk.NFT.hash
      );
      const devnetVerificationKeyHash = Field(
        nftVerificationKeys.devnet.vk.NFT.hash
      );
      const isMainnet = Provable.witness(Bool, () => {
        // This check does NOT create a constraint on the verification key
        // as this witness can be replaced during runtime
        // and is useful only for making sure that the verification key
        // of the NFT will match the compiled verification key of the NFT
        // at the time of the deployment of the Collection Contract
        return Bool(Mina.getNetworkId() === "mainnet");
      });
      // We check that the verification key hash is the same as the one
      // that was compiled at the time of the deployment
      verificationKey.hash.assertEquals(
        Provable.if(
          isMainnet,
          mainnetVerificationKeyHash,
          devnetVerificationKeyHash
        )
      );
      update.body.update.verificationKey = {
        isSome: Bool(true),
        value: verificationKey,
      };
      update.body.update.permissions = {
        isSome: Bool(true),
        value: {
          ...Permissions.default(),
          send: Permissions.proof(),
          // Allow the upgrade authority to set the verification key
          // even when there is no protocol upgrade
          setVerificationKey:
            Permissions.VerificationKey.proofDuringCurrentVersion(),
          setPermissions: Permissions.impossible(),
          access: Permissions.proof(),
          setZkappUri: Permissions.none(),
          setTokenSymbol: Permissions.none(),
        },
      };
      const initialState = new NFTStateStruct({
        name,
        metadata,
        owner,
        storage,
        packedData,
        metadataVerificationKeyHash,
      });

      update.body.update.appState = NFTStateStruct.toFields(initialState).map(
        (field) => ({
          isSome: Bool(true),
          value: field,
        })
      );
      const event = new MintEvent({
        initialState,
        address,
      });
      this.emitEvent("mint", event);
      return event;
    }

    /**
     * Updates the NFT without admin approval.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    @method async update(
      proof: NFTUpdateProof,
      vk: VerificationKey
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireUpdateApproval.assertFalse(
        CollectionErrors.updateApprovalRequired
      );
      await this._update(proof, vk);
    }

    /**
     * Updates the NFT with admin approval.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    @method async updateWithApproval(
      proof: NFTUpdateProof,
      vk: VerificationKey
    ): Promise<void> {
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      collectionData.isPaused.assertFalse(CollectionErrors.collectionPaused);
      collectionData.requireUpdateApproval.assertTrue(
        CollectionErrors.updateApprovalNotRequired
      );

      const event = await this._update(proof, vk);
      const adminContract = this.getAdminContract();
      const canUpdate = await adminContract.canUpdate(
        proof.publicInput,
        proof.publicOutput
      );
      canUpdate.assertTrue();
      this.emitEvent("approveUpdate", proof.publicInput.immutableState.address);
    }

    /**
     * Internal method to update an NFT.
     *
     * @param proof - The proof of the NFT update.
     * @param vk - The verification key.
     */
    async _update(proof: NFTUpdateProof, vk: VerificationKey): Promise<void> {
      const creator = this.creator.getAndRequireEquals();
      const tokenId = this.deriveTokenId();
      tokenId.assertEquals(proof.publicInput.immutableState.tokenId);
      const nft = new NFT(proof.publicInput.immutableState.address, tokenId);
      const metadataVerificationKeyHash = await nft.update(
        proof.publicInput,
        proof.publicOutput,
        creator
      );
      this.emitEvent("update", proof.publicInput.immutableState.address);
      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      // Verify the metadata update proof
      metadataVerificationKeyHash.assertEquals(vk.hash);
      proof.verify(vk);
    }

    /**
     * Lists an NFT for sale without approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     */
    @method async offer(address: PublicKey, price: UInt64): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireOfferApproval.assertFalse();
      await this._offer(address, price);
    }

    /**
     * Lists an NFT for sale with admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     */
    @method async offerWithApproval(
      address: PublicKey,
      price: UInt64
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireOfferApproval.assertTrue();

      const event = await this._offer(address, price);
      const adminContract = this.getAdminContract();
      const canSell = await adminContract.canSell(address, event.seller, price);
      canSell.assertTrue();
      this.emitEvent("approveOffer", event);
    }

    /**
     * Internal method to offer an NFT for sale.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to list the NFT.
     * @returns The OfferEvent emitted.
     */
    async _offer(address: PublicKey, price: UInt64): Promise<OfferEvent> {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const seller = this.sender.getUnconstrained();
      const sellerUpdate = AccountUpdate.createSigned(seller);
      sellerUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      const event = await nft.offer(price, seller);
      this.emitEvent("offer", event);
      return event;
    }

    /**
     * Purchases an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     */
    @method async buy(address: PublicKey, price: UInt64): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireBuyApproval.assertFalse();
      await this._buy(address, price, collectionData.royaltyFee);
    }

    /**
     * Purchases an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     */
    @method async buyWithApproval(
      address: PublicKey,
      price: UInt64
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireBuyApproval.assertTrue();

      const event = await this._buy(address, price, collectionData.royaltyFee);
      const adminContract = this.getAdminContract();
      const canBuy = await adminContract.canBuy(
        address,
        event.seller,
        event.buyer,
        price
      );
      canBuy.assertTrue();
      this.emitEvent("approveBuy", event);
    }

    /**
     * Internal method to purchase an NFT.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     * @param royaltyFee - The royalty fee percentage.
     * @returns The BuyEvent emitted.
     */
    async _buy(
      address: PublicKey,
      price: UInt64,
      royaltyFee: UInt32
    ): Promise<BuyEvent> {
      royaltyFee.assertLessThanOrEqual(UInt32.from(100_000)); // Max 100%
      const creator = this.creator.getAndRequireEquals();
      const buyer = this.sender.getUnconstrained();
      const buyerUpdate = AccountUpdate.createSigned(buyer);
      buyerUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const event = await nft.buy(price, buyer);

      // If the seller is the creator, then the commission is 0
      const isSellerCreator = event.seller.equals(creator);
      const commission = Provable.if(
        isSellerCreator,
        UInt64.zero,
        price.div(100_000).mul(UInt64.from(royaltyFee))
      );
      const payment = price.sub(commission);
      const sellerUpdate = AccountUpdate.create(event.seller);
      buyerUpdate.balance.subInPlace(payment);
      sellerUpdate.balance.addInPlace(
        Provable.if(
          sellerUpdate.account.isNew.getAndRequireEquals(),
          payment.sub(UInt64.from(1_000_000_000)),
          payment
        )
      );

      // If the seller is not the creator, then send the commission to the creator
      const creatorUpdate = AccountUpdate.createIf(
        isSellerCreator.not(),
        creator
      );
      creatorUpdate.balance.addInPlace(commission);
      buyerUpdate.balance.subInPlace(commission);
      this.emitEvent("buy", event);
      return event;
    }

    /**
     * Sells an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     * @param to - The public key of the buyer.
     */
    @method async sell(
      address: PublicKey,
      price: UInt64,
      buyer: PublicKey
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireSaleApproval.assertFalse();
      await this._sell(address, price, buyer, collectionData.royaltyFee);
    }

    /**
     * Sells an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     * @param to - The public key of the buyer.
     */
    @method async sellWithApproval(
      address: PublicKey,
      price: UInt64,
      buyer: PublicKey
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireSaleApproval.assertTrue();

      const event = await this._sell(
        address,
        price,
        buyer,
        collectionData.royaltyFee
      );
      const adminContract = this.getAdminContract();
      // The admin contract checks the same info in case of buy and sale methods
      // so we can use the same method canBuy()
      const canSell = await adminContract.canBuy(
        address,
        event.seller,
        buyer,
        price
      );
      canSell.assertTrue();
      this.emitEvent("approveSale", event);
    }

    /**
     * Internal method to purchase an NFT.
     *
     * @param address - The address of the NFT.
     * @param price - The price at which to purchase the NFT.
     * @param royaltyFee - The royalty fee percentage.
     * @returns The BuyEvent emitted.
     */
    async _sell(
      address: PublicKey,
      price: UInt64,
      buyer: PublicKey,
      royaltyFee: UInt32
    ): Promise<SaleEvent> {
      royaltyFee.assertLessThanOrEqual(UInt32.from(100_000)); // Max 100%
      const creator = this.creator.getAndRequireEquals();
      const seller = this.sender.getUnconstrained();
      const sellerUpdate = AccountUpdate.createSigned(seller);
      sellerUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change

      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const oldOwner = await nft.transfer(seller, buyer);
      oldOwner.assertEquals(seller);

      // If the seller is the creator, then the commission is 0
      const isSellerCreator = seller.equals(creator);
      const commission = Provable.if(
        isSellerCreator,
        UInt64.zero,
        price.div(100_000).mul(UInt64.from(royaltyFee))
      );

      // If the seller is not the creator, then send the commission to the creator
      const creatorUpdate = AccountUpdate.createIf(
        isSellerCreator.not(),
        creator
      );
      creatorUpdate.balance.addInPlace(commission);
      sellerUpdate.balance.subInPlace(commission);
      const saleEvent = new SaleEvent({
        seller,
        buyer,
        price,
        address,
      });
      this.emitEvent("sale", saleEvent);
      return saleEvent;
    }

    /**
     * Transfers ownership of an NFT without admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    @method async transfer(address: PublicKey, to: PublicKey): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertFalse(
        CollectionErrors.transferApprovalRequired
      );
      await this._transfer(address, to, collectionData.transferFee);
    }

    /**
     * Transfers ownership of an NFT with admin approval.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     */
    @method async transferWithApproval(
      address: PublicKey,
      to: PublicKey
    ): Promise<void> {
      const collectionData = await this.ensureNotPaused();
      collectionData.requireTransferApproval.assertTrue(
        CollectionErrors.transferApprovalNotRequired
      );

      const event = await this._transfer(
        address,
        to,
        collectionData.transferFee
      );
      const adminContract = this.getAdminContract();
      const canTransfer = await adminContract.canTransfer(
        address,
        event.from,
        event.to
      );
      canTransfer.assertTrue();
      this.emitEvent("approveTransfer", event);
    }

    /**
     * Internal method to transfer an NFT.
     *
     * @param address - The address of the NFT.
     * @param to - The recipient's public key.
     * @param transferFee - The transfer fee amount.
     * @returns The TransferEvent emitted.
     */
    async _transfer(
      address: PublicKey,
      to: PublicKey,
      transferFee: UInt64
    ): Promise<TransferEvent> {
      const sender = this.sender.getUnconstrained();
      const senderUpdate = AccountUpdate.createSigned(sender);
      senderUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
      senderUpdate.send({
        to: this.creator.getAndRequireEquals(),
        amount: transferFee,
      });
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      const oldOwner = await nft.transfer(sender, to);
      oldOwner.assertEquals(sender);
      const transferEvent = new TransferEvent({
        from: oldOwner,
        to,
        address,
      });
      this.emitEvent("transfer", transferEvent);
      return transferEvent;
    }

    /**
     * Upgrades the verification key of a specific NFT.
     *
     * @param address - The address of the NFT.
     * @param vk - The new verification key.
     */
    @method
    async upgradeNFTVerificationKey(
      address: PublicKey,
      vk: VerificationKey
    ): Promise<void> {
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      const sender = this.sender.getAndRequireSignature();
      const creator = this.creator.getAndRequireEquals();
      creator
        .equals(sender)
        .or(collectionData.requireCreatorSignatureToUpgradeNFT.not())
        .assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeNFT);
      const upgradeContract = await this.getUpgradeContract();
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      // fetchAccount() should be called before calling this method
      // this code should be changed after verification key precondition
      // will be added to the Mina protocol
      const previousVerificationKeyHash = Provable.witness(Field, () => {
        const account = Mina.getAccount(address, tokenId);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
        }
        return vkHash;
      });
      const data = new VerificationKeyUpgradeData({
        address: address,
        tokenId: tokenId,
        previousVerificationKeyHash,
        newVerificationKeyHash: vk.hash,
      });
      const upgradeAuthorityAnswer = await upgradeContract.verifyUpgradeData(
        data
      );
      upgradeAuthorityAnswer.isVerified.assertTrue(
        CollectionErrors.cannotUpgradeVerificationKey
      );
      const event = await nft.upgradeVerificationKey(vk, sender);
      this.emitEvent("upgradeNFTVerificationKey", event);
    }

    /**
     * Upgrades the verification key of the collection contract.
     *
     * @param vk - The new verification key.
     */
    @method
    async upgradeVerificationKey(vk: VerificationKey): Promise<void> {
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      const sender = this.sender.getAndRequireSignature();
      const creator = this.creator.getAndRequireEquals();
      creator
        .equals(sender)
        .or(collectionData.requireCreatorSignatureToUpgradeCollection.not())
        .assertTrue(
          CollectionErrors.creatorSignatureRequiredToUpgradeCollection
        );

      const upgradeContract = await this.getUpgradeContract();
      // fetchAccount() should be called before calling this method
      // this code should be changed after verification key precondition
      // will be added to the Mina protocol as this code does NOT
      // create a constraint on the verification key
      const previousVerificationKeyHash = Provable.witness(Field, () => {
        const account = Mina.getAccount(this.address);
        const vkHash = account.zkapp?.verificationKey?.hash;
        if (!vkHash) {
          throw Error("Verification key hash not found");
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
        CollectionErrors.cannotUpgradeVerificationKey
      );
      collectionData.upgradeAuthority =
        upgradeAuthorityAnswer.nextUpgradeAuthority.orElse(
          collectionData.upgradeAuthority
        );
      this.account.verificationKey.set(vk);

      this.packedData.set(collectionData.pack());
      this.emitEvent("upgradeVerificationKey", vk.hash);
    }

    /**
     * Limits further minting of NFTs in the collection.
     */
    @method
    async limitMinting(): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canMint = Bool(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent(
        "limitMinting",
        new LimitMintingEvent({ mintingLimited: Bool(true) })
      );
    }

    /**
     * Pauses the collection, disabling certain actions.
     */
    @method
    async pause(): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToPause);
      collectionData.isPaused = Bool(true);
      this.packedData.set(collectionData.pack());
      this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
    }

    /**
     * Resumes the collection, re-enabling actions.
     */
    @method
    async resume(): Promise<void> {
      /*
      Should we have a mechanism where everyone can resume the collection after some time period
      to prevent pausing it indefinitely?
      We can define maxPausePeriod and if the collection is paused for the maxPausePeriod time
      then anyone can resume it.
      */
      await this.ensureOwnerSignature();
      const collectionData = CollectionData.unpack(
        this.packedData.getAndRequireEquals()
      );
      collectionData.canPause.assertTrue(CollectionErrors.noPermissionToResume);
      collectionData.isPaused.assertTrue(CollectionErrors.collectionNotPaused);
      collectionData.isPaused = Bool(false);
      this.packedData.set(collectionData.pack());
      this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
    }

    /**
     * Pauses a specific NFT, disabling its actions.
     *
     * @param address - The address of the NFT to pause.
     */
    @method
    async pauseNFT(address: PublicKey): Promise<void> {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      await nft.pause();
      this.emitEvent(
        "pauseNFT",
        new PauseNFTEvent({ isPaused: Bool(true), address })
      );
    }

    /**
     * Resumes a specific NFT, re-enabling its actions.
     *
     * @param address - The address of the NFT to resume.
     */
    @method
    async resumeNFT(address: PublicKey): Promise<void> {
      const tokenId = this.deriveTokenId();
      const nft = new NFT(address, tokenId);
      await nft.resume();
      this.emitEvent(
        "resumeNFT",
        new PauseNFTEvent({ isPaused: Bool(false), address })
      );
    }

    /**
     * Sets a new name for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setName' event with the new name.
     *
     * @param name - The new name for the collection as a Field value
     * @throws {Error} If caller lacks permission to change name
     */
    @method
    async setName(name: Field): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeName.assertTrue(
        CollectionErrors.noPermissionToChangeName
      );
      this.collectionName.set(name);
      this.emitEvent("setName", name);
    }

    /**
     * Updates the base URL for the collection's metadata.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setBaseURL' event with the new URL.
     *
     * @param baseURL - The new base URL as a Field value
     * @throws {Error} If caller lacks permission to change base URI
     */
    @method
    async setBaseURL(baseURL: Field): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeBaseUri.assertTrue(
        CollectionErrors.noPermissionToChangeBaseUri
      );
      this.baseURL.set(baseURL);
      this.emitEvent("setBaseURL", baseURL);
    }

    /**
     * Sets a new admin address for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setAdmin' event with the new admin address.
     *
     * @param admin - The public key of the new admin
     * @throws {Error} If caller lacks permission to set admin
     */
    @method
    async setAdmin(admin: PublicKey): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canSetAdmin.assertTrue(
        CollectionErrors.noPermissionToSetAdmin
      );
      this.admin.set(admin);
      this.emitEvent("setAdmin", admin);
    }

    /**
     * Updates the royalty fee for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setRoyaltyFee' event with the new fee.
     *
     * @param royaltyFee - The new royalty fee as a UInt32 value
     * @throws {Error} If caller lacks permission to change royalty fee
     */
    @method
    async setRoyaltyFee(royaltyFee: UInt32): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeRoyalty.assertTrue(
        CollectionErrors.noPermissionToChangeRoyalty
      );
      collectionData.royaltyFee = royaltyFee;
      this.packedData.set(collectionData.pack());
      this.emitEvent("setRoyaltyFee", royaltyFee);
    }

    /**
     * Updates the transfer fee for the collection.
     * Requires owner signature and collection to not be paused.
     * Emits a 'setTransferFee' event with the new fee.
     *
     * @param transferFee - The new transfer fee as a UInt64 value
     * @throws {Error} If caller lacks permission to change transfer fee
     */
    @method
    async setTransferFee(transferFee: UInt64): Promise<void> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeTransferFee.assertTrue(
        CollectionErrors.noPermissionToChangeTransferFee
      );
      collectionData.transferFee = transferFee;
      this.packedData.set(collectionData.pack());
      this.emitEvent("setTransferFee", transferFee);
    }

    /**
     * Transfers ownership of the collection to a new owner.
     *
     * @param newOwner - The public key of the new owner.
     * @returns The public key of the old owner.
     */
    @method.returns(PublicKey)
    async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
      await this.ensureOwnerSignature();
      const collectionData = await this.ensureNotPaused();
      collectionData.canChangeCreator.assertTrue(
        CollectionErrors.noPermissionToChangeCreator
      );
      const oldOwner = this.creator.getAndRequireEquals();
      this.creator.set(newOwner);
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
  return Collection;
}
