import { Whitelist, WhitelistedAddressList } from "@minatokens/storage";
import { FungibleTokenTransactionType, blockchain } from "./types.js";
import { fetchMinaAccount } from "./fetch.js";
import { FungibleToken, WhitelistedFungibleToken } from "./FungibleToken.js";
import { FungibleTokenAdmin } from "./FungibleTokenAdmin.js";
import { FungibleTokenWhitelistedAdmin } from "./FungibleTokenWhitelistedAdmin.js";
import { FungibleTokenBidContract } from "./bid.js";
import { FungibleTokenOfferContract } from "./offer.js";
import { tokenVerificationKeys } from "./vk.js";
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
} from "o1js";

export async function buildTokenDeployTransaction(params: {
  chain: blockchain;
  fee: UInt64;
  sender: PublicKey;
  nonce: number;
  tokenAddress: PublicKey;
  adminContractAddress: PublicKey;
  adminAddress: PublicKey;
  uri: string;
  symbol: string;
  memo?: string;
  whitelist?: WhitelistedAddressList | string;
  developerAddress?: PublicKey;
  developerFee?: UInt64;
  provingKey: PublicKey;
  provingFee: UInt64;
  decimals: UInt8;
}): Promise<{
  tx: Transaction<false, false>;
  isWhitelisted: boolean;
  verificationKeyHashes: string[];
  whitelist: string | undefined;
}> {
  const {
    fee,
    sender,
    nonce,
    memo,
    tokenAddress,
    adminContractAddress,
    uri,
    symbol,
    developerAddress,
    developerFee,
    provingKey,
    provingFee,
    decimals,
    chain,
  } = params;
  const isWhitelisted = params.whitelist !== undefined;
  if (memo && typeof memo !== "string")
    throw new Error("Memo must be a string");
  if (memo && memo.length > 30)
    throw new Error("Memo must be less than 30 characters");
  if (!symbol || typeof symbol !== "string")
    throw new Error("Symbol must be a string");
  if (symbol.length >= 7)
    throw new Error("Symbol must be less than 7 characters");

  const adminContract = isWhitelisted
    ? FungibleTokenWhitelistedAdmin
    : FungibleTokenAdmin;
  const tokenContract = isWhitelisted
    ? WhitelistedFungibleToken
    : FungibleToken;
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (
    !vk ||
    !vk.FungibleTokenWhitelistedAdmin ||
    !vk.FungibleTokenWhitelistedAdmin.hash ||
    !vk.FungibleTokenWhitelistedAdmin.data ||
    !vk.FungibleTokenAdmin ||
    !vk.FungibleTokenAdmin.hash ||
    !vk.FungibleTokenAdmin.data ||
    !vk.WhitelistedFungibleToken ||
    !vk.WhitelistedFungibleToken.hash ||
    !vk.WhitelistedFungibleToken.data ||
    !vk.FungibleToken ||
    !vk.FungibleToken.hash ||
    !vk.FungibleToken.data
  )
    throw new Error("Cannot get verification keys");
  const adminVerificationKey = isWhitelisted
    ? vk.FungibleTokenWhitelistedAdmin
    : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isWhitelisted
    ? vk.WhitelistedFungibleToken
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

  const whitelist = params.whitelist
    ? typeof params.whitelist === "string"
      ? Whitelist.fromString(params.whitelist)
      : await Whitelist.create({ list: params.whitelist, name: symbol })
    : undefined;

  const zkToken = new tokenContract(tokenAddress);
  const zkAdmin = new adminContract(adminContractAddress);

  const tx = await Mina.transaction(
    { sender, fee, memo: memo ?? `deploy ${symbol}`, nonce },
    async () => {
      const feeAccountUpdate = AccountUpdate.createSigned(sender);
      feeAccountUpdate.balance.subInPlace(3_000_000_000);
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
      if (isWhitelisted && !whitelist) {
        throw new Error("Whitelisted addresses not found");
      }
      await zkAdmin.deploy({
        adminPublicKey: sender,
        verificationKey: adminVerificationKey,
        whitelist: whitelist!,
      });
      zkAdmin.account.zkappUri.set(uri);
      await zkToken.deploy({
        symbol,
        src: uri,
        verificationKey: tokenVerificationKey,
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
    tx,
    isWhitelisted,
    verificationKeyHashes: [
      adminVerificationKey.hash,
      tokenVerificationKey.hash,
    ],
    whitelist: whitelist?.toString(),
  };
}

export function getTokenTransactionSender(params: {
  txType: FungibleTokenTransactionType;
  from: PublicKey;
  to: PublicKey;
}) {
  const { txType, from, to } = params;
  if (
    txType === "buy" ||
    txType === "withdrawOffer" ||
    txType === "withdrawBid"
  ) {
    return to;
  }
  return from;
}

export async function buildTokenTransaction(params: {
  txType: FungibleTokenTransactionType;
  chain: blockchain;
  fee: UInt64;
  nonce: number;
  memo?: string;
  tokenAddress: PublicKey;
  from: PublicKey;
  to: PublicKey;
  amount?: UInt64;
  price?: UInt64;
  whitelist?: WhitelistedAddressList | string;
  developerAddress?: PublicKey;
  developerFee?: UInt64;
  provingKey: PublicKey;
  provingFee: UInt64;
}): Promise<{
  tx: Transaction<false, false>;
  isWhitelisted: boolean;
  adminContractAddress: PublicKey;
  adminAddress: PublicKey;
  symbol: string;
  verificationKeyHashes: string[];
  whitelist: string | undefined;
}> {
  const {
    txType,
    chain,
    fee,
    nonce,
    tokenAddress,
    from,
    to,
    amount,
    price,
    developerAddress,
    developerFee,
    provingKey,
    provingFee,
  } = params;

  const sender = getTokenTransactionSender({ txType, from, to });

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
    isWhitelisted,
    verificationKeyHashes,
  } = await getTokenSymbolAndAdmin({
    txType,
    tokenAddress,
    chain,
  });
  const memo = params.memo ?? `${txType} ${symbol}`;

  const whitelistedAdminContract = new FungibleTokenWhitelistedAdmin(
    adminContractAddress
  );
  const tokenContract =
    isWhitelisted && txType === "mint"
      ? WhitelistedFungibleToken
      : FungibleToken;

  if (
    (txType === "whitelistAdmin" ||
      txType === "whitelistBid" ||
      txType === "whitelistOffer") &&
    !params.whitelist
  ) {
    throw new Error("Whitelist is required");
  }

  const whitelist = params.whitelist
    ? typeof params.whitelist === "string"
      ? Whitelist.fromString(params.whitelist)
      : await Whitelist.create({ list: params.whitelist, name: symbol })
    : undefined;

  const zkToken = new tokenContract(tokenAddress);
  const tokenId = zkToken.deriveTokenId();

  if (txType === "mint" && adminAddress.toBase58() !== sender.toBase58())
    throw new Error("Invalid sender for mint");

  await fetchMinaAccount({
    publicKey: tokenAddress,
    tokenId,
    force: true,
  });
  await fetchMinaAccount({
    publicKey: from,
    tokenId,
    force: (
      [
        "offer",
        "whitelistOffer",
        "bid",
        "whitelistBid",
        "sell",
        "transfer",
        "withdrawOffer",
      ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    ).includes(txType),
  });

  await fetchMinaAccount({
    publicKey: to,
    tokenId,
    force: (
      [
        "sell",
        "whitelistAdmin",
        "withdrawBid",
        "withdrawOffer",
      ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    ).includes(txType),
  });

  const isNewAccount = Mina.hasAccount(to, tokenId) === false;
  const offerContract = new FungibleTokenOfferContract(
    (
      [
        "offer",
        "whitelistOffer",
      ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    ).includes(txType)
      ? to
      : from,
    tokenId
  );
  const bidContract = new FungibleTokenBidContract(
    (
      [
        "bid",
        "whitelistBid",
      ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    ).includes(txType)
      ? from
      : to,
    tokenId
  );
  const offerContractDeployment = new FungibleTokenOfferContract(to, tokenId);
  const bidContractDeployment = new FungibleTokenBidContract(from, tokenId);
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  if (
    !vk ||
    !vk.FungibleTokenOfferContract ||
    !vk.FungibleTokenOfferContract.hash ||
    !vk.FungibleTokenOfferContract.data ||
    !vk.FungibleTokenBidContract ||
    !vk.FungibleTokenBidContract.hash ||
    !vk.FungibleTokenBidContract.data ||
    !vk.FungibleTokenWhitelistedAdmin ||
    !vk.FungibleTokenWhitelistedAdmin.hash ||
    !vk.FungibleTokenWhitelistedAdmin.data ||
    !vk.FungibleTokenAdmin ||
    !vk.FungibleTokenAdmin.hash ||
    !vk.FungibleTokenAdmin.data ||
    !vk.WhitelistedFungibleToken ||
    !vk.WhitelistedFungibleToken.hash ||
    !vk.WhitelistedFungibleToken.data ||
    !vk.FungibleToken ||
    !vk.FungibleToken.hash ||
    !vk.FungibleToken.data
  )
    throw new Error("Cannot get verification key");

  const adminVerificationKey = isWhitelisted
    ? vk.FungibleTokenWhitelistedAdmin
    : vk.FungibleTokenAdmin;
  const tokenVerificationKey = isWhitelisted
    ? vk.WhitelistedFungibleToken
    : vk.FungibleToken;
  const offerVerificationKey = FungibleTokenOfferContract._verificationKey ?? {
    hash: Field(vk.FungibleTokenOfferContract.hash),
    data: vk.FungibleTokenOfferContract.data,
  };
  const bidVerificationKey = FungibleTokenBidContract._verificationKey ?? {
    hash: Field(vk.FungibleTokenBidContract.hash),
    data: vk.FungibleTokenBidContract.data,
  };

  const tx = await Mina.transaction({ sender, fee, memo, nonce }, async () => {
    const feeAccountUpdate = AccountUpdate.createSigned(sender);
    if (isNewAccount) {
      feeAccountUpdate.balance.subInPlace(1_000_000_000);
    }
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
      case "mint":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await zkToken.mint(to, amount);
        break;

      case "transfer":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await zkToken.transfer(from, to, amount);
        break;

      case "offer":
        if (price === undefined) throw new Error("Error: Price is required");
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (isNewAccount) {
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

      case "buy":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await offerContract.buy(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;

      case "withdrawOffer":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await offerContract.withdraw(amount);
        await zkToken.approveAccountUpdate(offerContract.self);
        break;

      case "bid":
        if (price === undefined) throw new Error("Error: Price is required");
        if (amount === undefined) throw new Error("Error: Amount is required");
        if (isNewAccount) {
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

      case "sell":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await bidContract.sell(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;

      case "withdrawBid":
        if (amount === undefined) throw new Error("Error: Amount is required");
        await bidContract.withdraw(amount);
        await zkToken.approveAccountUpdate(bidContract.self);
        break;

      case "whitelistAdmin":
        if (!whitelist) throw new Error("Whitelist is required");
        await whitelistedAdminContract.updateWhitelist(whitelist);
        break;

      case "whitelistBid":
        if (!whitelist) throw new Error("Whitelist is required");
        await bidContract.updateWhitelist(whitelist);
        break;

      case "whitelistOffer":
        if (!whitelist) throw new Error("Whitelist is required");
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
    verificationKeyHashes,
    whitelist: whitelist?.toString(),
  };
}

export async function getTokenSymbolAndAdmin(params: {
  txType: FungibleTokenTransactionType;
  tokenAddress: PublicKey;
  chain: blockchain;
}): Promise<{
  adminContractAddress: PublicKey;
  adminAddress: PublicKey;
  symbol: string;
  isWhitelisted: boolean;
  verificationKeyHashes: string[];
}> {
  const { txType, tokenAddress, chain } = params;
  const vk =
    tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
  const verificationKeyHashes: string[] = [];
  if (
    txType === "whitelistBid" ||
    txType === "bid" ||
    txType === "withdrawBid"
  ) {
    verificationKeyHashes.push(vk.FungibleTokenBidContract.hash);
  }
  if (
    txType === "whitelistOffer" ||
    txType === "offer" ||
    txType === "withdrawOffer"
  ) {
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
  let isWhitelisted = false;
  if (
    vk.FungibleTokenWhitelistedAdmin.hash ===
      adminVerificationKey.hash.toJSON() &&
    vk.FungibleTokenWhitelistedAdmin.data === adminVerificationKey.data
  ) {
    isWhitelisted = true;
  } else if (
    vk.FungibleTokenAdmin.hash === adminVerificationKey.hash.toJSON() &&
    vk.FungibleTokenAdmin.data === adminVerificationKey.data
  ) {
    isWhitelisted = false;
  } else {
    throw new Error("Unknown admin verification key");
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
    isWhitelisted,
    verificationKeyHashes,
  };
}
