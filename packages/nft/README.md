# NFT Standard on Mina Protocol

![Logo](/packages/nft/img/cover.png)

The MinaNFT project is an innovative Non-Fungible Token (NFT) platform that integrates the unique privacy features of the Mina blockchain. It is designed to redefine the NFT space by offering a range of functionalities that go beyond traditional NFT capabilities.

## Contracts Code

### NFT Standard Contracts

Main contracts: packages/nft/src/contracts/

Interfaces: packages/nft/src/interfaces/

### Examples of NFT Standard usage (not part of the standard)

Marketplace: packages/nft/src/marketplace/

Metadata: packages/nft/src/metadata/

ZkPrograms: packages/nft/src/zkprogram-example/

Admin: packages/nft/src/admin/

### Dependencies

#### Storage class used by the NFT Standard

Storage: packages/storage/src/storage/storage.ts

#### Whitelist class used by the NFT Advanced Admin Example and Marketplace

Whitelist: packages/nft/src/whitelist/whitelist.ts

#### Upgrade Authority class used by the NFT Advanced Admin Example

UpgradeAuthority: packages/upgradable

### Tests

Test are available at https://github.com/dfstio/nft-standard-worker/tree/audit

## Project Background

Non-Fungible Tokens (NFTs) have become a pivotal aspect of digital ownership, allowing creators, individuals, and corporations to represent unique digital assets on the blockchain. However, current NFT standards, like ERC721, lack essential privacy, verifiability, and versatile content integration features. The NFT standard on Mina seeks to overcome these limitations by introducing enhanced functionality such as privacy features, verifiable proofs for both public and private data, unlocking new use cases for NFTs in the realms of digital identity, secure document sharing, and multimedia content.

Establishing a standard for NFTs on Mina reduces the complexity for developers while enabling seamless integration with third-party applications, marketplaces, and explorers. This NFT standard leverages Mina’s zero-knowledge (ZK) capabilities to ensure that NFTs created on the platform can securely handle both public and private content while providing proofs of authenticity that can be verified both on-chain and off-chain.

This standard enables businesses and individuals to create NFTs that not only represent unique digital assets but also serve as secure digital identities capable of hosting and sharing sensitive data. This significantly expands the utility of NFTs beyond art into domains like Real World Assets, Gaming, Communities, and Governance.

## Motivation and Architecture Overview

Non-Fungible Tokens (NFTs) have become a central feature in blockchain ecosystems, enabling the ownership and exchange of unique digital assets. Establishing a standard for NFTs on the Mina Protocol will significantly simplify the creation and interaction with NFTs while ensuring that they can be easily integrated into wallets, marketplaces, and third-party applications.

The need for standardization goes beyond merely defining an API. NFTs on Mina will benefit from a standard implementation that can be universally used when deploying and interacting with NFT contracts. This is particularly important in Mina’s off-chain execution model, where applications need access to the contract code for verification and interaction. Without a standardized NFT contract, third-party developers, wallets, and explorers would face a significant burden when integrating with different, custom NFT contracts, as they would need to account for the unique logic and structure of each.

The design is based on existing MinaNFT contracts V2 deployed to the mainnet. Many NFTs have already been minted, sold, and bought on the mainnet, and many creators are developing collections, providing feedback, and requesting new features.

To provide flexibility without altering the core NFT contracts, the design separates key administrative actions, such as whitelisting or KYC checks, into dedicated admin contracts. This ensures that the core NFT contract remains standardized while custom logic can be introduced through the admin contracts. By doing so, applications that only need to handle basic NFT operations, such as transfers or ownership verification, can interact solely with the NFT contract, ensuring compatibility across all NFTs following the standard.

Additionally, Mina’s ZK architecture enhances NFTs’ functionality by allowing both on-chain and off-chain verifiability of public and private data attached to NFTs. This opens the door for NFTs representing a wide range of assets, from digital art to legal contracts and Real World Assets (RWA), while maintaining user privacy and security.

The metadata for the NFT will be stored off-chain, with the storage choice and metadata format being open. It will be possible to use metadata standards by the MinaNFT V2 and IPFS as storage options, but using this metadata standard will not be part of the standard, and it will be the NFT collection creator's choice what metadata format and storage to use.

The recommended metadata JSON format will be a part of the standard, but the method of calculating the metadata root or hash will not.

By providing a standard implementation for NFT creation, management, and verification, Mina enables seamless interoperability, ensuring that all NFT-based applications can work with the same contract, reducing the complexity for developers, and enhancing the user experience across the ecosystem.

## Detailed Architecture Overview

### Contracts Overview

The NFT standard on Mina Protocol consists of several contracts working together to provide comprehensive and flexible functionality for NFTs. The main contracts include:

- **NFT Collection Contract** (`collection.ts`)
- **NFT Contract** (`nft.ts`)
- **Admin Contract** (`admin.ts`)

Below is a detailed description of each contract, including their methods and functionalities.

### NFT Collection Contract

The **NFT Collection Contract** manages a collection of NFTs on the Mina Protocol. It handles minting, transferring, buying, selling, and integrates with admin, approval, and owner contracts for fine-grained control. Below is an overview of its latest features and methods, along with the relevant flags and events that govern its behavior.

---

## Key Features

1. **Minting NFTs**  
   • Allows creators and authorized users to mint new NFTs in the collection.  
   • Supports both direct creator minting (mintByCreator) and admin-approved minting (mint).

2. **Transferring Ownership**  
   • Enables transferring NFTs with or without admin approval.  
   • Offers different methods for transfer:  
    – By signature.  
    – By proof.  
   • Optionally enforces transfer fees and royalty fees.

3. **Buying and Selling**  
   • Facilitates listing and purchasing of NFTs, optionally requiring admin approval.  
   • Handles ownership checks, transfer fees, and royalty fees to creators.

4. **Updating NFTs**  
   • Provides methods to update NFT metadata with zero-knowledge proofs.  
   • Supports both standard updates (update) and oracle-based updates (updateWithOracle).  
   • Integrates with admin and update contracts to enforce custom policies or off-chain logic.

5. **Pausing and Resuming**  
   • Offers the ability to pause the entire collection (pause, resume).  
   • Also supports pausing or resuming individual NFTs.  
   • Pausing actions can be secured by owner signature (pauseNFTBySignature, resumeNFT) or by proof-based ownership (pauseNFTByProof, resumeNFTByProof).

6. **Contract Upgrades**  
   • Supports upgrading the verification key of the collection (upgradeVerificationKey).  
   • Allows upgrading individual NFT verification keys (upgradeNFTVerificationKey).

7. **Administrative and Ownership Controls**  
   • Interacts with Admin, Owner, Approval, and Update contracts for advanced workflows like KYC/AML compliance or flexible approval policies.  
   • Provides specialized methods to set collection parameters such as collection name, base URL, admin address, and royalty fee.  
   • Allows transferring overall ownership of the collection (transferOwnership).

