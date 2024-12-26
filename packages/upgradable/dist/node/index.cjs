"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/node/index.js
var index_exports = {};
__export(index_exports, {
  ChainId: () => ChainId,
  PublicKeyOption: () => PublicKeyOption,
  UpgradeAuthorityAnswer: () => UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase: () => UpgradeAuthorityDatabase,
  UpgradeDatabaseState: () => UpgradeDatabaseState,
  UpgradeDatabaseStatePacked: () => UpgradeDatabaseStatePacked,
  ValidatorDecisionType: () => ValidatorDecisionType,
  ValidatorsDecision: () => ValidatorsDecision,
  ValidatorsDecisionState: () => ValidatorsDecisionState,
  ValidatorsList: () => ValidatorsList,
  ValidatorsListEvent: () => ValidatorsListEvent,
  ValidatorsState: () => ValidatorsState,
  ValidatorsVoting: () => ValidatorsVoting,
  ValidatorsVotingNativeProof: () => ValidatorsVotingNativeProof,
  ValidatorsVotingProof: () => ValidatorsVotingProof,
  VerificationKeyUpgradeAuthority: () => VerificationKeyUpgradeAuthority,
  VerificationKeyUpgradeData: () => VerificationKeyUpgradeData
});
module.exports = __toCommonJS(index_exports);

// dist/node/validators.js
var import_o1js2 = require("o1js");
var import_storage = require("@minatokens/storage");

// dist/node/upgradable.js
var import_o1js = require("o1js");
var VerificationKeyUpgradeData = class _VerificationKeyUpgradeData extends (0, import_o1js.Struct)({
  /** The address of the contract to be upgraded. */
  address: import_o1js.PublicKey,
  /** The token ID associated with the contract. */
  tokenId: import_o1js.Field,
  /** The hash of the previous verification key. */
  previousVerificationKeyHash: import_o1js.Field,
  /** The hash of the new verification key. */
  newVerificationKeyHash: import_o1js.Field
}) {
  /**
   * Generates a unique hash for the upgrade data using the Poseidon hash function.
   * @returns {Field} The hash representing the upgrade data.
   */
  hash() {
    return import_o1js.Poseidon.hash(_VerificationKeyUpgradeData.toFields(this));
  }
};
var PublicKeyOption = class extends (0, import_o1js.Option)(import_o1js.PublicKey) {
};
var UpgradeAuthorityAnswer = class extends (0, import_o1js.Struct)({
  /**
   * The public key of the next upgrade authority, if a change is required.
   *
   * If we upgrade the verification key, we may not be able to use the same upgrade
   * authority next time because the new o1js version can break the verification key
   * of the upgrade authority too, and since the upgrade authority serves many
   * contracts, it cannot be upgraded. In this case, we need to use another upgrade
   * authority with the public key that will be provided in `nextUpgradeAuthority`.
   */
  nextUpgradeAuthority: PublicKeyOption,
  /** Indicates whether the upgrade data has been successfully verified. */
  isVerified: import_o1js.Bool
}) {
};

