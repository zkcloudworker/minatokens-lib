import { Whitelist } from "@minatokens/storage";
import { fetchMinaAccount } from "./fetch.js";
import { FungibleToken, AdvancedFungibleToken } from "./FungibleToken.js";
import { FungibleTokenAdmin } from "./FungibleTokenStandardAdmin.js";
import { FungibleTokenAdvancedAdmin } from "./FungibleTokenAdvancedAdmin.js";
import { FungibleTokenBidContract } from "./bid.js";
import { FungibleTokenOfferContract } from "./offer.js";
import { tokenVerificationKeys } from "./vk.js";
import { PublicKey, Mina, AccountUpdate, UInt64, UInt8, Bool, Struct, Field, TokenId, } from "o1js";
export async function buildTokenDeployTransaction(params) {
    const { fee, sender, nonce, memo, tokenAddress, adminContractAddress, uri, symbol, developerAddress, developerFee, provingKey, provingFee, decimals, chain, adminType, } = params;
    const isAdvanced = adminType === "advanced";
    if (memo && typeof memo !== "string")
        throw new Error("Memo must be a string");
    if (memo && memo.length > 30)
        throw new Error("Memo must be less than 30 characters");
    if (!symbol || typeof symbol !== "string")
        throw new Error("Symbol must be a string");
    if (symbol.length >= 7)
        throw new Error("Symbol must be less than 7 characters");
    const adminContract = isAdvanced
        ? FungibleTokenAdvancedAdmin
        : FungibleTokenAdmin;
    const tokenContract = isAdvanced ? AdvancedFungibleToken : FungibleToken;
    const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
    if (!vk ||
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
        !vk.FungibleToken.data)
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
    const whitelist = params.whitelist
        ? typeof params.whitelist === "string"
            ? Whitelist.fromString(params.whitelist)
            : await Whitelist.create({ list: params.whitelist, name: symbol })
        : Whitelist.empty();
    const zkToken = new tokenContract(tokenAddress);
    const zkAdmin = new adminContract(adminContractAddress);
    const tx = await Mina.transaction({ sender, fee, memo: memo ?? `launch ${symbol}`, nonce }, async () => {
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
        await zkAdmin.deploy({
            adminPublicKey: sender,
            tokenContract: tokenAddress,
            verificationKey: adminVerificationKey,
            whitelist,
            totalSupply: params.totalSupply ?? UInt64.MAXINT(),
            requireAdminSignatureForMint: params.requireAdminSignatureForMint ?? Bool(false),
            anyoneCanMint: params.anyoneCanMint ?? Bool(false),
        });
        zkAdmin.account.zkappUri.set(uri);
        await zkToken.deploy({
            symbol,
            src: uri,
            verificationKey: tokenVerificationKey,
        });
        await zkToken.initialize(adminContractAddress, decimals, 
        // We can set `startPaused` to `Bool(false)` here, because we are doing an atomic deployment
        // If you are not deploying the admin and token contracts in the same transaction,
        // it is safer to start the tokens paused, and resume them only after verifying that
        // the admin contract has been deployed
        Bool(false));
    });
    return {
        tx,
        isAdvanced,
        verificationKeyHashes: [
            adminVerificationKey.hash,
            tokenVerificationKey.hash,
        ],
        whitelist: whitelist.toString(),
    };
}
// export function getTokenTransactionSender(params: {
//   txType: FungibleTokenTransactionType;
//   from: PublicKey;
//   to: PublicKey;
// }) {
//   const { txType, from, to } = params;
//   if (
//     txType === "buy" ||
//     txType === "withdrawOffer" ||
//     txType === "withdrawBid"
//   ) {
//     return to;
//   }
//   return from;
// }
export async function buildTokenTransaction(params) {
    const { txType, sender, chain, fee, nonce, tokenAddress, from, to, amount, price, developerAddress, developerFee, provingKey, provingFee, } = params;
    await fetchMinaAccount({
        publicKey: sender,
        force: true,
    });
    if (!Mina.hasAccount(sender)) {
        throw new Error("Sender does not have account");
    }
    const { symbol, adminContractAddress, adminAddress, isAdvanced, isToNewAccount, verificationKeyHashes, } = await getTokenSymbolAndAdmin({
        txType,
        tokenAddress,
        chain,
        to,
    });
    const memo = params.memo ?? `${txType} ${symbol}`;
    const adminContract = new FungibleTokenAdmin(adminContractAddress);
    const advancedAdminContract = new FungibleTokenAdvancedAdmin(adminContractAddress);
    const tokenContract = isAdvanced && txType === "mint" ? AdvancedFungibleToken : FungibleToken;
    if ((txType === "updateAdminWhitelist" ||
        txType === "updateBidWhitelist" ||
        txType === "updateOfferWhitelist") &&
        !params.whitelist) {
        throw new Error("Whitelist is required");
    }
    const whitelist = params.whitelist
        ? typeof params.whitelist === "string"
            ? Whitelist.fromString(params.whitelist)
            : await Whitelist.create({ list: params.whitelist, name: symbol })
        : Whitelist.empty();
    const zkToken = new tokenContract(tokenAddress);
    const tokenId = zkToken.deriveTokenId();
    if (txType === "mint" &&
        isAdvanced === false &&
        adminAddress.toBase58() !== sender.toBase58())
        throw new Error("Invalid sender for FungibleToken mint with standard admin");
    await fetchMinaAccount({
        publicKey: from,
        tokenId,
        force: [
            "offer",
            "updateOfferWhitelist",
            "bid",
            "updateBidWhitelist",
            "sell",
            "transfer",
            "withdrawOffer",
        ].includes(txType),
    });
    await fetchMinaAccount({
        publicKey: to,
        tokenId,
        force: [
            "sell",
            "updateAdminWhitelist",
            "withdrawBid",
            "withdrawOffer",
        ].includes(txType),
    });
    const isNewAccount = Mina.hasAccount(to, tokenId) === false;
    const offerContract = new FungibleTokenOfferContract([
        "offer",
        "updateOfferWhitelist",
    ].includes(txType)
        ? to
        : from, tokenId);
    const bidContract = new FungibleTokenBidContract([
        "bid",
        "updateBidWhitelist",
    ].includes(txType)
        ? from
        : to, tokenId);
    const offerContractDeployment = new FungibleTokenOfferContract(to, tokenId);
    const bidContractDeployment = new FungibleTokenBidContract(from, tokenId);
    const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
    if (!vk ||
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
        !vk.FungibleToken.data)
        throw new Error("Cannot get verification key from vk");
    const offerVerificationKey = FungibleTokenOfferContract._verificationKey ?? {
        hash: Field(vk.FungibleTokenOfferContract.hash),
        data: vk.FungibleTokenOfferContract.data,
    };
    const bidVerificationKey = FungibleTokenBidContract._verificationKey ?? {
        hash: Field(vk.FungibleTokenBidContract.hash),
        data: vk.FungibleTokenBidContract.data,
    };
    const accountCreationFee = (isNewAccount ? 1_000_000_000 : 0) +
        (isToNewAccount && txType === "mint" && isAdvanced ? 1_000_000_000 : 0);
    const tx = await Mina.transaction({ sender, fee, memo, nonce }, async () => {
        const feeAccountUpdate = AccountUpdate.createSigned(sender);
        if (accountCreationFee > 0) {
            feeAccountUpdate.balance.subInPlace(accountCreationFee);
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
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await zkToken.mint(to, amount);
                break;
            case "transfer":
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await zkToken.transfer(from, to, amount);
                break;
            case "offer":
                if (price === undefined)
                    throw new Error("Error: Price is required");
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
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
                }
                else {
                    await offerContract.offer(amount, price);
                    await zkToken.approveAccountUpdate(offerContract.self);
                }
                break;
            case "buy":
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await offerContract.buy(amount);
                await zkToken.approveAccountUpdate(offerContract.self);
                break;
            case "withdrawOffer":
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await offerContract.withdraw(amount);
                await zkToken.approveAccountUpdate(offerContract.self);
                break;
            case "bid":
                if (price === undefined)
                    throw new Error("Error: Price is required");
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
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
                }
                else {
                    await bidContract.bid(amount, price);
                    await zkToken.approveAccountUpdate(bidContract.self);
                }
                break;
            case "sell":
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await bidContract.sell(amount);
                await zkToken.approveAccountUpdate(bidContract.self);
                break;
            case "withdrawBid":
                if (amount === undefined)
                    throw new Error("Error: Amount is required");
                await bidContract.withdraw(amount);
                await zkToken.approveAccountUpdate(bidContract.self);
                break;
            case "updateAdminWhitelist":
                if (!isAdvanced)
                    throw new Error("Invalid admin type for updateAdminWhitelist");
                await advancedAdminContract.updateWhitelist(whitelist);
                break;
            case "updateBidWhitelist":
                await bidContract.updateWhitelist(whitelist);
                break;
            case "updateOfferWhitelist":
                await offerContract.updateWhitelist(whitelist);
                break;
            default:
                throw new Error(`Unknown transaction type: ${txType}`);
        }
    });
    return {
        tx,
        isAdvanced,
        adminContractAddress,
        adminAddress,
        symbol,
        verificationKeyHashes,
        whitelist: whitelist?.toString(),
    };
}
export async function getTokenSymbolAndAdmin(params) {
    const { txType, tokenAddress, chain, to } = params;
    const vk = tokenVerificationKeys[chain === "mainnet" ? "mainnet" : "testnet"].vk;
    const verificationKeyHashes = [];
    if (txType === "updateBidWhitelist" ||
        txType === "bid" ||
        txType === "withdrawBid") {
        verificationKeyHashes.push(vk.FungibleTokenBidContract.hash);
    }
    if (txType === "updateOfferWhitelist" ||
        txType === "offer" ||
        txType === "withdrawOffer") {
        verificationKeyHashes.push(vk.FungibleTokenOfferContract.hash);
    }
    class FungibleTokenState extends Struct({
        decimals: UInt8,
        admin: PublicKey,
        paused: Bool,
    }) {
    }
    const FungibleTokenStateSize = FungibleTokenState.sizeInFields();
    class FungibleTokenAdminState extends Struct({
        adminPublicKey: PublicKey,
    }) {
    }
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
    const state = FungibleTokenState.fromFields(account.zkapp?.appState.slice(0, FungibleTokenStateSize));
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
    if (vk.FungibleTokenAdvancedAdmin.hash === adminVerificationKey.hash.toJSON() &&
        vk.FungibleTokenAdvancedAdmin.data === adminVerificationKey.data) {
        isAdvanced = true;
    }
    else if (vk.FungibleTokenAdmin.hash === adminVerificationKey.hash.toJSON() &&
        vk.FungibleTokenAdmin.data === adminVerificationKey.data) {
        isAdvanced = false;
    }
    else {
        throw new Error("Unknown admin verification key");
    }
    let isToNewAccount = undefined;
    if (isAdvanced && to) {
        const adminTokenId = TokenId.derive(adminContractPublicKey);
        await fetchMinaAccount({
            publicKey: to,
            tokenId: adminTokenId,
            force: false,
        });
        isToNewAccount = !Mina.hasAccount(to, adminTokenId);
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
//# sourceMappingURL=build.js.map