8. **Mint Limitation & Configuration Updates**  
   • Offers a limitMinting method to permanently stop further minting.  
   • Additional configuration updates are available through specialized methods (e.g., setName, setBaseURL, setAdmin, setRoyaltyFee).

---

## State Variables

• collectionName (Field)  
 The name of the NFT collection stored on-chain.  
• creator (PublicKey)  
 The creator’s public key, used for collecting royalty fees and for certain ownership checks.  
• admin (PublicKey)  
 The Admin Contract’s public key, controlling approval-based actions.  
• baseURL (Field)  
 The base URL for the collection, used as a reference for off-chain metadata.  
• packedData (CollectionDataPacked)  
 Stores flags and configuration (e.g., paused status, transfer-approval requirement, royalty fee, etc.).

---

## Core Methods

Below is a summary of major methods in the Collection Contract. Several are decorated with “@method”, indicating they are part of the on-chain zkApp logic.

• deploy(props: CollectionDeployProps): Promise<void>  
 Deploys the contract with initial settings (name, admin, royalty fee, etc.).

• initialize(masterNFT: MintParams, collectionData: CollectionData): Promise<void>  
 Initializes the collection with a “master” NFT and any initial parameters (name, base URL, flags).

• mintByCreator(params: MintParams): Promise<void>  
 Allows the creator to mint a new NFT in the collection directly.

• mint(mintRequest: MintRequest): Promise<void>  
 Mints a new NFT via an admin approval flow.  
 (The Admin Contract checks whether minting is authorized.)

• update(proof: NFTUpdateProof, vk: VerificationKey): Promise<void>  
 Updates the NFT’s metadata or state using a zero-knowledge proof.

• updateWithOracle(proof: NFTUpdateProof, vk: VerificationKey): Promise<void>  
 Similar to update, but enforces an additional oracle-based approval step.

• sell / sellWithApproval / buy / buyWithApproval: Promise<void>  
 Enable listing and buying NFTs, optionally requiring admin approval.

• transfer / transferWithApproval: Promise<void>  
 Transfer an NFT to a new owner with or without admin approval.

• pause / resume(): Promise<void>  
 Pauses or resumes the entire collection. When paused, certain actions are disallowed.

• pauseNFTBySignature(address: PublicKey): Promise<void>  
 Pauses an individual NFT’s contract logic, requiring the NFT owner’s signature.

• pauseNFTByProof(address: PublicKey): Promise<void>  
 Pauses an individual NFT’s contract logic using a zero-knowledge proof of ownership.

• resumeNFT(address: PublicKey): Promise<void>  
 Resumes an NFT’s logic, requiring the NFT owner’s signature.

• resumeNFTByProof(address: PublicKey): Promise<void>  
 Resumes an NFT’s logic via a proof-based check of ownership.

• upgradeNFTVerificationKey(address: PublicKey, vk: VerificationKey): Promise<void>  
 Upgrades the verification key for an individual NFT.

• upgradeVerificationKey(vk: VerificationKey): Promise<void>  
 Upgrades the verification key of the overall collection contract.

• limitMinting(): Promise<void>  
 Permanently shuts off new NFT minting in the collection.

• setName(name: Field): Promise<void>  
 Updates the collection’s on-chain name (requires admin check and “not paused” status).

• setBaseURL(baseURL: Field): Promise<void>  
 Updates the collection’s base metadata URL (requires admin check and “not paused” status).

• setAdmin(admin: PublicKey): Promise<void>  
 Sets a new admin contract address (requires admin check and “not paused” status).

• setRoyaltyFee(royaltyFee: UInt32): Promise<void>  
 Adjusts the royalty fee percentage for future NFT transactions (requires admin check and “not paused” status).

• transferOwnership(newOwner: PublicKey): Promise<PublicKey>  
 Transfers ownership from the current creator to a new public key (e.g., for contract handover).

• getNFTState(address: PublicKey): Promise<NFTStateStruct>  
 Returns the complete on-chain state (owner, metadata, paused flag, etc.) of a particular NFT in this collection.

---

## Events

The contract emits the following events during its lifecycle and interactions:

• mint  
 Emitted when a new NFT is successfully minted.

• update  
 Emitted when an NFT’s state or metadata is updated.

• transfer  
 Emitted when an NFT is transferred from one owner to another.

• approve  
 Emitted when an approved address is added or removed.

• upgradeNFTVerificationKey  
 Emitted when an individual NFT’s verification key is upgraded.

• upgradeVerificationKey  
 Emitted when the entire collection’s verification key is upgraded.

• limitMinting  
 Emitted when new NFT minting is permanently disabled within the collection.

• pause  
 Emitted when the entire collection is paused.

• resume  
 Emitted when the entire collection is resumed.

• pauseNFT  
 Emitted when an individual NFT is paused.

• resumeNFT  
 Emitted when an individual NFT is resumed.

• ownershipChange  
 Emitted when overall ownership of the collection contract is transferred.

• setName  
 Emitted when the collection name is changed.

• setBaseURL  
 Emitted when the base URL is updated.

• setRoyaltyFee  
 Emitted when the royalty fee is updated.

• setTransferFee  
 Emitted when the transfer fee is updated.

• setAdmin  
 Emitted when a new admin is set for the collection.

---

## Flags

These flags are stored in the contract’s packed data (packedData) and can be accessed or updated through various methods or admin contract checks:

• isPaused (Bool)  
 True if the collection is paused (certain features disabled).

• mintingIsLimited (Bool)  
 If true, no further NFTs can be minted.

• requireTransferApproval (Bool)  
 If true, NFT transfers must be approved by the Admin Contract.

• Additional flags or configuration fields may exist depending on how the CollectionData struct is extended (e.g., requireSaleApproval, requireUpdateApproval, royaltyFee, transferFee, etc.).

---

## Notes and References

• The contract extensively integrates with Admin, Owner, Approval, and Update contracts for additional checks and off-chain logic.  
• The underlying methods rely on zero-knowledge proofs (ZKPs) for certain workflows, e.g., updateWithOracle or pauseNFTByProof.  
• The “packedData” field bundles essential flags and numeric values (like royaltyFee, transferFee) into a single Field for efficient on-chain storage.  
• Refer to @types.ts for definitions of NFTUpdateProof, NFTStateStruct, CollectionData, and other data structures, and @events.ts for event struct definitions.  
• The “CollectionFactory” function programmatically generates the Collection class, injecting references to custom admin, owner, approval, and update contracts, allowing custom logic to be easily composed.

This updated description reflects the latest version of the Collection Contract, as seen in @collection.ts, @types.ts, and @events.ts. It includes support for oracle-driven updates, flexible NFT pausing/resuming, refined administrative checks, and extended event emissions.

### NFT Contract

