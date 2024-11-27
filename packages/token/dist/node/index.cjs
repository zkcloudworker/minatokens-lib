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
var node_exports = {};
__export(node_exports, {
  FungibleToken: () => FungibleToken,
  FungibleTokenAdmin: () => FungibleTokenAdmin,
  FungibleTokenBidContract: () => FungibleTokenBidContract,
  FungibleTokenOfferContract: () => FungibleTokenOfferContract,
  FungibleTokenWhitelistedAdmin: () => FungibleTokenWhitelistedAdmin,
  LAUNCH_FEE: () => LAUNCH_FEE,
  TRANSACTION_FEE: () => TRANSACTION_FEE,
  WhitelistedFungibleToken: () => WhitelistedFungibleToken,
  buildTokenDeployTransaction: () => buildTokenDeployTransaction,
  buildTokenTransaction: () => buildTokenTransaction,
  fetchMinaAccount: () => fetchMinaAccount,
  fungibleTokenVerificationKeys: () => fungibleTokenVerificationKeys,
  getTokenSymbolAndAdmin: () => getTokenSymbolAndAdmin,
  getTokenTransactionSender: () => getTokenTransactionSender,
  tokenVerificationKeys: () => tokenVerificationKeys
});
module.exports = __toCommonJS(node_exports);

// dist/node/bid.js
var import_tslib5 = require("tslib");
var import_o1js5 = require("o1js");
var import_storage3 = require("@minatokens/storage");

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
        setVerificationKey: import_o1js.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
        setPermissions: import_o1js.Permissions.impossible(),
        access: import_o1js.Permissions.proof()
      });
    }
    /** Update the verification key.
     * Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.
     */
    async updateVerificationKey(vk) {
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

// dist/node/FungibleTokenAdmin.js
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

// dist/node/FungibleTokenWhitelistedAdmin.js
var import_tslib3 = require("tslib");
var import_o1js3 = require("o1js");
var import_storage = require("@minatokens/storage");
var FungibleTokenWhitelistedAdmin = class extends import_o1js3.SmartContract {
  constructor() {
    super(...arguments);
    this.adminPublicKey = (0, import_o1js3.State)();
    this.whitelist = (0, import_o1js3.State)();
    this.events = { updateWhitelist: import_storage.Whitelist };
  }
  async deploy(props) {
    await super.deploy(props);
    this.adminPublicKey.set(props.adminPublicKey);
    this.whitelist.set(props.whitelist);
    this.account.permissions.set({
      ...import_o1js3.Permissions.default(),
      setVerificationKey: import_o1js3.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js3.Permissions.impossible()
    });
  }
  /** Update the verification key.
   * Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.
   */
  async updateVerificationKey(vk) {
    this.account.verificationKey.set(vk);
  }
  async ensureAdminSignature() {
    const admin = await import_o1js3.Provable.witnessAsync(import_o1js3.PublicKey, async () => {
      let pk = await this.adminPublicKey.fetch();
      (0, import_o1js3.assert)(pk !== void 0, "could not fetch admin public key");
      return pk;
    });
    this.adminPublicKey.requireEquals(admin);
    return import_o1js3.AccountUpdate.createSigned(admin);
  }
  async canMint(_accountUpdate) {
    const address = _accountUpdate.body.publicKey;
    const balanceChange = _accountUpdate.body.balanceChange;
    balanceChange.isPositive().assertTrue();
    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(address);
    return balanceChange.magnitude.lessThanOrEqual(
      whitelistedAmount.orElse(import_o1js3.UInt64.from(0))
      // here can be a minimum amount allowed by travel rule instead of 0
    );
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
};
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_o1js3.PublicKey),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenWhitelistedAdmin.prototype, "adminPublicKey", void 0);
(0, import_tslib3.__decorate)([
  (0, import_o1js3.state)(import_storage.Whitelist),
  (0, import_tslib3.__metadata)("design:type", Object)
], FungibleTokenWhitelistedAdmin.prototype, "whitelist", void 0);
(0, import_tslib3.__decorate)([
  import_o1js3.method,
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.VerificationKey]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "updateVerificationKey", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.AccountUpdate]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "canMint", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_o1js3.PublicKey]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "canChangeAdmin", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", []),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "canPause", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method.returns(import_o1js3.Bool),
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", []),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "canResume", null);
(0, import_tslib3.__decorate)([
  import_o1js3.method,
  (0, import_tslib3.__metadata)("design:type", Function),
  (0, import_tslib3.__metadata)("design:paramtypes", [import_storage.Whitelist]),
  (0, import_tslib3.__metadata)("design:returntype", Promise)
], FungibleTokenWhitelistedAdmin.prototype, "updateWhitelist", null);

