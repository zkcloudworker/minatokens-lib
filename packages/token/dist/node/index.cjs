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
  BidEvent: () => BidEvent,
  BondingCurveAdminInitializeProps: () => BondingCurveAdminInitializeProps,
  BondingCurveFungibleToken: () => BondingCurveFungibleToken,
  BondingCurveParams: () => BondingCurveParams,
  BondingMintEvent: () => BondingMintEvent,
  BondingRedeemEvent: () => BondingRedeemEvent,
  BurnEvent: () => BurnEvent,
  FungibleToken: () => FungibleToken,
  FungibleTokenAdmin: () => FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin: () => FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract: () => FungibleTokenBidContract,
  FungibleTokenBondingCurveAdmin: () => FungibleTokenBondingCurveAdmin,
  FungibleTokenClaimContract: () => FungibleTokenClaimContract,
  FungibleTokenContract: () => FungibleTokenContract,
  FungibleTokenErrors: () => FungibleTokenErrors,
  FungibleTokenOfferContract: () => FungibleTokenOfferContract,
  MintEvent: () => MintEvent,
  OfferEvent: () => OfferEvent,
  PauseEvent: () => PauseEvent,
  SetAdminEvent: () => SetAdminEvent
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
      setVerificationKey: import_o1js3.Permissions.VerificationKey.proofDuringCurrentVersion(),
      setPermissions: import_o1js3.Permissions.impossible()
    });
  }
  /** Update the verification key.
   * Note that because we have set the permissions for setting
   * the verification key to `impossibleDuringCurrentVersion()`,
   * this will only be possible in case of a protocol update that requires an update.
   */
  async updateVerificationKey(vk) {
    await this.ensureAdminSignature();
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

// dist/node/bid.js
var BidEvent = class extends (0, import_o1js4.Struct)({
  amount: import_o1js4.UInt64,
  address: import_o1js4.PublicKey
}) {
};
var FungibleTokenBidContract = class extends import_o1js4.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js4.State)();
    this.buyer = (0, import_o1js4.State)();
    this.token = (0, import_o1js4.State)();
    this.whitelist = (0, import_o1js4.State)();
    this.events = {
      bid: BidEvent,
      withdraw: BidEvent,
      sell: BidEvent,
      updateWhitelist: import_storage2.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
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
    this.emitEvent("bid", { amount, address: buyer });
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
    this.emitEvent("bid", { amount, address: buyer });
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
    this.emitEvent("withdraw", {
      amount: amountInMina,
      address: buyer
    });
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
    this.emitEvent("sell", { amount, address: seller });
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

// dist/node/claim.js
var import_tslib5 = require("tslib");
var import_o1js5 = require("o1js");
var import_storage3 = require("@minatokens/storage");
var ClaimEvent = class extends (0, import_o1js5.Struct)({
  amount: import_o1js5.UInt64,
  address: import_o1js5.PublicKey
}) {
};
var FungibleTokenClaimContract = class extends import_o1js5.SmartContract {
  constructor() {
    super(...arguments);
    this.owner = (0, import_o1js5.State)();
    this.token = (0, import_o1js5.State)();
    this.whitelist = (0, import_o1js5.State)();
    this.maxAmount = (0, import_o1js5.State)();
    this.events = {
      offer: ClaimEvent,
      withdraw: ClaimEvent,
      claim: ClaimEvent,
      updateWhitelist: import_storage3.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
    this.whitelist.set(args.whitelist);
    this.maxAmount.set(args.maxAmount ?? import_o1js5.UInt64.MAXINT());
    this.account.permissions.set({
      ...import_o1js5.Permissions.default(),
      send: import_o1js5.Permissions.proof(),
      setVerificationKey: import_o1js5.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js5.Permissions.impossible()
    });
  }
  async initialize(owner, token, amount) {
    this.account.provedState.requireEquals((0, import_o1js5.Bool)(false));
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    await tokenContract.transfer(owner, this.address, amount);
    this.owner.set(owner);
    this.token.set(token);
    this.emitEvent("offer", { amount, address: owner });
  }
  async offer(amount) {
    const owner = this.owner.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sender.assertEquals(owner);
    await tokenContract.transfer(sender, this.address, amount);
    this.emitEvent("offer", { amount, address: sender });
  }
  async withdraw(amount) {
    amount.equals(import_o1js5.UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, import_o1js5.UInt64.MAXINT());
    const owner = this.owner.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sender.assertEquals(owner);
    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = import_o1js5.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    this.emitEvent("withdraw", { amount, address: sender });
  }
  async claim(amount) {
    const maxAmount = this.maxAmount.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    const whitelist = this.whitelist.getAndRequireEquals();
    const whiteListedAmount = await whitelist.getWhitelistedAmount(sender);
    const maxClaimAmount = import_o1js5.Provable.if(whitelist.isSome(), whiteListedAmount.assertSome("No tokens to claim"), maxAmount);
    amount.assertLessThanOrEqual(maxClaimAmount);
    this.account.balance.requireBetween(amount, import_o1js5.UInt64.MAXINT());
    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = import_o1js5.AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    this.emitEvent("claim", {
      amount,
      address: sender
    });
  }
  async updateWhitelist(whitelist) {
    const owner = this.owner.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = import_o1js5.AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = (0, import_o1js5.Bool)(true);
    sender.assertEquals(owner);
    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
};
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenClaimContract.prototype, "owner", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.PublicKey),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenClaimContract.prototype, "token", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_storage3.Whitelist),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenClaimContract.prototype, "whitelist", void 0);
(0, import_tslib5.__decorate)([
  (0, import_o1js5.state)(import_o1js5.UInt64),
  (0, import_tslib5.__metadata)("design:type", Object)
], FungibleTokenClaimContract.prototype, "maxAmount", void 0);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [
    import_o1js5.PublicKey,
    import_o1js5.PublicKey,
    import_o1js5.UInt64
  ]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenClaimContract.prototype, "initialize", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenClaimContract.prototype, "offer", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenClaimContract.prototype, "withdraw", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_o1js5.UInt64]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenClaimContract.prototype, "claim", null);