The NFT Contract represents an individual NFT within a collection and defines both its on-chain state and permissible actions. It manages ownership, metadata, off-chain storage references, pricing, and various permission flags. It includes functionality to update an NFT’s data with proofs, transfer ownership, approve a delegate address, pause or resume the NFT, and upgrade the verification key, maintaining a packed structure for efficient on-chain storage.

Below is an overview of its latest features, state variables, methods, and events, as reflected in the current implementation at:
• packages/nft/src/contracts/nft.ts  
• packages/nft/src/interfaces/types.ts  
• packages/nft/src/interfaces/events.ts

---

#### State Variables

• name (Field)  
 – The on-chain name of the NFT.

• metadata (Field)  
 – A Field representing the NFT’s current metadata or metadata hash.

• storage (Storage)  
 – A reference to off-chain storage (e.g., IPFS hash or other storage root).

• packedData (NFTDataPacked)  
 – A packed Field containing key information and flags (e.g., owner, approved address, permission bits, and pause state).

• metadataVerificationKeyHash (Field)  
 – The hash of the verification key used for zero-knowledge proofs when updating or verifying the NFT’s metadata.

---

#### Key Methods

```typescript:packages/nft/src/contracts/nft.ts
class NFT extends SmartContract {
    …

    @method.returns(NFTStateStruct)
    async getState(): Promise<NFTStateStruct> {
        // Retrieves and returns the entire on-chain state of the NFT
    }

    @method.returns(Field)
    async update(
        input: NFTState,
        output: NFTState,
        creator: PublicKey
    ): Promise<Field> {
        // Updates the NFT’s state with provided proofs and permission checks,
        // enforcing all read-only and mutable flag constraints
    }

    @method.returns(TransferExtendedParams)
    async transfer(params: TransferExtendedParams): Promise<TransferExtendedParams> {
        // Transfers ownership of the NFT to a new address,
        // honoring permissions and pause states
    }

    @method.returns(PublicKey)
    async approveAddress(approved: PublicKey): Promise<PublicKey> {
        // Sets or changes the NFT’s approved address for delegated actions
    }

    @method.returns(UpgradeVerificationKeyData)
    async upgradeVerificationKey(
        vk: VerificationKey
    ): Promise<UpgradeVerificationKeyData> {
        // Upgrades the contract's verification key if permission flags allow it,
        // returning data indicating whether the owner’s authorization is required
    }

    @method.returns(PublicKey)
    async pause(): Promise<PublicKey> {
        // Pauses the NFT if allowed (isPaused=true), disabling certain actions
    }

    @method.returns(PublicKey)
    async resume(): Promise<PublicKey> {
        // Resumes the NFT if it is currently paused, restoring normal functionality
    }

    …
}
```

• getState(): Retrieves the full NFT state as an NFTStateStruct, including name, metadata, storage, packed data, and verification key hash.

• update(input, output, creator): Applies changes to the NFT state by comparing the “input” and “output” states, verifying that only permitted fields are modified (e.g., canChangeMetadata must be true to change metadata). Enforces that read-only flags (like canChangeName, canPause) are respected.

• transfer(params): Transfers ownership from the current owner (or approved address) to a new owner, incrementing version and clearing the approved address. Requires that canTransfer = true and isPaused = false.

• approveAddress(approved): Sets a new approved address, enabling delegated transfers or updates without requiring the owner to sign.

• upgradeVerificationKey(vk): Upgrades the NFT’s verification key. This method returns an UpgradeVerificationKeyData object containing (owner, isOwnerApprovalRequired). If the NFT’s flags enforce owner authorization, the collection contract can further validate the call.

• pause() / resume(): Pauses or resumes the NFT if canPause = true. A paused NFT cannot be transferred or updated until resumed.

---

#### Events

• update  
 – Emitted when the NFT’s name, metadata, storage, owner, or related data fields are changed and version is incremented.

• transfer  
 – Emitted whenever ownership changes, providing the old and new owner addresses.

• approve  
 – Emitted when an approved address is set or changed.

• upgradeVerificationKey  
 – Emitted when a new verification key is successfully applied to the NFT.

• pause / resume  
 – Emitted when the NFT is paused or resumed (respectively).

---

#### Flags (Immutable / Mutable Fields in packedData)

The NFT maintains various read-only flags to restrict or allow certain actions. These include:  
• canChangeOwnerByProof: Whether ownership can be changed by a zero-knowledge proof.  
• canTransfer: Whether ownership can be transferred (via signature or an approved address).  
• canApprove: Whether the approved address can be changed.  
• canChangeMetadata: Whether the NFT’s metadata can be updated.  
• canChangeStorage: Whether the NFT’s off-chain storage reference can be changed.  
• canChangeName: Whether the NFT’s name can be changed.  
• canChangeMetadataVerificationKeyHash: Whether the metadata verification key hash can be changed.  
• canPause: Whether the NFT can be paused, disabling its functionality.  
• requireOwnerAuthorizationToUpgrade: Whether the owner’s signature is required for a verification key upgrade.

Additionally, the mutable flags tracked are:  
• isPaused: A boolean indicating if the NFT is currently paused.  
• version: An incrementing version number for the NFT state.

All these flags, along with ownership and approval addresses, are packed into a compact field structure for on-chain efficiency.

---

#### Error Handling

The NFT contract enforces permission checks and immutability guarantees through custom errors, including:  
• cannotChangeOwner  
• cannotChangeMetadata  
• cannotChangePauseState  
• nftIsPaused / nftIsNotPaused / nftAlreadyPaused  
• cannotChangeMetadataVerificationKeyHash

These errors are thrown when a user attempts an action that the NFT’s flags or state disallow.

---

### Admin Contracts

The **Admin Contracts** provide administrative functionalities for the NFT Collection. They allow for additional checks and controls, such as KYC/AML compliance, whitelisting, pausing the contract, and upgrading contract logic.

#### NFTAdminBase Interface

The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol. It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

**Type Definition:**

```typescript
type NFTAdminBase = SmartContract & {
  canMint(nft: MintRequest): Promise<MintParamsOption>;
  canUpdate(input: NFTState, output: NFTState): Promise<Bool>;
  canTransfer(transferEvent: TransferEvent): Promise<Bool>;
  canChangeName(name: Field): Promise<Bool>;
  canChangeCreator(creator: PublicKey): Promise<Bool>;
  canChangeBaseUri(baseUri: Field): Promise<Bool>;
  canChangeRoyalty(royaltyFee: UInt32): Promise<Bool>;
  canChangeTransferFee(transferFee: UInt64): Promise<Bool>;
  canSetAdmin(admin: PublicKey): Promise<Bool>;
  canPause(): Promise<Bool>;
  canResume(): Promise<Bool>;
  canChangeVerificationKey(
    vk: VerificationKey,
    address: PublicKey,
    tokenId: Field
  ): Promise<Bool>;
};
```

**Methods:**

