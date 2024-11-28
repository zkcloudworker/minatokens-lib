# NFT Standard on Mina Protocol

![Logo](/img/cover.png)

The MinaNFT project is an innovative Non-Fungible Token (NFT) platform that integrates the unique privacy features of the Mina blockchain. It is designed to redefine the NFT space by offering a range of functionalities that go beyond traditional NFT capabilities.

# NEW : Non-Fungible Token (NFT) Standard on Mina Protocol

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
- **Admin Contracts** (`admin.ts`, `whitelisted.ts`)
- **Upgrade Contract and ZkProgram** (`upgrade.ts`, `validators.ts`)
- **Helper Types, Events and Interfaces** (`types.ts`, `events.ts`, `ownable.ts`, `pausable.ts`, `upgradable.ts`, `standard.ts`,`metadata.ts`, `text.ts`, `tree.ts`)

Below is a detailed description of each contract, including their methods and functionalities.

### NFT Collection Contract

The **NFT Collection Contract** is responsible for managing a collection of NFTs. It handles minting new NFTs, transferring ownership, buying, selling, and interfacing with Admin Contracts for additional functionalities.

#### Key Features

- **Minting NFTs**: Allows creators and authorized users to mint new NFTs in the collection.
- **Transferring Ownership**: Enables the transfer of NFTs between users, with or without approval.
- **Buying and Selling**: Facilitates the listing and purchasing of NFTs, including royalty payments to creators.
- **Contract Upgrades**: Supports upgrading the verification keys for both the collection and individual NFTs.
- **Administrative Functions**: Integrates with Admin Contracts for additional checks like KYC/AML compliance.
- **Pausing and Resuming**: Provides mechanisms to pause and resume the collection or individual NFTs.

#### State Variables

- `collectionName`: The name of the NFT collection (`Field`).
- `creator`: The public key of the creator of the collection, used for royalty payments (`PublicKey`).
- `admin`: The public key of the Admin Contract (`PublicKey`).
- `baseURL`: The base URL for the metadata of the NFTs in the collection (`Field`).
- `packedData`: A packed data field containing additional collection parameters, such as flags and fee configurations (`CollectionDataPacked`).

#### Key Methods

```typescript
class NFTCollectionContract
  extends TokenContract
  implements UpgradableContract, OwnableContract, PausableContract
{
  @state(Field) collectionName = State<Field>();
  @state(PublicKey) creator = State<PublicKey>();
  @state(PublicKey) admin = State<PublicKey>();
  @state(Field) baseURL = State<Field>();
  @state(CollectionDataPacked) packedData = State<CollectionDataPacked>();

  async deploy(props: CollectionDeployProps): Promise<void> {
    // Deploy the contract with initial settings
  }

  @method
  async initialize(masterNFT: MintParams, collectionData: CollectionData) {
    // Initialize the collection with a master NFT and initial data
  }

  @method
  async mintByCreator(params: MintParams): Promise<void> {
    // Creator mints a new NFT in the collection
  }

  @method
  async mint(mintRequest: MintRequest): Promise<void> {
    // Mint a new NFT with approval
  }

  @method
  async update(proof: NFTUpdateProof, vk: VerificationKey): Promise<void> {
    // Update the NFT without approval
  }

  @method
  async updateWithApproval(
    proof: NFTUpdateProof,
    vk: VerificationKey
  ): Promise<void> {
    // Update the NFT with admin approval
  }

  @method
  async sell(address: PublicKey, price: UInt64): Promise<void> {
    // List an NFT for sale without approval
  }

  @method
  async sellWithApproval(address: PublicKey, price: UInt64): Promise<void> {
    // List an NFT for sale with admin approval
  }

  @method
  async buy(address: PublicKey, price: UInt64): Promise<void> {
    // Purchase an NFT without approval
  }

  @method
  async buyWithApproval(address: PublicKey, price: UInt64): Promise<void> {
    // Purchase an NFT with admin approval
  }

  @method
  async transfer(address: PublicKey, to: PublicKey): Promise<void> {
    // Transfer ownership of an NFT without approval
  }

  @method
  async transferWithApproval(address: PublicKey, to: PublicKey): Promise<void> {
    // Transfer ownership of an NFT with admin approval
  }

  @method
  async upgradeNFTVerificationKey(
    address: PublicKey,
    vk: VerificationKey
  ): Promise<void> {
    // Upgrade the verification key of a specific NFT
  }

  @method
  async upgradeVerificationKey(vk: VerificationKey): Promise<void> {
    // Upgrade the verification key of the collection contract
  }

  @method
  async limitMinting(): Promise<void> {
    // Limit further minting of NFTs in the collection
  }

  @method
  async pause(): Promise<void> {
    // Pause the collection, disabling certain actions
  }

  @method
  async resume(): Promise<void> {
    // Resume the collection, re-enabling actions
  }

  @method
  async pauseNFT(address: PublicKey): Promise<void> {
    // Pause a specific NFT, disabling its actions
  }

  @method
  async resumeNFT(address: PublicKey): Promise<void> {
    // Resume a specific NFT, re-enabling its actions
  }

  @method
  async updateConfiguration(
    configuration: CollectionConfigurationUpdate
  ): Promise<void> {
    // Update the collection's configuration (e.g., name, base URL, fees)
  }

  @method
  async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
    // Transfer ownership of the collection to a new owner
  }

  // ... Additional helper and internal methods
}
```