// dist/node/offer.js
var import_tslib4 = require("tslib");
var import_o1js4 = require("o1js");
var import_storage2 = require("@minatokens/storage");
var FungibleTokenOfferContract = class _FungibleTokenOfferContract extends import_o1js4.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js4.State)();
    this.seller = (0, import_o1js4.State)();
    this.token = (0, import_o1js4.State)();
    this.whitelist = (0, import_o1js4.State)();
    this.events = {
      offer: import_o1js4.UInt64,
      withdraw: import_o1js4.UInt64,
      buy: import_o1js4.UInt64,
      updateWhitelist: import_storage2.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
    const verificationKey = args?.verificationKey ?? _FungibleTokenOfferContract._verificationKey;
    (0, import_o1js4.assert)(verificationKey !== void 0);
    const hash = typeof verificationKey.hash === "string" ? verificationKey.hash : verificationKey.hash.toJSON();
    const networkId = import_o1js4.Mina.getNetworkId();
    (0, import_o1js4.assert)(networkId === "mainnet" || networkId === "testnet");
    (0, import_o1js4.assert)(hash === tokenVerificationKeys[networkId].vk.FungibleTokenOfferContract.hash);
    (0, import_o1js4.assert)(verificationKey.data === tokenVerificationKeys[networkId].vk.FungibleTokenOfferContract.data);
    this.whitelist.set(args.whitelist);
    this.account.permissions.set({
      ...import_o1js4.Permissions.default(),
      send: import_o1js4.Permissions.proof(),
      setVerificationKey: import_o1js4.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js4.Permissions.impossible()
    });
  }
  async initialize(seller, token, amount, price) {
    this.account.provedState.requireEquals((0, import_o1js4.Bool)(false));
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
    price.equals(oldPrice).or(balance.equals(import_o1js4.UInt64.from(0))).assertTrue();
    this.price.set(price);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js4.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sender.assertEquals(seller);
    await tokenContract.transfer(sender, this.address, amount);
    this.emitEvent("offer", amount);
  }
  async withdraw(amount) {
    amount.equals(import_o1js4.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js4.UInt64.MAXINT());
    const seller = this.seller.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js4.AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sender.assertEquals(seller);
    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = import_o1js4.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    this.emitEvent("withdraw", amount);
  }
  async buy(amount) {
    amount.equals(import_o1js4.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js4.UInt64.MAXINT());
    const seller = this.seller.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const price = this.price.getAndRequireEquals();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js4.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js4.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js4.UInt64.Unsafe.fromField(totalPriceField);
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js4.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: seller, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    let offerUpdate = this.send({ to: buyer, amount });
    offerUpdate.body.mayUseToken = import_o1js4.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    const whitelist = this.whitelist.getAndRequireEquals();
    const whitelistedAmount = await whitelist.getWhitelistedAmount(buyer);
    amount.assertLessThanOrEqual(whitelistedAmount.assertSome());
    this.emitEvent("buy", amount);
  }
  async updateWhitelist(whitelist) {
    const seller = this.seller.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js4.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js4.Bool)(true);
    sender.assertEquals(seller);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
};
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.UInt64),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "price", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "seller", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_o1js4.PublicKey),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "token", void 0);
(0, import_tslib4.__decorate)([
  (0, import_o1js4.state)(import_storage2.Whitelist),
  (0, import_tslib4.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "whitelist", void 0);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [
    import_o1js4.PublicKey,
    import_o1js4.PublicKey,
    import_o1js4.UInt64,
    import_o1js4.UInt64
  ]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "initialize", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64, import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "offer", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "withdraw", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_o1js4.UInt64]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "buy", null);