- `canMint(nft: MintRequest): Promise<MintParamsOption>`

  - **Description**: Validates whether a new NFT can be minted based on the provided `MintRequest`.
  - **Returns**: A `Promise` resolving to `MintParamsOption`, containing mint parameters if minting is allowed, or an empty option if not.

- `canUpdate(input: NFTState, output: NFTState): Promise<Bool>`

  - **Description**: Checks if an NFT can be updated from its current state (`input`) to a new state (`output`).
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the update is permitted.

- `canTransfer(transferEvent: TransferEvent): Promise<Bool>`

  - **Description**: Determines if an NFT can be transferred based on the provided transfer event details.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.

- `canChangeName(name: Field): Promise<Bool>`

  - **Description**: Determines if the collection name can be changed to the provided value.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the name change is allowed.

- `canChangeCreator(creator: PublicKey): Promise<Bool>`

  - **Description**: Determines if the collection creator can be changed to the provided address.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the creator change is allowed.

- `canChangeBaseUri(baseUri: Field): Promise<Bool>`

  - **Description**: Determines if the collection's base URI can be changed to the provided value.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the base URI change is allowed.

- `canChangeRoyalty(royaltyFee: UInt32): Promise<Bool>`

  - **Description**: Determines if the collection's royalty fee can be changed to the provided value.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the royalty fee change is allowed.

- `canChangeTransferFee(transferFee: UInt64): Promise<Bool>`

  - **Description**: Determines if the collection's transfer fee can be changed to the provided value.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the transfer fee change is allowed.

- `canSetAdmin(admin: PublicKey): Promise<Bool>`

  - **Description**: Determines if the collection's admin contract can be changed to the provided address.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the admin change is allowed.

- `canPause(): Promise<Bool>`

  - **Description**: Determines if the collection can be paused.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether pausing is allowed.

- `canResume(): Promise<Bool>`

  - **Description**: Determines if the collection can be resumed from a paused state.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether resuming is allowed.

- `canChangeVerificationKey(vk: VerificationKey, address: PublicKey, tokenId: Field): Promise<Bool>`
  - **Description**: Determines if the verification key can be changed for a specific NFT contract address and token ID.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the verification key change is allowed.

**Purpose:**

Implementing the `NFTAdminBase` interface ensures that an administrative contract provides the necessary methods to control and validate key NFT operations. This standardization allows different admin contracts to enforce specific rules (e.g., whitelisting, KYC/AML compliance) while maintaining a consistent interface for the NFT collection.

**Constructor Type:**

```typescript
type NFTAdminContractConstructor = new (address: PublicKey) => NFTAdminBase;
```

- **Description**: Defines a constructor for contracts implementing `NFTAdminBase`, accepting an `address` public key and returning an instance of `NFTAdminBase`.

#### Standard Admin Contract

#### Admin Contract

The NFTAdmin contract serves as a foundational administrative layer for Mina-based NFT collections. It implements the NFTAdminBase, PausableContract, and OwnableContract interfaces, providing crucial administrative flows such as contract deployment, pausing/resuming, ownership management, and selective allowance for changing fees or royalty parameters. It is designed to be extensible; more specialized admin contracts can inherit from it to add extra logic (e.g., whitelisting, KYC checks).

##### Key Features

• Deployment and Configuration  
 – Deploys with initial admin and on-chain settings (URI).  
 – Optionally can be paused from the start or disallow future pausing altogether.  
 – Can enable/disable the ability to change royalty fees and transfer fees.

• Pausing and Resuming  
 – Lets the admin pause the contract if canBePaused is true.  
 – When paused, certain actions are restricted, and contract methods can check isPaused to decide if they proceed.  
 – Supports resuming the contract if it’s paused.

• Ownership Management  
 – Ensures only the current owner can perform restricted operations via ensureOwnerSignature().  
 – Ownership can be transferred to a new admin, but only if the contract is paused.

• Verification Key Upgrade  
 – Allows an admin-signed upgrade of the contract’s verification key (upgradeVerificationKey), letting the contract evolve without redeployment.

• Permission Checks (NFTAdminBase)  
 – Defines canMint, canUpdate, and canTransfer methods, typically returning bool or structured data indicating if an action is allowed.  
 – Methods like canChangeRoyalty, canChangeTransferFee, canChangeName, etc. define fine-grained checks for a collection’s policy.

##### State Variables

• admin (PublicKey)  
 – Public key of the contract’s administrator. Must sign to authorize critical actions like pausing or upgrading the contract.

• isPaused (Bool)  
 – Indicates if the contract is currently paused. If true, many operations can be disallowed or require extra checks.

• canBePaused (Bool)  
 – Determines if the pause feature is permitted at all (true = pausing/resuming enabled, false = never paused).

• allowChangeRoyalty (Bool)  
 – If true, the admin can modify a collection’s royalty fee by calling canChangeRoyalty.

• allowChangeTransferFee (Bool)  
 – If true, the admin can modify a collection’s transfer fee by calling canChangeTransferFee.

##### Key Methods

```typescript:packages/nft/src/contracts/admin.ts
class NFTAdmin
  extends SmartContract
  implements NFTAdminBase, PausableContract, OwnableContract
{
  // -------------------------
  //     Deployment
  // -------------------------
  async deploy(props: NFTAdminDeployProps) {
    // Deploys the contract with the given admin, zkApp URI, and pause-related flags
  }

  // -------------------------
  //      Permissioned
  // -------------------------
  @method
  async upgradeVerificationKey(vk: VerificationKey) {
    // Upgrades the contract’s verification key after ensuring the admin signature
  }

  @method.returns(MintParamsOption)
  async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
    // Default implementation: returns none(), meaning minting is not permitted unless overridden
  }

  @method.returns(Bool)
  async canUpdate(input: NFTState, output: NFTState): Promise<Bool> {
    // Default implementation: returns true (e.g., always allow updates)
  }

  @method.returns(Bool)
  async canTransfer(transferEvent: TransferEvent): Promise<Bool> {
    // Default implementation: returns true (e.g., always allow transfers)
  }

  @method
  async pause(): Promise<void> {
    // Pauses the contract if canBePaused is true and the caller is the admin
  }

  @method
  async resume(): Promise<void> {
    // Resumes the contract if canBePaused is true and the caller is the admin
  }

  @method.returns(PublicKey)
  async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
    // Transfers contract ownership to a new admin only if the contract is paused
  }

  // -------------------------
  //   Fine-grained checks
  // -------------------------
  @method.returns(Bool)
  async canChangeRoyalty(royaltyFee: UInt32): Promise<Bool> {
    // Returns true if allowChangeRoyalty is true and the admin has signed
  }

  @method.returns(Bool)
  async canChangeTransferFee(transferFee: UInt64): Promise<Bool> {
    // Returns true if allowChangeTransferFee is true and the admin has signed
  }

  @method.returns(Bool)
  async canChangeVerificationKey(
    vk: VerificationKey,
    address: PublicKey,
    tokenId: Field
  ): Promise<Bool> {
    // Allows verifying or restricting verification key changes for specific addresses/tokens
    // The default here checks admin signature
  }

  // Additional checks like canChangeName, canChangeBaseUri, etc. default to returning false or requiring admin signature
}
```