// dist/node/validators.js
var import_mina_signer = __toESM(require("mina-signer"), 1);
var { IndexedMerkleMap } = import_o1js2.Experimental;
var VALIDATORS_LIST_HEIGHT = 10;
var UPGRADE_AUTHORITY_DATABASE_HEIGHT = 20;
var ValidatorsList = class extends IndexedMerkleMap(VALIDATORS_LIST_HEIGHT) {
};
var UpgradeAuthorityDatabase = class extends IndexedMerkleMap(UPGRADE_AUTHORITY_DATABASE_HEIGHT) {
};
var ChainId = {
  "mina:mainnet": fieldFromString("mina:mainnet"),
  "mina:devnet": fieldFromString("mina:devnet"),
  "zeko:mainnet": fieldFromString("zeko:mainnet"),
  "zeko:devnet": fieldFromString("zeko:devnet")
};
var ValidatorDecisionType = {
  updateDatabase: fieldFromString("updateDatabase"),
  updateValidatorsList: fieldFromString("updateValidatorsList")
};
var ValidatorsState = class _ValidatorsState extends (0, import_o1js2.Struct)({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: import_o1js2.Field,
  /** Merkle root of the ValidatorsList */
  root: import_o1js2.Field,
  /** Number of validators */
  count: import_o1js2.UInt32
}) {
  /**
   * Asserts that two `ValidatorsState` instances are equal.
   * @param a First `ValidatorsState` instance.
   * @param b Second `ValidatorsState` instance.
   */
  static assertEquals(a, b) {
    a.chainId.assertEquals(b.chainId);
    a.root.assertEquals(b.root);
    a.count.assertEquals(b.count);
  }
  /**
   * Computes the hash of the validators state.
   * @returns Hash of the current state.
   */
  hash() {
    return import_o1js2.Poseidon.hashPacked(_ValidatorsState, this);
  }
  /**
   * Returns an empty `ValidatorsState`.
   * @returns An empty `ValidatorsState` instance.
   */
  static empty() {
    return new _ValidatorsState({
      chainId: (0, import_o1js2.Field)(0),
      root: (0, import_o1js2.Field)(0),
      count: import_o1js2.UInt32.zero
    });
  }
};
var UpgradeDatabaseStatePacked = class extends (0, import_o1js2.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js2.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: import_storage.Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: import_o1js2.Field,
  /** Packed data containing version, validFrom, and flags */
  data: import_o1js2.Field
}) {
};
var UpgradeDatabaseState = class _UpgradeDatabaseState extends (0, import_o1js2.Struct)({
  /** Root of the UpgradeAuthority database */
  root: import_o1js2.Field,
  /** Storage information (e.g., IPFS hash) */
  storage: import_storage.Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: import_o1js2.UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: import_o1js2.UInt32
}) {
  /**
   * Asserts that two `UpgradeDatabaseState` instances are equal.
   * @param a First `UpgradeDatabaseState` instance.
   * @param b Second `UpgradeDatabaseState` instance.
   */
  static assertEquals(a, b) {
    a.root.assertEquals(b.root);
    import_storage.Storage.assertEquals(a.storage, b.storage);
    a.nextUpgradeAuthority.value.assertEquals(b.nextUpgradeAuthority.value);
    a.nextUpgradeAuthority.isSome.assertEquals(b.nextUpgradeAuthority.isSome);
    a.version.assertEquals(b.version);
  }
  /**
   * Returns an empty `UpgradeDatabaseState`.
   * @returns An empty `UpgradeDatabaseState` instance.
   */
  static empty() {
    return new _UpgradeDatabaseState({
      root: new UpgradeAuthorityDatabase().root,
      storage: import_storage.Storage.empty(),
      nextUpgradeAuthority: PublicKeyOption.none(),
      version: import_o1js2.UInt32.zero,
      validFrom: import_o1js2.UInt32.MAXINT()
    });
  }
  /**
   * Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.
   * @returns A packed representation of the upgrade database state.
   */
  pack() {
    const nextUpgradeAuthorityX = this.nextUpgradeAuthority.value.x;
    const data = import_o1js2.Field.fromBits([
      ...this.version.value.toBits(32),
      ...this.validFrom.value.toBits(32),
      this.nextUpgradeAuthority.value.isOdd,
      this.nextUpgradeAuthority.isSome
    ]);
    return new UpgradeDatabaseStatePacked({
      root: this.root,
      storage: this.storage,
      nextUpgradeAuthorityX,
      data
    });
  }
  /**
   * Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.
   * @param packed The packed upgrade database state.
   * @returns An unpacked `UpgradeDatabaseState` instance.
   */
  static unpack(packed) {
    const bits = packed.data.toBits(66);
    const versionBits = bits.slice(0, 32);
    const validFromBits = bits.slice(32, 64);
    const isOddBit = bits[64];
    const isSomeBit = bits[65];
    const version = import_o1js2.UInt32.Unsafe.fromField(import_o1js2.Field.fromBits(versionBits));
    const validFrom = import_o1js2.UInt32.Unsafe.fromField(import_o1js2.Field.fromBits(validFromBits));
    const nextUpgradeAuthority = PublicKeyOption.from(import_o1js2.PublicKey.from({ x: packed.nextUpgradeAuthorityX, isOdd: isOddBit }));
    nextUpgradeAuthority.isSome = isSomeBit;
    return new _UpgradeDatabaseState({
      root: packed.root,
      storage: packed.storage,
      nextUpgradeAuthority,
      version,
      validFrom
    });
  }
};
var ValidatorsDecision = class _ValidatorsDecision extends (0, import_o1js2.Struct)({
  /** Message to be signed when producing the nullifier, also serves as the nonce to prevent replay attacks */
  message: import_o1js2.Field,
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: import_o1js2.Field,
  /** UpgradeAuthority contract address */
  contractAddress: import_o1js2.PublicKey,
  /** Chain ID */
  chainId: import_o1js2.Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: import_o1js2.UInt32
}) {
  /**
   * Asserts that two `ValidatorsDecision` instances are equal.
   * @param a First `ValidatorsDecision` instance.
   * @param b Second `ValidatorsDecision` instance.
   */
  static assertEquals(a, b) {
    a.message.assertEquals(b.message);
    a.decisionType.assertEquals(b.decisionType);
    a.contractAddress.assertEquals(b.contractAddress);
    a.chainId.assertEquals(b.chainId);
    ValidatorsState.assertEquals(a.validators, b.validators);
    UpgradeDatabaseState.assertEquals(a.upgradeDatabase, b.upgradeDatabase);
    a.expiry.assertEquals(b.expiry);
  }
  createNullifierMessage() {
    return [this.message, ..._ValidatorsDecision.toFields(this)];
  }
  createJsonNullifier(params) {
    const { network, privateKey } = params;
    const minaSigner = new import_mina_signer.default({ network });
    const message = this.createNullifierMessage();
    const nullifier = minaSigner.createNullifier(message.map((field) => field.toBigInt()), privateKey.toBase58());
    return nullifier;
  }
};
var ValidatorsDecisionState = class _ValidatorsDecisionState extends (0, import_o1js2.Struct)({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Indexed Merkle Map root of the validators who have voted */
  alreadyVoted: import_o1js2.Field,
  /** Number of votes in favor of the decision */
  yesVotes: import_o1js2.UInt32,
  /** Number of votes against the decision */
  noVotes: import_o1js2.UInt32,
  /** Number of votes of abstention */
  abstainVotes: import_o1js2.UInt32
}) {
  static startVoting(decision) {
    return new _ValidatorsDecisionState({
      decision,
      alreadyVoted: new ValidatorsList().root,
      yesVotes: import_o1js2.UInt32.zero,
      noVotes: import_o1js2.UInt32.zero,
      abstainVotes: import_o1js2.UInt32.zero
    });
  }
  /**
   * Records a vote
   * @param validatorNullifier The nullifier of the validator.
   * @param validatorsList The ValidatorsList containing authorized validators.
   * @param votedList The ValidatorsList tracking who has already voted.
   * @param yes Whether this is a "yes" vote.
   * @param no Whether this is a "no" vote.
   * @param abstain Whether this is an "abstain" vote.
   * @param signature The signature of the validator.
   * @returns A new `ValidatorsDecisionState` reflecting the vote.
   */
  vote(validatorNullifier, validatorsList, votedList, yes, no, abstain, signature) {
    const publicKey = validatorNullifier.getPublicKey();
    const key = validatorNullifier.key();
    validatorNullifier.verify(this.decision.createNullifierMessage());
    const previousVotesCount = this.yesVotes.add(this.noVotes).add(this.abstainVotes);
    const yesVotes = this.yesVotes.add(import_o1js2.Provable.if(yes, import_o1js2.UInt32.from(1), import_o1js2.UInt32.from(0)));
    const noVotes = this.noVotes.add(import_o1js2.Provable.if(no, import_o1js2.UInt32.from(1), import_o1js2.UInt32.from(0)));
    const abstainVotes = this.abstainVotes.add(import_o1js2.Provable.if(abstain, import_o1js2.UInt32.from(1), import_o1js2.UInt32.from(0)));
    previousVotesCount.add(import_o1js2.UInt32.from(1)).assertEquals(yesVotes.add(noVotes).add(abstainVotes));
    const hash = import_o1js2.Poseidon.hashPacked(import_o1js2.PublicKey, publicKey);
    validatorsList.root.assertEquals(this.decision.validators.root);
    validatorsList.get(hash).assertBool("Wrong ValidatorsList format").assertTrue("Validator doesn't have authority to sign");
    signature.verify(publicKey, ValidatorsDecision.toFields(this.decision)).assertTrue("Wrong validator signature");
    this.decision.validators.root.assertEquals(validatorsList.root);
    votedList.root.assertEquals(this.alreadyVoted);
    votedList.insert(key, (0, import_o1js2.Field)(1));
    return new _ValidatorsDecisionState({
      decision: this.decision,
      alreadyVoted: votedList.root,
      yesVotes,
      noVotes,
      abstainVotes
    });
  }
  /**
   * Asserts that two `ValidatorsDecisionState` instances are equal.
   * @param a First `ValidatorsDecisionState` instance.
   * @param b Second `ValidatorsDecisionState` instance.
   */
  static assertEquals(a, b) {
    ValidatorsDecision.assertEquals(a.decision, b.decision);
    a.alreadyVoted.assertEquals(b.alreadyVoted);
    a.yesVotes.assertEquals(b.yesVotes);
    a.noVotes.assertEquals(b.noVotes);
    a.abstainVotes.assertEquals(b.abstainVotes);
  }
};
var ValidatorsVoting = (0, import_o1js2.ZkProgram)({
  name: "ValidatorsVoting",
  publicInput: ValidatorsDecisionState,
  publicOutput: ValidatorsDecisionState,
  methods: {
    /**
     * Starts the voting process for a decision.
     */
    startVoting: {
      privateInputs: [ValidatorsDecision],
      async method(state2, decision) {
        const calculatedState = ValidatorsDecisionState.startVoting(decision);
        ValidatorsDecisionState.assertEquals(state2, calculatedState);
        return { publicOutput: calculatedState };
      }
    },
    /**
     * Records a vote
     */
    vote: {
      privateInputs: [
        ValidatorsDecision,
        import_o1js2.Nullifier,
        ValidatorsList,
        ValidatorsList,
        import_o1js2.Bool,
        import_o1js2.Bool,
        import_o1js2.Bool,
        import_o1js2.Signature
      ],
      async method(state2, decision, nullifier, validatorsList, votedList, yes, no, abstain, signature) {
        const calculatedState = state2.vote(nullifier, validatorsList, votedList, yes, no, abstain, signature);
        return { publicOutput: calculatedState };
      }
    },
    /**
     * Merges two `ValidatorsDecisionState` proofs.
     */
    merge: {
      privateInputs: [import_o1js2.SelfProof, import_o1js2.SelfProof],
      async method(state2, proof1, proof2) {
        proof1.verify();
        proof2.verify();
        ValidatorsDecisionState.assertEquals(state2, proof1.publicInput);
        ValidatorsDecisionState.assertEquals(proof1.publicOutput, proof2.publicInput);
        return { publicOutput: proof2.publicOutput };
      }
    }
  }
});
var ValidatorsVotingNativeProof = class extends import_o1js2.ZkProgram.Proof(ValidatorsVoting) {
};
var _ValidatorsVotingProof = class _ValidatorsVotingProof extends import_o1js2.DynamicProof {
};
_ValidatorsVotingProof.publicInputType = ValidatorsDecisionState;
_ValidatorsVotingProof.publicOutputType = ValidatorsDecisionState;
_ValidatorsVotingProof.maxProofsVerified = 2;
_ValidatorsVotingProof.featureFlags = import_o1js2.FeatureFlags.allMaybe;
var ValidatorsVotingProof = _ValidatorsVotingProof;
function fieldFromString(storage) {
  const fields = import_o1js2.Encoding.stringToFields(storage);
  if (fields.length !== 1)
    throw new Error("String is too long");
  return fields[0];
}