(0, import_tslib5.__decorate)([
  import_o1js5.method,
  (0, import_tslib5.__metadata)("design:type", Function),
  (0, import_tslib5.__metadata)("design:paramtypes", [import_storage3.Whitelist]),
  (0, import_tslib5.__metadata)("design:returntype", Promise)
], FungibleTokenClaimContract.prototype, "updateWhitelist", null);

// dist/node/offer.js
var import_tslib6 = require("tslib");
var import_o1js6 = require("o1js");
var import_storage4 = require("@minatokens/storage");
var OfferEvent = class extends (0, import_o1js6.Struct)({
  amount: import_o1js6.UInt64,
  address: import_o1js6.PublicKey
}) {
};
var FungibleTokenOfferContract = class extends import_o1js6.SmartContract {
  constructor() {
    super(...arguments);
    this.price = (0, import_o1js6.State)();
    this.seller = (0, import_o1js6.State)();
    this.token = (0, import_o1js6.State)();
    this.whitelist = (0, import_o1js6.State)();
    this.events = {
      offer: OfferEvent,
      withdraw: OfferEvent,
      buy: OfferEvent,
      updateWhitelist: import_storage4.Whitelist
    };
  }
  async deploy(args) {
    await super.deploy(args);
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
    this.emitEvent("offer", { amount, address: seller });
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
    this.emitEvent("offer", { amount, address: sender });
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
    this.emitEvent("withdraw", { amount, address: sender });
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
    this.emitEvent("buy", { amount, address: buyer });
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
(0, import_tslib6.__decorate)([
  (0, import_o1js6.state)(import_o1js6.UInt64),
  (0, import_tslib6.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "price", void 0);
(0, import_tslib6.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib6.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "seller", void 0);
(0, import_tslib6.__decorate)([
  (0, import_o1js6.state)(import_o1js6.PublicKey),
  (0, import_tslib6.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "token", void 0);
(0, import_tslib6.__decorate)([
  (0, import_o1js6.state)(import_storage4.Whitelist),
  (0, import_tslib6.__metadata)("design:type", Object)
], FungibleTokenOfferContract.prototype, "whitelist", void 0);
(0, import_tslib6.__decorate)([
  import_o1js6.method,
  (0, import_tslib6.__metadata)("design:type", Function),
  (0, import_tslib6.__metadata)("design:paramtypes", [
    import_o1js6.PublicKey,
    import_o1js6.PublicKey,
    import_o1js6.UInt64,
    import_o1js6.UInt64
  ]),
  (0, import_tslib6.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "initialize", null);
(0, import_tslib6.__decorate)([
  import_o1js6.method,
  (0, import_tslib6.__metadata)("design:type", Function),
  (0, import_tslib6.__metadata)("design:paramtypes", [import_o1js6.UInt64, import_o1js6.UInt64]),
  (0, import_tslib6.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "offer", null);
(0, import_tslib6.__decorate)([
  import_o1js6.method,
  (0, import_tslib6.__metadata)("design:type", Function),
  (0, import_tslib6.__metadata)("design:paramtypes", [import_o1js6.UInt64]),
  (0, import_tslib6.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "withdraw", null);
(0, import_tslib6.__decorate)([
  import_o1js6.method,
  (0, import_tslib6.__metadata)("design:type", Function),
  (0, import_tslib6.__metadata)("design:paramtypes", [import_o1js6.UInt64]),
  (0, import_tslib6.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "buy", null);
(0, import_tslib6.__decorate)([
  import_o1js6.method,
  (0, import_tslib6.__metadata)("design:type", Function),
  (0, import_tslib6.__metadata)("design:paramtypes", [import_storage4.Whitelist]),
  (0, import_tslib6.__metadata)("design:returntype", Promise)
], FungibleTokenOfferContract.prototype, "updateWhitelist", null);

// dist/node/BondingCurveAdmin.js
var import_tslib7 = require("tslib");
var import_o1js7 = require("o1js");
var import_token = require("@minatokens/token");
var BondingCurveParams = class _BondingCurveParams extends (0, import_o1js7.Struct)({
  startPrice: import_o1js7.UInt64,
  curveK: import_o1js7.UInt64,
  fee: import_o1js7.UInt32,
  // 1000 = 1%
  mintingIsAllowed: import_o1js7.Bool
}) {
  pack() {
    return import_o1js7.Field.fromBits([
      ...this.startPrice.value.toBits(64),
      ...this.curveK.value.toBits(64),
      ...this.fee.value.toBits(32),
      this.mintingIsAllowed
    ]);
  }
  static unpack(field) {
    const bits = field.toBits(64 + 64 + 32 + 1);
    const startPrice = import_o1js7.UInt64.Unsafe.fromField(import_o1js7.Field.fromBits(bits.slice(0, 64)));
    const curveK = import_o1js7.UInt64.Unsafe.fromField(import_o1js7.Field.fromBits(bits.slice(64, 64 + 64)));
    const fee = import_o1js7.UInt32.Unsafe.fromField(import_o1js7.Field.fromBits(bits.slice(64 + 64, 64 + 64 + 32)));
    const mintingIsAllowed = bits[64 + 64 + 32];
    return new _BondingCurveParams({
      startPrice,
      curveK,
      fee,
      mintingIsAllowed
    });
  }
};
var BondingMintEvent = class extends (0, import_o1js7.Struct)({
  to: import_o1js7.PublicKey,
  amount: import_o1js7.UInt64,
  price: import_o1js7.UInt64,
  payment: import_o1js7.UInt64,
  fee: import_o1js7.UInt64
}) {
};
var BondingRedeemEvent = class extends (0, import_o1js7.Struct)({
  seller: import_o1js7.PublicKey,
  amount: import_o1js7.UInt64,
  payment: import_o1js7.UInt64,
  minBalance: import_o1js7.UInt64,
  maxSupply: import_o1js7.UInt64,
  fee: import_o1js7.UInt64
}) {
};
var BondingCurveAdminInitializeProps = class extends (0, import_o1js7.Struct)({
  tokenAddress: import_o1js7.PublicKey,
  startPrice: import_o1js7.UInt64,
  curveK: import_o1js7.UInt64,
  feeMaster: import_o1js7.PublicKey,
  fee: import_o1js7.UInt32,
  // 1000 = 1%
  launchFee: import_o1js7.UInt64,
  numberOfNewAccounts: import_o1js7.UInt64
}) {
};
var FungibleTokenBondingCurveAdmin = class extends import_o1js7.TokenContract {
  constructor() {
    super(...arguments);
    this.owner = (0, import_o1js7.State)(import_o1js7.PublicKey.empty());
    this.token = (0, import_o1js7.State)(import_o1js7.PublicKey.empty());
    this.feeMaster = (0, import_o1js7.State)(import_o1js7.PublicKey.empty());
    this.curve = (0, import_o1js7.State)();
    this.insideMint = (0, import_o1js7.State)((0, import_o1js7.Bool)(false));
    this.events = {
      mint: BondingMintEvent,
      redeem: BondingRedeemEvent
    };
  }
  async deploy(props) {
    await super.deploy(props);
    this.curve.set(new BondingCurveParams({
      startPrice: import_o1js7.UInt64.from(1e4),
      curveK: import_o1js7.UInt64.from(1e4),
      fee: import_o1js7.UInt32.from(1e3),
      mintingIsAllowed: (0, import_o1js7.Bool)(false)
    }).pack());
    this.account.permissions.set({
      ...import_o1js7.Permissions.default(),
      setVerificationKey: import_o1js7.Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: import_o1js7.Permissions.impossible(),
      send: import_o1js7.Permissions.proof()
    });
  }
  async approveBase(forest) {
    throw Error("Transfer not allowed");
  }
  async initialize(props) {
    const { tokenAddress, feeMaster, startPrice, curveK, fee, launchFee, numberOfNewAccounts } = props;
    this.account.provedState.requireEquals((0, import_o1js7.Bool)(false));
    this.token.set(tokenAddress);
    this.feeMaster.set(feeMaster);
    this.curve.set(new BondingCurveParams({
      startPrice,
      curveK,
      fee,
      mintingIsAllowed: (0, import_o1js7.Bool)(false)
    }).pack());
    const supplyUpdate = import_o1js7.AccountUpdate.createSigned(this.address, this.deriveTokenId());
    let permissions = import_o1js7.Permissions.default();
    permissions.send = import_o1js7.Permissions.none();
    permissions.setPermissions = import_o1js7.Permissions.impossible();
    supplyUpdate.account.permissions.set(permissions);
    const payment = launchFee.add(numberOfNewAccounts.mul(import_o1js7.UInt64.from(1e9)));
    const owner = this.sender.getUnconstrained();
    const ownerUpdate = import_o1js7.AccountUpdate.create(owner);
    ownerUpdate.requireSignature();
    this.owner.set(owner);
    ownerUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    ownerUpdate.account.balance.requireBetween(payment, import_o1js7.UInt64.MAXINT());
    ownerUpdate.balance.subInPlace(payment);
    const feeUpdate = import_o1js7.AccountUpdate.create(feeMaster);
    feeUpdate.balance.addInPlace(launchFee);
  }
  async mint(to, amount, price) {
    this.insideMint.getAndRequireEquals().assertEquals((0, import_o1js7.Bool)(false));
    this.insideMint.set((0, import_o1js7.Bool)(true));
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);
    const { startPrice, curveK, fee, mintingIsAllowed } = BondingCurveParams.unpack(this.curve.getAndRequireEquals());
    const buyer = this.sender.getUnconstrained();
    const buyerUpdate = import_o1js7.AccountUpdate.create(buyer);
    buyerUpdate.requireSignature();
    buyerUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    const owner = this.owner.getAndRequireEquals();
    const isOwner = owner.equals(buyer);
    const canMint = isOwner.or(mintingIsAllowed);
    canMint.assertTrue("Minting is disabled for this token");
    this.curve.set(new BondingCurveParams({
      startPrice,
      curveK,
      fee,
      mintingIsAllowed: (0, import_o1js7.Bool)(true)
    }).pack());
    const maximumSupplyField = import_o1js7.Provable.witness(import_o1js7.Field, () => {
      if (price.toBigInt() < startPrice.toBigInt()) {
        throw Error("Price must be greater than or equal to the start price");
      }
      return import_o1js7.Field.from((price.toBigInt() - startPrice.toBigInt()) * 10n ** 14n / curveK.toBigInt());
    });
    maximumSupplyField.mul(curveK.value).add(startPrice.value.mul(import_o1js7.Field.from(10 ** 14))).assertLessThanOrEqual(price.value.mul(import_o1js7.Field.from(10 ** 14)));
    maximumSupplyField.assertLessThan(import_o1js7.UInt64.MAXINT().value);
    const maximumSupply = import_o1js7.UInt64.Unsafe.fromField(maximumSupplyField);
    const supplyUpdate = import_o1js7.AccountUpdate.create(this.address, this.deriveTokenId());
    supplyUpdate.account.balance.requireBetween(import_o1js7.UInt64.zero, maximumSupply);
    amount.assertLessThanOrEqual(import_o1js7.UInt64.from(2n ** 62n));
    supplyUpdate.balanceChange = import_o1js7.Int64.fromUnsigned(amount);
    const paymentField = import_o1js7.Provable.witness(import_o1js7.Field, () => {
      let payment2 = price.toBigInt() * amount.toBigInt() / 10n ** 9n;
      if (payment2 * 10n ** 9n !== price.toBigInt() * amount.toBigInt()) {
        payment2++;
      }
      if (payment2 * 10n ** 9n < price.toBigInt() * amount.toBigInt()) {
        throw Error("Payment calculation failed");
      }
      return import_o1js7.Field.from(payment2);
    });
    paymentField.mul(import_o1js7.Field.from(10 ** 9)).assertGreaterThanOrEqual(price.value.mul(amount.value));
    paymentField.assertLessThan(import_o1js7.UInt64.MAXINT().value);
    const payment = import_o1js7.UInt64.Unsafe.fromField(paymentField);
    const feePaymentField = import_o1js7.Provable.witness(import_o1js7.Field, () => {
      let feePayment2 = payment.toBigInt() * fee.toBigint() / 100000n;
      if (feePayment2 * 100000n !== payment.toBigInt() * fee.toBigint()) {
        feePayment2++;
      }
      if (feePayment2 * 100000n < payment.toBigInt() * fee.toBigint()) {
        throw Error("Fee calculation failed");
      }
      return import_o1js7.Field.from(feePayment2);
    });
    feePaymentField.mul(import_o1js7.Field.from(1e5)).assertGreaterThanOrEqual(payment.value.mul(fee.value));
    feePaymentField.assertLessThan(import_o1js7.UInt64.MAXINT().value);
    let feePayment = import_o1js7.UInt64.Unsafe.fromField(feePaymentField);
    feePayment = import_o1js7.Provable.if(feePayment.lessThan(import_o1js7.UInt64.from(1e8)), import_o1js7.UInt64.from(1e8), feePayment);
    const tokenUpdate = await token.mint(to, amount);
    const isNew = tokenUpdate.account.isNew.get();
    const totalPayment = payment.add(feePayment).add(import_o1js7.Provable.if(isNew, import_o1js7.UInt64.from(1e9), import_o1js7.UInt64.zero));
    buyerUpdate.account.balance.requireBetween(totalPayment, import_o1js7.UInt64.MAXINT());
    buyerUpdate.balance.subInPlace(totalPayment);
    this.balance.addInPlace(payment);
    const feeUpdate = import_o1js7.AccountUpdate.create(this.feeMaster.getAndRequireEquals());
    feeUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    feeUpdate.balance.addInPlace(feePayment);
    this.emitEvent("mint", new BondingMintEvent({
      to,
      amount,
      price,
      payment,
      fee: feePayment
    }));
  }
  /*
    In case of other txs being included in the same block, the balance and supply may change.
    We need to ensure that the balance is at least minBalance and the supply is at most maxSupply.
    It is recommended to put 5% buffer for minBalance and 5% buffer for maxSupply for tx to succeed.
  */
  async redeem(amount, minPrice, slippage) {
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);
    const balance = await import_o1js7.Provable.witnessAsync(import_o1js7.UInt64, async () => {
      await (0, import_o1js7.fetchAccount)({
        publicKey: this.address,
        tokenId: this.tokenId
      });
      const balance2 = import_o1js7.Mina.getAccount(this.address, this.tokenId).balance;
      console.log("redeem: balance", balance2.toBigInt());
      return balance2;
    });
    slippage.assertLessThan(import_o1js7.UInt32.from(1e3));
    const minBalanceField = import_o1js7.Provable.witness(import_o1js7.Field, () => {
      let minBalance2 = balance.toBigInt() * (1000n - slippage.toBigint()) / 1000n;
      if (minBalance2 * 1000n !== balance.toBigInt() * (1000n - slippage.toBigint())) {
        minBalance2++;
      }
      if (minBalance2 * 1000n < balance.toBigInt() * (1000n - slippage.toBigint())) {
        throw Error("Min balance calculation failed");
      }
      return import_o1js7.Field.from(minBalance2);
    });
    minBalanceField.mul(import_o1js7.Field.from(1e3)).add(balance.value.mul(slippage.value)).assertGreaterThanOrEqual(balance.value.mul(import_o1js7.Field.from(1e3)));
    minBalanceField.assertLessThan(import_o1js7.UInt64.MAXINT().value);
    const minBalance = import_o1js7.UInt64.Unsafe.fromField(minBalanceField);
    this.account.balance.requireBetween(minBalance, import_o1js7.UInt64.MAXINT());
    const supply = await import_o1js7.Provable.witnessAsync(import_o1js7.UInt64, async () => {
      await (0, import_o1js7.fetchAccount)({
        publicKey: this.address,
        tokenId: this.deriveTokenId()
      });
      const balance2 = import_o1js7.Mina.getAccount(this.address, this.deriveTokenId()).balance;
      console.log("redeem: supply", balance2.toBigInt());
      return balance2;
    });
    supply.assertGreaterThanOrEqual(amount);
    supply.assertGreaterThan(import_o1js7.UInt64.zero);
    const maxSupplyField = import_o1js7.Provable.witness(import_o1js7.Field, () => import_o1js7.Field.from(supply.toBigInt() * (1000n + slippage.toBigint()) / 1000n));
    maxSupplyField.mul(import_o1js7.Field.from(1e3)).assertLessThanOrEqual(supply.value.mul(import_o1js7.Field.from(1e3).add(slippage.value)));
    maxSupplyField.assertLessThan(import_o1js7.UInt64.MAXINT().value);
    const maxSupply = import_o1js7.UInt64.Unsafe.fromField(maxSupplyField);
    const supplyUpdate = import_o1js7.AccountUpdate.create(this.address, this.deriveTokenId());
    supplyUpdate.account.balance.requireBetween(import_o1js7.UInt64.zero, maxSupply);
    supplyUpdate.balanceChange = import_o1js7.Int64.fromUnsigned(amount).neg();
    const paymentField = import_o1js7.Provable.witness(import_o1js7.Field, () => import_o1js7.Field.from(minBalance.toBigInt() * amount.toBigInt() / maxSupply.toBigInt()));
    paymentField.mul(maxSupply.value).assertLessThanOrEqual(minBalance.value.mul(amount.value));
    paymentField.assertLessThan(import_o1js7.Field.from(2n ** 62n));
    amount.value.mul(minPrice.value).assertLessThanOrEqual(paymentField.mul(import_o1js7.Field.from(10 ** 9)));
    const payment = import_o1js7.UInt64.Unsafe.fromField(paymentField);
    const { fee, mintingIsAllowed } = BondingCurveParams.unpack(this.curve.getAndRequireEquals());
    mintingIsAllowed.assertTrue("Minting is disabled for this token, nothing to redeem");
    let feePayment = import_o1js7.Provable.witness(import_o1js7.UInt64, () => {
      let feePayment2 = payment.toBigInt() * fee.toBigint() / 100000n;
      if (feePayment2 * 100000n !== payment.toBigInt() * fee.toBigint()) {
        feePayment2++;
      }
      if (feePayment2 * 100000n < payment.toBigInt() * fee.toBigint()) {
        throw Error("Fee calculation failed");
      }
      return import_o1js7.UInt64.from(feePayment2);
    });
    feePayment = import_o1js7.Provable.if(feePayment.lessThan(import_o1js7.UInt64.from(1e8)), import_o1js7.UInt64.from(1e8), feePayment);
    const seller = this.sender.getUnconstrained();
    const sellerUpdate = import_o1js7.AccountUpdate.create(seller);
    const isNew = import_o1js7.Provable.witness(import_o1js7.Bool, () => {
      return (0, import_o1js7.Bool)(!import_o1js7.Mina.hasAccount(seller));
    });
    sellerUpdate.account.isNew.requireEquals(isNew);
    const accountCreationFee = import_o1js7.Provable.if(isNew, import_o1js7.UInt64.from(1e9), import_o1js7.UInt64.zero);
    payment.assertGreaterThan(feePayment.add(accountCreationFee));
    sellerUpdate.requireSignature();
    sellerUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    const totalPayment = import_o1js7.Provable.witness(import_o1js7.UInt64, () => {
      if (payment.toBigInt() < feePayment.toBigInt() + accountCreationFee.toBigInt()) {
        console.error(`The redeem amount ${Number(payment.toBigInt() / 10n ** 6n) / 1e3} MINA is too low to cover the fee ${Number(feePayment.toBigInt() / 10n ** 6n) / 1e3} MINA and account creation fee ${Number(accountCreationFee.toBigInt() / 10n ** 6n) / 1e3} MINA for the account ${seller.toBase58()}`, {
          payment: payment.toBigInt(),
          feePayment: feePayment.toBigInt(),
          accountCreationFee: accountCreationFee.toBigInt(),
          minBalance: minBalance.toBigInt(),
          maxSupply: maxSupply.toBigInt(),
          supply: supply.toBigInt(),
          amount: amount.toBigInt(),
          balance: balance.toBigInt(),
          tokenAddress: tokenAddress.toBase58(),
          seller: seller.toBase58(),
          isNew: isNew.toBoolean()
        });
        throw Error(`The redeem amount ${Number(payment.toBigInt() / 10n ** 6n) / 1e3} MINA is too low to cover the fee ${Number(feePayment.toBigInt() / 10n ** 6n) / 1e3} MINA and account creation fee ${Number(accountCreationFee.toBigInt() / 10n ** 6n) / 1e3} MINA for the account ${seller.toBase58()}`);
      }
      return import_o1js7.UInt64.from(payment.toBigInt() - feePayment.toBigInt() - accountCreationFee.toBigInt());
    });
    totalPayment.add(feePayment).add(accountCreationFee).assertEquals(payment);
    sellerUpdate.balance.addInPlace(totalPayment);
    const feeUpdate = import_o1js7.AccountUpdate.create(this.feeMaster.getAndRequireEquals());
    feeUpdate.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    feeUpdate.balance.addInPlace(feePayment);
    this.balance.subInPlace(payment);
    await token.burn(seller, amount);
    this.emitEvent("redeem", new BondingRedeemEvent({
      seller,
      amount,
      payment,
      minBalance,
      maxSupply,
      fee: feePayment
    }));
  }
  /**
   * In case the user burned tokens without calling the redeem method,
   * we need to sync the supply to the actual circulated supply
   */
  async sync() {
    const tokenAddress = this.token.getAndRequireEquals();
    const token = new BondingCurveFungibleToken(tokenAddress);
    const supplyUpdate = import_o1js7.AccountUpdate.create(this.address, this.deriveTokenId());
    const circulatingSupply = await token.getBalanceOf(tokenAddress);
    const totalSupply = supplyUpdate.account.balance.getAndRequireEquals();
    supplyUpdate.balanceChange = import_o1js7.Int64.fromUnsigned(totalSupply.sub(circulatingSupply)).neg();
  }
  /** Update the verification key.
   * Note that because we have set the permissions for setting the verification key to `impossibleDuringCurrentVersion()`, this will only be possible in case of a protocol update that requires an update.
   */
  async updateVerificationKey(vk) {
    this.account.verificationKey.set(vk);
  }
  ensureOwnerSignature() {
    const owner = this.owner.getAndRequireEquals();
    const update = import_o1js7.AccountUpdate.createSigned(owner);
    update.body.useFullCommitment = (0, import_o1js7.Bool)(true);
    return update;
  }
  async canMint(_accountUpdate) {
    this.insideMint.requireEquals((0, import_o1js7.Bool)(true));
    this.insideMint.set((0, import_o1js7.Bool)(false));
    return (0, import_o1js7.Bool)(true);
  }
  async canChangeAdmin(_admin) {
    this.ensureOwnerSignature();
    return (0, import_o1js7.Bool)(true);
  }
  async canPause() {
    this.ensureOwnerSignature();
    return (0, import_o1js7.Bool)(true);
  }
  async canResume() {
    this.ensureOwnerSignature();
    return (0, import_o1js7.Bool)(true);
  }
  async canChangeVerificationKey(_vk) {
    this.ensureOwnerSignature();
    return (0, import_o1js7.Bool)(true);
  }
};
(0, import_tslib7.__decorate)([
  (0, import_o1js7.state)(import_o1js7.PublicKey),
  (0, import_tslib7.__metadata)("design:type", Object)
], FungibleTokenBondingCurveAdmin.prototype, "owner", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js7.state)(import_o1js7.PublicKey),
  (0, import_tslib7.__metadata)("design:type", Object)
], FungibleTokenBondingCurveAdmin.prototype, "token", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js7.state)(import_o1js7.PublicKey),
  (0, import_tslib7.__metadata)("design:type", Object)
], FungibleTokenBondingCurveAdmin.prototype, "feeMaster", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js7.state)(import_o1js7.Field),
  (0, import_tslib7.__metadata)("design:type", Object)
], FungibleTokenBondingCurveAdmin.prototype, "curve", void 0);
(0, import_tslib7.__decorate)([
  (0, import_o1js7.state)(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Object)
], FungibleTokenBondingCurveAdmin.prototype, "insideMint", void 0);
(0, import_tslib7.__decorate)([
  import_o1js7.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [BondingCurveAdminInitializeProps]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "initialize", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.PublicKey, import_o1js7.UInt64, import_o1js7.UInt64]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "mint", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.UInt64, import_o1js7.UInt64, import_o1js7.UInt32]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "redeem", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", []),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "sync", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method,
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.VerificationKey]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "updateVerificationKey", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.AccountUpdate]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "canMint", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.PublicKey]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "canChangeAdmin", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", []),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "canPause", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", []),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "canResume", null);
(0, import_tslib7.__decorate)([
  import_o1js7.method.returns(import_o1js7.Bool),
  (0, import_tslib7.__metadata)("design:type", Function),
  (0, import_tslib7.__metadata)("design:paramtypes", [import_o1js7.VerificationKey]),
  (0, import_tslib7.__metadata)("design:returntype", Promise)
], FungibleTokenBondingCurveAdmin.prototype, "canChangeVerificationKey", null);
var BondingCurveFungibleToken = (0, import_token.FungibleTokenContract)(FungibleTokenBondingCurveAdmin);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdvancedAdminData,
  AdvancedFungibleToken,
  BalanceChangeEvent,
  BidEvent,
  BondingCurveAdminInitializeProps,
  BondingCurveFungibleToken,
  BondingCurveParams,
  BondingMintEvent,
  BondingRedeemEvent,
  BurnEvent,
  FungibleToken,
  FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract,
  FungibleTokenBondingCurveAdmin,
  FungibleTokenClaimContract,
  FungibleTokenContract,
  FungibleTokenErrors,
  FungibleTokenOfferContract,
  MintEvent,
  OfferEvent,
  PauseEvent,
  SetAdminEvent
});
