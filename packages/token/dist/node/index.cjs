"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/node/index.js
var index_exports = {};
__export(index_exports, {
  AdvancedAdminData: () => AdvancedAdminData,
  AdvancedFungibleToken: () => AdvancedFungibleToken,
  BalanceChangeEvent: () => BalanceChangeEvent,
  BurnEvent: () => BurnEvent,
  FungibleToken: () => FungibleToken,
  FungibleTokenAdmin: () => FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin: () => FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract: () => FungibleTokenBidContract,
  FungibleTokenContract: () => FungibleTokenContract,
  FungibleTokenErrors: () => FungibleTokenErrors,
  FungibleTokenOfferContract: () => FungibleTokenOfferContract,
  LAUNCH_FEE: () => LAUNCH_FEE,
  MintEvent: () => MintEvent,
  PauseEvent: () => PauseEvent,
  SetAdminEvent: () => SetAdminEvent,
  TRANSACTION_FEE: () => TRANSACTION_FEE,
  buildTokenLaunchTransaction: () => buildTokenLaunchTransaction,
  buildTokenTransaction: () => buildTokenTransaction,
  fetchMinaAccount: () => fetchMinaAccount,
  getTokenSymbolAndAdmin: () => getTokenSymbolAndAdmin,
  tokenContracts: () => tokenContracts,
  tokenVerificationKeys: () => tokenVerificationKeys
});
module.exports = __toCommonJS(index_exports);

// dist/node/bid.js
var import_tslib4 = require("tslib");
var import_o1js4 = require("o1js");
var import_storage2 = require("@minatokens/storage");

