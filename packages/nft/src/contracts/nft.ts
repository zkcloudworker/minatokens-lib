import {
  Field,
  PublicKey,
  Bool,
  SmartContract,
  method,
  state,
  State,
  VerificationKey,
  AccountUpdate,
} from "o1js";
import { Storage } from "@minatokens/storage";
import {
  NFTData,
  NFTDataPacked,
  NFTState,
  NFTImmutableState,
  UpdateEvent,
  TransferEvent,
  OfferEvent,
  BuyEvent,
  UpgradeVerificationKeyEvent,
  PausableContract,
  PauseEvent,
  NFTOraclePreconditions,
  OwnershipChangeEvent,
} from "../interfaces/index.js";

export { NFT };

const NftErrors = {
  onlyOwnerCanUpgradeVerificationKey: "Only owner can upgrade verification key",
  cannotChangeMetadataVerificationKeyHash:
    "Cannot change metadata verification key hash",
  cannotChangeOwner: "Cannot change owner",
  cannotChangeStorage: "Cannot change storage",
  cannotChangePrice: "Cannot change price",
  cannotChangePauseState: "Cannot change pause state",
  noPermissionToPause: "No permission to pause",
  nftAlreadyPaused: "NFT is already paused",
  nftIsNotPaused: "NFT is not paused",
  nftIsPaused: "NFT is paused",
  cannotChangeName: "Cannot change name",
  cannotChangeMetadata: "Cannot change metadata",
  noMetadataVerificationKey: "No metadata verification key",
  noPermissionToSell: "No permission to sell",
  noPermissionToBuy: "No permission to buy",
  noPermissionToChangePrice: "No permission to change price",
};

/**
 * The NFT Contract represents an individual NFT within a collection.
 *
 * It manages the state and behavior of a single NFT, including ownership, metadata,
 * storage, pricing, and permissions. The contract provides functionality for updating
 * NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs,
 * upgrading the verification key, and pausing or resuming the NFT.
 */
class NFT extends SmartContract implements PausableContract {
  /** The name of the NFT (`Field`). */
  @state(Field) name = State<Field>();

  /** The metadata associated with the NFT (`Field`). */
  @state(Field) metadata = State<Field>();

  /** Holds off-chain storage information, e.g., IPFS hash (`Storage`). */
  @state(Storage) storage = State<Storage>();

  /** A packed field containing additional NFT data and flags (`Field`). */
  @state(NFTDataPacked) packedData = State<NFTDataPacked>();

  /** The hash of the verification key used for metadata proofs (`Field`). */
  @state(Field) metadataVerificationKeyHash = State<Field>();

  /** Events emitted by the NFT contract. */
  events = {
    update: UpdateEvent,
    transfer: OwnershipChangeEvent,
    approve: PublicKey,
    offer: OfferEvent,
    buy: BuyEvent,
    upgradeVerificationKey: UpgradeVerificationKeyEvent,
    pause: PauseEvent,
    resume: PauseEvent,
  };

  /**
   * Ensures that the transaction is authorized by the current owner.
   *
   * @returns A signed account update for the owner.
   */
  async ensureOwnerSignature(): Promise<AccountUpdate> {
    const owner = NFTData.unpack(this.packedData.getAndRequireEquals()).owner;
    const ownerUpdate = AccountUpdate.createSigned(owner);
    ownerUpdate.body.useFullCommitment = Bool(true); // prevent memo and fee change
    // We do not accept signature of the owners which are contracts
    // Contract owners should use update method with preconditions
    ownerUpdate.body.preconditions.account.provedState.isSome = Bool(false);
    return ownerUpdate;
  }