#### Events

- `mint`: Emitted when a new NFT is minted.
- `update`: Emitted when an NFT is updated.
- `transfer`: Emitted when an NFT is transferred.
- `sell`: Emitted when an NFT is listed for sale.
- `buy`: Emitted when an NFT is purchased.
- `approveMint`: Emitted when an admin approves minting.
- `approveUpdate`: Emitted when an admin approves an update.
- `approveSell`: Emitted when an admin approves a sale.
- `approveBuy`: Emitted when an admin approves a purchase.
- `upgradeNFTVerificationKey`: Emitted when an NFT verification key is upgraded.
- `upgradeVerificationKey`: Emitted when the collection verification key is upgraded.
- `limitMinting`: Emitted when minting is limited.
- `pause`: Emitted when the collection is paused.
- `resume`: Emitted when the collection is resumed.
- `pauseNFT`: Emitted when an NFT is paused.
- `resumeNFT`: Emitted when an NFT is resumed.
- `ownershipChange`: Emitted when ownership of the collection changes.

#### Flags

The **Collection Data Flags** control various aspects of the NFT collection's behavior and permissions. Below is a description of each flag:

- **requireTransferApproval** (`Bool`): If `true`, transferring NFTs within this collection requires approval from the admin contract.
- **requireUpdateApproval** (`Bool`): If `true`, updating NFTs (such as changing metadata) requires approval from the admin contract.
- **requireSaleApproval** (`Bool`): If `true`, listing NFTs for sale requires approval from the admin contract.
- **requireBuyApproval** (`Bool`): If `true`, purchasing NFTs requires approval from the admin contract.
- **requireCreatorSignatureToUpgradeCollection** (`Bool`): If `true`, upgrading the collection's verification key requires the creator's signature.
- **requireCreatorSignatureToUpgradeNFT** (`Bool`): If `true`, upgrading an NFT's verification key requires the creator's signature.
- **canMint** (`Bool`): If `true`, new NFTs can be minted in this collection.
- **canPause** (`Bool`): If `true`, the collection can be paused and resumed by authorized parties.
- **canChangeName** (`Bool`): If `true`, the name of the collection can be changed.
- **canChangeCreator** (`Bool`): If `true`, the creator of the collection can be changed.
- **canChangeBaseUri** (`Bool`): If `true`, the base URI for the collection's metadata can be changed.
- **canChangeRoyalty** (`Bool`): If `true`, the royalty fee configuration can be changed.
- **canChangeTransferFee** (`Bool`): If `true`, the transfer fee configuration can be changed.
- **canSetAdmin** (`Bool`): If `true`, the admin contract associated with the collection can be changed.
- **isPaused** (`Bool`): If `true`, the collection is currently paused, and certain actions are disabled.

