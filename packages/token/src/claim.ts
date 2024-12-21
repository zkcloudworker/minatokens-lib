import {
  AccountUpdate,
  DeployArgs,
  method,
  Permissions,
  PublicKey,
  State,
  state,
  UInt64,
  SmartContract,
  Bool,
  Field,
  Struct,
} from "o1js";
import { Whitelist } from "@minatokens/storage";
import { FungibleToken } from "./FungibleToken.js";

class ClaimEvent extends Struct({
  amount: UInt64,
  address: PublicKey,
}) {}

export interface FungibleTokenClaimContractDeployProps
  extends Exclude<DeployArgs, undefined> {
  /** The whitelist. */
  whitelist: Whitelist;
}
export class FungibleTokenClaimContract extends SmartContract {
  @state(PublicKey) owner = State<PublicKey>();
  @state(PublicKey) token = State<PublicKey>();
  @state(Whitelist) whitelist = State<Whitelist>();

  async deploy(args: FungibleTokenClaimContractDeployProps) {
    await super.deploy(args);
    this.whitelist.set(args.whitelist);
    this.account.permissions.set({
      ...Permissions.default(),
      send: Permissions.proof(),
      setVerificationKey:
        Permissions.VerificationKey.impossibleDuringCurrentVersion(),
      setPermissions: Permissions.impossible(),
    });
  }

  events = {
    offer: ClaimEvent,
    withdraw: ClaimEvent,
    claim: ClaimEvent,
    updateWhitelist: Whitelist,
  };

  @method async initialize(
    owner: PublicKey, // we are short of AccountUpdates here, so we use this parameter instead of this.sender.getUnconstrained()
    token: PublicKey,
    amount: UInt64
  ) {
    this.account.provedState.requireEquals(Bool(false));
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);
    await tokenContract.transfer(owner, this.address, amount);

    this.owner.set(owner);
    this.token.set(token);
    this.emitEvent("offer", { amount, address: owner } as ClaimEvent);
  }

  @method async offer(amount: UInt64) {
    const owner = this.owner.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);

    const balance = this.account.balance.getAndRequireEquals();

    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(owner);

    await tokenContract.transfer(sender, this.address, amount);
    this.emitEvent("offer", { amount, address: sender } as ClaimEvent);
  }

  @method async withdraw(amount: UInt64) {
    amount.equals(UInt64.from(0)).assertFalse();
    this.account.balance.requireBetween(amount, UInt64.MAXINT());

    const owner = this.owner.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);

    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(owner);

    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = Bool(true);
    this.emitEvent("withdraw", { amount, address: sender } as ClaimEvent);
  }

  @method async claim() {
    const owner = this.owner.getAndRequireEquals();
    const token = this.token.getAndRequireEquals();
    const tokenContract = new FungibleToken(token);
    const tokenId = tokenContract.deriveTokenId();
    tokenId.assertEquals(this.tokenId);

    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender, tokenId);
    senderUpdate.body.useFullCommitment = Bool(true);

    const whitelist = this.whitelist.getAndRequireEquals();
    const amount = (await whitelist.getWhitelistedAmount(sender)).assertSome(
      "No tokens to claim"
    );
    this.account.balance.requireBetween(amount, UInt64.MAXINT());

    let offerUpdate = this.send({ to: senderUpdate, amount });
    offerUpdate.body.mayUseToken = AccountUpdate.MayUseToken.InheritFromParent;
    offerUpdate.body.useFullCommitment = Bool(true);

    this.emitEvent("claim", { amount, address: sender } as ClaimEvent);
  }

  @method async updateWhitelist(whitelist: Whitelist) {
    const owner = this.owner.getAndRequireEquals();
    const sender = this.sender.getUnconstrained();
    const senderUpdate = AccountUpdate.createSigned(sender);
    senderUpdate.body.useFullCommitment = Bool(true);
    sender.assertEquals(owner);

    this.whitelist.set(whitelist);
    this.emitEvent("updateWhitelist", whitelist);
  }
}