// dist/node/FungibleTokenContract.js
var import_tslib = require("tslib");
var import_o1js = require("o1js");
var FungibleTokenErrors = {
  noAdminKey: "could not fetch admin contract key",
  noPermissionToChangeAdmin: "Not allowed to change admin contract",
  tokenPaused: "Token is currently paused",
  noPermissionToMint: "Not allowed to mint tokens",
  noPermissionToPause: "Not allowed to pause token",
  noPermissionToResume: "Not allowed to resume token",
  noTransferFromCirculation: "Can't transfer to/from the circulation account",
  noPermissionChangeAllowed: "Can't change permissions for access or receive on token accounts",
  flashMinting: "Flash-minting or unbalanced transaction detected. Please make sure that your transaction is balanced, and that your `AccountUpdate`s are ordered properly, so that tokens are not received before they are sent.",
  unbalancedTransaction: "Transaction is unbalanced"
};
function FungibleTokenContract(adminContract) {
  class FungibleToken2 extends import_o1js.TokenContract {
    constructor() {
      super(...arguments);
      this.decimals = (0, import_o1js.State)();
      this.admin = (0, import_o1js.State)();
      this.paused = (0, import_o1js.State)();
      this.events = {
        SetAdmin: SetAdminEvent,
        Pause: PauseEvent,
        Mint: MintEvent,
        Burn: BurnEvent,
        BalanceChange: BalanceChangeEvent
      };
    }
    async deploy(props) {
      await super.deploy(props);
      this.paused.set((0, import_o1js.Bool)(true));
      this.account.zkappUri.set(props.src);
      this.account.tokenSymbol.set(props.symbol);
      this.account.permissions.set({
        ...import_o1js.Permissions.default(),
        setVerificationKey: props.allowUpdates ? import_o1js.Permissions.VerificationKey.proofDuringCurrentVersion() : import_o1js.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
        setPermissions: import_o1js.Permissions.impossible(),
        access: import_o1js.Permissions.proof()
      });
    }
    /** Update the verification key.
     * This will only work when `allowUpdates` has been set to `true` during deployment.
     */
    async updateVerificationKey(vk) {
      const adminContract2 = await this.getAdminContract();
      const canChangeVerificationKey = await adminContract2.canChangeVerificationKey(vk);
      canChangeVerificationKey.assertTrue(FungibleTokenErrors.noPermissionToChangeAdmin);
      this.account.verificationKey.set(vk);
    }
    /** Initializes the account for tracking total circulation.
     * @argument {PublicKey} admin - public key where the admin contract is deployed
     * @argument {UInt8} decimals - number of decimals for the token
     * @argument {Bool} startPaused - if set to `Bool(true), the contract will start in a mode where token minting and transfers are paused. This should be used for non-atomic deployments
     */
    async initialize(admin, decimals, startPaused) {
      this.account.provedState.requireEquals((0, import_o1js.Bool)(false));
      this.admin.set(admin);
      this.decimals.set(decimals);
      this.paused.set((0, import_o1js.Bool)(false));
      this.paused.set(startPaused);
      const accountUpdate = import_o1js.AccountUpdate.createSigned(this.address, this.deriveTokenId());
      let permissions = import_o1js.Permissions.default();
      permissions.send = import_o1js.Permissions.none();
      permissions.setPermissions = import_o1js.Permissions.impossible();
      accountUpdate.account.permissions.set(permissions);
    }
    async getAdminContract() {
      const admin = await import_o1js.Provable.witnessAsync(import_o1js.PublicKey, async () => {
        let pk = await this.admin.fetch();
        (0, import_o1js.assert)(pk !== void 0, FungibleTokenErrors.noAdminKey);
        return pk;
      });
      this.admin.requireEquals(admin);
      return new adminContract(admin);
    }
    async setAdmin(admin) {
      const adminContract2 = await this.getAdminContract();
      const canChangeAdmin = await adminContract2.canChangeAdmin(admin);
      canChangeAdmin.assertTrue(FungibleTokenErrors.noPermissionToChangeAdmin);
      this.admin.set(admin);
      this.emitEvent("SetAdmin", new SetAdminEvent({ adminKey: admin }));
    }
    async mint(recipient, amount) {
      this.paused.getAndRequireEquals().assertFalse(FungibleTokenErrors.tokenPaused);
      const accountUpdate = this.internal.mint({ address: recipient, amount });
      const adminContract2 = await this.getAdminContract();
      const canMint = await adminContract2.canMint(accountUpdate);
      canMint.assertTrue(FungibleTokenErrors.noPermissionToMint);
      recipient.equals(this.address).assertFalse(FungibleTokenErrors.noTransferFromCirculation);
      this.approve(accountUpdate);
      this.emitEvent("Mint", new MintEvent({ recipient, amount }));
      const circulationUpdate = import_o1js.AccountUpdate.create(this.address, this.deriveTokenId());
      circulationUpdate.balanceChange = import_o1js.Int64.fromUnsigned(amount);
      return accountUpdate;
    }
    async burn(from, amount) {
      this.paused.getAndRequireEquals().assertFalse(FungibleTokenErrors.tokenPaused);
      const accountUpdate = this.internal.burn({ address: from, amount });
      const circulationUpdate = import_o1js.AccountUpdate.create(this.address, this.deriveTokenId());
      from.equals(this.address).assertFalse(FungibleTokenErrors.noTransferFromCirculation);
      circulationUpdate.balanceChange = import_o1js.Int64.fromUnsigned(amount).neg();
      this.emitEvent("Burn", new BurnEvent({ from, amount }));
      return accountUpdate;
    }
    async pause() {
      const adminContract2 = await this.getAdminContract();
      const canPause = await adminContract2.canPause();
      canPause.assertTrue(FungibleTokenErrors.noPermissionToPause);
      this.paused.set((0, import_o1js.Bool)(true));
      this.emitEvent("Pause", new PauseEvent({ isPaused: (0, import_o1js.Bool)(true) }));
    }
    async resume() {
      const adminContract2 = await this.getAdminContract();
      const canResume = await adminContract2.canResume();
      canResume.assertTrue(FungibleTokenErrors.noPermissionToResume);
      this.paused.set((0, import_o1js.Bool)(false));
      this.emitEvent("Pause", new PauseEvent({ isPaused: (0, import_o1js.Bool)(false) }));
    }
    async transfer(from, to, amount) {
      this.paused.getAndRequireEquals().assertFalse(FungibleTokenErrors.tokenPaused);
      from.equals(this.address).assertFalse(FungibleTokenErrors.noTransferFromCirculation);
      to.equals(this.address).assertFalse(FungibleTokenErrors.noTransferFromCirculation);
      this.internal.send({ from, to, amount });
    }
    checkPermissionsUpdate(update) {
      let permissions = update.update.permissions;
      let { access, receive } = permissions.value;
      let accessIsNone = import_o1js.Provable.equal(import_o1js.Types.AuthRequired, access, import_o1js.Permissions.none());
      let receiveIsNone = import_o1js.Provable.equal(import_o1js.Types.AuthRequired, receive, import_o1js.Permissions.none());
      let updateAllowed = accessIsNone.and(receiveIsNone);
      (0, import_o1js.assert)(updateAllowed.or(permissions.isSome.not()), FungibleTokenErrors.noPermissionChangeAllowed);
    }
    /** Approve `AccountUpdate`s that have been created outside of the token contract.
     *
     * @argument {AccountUpdateForest} updates - The `AccountUpdate`s to approve. Note that the forest size is limited by the base token contract, @see TokenContract.MAX_ACCOUNT_UPDATES The current limit is 9.
     */
    async approveBase(updates) {
      this.paused.getAndRequireEquals().assertFalse(FungibleTokenErrors.tokenPaused);
      let totalBalance = import_o1js.Int64.from(0);
      this.forEachUpdate(updates, (update, usesToken) => {
        this.checkPermissionsUpdate(update);
        this.emitEventIf(usesToken, "BalanceChange", new BalanceChangeEvent({
          address: update.publicKey,
          amount: update.balanceChange
        }));
        update.publicKey.equals(this.address).and(usesToken).assertFalse(FungibleTokenErrors.noTransferFromCirculation);
        totalBalance = import_o1js.Provable.if(usesToken, totalBalance.add(update.balanceChange), totalBalance);
        totalBalance.isPositive().assertFalse(FungibleTokenErrors.flashMinting);
      });
      totalBalance.assertEquals(import_o1js.Int64.zero, FungibleTokenErrors.unbalancedTransaction);
    }
    async getBalanceOf(address) {
      const account = import_o1js.AccountUpdate.create(address, this.deriveTokenId()).account;
      const balance = account.balance.get();
      account.balance.requireEquals(balance);
      return balance;
    }
    /** Reports the current circulating supply
     * This does take into account currently unreduced actions.
     */
    async getCirculating() {
      let circulating = await this.getBalanceOf(this.address);
      return circulating;
    }
    async getDecimals() {
      return this.decimals.getAndRequireEquals();
    }
  }
  (0, import_tslib.__decorate)([
    (0, import_o1js.state)(import_o1js.UInt8),
    (0, import_tslib.__metadata)("design:type", Object)
  ], FungibleToken2.prototype, "decimals", void 0);
  (0, import_tslib.__decorate)([
    (0, import_o1js.state)(import_o1js.PublicKey),
    (0, import_tslib.__metadata)("design:type", Object)
  ], FungibleToken2.prototype, "admin", void 0);
  (0, import_tslib.__decorate)([
    (0, import_o1js.state)(import_o1js.Bool),
    (0, import_tslib.__metadata)("design:type", Object)
  ], FungibleToken2.prototype, "paused", void 0);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.VerificationKey]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "updateVerificationKey", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey, import_o1js.UInt8, import_o1js.Bool]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "initialize", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "setAdmin", null);
  (0, import_tslib.__decorate)([
    import_o1js.method.returns(import_o1js.AccountUpdate),
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey, import_o1js.UInt64]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "mint", null);
  (0, import_tslib.__decorate)([
    import_o1js.method.returns(import_o1js.AccountUpdate),
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey, import_o1js.UInt64]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "burn", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", []),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "pause", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", []),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "resume", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey, import_o1js.PublicKey, import_o1js.UInt64]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "transfer", null);
  (0, import_tslib.__decorate)([
    import_o1js.method,
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.AccountUpdateForest]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "approveBase", null);
  (0, import_tslib.__decorate)([
    import_o1js.method.returns(import_o1js.UInt64),
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", [import_o1js.PublicKey]),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "getBalanceOf", null);
  (0, import_tslib.__decorate)([
    import_o1js.method.returns(import_o1js.UInt8),
    (0, import_tslib.__metadata)("design:type", Function),
    (0, import_tslib.__metadata)("design:paramtypes", []),
    (0, import_tslib.__metadata)("design:returntype", Promise)
  ], FungibleToken2.prototype, "getDecimals", null);
  return FungibleToken2;
}
var SetAdminEvent = class extends (0, import_o1js.Struct)({
  adminKey: import_o1js.PublicKey
}) {
};
var PauseEvent = class extends (0, import_o1js.Struct)({
  isPaused: import_o1js.Bool
}) {
};
var MintEvent = class extends (0, import_o1js.Struct)({
  recipient: import_o1js.PublicKey,
  amount: import_o1js.UInt64
}) {
};
var BurnEvent = class extends (0, import_o1js.Struct)({
  from: import_o1js.PublicKey,
  amount: import_o1js.UInt64
}) {
};
var BalanceChangeEvent = class extends (0, import_o1js.Struct)({
  address: import_o1js.PublicKey,
  amount: import_o1js.Int64
}) {
};

// dist/node/FungibleTokenStandardAdmin.js
var import_tslib2 = require("tslib");
var import_o1js2 = require("o1js");
var FungibleTokenAdmin = class extends import_o1js2.SmartContract {
  constructor() {
    super(...arguments);
    this.adminPublicKey = (0, import_o1js2.State)();
  }
  async deploy(props) {
    await super.deploy(props);
    this.adminPublicKey.set(props.adminPublicKey);
    this.account.permissions.set({
      ...import_o1js2.Permissions.default(),
      setVerificationKey: import_o1js2.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js2.Permissions.impossible()
    });
  }
  /** Update the verification key.
   * Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.
   */
  async updateVerificationKey(vk) {
    this.account.verificationKey.set(vk);
  }
  async ensureAdminSignature() {
    const admin = await import_o1js2.Provable.witnessAsync(import_o1js2.PublicKey, async () => {
      let pk = await this.adminPublicKey.fetch();
      (0, import_o1js2.assert)(pk !== void 0, "could not fetch admin public key");
      return pk;
    });
    this.adminPublicKey.requireEquals(admin);
    return import_o1js2.AccountUpdate.createSigned(admin);
  }
  async canMint(_accountUpdate) {
    await this.ensureAdminSignature();
    return (0, import_o1js2.Bool)(true);
  }
  async canChangeAdmin(_admin) {
    await this.ensureAdminSignature();
    return (0, import_o1js2.Bool)(true);
  }
  async canPause() {
    await this.ensureAdminSignature();
    return (0, import_o1js2.Bool)(true);
  }
  async canResume() {
    await this.ensureAdminSignature();
    return (0, import_o1js2.Bool)(true);
  }
  async canChangeVerificationKey(_vk) {
    await this.ensureAdminSignature();
    return (0, import_o1js2.Bool)(true);
  }
};
(0, import_tslib2.__decorate)([
  (0, import_o1js2.state)(import_o1js2.PublicKey),
  (0, import_tslib2.__metadata)("design:type", Object)
], FungibleTokenAdmin.prototype, "adminPublicKey", void 0);
(0, import_tslib2.__decorate)([
  import_o1js2.method,
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js2.VerificationKey]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "updateVerificationKey", null);
(0, import_tslib2.__decorate)([
  import_o1js2.method.returns(import_o1js2.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js2.AccountUpdate]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "canMint", null);
(0, import_tslib2.__decorate)([
  import_o1js2.method.returns(import_o1js2.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js2.PublicKey]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "canChangeAdmin", null);
(0, import_tslib2.__decorate)([
  import_o1js2.method.returns(import_o1js2.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", []),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "canPause", null);
(0, import_tslib2.__decorate)([
  import_o1js2.method.returns(import_o1js2.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", []),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "canResume", null);
(0, import_tslib2.__decorate)([
  import_o1js2.method.returns(import_o1js2.Bool),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", [import_o1js2.VerificationKey]),
  (0, import_tslib2.__metadata)("design:returntype", Promise)
], FungibleTokenAdmin.prototype, "canChangeVerificationKey", null);

// dist/node/FungibleTokenAdvancedAdmin.js
var import_tslib3 = require("tslib");
var import_o1js3 = require("o1js");
var import_storage = require("@minatokens/storage");
var AdvancedAdminData = class _AdvancedAdminData extends (0, import_o1js3.Struct)({
  totalSupply: import_o1js3.UInt64,
  requireAdminSignatureForMint: import_o1js3.Bool,
  anyoneCanMint: import_o1js3.Bool
}) {
  static new(params = {}) {
    const { totalSupply, requireAdminSignatureForMint, anyoneCanMint } = params;
    return new _AdvancedAdminData({
      totalSupply: import_o1js3.UInt64.from(totalSupply ?? 0),
      requireAdminSignatureForMint: (0, import_o1js3.Bool)(requireAdminSignatureForMint ?? false),
      anyoneCanMint: (0, import_o1js3.Bool)(anyoneCanMint ?? false)
    });
  }
  pack() {
    const totalSupplyBits = this.totalSupply.value.toBits(64);
    return import_o1js3.Field.fromBits([
      ...totalSupplyBits,
      this.requireAdminSignatureForMint,
      this.anyoneCanMint
    ]);
  }
  static unpack(packed) {
    const bits = packed.toBits(64 + 1 + 1);
    const totalSupply = import_o1js3.UInt64.Unsafe.fromField(import_o1js3.Field.fromBits(bits.slice(0, 64)));
    const requireAdminSignatureForMint = bits[64];
    const anyoneCanMint = bits[64 + 1];
    return new _AdvancedAdminData({
      totalSupply,
      requireAdminSignatureForMint,
      anyoneCanMint
    });
  }
};
var FungibleTokenAdvancedAdmin = class extends import_o1js3.TokenContract {
  constructor() {
    super(...arguments);
    this.adminPublicKey = (0, import_o1js3.State)();
    this.tokenContract = (0, import_o1js3.State)();
    this.whitelist = (0, import_o1js3.State)();
    this.adminData = (0, import_o1js3.State)();
    this.events = { updateWhitelist: import_storage.Whitelist };
  }
  /**
   * Overrides the approveBase method to prevent transfers of tokens.
   *
   * @param forest - The account update forest.
   */
  async approveBase(forest) {
    throw Error("Transfer not allowed");
  }
  async deploy(props) {
    await super.deploy(props);
    this.adminPublicKey.set(props.adminPublicKey);
    this.tokenContract.set(props.tokenContract);
    this.adminData.set(new AdvancedAdminData({
      totalSupply: props.totalSupply,
      requireAdminSignatureForMint: props.requireAdminSignatureForMint,
      anyoneCanMint: props.anyoneCanMint
    }).pack());
    this.whitelist.set(props.whitelist);
    this.account.permissions.set({
      ...import_o1js3.Permissions.default(),
      setVerificationKey: import_o1js3.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js3.Permissions.impossible()
    });
  }
  /** Update the verification key.
   * Note that because we have set the permissions for setting
   * the verification key to `impossibleDuringCurrentVersion()`,
   * this will only be possible in case of a protocol update that requires an update.
   */
  async updateVerificationKey(vk) {
    this.account.verificationKey.set(vk);
  }
  async ensureAdminSignature() {
    const admin = this.adminPublicKey.getAndRequireEquals();
    const adminUpdate = import_o1js3.AccountUpdate.createSigned(admin);
    adminUpdate.body.useFullCommitment = (0, import_o1js3.Bool)(true);
    return adminUpdate;
  }
  async canMint(_accountUpdate) {
    const address = _accountUpdate.body.publicKey;
    const balanceChange = _accountUpdate.body.balanceChange;
    balanceChange.isPositive().assertTrue();
    const amount = balanceChange.magnitude;
    const adminData = AdvancedAdminData.unpack(this.adminData.getAndRequireEquals());
    amount.assertLessThanOrEqual(adminData.totalSupply);
    const tokenContract = this.tokenContract.getAndRequireEquals();
    const tokenId = import_o1js3.TokenId.derive(tokenContract);
    const adminTokenId = this.deriveTokenId();
    _accountUpdate.body.tokenId.assertEquals(tokenId);
    const maxAdditionalSupply = adminData.totalSupply.sub(amount);
    const tokenUpdate = import_o1js3.AccountUpdate.createIf(adminData.totalSupply.equals(import_o1js3.UInt64.MAXINT()).not(), this.address, adminTokenId);
    tokenUpdate.account.balance.requireBetween(import_o1js3.UInt64.zero, maxAdditionalSupply);
    tokenUpdate.balance.addInPlace(amount);
    this.self.approve(tokenUpdate);
    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(address);
    whitelistedAmount.isSome.or(adminData.anyoneCanMint).assertTrue("Cannot mint to non-whitelisted address");
    const maxMintAmount = import_o1js3.Provable.if(
      adminData.anyoneCanMint,
      import_o1js3.Provable.if(whitelistedAmount.isSome, whitelistedAmount.value, import_o1js3.UInt64.MAXINT()),
      // blacklist
      whitelistedAmount.value
    );
    amount.assertLessThanOrEqual(maxMintAmount);
    const trackMintUpdate = import_o1js3.AccountUpdate.createIf(
      whitelist.isSome(),
      // we do not track minting if the whitelist is empty
      address,
      adminTokenId
    );
    trackMintUpdate.account.balance.requireBetween(import_o1js3.UInt64.zero, maxMintAmount.sub(amount));
    trackMintUpdate.balance.addInPlace(amount);
    this.self.approve(trackMintUpdate);
    const adminSignatureUpdate = import_o1js3.AccountUpdate.createIf(adminData.requireAdminSignatureForMint, this.adminPublicKey.getAndRequireEquals());
    adminSignatureUpdate.requireSignature();
    adminSignatureUpdate.body.useFullCommitment = (0, import_o1js3.Bool)(true);
    return (0, import_o1js3.Bool)(true);
  }
  async canChangeAdmin(_admin) {
    await this.ensureAdminSignature();
    return (0, import_o1js3.Bool)(true);
  }
  async canPause() {
    await this.ensureAdminSignature();
    return (0, import_o1js3.Bool)(true);
  }
  async canResume() {
    await this.ensureAdminSignature();
    return (0, import_o1js3.Bool)(true);
  }
  async updateWhitelist(whitelist) {
    const admin = this.adminPublicKey.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js3.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js3.Bool)(true);
    admin.assertEquals(sender);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
  async canChangeVerificationKey(_vk) {
    await this.ensureAdminSignature();
    return (0, import_o1js3.Bool)(true);
  }
};
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_o1js3.PublicKey),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenAdvancedAdmin.prototype, "adminPublicKey", void 0);
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_o1js3.PublicKey),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenAdvancedAdmin.prototype, "tokenContract", void 0);
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_storage.Whitelist),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenAdvancedAdmin.prototype, "whitelist", void 0);
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_o1js3.Field),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenAdvancedAdmin.prototype, "adminData", void 0);
(0, import_tslib3.__decorate)([
  import_o1js3.method,
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.VerificationKey]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "updateVerificationKey", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.AccountUpdate]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "canMint", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.PublicKey]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "canChangeAdmin", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", []),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "canPause", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", []),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "canResume", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method,
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_storage.Whitelist]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "updateWhitelist", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.VerificationKey]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenAdvancedAdmin.prototype, "canChangeVerificationKey", null);