(0, import_tslib4.__decorate)([
  import_o1js4.method,
  (0, import_tslib4.__metadata)("design:type", Function),
  (0, import_tslib4.__metadata)("design:paramtypes", [import_storage2.Whitelist]),
  (0, import_tslib4.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "updateWhitelist", null);

// dist/node/token.js
var FungibleToken = FungibleTokenContract(FungibleTokenAdmin);
var WhitelistedFungibleToken = FungibleTokenContract(FungibleTokenWhitelistedAdmin);
var tokenVerificationKeys = {
  mainnet: {
    o1js: "2.1.0",
    zkcloudworker: "0.18.9",
    vk: {
      FungibleToken: {
        hash: "27787098481477206239805523694633411816874383698563160451006881053714904356680",
        data: "AABoR9W/JCk+QV7xmR0EmMunepTBYRNFuyTe3jy0YL4FPMZvsY3S7Erek8aQc6iEbg0gx8yQZuX7/I9abchc2AM3/JhaHwmIVJYlvR+hIhruFPB3wgxMNv0w0gKKcrMUjwumIsjP5rBKR/iI66NePvgPuC29OEcvCy1WA7VGa4jkJdudep82RUdWGRWK2+TESBdYTcmhDVuKl71sFjmOdRsHPuHz9tgXl+pkmjmsRFUu0NL0uf7+4UZZ3qwo5JDu+CK6Ec77HZQNWTxobryIa5NH8CwGRTykkaJMUmjbfWiFPCUHzvcqpOIDa/P0WVqqmkAksmXroqqmKGk7zQBN+Ak0GHEPqQDSJIQv98Wm/EluR3MtPMixUI0OSCdbCe++KR4gIKwvRX+AyBCIcMUEuQ7CN4TcDQmD4dsnU3Ywu2cTLCmf1z6el9AHdoTNg5kHvhrxJtV5O5sUnQEW+LPdxSMkxmO3ao9cj4Pdjpf//o1wVN9GR9uyGgj7JxOzi0e1HC2DWmTr5hsWR+J7Pz5rAY5jv5xAcpzUgdqRLr+0Z5wQBovJXign+HwE1cLbTGjZjc2WzRyDEAUfk+VvpE9GcgUdANc/+/9LDBGscgjss4OnRo4dDv+cy1ilGE13RwrFqsMgPFtjm77FesP8kK20STAvJO2MpVDJBLRBUS3T2rKWlwuhL95iMJSSJp15EYPASeiSRhU71xGX0Ga6ZJUBPmwuN43AhoCb5DcuShlhi7CwjficYrtDo1u7ZpmnWP0tbaE1u3Cmua8TUIWLHYL9CoBo2HEP5858I/xbZpseBTXbUhQOgdQSqCj0ai5ibbIEWlzyeVctufQRm6pK4OGSnZvSP+km8zpVR15SVLkkzPAtmtpJ28bSInD1sm++/MMMz30+xP+7XMk6yCnAKS7Ryh+7LqDgPK2C3fPDaPe38v1PXDUseFa60FhJTq5ztwNXhVtkUUgBMObzMAH3yCYnFj41JvRuR9diVD4NJ0h3wxxcbGWD8ROvjUEUv2U9ouTlDggGZunJOaokUMypVHGFo2m6aD1kU1ijdmfOmX+cPmPOcCFxFP87ZayF0PDkmlcG57tWDwHcET43eCS+S3PWlOhqIFZ7I2B7aVCbWcj38kLUVQrXfZDtDoMO2w9HMTt+DX0bI84TT7Y8neo5A4vxwqLRTmXOUco5swl6krrbqdWcehU/l882C3IQcOyVS4j6tJvV7Z87QSHbGnw0iM/bp3WjCgd+XbMVKuLB1iwTlhgWJc0HMs3w9N0ZlssmVHaWTEorf/QDhPtXCCqwGlNLJgH7mO+P0Tmco9/vB6iGqQ66hwXZlTangzKx28yLvUiZraqXFF8bsmgkuxfzoTKsstEKJMiTF4q5UNl9Cixyht9LdXL76v/MRCzaVrhGoiJMueECkMxTgwLrNNq7h6j+xRf8lWaYTudxkUUFrAKTzRpbpAduRmpd4tjIYhM7umH0mhTnCK6ShwQz6ZsHBSbktYOxGFqHjMyPtx2k0+pZ+Qsu/GjsmeMbJSLcUPTObWIfFVco2SSBUteZsA3ZgP4jhEWWtOzXYIHjWqj3g9XOVuVJ4TcbO2FK4mVJ9ETnRxKH0AmGPnXb0Nc+sC9nRnDN2OTqPtXJkeRfI7jkHCFb79u8QPvuqhsYWVSS8bI3rXE1kWY1ZKYoC3FtfenG9e8haWYXUyk1783IQJ4W1jkscQTU1RZrL0cWoaCxIXnXsdDJStgz8B9EQ0uUEkfXSXYEbQtIA4DVKzTO4uqxOzafqAOLnvOxi5Vn95JCOu3CEAFr0WQEOnA2X3nw31spFvLj0jykGpn1ECHhW4Ft9EOkHDr4qDA8Mi5gH9EB+g0AhObwxj7RZB2Wq5PSmZw131mkHzgYOgD3JC9tlaGMSxesjF1O3+U3wUOLrrU89s128Y0PpiEzO6Jsm1aDzbF1pkz3asy0z+Enb4BMg/Jv5j/EZkKM6Okv746/ETIs69fv3e5Iucae7lyyYVNCYBtucWrOQK2Pfi4QzRZjkC29hj8OenHSn+75qcX/v5ejhSBAb24Bp1INNVgaF3VHGz1+ULEcs73b/b0K1AQJYfdkfD4fqrj1nUIlVYv3yw1SyEKClpoiBaLiRxg/04rgb3enmxe6msVApSIlAYs+qeRAIRDCU+ZensV1x4sS4VCjQgoPlo9sV7wJDUOTsUkgux38w39sqiSfONzmyhfXqZocojTv1m3vHh8gnCFUbZ/d3WvywDE67VPRlTYX5ZR80Yyjz3byDH2/+DWOsjv2q8KUv2mtgkiOTZ1D3tAF6Vl6tSWlixMYc1tfC8KDWDOq2eg7M72MqjfiMTuBPXr2ZB/nTdtCi9lDQQESzBmgJaV/KCZOAaIKQR9hibvy4vt3wlSZ9XTK+FFZPQc="
      },
      FungibleTokenAdmin: {
        hash: "25901604630376752069358432490423434073212977760589721765585739320126139736123",
        data: "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"
      },
      WhitelistedFungibleToken: {
        hash: "27787098481477206239805523694633411816874383698563160451006881053714904356680",
        data: "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"
      },
      FungibleTokenWhitelistedAdmin: {
        hash: "19641412157595882526013339127483017677791543136878603715474182835463393277622",
        data: "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"
      },
      FungibleTokenBidContract: {
        hash: "13290952274336741358452297924879435304865306432909699834625876541003088475079",
        data: "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"
      },
      FungibleTokenOfferContract: {
        hash: "2858136391761960286699306196905265168181712302492280978164878175630383743048",
        data: "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"
      },
      FungibleTokenAdminMF: {
        hash: "25901604630376752069358432490423434073212977760589721765585739320126139736123",
        data: "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"
      },
      FungibleTokenMF: {
        hash: "27787098481477206239805523694633411816874383698563160451006881053714904356680",
        data: "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"
      }
    }
  },
  testnet: {
    o1js: "2.1.0",
    zkcloudworker: "0.18.9",
    vk: {
      FungibleToken: {
        hash: "22278758441605771858700252645311428360030262698072838723799702480887091310093",
        data: "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"
      },
      FungibleTokenAdmin: {
        hash: "15958550144671703080408884627087990244648824766878280780120011347457437134053",
        data: "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"
      },
      WhitelistedFungibleToken: {
        hash: "22278758441605771858700252645311428360030262698072838723799702480887091310093",
        data: "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"
      },
      FungibleTokenWhitelistedAdmin: {
        hash: "20172938263834569171197221661527530681186299670687606810012808881888777415767",
        data: "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"
      },
      FungibleTokenBidContract: {
        hash: "21028578844692686241145580941807588328600986400769755733788301125980472965477",
        data: "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"
      },
      FungibleTokenOfferContract: {
        hash: "12073217068283876954049572004931286804667636618982691926234972243181859812345",
        data: "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"
      },
      FungibleTokenAdminMF: {
        hash: "15958550144671703080408884627087990244648824766878280780120011347457437134053",
        data: "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"
      },
      FungibleTokenMF: {
        hash: "22278758441605771858700252645311428360030262698072838723799702480887091310093",
        data: "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"
      }
    }
  }
};

// dist/node/bid.js
var FungibleTokenBidContract = class _FungibleTokenBidContract extends import_o1js5.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js5.State)();
    this.buyer = (0, import_o1js5.State)();
    this.token = (0, import_o1js5.State)();
    this.whitelist = (0, import_o1js5.State)();
    this.events = {
      bid: import_o1js5.UInt64,
      withdraw: import_o1js5.UInt64,
      sell: import_o1js5.UInt64,
      updateWhitelist: import_storage3.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
    const verificationKey = args?.verificationKey ?? _FungibleTokenBidContract._verificationKey;
    (0, import_o1js5.assert)(verificationKey !== void 0);
    const hash = typeof verificationKey.hash === "string" ? verificationKey.hash : verificationKey.hash.toJSON();
    const networkId = import_o1js5.Mina.getNetworkId();
    (0, import_o1js5.assert)(networkId === "mainnet" || networkId === "testnet");
    (0, import_o1js5.assert)(hash === tokenVerificationKeys[networkId].vk.FungibleTokenBidContract.hash);
    (0, import_o1js5.assert)(verificationKey.data === tokenVerificationKeys[networkId].vk.FungibleTokenBidContract.data);
    this.whitelist.set(args.whitelist);
    this.account.permissions.set({
      ...import_o1js5.Permissions.default(),
      send: import_o1js5.Permissions.proof(),
      setVerificationKey: import_o1js5.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js5.Permissions.impossible()
    });
  }
  async initialize(token, amount, price) {
    this.account.provedState.requireEquals((0, import_o1js5.Bool)(false));
    amount.equals(import_o1js5.UInt64.from(0)).assertFalse();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js5.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js5.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js5.UInt64.Unsafe.fromField(totalPriceField);
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js5.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    this.buyer.set(buyer);
    this.price.set(price);
    this.token.set(token);
    this.emitEvent("bid", amount);
  }
  async bid(amount, price) {
    amount.equals(import_o1js5.UInt64.from(0)).assertFalse();
    const balance = this.account.balance.getAndRequireEquals();
    const oldPrice = this.price.getAndRequireEquals();
    price.equals(oldPrice).or(balance.equals(import_o1js5.UInt64.from(0))).assertTrue();
    this.price.set(price);
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js5.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js5.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js5.UInt64.Unsafe.fromField(totalPriceField);
    const sender = this.sender.getUnconstrained();
    const buyer = this.buyer.getAndRequireEquals();
    sender.assertEquals(buyer);
    const buyerUpdate = import_o1js5.AccountUpdate.createSigned(buyer);
    buyerUpdate.send({ to: this.address, amount: totalPrice });
    buyerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    this.price.set(price);
    this.emitEvent("bid", amount);
  }
  async withdraw(amountInMina) {
    amountInMina.equals(import_o1js5.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amountInMina, import_o1js5.UInt64.MAXINT());
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sender.assertEquals(buyer);
    let bidUpdate = this.send({ to: senderUpdate, amount: amountInMina });
    bidUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    this.emitEvent("withdraw", amountInMina);
  }
  async sell(amount) {
    amount.equals(import_o1js5.UInt64.from(0)).assertFalse();
    const price = this.price.getAndRequireEquals();
    const totalPriceField = price.value.mul(amount.value).div((0, import_o1js5.Field)(1e9));
    totalPriceField.assertLessThan(import_o1js5.UInt64.MAXINT().value, "totalPrice overflow");
    const totalPrice = import_o1js5.UInt64.Unsafe.fromField(totalPriceField);
    this.account.balance.requireBetween(totalPrice, import_o1js5.UInt64.MAXINT());
    const buyer = this.buyer.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const seller = this.sender.getUnconstrained();
    const sellerUpdate = this.send({ to: seller, amount: totalPrice });
    sellerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sellerUpdate.requireSignature();
    const tokenContract = new FungibleToken(token);
    await tokenContract.transfer(seller, buyer, amount);
    this.emitEvent("sell", amount);
  }
  async updateWhitelist(whitelist) {
    const buyer = this.buyer.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sender.assertEquals(buyer);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
};
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.UInt64),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "price", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "buyer", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "token", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_storage3.Whitelist),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenBidContract.prototype, "whitelist", void 0);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.PublicKey, import_o1js5.UInt64, import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "initialize", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64, import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "bid", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "withdraw", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "sell", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_storage3.Whitelist]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenBidContract.prototype, "updateWhitelist", null);