• ensureOwnerSignature()  
 – Internal helper that creates a signed AccountUpdate restricted to the admin’s signature, preventing unauthorized calls and improper fee usage.

Overall, NFTAdmin provides a baseline set of administrative operations for an NFT collection. More specialized admin contracts can extend NFTAdmin to override methods like canMint or canTransfer with more advanced logic, such as whitelisting or KYC rules.

#### Advanced Admin Contract

The **Advanced Admin Contract** (`advanced.ts`) is a sophisticated implementation of an admin contract that provides comprehensive control over NFT operations through whitelisting and configurable permissions. It implements multiple interfaces including `NFTAdminBase`, `UpgradableContract`, `PausableContract`, and `OwnableContract`.

##### Key Features

- **Whitelist-Based Access Control**: Uses a Merkle tree-based whitelist system to control who can interact with NFTs
- **Configurable Permissions**: Fine-grained control over various administrative actions through `AdminData`
- **Pause Mechanism**: Ability to pause/resume contract operations
- **Upgrade Support**: Secure verification key upgrade system through an Upgrade Authority Contract
- **Ownership Management**: Secure ownership transfer with proper authorization checks

##### State Variables

```typescript:src/admin/advanced.ts
class NFTAdvancedAdmin extends SmartContract {
  @state(PublicKey) admin: State<PublicKey>;
  @state(PublicKey) upgradeAuthority: State<PublicKey>;
  @state(Field) data: State<Field>;  // Packed AdminData
  @state(Whitelist) whitelist: State<Whitelist>;
}
```

##### Key Methods

###### Access Control Methods

```typescript:src/admin/advanced.ts
@method.returns(MintParamsOption)
async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
  // Verifies both owner and sender are whitelisted
  // Checks contract isn't paused
  // Returns none() by default (can be extended for custom minting logic)
}

@method.returns(Bool)
async canUpdate(input: NFTState, output: NFTState): Promise<Bool> {
  // Ensures contract isn't paused
  // Verifies both current and new owners are whitelisted
}

@method.returns(Bool)
async canTransfer(transferEvent: TransferEvent): Promise<Bool> {
  // Verifies both sender and receiver are whitelisted
  // Checks if their whitelisted amounts are sufficient for the transfer price
  // Ensures contract isn't paused
}
```

###### Administrative Methods

```typescript:src/admin/advanced.ts
@method
async updateWhitelist(whitelist: Whitelist) {
  // Updates the whitelist Merkle root and storage
  // Requires owner signature and unpaused contract
}

@method
async pause(): Promise<void> {
  // Pauses the contract if canPause is true
  // Requires owner signature
}

@method
async resume(): Promise<void> {
  // Resumes the contract if canPause is true
  // Requires owner signature
}

@method.returns(PublicKey)
async transferOwnership(to: PublicKey): Promise<PublicKey> {
  // Transfers contract ownership
  // Requires owner signature and unpaused contract
}
```

###### Configuration Methods

```typescript:src/admin/advanced.ts
@method.returns(Bool)
async canChangeVerificationKey(
  vk: VerificationKey,
  address: PublicKey,
  tokenId: Field
): Promise<Bool>

@method.returns(Bool)
async canChangeName(name: Field): Promise<Bool>

@method.returns(Bool)
async canChangeCreator(creator: PublicKey): Promise<Bool>

@method.returns(Bool)
async canChangeBaseUri(baseUri: Field): Promise<Bool>

@method.returns(Bool)
async canChangeRoyalty(royaltyFee: UInt32): Promise<Bool>

@method.returns(Bool)
async canChangeTransferFee(transferFee: UInt64): Promise<Bool>

@method.returns(Bool)
async canSetAdmin(admin: PublicKey): Promise<Bool>
```

###### Events

- `updateWhitelist`: Emitted when the whitelist is updated
- `pause`: Emitted when the contract is paused
- `resume`: Emitted when the contract is resumed
- `ownershipChange`: Emitted when contract ownership changes
- `upgradeVerificationKey`: Emitted when verification key is upgraded

###### Usage

The Advanced Admin Contract is ideal for:

1. **Regulated NFT Collections**: Where participation requires KYC/AML verification
2. **Tiered Access Systems**: Where different addresses have different transaction limits
3. **Managed Marketplaces**: Where transfers and trades need administrative oversight
4. **Upgradeable Collections**: Supporting secure contract upgrades through verification key management

###### Security Features

- All administrative actions require owner signature verification
- Pause mechanism prevents operations during maintenance or emergencies
- Whitelist-based access control with amount restrictions
- Merkle tree implementation for efficient and secure whitelist verification
- Integration with Upgrade Authority Contract for secure verification key management

This contract provides a robust foundation for building regulated and controlled NFT ecosystems while maintaining flexibility for custom business logic implementation.

### Upgrade Authority Contract

The **Upgrade Authority Contract** provides a secure mechanism for upgrading the verification keys of smart contracts without requiring redeployment. It manages a list of validators who can vote on upgrade proposals, ensuring that only authorized upgrades are applied.

#### Key Features

- **Verification Key Management**: Allows for secure upgrades of verification keys for other contracts.
- **Validators Governance**: Maintains a list of authorized validators who can vote on upgrade proposals.
- **Secure Voting Mechanism**: Implements Zero-Knowledge proofs to validate votes from validators without revealing sensitive information.
- **Upgrade Database Management**: Keeps track of upgrade proposals and their validity periods.
- **Event Emissions**: Emits events when validators list or upgrade database is updated.

#### State Variables

- `verificationKeyHash`: The hash of the proof verification key (`Field`).
- `validators`: The hash representing the current state of the validators list (`Field`).
- `upgradeDatabasePacked`: Packed state containing the upgrade database information (`UpgradeDatabaseStatePacked`).

#### Key Methods

```typescript:src/upgrade/upgrade.ts
class VerificationKeyUpgradeAuthority extends SmartContract implements UpgradeAuthorityBase {
  @method
  async initialize(validators: ValidatorsState, storage: Storage, verificationKeyHash: Field) {
    // Initialize the contract with validators and set the verification key hash
  }

  @method.returns(UpgradeAuthorityAnswer)
  async verifyUpgradeData(data: VerificationKeyUpgradeData): Promise<UpgradeAuthorityAnswer> {
    // Verify the upgrade data provided by another contract
  }

  @method
  async updateDatabase(proof: ValidatorsVotingProof, vk: VerificationKey) {
    // Update the upgrade database after validator consensus
  }

  @method
  async updateValidatorsList(validators: ValidatorsState, storage: Storage, proof: ValidatorsVotingProof, vk: VerificationKey) {
    // Update the validators list based on validator votes
  }

  // ... Additional methods and helper functions
}
```