// dist/node/FungibleToken.js
var FungibleToken = FungibleTokenContract(FungibleTokenAdmin);
var AdvancedFungibleToken = FungibleTokenContract(FungibleTokenAdvancedAdmin);

// dist/node/vk.js
var tokenVerificationKeys = {
  mainnet: {
    o1js: "2.2.0",
    zkcloudworker: "0.23.2",
    vk: {
      FungibleToken: {
        hash: "18335904450268115742916300374904684680550450188257481973810475185988053152387",
        data: "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",
        type: "token"
      },
      FungibleTokenAdmin: {
        hash: "18313778512774155670856755989313062419954804408798514573373489608748527149311",
        data: "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",
        type: "admin"
      },
      AdvancedFungibleToken: {
        hash: "18335904450268115742916300374904684680550450188257481973810475185988053152387",
        data: "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",
        type: "token"
      },
      FungibleTokenAdvancedAdmin: {
        hash: "24033149367232664908111734236760063427445551104357139544111008408025737416270",
        data: "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",
        type: "admin"
      },
      FungibleTokenBidContract: {
        hash: "5298930277130494478851156413269363233825369279878311189897236001698749834070",
        data: "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",
        type: "user"
      },
      FungibleTokenOfferContract: {
        hash: "2858136391761960286699306196905265168181712302492280978164878175630383743048",
        data: "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",
        type: "user"
      }
    }
  },
  testnet: {
    o1js: "2.2.0",
    zkcloudworker: "0.23.2",
    vk: {
      FungibleToken: {
        hash: "11275266297357989434659649579180929660472107786900344600948115953037388411671",
        data: "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",
        type: "token"
      },
      FungibleTokenAdmin: {
        hash: "18691595165066726042633902806776623651617801388146374388725017604854573364243",
        data: "AAAquFdEgAiP0gVQOFC1AYSsV9ylHwU1kj9trP0Iz00FP8zx9+7n59XMLqpjue1wA4VfgD2aXaC4seFCHAfaZwUkB+uHOnxXH7vN8sUeDQi50gWdXzRlzSS1jsT9t+XsQwHNWgMQp04pKmF+0clYz1zwOO95BwHGcQ/olrSYW4tbJCzCu0+M5beMUxHl3qo9fsP2UE6wUyrUH+bkM1NQAsAz0p0Kf7RXT4K2tC3hCxybh9Cj1ZLfvzg03OR4HBo61jF6ax6ymlATB4YBL0ETiEPTE/Qk1zGWUSL2UB6aY45/LlfTLCKlyLq7cR3HOucFfBncVfzI7D8j5n4wVqY+vAI4cf+Yv7iVRLbeFcycXtsuPQntgBzKa/mcqcWuVM7p2SYRrtKdX8EKvOO6NhfLx4x0atAi8pKf+vZR76LSP4iOA8hwXvk6MNvPt1fxCS96ZAKuAzZnAcK+MH1OcKeLj+EHtZmf40WRb3AEG5TWRKuD6DT5noDclZsE8ROZKUSOKAUGIBvt7MpzOWPPchmnromWEevmXo3GoPUZCKnWX6ZLAtJwAszLUgiVS8rx3JnLXuXrtcVFto5FFQhwSHZyzuYZAICibQ4M3dkHCAr0P1Gxd3XyBTYPYbzu4ApWhX6qbnUz6ujRwJALYQUcUXjXlKgITu5lQCfNhLVHx4c/6afLHReoSbV5V2OuTWWFfopRMVqez5f9o4gltroK1cocgSO7Bt3/mpa9SEEFzzF/lDaLFf9pIgBSUJS7x8eM+ocg9GYmJ5M/KjfmCc2/EsnV7Mhax350ZtrXdzh/HWIWzEZKKxcbERFbRtf+fkMOOLNpNov1FEFvKOU612vDOIbrVHeBN9mwuepUrJctcfgLc0Mi3Sxs3+NA0I74qm5ktjmplDwgUtKzIs3IrVFv6b1pg/J32HmwNzJZw2fYzpFE1LDjBSK/SX3axwMy5yEd8+jl4uAdQZpa9UQQIHu1Y1ZMgJSDDicXz6D1bZMA1Q2/lU+8AYbldgQVmlLq/lzr63krX+AM9/H5AgCJV70ArSgtyXca/hMFyS8i1CQeX5zmkB5mXjpUmEvg9TYLMldwU6SIruFvYgv15tQD+GqN5uX3eIDyL/OGnSdxVSZ3KthkdADsntDB4ccz2sDzjQ29GmO7e2UpwXP1yIba0F77Ug5jL5Nl7V0w+s8KV7y5C+skax4UIzb59l19FcR35ItoigIxtMfkv3rdlCOeBVI93oVl5esiH8AvYGHhulWIvrNfKol3Viir41zv4qMBOcQg8+ygqjwqREU5+qiYeJlQ2AtT0/PVeZWg4mHC39uz1Lld3N2hyyxRo+Z0nC/8220uuf9gAnQ+JFixgyYW0NowUtuFj+uYAV9Dh/Zpe4LyAOkU0kBW4CEuOxNr+gz+9h0BoPfBHlMuuQAUc5L8uMunJC7uBKZiL+/tT1ZGfyIuqU47fEP9Hghxmip8v7gpf+4wB0MVUUwav9QRe9g88ER1HcJPqYb4EIOc2kbYSX75bT0mAFqR8lwZrj6lbQtNS0QQboG5fzoyYGi8YnSXhC2T5fFDpGJ319GHUsna58o5wk8LMwKWNTxq+FN6XiRgu0BFOrtG6MtT1OxYE9Dti6WatGDsWv+KMLDHjxUK1bhiSRnvkWYNcnuDJ0Ry+PRGHNUijVU0SbchntC2JHdhwKbwIofwKHE8HhvlK8FgQ1VOLDioA26UFzr23LpCTqwSJ7/sAqttNGcPR8MSeeR9TQvXNYQPKrA7Gh720X+7LD6BuHdy4vkcr9EKBU0ccUJ2ABBiyPdji+AgEbUCL/wrp6/GX8pui5YJGWx3XmIFj/RnYS2Je5FZ7w74JclD3XhLUo5Dhpq5RznHplpLB9mNdZdm5269US/XCgC/ZKyUxW3+0ajdBY1cLzF6qglitaYTp3MVUENVOkACM2RyKw6jIK2Leq3qLp6AUz21VXj4WznZcdI8MXqT9v8HxjXbAI9dtbhLRZRpJmu/129vrVmwSTHvsVoA7vXyYh/iO3ZMcy+D1x+HZU6Q/oDYCicqOPHxpSc9QGehmNyeGzI//524Gz3RudkU7s6MPdLWqZrieRTnWsTIrCDieu4ValfP8BFz7asYUv0t9jMWpv3yjbY7c5h8N/m7IUXwTQCzFpjPV7HC72BjVwPaYqh5/oAQsSNcv5I3c2GsCGj5C4hFFoT7eWfVtu/6ibQl0COhRDsegnOBtZ7NGfybI8IIO/4yrgel92bypb3eSxeMvdE5wzURluGDkBVVIACD8C5W1MzqrejUiiTfc3mkLhQ0xKRRhT0qqkmYWlbGN5hmMOA9YaYx8OFTgMys1WbzdidWgEkyvvdkWctGlges6eg/lJE61tJ8wGxvJfKtpyDW/2MRvsnO1+2EXIQ2eV3hkxg=",
        type: "admin"
      },
      AdvancedFungibleToken: {
        hash: "11275266297357989434659649579180929660472107786900344600948115953037388411671",
        data: "AABoR9W/JCk+QV7xmR0EmMunepTBYRNFuyTe3jy0YL4FPMZvsY3S7Erek8aQc6iEbg0gx8yQZuX7/I9abchc2AM3/JhaHwmIVJYlvR+hIhruFPB3wgxMNv0w0gKKcrMUjwumIsjP5rBKR/iI66NePvgPuC29OEcvCy1WA7VGa4jkJdudep82RUdWGRWK2+TESBdYTcmhDVuKl71sFjmOdRsHPuHz9tgXl+pkmjmsRFUu0NL0uf7+4UZZ3qwo5JDu+CK6Ec77HZQNWTxobryIa5NH8CwGRTykkaJMUmjbfWiFPCUHzvcqpOIDa/P0WVqqmkAksmXroqqmKGk7zQBN+Ak0GHEPqQDSJIQv98Wm/EluR3MtPMixUI0OSCdbCe++KR4gIKwvRX+AyBCIcMUEuQ7CN4TcDQmD4dsnU3Ywu2cTLCmf1z6el9AHdoTNg5kHvhrxJtV5O5sUnQEW+LPdxSMkxmO3ao9cj4Pdjpf//o1wVN9GR9uyGgj7JxOzi0e1HC2DWmTr5hsWR+J7Pz5rAY5jv5xAcpzUgdqRLr+0Z5wQBovJXign+HwE1cLbTGjZjc2WzRyDEAUfk+VvpE9GcgUdAAYcIULS5ZqNrgfCjlXT8pN5RNRmKgXn+Cn5vzxcnl420mtiW3d/pggz7op2FJbzAn7+OGvB37M0alQcCcwnhyYHXCeJTSql6kIBPRZNbX+BMg/A9JA+zD51TSs/0UMrPvBTAxEbW/R7F2hW2w80pcMsgKOKsgyztdBHU9dWbeUOu3Cmua8TUIWLHYL9CoBo2HEP5858I/xbZpseBTXbUhQOgdQSqCj0ai5ibbIEWlzyeVctufQRm6pK4OGSnZvSP+km8zpVR15SVLkkzPAtmtpJ28bSInD1sm++/MMMz30+xP+7XMk6yCnAKS7Ryh+7LqDgPK2C3fPDaPe38v1PXDUseFa60FhJTq5ztwNXhVtkUUgBMObzMAH3yCYnFj41JvRuR9diVD4NJ0h3wxxcbGWD8ROvjUEUv2U9ouTlDggGX//W2Ejz+ebqgkUtnytJECQtc5GWLwBwSijUtBS5nCMPbyTXae/35q01qddf4BaHXTmi+Aq4VAacF+UdqGczJum0xhafL0ZrS+J4vmkxtlQXbMk0mCQEPjka4UTQfZAedfHknw1lZyMlax9VMbO5UcDw70+ny9I/R7hURkLl3CU/l882C3IQcOyVS4j6tJvV7Z87QSHbGnw0iM/bp3WjCgd+XbMVKuLB1iwTlhgWJc0HMs3w9N0ZlssmVHaWTEorf/QDhPtXCCqwGlNLJgH7mO+P0Tmco9/vB6iGqQ66hwXZlTangzKx28yLvUiZraqXFF8bsmgkuxfzoTKsstEKJMiTF4q5UNl9Cixyht9LdXL76v/MRCzaVrhGoiJMueECkMxTgwLrNNq7h6j+xRf8lWaYTudxkUUFrAKTzRpbpAduRmpd4tjIYhM7umH0mhTnCK6ShwQz6ZsHBSbktYOxGFqHjMyPtx2k0+pZ+Qsu/GjsmeMbJSLcUPTObWIfFVco2SSBUteZsA3ZgP4jhEWWtOzXYIHjWqj3g9XOVuVJ4TcbO2FK4mVJ9ETnRxKH0AmGPnXb0Nc+sC9nRnDN2OTqPtXJkeRfI7jkHCFb79u8QPvuqhsYWVSS8bI3rXE1kWY1ZKYoC3FtfenG9e8haWYXUyk1783IQJ4W1jkscQTU1RZrL0cWoaCxIXnXsdDJStgz8B9EQ0uUEkfXSXYEbQtIA4DVKzTO4uqxOzafqAOLnvOxi5Vn95JCOu3CEAFr0WQEOnA2X3nw31spFvLj0jykGpn1ECHhW4Ft9EOkHDr4qDA8Mi5gH9EB+g0AhObwxj7RZB2Wq5PSmZw131mkHzgYOgD3JC9tlaGMSxesjF1O3+U3wUOLrrU89s128Y0PpiEzO6Jsm1aDzbF1pkz3asy0z+Enb4BMg/Jv5j/EZkKM6Okv746/ETIs69fv3e5Iucae7lyyYVNCYBtucWrOQK2Pfi4QzRZjkC29hj8OenHSn+75qcX/v5ejhSBAb24Bp1INNVgaF3VHGz1+ULEcs73b/b0K1AQJYfdkfD4fqrj1nUIlVYv3yw1SyEKClpoiBaLiRxg/04rgb3enmxe6msVApSIlAYs+qeRAIRDCU+ZensV1x4sS4VCjQgoPlo9sV7wJDUOTsUkgux38w39sqiSfONzmyhfXqZocojTv1m3vHh8gnCFUbZ/d3WvywDE67VPRlTYX5ZR80Yyjz3byDH2/+DWOsjv2q8KUv2mtgkiOTZ1D3tAF6Vl6tSWlixMYc1tfC8KDWDOq2eg7M72MqjfiMTuBPXr2ZB/nTdtCi9lDQQESzBmgJaV/KCZOAaIKQR9hibvy4vt3wlSZ9XTK+FFZPQc=",
        type: "token"
      },
      FungibleTokenAdvancedAdmin: {
        hash: "7496863677818415434512852244120801948766063787873110945884843044415414077942",
        data: "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",
        type: "admin"
      },
      FungibleTokenBidContract: {
        hash: "17310384725764618632885623023862361229726867838702004866789635055540965109669",
        data: "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",
        type: "user"
      },
      FungibleTokenOfferContract: {
        hash: "12073217068283876954049572004931286804667636618982691926234972243181859812345",
        data: "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",
        type: "user"
      }
    }
  }
};

