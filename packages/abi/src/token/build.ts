import { Whitelist, WhitelistedAddress } from "@minatokens/storage";
import {
  TokenTransactionType,
  TokenTransactionParams,
  LaunchTokenAdvancedAdminParams,
  LaunchTokenStandardAdminParams,
} from "@minatokens/api";
import { blockchain } from "../types.js";
import { fetchMinaAccount } from "../fetch.js";
import {
  FungibleToken,
  AdvancedFungibleToken,
  FungibleTokenAdmin,
  FungibleTokenAdvancedAdmin,
  FungibleTokenBidContract,
  FungibleTokenOfferContract,
} from "@minatokens/token";
import { tokenVerificationKeys } from "../vk/index.js";
import {
  PublicKey,
  Mina,
  AccountUpdate,
  UInt64,
  UInt8,
  Bool,
  Transaction,
  Struct,
  Field,
  TokenId,
} from "o1js";

export async function buildTokenLaunchTransaction(params: {
  chain: blockchain;
  args: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
  developerAddress?: string;
  provingKey?: string;
  provingFee?: number;
}): Promise<{
  request: LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams;
  tx: Transaction<false, false>;
  isAdvanced: boolean;
  verificationKeyHashes: string[];
}> {
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
  const sender = PublicKey.fromBase58(args.sender);
  if (nonce === undefined) throw new Error("Nonce is required");
  if (typeof nonce !== "number") throw new Error("Nonce must be a number");
  const fee = 100_000_000;
  if (uri && typeof uri !== "string") throw new Error("Uri must be a string");
  if (!args.tokenAddress || typeof args.tokenAddress !== "string")
    throw new Error("tokenAddress is required");
  if (
    !args.adminContractAddress ||
    typeof args.adminContractAddress !== "string"
  )
    throw new Error("adminContractAddress is required");

  const adminContract = isAdvanced
    ? FungibleTokenAdvancedAdmin
    : FungibleTokenAdmin;
  const tokenContract = isAdvanced ? AdvancedFungibleToken : FungibleToken;
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "devnet"].vk;
  if (
    !vk ||
    !vk.FungibleTokenOfferContract ||
    !vk.FungibleTokenOfferContract.hash ||
    !vk.FungibleTokenOfferContract.data ||
    !vk.FungibleTokenBidContract ||
    !vk.FungibleTokenBidContract.hash ||
    !vk.FungibleTokenBidContract.data ||
    !vk.FungibleTokenAdvancedAdmin ||
    !vk.FungibleTokenAdvancedAdmin.hash ||
    !vk.FungibleTokenAdvancedAdmin.data ||
    !vk.FungibleTokenAdmin ||
    !vk.FungibleTokenAdmin.hash ||
    !vk.FungibleTokenAdmin.data ||
    !vk.AdvancedFungibleToken ||
    !vk.AdvancedFungibleToken.hash ||
    !vk.AdvancedFungibleToken.data ||
    !vk.FungibleToken ||
    !vk.FungibleToken.hash ||
    !vk.FungibleToken.data
  )
    throw new Error("Cannot get verification key from vk");

  const adminVerificationKey = isAdvanced
    ? vk.FungibleTokenAdvancedAdmin
    : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isAdvanced
    ? vk.AdvancedFungibleToken
    : vk.FungibleToken;

  if (!adminVerificationKey || !tokenVerificationKey)
    throw new Error("Cannot get verification keys");
  await fetchMinaAccount({
    publicKey: sender,
    force: true,
  });

  if (!Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }

  const whitelist =
    "whitelist" in args && args.whitelist
      ? typeof args.whitelist === "string"
        ? Whitelist.fromString(args.whitelist)
        : (await Whitelist.create({ list: args.whitelist, name: symbol }))
            .whitelist
      : Whitelist.empty();

  const tokenAddress = PublicKey.fromBase58(args.tokenAddress);
  const adminContractAddress = PublicKey.fromBase58(args.adminContractAddress);
  const zkToken = new tokenContract(tokenAddress);
  const zkAdmin = new adminContract(adminContractAddress);

  const provingKey = params.provingKey
    ? PublicKey.fromBase58(params.provingKey)
    : sender;
  const provingFee = params.provingFee
    ? UInt64.from(Math.round(params.provingFee))
    : undefined;
  const developerFee = args.developerFee
    ? UInt64.from(Math.round(args.developerFee))
    : undefined;
  const developerAddress = params.developerAddress
    ? PublicKey.fromBase58(params.developerAddress)
    : undefined;
  const totalSupply =
    "totalSupply" in args && args.totalSupply
      ? UInt64.from(Math.round(args.totalSupply))
      : UInt64.MAXINT();
  const requireAdminSignatureForMint =
    "requireAdminSignatureForMint" in args && args.requireAdminSignatureForMint
      ? Bool(args.requireAdminSignatureForMint)
      : Bool(false);
  const anyoneCanMint =
    "canMint" in args && args.canMint
      ? Bool(args.canMint === "anyone")
      : Bool(false);
  const decimals = UInt8.from(args.decimals ? Math.round(args.decimals) : 9);

  const tx = await Mina.transaction(
    { sender, fee, memo: memo ?? `launch ${symbol}`, nonce },
    async () => {
      const feeAccountUpdate = AccountUpdate.createSigned(sender);
      feeAccountUpdate.balance.subInPlace(
        3_000_000_000 + (isAdvanced ? 1_000_000_000 : 0)
      );
      if (provingFee && provingKey)
        feeAccountUpdate.send({
          to: provingKey,
          amount: provingFee,
        });
      if (developerAddress && developerFee) {
        feeAccountUpdate.send({
          to: developerAddress,
          amount: developerFee,
        });
      }
      await zkAdmin.deploy({
        adminPublicKey: sender,
        tokenContract: tokenAddress,
        verificationKey: adminVerificationKey,
        whitelist,
        totalSupply,
        requireAdminSignatureForMint,
        anyoneCanMint,
      });
      if (isAdvanced) {
        const adminUpdate = AccountUpdate.create(
          adminContractAddress,
          TokenId.derive(adminContractAddress)
        );
        zkAdmin.approve(adminUpdate);
      }
      zkAdmin.account.zkappUri.set(uri);
      await zkToken.deploy({
        symbol,
        src: uri,
        verificationKey: tokenVerificationKey,
        allowUpdates: true,
      });
      await zkToken.initialize(
        adminContractAddress,
        decimals,
        // We can set `startPaused` to `Bool(false)` here, because we are doing an atomic deployment
        // If you are not deploying the admin and token contracts in the same transaction,
        // it is safer to start the tokens paused, and resume them only after verifying that
        // the admin contract has been deployed
        Bool(false)
      );
    }
  );
  return {
    request: isAdvanced
      ? {
          ...args,
          whitelist: whitelist.toString(),
        }
      : args,
    tx,
    isAdvanced,
    verificationKeyHashes: [
      adminVerificationKey.hash,
      tokenVerificationKey.hash,
    ],
  };
}