#### Events

- `validatorsList`: Emitted when the validators list is updated.
- `updateDatabase`: Emitted when the upgrade database is updated.

#### Notes

- **Validator Governance**: Validators can vote on upgrade proposals. The contract uses Zero-Knowledge proofs (ZkPrograms) to verify validator votes securely.
- **Upgrade Process**: Contracts wishing to upgrade their verification keys interact with the Upgrade Authority Contract to verify that the new verification key is authorized.
- **Validators List Management**: The validators list is stored as a Merkle Tree for efficient verification and can be updated through consensus.
- **Off-chain Data**: Some data, like the full validators list, is stored off-chain (e.g., in IPFS) with only the root hash stored on-chain to optimize performance.
- **Security**: The contract ensures that only valid upgrade proposals that have been approved by the required number of validators are executed.

#### Usage Example

This contract is essential for scenarios where:

- **Decentralized Governance**: Multiple validators need to agree on contract upgrades, ensuring no single party can unilaterally upgrade the contract.
- **Secure Contract Upgrades**: Contracts can securely upgrade their verification keys without redeploying, maintaining continuity and state.
- **Regulated Environments**: Applications requiring compliance and oversight can leverage validator governance for contract changes.

For a contract to utilize the Upgrade Authority Contract, it needs to implement the `UpgradableContract` interface and interact with the `VerificationKeyUpgradeAuthority` for upgrading its verification key securely.

### Ownable Interface

The **Ownable Interface** provides an interface for ownership control mechanisms in smart contracts. It extends the `SmartContract` class and defines methods to ensure that only the owner can perform certain actions and to allow the transfer of ownership to a new owner. The key methods include:

- `ensureOwnerSignature()`: Ensures that the transaction is authorized by the contract owner, typically used to restrict access to sensitive functions.

- `transferOwnership(newOwner: PublicKey)`: Allows the current owner to transfer ownership of the contract to a new owner, returning the old owner's `PublicKey`.

Additionally, the `OwnershipChangeEvent` class represents an event emitted when the ownership of the contract changes, containing the `oldOwner` and `newOwner` public keys.

By implementing the Ownable interface, contracts can secure critical operations and provide a transparent mechanism for ownership management.

##### Key Methods

```typescript:src/ownable.ts
class OwnableContract extends SmartContract {
  @method
  async ensureOwnerSignature() {
    // Ensure that the transaction is signed by the owner
  }

  @method
  async transferOwnership(newOwner: PublicKey) {
    // Transfer ownership to a new owner
  }

  // ... Additional methods and properties
}
```

### Pausable Interface

The **Pausable Interface** provides a mechanism to dynamically enable or disable certain functionalities within smart contracts. It extends the `SmartContract` class and introduces methods that allow a contract to be paused and resumed, which is crucial for managing emergencies, upgrades, or maintenance periods.

**Key Methods and Features:**

- `pause()`: Pauses the contract, potentially halting critical operations to protect against unforeseen issues or to perform maintenance. When called, the contract enters a paused state where certain functions are restricted.

- `resume()`: Resumes the contract's operations after it has been paused. This method restores the contract to its normal working state, allowing all functionalities to be accessible again.

The interface also includes the `PauseEvent` class, which is emitted whenever the contract is paused or resumed. This event contains the `isPaused` boolean field, indicating the current state of the contract.

By implementing the Pausable interface, contracts gain greater control over their operational states, enhancing security and flexibility in response to various scenarios.

##### Key Methods

```typescript:src/pausable.ts
class PausableContract extends SmartContract {
  @method
  async pause() {
    // Logic to pause the contract
  }

  @method
  async resume() {
    // Logic to resume the contract
  }

  // ... Additional methods and properties
}

class PauseEvent extends Struct({
  isPaused: Bool,
}) {}
```

### Upgradable Interface

The **Upgradable Interface** introduces a standardized way to upgrade the verification keys of smart contracts on the Mina blockchain. It allows contracts to be updated securely and efficiently, ensuring they remain compatible with protocol changes or receive enhancements without deploying entirely new contracts.

**Key Classes and Features:**

- `VerificationKeyUpgradeData`: A structured data class containing the necessary information for upgrading a contract's verification key. It includes the contract's address, token ID, previous verification key hash, and the new verification key hash. It also provides a `hash()` method to generate a unique identifier for the upgrade data.

- `PublicKeyOption`: An optional `PublicKey` type, used to specify the next upgrade authority if needed. This is crucial when the current upgrade authority cannot be used in future upgrades due to changes in the o1js version or other factors.

- `UpgradeAuthorityAnswer`: A structured response from the upgrade authority after verifying the upgrade data. It contains:

  - `nextUpgradeAuthority`: An optional public key of the next upgrade authority if a change is required.
  - `isVerified`: A boolean indicating whether the upgrade data has been successfully verified.

- `UpgradeAuthorityBase`: An interface that any upgrade authority contract should implement. It extends `SmartContract` and requires the implementation of the `verifyUpgradeData()` method, which takes `VerificationKeyUpgradeData` as input and returns an `UpgradeAuthorityAnswer`.

- `UpgradableContract`: An interface for contracts that can be upgraded. It extends `SmartContract` and requires:
  - `getUpgradeContract()`: A method to retrieve the associated upgrade authority contract.
  - `upgradeVerificationKey()`: A method to upgrade the contract's verification key using the provided verification key.

By implementing the Upgradable Interface, contracts can securely upgrade their verification keys through a standardized process, maintaining the integrity and security of the smart contract ecosystem on Mina.

##### Key Classes and Methods

```typescript
class VerificationKeyUpgradeData extends Struct({
  address: PublicKey,
  tokenId: Field,
  previousVerificationKeyHash: Field,
  newVerificationKeyHash: Field,
}) {
  hash(): Field {
    return Poseidon.hash(VerificationKeyUpgradeData.toFields(this));
  }
}

class PublicKeyOption extends Option(PublicKey) {}

class UpgradeAuthorityAnswer extends Struct({
  nextUpgradeAuthority: PublicKeyOption,
  isVerified: Bool,
}) {}

type UpgradeAuthorityBase = SmartContract & {
  verifyUpgradeData(
    data: VerificationKeyUpgradeData
  ): Promise<UpgradeAuthorityAnswer>;
};

type UpgradableContract = SmartContract & {
  getUpgradeContract(): Promise<UpgradeAuthorityBase>;
  upgradeVerificationKey(vk: VerificationKey): Promise<void>;
};
```

**Usage Example:**

Contracts implementing the `UpgradableContract` interface can upgrade their verification keys by interacting with an upgrade authority contract that implements `UpgradeAuthorityBase`. By following this pattern, smart contracts can be upgraded in a secure and controlled manner, allowing for continuous improvements and compliance with evolving standards.

**Note:** If an upgrade requires changing the upgrade authority (due to compatibility issues with newer versions), the `nextUpgradeAuthority` field in `UpgradeAuthorityAnswer` provides the public key of the new authority to be used in future upgrades.