// dist/node/bid.js
var FungibleTokenBidContract = class _FungibleTokenBidContract extends import_o1js4.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js4.State)();
    this.buyer = (0, import_o1js4.State)();
    this.token = (0, import_o1js4.State)();
    this.whitelist = (0, import_o1js4.State)();
    this.events = {
      bid: import_o1js4.UInt64,
      withdraw: import_o1js4.UInt64,
      sell: import_o1js4.UInt64,
      updateWhitelist: import_storage2.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
    const verificationKey = args?.verificationKey ?? _FungibleTokenBidContract._verificationKey;
    (0, import_o1js4.assert)(verificationKey !== void 0);
    const hash = typeof verificationKey.hash === "string" ? verificationKey.hash : verificationKey.hash.toJSON();
    const networkId = import_o1js4.Mina.getNetworkId();
    (0, import_o1js4.assert)(networkId === "mainnet" || networkId === "testnet");
    (0, import_o1js4.assert)(hash === tokenVerificationKeys[networkId].vk.FungibleTokenBidContract.hash);
    (0, import_o1js4.assert)(verificationKey.data === tokenVerificationKeys[networkId].vk.FungibleTokenBidContract.data);
    this.whitelist.set(args.whitelist);
    this.account.permissions.set({
      ...import_o1js4.Permissions.default(),
      send: import_o1js4.Permissions.proof(),
      setVerificationKey: import_o1js4.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js4.Permissions.impossible()
    });
  }
  async initialize(token, amount, price) {
    this.account.provedState.requireEquals((0, import_o1js4.Bool)(false));
    amount.equals(import_o1js4.UInt64.from(0)).assertFalse();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js4.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js4.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js4.UInt64.Unsafe.fromField(totalPriceField);
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js4.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    this.buyer.set(buyer);
    this.price.set(price);
    this.token.set(token);
    this.emitEvent("bid", amount);
  }
  async bid(amount, price) {
    amount.equals(import_o1js4.UInt64.from(0)).assertFalse();
    const balance = this.account.balance.getAndRequireEquals();
    const oldPrice = this.price.getAndRequireEquals();
    price.equals(oldPrice).or(balance.equals(import_o1js4.UInt64.from(0))).assertTrue();
    this.price.set(price);
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js4.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js4.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js4.UInt64.Unsafe.fromField(totalPriceField);
    const sender = this.sender.getUnconstrained();
    const buyer = this.buyer.getAndRequireEquals();
    sender.assertEquals(buyer);
    const buyerUpdate = import_o1js4.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    this.price.set(price);
    this.emitEvent("bid", amount);
  }
  async withdraw(amountInMina) {
    amountInMina.equals(import_o1js4.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amountInMina, import_o1js4.UInt64.MAXINT());
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js4.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sender.assertEquals(buyer);
    let bidUpdate = this.send({ to: senderUpdate, amount: amountInMina });
    bidUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    this.emitEvent("withdraw", amountInMina);
  }
  async sell(amount) {
    amount.equals(import_o1js4.UInt64.from(0)).assertFalse();
    const price = this.price.getAndRequireEquals();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js4.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js4.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js4.UInt64.Unsafe.fromField(totalPriceField);
    this.account.balance.requireBetween(totalPrice, import_o1js4.UInt64.MAXINT());
    const buyer = this.buyer.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const seller = this.sender.getUnconstrained();
    const sellerUpdate = this.send({ to: seller, amount: totalPrice });
    sellerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sellerUpdate.requireSignature();
    const tokenContract = new FungibleToken(token);
    await tokenContract.transfer(seller, buyer, amount);
    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(seller);
    amount.assertLessThanOrEqual(whitelistedAmount.assertSome("Cannot sell more than whitelisted amount"));
    this.emitEvent("sell", amount);
  }
  async updateWhitelist(whitelist) {
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js4.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sender.assertEquals(buyer);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
};
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.UInt64),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "price", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "buyer", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "token", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_storage2.Whitelist),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "whitelist", void 0);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.PublicKey, import_o1js4.UInt64, import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "initialize", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64, import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "bid", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "withdraw", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "sell", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_storage2.Whitelist]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "updateWhitelist", null);