  /**
   * Updates the NFT's state with provided proofs and permissions.
   *
   * @param input - The current state of the NFT (`NFTState`).
   * @param output - The desired new state of the NFT (`NFTState`).
   * @param creator - The public key of the creator (`PublicKey`).
   * @returns The hash of the metadata verification key (`Field`).
   */
  @method.returns(Field)
  async update(
    input: NFTState,
    output: NFTState,
    creator: PublicKey
  ): Promise<Field> {
    const name = this.name.getAndRequireEquals();
    const metadata = this.metadata.getAndRequireEquals();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    const owner = data.owner;

    // Oracle preconditions
    const oracleUpdate = AccountUpdate.create(
      input.oracle.publicKey, // in case publicKey is empty, this AccountUpdate will NOT be created
      input.oracle.tokenId
    );
    oracleUpdate.body.preconditions.account.state = input.oracle.state;
    oracleUpdate.body.preconditions.account.balance.isSome = Bool(true);
    oracleUpdate.body.preconditions.account.balance.value.lower =
      input.oracle.balanceLower;
    oracleUpdate.body.preconditions.account.balance.value.upper =
      input.oracle.balanceUpper;
    oracleUpdate.body.preconditions.account.nonce.isSome = Bool(true);
    oracleUpdate.body.preconditions.account.nonce.value.lower =
      input.oracle.nonceLower;
    oracleUpdate.body.preconditions.account.nonce.value.upper =
      input.oracle.nonceUpper;
    oracleUpdate.body.preconditions.account.actionState =
      input.oracle.actionState;

    // it is not part of the oracleUpdate, it is always checked
    this.network.globalSlotSinceGenesis.requireBetween(
      input.oracle.lowerSlot,
      input.oracle.upperSlot
    );

    const storage = this.storage.getAndRequireEquals();
    const metadataVerificationKeyHash =
      this.metadataVerificationKeyHash.getAndRequireEquals();
    // Check that the metadata verification key exists
    metadataVerificationKeyHash.assertNotEquals(
      Field(0),
      NftErrors.noMetadataVerificationKey
    );

    // We do not check if the NFT is paused here
    // It is the responsibility of metadata zkProgram to check if the NFT is paused,
    // similar to data.isPaused.assertFalse(NftErrors.nftIsPaused);

    // Assert that the public input matches the NFT state
    NFTState.assertEqual(
      input,
      new NFTState({
        immutableState: new NFTImmutableState({
          canChangeOwnerByProof: data.canChangeOwnerByProof,
          canTransfer: data.canTransfer,
          canChangeMetadata: data.canChangeMetadata,
          canChangePrice: data.canChangePrice,
          canChangeStorage: data.canChangeStorage,
          canChangeName: data.canChangeName,
          canChangeMetadataVerificationKeyHash:
            data.canChangeMetadataVerificationKeyHash,
          canPause: data.canPause,
          address: this.address,
          tokenId: this.tokenId,
          id: data.id,
        }),
        name,
        metadata,
        storage,
        owner,
        approved: data.approved,
        version: data.version,
        isPaused: data.isPaused,
        metadataVerificationKeyHash,
        creator,
        oracle: input.oracle,
      })
    );

    // assert that the read-only fields are not changed
    input.creator.assertEquals(output.creator);
    NFTOraclePreconditions.assertEqual(input.oracle, output.oracle);

    // Check permissions and set new state
    name
      .equals(output.name)
      .not()
      .and(data.canChangeName.not())
      .assertFalse(NftErrors.cannotChangeName);
    this.name.set(output.name);

    metadata
      .equals(output.metadata)
      .not()
      .and(data.canChangeMetadata.not())
      .assertFalse(NftErrors.cannotChangeMetadata);
    this.metadata.set(output.metadata);

    metadataVerificationKeyHash
      .equals(output.metadataVerificationKeyHash)
      .not()
      .and(data.canChangeMetadataVerificationKeyHash.not())
      .assertFalse(NftErrors.cannotChangeMetadataVerificationKeyHash);
    this.metadataVerificationKeyHash.set(output.metadataVerificationKeyHash);

    owner
      .equals(output.owner)
      .not()
      .and(data.canChangeOwnerByProof.not())
      .assertFalse(NftErrors.cannotChangeOwner);

    Storage.equals(storage, output.storage)
      .not()
      .and(data.canChangeStorage.not())
      .assertFalse(NftErrors.cannotChangeStorage);
    this.storage.set(output.storage);

    data.approved
      .equals(output.approved)
      .not()
      .and(data.canChangeOwnerByProof.not())
      .assertFalse(NftErrors.cannotChangeOwner);

    data.isPaused
      .equals(output.isPaused)
      .not()
      .and(data.canPause.not())
      .assertFalse(NftErrors.cannotChangePauseState);

    // recursive proofs can increase the version by more than 1
    output.version.assertGreaterThan(data.version);

    data.owner = output.owner;
    data.approved = output.approved;
    data.version = output.version;

    this.packedData.set(data.pack());

    const event = new UpdateEvent({
      name: output.name,
      metadata: output.metadata,
      storage: output.storage,
      owner: output.owner,
      approved: output.approved,
      version: output.version,
      isPaused: output.isPaused,
      metadataVerificationKeyHash: output.metadataVerificationKeyHash,
    });
    this.emitEvent("update", event);
    return metadataVerificationKeyHash;
  }