export async function buildTokenTransaction(params: {
  chain: blockchain;
  args: Exclude<
    TokenTransactionParams,
    LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams
  >;
  developerAddress?: string;
  provingKey?: string;
  provingFee?: number;
}): Promise<{
  request: Exclude<
    TokenTransactionParams,
    LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams
  >;
  tx: Transaction<false, false>;
  isAdvanced: boolean;
  adminContractAddress: PublicKey;
  adminAddress: PublicKey;
  symbol: string;
  verificationKeyHashes: string[];
}> {
  const { chain, args } = params;
  const { nonce, txType } = args;
  if (nonce === undefined) throw new Error("Nonce is required");
  if (typeof nonce !== "number") throw new Error("Nonce must be a number");
  if (txType === undefined) throw new Error("Tx type is required");
  if (typeof txType !== "string") throw new Error("Tx type must be a string");
  const sender = PublicKey.fromBase58(args.sender);
  const tokenAddress = PublicKey.fromBase58(args.tokenAddress);
  const offerAddress =
    "offerAddress" in args && args.offerAddress
      ? PublicKey.fromBase58(args.offerAddress)
      : undefined;
  if (
    !offerAddress &&
    (txType === "token:offer:create" ||
      txType === "token:offer:buy" ||
      txType === "token:offer:withdraw")
  )
    throw new Error("Offer address is required");

  const bidAddress =
    "bidAddress" in args && args.bidAddress
      ? PublicKey.fromBase58(args.bidAddress)
      : undefined;
  if (
    !bidAddress &&
    (txType === "token:bid:create" ||
      txType === "token:bid:sell" ||
      txType === "token:bid:withdraw")
  )
    throw new Error("Bid address is required");

  const to =
    "to" in args && args.to ? PublicKey.fromBase58(args.to) : undefined;
  if (
    !to &&
    (txType === "token:transfer" ||
      txType === "token:airdrop" ||
      txType === "token:mint")
  )
    throw new Error("To address is required");

  const amount =
    "amount" in args ? UInt64.from(Math.round(args.amount)) : undefined;
  const price =
    "price" in args ? UInt64.from(Math.round(args.price)) : undefined;

  await fetchMinaAccount({
    publicKey: sender,
    force: true,
  });

  if (!Mina.hasAccount(sender)) {
    throw new Error("Sender does not have account");
  }

  const {
    symbol,
    adminContractAddress,
    adminAddress,
    isAdvanced,
    isToNewAccount,
    verificationKeyHashes,
  } = await getTokenSymbolAndAdmin({
    txType,
    tokenAddress,
    chain,
    to,
    offerAddress,
    bidAddress,
  });
  const memo = args.memo ?? `${txType} ${symbol}`;
  const fee = 100_000_000;
  const provingKey = params.provingKey
    ? PublicKey.fromBase58(params.provingKey)
    : sender;
  const provingFee = params.provingFee
    ? UInt64.from(Math.round(params.provingFee))
    : undefined;
  const developerFee = args.developerFee
    ? UInt64.from(Math.round(args.developerFee))
    : undefined;
  const developerAddress = params.developerAddress
    ? PublicKey.fromBase58(params.developerAddress)
    : undefined;

  //const adminContract = new FungibleTokenAdmin(adminContractAddress);
  const advancedAdminContract = new FungibleTokenAdvancedAdmin(
    adminContractAddress
  );
  const tokenContract =
    isAdvanced && txType === "token:mint"
      ? AdvancedFungibleToken
      : FungibleToken;

  if (
    (txType === "token:admin:whitelist" ||
      txType === "token:bid:whitelist" ||
      txType === "token:offer:whitelist") &&
    !args.whitelist
  ) {
    throw new Error("Whitelist is required");
  }

  const whitelist =
    "whitelist" in args && args.whitelist
      ? typeof args.whitelist === "string"
        ? Whitelist.fromString(args.whitelist)
        : (await Whitelist.create({ list: args.whitelist, name: symbol }))
            .whitelist
      : Whitelist.empty();

  const zkToken = new tokenContract(tokenAddress);
  const tokenId = zkToken.deriveTokenId();

  if (
    txType === "token:mint" &&
    isAdvanced === false &&
    adminAddress.toBase58() !== sender.toBase58()
  )
    throw new Error(
      "Invalid sender for FungibleToken mint with standard admin"
    );

  await fetchMinaAccount({
    publicKey: sender,
    tokenId,
    force: (
      [
        "token:transfer",
        "token:airdrop",
        "token:mint",
      ] satisfies TokenTransactionType[] as TokenTransactionType[]
    ).includes(txType),
  });

  if (to) {
    await fetchMinaAccount({
      publicKey: to,
      tokenId,
      force: false,
    });
  }

  if (offerAddress)
    await fetchMinaAccount({
      publicKey: offerAddress,
      tokenId,
      force: (
        [
          "token:offer:whitelist",
          "token:offer:buy",
          "token:offer:withdraw",
        ] satisfies TokenTransactionType[] as TokenTransactionType[]
      ).includes(txType),
    });
  if (bidAddress)
    await fetchMinaAccount({
      publicKey: bidAddress,
      force: (
        [
          "token:bid:whitelist",
          "token:bid:sell",
          "token:bid:withdraw",
        ] satisfies TokenTransactionType[] as TokenTransactionType[]
      ).includes(txType),
    });

  const offerContract = offerAddress
    ? new FungibleTokenOfferContract(offerAddress, tokenId)
    : undefined;

  const bidContract = bidAddress
    ? new FungibleTokenBidContract(bidAddress)
    : undefined;
  const offerContractDeployment = offerAddress
    ? new FungibleTokenOfferContract(offerAddress, tokenId)
    : undefined;
  const bidContractDeployment = bidAddress
    ? new FungibleTokenBidContract(bidAddress)
    : undefined;
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "devnet"].vk;
  if (
    !vk ||
    !vk.FungibleTokenOfferContract ||
    !vk.FungibleTokenOfferContract.hash ||
    !vk.FungibleTokenOfferContract.data ||
    !vk.FungibleTokenBidContract ||
    !vk.FungibleTokenBidContract.hash ||
    !vk.FungibleTokenBidContract.data ||
    !vk.FungibleTokenAdvancedAdmin ||
    !vk.FungibleTokenAdvancedAdmin.hash ||
    !vk.FungibleTokenAdvancedAdmin.data ||
    !vk.FungibleTokenAdmin ||
    !vk.FungibleTokenAdmin.hash ||
    !vk.FungibleTokenAdmin.data ||
    !vk.AdvancedFungibleToken ||
    !vk.AdvancedFungibleToken.hash ||
    !vk.AdvancedFungibleToken.data ||
    !vk.FungibleToken ||
    !vk.FungibleToken.hash ||
    !vk.FungibleToken.data
  )
    throw new Error("Cannot get verification key from vk");

  const offerVerificationKey = FungibleTokenOfferContract._verificationKey ?? {
    hash: Field(vk.FungibleTokenOfferContract.hash),
    data: vk.FungibleTokenOfferContract.data,
  };
  const bidVerificationKey = FungibleTokenBidContract._verificationKey ?? {
    hash: Field(vk.FungibleTokenBidContract.hash),
    data: vk.FungibleTokenBidContract.data,
  };

  const isNewBidOfferAccount =
    txType === "token:offer:create" && offerAddress
      ? !Mina.hasAccount(offerAddress, tokenId)
      : txType === "token:bid:create" && bidAddress
      ? !Mina.hasAccount(bidAddress)
      : false;

  const isNewBuyAccount =
    txType === "token:offer:buy" ? !Mina.hasAccount(sender, tokenId) : false;
  let isNewSellAccount: boolean = false;
  if (txType === "token:bid:sell") {
    if (!bidAddress || !bidContract) throw new Error("Bid address is required");
    await fetchMinaAccount({
      publicKey: bidAddress,
      force: true,
    });
    const buyer = bidContract.buyer.get();
    await fetchMinaAccount({
      publicKey: buyer,
      tokenId,
      force: false,
    });
    isNewSellAccount = !Mina.hasAccount(buyer, tokenId);
  }

  const isNewTransferMintAccount =
    (txType === "token:transfer" ||
      txType === "token:airdrop" ||
      txType === "token:mint") &&
    to
      ? !Mina.hasAccount(to, tokenId)
      : false;

  const accountCreationFee =
    (isNewBidOfferAccount ? 1_000_000_000 : 0) +
    (isNewBuyAccount ? 1_000_000_000 : 0) +
    (isNewSellAccount ? 1_000_000_000 : 0) +
    (isNewTransferMintAccount ? 1_000_000_000 : 0) +
    (isToNewAccount &&
    txType === "token:mint" &&
    isAdvanced &&
    advancedAdminContract.whitelist.get().isSome().toBoolean()
      ? 1_000_000_000
      : 0);
  console.log("accountCreationFee", accountCreationFee / 1_000_000_000);

  const tx = await Mina.transaction({ sender, fee, memo, nonce }, async () => {
    const feeAccountUpdate = AccountUpdate.createSigned(sender);
    if (accountCreationFee > 0) {
      feeAccountUpdate.balance.subInPlace(accountCreationFee);
    }
    if (provingKey && provingFee)
      feeAccountUpdate.send({
        to: provingKey,
        amount: provingFee,
      });
    if (developerAddress && developerFee) {
      feeAccountUpdate.send({
        to: developerAddress,
        amount: developerFee,
      });
    }
    switch (txType) {
      case "token:mint":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (to === undefined) throw new Error("Error: To address is required");
        await zkToken.mint(to, amount);
        break;

      case "token:transfer":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (to === undefined)
          throw new Error("Error: From address is required");
        await zkToken.transfer(sender, to, amount);
        break;

      case "token:offer:create":
        if (price === undefined) throw new Error("Error: Price is required");
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (offerContract === undefined)
          throw new Error("Error: Offer address is required");
        if (offerContractDeployment === undefined)
          throw new Error("Error: Offer address is required");
        if (isNewBidOfferAccount) {
          await offerContractDeployment.deploy({
            verificationKey: offerVerificationKey,
            whitelist: whitelist ?? Whitelist.empty(),
          });
          offerContract.account.zkappUri.set(`Offer for ${symbol}`);
          await offerContract.initialize(sender, tokenAddress, amount, price);
          await zkToken.approveAccountUpdates([
            offerContractDeployment.self,
            offerContract.self,
          ]);
        } else {
          await offerContract.offer(amount, price);
          await zkToken.approveAccountUpdate(offerContract.self);
        }

        break;

      case "token:offer:buy":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (offerContract === undefined)
          throw new Error("Error: Offer address is required");
        await offerContract.buy(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;

      case "token:offer:withdraw":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (offerContract === undefined)
          throw new Error("Error: Offer address is required");
        await offerContract.withdraw(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;

      case "token:bid:create":
        if (price === undefined) throw new Error("Error: Price is required");
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (bidContract === undefined)
          throw new Error("Error: Bid address is required");
        if (bidContractDeployment === undefined)
          throw new Error("Error: Bid address is required");
        if (isNewBidOfferAccount) {
          await bidContractDeployment.deploy({
            verificationKey: bidVerificationKey,
            whitelist: whitelist ?? Whitelist.empty(),
          });
          bidContract.account.zkappUri.set(`Bid for ${symbol}`);
          await bidContract.initialize(tokenAddress, amount, price);
          await zkToken.approveAccountUpdates([
            bidContractDeployment.self,
            bidContract.self,
          ]);
        } else {
          await bidContract.bid(amount, price);
          await zkToken.approveAccountUpdate(bidContract.self);
        }
        break;

      case "token:bid:sell":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (bidContract === undefined)
          throw new Error("Error: Bid address is required");
        await bidContract.sell(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;

      case "token:bid:withdraw":
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (bidContract === undefined)
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
        if (bidContract === undefined)
          throw new Error("Error: Bid address is required");
        await bidContract.updateWhitelist(whitelist);
        break;

      case "token:offer:whitelist":
        if (offerContract === undefined)
          throw new Error("Error: Offer address is required");
        await offerContract.updateWhitelist(whitelist);
        break;

      default:
        throw new Error(`Unknown transaction type: ${txType}`);
    }
  });
  return {
    request:
      txType === "token:offer:create" ||
      txType === "token:bid:create" ||
      txType === "token:offer:whitelist" ||
      txType === "token:bid:whitelist" ||
      txType === "token:admin:whitelist"
        ? {
            ...args,
            whitelist: whitelist?.toString(),
          }
        : args,
    tx,
    isAdvanced,
    adminContractAddress,
    adminAddress,
    symbol,
    verificationKeyHashes,
  };
}

export async function getTokenSymbolAndAdmin(params: {
  txType: TokenTransactionType;
  to?: PublicKey;
  offerAddress?: PublicKey;
  bidAddress?: PublicKey;
  tokenAddress: PublicKey;
  chain: blockchain;
}): Promise<{
  adminContractAddress: PublicKey;
  adminAddress: PublicKey;
  symbol: string;
  isAdvanced: boolean;
  isToNewAccount?: boolean;
  verificationKeyHashes: string[];
}> {
  const { txType, tokenAddress, chain, to, offerAddress, bidAddress } = params;
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "devnet"].vk;
  const verificationKeyHashes: string[] = [];
  if (bidAddress) {
    verificationKeyHashes.push(vk.FungibleTokenBidContract.hash);
  }
  if (offerAddress) {
    verificationKeyHashes.push(vk.FungibleTokenOfferContract.hash);
  }

  class FungibleTokenState extends Struct({
    decimals: UInt8,
    admin: PublicKey,
    paused: Bool,
  }) {}
  const FungibleTokenStateSize = FungibleTokenState.sizeInFields();
  class FungibleTokenAdminState extends Struct({
    adminPublicKey: PublicKey,
  }) {}
  const FungibleTokenAdminStateSize = FungibleTokenAdminState.sizeInFields();

  await fetchMinaAccount({ publicKey: tokenAddress, force: true });
  if (!Mina.hasAccount(tokenAddress)) {
    throw new Error("Token contract account not found");
  }
  const tokenId = TokenId.derive(tokenAddress);
  await fetchMinaAccount({ publicKey: tokenAddress, tokenId, force: true });
  if (!Mina.hasAccount(tokenAddress, tokenId)) {
    throw new Error("Token contract totalSupply account not found");
  }

  const account = Mina.getAccount(tokenAddress);
  const verificationKey = account.zkapp?.verificationKey;
  if (!verificationKey) {
    throw new Error("Token contract verification key not found");
  }
  if (!verificationKeyHashes.includes(verificationKey.hash.toJSON())) {
    verificationKeyHashes.push(verificationKey.hash.toJSON());
  }
  if (account.zkapp?.appState === undefined) {
    throw new Error("Token contract state not found");
  }

  const state = FungibleTokenState.fromFields(
    account.zkapp?.appState.slice(0, FungibleTokenStateSize)
  );
  const symbol = account.tokenSymbol;
  const adminContractPublicKey = state.admin;
  await fetchMinaAccount({
    publicKey: adminContractPublicKey,
    force: true,
  });
  if (!Mina.hasAccount(adminContractPublicKey)) {
    throw new Error("Admin contract account not found");
  }

  const adminContract = Mina.getAccount(adminContractPublicKey);
  const adminVerificationKey = adminContract.zkapp?.verificationKey;

  if (!adminVerificationKey) {
    throw new Error("Admin verification key not found");
  }
  if (!verificationKeyHashes.includes(adminVerificationKey.hash.toJSON())) {
    verificationKeyHashes.push(adminVerificationKey.hash.toJSON());
  }
  let isAdvanced = false;
  if (
    vk.FungibleTokenAdvancedAdmin.hash === adminVerificationKey.hash.toJSON() &&
    vk.FungibleTokenAdvancedAdmin.data === adminVerificationKey.data
  ) {
    isAdvanced = true;
  } else if (
    vk.FungibleTokenAdmin.hash === adminVerificationKey.hash.toJSON() &&
    vk.FungibleTokenAdmin.data === adminVerificationKey.data
  ) {
    isAdvanced = false;
  } else {
    throw new Error("Unknown admin verification key");
  }
  let isToNewAccount: boolean | undefined = undefined;
  if (to) {
    if (isAdvanced) {
      const adminTokenId = TokenId.derive(adminContractPublicKey);
      await fetchMinaAccount({
        publicKey: to,
        tokenId: adminTokenId,
        force: false,
      });
      isToNewAccount = !Mina.hasAccount(to, adminTokenId);
    }
  }
  const adminAddress0 = adminContract.zkapp?.appState[0];
  const adminAddress1 = adminContract.zkapp?.appState[1];
  if (adminAddress0 === undefined || adminAddress1 === undefined) {
    throw new Error("Cannot fetch admin address from admin contract");
  }
  const adminAddress = PublicKey.fromFields([adminAddress0, adminAddress1]);

  for (const hash of verificationKeyHashes) {
    const found = Object.values(vk).some((key) => key.hash === hash);
    if (!found)
      throw new Error(`Final check: unknown verification key hash: ${hash}`);
  }

  // Sort verification key hashes by type: upgrade -> admin -> token -> user
  verificationKeyHashes.sort((a, b) => {
    const typeA = Object.values(vk).find((key) => key.hash === a)?.type;
    const typeB = Object.values(vk).find((key) => key.hash === b)?.type;
    if (typeA === undefined || typeB === undefined) {
      throw new Error("Unknown verification key hash");
    }
    const typeOrder = {
      upgrade: 0,
      admin: 1,
      token: 2,
      user: 3,
    };

    return typeOrder[typeA] - typeOrder[typeB];
  });

  return {
    adminContractAddress: adminContractPublicKey,
    adminAddress: adminAddress,
    symbol,
    isAdvanced,
    isToNewAccount,
    verificationKeyHashes,
  };
}