// dist/node/build.js
var import_storage4 = require("@minatokens/storage");

// dist/node/fetch.js
var import_o1js5 = require("o1js");
async function fetchMinaAccount(params) {
  const { publicKey, tokenId, force = false } = params;
  const timeout = 1e3 * 60 * 3;
  let attempt = 0;
  const startTime = Date.now();
  let result = { account: void 0 };
  while (Date.now() - startTime < timeout) {
    try {
      const result2 = await (0, import_o1js5.fetchAccount)({
        publicKey,
        tokenId
      });
      return result2;
    } catch (error) {
      if (force === true)
        console.log("Error in fetchMinaAccount:", {
          error,
          publicKey: typeof publicKey === "string" ? publicKey : publicKey.toBase58(),
          tokenId: tokenId?.toString(),
          force
        });
      else {
        console.log("fetchMinaAccount error", {
          error,
          publicKey: typeof publicKey === "string" ? publicKey : publicKey.toBase58(),
          tokenId: tokenId?.toString(),
          force
        });
        return result;
      }
    }
    attempt++;
    await sleep(1e3 * 6 * attempt);
  }
  if (force === true)
    throw new Error(`fetchMinaAccount timeout
      ${{
      publicKey: typeof publicKey === "string" ? publicKey : publicKey.toBase58(),
      tokenId: tokenId?.toString(),
      force
    }}`);
  else
    console.log("fetchMinaAccount timeout", typeof publicKey === "string" ? publicKey : publicKey.toBase58(), tokenId?.toString(), force);
  return result;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// dist/node/offer.js
var import_tslib5 = require("tslib");
var import_o1js6 = require("o1js");
var import_storage3 = require("@minatokens/storage");
var FungibleTokenOfferContract = class _FungibleTokenOfferContract extends import_o1js6.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js6.State)();
    this.seller = (0, import_o1js6.State)();
    this.token = (0, import_o1js6.State)();
    this.whitelist = (0, import_o1js6.State)();
    this.events = {
      offer: import_o1js6.UInt64,
      withdraw: import_o1js6.UInt64,
      buy: import_o1js6.UInt64,
      updateWhitelist: import_storage3.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
    const verificationKey = args?.verificationKey ?? _FungibleTokenOfferContract._verificationKey;
    (0, import_o1js6.assert)(verificationKey !== void 0);
    const hash = typeof verificationKey.hash === "string" ? verificationKey.hash : verificationKey.hash.toJSON();
    const networkId = import_o1js6.Mina.getNetworkId();
    (0, import_o1js6.assert)(networkId === "mainnet" || networkId === "testnet");
    (0, import_o1js6.assert)(hash === tokenVerificationKeys[networkId].vk.FungibleTokenOfferContract.hash);
    (0, import_o1js6.assert)(verificationKey.data === tokenVerificationKeys[networkId].vk.FungibleTokenOfferContract.data);
    this.whitelist.set(args.whitelist);
    this.account.permissions.set({
      ...import_o1js6.Permissions.default(),
      send: import_o1js6.Permissions.proof(),
      setVerificationKey: import_o1js6.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js6.Permissions.impossible()
    });
  }
  async initialize(seller, token, amount, price) {
    this.account.provedState.requireEquals((0, import_o1js6.Bool)(false));
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    await tokenContract.transfer(seller, this.address, amount);
    this.seller.set(seller);
    this.price.set(price);
    this.token.set(token);
    this.emitEvent("offer", amount);
  }
  async offer(amount, price) {
    const seller = this.seller.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const balance = this.account.balance.getAndRequireEquals();
    const oldPrice = this.price.getAndRequireEquals();
    price.equals(oldPrice).or(balance.equals(import_o1js6.UInt64.from(0))).assertTrue();
    this.price.set(price);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js6.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    sender.assertEquals(seller);
    await tokenContract.transfer(sender, this.address, amount);
    this.emitEvent("offer", amount);
  }
  async withdraw(amount) {
    amount.equals(import_o1js6.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js6.UInt64.MAXINT());
    const seller = this.seller.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js6.AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    sender.assertEquals(seller);
    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = import_o1js6.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    this.emitEvent("withdraw", amount);
  }
  async buy(amount) {
    amount.equals(import_o1js6.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js6.UInt64.MAXINT());
    const seller = this.seller.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const price = this.price.getAndRequireEquals();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js6.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js6.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js6.UInt64.Unsafe.fromField(totalPriceField);
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js6.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: seller, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    let offerUpdate = this.send({ to: buyer, amount });
    offerUpdate.body.mayUseToken = import_o1js6.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(buyer);
    amount.assertLessThanOrEqual(whitelistedAmount.assertSome("Cannot buy more than whitelisted amount"));
    this.emitEvent("buy", amount);
  }
  async updateWhitelist(whitelist) {
    const seller = this.seller.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js6.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js6.Bool)(true);
    sender.assertEquals(seller);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
};
(0, import_tslib5.__decorate)([
  (0, import_o1js6.state)(import_o1js6.UInt64),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "price", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "seller", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "token", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js6.state)(import_storage3.Whitelist),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "whitelist", void 0);