These flags enable fine-grained control over the collection's behavior, allowing creators and administrators to enforce custom policies and permissions as needed.

#### Notes

- The contract interacts with Admin Contracts and Upgrade Authority Contracts to manage permissions and upgrades.
- The contract handles both approval-required and approval-free operations, depending on the collection's configuration.
- The `packedData` state variable contains flags and configurations that control the behavior of the contract.

### NFT Contract

The **NFT Contract** represents an individual NFT within a collection. It manages the state and behavior of a single NFT, including ownership, metadata, storage, pricing, and permissions. The contract provides functionality for updating NFT properties with proofs and permissions, transferring ownership, selling and buying NFTs, upgrading the verification key, and pausing or resuming the NFT.

#### State Variables

- `name`: The name of the NFT (`Field`).
- `metadata`: The metadata associated with the NFT (`Field`).
- `owner`: The current owner of the NFT (`PublicKey`).
- `storage`: Holds off-chain storage information, e.g., IPFS hash (`Storage`).
- `packedData`: A packed field containing additional NFT data and flags (`Field`).
- `metadataVerificationKeyHash`: The hash of the verification key used for metadata proofs (`Field`).

#### Key Methods

```typescript
class NFT extends SmartContract implements PausableContract {
  @method.returns(Field)
  async update(
    input: NFTState,
    output: NFTState,
    creator: PublicKey
  ): Promise<Field> {
    // Update the NFT's state with provided proofs and permissions
  }

  @method.returns(SellEvent)
  async sell(price: UInt64, seller: PublicKey): Promise<SellEvent> {
    // List the NFT for sale at a specified price
  }

  @method.returns(BuyEvent)
  async buy(price: UInt64, buyer: PublicKey): Promise<BuyEvent> {
    // Purchase the NFT, transferring ownership and handling payment
  }

  @method.returns(PublicKey)
  async transfer(from: PublicKey, to: PublicKey): Promise<PublicKey> {
    // Transfer ownership of the NFT from one user to another
  }

  @method.returns(UpgradeVerificationKeyEvent)
  async upgradeVerificationKey(
    vk: VerificationKey,
    sender: PublicKey
  ): Promise<UpgradeVerificationKeyEvent> {
    // Upgrade the verification key used by the NFT contract
  }

  @method
  async pause(): Promise<void> {
    // Pause the NFT, disabling certain actions
  }

  @method
  async resume(): Promise<void> {
    // Resume the NFT, re-enabling actions
  }

  // ... Additional methods and helper functions
}
```

#### Events

- `update`: Emitted when the NFT's state is updated.
- `ownershipChange`: Emitted when the ownership of the NFT changes.
- `transfer`: Emitted when the NFT is transferred.
- `sell`: Emitted when the NFT is listed for sale.
- `buy`: Emitted when the NFT is purchased.
- `upgradeVerificationKey`: Emitted when the NFT's verification key is upgraded.
- `pause`: Emitted when the NFT is paused or resumed.

#### Flags

The **NFT Data Flags** control various aspects of the NFT's behavior and permissions. Below is a description of each flag:

- **canChangeOwnerByProof** (Bool, readonly): Determines whether the NFT's ownership can be changed via a zero-knowledge proof.

- **canChangeOwnerBySignature** (Bool, readonly): Specifies if the NFT's ownership can be transferred through the owner's signature.

- **canChangeMetadata** (Bool, readonly): Indicates whether the NFT's metadata can be updated.

- **canChangePrice** (Bool, readonly): Indicates if the price of the NFT can be modified.

- **canChangeStorage** (Bool, readonly): Determines whether the storage associated with the NFT can be altered.