  // /**
  //  * Lists the NFT for sale at a specified price.
  //  *
  //  * @param price - The price at which to sell the NFT (`UInt64`).
  //  * @param seller - The public key of the seller (`PublicKey`).
  //  * @returns An event emitted after the NFT is listed for sale (`SellEvent`).
  //  */
  // @method.returns(OfferEvent)
  // async offer(price: UInt64, seller: PublicKey): Promise<OfferEvent> {
  //   this.owner.getAndRequireEquals().assertEquals(seller);
  //   const data = NFTData.unpack(this.packedData.getAndRequireEquals());
  //   data.isPaused.assertFalse(NftErrors.nftIsPaused);
  //   data.canTransfer.assertTrue(NftErrors.noPermissionToSell);
  //   data.canChangePrice.assertTrue(NftErrors.noPermissionToChangePrice);
  //   const version = data.version.add(1);
  //   data.version = version;
  //   data.price = price;
  //   this.packedData.set(data.pack());
  //   const event = new OfferEvent({
  //     seller,
  //     price,
  //     version,
  //     address: this.address,
  //   });
  //   this.emitEvent("offer", event);
  //   return event;
  // }

  // /**
  //  * Purchases the NFT, transferring ownership and handling payment.
  //  *
  //  * @param price - The price at which to buy the NFT (`UInt64`).
  //  * @param buyer - The public key of the buyer (`PublicKey`).
  //  * @returns An event emitted after the NFT is purchased (`BuyEvent`).
  //  */
  // @method.returns(BuyEvent)
  // async buy(price: UInt64, buyer: PublicKey): Promise<BuyEvent> {
  //   const owner = this.owner.getAndRequireEquals();
  //   const data = NFTData.unpack(this.packedData.getAndRequireEquals());
  //   data.price.equals(UInt64.zero).assertFalse(); // the NFT is for sale
  //   data.price.assertEquals(price); // price is correct
  //   data.isPaused.assertFalse(NftErrors.nftIsPaused);
  //   data.canTransfer.assertTrue(NftErrors.noPermissionToBuy);
  //   const version = data.version.add(1);
  //   data.version = version;
  //   data.price = UInt64.zero; // reset price
  //   this.packedData.set(data.pack());

  //   this.owner.set(buyer);
  //   const event = new BuyEvent({
  //     seller: owner,
  //     buyer,
  //     price,
  //     version,
  //     address: this.address,
  //   });
  //   this.emitEvent("buy", event);
  //   this.emitEvent(
  //     "ownershipChange",
  //     new OwnershipChangeEvent({
  //       from: owner,
  //       to: buyer,
  //     })
  //   );
  //   return event;
  // }