// dist/node/build.js
var import_storage4 = require("@minatokens/storage");

// dist/node/fetch.js
var import_o1js6 = require("o1js");
async function fetchMinaAccount(params) {
  const { publicKey, tokenId, force = false } = params;
  const timeout = 1e3 * 60 * 3;
  let attempt = 0;
  const startTime = Date.now();
  let result = { account: void 0 };
  while (Date.now() - startTime < timeout) {
    try {
      const result2 = await (0, import_o1js6.fetchAccount)({
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

// dist/node/build.js
var import_o1js7 = require("o1js");
async function buildTokenDeployTransaction(params) {
  const { fee, sender, nonce, memo, tokenAddress, adminContractAddress, uri, symbol, developerAddress, developerFee, provingKey, provingFee, decimals, chain } = params;
  const isWhitelisted = params.whitelist !== void 0;
  if (memo && typeof memo !== "string")
    throw new Error("Memo must be a string");
  if (memo && memo.length > 30)
    throw new Error("Memo must be less than 30 characters");
  if (!symbol || typeof symbol !== "string")
    throw new Error("Symbol must be a string");
  if (symbol.length >= 7)
    throw new Error("Symbol must be less than 7 characters");
  const adminContract = isWhitelisted ? FungibleTokenWhitelistedAdmin : FungibleTokenAdmin;
  const tokenContract = isWhitelisted ? WhitelistedFungibleToken : FungibleToken;
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (!vk || !vk.FungibleTokenWhitelistedAdmin || !vk.FungibleTokenWhitelistedAdmin.hash || !vk.FungibleTokenWhitelistedAdmin.data || !vk.FungibleTokenAdmin || !vk.FungibleTokenAdmin.hash || !vk.FungibleTokenAdmin.data || !vk.WhitelistedFungibleToken || !vk.WhitelistedFungibleToken.hash || !vk.WhitelistedFungibleToken.data || !vk.FungibleToken || !vk.FungibleToken.hash || !vk.FungibleToken.data)
    throw new Error("Cannot get verification keys");
  const adminVerificationKey = isWhitelisted ? vk.FungibleTokenWhitelistedAdmin : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isWhitelisted ? vk.WhitelistedFungibleToken : vk.FungibleToken;
  if (!adminVerificationKey || !tokenVerificationKey)
    throw new Error("Cannot get verification keys");
  await fetchMinaAccount({
    publicKey: sender,
    force: true
  });
  if (!import_o1js7.Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }
  const whitelist = params.whitelist ? typeof params.whitelist === "string" ? import_storage4.Whitelist.fromString(params.whitelist) : await import_storage4.Whitelist.create({ list: params.whitelist, name: symbol }) : void 0;
  const zkToken = new tokenContract(tokenAddress);
  const zkAdmin = new adminContract(adminContractAddress);
  const tx = await import_o1js7.Mina.transaction({ sender, fee, memo: memo ?? `deploy ${symbol}`, nonce }, async () => {
    const feeAccountUpdate = import_o1js7.AccountUpdate.createSigned(sender);
    feeAccountUpdate.balance.subInPlace(3e9);
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
    if (isWhitelisted && !whitelist) {
      throw new Error("Whitelisted addresses not found");
    }
    await zkAdmin.deploy({
      adminPublicKey: sender,
      verificationKey: adminVerificationKey,
      whitelist
    });
    zkAdmin.account.zkappUri.set(uri);
    await zkToken.deploy({
      symbol,
      src: uri,
      verificationKey: tokenVerificationKey
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
    tx,
    isWhitelisted,
    adminVerificationKey: {
      hash: (0, import_o1js7.Field)(adminVerificationKey.hash),
      data: adminVerificationKey.data
    },
    tokenVerificationKey: {
      hash: (0, import_o1js7.Field)(tokenVerificationKey.hash),
      data: tokenVerificationKey.data
    },
    whitelist: whitelist?.toString()
  };
}
function getTokenTransactionSender(params) {
  const { txType, from, to } = params;
  if (txType === "buy" || txType === "withdrawOffer" || txType === "withdrawBid") {
    return to;
  }
  return from;
}
async function buildTokenTransaction(params) {
  const { txType, chain, fee, nonce, tokenAddress, from, to, amount, price, developerAddress, developerFee, provingKey, provingFee } = params;
  const sender = getTokenTransactionSender({ txType, from, to });
  await fetchMinaAccount({
    publicKey: sender,
    force: true
  });
  if (!import_o1js7.Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }
  const { symbol, adminContractAddress, adminAddress, isWhitelisted } = await getTokenSymbolAndAdmin({
    tokenAddress,
    chain
  });
  const memo = params.memo ?? `${txType} ${symbol}`;
  const whitelistedAdminContract = new FungibleTokenWhitelistedAdmin(adminContractAddress);
  const tokenContract = isWhitelisted && txType === "mint" ? WhitelistedFungibleToken : FungibleToken;
  if ((txType === "whitelistAdmin" || txType === "whitelistBid" || txType === "whitelistOffer") && !params.whitelist) {
    throw new Error("Whitelist is required");
  }
  const whitelist = params.whitelist ? typeof params.whitelist === "string" ? import_storage4.Whitelist.fromString(params.whitelist) : await import_storage4.Whitelist.create({ list: params.whitelist, name: symbol }) : void 0;
  const zkToken = new tokenContract(tokenAddress);
  const tokenId = zkToken.deriveTokenId();
  if (txType === "mint" && adminAddress.toBase58() !== sender.toBase58())
    throw new Error("Invalid sender for mint");
  await fetchMinaAccount({
    publicKey: tokenAddress,
    tokenId,
    force: true
  });
  await fetchMinaAccount({
    publicKey: from,
    tokenId,
    force: [
      "offer",
      "whitelistOffer",
      "bid",
      "whitelistBid",
      "sell",
      "transfer",
      "withdrawOffer"
    ].includes(txType)
  });
  await fetchMinaAccount({
    publicKey: to,
    tokenId,
    force: [
      "sell",
      "whitelistAdmin",
      "withdrawBid",
      "withdrawOffer"
    ].includes(txType)
  });
  const isNewAccount = import_o1js7.Mina.hasAccount(to, tokenId) === false;
  const offerContract = new FungibleTokenOfferContract([
    "offer",
    "whitelistOffer"
  ].includes(txType) ? to : from, tokenId);
  const bidContract = new FungibleTokenBidContract([
    "bid",
    "whitelistBid"
  ].includes(txType) ? from : to, tokenId);
  const offerContractDeployment = new FungibleTokenOfferContract(to, tokenId);
  const bidContractDeployment = new FungibleTokenBidContract(from, tokenId);
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (!vk || !vk.FungibleTokenOfferContract || !vk.FungibleTokenOfferContract.hash || !vk.FungibleTokenOfferContract.data || !vk.FungibleTokenBidContract || !vk.FungibleTokenBidContract.hash || !vk.FungibleTokenBidContract.data || !vk.FungibleTokenWhitelistedAdmin || !vk.FungibleTokenWhitelistedAdmin.hash || !vk.FungibleTokenWhitelistedAdmin.data || !vk.FungibleTokenAdmin || !vk.FungibleTokenAdmin.hash || !vk.FungibleTokenAdmin.data || !vk.WhitelistedFungibleToken || !vk.WhitelistedFungibleToken.hash || !vk.WhitelistedFungibleToken.data || !vk.FungibleToken || !vk.FungibleToken.hash || !vk.FungibleToken.data)
    throw new Error("Cannot get verification key");
  const adminVerificationKey = isWhitelisted ? vk.FungibleTokenWhitelistedAdmin : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isWhitelisted ? vk.WhitelistedFungibleToken : vk.FungibleToken;
  const offerVerificationKey = FungibleTokenOfferContract._verificationKey ?? {
    hash: (0, import_o1js7.Field)(vk.FungibleTokenOfferContract.hash),
    data: vk.FungibleTokenOfferContract.data
  };
  const bidVerificationKey = FungibleTokenBidContract._verificationKey ?? {
    hash: (0, import_o1js7.Field)(vk.FungibleTokenBidContract.hash),
    data: vk.FungibleTokenBidContract.data
  };
  const tx = await import_o1js7.Mina.transaction({ sender, fee, memo, nonce }, async () => {
    const feeAccountUpdate = import_o1js7.AccountUpdate.createSigned(sender);
    if (isNewAccount) {
      feeAccountUpdate.balance.subInPlace(1e9);
    }
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
      case "mint":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await zkToken.mint(to, amount);
        break;
      case "transfer":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await zkToken.transfer(from, to, amount);
        break;
      case "offer":
        if (price === void 0)
          throw new Error("Error: Price is required");
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (isNewAccount) {
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
      case "buy":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await offerContract.buy(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;
      case "withdrawOffer":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await offerContract.withdraw(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;
      case "bid":
        if (price === void 0)
          throw new Error("Error: Price is required");
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        if (isNewAccount) {
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
      case "sell":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await bidContract.sell(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;
      case "withdrawBid":
        if (amount === void 0)
          throw new Error("Error: Amount is required");
        await bidContract.withdraw(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;
      case "whitelistAdmin":
        if (!whitelist)
          throw new Error("Whitelist is required");
        await whitelistedAdminContract.updateWhitelist(whitelist);
        break;
      case "whitelistBid":
        if (!whitelist)
          throw new Error("Whitelist is required");
        await bidContract.updateWhitelist(whitelist);
        break;
      case "whitelistOffer":
        if (!whitelist)
          throw new Error("Whitelist is required");
        await offerContract.updateWhitelist(whitelist);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;
      default:
        throw new Error(`Unknown transaction type: ${txType}`);
    }
  });
  return {
    tx,
    isWhitelisted,
    adminContractAddress,
    adminAddress,
    symbol,
    adminVerificationKey: {
      hash: (0, import_o1js7.Field)(adminVerificationKey.hash),
      data: adminVerificationKey.data
    },
    tokenVerificationKey: {
      hash: (0, import_o1js7.Field)(tokenVerificationKey.hash),
      data: tokenVerificationKey.data
    },
    offerVerificationKey,
    bidVerificationKey,
    whitelist: whitelist?.toString()
  };
}
async function getTokenSymbolAndAdmin(params) {
  const { tokenAddress, chain } = params;
  const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
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
  const account = import_o1js7.Mina.getAccount(tokenAddress);
  const verificationKey = account.zkapp?.verificationKey;
  if (!verificationKey) {
    throw new Error("Token contract verification key not found");
  }
  if (verificationKey.hash.toJSON() !== vk.FungibleToken.hash || verificationKey.data !== vk.FungibleToken.data || verificationKey.hash.toJSON() !== vk.WhitelistedFungibleToken.hash || verificationKey.data !== vk.WhitelistedFungibleToken.data) {
    throw new Error("Unknown token verification key");
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
  let isWhitelisted = false;
  if (vk.FungibleTokenWhitelistedAdmin.hash === adminVerificationKey.hash.toJSON() && vk.FungibleTokenWhitelistedAdmin.data === adminVerificationKey.data) {
    isWhitelisted = true;
  } else if (vk.FungibleTokenAdmin.hash === adminVerificationKey.hash.toJSON() && vk.FungibleTokenAdmin.data === adminVerificationKey.data) {
    isWhitelisted = false;
  } else {
    throw new Error("Unknown admin verification key");
  }
  const adminAddress0 = adminContract.zkapp?.appState[0];
  const adminAddress1 = adminContract.zkapp?.appState[1];
  if (adminAddress0 === void 0 || adminAddress1 === void 0) {
    throw new Error("Cannot fetch admin address from admin contract");
  }
  const adminAddress = import_o1js7.PublicKey.fromFields([adminAddress0, adminAddress1]);
  return {
    adminContractAddress: adminContractPublicKey,
    adminAddress,
    symbol,
    isWhitelisted
  };
}

// dist/node/fee.js
var LAUNCH_FEE = 1e9;
var TRANSACTION_FEE = 1e8;

// dist/node/vk.js
var fungibleTokenVerificationKeys = {
  testnet: {
    admin: {
      hash: "15958550144671703080408884627087990244648824766878280780120011347457437134053",
      data: "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"
    },
    token: {
      hash: "22278758441605771858700252645311428360030262698072838723799702480887091310093",
      data: "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"
    }
  },
  mainnet: {
    admin: {
      hash: "25901604630376752069358432490423434073212977760589721765585739320126139736123",
      data: "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"
    },
    token: {
      hash: "27787098481477206239805523694633411816874383698563160451006881053714904356680",
      data: "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"
    }
  },
  testnet_v1: {
    admin: {
      hash: "1200635497217107248831982322269320244173535715339356861513501242012238077174",
      data: "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"
    },
    token: {
      hash: "25084457276132306637089336910977939820654927814172888515895248592725736067489",
      data: "AABoR9W/JCk+QV7xmR0EmMunepTBYRNFuyTe3jy0YL4FPMZvsY3S7Erek8aQc6iEbg0gx8yQZuX7/I9abchc2AM3/JhaHwmIVJYlvR+hIhruFPB3wgxMNv0w0gKKcrMUjwumIsjP5rBKR/iI66NePvgPuC29OEcvCy1WA7VGa4jkJdudep82RUdWGRWK2+TESBdYTcmhDVuKl71sFjmOdRsHPuHz9tgXl+pkmjmsRFUu0NL0uf7+4UZZ3qwo5JDu+CK6Ec77HZQNWTxobryIa5NH8CwGRTykkaJMUmjbfWiFPCUHzvcqpOIDa/P0WVqqmkAksmXroqqmKGk7zQBN+Ak0GHEPqQDSJIQv98Wm/EluR3MtPMixUI0OSCdbCe++KR4gIKwvRX+AyBCIcMUEuQ7CN4TcDQmD4dsnU3Ywu2cTLCmf1z6el9AHdoTNg5kHvhrxJtV5O5sUnQEW+LPdxSMkxmO3ao9cj4Pdjpf//o1wVN9GR9uyGgj7JxOzi0e1HC2DWmTr5hsWR+J7Pz5rAY5jv5xAcpzUgdqRLr+0Z5wQBovJXign+HwE1cLbTGjZjc2WzRyDEAUfk+VvpE9GcgUdAGxdMh8pRk2c3gIyZAR50aD7krfuev7xNcosFvHDLxoQT4kMIbvQCEm5Y1b4naLNO4venPN+UPSplqeglngyVg6hL95iMJSSJp15EYPASeiSRhU71xGX0Ga6ZJUBPmwuN43AhoCb5DcuShlhi7CwjficYrtDo1u7ZpmnWP0tbaE1u3Cmua8TUIWLHYL9CoBo2HEP5858I/xbZpseBTXbUhQOgdQSqCj0ai5ibbIEWlzyeVctufQRm6pK4OGSnZvSP+km8zpVR15SVLkkzPAtmtpJ28bSInD1sm++/MMMz30+xP+7XMk6yCnAKS7Ryh+7LqDgPK2C3fPDaPe38v1PXDUseFa60FhJTq5ztwNXhVtkUUgBMObzMAH3yCYnFj41JvRuR9diVD4NJ0h3wxxcbGWD8ROvjUEUv2U9ouTlDggGH6cSMvmo2suubVLTWjWQjiEruO1O9hD7RdrQdBpyUzQhwUjPR1emq/Nb/ZV75ra0TGTXOQzEItZ/Z7/3uP/0EPTMuFUkkmFI4SnN3lH07zi4IbwHvZzIofdlOqOKILs4QwZ38srG/YRk3+A6ruqaLY6wmtRqq3mm03DF0SqZEhM/l882C3IQcOyVS4j6tJvV7Z87QSHbGnw0iM/bp3WjCgd+XbMVKuLB1iwTlhgWJc0HMs3w9N0ZlssmVHaWTEorf/QDhPtXCCqwGlNLJgH7mO+P0Tmco9/vB6iGqQ66hwXZlTangzKx28yLvUiZraqXFF8bsmgkuxfzoTKsstEKJMiTF4q5UNl9Cixyht9LdXL76v/MRCzaVrhGoiJMueECkMxTgwLrNNq7h6j+xRf8lWaYTudxkUUFrAKTzRpbpAduRmpd4tjIYhM7umH0mhTnCK6ShwQz6ZsHBSbktYOxGFqHjMyPtx2k0+pZ+Qsu/GjsmeMbJSLcUPTObWIfFVco2SSBUteZsA3ZgP4jhEWWtOzXYIHjWqj3g9XOVuVJ4TcbO2FK4mVJ9ETnRxKH0AmGPnXb0Nc+sC9nRnDN2OTqPtXJkeRfI7jkHCFb79u8QPvuqhsYWVSS8bI3rXE1kWY1ZKYoC3FtfenG9e8haWYXUyk1783IQJ4W1jkscQTU1RZrL0cWoaCxIXnXsdDJStgz8B9EQ0uUEkfXSXYEbQtIA4DVKzTO4uqxOzafqAOLnvOxi5Vn95JCOu3CEAFr0WQEOnA2X3nw31spFvLj0jykGpn1ECHhW4Ft9EOkHDr4qDA8Mi5gH9EB+g0AhObwxj7RZB2Wq5PSmZw131mkHzgYOgD3JC9tlaGMSxesjF1O3+U3wUOLrrU89s128Y0PpiEzO6Jsm1aDzbF1pkz3asy0z+Enb4BMg/Jv5j/EZkKM6Okv746/ETIs69fv3e5Iucae7lyyYVNCYBtucWrOQK2Pfi4QzRZjkC29hj8OenHSn+75qcX/v5ejhSBAb24Bp1INNVgaF3VHGz1+ULEcs73b/b0K1AQJYfdkfD4fqrj1nUIlVYv3yw1SyEKClpoiBaLiRxg/04rgb3enmxe6msVApSIlAYs+qeRAIRDCU+ZensV1x4sS4VCjQgoPlo9sV7wJDUOTsUkgux38w39sqiSfONzmyhfXqZocojTv1m3vHh8gnCFUbZ/d3WvywDE67VPRlTYX5ZR80Yyjz3byDH2/+DWOsjv2q8KUv2mtgkiOTZ1D3tAF6Vl6tSWlixMYc1tfC8KDWDOq2eg7M72MqjfiMTuBPXr2ZB/nTdtCi9lDQQESzBmgJaV/KCZOAaIKQR9hibvy4vt3wlSZ9XTK+FFZPQc="
    }
  },
  mainnet_v1: {
    admin: {
      hash: "16115269877914581564299853766147447229664556890591132763176560855029019233817",
      data: "AABvj1TjS95sAoY8puZRG2h4hxjs9c5enwfo4vZAQC/COWHgEjNupRIxb3LVxaRU2mkaG94By4OqrJ3M7YXNs4oiAhMdOuU5+NrHN3RCJtswX+WPvwaHJnihtSy2FcJPyghvBVTi2i7dtWIPQLVDIzC5ARu8f8H9JWjzjVVYE/rQLruuq2qUsCrqdVsdRaw+6OjIFeAXS6mzvrVv5iYGslg5CV5mgLBg3xC408jZJ0pe8ua2mcIEDMGEdSR/+VuhPQaqxZTJPBVhazVc1P9gRyS26SdOohL85UmEc4duqlJOOlXOFuwOT6dvoiUcdQtzuPp1pzA/LHueqm9yQG9mlT0Df8uY/A+rwM4l/ypTP/o0+5GCM9jJf9bl/z0DpGWheCJY+LZbIGeBUOpg0Gx1+KZsD9ivWJ0vxNz8zKcAS1i3FqFhahkJHiiKgikn6Qig5+Yf3MJs0WKSNkCkgW2B48srVTR9ykLyO+68NiWLEnLXvJd+rmUHR4K92whqctZZ8zvd2+5u+b62pkvFqqZZ9r24SMQOe9Bl2ZfMew2DyFLMPzwTowHw8onMEXcVKabFs9zQVp66AMf/wlipirNztdguAP2Hmpi/swGffC3cXDOY7T51PcPNIq+JcNbtKixzm7oIFyZ0FUgAhg5L7sDAkgRAXnQlKGuhGr24T+lV1YAdTheSiQ4YBcpnqpfVYnYG5iziTEdl5+3SENlC7E6MhR2PDoc/TmMvbEHnhNlo6tskqcmEUBQj+At5EO2NmogFDJIN6sRfrXOdH5l+QV7vR2v385RKRtfnmcJeUQcpq5/JTgVwagDJ/FarTN5jFsrBBRTeW3yZ5/CfVNA7NNWxoKhjBaHVIhn/fLT5sFLYzYdCx/uTsusyZmE2d6iqnLS+j1IXNJX/zR0ZD3aGuoUc4MaFZQnN5om4dfpbloe4Roob3BuDhBHTKoYC+nVsyEvDRyiYLEOjJ45/bSwTCfwngYKtNmo3sVTvQ9mqBf0cLdBCn8skp3S/gz324TFm8iJ+t8EWLpbAvEy7n/4Rfat19iKhN/ICCIOB94OJpGzK1g3yiRSbWline0493l40b5XNOCxRYvkpMB0KioI35w5/eN2TARePtNnTBtOZwACL2/MwrhmYUhUwRHJP7qo1NJU0dD43n9ABs5DJ2D7S/qWyvx9G38ACltexG+ZMj8niqYfJiy0MqH5O4Df/c6DNekL1d6QYnjO0/3LMvY/f/y1+b7nPHI8+1Wqp5jZH8UsuN63SSMdfBEe6x46AG/R+YS/wH78GKekabWu9QQnUJdjXyXiqF4qRebvfcmpQz91anvVz3ggBqCv4sYqCIvP0ysDtMdi36zFErV+8SdUu+NsPDGvdPSCGdLuC25izxb21up2HORmlM5R7yuIW3rCiq8DeLD0OHjqOBZ+IEv9zEkb5fHTJvxoxnZlArtZSBpD6iIDPVDymuK+BsOggZav3K+TytjeD2Gcld5NfyRISFWUIMkZNFQRL8AQpET6RJnG1HSW0CaRfNeomtjCBWIr85wFCrp06j/D1J8B3EyhloZLJJ6ywxt41smXVugxA8LRTO+6lVBOBF14jHQCCUl6u7uiWCe1z4/bC5wQXPwWSljp8NVU8Erp1U9ModNK7W63Pkh0efvgSD5d0nLzbfa0jTdxZ1JkfKsnvYk43Ed+vmXooHZhUeZAIX8ZCizhb1Gfvm02JFwxYXmiYAOp5wkGzweU2I5zo8r5yZFI1r4XibNQs7eAfKGRv3gh8/EuLkX/bdettgPvNsI8ndpQ3kL/V8W2PQN4/hjC9AKCYBeXQG42bRncYZdLe++R2KA1ZdPDxQPF3sxUIKhzmRWqbozrtv310Maorwv6eZJjldlCJwICR9QgcDwDuNj+UFJnX3RWsdIWsUbI1T4wO0sE2sBiMX/OqmiGJEAnBegioistlFyfRvm54h+duNOl/ol1Fva7NoXvsL/wThAWUly7bnc7/Al2bBQlUrmEX46UnKXzYntkZDee7Lx1u1BBkJAj/5BH1YZOPmMCh498rBUiHmc+4uQqebqNSHdOSgC39ESss4u7GNhWj3fi9XXta6UT9wapEMGq0WTg2Kry6xNP2YZ5X8eaapRQc/KzYgz9XjQL6TKpqNuGEbRlmfYvIuoFbnOkZI7RYoGp3YheMs1pQErwOxLzZa9W3Okwx16TSDwPLR0xMdAyogMrOdKN4JSMyNnmOaoVf6PkN+K9fz7RuHtvgjKpuz4vsK5Z2wRneqPrnfu6PkgHcRQrd0SxqCbN23Z/yp8qOcN6XU49iCNEBjztT00tolQ9hCPMSE/eTZ+ioez7m3pJFVks3T5Rk/e+6MeowJWIOv20x6CPS9mhpr1JPwdNFrWdgs19VsobntCpF/rWxksdrYyk="
    },
    token: {
      hash: "12320223354843720065815824451082596238990220882343256724550451075683722289248",
      data: "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"
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FungibleToken,
  FungibleTokenAdmin,
  FungibleTokenBidContract,
  FungibleTokenOfferContract,
  FungibleTokenWhitelistedAdmin,
  LAUNCH_FEE,
  TRANSACTION_FEE,
  WhitelistedFungibleToken,
  buildTokenDeployTransaction,
  buildTokenTransaction,
  fetchMinaAccount,
  fungibleTokenVerificationKeys,
  getTokenSymbolAndAdmin,
  getTokenTransactionSender,
  tokenVerificationKeys
});
