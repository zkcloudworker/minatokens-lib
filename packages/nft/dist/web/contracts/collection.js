/**
 * The NFT Collection Contract is responsible for managing a collection of NFTs.
 * It handles minting new NFTs, transferring ownership, buying, selling,
 * and interfacing with Admin Contracts for additional functionalities.
 *
 * @module CollectionContract
 */
import { __decorate, __metadata } from "tslib";
import { Field, PublicKey, AccountUpdate, Bool, method, state, State, Permissions, TokenContract, VerificationKey, UInt32, UInt64, Mina, Provable, } from "o1js";
import { NFT } from "./nft.js";
import { MintParams, MintRequest, TransferParams, CollectionData, NFTUpdateProof, NFTStateStruct, MintEvent, TransferEvent, ApproveEvent, OfferEvent, SaleEvent, BuyEvent, UpgradeVerificationKeyEvent, LimitMintingEvent, PauseNFTEvent, PauseEvent, OwnershipChangeEvent, UInt64Option, } from "../interfaces/index.js";
import { nftVerificationKeys } from "../vk.js";
export { CollectionFactory, CollectionErrors };
const CollectionErrors = {
    wrongMasterNFTaddress: "Master NFT address should be the same as the collection address",
    transferNotAllowed: "Transfers of tokens are not allowed, change the owner instead",
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
    creatorSignatureRequiredToUpgradeCollection: "Creator signature is required to upgrade collection",
    creatorSignatureRequiredToUpgradeNFT: "Creator signature is required to upgrade NFT",
    upgradeContractAddressNotSet: "Upgrade contract address is not set",
    adminContractAddressNotSet: "Admin contract address is not set",
    onlyOwnerCanUpgradeVerificationKey: "Only owner can upgrade verification key",
};
/**
 * Creates a new NFT Collection Contract class.
 *
 * @param params - Constructor parameters including admin and upgrade contracts, and network ID.
 * @returns The Collection class extending TokenContract and implementing required interfaces.
 */