### Metadata Interface

The MinaNFT standard includes a robust `Metadata` interface that allows for secure and efficient representation of NFT metadata on-chain using Merkle trees. By leveraging Merkle trees, metadata can be stored compactly, and proofs can be generated to verify specific metadata elements without revealing the entire data.

##### Key Components

- **Metadata Class (`metadata.ts`):** Represents the metadata for an NFT, including traits and associated data. It uses a specialized `MetadataMap`, which is an `IndexedMerkleMap`, to store key-value pairs of metadata traits securely.

- **Text Class (`text.ts`):** Represents textual data in the form of a Merkle tree. Each character of the text is converted to its ASCII code and stored as a leaf in the Merkle tree. This allows for efficient verification and integrity checks of large text data without revealing the entire content.

- **MetadataTree Class (`tree.ts`):** Represents a metadata tree using a Merkle tree structure. It manages a set of key-value pairs where each key is an index in the tree, and each value is a `Field` element. This class enables secure and verifiable storage of arbitrary metadata.

- **MetadataPlugin Class (`metadata.ts`):** An abstract class for creating custom metadata plugins. Plugins can define custom trait types and how they are serialized and deserialized, allowing for extensible metadata schemas.

##### Key Classes and Methods

```typescript
// metadata.ts

class Metadata {
  readonly map: MetadataMap;
  readonly name: string;
  image: string;
  banner?: string;
  description?: string;
  plugins: MetadataPlugin[];
  traits: {
    [key: string]: {
      type: string;
      value: string | Field | Metadata | MetadataTree | unknown;
      isPrivate: boolean;
    };
  } = {};

  constructor(params: {
    name: string;
    image: string;
    description?: string;
    banner?: string;
    plugins?: MetadataPlugin[];
  }) {
    // Initialization logic...
  }

  /**
   * Adds a trait to the metadata.
   * @param params - The parameters including key, type, value, and isPrivate.
   */
  addTrait(params: {
    key: string;
    type: string;
    value: string | Field | Metadata | MetadataTree | unknown;
    isPrivate?: boolean;
  }): {
    key: Field;
    value: MetadataValue;
  } {
    // Trait addition logic...
  }

  /**
   * Converts the metadata to a JSON representation.
   * @param includePrivateTraits - Whether to include private traits.
   */
  toJSON(includePrivateTraits = false): {
    name: string;
    image: string;
    description?: string;
    banner?: string;
    metadataRoot: string;
    traits: {
      key: string;
      type: string;
      value: string | object;
      isPrivate?: boolean;
    }[];
  } {
    // Serialization logic...
  }

  /**
   * Constructs a Metadata instance from JSON data.
   */
  static fromJSON(params: {
    json: {
      name: string;
      image: string;
      description?: string;
      banner?: string;
      metadataRoot: string;
      traits: {
        key: string;
        type: string;
        value: string | object;
        isPrivate?: boolean;
      }[];
    };
    checkRoot?: boolean;
    plugins?: MetadataPlugin[];
  }): Metadata {
    // Deserialization logic...
  }
}

abstract class MetadataPlugin {
  readonly name: string;

  /**
   * Retrieves the trait representation of the metadata value.
   */
  abstract getTrait(params: {
    key: string;
    type: string;
    value: unknown;
    isPrivate?: boolean;
  }): {
    key: Field;
    value: MetadataValue;
    canonicalRepresentation: unknown;
  };

  /**
   * Converts the value to JSON.
   */
  abstract toJSON(value: unknown): string | object;

  /**
   * Parses the value from JSON.
   */
  abstract fromJSON(value: string | object): unknown;
}

class ColorPlugin extends MetadataPlugin {
  readonly name = "color";

  /**
   * Retrieves the trait representation of the color value.
   */
  getTrait(params: {
    key: string;
    type: string;
    value: Color | string | number;
  }): {
    key: Field;
    value: MetadataValue;
    canonicalRepresentation: number;
  } {
    // Trait handling logic...
  }

  /**
   * Converts the color value to a JSON string.
   */
  toJSON(value: Color | string | number): string {
    // Serialization logic...
  }

  /**
   * Parses the color value from a JSON string or object.
   */
  fromJSON(value: string | object): number {
    // Deserialization logic...
  }
}

// text.ts

class Text {
  readonly size: number;
  readonly text: string;
  readonly root: Field;
  readonly height: number;

  constructor(text: string, height: number = TEXT_TREE_HEIGHT) {
    // Initialization logic...
  }

  /**
   * Returns the original text string.
   */
  toString(): string {
    return this.text;
  }
}

// tree.ts

class MetadataTree {
  readonly values: { key: bigint; value: Field }[];
  readonly height: number;
  readonly root: Field;

  constructor(height: number, values: { key: bigint; value: Field }[]) {
    // Initialization logic...
  }

  /**
   * Serializes the MetadataTree to a JSON object.
   */
  toJSON(): {
    height: number;
    root: string;
    values: { key: string; value: string }[];
  } {
    // Serialization logic...
  }

  /**
   * Deserializes a JSON object into a MetadataTree instance.
   */
  static fromJSON(json: {
    height: number;
    root: string;
    values: { key: string; value: string }[];
  }): MetadataTree {
    // Deserialization logic...
  }
}
```

##### Usage Example

Here's how you can create and use the `Metadata` class with custom traits and plugins:

```typescript
import { Metadata, ColorPlugin } from "./metadata";

// Initialize metadata with basic attributes and plugins
const metadata = new Metadata({
  name: "MyUniqueNFT",
  image: "ipfs://imageHash",
  description: "An exclusive NFT.",
  plugins: [new ColorPlugin()],
});

// Add standard traits
metadata.addTrait({
  key: "rarity",
  type: "string",
  value: "legendary",
});

metadata.addTrait({
  key: "origin",
  type: "text",
  value: "Mina Protocol",
});

// Add a custom trait using a plugin
metadata.addTrait({
  key: "backgroundColor",
  type: "color",
  value: "blue",
});

// Serialize metadata to JSON
const metadataJSON = metadata.toJSON();

// Deserialize metadata from JSON
const metadataFromJSON = Metadata.fromJSON({
  json: metadataJSON,
  plugins: [new ColorPlugin()],
});
```

**Note:** By using Merkle trees to represent metadata, the MinaNFT standard ensures that metadata can be efficiently verified on-chain without storing the entire data. This approach is particularly useful for large text fields or complex nested metadata structures, enabling secure and verifiable NFTs on the Mina Protocol.

### NFT Program

The **NFT Program** is a Zero-Knowledge (ZK) program designed to provide privacy-preserving proofs for updating NFT metadata off-chain. It allows NFT owners to modify their NFTs' metadata without exposing sensitive information on-chain, ensuring both confidentiality and verifiability.

#### Key Methods and Features