(0, import_tslib5.__decorate)([
  import_o1js6.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [
    import_o1js6.PublicKey,
    import_o1js6.PublicKey,
    import_o1js6.UInt64,
    import_o1js6.UInt64
  ]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "initialize", null);
(0, import_tslib5.__decorate)([
  import_o1js6.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js6.UInt64, import_o1js6.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "offer", null);
(0, import_tslib5.__decorate)([
  import_o1js6.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js6.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "withdraw", null);
(0, import_tslib5.__decorate)([
  import_o1js6.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js6.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "buy", null);
(0, import_tslib5.__decorate)([
  import_o1js6.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_storage3.Whitelist]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "updateWhitelist", null);

// dist/node/build.js
var import_o1js7 = require("o1js");
async function buildTokenLaunchTransaction(params) {
  const { chain, args } = params;
  const { uri, symbol, memo, nonce, adminContract: adminType } = args;
  const isAdvanced = adminType === "advanced";
  if (memo && typeof memo !== "string")
    throw new Error("Memo must be a string");
  if (memo && memo.length > 30)
    throw new Error("Memo must be less than 30 characters");
  if (!symbol || typeof symbol !== "string")
    throw new Error("Symbol must be a string");
  if (symbol.length >= 7)
    throw new Error("Symbol must be less than 7 characters");
  const sender = import_o1js7.PublicKey.fromBase58(args.sender);
  if (nonce === void 0)
    throw new Error("Nonce is required");
  if (typeof nonce !== "number")
    throw new Error("Nonce must be a number");
  const fee = 1e8;
  if (uri && typeof uri !== "string")
    throw new Error("Uri must be a string");
  if (!args.tokenAddress || typeof args.tokenAddress !== "string")
    throw new Error("tokenAddress is required");
  if (!args.adminContractAddress || typeof args.adminContractAddress !== "string")
    throw new Error("adminContractAddress is required");
  const adminContract = isAdvanced ? FungibleTokenAdvancedAdmin : FungibleTokenAdmin;
  const tokenContract = isAdvanced ? AdvancedFungibleToken : FungibleToken;
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (!vk || !vk.FungibleTokenOfferContract || !vk.FungibleTokenOfferContract.hash || !vk.FungibleTokenOfferContract.data || !vk.FungibleTokenBidContract || !vk.FungibleTokenBidContract.hash || !vk.FungibleTokenBidContract.data || !vk.FungibleTokenAdvancedAdmin || !vk.FungibleTokenAdvancedAdmin.hash || !vk.FungibleTokenAdvancedAdmin.data || !vk.FungibleTokenAdmin || !vk.FungibleTokenAdmin.hash || !vk.FungibleTokenAdmin.data || !vk.AdvancedFungibleToken || !vk.AdvancedFungibleToken.hash || !vk.AdvancedFungibleToken.data || !vk.FungibleToken || !vk.FungibleToken.hash || !vk.FungibleToken.data)
    throw new Error("Cannot get verification key from vk");
  const adminVerificationKey = isAdvanced ? vk.FungibleTokenAdvancedAdmin : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isAdvanced ? vk.AdvancedFungibleToken : vk.FungibleToken;
  if (!adminVerificationKey || !tokenVerificationKey)
    throw new Error("Cannot get verification keys");
  await fetchMinaAccount({
    publicKey: sender,
    force: true
  });
  if (!import_o1js7.Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }
  const whitelist = "whitelist" in args && args.whitelist ? typeof args.whitelist === "string" ? import_storage4.Whitelist.fromString(args.whitelist) : (await import_storage4.Whitelist.create({ list: args.whitelist, name: symbol })).whitelist : import_storage4.Whitelist.empty();
  const tokenAddress = import_o1js7.PublicKey.fromBase58(args.tokenAddress);
  const adminContractAddress = import_o1js7.PublicKey.fromBase58(args.adminContractAddress);
  const zkToken = new tokenContract(tokenAddress);
  const zkAdmin = new adminContract(adminContractAddress);
  const provingKey = params.provingKey ? import_o1js7.PublicKey.fromBase58(params.provingKey) : sender;
  const provingFee = params.provingFee ? import_o1js7.UInt64.from(Math.round(params.provingFee)) : void 0;
  const developerFee = args.developerFee ? import_o1js7.UInt64.from(Math.round(args.developerFee)) : void 0;
  const developerAddress = params.developerAddress ? import_o1js7.PublicKey.fromBase58(params.developerAddress) : void 0;
  const totalSupply = "totalSupply" in args && args.totalSupply ? import_o1js7.UInt64.from(Math.round(args.totalSupply)) : import_o1js7.UInt64.MAXINT();
  const requireAdminSignatureForMint = "requireAdminSignatureForMint" in args && args.requireAdminSignatureForMint ? (0, import_o1js7.Bool)(args.requireAdminSignatureForMint) : (0, import_o1js7.Bool)(false);
  const anyoneCanMint = "canMint" in args && args.canMint ? (0, import_o1js7.Bool)(args.canMint === "anyone") : (0, import_o1js7.Bool)(false);
  const decimals = import_o1js7.UInt8.from(args.decimals ? Math.round(args.decimals) : 9);
  const tx = await import_o1js7.Mina.transaction({ sender, fee, memo: memo ?? `launch ${symbol}`, nonce }, async () => {
    const feeAccountUpdate = import_o1js7.AccountUpdate.createSigned(sender);
    feeAccountUpdate.balance.subInPlace(3e9 + (isAdvanced ? 1e9 : 0));
    if (provingFee && provingKey)
      feeAccountUpdate.send({
        to: provingKey,
        amount: provingFee
      });
    if (developerAddress && developerFee) {
      feeAccountUpdate.send({
        to: developerAddress,
        amount: developerFee
      });
    }
    await zkAdmin.deploy({
      adminPublicKey: sender,
      tokenContract: tokenAddress,
      verificationKey: adminVerificationKey,
      whitelist,
      totalSupply,
      requireAdminSignatureForMint,
      anyoneCanMint
    });
    if (isAdvanced) {
      const adminUpdate = import_o1js7.AccountUpdate.create(adminContractAddress, import_o1js7.TokenId.derive(adminContractAddress));
      zkAdmin.approve(adminUpdate);
    }
    zkAdmin.account.zkappUri.set(uri);
    await zkToken.deploy({
      symbol,
      src: uri,
      verificationKey: tokenVerificationKey,
      allowUpdates: true
    });
    await zkToken.initialize(
      adminContractAddress,
      decimals,
      // We can set `startPaused` to `Bool(false)` here, because we are doing an atomic deployment
      // If you are not deploying the admin and token contracts in the same transaction,
      // it is safer to start the tokens paused, and resume them only after verifying that
      // the admin contract has been deployed
      (0, import_o1js7.Bool)(false)
    );
  });
  return {
    request: isAdvanced ? {
      ...args,
      whitelist: whitelist.toString()
    } : args,
    tx,
    isAdvanced,
    verificationKeyHashes: [
      adminVerificationKey.hash,
      tokenVerificationKey.hash
    ]
  };
}
async function buildTokenTransaction(params) {
  const { chain, args } = params;
  const { nonce, txType } = args;
  if (nonce === void 0)
    throw new Error("Nonce is required");
  if (typeof nonce !== "number")
    throw new Error("Nonce must be a number");
  if (txType === void 0)
    throw new Error("Tx type is required");
  if (typeof txType !== "string")
    throw new Error("Tx type must be a string");
  const sender = import_o1js7.PublicKey.fromBase58(args.sender);
  const tokenAddress = import_o1js7.PublicKey.fromBase58(args.tokenAddress);
  const offerAddress = "offerAddress" in args && args.offerAddress ? import_o1js7.PublicKey.fromBase58(args.offerAddress) : void 0;
  if (!offerAddress && (txType === "token:offer:create" || txType === "token:offer:buy" || txType === "token:offer:withdraw"))
    throw new Error("Offer address is required");
  const bidAddress = "bidAddress" in args && args.bidAddress ? import_o1js7.PublicKey.fromBase58(args.bidAddress) : void 0;
  if (!bidAddress && (txType === "token:bid:create" || txType === "token:bid:sell" || txType === "token:bid:withdraw"))
    throw new Error("Bid address is required");
  const to = "to" in args && args.to ? import_o1js7.PublicKey.fromBase58(args.to) : void 0;
  if (!to && (txType === "token:transfer" || txType === "token:airdrop" || txType === "token:mint"))
    throw new Error("To address is required");
  const amount = "amount" in args ? import_o1js7.UInt64.from(Math.round(args.amount)) : void 0;
  const price = "price" in args ? import_o1js7.UInt64.from(Math.round(args.price)) : void 0;
  await fetchMinaAccount({
    publicKey: sender,
    force: true
  });
  if (!import_o1js7.Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }
  const { symbol, adminContractAddress, adminAddress, isAdvanced, isToNewAccount, verificationKeyHashes } = await getTokenSymbolAndAdmin({
    txType,
    tokenAddress,
    chain,
    to,
    offerAddress,
    bidAddress
  });
  const memo = args.memo ?? `${txType} ${symbol}`;
  const fee = 1e8;
  const provingKey = params.provingKey ? import_o1js7.PublicKey.fromBase58(params.provingKey) : sender;
  const provingFee = params.provingFee ? import_o1js7.UInt64.from(Math.round(params.provingFee)) : void 0;
  const developerFee = args.developerFee ? import_o1js7.UInt64.from(Math.round(args.developerFee)) : void 0;
  const developerAddress = params.developerAddress ? import_o1js7.PublicKey.fromBase58(params.developerAddress) : void 0;
  const advancedAdminContract = new FungibleTokenAdvancedAdmin(adminContractAddress);
  const tokenContract = isAdvanced && txType === "token:mint" ? AdvancedFungibleToken : FungibleToken;
  if ((txType === "token:admin:whitelist" || txType === "token:bid:whitelist" || txType === "token:offer:whitelist") && !args.whitelist) {
    throw new Error("Whitelist is required");
  }
  const whitelist = "whitelist" in args && args.whitelist ? typeof args.whitelist === "string" ? import_storage4.Whitelist.fromString(args.whitelist) : (await import_storage4.Whitelist.create({ list: args.whitelist, name: symbol })).whitelist : import_storage4.Whitelist.empty();
  const zkToken = new tokenContract(tokenAddress);
  const tokenId = zkToken.deriveTokenId();
  if (txType === "token:mint" && isAdvanced === false && adminAddress.toBase58() !== sender.toBase58())
    throw new Error("Invalid sender for FungibleToken mint with standard admin");
  await fetchMinaAccount({
    publicKey: sender,
    tokenId,
    force: [
      "token:transfer",
      "token:airdrop",
      "token:mint"
    ].includes(txType)
  });
  if (to) {
    await fetchMinaAccount({
      publicKey: to,
      tokenId,
      force: false
    });
  }
  if (offerAddress)
    await fetchMinaAccount({
      publicKey: offerAddress,
      tokenId,
      force: [
        "token:offer:whitelist",
        "token:offer:buy",
        "token:offer:withdraw"
      ].includes(txType)
    });
  if (bidAddress)
    await fetchMinaAccount({
      publicKey: bidAddress,
      force: [
        "token:bid:whitelist",
        "token:bid:sell",
        "token:bid:withdraw"
      ].includes(txType)
    });
  const offerContract = offerAddress ? new FungibleTokenOfferContract(offerAddress, tokenId) : void 0;
  const bidContract = bidAddress ? new FungibleTokenBidContract(bidAddress) : void 0;
  const offerContractDeployment = offerAddress ? new FungibleTokenOfferContract(offerAddress, tokenId) : void 0;
  const bidContractDeployment = bidAddress ? new FungibleTokenBidContract(bidAddress) : void 0;
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (!vk || !vk.FungibleTokenOfferContract || !vk.FungibleTokenOfferContract.hash || !vk.FungibleTokenOfferContract.data || !vk.FungibleTokenBidContract || !vk.FungibleTokenBidContract.hash || !vk.FungibleTokenBidContract.data || !vk.FungibleTokenAdvancedAdmin || !vk.FungibleTokenAdvancedAdmin.hash || !vk.FungibleTokenAdvancedAdmin.data || !vk.FungibleTokenAdmin || !vk.FungibleTokenAdmin.hash || !vk.FungibleTokenAdmin.data || !vk.AdvancedFungibleToken || !vk.AdvancedFungibleToken.hash || !vk.AdvancedFungibleToken.data || !vk.FungibleToken || !vk.FungibleToken.hash || !vk.FungibleToken.data)
    throw new Error("Cannot get verification key from vk");
  const offerVerificationKey = FungibleTokenOfferContract._verificationKey ?? {
    hash: (0, import_o1js7.Field)(vk.FungibleTokenOfferContract.hash),
    data: vk.FungibleTokenOfferContract.data
  };
  const bidVerificationKey = FungibleTokenBidContract._verificationKey ?? {
    hash: (0, import_o1js7.Field)(vk.FungibleTokenBidContract.hash),
    data: vk.FungibleTokenBidContract.data
  };
  const isNewBidOfferAccount = txType === "token:offer:create" && offerAddress ? !import_o1js7.Mina.hasAccount(offerAddress, tokenId) : txType === "token:bid:create" && bidAddress ? !import_o1js7.Mina.hasAccount(bidAddress) : false;
  const isNewBuyAccount = txType === "token:offer:buy" ? !import_o1js7.Mina.hasAccount(sender, tokenId) : false;
  let isNewSellAccount = false;
  if (txType === "token:bid:sell") {
    if (!bidAddress || !bidContract)
      throw new Error("Bid address is required");
    await fetchMinaAccount({
      publicKey: bidAddress,
      force: true
    });
    const buyer = bidContract.buyer.get();
    await fetchMinaAccount({
      publicKey: buyer,
      tokenId,
      force: false
    });
    isNewSellAccount = !import_o1js7.Mina.hasAccount(buyer, tokenId);
  }
  const isNewTransferMintAccount = (txType === "token:transfer" || txType === "token:airdrop" || txType === "token:mint") && to ? !import_o1js7.Mina.hasAccount(to, tokenId) : false;
  const accountCreationFee = (isNewBidOfferAccount ? 1e9 : 0) + (isNewBuyAccount ? 1e9 : 0) + (isNewSellAccount ? 1e9 : 0) + (isNewTransferMintAccount ? 1e9 : 0) + (isToNewAccount && txType === "token:mint" && isAdvanced && advancedAdminContract.whitelist.get().isSome().toBoolean() ? 1e9 : 0);
  console.log("accountCreationFee", accountCreationFee / 1e9);
  const tx = await import_o1js7.Mina.transaction({ sender, fee, memo, nonce }, async () => {
    const feeAccountUpdate = import_o1js7.AccountUpdate.createSigned(sender);
    if (accountCreationFee > 0) {
      feeAccountUpdate.balance.subInPlace(accountCreationFee);
    }
    if (provingKey && provingFee)
      feeAccountUpdate.send({
        to: provingKey,
        amount: provingFee
      });
    if (developerAddress && developerFee) {
      feeAccountUpdate.send({
        to: developerAddress,
        amount: developerFee
      });
    }
    switch (txType) {
      case "token:mint":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (to === void 0)
          throw new Error("Error: To address is required");
        await zkToken.mint(to, amount);
        break;
      case "token:transfer":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (to === void 0)
          throw new Error("Error: From address is required");
        await zkToken.transfer(sender, to, amount);
        break;
      case "token:offer:create":
        if (price === void 0)
          throw new Error("Error: Price is required");
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (offerContract === void 0)
          throw new Error("Error: Offer address is required");
        if (offerContractDeployment === void 0)
          throw new Error("Error: Offer address is required");
        if (isNewBidOfferAccount) {
          await offerContractDeployment.deploy({
            verificationKey: offerVerificationKey,
            whitelist: whitelist ?? import_storage4.Whitelist.empty()
          });
          offerContract.account.zkappUri.set(`Offer for ${symbol}`);
          await offerContract.initialize(sender, tokenAddress, amount, price);
          await zkToken.approveAccountUpdates([
            offerContractDeployment.self,
            offerContract.self
          ]);
        } else {
          await offerContract.offer(amount, price);
          await zkToken.approveAccountUpdate(offerContract.self);
        }
        break;
      case "token:offer:buy":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (offerContract === void 0)
          throw new Error("Error: Offer address is required");
        await offerContract.buy(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;
      case "token:offer:withdraw":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (offerContract === void 0)
          throw new Error("Error: Offer address is required");
        await offerContract.withdraw(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;
      case "token:bid:create":
        if (price === void 0)
          throw new Error("Error: Price is required");
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (bidContract === void 0)
          throw new Error("Error: Bid address is required");
        if (bidContractDeployment === void 0)
          throw new Error("Error: Bid address is required");
        if (isNewBidOfferAccount) {
          await bidContractDeployment.deploy({
            verificationKey: bidVerificationKey,
            whitelist: whitelist ?? import_storage4.Whitelist.empty()
          });
          bidContract.account.zkappUri.set(`Bid for ${symbol}`);
          await bidContract.initialize(tokenAddress, amount, price);
          await zkToken.approveAccountUpdates([
            bidContractDeployment.self,
            bidContract.self
          ]);
        } else {
          await bidContract.bid(amount, price);
          await zkToken.approveAccountUpdate(bidContract.self);
        }
        break;
      case "token:bid:sell":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (bidContract === void 0)
          throw new Error("Error: Bid address is required");
        await bidContract.sell(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;
      case "token:bid:withdraw":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (bidContract === void 0)
          throw new Error("Error: Bid address is required");
        await bidContract.withdraw(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;
      case "token:admin:whitelist":
        if (!isAdvanced)
          throw new Error("Invalid admin type for updateAdminWhitelist");
        await advancedAdminContract.updateWhitelist(whitelist);
        break;
      case "token:bid:whitelist":
        if (bidContract === void 0)
          throw new Error("Error: Bid address is required");
        await bidContract.updateWhitelist(whitelist);
        break;
      case "token:offer:whitelist":
        if (offerContract === void 0)
          throw new Error("Error: Offer address is required");
        await offerContract.updateWhitelist(whitelist);
        break;
      default:
        throw new Error(`Unknown transaction type: ${txType}`);
    }
  });
  return {
    request: txType === "token:offer:create" || txType === "token:bid:create" || txType === "token:offer:whitelist" || txType === "token:bid:whitelist" || txType === "token:admin:whitelist" ? {
      ...args,
      whitelist: whitelist?.toString()
    } : args,
    tx,
    isAdvanced,
    adminContractAddress,
    adminAddress,
    symbol,
    verificationKeyHashes
  };
}
async function getTokenSymbolAndAdmin(params) {
  const { txType, tokenAddress, chain, to, offerAddress, bidAddress } = params;
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  const verificationKeyHashes = [];
  if (bidAddress) {
    verificationKeyHashes.push(vk.FungibleTokenBidContract.hash);
  }
  if (offerAddress) {
    verificationKeyHashes.push(vk.FungibleTokenOfferContract.hash);
  }
  class FungibleTokenState extends (0, import_o1js7.Struct)({
    decimals: import_o1js7.UInt8,
    admin: import_o1js7.PublicKey,
    paused: import_o1js7.Bool
  }) {
  }
  const FungibleTokenStateSize = FungibleTokenState.sizeInFields();
  class FungibleTokenAdminState extends (0, import_o1js7.Struct)({
    adminPublicKey: import_o1js7.PublicKey
  }) {
  }
  const FungibleTokenAdminStateSize = FungibleTokenAdminState.sizeInFields();
  await fetchMinaAccount({ publicKey: tokenAddress, force: true });
  if (!import_o1js7.Mina.hasAccount(tokenAddress)) {
    throw new Error("Token contract account not found");
  }
  const tokenId = import_o1js7.TokenId.derive(tokenAddress);
  await fetchMinaAccount({ publicKey: tokenAddress, tokenId, force: true });
  if (!import_o1js7.Mina.hasAccount(tokenAddress, tokenId)) {
    throw new Error("Token contract totalSupply account not found");
  }
  const account = import_o1js7.Mina.getAccount(tokenAddress);
  const verificationKey = account.zkapp?.verificationKey;
  if (!verificationKey) {
    throw new Error("Token contract verification key not found");
  }
  if (!verificationKeyHashes.includes(verificationKey.hash.toJSON())) {
    verificationKeyHashes.push(verificationKey.hash.toJSON());
  }
  if (account.zkapp?.appState === void 0) {
    throw new Error("Token contract state not found");
  }
  const state6 = FungibleTokenState.fromFields(account.zkapp?.appState.slice(0, FungibleTokenStateSize));
  const symbol = account.tokenSymbol;
  const adminContractPublicKey = state6.admin;
  await fetchMinaAccount({
    publicKey: adminContractPublicKey,
    force: true
  });
  if (!import_o1js7.Mina.hasAccount(adminContractPublicKey)) {
    throw new Error("Admin contract account not found");
  }
  const adminContract = import_o1js7.Mina.getAccount(adminContractPublicKey);
  const adminVerificationKey = adminContract.zkapp?.verificationKey;
  if (!adminVerificationKey) {
    throw new Error("Admin verification key not found");
  }
  if (!verificationKeyHashes.includes(adminVerificationKey.hash.toJSON())) {
    verificationKeyHashes.push(adminVerificationKey.hash.toJSON());
  }
  let isAdvanced = false;
  if (vk.FungibleTokenAdvancedAdmin.hash === adminVerificationKey.hash.toJSON() && vk.FungibleTokenAdvancedAdmin.data === adminVerificationKey.data) {
    isAdvanced = true;
  } else if (vk.FungibleTokenAdmin.hash === adminVerificationKey.hash.toJSON() && vk.FungibleTokenAdmin.data === adminVerificationKey.data) {
    isAdvanced = false;
  } else {
    throw new Error("Unknown admin verification key");
  }
  let isToNewAccount = void 0;
  if (to) {
    if (isAdvanced) {
      const adminTokenId = import_o1js7.TokenId.derive(adminContractPublicKey);
      await fetchMinaAccount({
        publicKey: to,
        tokenId: adminTokenId,
        force: false
      });
      isToNewAccount = !import_o1js7.Mina.hasAccount(to, adminTokenId);
    }
  }
  const adminAddress0 = adminContract.zkapp?.appState[0];
  const adminAddress1 = adminContract.zkapp?.appState[1];
  if (adminAddress0 === void 0 || adminAddress1 === void 0) {
    throw new Error("Cannot fetch admin address from admin contract");
  }
  const adminAddress = import_o1js7.PublicKey.fromFields([adminAddress0, adminAddress1]);
  for (const hash of verificationKeyHashes) {
    const found = Object.values(vk).some((key) => key.hash === hash);
    if (!found)
      throw new Error(`Final check: unknown verification key hash: ${hash}`);
  }
  verificationKeyHashes.sort((a, b) => {
    const typeA = Object.values(vk).find((key) => key.hash === a)?.type;
    const typeB = Object.values(vk).find((key) => key.hash === b)?.type;
    if (typeA === void 0 || typeB === void 0) {
      throw new Error("Unknown verification key hash");
    }
    const typeOrder = {
      upgrade: 0,
      admin: 1,
      token: 2,
      user: 3
    };
    return typeOrder[typeA] - typeOrder[typeB];
  });
  return {
    adminContractAddress: adminContractPublicKey,
    adminAddress,
    symbol,
    isAdvanced,
    isToNewAccount,
    verificationKeyHashes
  };
}

// dist/node/fee.js
var LAUNCH_FEE = 1e9;
var TRANSACTION_FEE = 1e8;

// dist/node/token.js
var tokenContracts = {
  FungibleToken,
  FungibleTokenAdmin,
  AdvancedFungibleToken,
  FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract,
  FungibleTokenOfferContract
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdvancedAdminData,
  AdvancedFungibleToken,
  BalanceChangeEvent,
  BurnEvent,
  FungibleToken,
  FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract,
  FungibleTokenContract,
  FungibleTokenErrors,
  FungibleTokenOfferContract,
  LAUNCH_FEE,
  MintEvent,
  PauseEvent,
  SetAdminEvent,
  TRANSACTION_FEE,
  buildTokenLaunchTransaction,
  buildTokenTransaction,
  fetchMinaAccount,
  getTokenSymbolAndAdmin,
  tokenContracts,
  tokenVerificationKeys
});