  /**
   * Transfers ownership of the NFT from one user to another.
   *
   * @param from - The public key of the current owner (`PublicKey`).
   * @param to - The public key of the new owner (`PublicKey`).
   * @returns The public key of the old owner (`PublicKey`).
   */
  @method.returns(TransferEvent)
  async transfer(transferEvent: TransferEvent): Promise<TransferEvent> {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canTransfer.assertTrue(NftErrors.cannotChangeOwner);
    data.isPaused.assertFalse(NftErrors.nftIsPaused);
    const owner = data.owner;
    const approved = data.approved;
    transferEvent.transferByOwner = owner.equals(transferEvent.from);

    owner
      .equals(transferEvent.from)
      .or(
        approved
          .equals(transferEvent.from)
          .and(approved.equals(PublicKey.empty()).not())
      )
      .assertTrue(NftErrors.cannotChangeOwner);
    transferEvent.from = owner;
    transferEvent.approved = approved;
    const version = data.version.add(1);
    data.version = version;
    data.approved = PublicKey.empty();
    data.owner = transferEvent.to;
    this.packedData.set(data.pack());
    this.emitEvent(
      "transfer",
      new OwnershipChangeEvent({
        from: owner,
        to: transferEvent.to,
      })
    );

    return transferEvent;
  }

  /**
   * Transfers ownership of the NFT from one user to another.
   *
   * @param approved - The public key of the approved address (`PublicKey`).
   */
  @method
  async approveAddress(approved: PublicKey): Promise<void> {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.isPaused.assertFalse(NftErrors.nftIsPaused);
    data.approved = approved;
    this.packedData.set(data.pack());
    this.emitEvent("approve", approved);
  }

  /**
   * Upgrades the verification key used by the NFT contract.
   *
   * @param vk - The new verification key (`VerificationKey`).
   * @param sender - The public key of the sender (`PublicKey`).
   * @returns An event emitted after the verification key is upgraded (`UpgradeVerificationKeyEvent`).
   */
  @method.returns(UpgradeVerificationKeyEvent)
  async upgradeVerificationKey(
    vk: VerificationKey,
    sender: PublicKey
  ): Promise<UpgradeVerificationKeyEvent> {
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    const owner = data.owner;
    owner
      .equals(sender)
      .not()
      .and(data.requireOwnerSignatureToUpgrade.not())
      .assertFalse(NftErrors.onlyOwnerCanUpgradeVerificationKey);
    this.account.verificationKey.set(vk);

    const version = data.version.add(1);
    data.version = version;
    const event = new UpgradeVerificationKeyEvent({
      verificationKeyHash: vk.hash,
      address: this.address,
      tokenId: this.tokenId,
    });
    this.account.verificationKey.set(vk);
    this.packedData.set(data.pack());
    this.emitEvent("upgradeVerificationKey", event);
    return event;
  }

  /**
   * Pauses the NFT, disabling certain actions.
   *
   * @returns A promise that resolves when the NFT is paused.
   */
  @method
  async pause(): Promise<void> {
    // Only signature authorization is accepted, proof authorization is not allowed
    // Contract owners should use update method with preconditions to pause the NFT
    await this.ensureOwnerSignature();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NftErrors.noPermissionToPause);
    data.isPaused.assertFalse(NftErrors.nftAlreadyPaused);
    data.isPaused = Bool(true);
    this.packedData.set(data.pack());
    this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
  }

  /**
   * Resumes the NFT, re-enabling actions.
   *
   * @returns A promise that resolves when the NFT is resumed.
   */
  @method
  async resume(): Promise<void> {
    // Only signature authorization is accepted, proof authorization is not allowed
    // Contract owners should use update method with preconditions to resume the NFT
    await this.ensureOwnerSignature();
    const data = NFTData.unpack(this.packedData.getAndRequireEquals());
    data.canPause.assertTrue(NftErrors.noPermissionToPause);
    data.isPaused.assertTrue(NftErrors.nftIsNotPaused);
    data.isPaused = Bool(false);
    this.packedData.set(data.pack());
    this.emitEvent("resume", new PauseEvent({ isPaused: Bool(false) }));
  }
}