function CollectionFactory(params) {
    const { adminContract, ownerContract, approvalContract } = params;
    /**
     * The NFT Collection Contract manages a collection of NFTs.
     * It handles minting, transferring, buying, selling, and integrates with Admin Contracts.
     */
    class Collection extends TokenContract {
        constructor() {
            super(...arguments);
            /** The name of the NFT collection. */
            this.collectionName = State();
            /** The public key of the creator of the collection. */
            this.creator = State();
            /** The public key of the Admin Contract. */
            this.admin = State();
            /** The base URL for the metadata of the NFTs in the collection. */
            this.baseURL = State();
            /**
             * A packed data field containing additional collection parameters,
             * such as flags and fee configurations.
             */
            this.packedData = State();
            /**
             * Defines the events emitted by the contract.
             */
            this.events = {
                mint: MintEvent,
                update: PublicKey,
                transfer: TransferEvent,
                approve: ApproveEvent,
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
        }
        /**
         * Deploys the NFT Collection Contract with the initial settings.
         *
         * @param props - Deployment properties including collection name, creator, admin, baseURL, symbol, and URL.
         */
        async deploy(props) {
            await super.deploy(props);
            this.collectionName.set(props.collectionName);
            this.creator.set(props.creator);
            this.admin.set(props.admin);
            this.baseURL.set(props.baseURL);
            // Set the collection to be paused by default
            this.packedData.set(CollectionData.new({
                isPaused: true,
            }).pack());
            this.account.zkappUri.set(props.url);
            this.account.tokenSymbol.set(props.symbol);
            this.account.permissions.set({
                ...Permissions.default(),
                // Allow the upgrade authority to set the verification key
                // even when there is no protocol upgrade
                setVerificationKey: Permissions.VerificationKey.proofDuringCurrentVersion(),
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
        async initialize(masterNFT, collectionData) {
            this.account.provedState.requireEquals(Bool(false));
            this.packedData.set(collectionData.pack());
            masterNFT.address
                .equals(this.address)
                .assertTrue(CollectionErrors.wrongMasterNFTaddress);
            await this._mint(masterNFT, collectionData);
        }
        /**
         * Overrides the approveBase method to prevent transfers of tokens.
         *
         * @param forest - The account update forest.
         */
        async approveBase(forest) {
            throw Error(CollectionErrors.transferNotAllowed);
        }
        /**
         * Retrieves the Admin Contract instance.
         *
         * @returns The Admin Contract instance implementing NFTAdminBase.
         */
        getAdminContract() {
            const admin = this.admin.getAndRequireEquals();
            const AdminContract = adminContract();
            return new AdminContract(admin);
        }
        /**
         * Retrieves the NFT Owner Contract instance.
         *
         * @returns The Owner Contract instance implementing NFTOwnerBase.
         */
        getOwnerContract(address) {
            const OwnerContract = ownerContract();
            return new OwnerContract(address);
        }
        /**
         * Retrieves the NFT Approval Contract instance.
         *
         * @returns The Approval Contract instance implementing NFTApprovalBase.
         */
        getApprovalContract(address) {
            const ApprovalContract = approvalContract();
            return new ApprovalContract(address);
        }
        /**
         * Ensures that the transaction is authorized by the creator.
         *
         * @returns The AccountUpdate of the creator.
         */
        async ensureCreatorSignature() {
            const creator = this.creator.getAndRequireEquals();
            const creatorUpdate = AccountUpdate.createSigned(creator);
            creatorUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
            return creatorUpdate;
        }
        /**
         * Ensures that the transaction is authorized by the NFT owner
         *
         * @returns The AccountUpdate of the NFT owner.
         */
        async ensureOwnerSignature(owner) {
            const ownerUpdate = AccountUpdate.createSigned(owner);
            ownerUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
            return ownerUpdate;
        }
        /**
         * Ensures that the collection is not paused.
         *
         * @returns The current collection data.
         */
        async ensureNotPaused() {
            const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
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
        async mintByCreator(params) {
            const collectionData = await this.ensureNotPaused();
            collectionData.canMint.assertTrue(CollectionErrors.mintApprovalNotRequired);
            const creatorUpdate = await this.ensureCreatorSignature();
            // Pay 1 MINA fee for a new account
            creatorUpdate.balance.subInPlace(1_000_000_000);
            await this._mint(params, collectionData);
        }
        /**
         * Mints a new NFT with approval.
         *
         * @param mintRequest - The minting request containing parameters and proofs.
         */
        async mint(mintRequest) {
            const collectionData = await this.ensureNotPaused();
            collectionData.canMint.assertTrue(CollectionErrors.mintApprovalNotRequired);
            const adminContract = this.getAdminContract();
            // The admin contract checks that the sender is allowed to mint
            const mintParams = (await adminContract.canMint(mintRequest)).assertSome(CollectionErrors.cannotMint);
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
        async _mint(params, collectionData) {
            const { name, address, data, metadata, storage, metadataVerificationKeyHash, expiry, } = params;
            this.network.globalSlotSinceGenesis.requireBetween(UInt32.zero, expiry);
            data.version.assertEquals(UInt32.zero);
            const packedData = data.pack();
            const tokenId = this.deriveTokenId();
            const update = AccountUpdate.createSigned(address, tokenId);
            update.body.useFullCommitment = Bool(true); // Prevent memo and fee change
            update.account.isNew.getAndRequireEquals().assertTrue();
            // Mint 1 NFT
            this.internal.mint({ address: update, amount: 1_000_000_000 });
            const verificationKey = Provable.witness(VerificationKey, () => {
                // This code does NOT create a constraint on the verification key
                // as this witness can be replaced during runtime
                // We use devnet to get future compatibility https://github.com/o1-labs/o1js/pull/1938
                // As of writing this, 'testnet' is used in the o1js codebase
                const networkId = Mina.getNetworkId() === "mainnet" ? "mainnet" : "devnet";
                const verificationKey = new VerificationKey({
                    data: nftVerificationKeys[networkId].vk.NFT.data,
                    hash: Field(nftVerificationKeys[networkId].vk.NFT.hash),
                });
                const vkHash = NFT._verificationKey?.hash;
                if (!verificationKey ||
                    !verificationKey.hash ||
                    !verificationKey.data)
                    throw Error("NFT verification key is incorrect");
                if (vkHash &&
                    vkHash.equals(verificationKey.hash).toBoolean() === false)
                    throw Error("NFT verification key does not match the compiled verification key");
                return verificationKey;
            });
            const mainnetVerificationKeyHash = Field(nftVerificationKeys.mainnet.vk.NFT.hash);
            const devnetVerificationKeyHash = Field(nftVerificationKeys.devnet.vk.NFT.hash);
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
            verificationKey.hash.assertEquals(Provable.if(isMainnet, mainnetVerificationKeyHash, devnetVerificationKeyHash));
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
                    setVerificationKey: Permissions.VerificationKey.proofDuringCurrentVersion(),
                    setPermissions: Permissions.impossible(),
                    access: Permissions.proof(),
                    setZkappUri: Permissions.none(),
                    setTokenSymbol: Permissions.none(),
                },
            };
            const initialState = new NFTStateStruct({
                name,
                metadata,
                storage,
                packedData,
                metadataVerificationKeyHash,
            });
            update.body.update.appState = NFTStateStruct.toFields(initialState).map((field) => ({
                isSome: Bool(true),
                value: field,
            }));
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
        async update(proof, vk) {
            const collectionData = await this.ensureNotPaused();
            collectionData.requireUpdateApproval.assertFalse(CollectionErrors.updateApprovalRequired);
            await this._update(proof, vk);
        }
        /**
         * Updates the NFT with admin approval.
         *
         * @param proof - The proof of the NFT update.
         * @param vk - The verification key.
         */
        async updateWithApproval(proof, vk) {
            const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
            collectionData.isPaused.assertFalse(CollectionErrors.collectionPaused);
            collectionData.requireUpdateApproval.assertTrue(CollectionErrors.updateApprovalNotRequired);
            const event = await this._update(proof, vk);
            const adminContract = this.getAdminContract();
            const canUpdate = await adminContract.canUpdate(proof.publicInput, proof.publicOutput);
            canUpdate.assertTrue();
            this.emitEvent("approveUpdate", proof.publicInput.immutableState.address);
        }
        /**
         * Internal method to update an NFT.
         *
         * @param proof - The proof of the NFT update.
         * @param vk - The verification key.
         */
        async _update(proof, vk) {
            const creator = this.creator.getAndRequireEquals();
            const tokenId = this.deriveTokenId();
            tokenId.assertEquals(proof.publicInput.immutableState.tokenId);
            const nft = new NFT(proof.publicInput.immutableState.address, tokenId);
            const metadataVerificationKeyHash = await nft.update(proof.publicInput, proof.publicOutput, creator);
            this.emitEvent("update", proof.publicInput.immutableState.address);
            // Verify the metadata update proof
            metadataVerificationKeyHash.assertEquals(vk.hash);
            proof.verify(vk);
        }
        /**
         * Transfers ownership of an NFT from contract without admin approval using a proof.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        async transferByProof(params) {
            const { address, from, to, price } = params;
            const collectionData = await this.ensureNotPaused();
            collectionData.requireTransferApproval.assertFalse(CollectionErrors.transferApprovalRequired);
            const transferEventDraft = new TransferEvent({
                from,
                to,
                collection: this.address,
                nft: address,
                fee: UInt64Option.none(), // will be added later
                price,
                transferByOwner: Bool(false), // will be added later
                approved: PublicKey.empty(), // will be added later
            });
            const transferEvent = await this._transfer({
                transferEventDraft,
                transferFee: collectionData.transferFee,
                royaltyFee: collectionData.royaltyFee,
            });
            const approvalContract = this.getApprovalContract(from);
            // This operation is not atomic and the owner or approval contract cannot rely on the fact
            // that it is being called by the Collection contract
            // It is the responsibility of the owner contract to maintain the state
            // that allow for escrow-like agreement between the buyer and the seller
            // in case of the selling and buying of the NFT and return 'true' only if the
            // payment is made or guaranteed by the deposit of the funds in the owner contract
            // or the owner contract is able to verify that it is being called by the Collection contract
            // by setting the flag in its state
            const canTransfer = await approvalContract.canTransfer(transferEvent);
            canTransfer.assertTrue();
        }
        // /**
        //  * Transfers ownership of an NFT from contract with admin approval.
        //  *
        //  * @param address - The address of the NFT.
        //  * @param to - The recipient's public key.
        //  */
        // @method async transferByProofWithApproval(
        //   address: PublicKey,
        //   from: PublicKey,
        //   to: PublicKey,
        //   price: UInt64Option
        // ): Promise<void> {
        //   const collectionData = await this.ensureNotPaused();
        //   collectionData.requireTransferApproval.assertTrue(
        //     CollectionErrors.transferApprovalNotRequired
        //   );
        //   const ownerContract = this.getOwnerContract(from);
        //   const canTransferApprovalByOwner = await ownerContract.canTransfer(
        //     this.address,
        //     address,
        //     to,
        //     price
        //   );
        //   canTransferApprovalByOwner.assertTrue();
        //   const event = await this._transfer(
        //     address,
        //     from,
        //     to,
        //     price,
        //     collectionData.transferFee,
        //     collectionData.royaltyFee
        //   );
        //   const adminContract = this.getAdminContract();
        //   const canTransferApprovalByAdmin = await adminContract.canTransfer(
        //     address,
        //     from,
        //     to,
        //     price
        //   );
        //   canTransferApprovalByAdmin.assertTrue();
        //   this.emitEvent("approveTransfer", event);
        // }
        /**
         * Transfers ownership of an NFT without admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        async approveAddress(nftAddress, approved) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(nftAddress, tokenId);
            const owner = await nft.approveAddress(approved);
            await this.ensureOwnerSignature(owner);
            this.emitEvent("approve", new ApproveEvent({ nftAddress, approved }));
        }
        /**
         * Transfers ownership of an NFT without admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        async approveAddressByProof(nftAddress, approved) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(nftAddress, tokenId);
            const owner = await nft.approveAddress(approved);
            const ownerContract = this.getOwnerContract(owner);
            const canApprove = await ownerContract.canApproveAddress(this.address, nftAddress, approved);
            canApprove.assertTrue();
            this.emitEvent("approve", new ApproveEvent({ nftAddress, approved }));
        }
        /**
         * Transfers ownership of an NFT without admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        async transferNFT(address, to, price) {
            const collectionData = await this.ensureNotPaused();
            collectionData.requireTransferApproval.assertFalse(CollectionErrors.transferApprovalRequired);
            const transferEventDraft = new TransferEvent({
                from: PublicKey.empty(), // will be added later
                to,
                collection: this.address,
                nft: address,
                fee: UInt64Option.none(), // will be added later
                price,
                transferByOwner: Bool(false), // will be added later
                approved: PublicKey.empty(), // will be added later
            });
            await this._transfer({
                transferEventDraft,
                transferFee: collectionData.transferFee,
                royaltyFee: collectionData.royaltyFee,
            });
        }
        /**
         * Transfers ownership of an NFT with admin approval.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         */
        async transferNFTWithApproval(address, to, price) {
            const collectionData = await this.ensureNotPaused();
            collectionData.requireTransferApproval.assertTrue(CollectionErrors.transferApprovalNotRequired);
            const transferEventDraft = new TransferEvent({
                from: PublicKey.empty(), // will be added later
                to,
                collection: this.address,
                nft: address,
                fee: UInt64Option.none(), // will be added later
                price,
                transferByOwner: Bool(false), // will be added later
                approved: PublicKey.empty(), // will be added later
            });
            const transferEvent = await this._transfer({
                transferEventDraft,
                transferFee: collectionData.transferFee,
                royaltyFee: collectionData.royaltyFee,
            });
            const adminContract = this.getAdminContract();
            const canTransfer = await adminContract.canTransfer(transferEvent);
            canTransfer.assertTrue();
            this.emitEvent("approveTransfer", transferEvent);
        }
        /**
         * Internal method to transfer an NFT.
         *
         * @param address - The address of the NFT.
         * @param to - The recipient's public key.
         * @param transferFee - The transfer fee amount.
         * @returns The TransferEvent emitted.
         */
        async _transfer(params) {
            const { transferEventDraft, transferFee, royaltyFee } = params;
            const sender = this.sender.getUnconstrained();
            const isFromEmpty = transferEventDraft.from.equals(PublicKey.empty());
            transferEventDraft.from = Provable.if(isFromEmpty, sender, transferEventDraft.from);
            const tokenId = this.deriveTokenId();
            const nft = new NFT(transferEventDraft.nft, tokenId);
            const transferEvent = await nft.transfer(transferEventDraft);
            const creator = this.creator.getAndRequireEquals();
            // TODO: check is the owner is the creator
            let fee = Provable.if(transferEventDraft.price.isSome, 
            // We cannot check the price here, so we just rely on owner contract
            // Malicious owner contracts can be blocked by the admin contract
            // or by setting the transfer fee to a higher value reflecting the market price
            transferEventDraft.price
                .orElse(1000000000n) // is not used, can be any value
                .div(100_000)
                .mul(UInt64.from(royaltyFee)), transferFee);
            const isOwnedByCreator = transferEvent.from.equals(creator);
            fee = Provable.if(isOwnedByCreator, UInt64.zero, 
            // The minimum fee is the transfer fee
            Provable.if(fee.lessThanOrEqual(transferFee), transferFee, fee));
            const senderUpdate = AccountUpdate.createIf(fee.equals(UInt64.zero).not().or(isFromEmpty), sender);
            senderUpdate.requireSignature();
            senderUpdate.body.useFullCommitment = Bool(true); // Prevent memo and fee change
            senderUpdate.account.balance.requireBetween(transferEventDraft.price.orElse(fee), UInt64.MAXINT());
            senderUpdate.send({
                to: this.creator.getAndRequireEquals(),
                amount: fee,
            });
            transferEventDraft.fee = UInt64Option.fromValue({
                value: fee,
                isSome: isOwnedByCreator.not(),
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
        async upgradeNFTVerificationKey(address, vk) {
            await this._upgrade(address, vk);
        }
        /**
         * Upgrades the verification key of a specific NFT by Proof.
         *
         * @param address - The address of the NFT.
         * @param vk - The new verification key.
         */
        async upgradeNFTVerificationKeyByProof(address, vk) {
            const { data } = await this._upgrade(address, vk);
            const ownerContract = this.getOwnerContract(data.owner);
            const canUpgrade = await ownerContract.canChangeVerificationKey(this.address, address, vk);
            canUpgrade.assertTrue();
        }
        async _upgrade(address, vk) {
            const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
            const sender = this.sender.getAndRequireSignature();
            const creator = this.creator.getAndRequireEquals();
            creator
                .equals(sender)
                .or(collectionData.requireCreatorSignatureToUpgradeNFT.not())
                .assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeNFT);
            const tokenId = this.deriveTokenId();
            const nft = new NFT(address, tokenId);
            const adminContract = this.getAdminContract();
            const canUpgrade = await adminContract.canChangeVerificationKey(vk, address, tokenId);
            canUpgrade.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
            const data = await nft.upgradeVerificationKey(vk);
            const event = new UpgradeVerificationKeyEvent({
                address,
                tokenId,
                verificationKeyHash: vk.hash,
            });
            this.emitEvent("upgradeNFTVerificationKey", event);
            return { data, sender };
        }
        /**
         * Upgrades the verification key of the collection contract.
         *
         * @param vk - The new verification key.
         */
        async upgradeVerificationKey(vk) {
            const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
            const sender = this.sender.getAndRequireSignature();
            const creator = this.creator.getAndRequireEquals();
            creator
                .equals(sender)
                .or(collectionData.requireCreatorSignatureToUpgradeCollection.not())
                .assertTrue(CollectionErrors.creatorSignatureRequiredToUpgradeCollection);
            const adminContract = this.getAdminContract();
            const canUpgrade = await adminContract.canChangeVerificationKey(vk, this.address, this.tokenId);
            canUpgrade.assertTrue(CollectionErrors.cannotUpgradeVerificationKey);
            this.account.verificationKey.set(vk);
            this.emitEvent("upgradeVerificationKey", vk.hash);
        }
        /**
         * Limits further minting of NFTs in the collection.
         */
        async limitMinting() {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canMint = Bool(false);
            this.packedData.set(collectionData.pack());
            this.emitEvent("limitMinting", new LimitMintingEvent({ mintingLimited: Bool(true) }));
        }
        /**
         * Pauses the collection, disabling certain actions.
         */
        async pause() {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canPause.assertTrue(CollectionErrors.noPermissionToPause);
            collectionData.isPaused = Bool(true);
            this.packedData.set(collectionData.pack());
            this.emitEvent("pause", new PauseEvent({ isPaused: Bool(true) }));
        }
        /**
         * Resumes the collection, re-enabling actions.
         */
        async resume() {
            /*
            Should we have a mechanism where everyone can resume the collection after some time period
            to prevent pausing it indefinitely?
            We can define maxPausePeriod and if the collection is paused for the maxPausePeriod time
            then anyone can resume it.
            */
            await this.ensureCreatorSignature();
            const collectionData = CollectionData.unpack(this.packedData.getAndRequireEquals());
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
        async pauseNFT(address) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(address, tokenId);
            const owner = await nft.pause();
            await this.ensureOwnerSignature(owner);
            this.emitEvent("pauseNFT", new PauseNFTEvent({ isPaused: Bool(true), address }));
        }
        /**
         * Pauses a specific NFT, disabling its actions.
         *
         * @param address - The address of the NFT to pause.
         */
        async pauseNFTByProof(address) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(address, tokenId);
            const owner = await nft.pause();
            const ownerContract = this.getOwnerContract(owner);
            const canPause = await ownerContract.canPause(this.address, address);
            canPause.assertTrue();
            this.emitEvent("pauseNFT", new PauseNFTEvent({ isPaused: Bool(true), address }));
        }
        /**
         * Resumes a specific NFT, re-enabling its actions.
         *
         * @param address - The address of the NFT to resume.
         */
        async resumeNFT(address) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(address, tokenId);
            const owner = await nft.resume();
            await this.ensureOwnerSignature(owner);
            this.emitEvent("resumeNFT", new PauseNFTEvent({ isPaused: Bool(false), address }));
        }
        /**
         * Resumes a specific NFT, re-enabling its actions.
         *
         * @param address - The address of the NFT to resume.
         */
        async resumeNFTByProof(address) {
            const tokenId = this.deriveTokenId();
            const nft = new NFT(address, tokenId);
            const owner = await nft.resume();
            const ownerContract = this.getOwnerContract(owner);
            const canResume = await ownerContract.canResume(this.address, address);
            canResume.assertTrue();
            this.emitEvent("resumeNFT", new PauseNFTEvent({ isPaused: Bool(false), address }));
        }
        /**
         * Sets a new name for the collection.
         * Requires owner signature and collection to not be paused.
         * Emits a 'setName' event with the new name.
         *
         * @param name - The new name for the collection as a Field value
         * @throws {Error} If caller lacks permission to change name
         */
        async setName(name) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canChangeName.assertTrue(CollectionErrors.noPermissionToChangeName);
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
        async setBaseURL(baseURL) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canChangeBaseUri.assertTrue(CollectionErrors.noPermissionToChangeBaseUri);
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
        async setAdmin(admin) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canSetAdmin.assertTrue(CollectionErrors.noPermissionToSetAdmin);
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
        async setRoyaltyFee(royaltyFee) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canChangeRoyalty.assertTrue(CollectionErrors.noPermissionToChangeRoyalty);
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
        async setTransferFee(transferFee) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canChangeTransferFee.assertTrue(CollectionErrors.noPermissionToChangeTransferFee);
            collectionData.transferFee = transferFee;
            this.packedData.set(collectionData.pack());
            this.emitEvent("setTransferFee", transferFee);
        }
        /**
         * Transfers ownership of the collection to a new owner.
         *
         * @param to - The public key of the new owner.
         * @returns The public key of the old owner.
         */
        async transferOwnership(to) {
            await this.ensureCreatorSignature();
            const collectionData = await this.ensureNotPaused();
            collectionData.canChangeCreator.assertTrue(CollectionErrors.noPermissionToChangeCreator);
            const from = this.creator.getAndRequireEquals();
            this.creator.set(to);
            this.emitEvent("ownershipChange", new OwnershipChangeEvent({
                from,
                to,
            }));
            return from;
        }
    }
    __decorate([
        state(Field),
        __metadata("design:type", Object)
    ], Collection.prototype, "collectionName", void 0);
    __decorate([
        state(PublicKey),
        __metadata("design:type", Object)
    ], Collection.prototype, "creator", void 0);
    __decorate([
        state(PublicKey),
        __metadata("design:type", Object)
    ], Collection.prototype, "admin", void 0);
    __decorate([
        state(Field),
        __metadata("design:type", Object)
    ], Collection.prototype, "baseURL", void 0);
    __decorate([
        state(Field),
        __metadata("design:type", Object)
    ], Collection.prototype, "packedData", void 0);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MintParams, CollectionData]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "initialize", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MintParams]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "mintByCreator", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MintRequest]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "mint", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [NFTUpdateProof,
            VerificationKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "update", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [NFTUpdateProof,
            VerificationKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "updateWithApproval", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [TransferParams]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "transferByProof", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "approveAddress", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "approveAddressByProof", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            PublicKey,
            UInt64Option]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "transferNFT", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            PublicKey,
            UInt64Option]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "transferNFTWithApproval", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            VerificationKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "upgradeNFTVerificationKey", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey,
            VerificationKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "upgradeNFTVerificationKeyByProof", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [VerificationKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "upgradeVerificationKey", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "limitMinting", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "pause", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "resume", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "pauseNFT", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "pauseNFTByProof", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "resumeNFT", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "resumeNFTByProof", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Field]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "setName", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Field]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "setBaseURL", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "setAdmin", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UInt32]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "setRoyaltyFee", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UInt64]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "setTransferFee", null);
    __decorate([
        method.returns(PublicKey),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [PublicKey]),
        __metadata("design:returntype", Promise)
    ], Collection.prototype, "transferOwnership", null);
    return Collection;
}
//# sourceMappingURL=collection.js.map