// dist/node/upgrade.js
var import_tslib = require("tslib");
var import_o1js3 = require("o1js");
var import_storage2 = require("@minatokens/storage");
var ValidatorsListEvent = class extends (0, import_o1js3.Struct)({
  validators: ValidatorsState,
  storage: import_storage2.Storage
}) {
};
var VerificationKeyUpgradeAuthorityErrors = {
  WrongNewVerificationKeyHash: "Wrong new verification key hash"
};
var VerificationKeyUpgradeAuthority = class extends import_o1js3.SmartContract {
  constructor() {
    super(...arguments);
    this.verificationKeyHash = (0, import_o1js3.State)();
    this.validators = (0, import_o1js3.State)();
    this.upgradeDatabasePacked = (0, import_o1js3.State)();
    this.events = {
      validatorsList: ValidatorsListEvent,
      updateDatabase: UpgradeDatabaseState
    };
  }
  /**
   * Deploys the contract and sets the initial state.
   */
  async deploy() {
    await super.deploy();
    this.upgradeDatabasePacked.set(UpgradeDatabaseState.empty().pack());
    this.account.permissions.set({
      ...import_o1js3.Permissions.default(),
      setVerificationKey: (
        // The contract needs to be redeployed in the case of an upgrade.
        import_o1js3.Permissions.VerificationKey.impossibleDuringCurrentVersion()
      ),
      setPermissions: import_o1js3.Permissions.impossible()
    });
  }
  /**
   * Initializes the contract with validators and sets the verification key hash.
   *
   * @param {ValidatorsState} validators - The initial validators state.
   * @param {Storage} storage - Off-chain storage information, e.g., IPFS hash.
   * @param {Field} verificationKeyHash - The hash of the verification key.
   */
  async initialize(validators, storage, verificationKeyHash) {
    this.account.provedState.requireEquals((0, import_o1js3.Bool)(false));
    await this.setValidatorsList(validators, storage);
    this.verificationKeyHash.set(verificationKeyHash);
  }
  /**
   * Sets the validators list and emits an event.
   *
   * @param {ValidatorsState} validators - The validators state to set.
   * @param {Storage} storage - The storage associated with the validators list.
   */
  async setValidatorsList(validators, storage) {
    this.validators.set(validators.hash());
    this.emitEvent("validatorsList", new ValidatorsListEvent({ validators, storage }));
  }
  /**
   * Verifies the upgrade data provided by another contract.
   *
   * @param {VerificationKeyUpgradeData} data - The upgrade data to verify.
   * @returns {Promise<UpgradeAuthorityAnswer>} - The answer indicating verification result.
   */
  async verifyUpgradeData(data) {
    const upgradeDatabase = UpgradeDatabaseState.unpack(this.upgradeDatabasePacked.getAndRequireEquals());
    this.network.globalSlotSinceGenesis.requireBetween(upgradeDatabase.validFrom, import_o1js3.UInt32.MAXINT());
    const map = await import_o1js3.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await (0, import_storage2.loadIndexedMerkleMap)({
        url: (0, import_storage2.createIpfsURL)({ hash: upgradeDatabase.storage.toString() }),
        type: UpgradeAuthorityDatabase
      });
    });
    map.root.assertEquals(upgradeDatabase.root);
    const key = data.hash();
    const newVerificationKeyHash = map.get(key);
    newVerificationKeyHash.assertEquals(data.newVerificationKeyHash, VerificationKeyUpgradeAuthorityErrors.WrongNewVerificationKeyHash);
    return new UpgradeAuthorityAnswer({
      // Should be public key of the next upgrade authority in case
      // new version of o1js breaks the verification key of upgrade authority
      nextUpgradeAuthority: upgradeDatabase.nextUpgradeAuthority,
      isVerified: (0, import_o1js3.Bool)(true)
    });
  }
  /**
   * Updates the upgrade database after validator consensus.
   *
   * @param {ValidatorsVotingProof} proof - The proof of validators voting.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   */
  async updateDatabase(proof, vk, validators) {
    const oldUpgradeDatabase = UpgradeDatabaseState.unpack(this.upgradeDatabasePacked.getAndRequireEquals());
    const upgradeDatabase = proof.publicInput.decision.upgradeDatabase;
    upgradeDatabase.version.assertGreaterThan(oldUpgradeDatabase.version);
    await this.checkValidatorsDecision(proof, vk, ValidatorDecisionType["updateDatabase"], validators);
    const map = await import_o1js3.Provable.witnessAsync(UpgradeAuthorityDatabase, async () => {
      return await (0, import_storage2.loadIndexedMerkleMap)({
        url: (0, import_storage2.createIpfsURL)({ hash: upgradeDatabase.storage.toString() }),
        type: UpgradeAuthorityDatabase
      });
    });
    map.root.assertEquals(upgradeDatabase.root);
    this.upgradeDatabasePacked.set(upgradeDatabase.pack());
    this.emitEvent("updateDatabase", upgradeDatabase);
  }
  /**
   * Updates the validators list based on validator votes.
   *
   * @param {ValidatorsState} validators - The new validators state.
   * @param {Storage} storage - The storage associated with the validators list.
   * @param {ValidatorsVotingProof} proof - The proof of validators voting.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   */
  async updateValidatorsList(validators, storage, proof, vk) {
    await this.checkValidatorsDecision(proof, vk, ValidatorDecisionType["updateValidatorsList"], validators);
    await this.setValidatorsList(validators, storage);
  }
  /**
   * Checks the validators' decision by verifying the provided proof.
   *
   * @param {ValidatorsVotingProof} proof - The proof to verify.
   * @param {VerificationKey} vk - The verification key to validate the proof.
   * @param {Field} decisionType - The type of decision being validated.
   */
  async checkValidatorsDecision(proof, vk, decisionType, validatorsState) {
    this.network.globalSlotSinceGenesis.requireBetween(import_o1js3.UInt32.zero, proof.publicInput.decision.expiry);
    vk.hash.assertEquals(this.verificationKeyHash.getAndRequireEquals());
    proof.verify(vk);
    proof.publicInput.decision.validators.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicInput.decision.decisionType.assertEquals(decisionType);
    proof.publicInput.decision.contractAddress.assertEquals(this.address);
    validatorsState.hash().assertEquals(this.validators.getAndRequireEquals());
    proof.publicOutput.yesVotes.mul(2).assertGreaterThan(validatorsState.count);
  }
};
(0, import_tslib.__decorate)([
  (0, import_o1js3.state)(import_o1js3.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "verificationKeyHash", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js3.state)(import_o1js3.Field),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "validators", void 0);
(0, import_tslib.__decorate)([
  (0, import_o1js3.state)(UpgradeDatabaseStatePacked),
  (0, import_tslib.__metadata)("design:type", Object)
], VerificationKeyUpgradeAuthority.prototype, "upgradeDatabasePacked", void 0);
(0, import_tslib.__decorate)([
  import_o1js3.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsState,
    import_storage2.Storage,
    import_o1js3.Field
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "initialize", null);
(0, import_tslib.__decorate)([
  import_o1js3.method.returns(UpgradeAuthorityAnswer),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [VerificationKeyUpgradeData]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "verifyUpgradeData", null);
(0, import_tslib.__decorate)([
  import_o1js3.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsVotingProof,
    import_o1js3.VerificationKey,
    ValidatorsState
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateDatabase", null);
(0, import_tslib.__decorate)([
  import_o1js3.method,
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", [
    ValidatorsState,
    import_storage2.Storage,
    ValidatorsVotingProof,
    import_o1js3.VerificationKey
  ]),
  (0, import_tslib.__metadata)("design:returntype", Promise)
], VerificationKeyUpgradeAuthority.prototype, "updateValidatorsList", null);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainId,
  PublicKeyOption,
  UpgradeAuthorityAnswer,
  UpgradeAuthorityDatabase,
  UpgradeDatabaseState,
  UpgradeDatabaseStatePacked,
  ValidatorDecisionType,
  ValidatorsDecision,
  ValidatorsDecisionState,
  ValidatorsList,
  ValidatorsListEvent,
  ValidatorsState,
  ValidatorsVoting,
  ValidatorsVotingNativeProof,
  ValidatorsVotingProof,
  VerificationKeyUpgradeAuthority,
  VerificationKeyUpgradeData
});
