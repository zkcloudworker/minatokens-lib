import { PublicKey, Field, Account } from "o1js";
/**
 * Fetches the Mina account for a given public key with error handling
 * @param params the parameters for fetching the account
 * @param params.publicKey the public key of the account
 * @param params.tokenId the token id of the account
 * @param params.force whether to force the fetch - use it only if you are sure the account exists
 * @returns the account object
 */
export declare function fetchMinaAccount(params: {
    publicKey: string | PublicKey;
    tokenId?: string | Field | undefined;
    force?: boolean;
}): Promise<Account | undefined>;