- **canChangeName** (Bool, readonly): Specifies if the name of the NFT can be changed.

- **canChangeMetadataVerificationKeyHash** (Bool, readonly): Indicates whether the verification key hash for the metadata can be changed.

- **canPause** (Bool, readonly): Specifies if the NFT contract can be paused, preventing certain operations.

- **isPaused** (Bool): Indicates whether the NFT contract is currently paused.

- **requireOwnerSignatureToUpgrade** (Bool, readonly): Determines whether the owner's signature is required to upgrade the NFT's verification key.

### Admin Contracts

The **Admin Contracts** provide administrative functionalities for the NFT Collection. They allow for additional checks and controls, such as KYC/AML compliance, whitelisting, pausing the contract, and upgrading contract logic.

#### NFTAdminBase Interface

The `NFTAdminBase` interface defines the administrative functionalities required for managing an NFT collection on the Mina Protocol. It extends the `SmartContract` class and specifies methods that enforce permissions and validations for various NFT operations.

**Type Definition:**

```typescript
type NFTAdminBase = SmartContract & {
  canMint(nft: MintRequest): Promise<MintParamsOption>;
  canUpdate(input: NFTState, output: NFTState): Promise<Bool>;
  canTransfer(
    address: PublicKey,
    from: PublicKey,
    to: PublicKey
  ): Promise<Bool>;
  canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<Bool>;
  canBuy(
    address: PublicKey,
    seller: PublicKey,
    buyer: PublicKey,
    price: UInt64
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

- `canTransfer(address: PublicKey, from: PublicKey, to: PublicKey): Promise<Bool>`

  - **Description**: Determines if an NFT can be transferred from one owner (`from`) to another (`to`) for a specific NFT contract address.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the transfer is allowed.

- `canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<Bool>`

  - **Description**: Validates if an NFT can be listed for sale by a seller at a specified price.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the sale is permissible.

- `canBuy(address: PublicKey, seller: PublicKey, buyer: PublicKey, price: UInt64): Promise<Bool>`
  - **Description**: Checks whether a buyer is allowed to purchase an NFT from a seller at a given price.
  - **Returns**: A `Promise` resolving to a `Bool` indicating whether the purchase is allowed.

**Purpose:**

Implementing the `NFTAdminBase` interface ensures that an administrative contract provides the necessary methods to control and validate key NFT operations. This standardization allows different admin contracts to enforce specific rules (e.g., whitelisting, KYC/AML compliance) while maintaining a consistent interface for the NFT collection.

**Constructor Type:**

```typescript
type NFTAdminContractConstructor = new (admin: PublicKey) => NFTAdminBase;
```

- **Description**: Defines a constructor for contracts implementing `NFTAdminBase`, accepting an `admin` public key and returning an instance of `NFTAdminBase`.

#### Standard Admin Contract

The **Standard Admin Contract** serves as the foundational administrative layer for NFT collections on the Mina Protocol. It provides essential functionalities such as contract upgrades, pausing and resuming operations, and ownership management. This contract can be extended by custom admin contracts to implement specific administrative logic, ensuring flexibility while maintaining a standardized interface.

##### Key Features

- **Upgrade Mechanism**: Allows for upgrading the contract's verification key, enabling updates to the contract's logic and functionality while maintaining security and integrity.

- **Pause and Resume Functionality**: Implements mechanisms to pause and resume the contract's operations, providing control over the contract's availability and the ability to respond to unforeseen events.

- **Ownership Management**: Supports transferring ownership of the contract, allowing the current admin to delegate administrative responsibilities to another account.

- **Administrative Controls**: Provides methods to enforce administrative rules for minting, updating, transferring, selling, and buying NFTs, ensuring that only authorized actions are permitted.

##### State Variables

- `admin`: The public key of the contract's administrator (`PublicKey`). This account has the authority to perform administrative actions such as pausing the contract or upgrading the verification key.

- `upgradeAuthority`: The public key of the upgrade authority contract (`PublicKey`). This is the contract responsible for validating and authorizing upgrades to the verification key.

- `isPaused`: A boolean flag indicating whether the contract is currently paused (`Bool`). When `true`, certain operations are disabled.

- `canPause`: A boolean flag indicating whether the contract has the ability to be paused (`Bool`). This allows for disabling the pause functionality if desired.

##### Key Methods

```typescript
class NFTAdmin
  extends SmartContract
  implements
    NFTAdminBase,
    UpgradableContract,
    PausableContract,
    OwnableContract
{
  @state(PublicKey) admin = State<PublicKey>();
  @state(PublicKey) upgradeAuthority = State<PublicKey>();
  @state(Bool) isPaused = State<Bool>();
  @state(Bool) canPause = State<Bool>();

  async deploy(props: NFTAdminDeployProps) {
    // Deploy the contract with initial settings
  }

  @method
  async upgradeVerificationKey(vk: VerificationKey) {
    // Upgrades the contract's verification key after validating with the upgrade authority
  }

  @method.returns(MintParamsOption)
  async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
    // Determines whether minting is allowed for the given request
    // Returns mint parameters if allowed, or none if not allowed
  }

  @method.returns(Bool)
  async canUpdate(input: NFTState, output: NFTState): Promise<Bool> {
    // Checks whether the NFT state can be updated
    // Typically returns true if the contract is not paused
  }

  @method.returns(Bool)
  async canTransfer(
    address: PublicKey,
    from: PublicKey,
    to: PublicKey
  ): Promise<Bool> {
    // Determines whether a transfer between the specified addresses is permitted
  }

  @method.returns(Bool)
  async canSell(
    address: PublicKey,
    seller: PublicKey,
    price: UInt64
  ): Promise<Bool> {
    // Determines whether the NFT can be listed for sale at the given price
  }

  @method.returns(Bool)
  async canBuy(
    address: PublicKey,
    seller: PublicKey,
    buyer: PublicKey,
    price: UInt64
  ): Promise<Bool> {
    // Determines whether the NFT can be purchased by the buyer from the seller at the given price
  }

  @method
  async pause(): Promise<void> {
    // Pauses the contract, disabling certain administrative actions
  }

  @method
  async resume(): Promise<void> {
    // Resumes the contract, re-enabling administrative actions
  }

  @method.returns(PublicKey)
  async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
    // Transfers ownership of the contract to a new admin
    // Returns the old owner's public key
  }

  // ... Additional methods and helper functions
}
```

#### Whitelisted Admin Contract

The **Whitelisted Admin Contract** (`whitelisted.ts`) is an implementation of an admin contract that uses a whitelist to control access to certain actions within the NFT ecosystem. This contract ensures that only whitelisted addresses can perform specific actions such as minting, updating, transferring, buying, or selling NFTs. It also introduces functionality for pausing and resuming the contract, upgrading the contract's verification key, and transferring ownership.

#### State Variables

- `admin`: The public key of the admin or owner of the contract (`PublicKey`).
- `upgradeAuthority`: The public key of the Upgrade Authority Contract (`PublicKey`).
- `whitelistRoot`: The root hash of the Merkle tree representing the whitelist (`Field`).
- `storage`: Off-chain storage information, typically an IPFS hash pointing to the whitelist data (`Storage`).
- `pauseData`: A packed field containing pause-related flags (`Field`).

#### Key Methods

```typescript:src/admin/whitelisted.ts
class NFTWhitelistedAdmin extends SmartContract
  implements NFTAdminBase, UpgradableContract, PausableContract, OwnableContract {

  @method.returns(MintParamsOption)
  async canMint(mintRequest: MintRequest): Promise<MintParamsOption> {
    // Determines if the minting request can proceed by checking if the owner and sender are whitelisted
  }

  @method.returns(Bool)
  async canUpdate(input: NFTState, output: NFTState): Promise<Bool> {
    // Checks whether the NFT's state can be updated, ensuring the new owner is whitelisted
  }

  @method.returns(Bool)
  async canTransfer(address: PublicKey, from: PublicKey, to: PublicKey): Promise<Bool> {
    // Verifies if the transfer between 'from' and 'to' addresses is allowed based on whitelist status
  }

  @method.returns(Bool)
  async canSell(address: PublicKey, seller: PublicKey, price: UInt64): Promise<Bool> {
    // Determines if the seller is permitted to list the NFT for sale at the specified price
  }

  @method.returns(Bool)
  async canBuy(address: PublicKey, seller: PublicKey, buyer: PublicKey, price: UInt64): Promise<Bool> {
    // Determines if the buyer and seller are allowed to perform the transaction at the specified price
  }

  @method
  async pause(): Promise<void> {
    // Pauses the contract, preventing certain administrative actions from being performed
  }

  @method
  async resume(): Promise<void> {
    // Resumes the contract, allowing administrative actions to be performed again
  }

  @method.returns(PublicKey)
  async transferOwnership(newOwner: PublicKey): Promise<PublicKey> {
    // Transfers ownership of the contract to a new admin and returns the old owner's public key
  }

  @method
  async upgradeVerificationKey(vk: VerificationKey): Promise<void> {
    // Upgrades the contract's verification key using the Upgrade Authority Contract
  }

  @method
  async updateMerkleMapRoot(whitelistRoot: Field, storage: Storage): Promise<void> {
    // Updates the whitelist's Merkle root and the associated off-chain storage reference
  }

  // ... Additional methods and helper functions
}
```

#### Key Features

- **Whitelist Enforcement**: Ensures that only addresses included in the whitelist can mint, update, transfer, sell, or buy NFTs. The whitelist is stored as a Merkle tree for efficient verification.
- **Pause and Resume Functionality**: Allows the admin to pause and resume the contract, controlling the ability to perform certain actions.
- **Ownership Transfer**: Supports transferring contract ownership to a new admin securely.
- **Upgrade Mechanism**: Integrates with an Upgrade Authority Contract to manage verification key upgrades without altering the core contract.
- **Merkle Tree Whitelist Management**: Provides methods to update the whitelist root and off-chain storage, allowing dynamic management of whitelisted addresses.

#### Events

- `upgradeVerificationKey`: Emitted when the contract's verification key is upgraded.
- `pause`: Emitted when the contract is paused.
- `resume`: Emitted when the contract is resumed.
- `ownershipChange`: Emitted when ownership of the contract changes.

#### Notes

- The contract interacts closely with the **Upgrade Authority Contract** to handle verification key upgrades securely.
- Off-chain storage (e.g., IPFS) is used to store the full whitelist data, with only the root hash stored on-chain to optimize performance.
- The **PauseData** struct is used to manage pause-related states, efficiently packed into a single `Field`.
- The contract ensures compliance and access control, making it suitable for use cases requiring KYC/AML verification or restricted participation.

#### Usage Example

This admin contract is ideal for scenarios such as:

- **KYC/AML-Enabled NFTs**: Only users who have passed KYC/AML checks and are included in the whitelist can mint, transfer, buy, or sell NFTs.
- **Exclusive NFT Collections**: Creators can restrict NFT interactions to a specific group of users by managing the whitelist.

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

### Number of Constraints

The Mina blockchain imposes a maximum constraint limit of 65,536 rows for zk-SNARK proofs generated by smart contracts. It is essential to be aware of the number of constraints used by each contract to ensure they are within acceptable limits and to optimize performance.

Below is a summary of the constraints used by each key contract in the MinaNFT standard:

| **Contract**      | **Constraints (rows)** | **Percentage of Max Constraints** |
| ----------------- | ---------------------- | --------------------------------- |
| Collection        | 30,771                 | 46.95%                            |
| NFT               | 6,237                  | 9.52%                             |
| Standard Admin    | 5,108                  | 7.79%                             |
| Whitelisted Admin | 11,162                 | 17.03%                            |
| Upgrade Authority | 2,714                  | 4.14%                             |
| NFTProgram        | 1,800                  | 2.75%                             |

- **Collection Contract** (`collection.ts`): The most constraint-heavy contract with 30,771 constraints (46.95%). It manages the collection of NFTs, including minting, transferring, and interfacing with admin contracts.
- **NFT Contract** (`nft.ts`): Uses 6,237 constraints, which is 9.52% of the maximum allowed. This contract handles individual NFT logic, including ownership and metadata management.
- **Standard Admin Contract** (`admin.ts`): With 5,108 constraints (7.79%), this contract manages administrative functions such as controlling minting permissions and verifying transactions.
- **Whitelisted Admin Contract** (`whitelisted.ts`): At 11,162 constraints (17.03%), this contract adds functionality for whitelist management, ensuring only approved addresses can interact with certain features.
- **UpgradeAuthority Contract** (`upgrade.ts`): Uses 2,714 constraints (4.14%), allowing for the upgrading of contracts and verification keys securely.
- **NFTProgram** (`nftProgram.ts`): Utilizes 1,800 constraints (2.75%), representing ZK programs that interact with the NFTs for advanced features like metadata proofs.

By keeping the constraint usage well below the maximum limit, we ensure that the contracts are efficient and maintain optimal performance on the Mina network.

### Test Coverage

```sh
yarn coverage
```

The test statements coverage is summarized below:

| **Contract**      | **Test Statements Coverage** |
| ----------------- | ---------------------------- |
| NFT               | 100%                         |
| Collection        | 98.6%                        |
| Standard Admin    | 97.33%                       |
| Whitelisted Admin | 86.6%                        |
| Upgrade Authority | 100%                         |

## Gap Analysis in Comparison with ERC721

### Gap Analysis

In comparison to the ERC-721 standard, the MinaNFT standard intentionally omits or modifies certain features to align with the Mina Protocol's design and objectives.

| **Feature**                                      | **Recommendation**                          | **Reasoning**                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **balanceOf**                                    | Skip (Implementable off-chain)              | Implementing `balanceOf` on-chain would introduce significant overhead without much benefit. For NFTs, this feature is not critical, as NFTs represent unique assets rather than balances. For those requiring this functionality, it can be computed off-chain using tools like the Blockberry API, avoiding contract modifications.                                     |
| **tokenOfOwnerByIndex**                          | Skip (Implementable off-chain)              | On-chain implementation of this feature is infeasible, and off-chain solutions would be cumbersome with notable overhead. Since it’s not a crucial function for most NFT use cases, skipping it is recommended. Users needing this feature can calculate it off-chain via the Blockberry API without changing the contract.                                               |
| **approval: approve, setApprovalForAll**         | Skip (Anti-feature)                         | The approval functionality is often considered unsafe, as it has led to token theft in ERC-721 implementations. Furthermore, it was introduced to save gas on Ethereum, which is not a concern on Mina. Given its potential risks and limited relevance, it’s best to skip this feature in the Mina implementation.                                                       |
| **safeTransferFrom**                             | Skip (Near-equivalent functionality exists) | While `safeTransferFrom` ensures that NFTs are only transferred to valid addresses, similar protection is already built into MinaNFT’s buy/sell mechanism, where the receiver must sign for payment. Although a transfer could still occur to an invalid address, an off-chain check is already available in the frontend, making an on-chain implementation unnecessary. |
| **burn**                                         | Skip or Maybe Implement                     | Implementing a burn function is feasible, but its utility is limited unless account deletion and the recovery of the 1 MINA account creation fee are supported. As such, this feature can be deferred unless future developments make it more useful.                                                                                                                     |
| **Composability with 3rd Party Smart Contracts** | Defer to next version                       | Composability is currently limited in Mina. Introducing a `caller` field or loosening restrictions on `AccountUpdate`s would greatly enhance this. For now, composability can be postponed for a future version (v2) of the library.                                                                                                                                      |

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