- **`insertMetadata`**: Inserts a new key-value pair into the NFT's metadata Merkle tree. This method performs several critical steps:

  - Verifies that the signature provided is valid and corresponds to the NFT owner.
  - Ensures the key does not already exist in the metadata, preventing duplicate entries.
  - Updates the NFT state with the new metadata root and increments the version number.

- **`merge`**: Merges two self-proofs to produce an updated NFT state. This is useful for batching multiple metadata updates into a single proof, optimizing on-chain verification. It ensures:
  - Both proofs are valid and correctly verified.
  - The output of the first proof matches the input of the second, maintaining consistency.
  - Returns the final NFT state after applying both updates.

#### Usage Example

Here's how you can use the `NFTProgram` to update NFT metadata off-chain and generate a proof for on-chain verification:

```typescript
import { NFTProgram, MetadataMap, NFTState } from "./update";
import { Field, Signature, PrivateKey } from "o1js";

// Initialize the initial NFT state
const initialState = new NFTState({
  // ... initialize with existing NFT state fields
});

// Create a MetadataMap instance representing the current metadata Merkle tree
const metadata = new MetadataMap(initialState.metadata);

// Define the key and value to insert into the metadata
const key = Field(/* some key */);
const value = Field(/* some value */);

// Owner's private key
const ownerPrivateKey = PrivateKey.fromBase58(/* owner's private key */);
const ownerPublicKey = ownerPrivateKey.toPublicKey();

// Get the owner's signature authorizing the metadata update
const signature = Signature.create(ownerPrivateKey, [
  ...NFTState.toFields(initialState),
  key,
  value,
]);

// Generate a zero-knowledge proof for inserting the metadata
const { proof, publicOutput, auxiliaryOutput } = await NFTProgram.prove(
  "insertMetadata",
  initialState,
  metadata,
  key,
  value,
  signature
);

// The `publicOutput` contains the updated NFT state with the new metadata root
// The `auxiliaryOutput` is the updated MetadataMap that can be used for further updates

// The generated proof can be submitted on-chain to update the NFT's metadata
// The contract will verify the proof and update the on-chain state accordingly
```

**Note:** By using the NFT Program, you can perform multiple metadata updates off-chain and only submit succinct proofs to the blockchain. This approach greatly enhances scalability and privacy, as the actual metadata contents remain off-chain and are not exposed publicly.

#### Benefits of Using NFT Program

- **Privacy Preservation**: Sensitive metadata is kept off-chain, ensuring that only authorized parties can view or modify it.
- **Scalability**: Reduces on-chain computation and storage requirements by handling complex operations off-chain.
- **Verifiability**: On-chain verification of proofs ensures that all updates are authorized and comply with the NFT's rules.
- **Efficiency**: Batch multiple updates using the `merge` method to optimize transactions and reduce fees.

#### Important Considerations

- **Signature Verification**: It's crucial that the NFT owner's signature is correctly generated and verified to prevent unauthorized updates.
- **Off-chain Storage**: While metadata is stored off-chain, it's important to use reliable and secure storage solutions to prevent data loss or tampering.

By integrating the NFT Program into your NFT contracts, you can leverage advanced features of the Mina Protocol to build secure, private, and efficient NFT applications.

By keeping the constraint usage well below the maximum limit, we ensure that the contracts are efficient and maintain optimal performance on the Mina network.

## Gap Analysis in Comparison with ERC721

### Gap Analysis

In comparison to the ERC-721 standard, the MinaNFT standard intentionally omits or modifies certain features to align with the Mina Protocol's design and objectives.

| **Feature**             | **Recommendation**                          | **Reasoning**                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **balanceOf**           | Skip (Implementable off-chain)              | Implementing `balanceOf` on-chain would introduce significant overhead without much benefit. For NFTs, this feature is not critical, as NFTs represent unique assets rather than balances. For those requiring this functionality, it can be computed off-chain using tools like the Blockberry API, avoiding contract modifications.                                     |
| **tokenOfOwnerByIndex** | Skip (Implementable off-chain)              | On-chain implementation of this feature is infeasible, and off-chain solutions would be cumbersome with notable overhead. Since it’s not a crucial function for most NFT use cases, skipping it is recommended. Users needing this feature can calculate it off-chain via the Blockberry API without changing the contract.                                               |
| **safeTransferFrom**    | Skip (Near-equivalent functionality exists) | While `safeTransferFrom` ensures that NFTs are only transferred to valid addresses, similar protection is already built into MinaNFT’s buy/sell mechanism, where the receiver must sign for payment. Although a transfer could still occur to an invalid address, an off-chain check is already available in the frontend, making an on-chain implementation unnecessary. |
| **burn**                | Skip or Maybe Implement                     | Implementing a burn function is feasible, but its utility is limited unless account deletion and the recovery of the 1 MINA account creation fee are supported. As such, this feature can be deferred unless future developments make it more useful.                                                                                                                     |
|                         |

### Advantages of MinaNFT Over ERC-721

- **Enhanced Privacy**: MinaNFT allows for both public and private data to be associated with NFTs, ensuring that sensitive information can be securely stored and shared. With Mina’s zero-knowledge proofs, users can verify both public and private content without revealing any underlying data, a feature unavailable in ERC-721.
- **On-Chain and Off-Chain Verifiability**: MinaNFT enables both on-chain and off-chain verifiability of content, opening up new use cases such as attaching sensitive documents, contracts, and private media to NFTs while maintaining verifiable authenticity.
- **Lower Overhead for Transactions**: Since Mina does not require high gas fees like Ethereum, there is no need for features like `setApprovalForAll` designed to save on transaction costs. This allows the MinaNFT standard to focus on security and functionality rather than optimization for gas fees.

## Roadmap and Applications

### Upcoming Developments

- **MinaNFT V3**: Introduces new features such as IndexedMerkleMap for faster proof calculations, parent-child relationships, time-locked NFTs, Rollup NFT V3 for use in app-chains and L2, and monitoring and indexing infrastructure.
- **MinaNFT New Frontend**: A redesigned frontend with new features like leaderboards and ratings.
- **Support in Explorers and Wallets**: Integration of the new NFT standard into minascan explorer and wallets.
- **ZKProgram Plugins**: Community-created ZKPrograms (e.g., zkEmail) that can mutate and prove the metadata.
- **zkProver Project: RWA**: Real-world applications using programmable NFTs.

## Conclusion

The NFT standard on Mina Protocol presents a robust framework for creating and managing NFTs with enhanced privacy, security, and functionality. By leveraging Mina's zero-knowledge proofs and off-chain verifiability, the standard opens up new possibilities for NFTs in various domains. The detailed architecture and comprehensive contracts ensure interoperability and ease of integration, fostering a vibrant ecosystem for developers and users alike.

---

**Note**: The detailed methods and classes provided above are a summary based on the final design from the specified files. For complete implementations and the most up-to-date code, please refer to the actual codebase.
