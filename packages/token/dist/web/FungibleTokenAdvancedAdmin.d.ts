import { AccountUpdate, Bool, DeployArgs, PublicKey, State, TokenContract, UInt64, VerificationKey, AccountUpdateForest, Field } from "o1js";
import { Whitelist } from "@minatokens/storage";
import { FungibleTokenAdminBase } from "./FungibleTokenContract.js";
declare const AdvancedAdminData_base: (new (value: {
    totalSupply: UInt64;
    requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    totalSupply: UInt64;
    requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    totalSupply: UInt64;
    requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    totalSupply: bigint;
    requireAdminSignatureForMint: boolean;
    anyoneCanMint: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        totalSupply: bigint | UInt64;
        requireAdminSignatureForMint: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        totalSupply: string;
        requireAdminSignatureForMint: boolean;
        anyoneCanMint: boolean;
    };
    fromJSON: (x: {
        totalSupply: string;
        requireAdminSignatureForMint: boolean;
        anyoneCanMint: boolean;
    }) => {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        totalSupply: UInt64;
        requireAdminSignatureForMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
        anyoneCanMint: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
export declare class AdvancedAdminData extends AdvancedAdminData_base {
    static new(params?: {
        totalSupply?: number;
        requireAdminSignatureForMint?: boolean;
        anyoneCanMint?: boolean;
    }): AdvancedAdminData;
    pack(): Field;
    static unpack(packed: Field): AdvancedAdminData;
}
export interface FungibleTokenWhitelistedAdminDeployProps extends Exclude<DeployArgs, undefined> {
    adminPublicKey: PublicKey;
    tokenContract: PublicKey;
    totalSupply: UInt64;
    whitelist: Whitelist;
    requireAdminSignatureForMint: Bool;
    anyoneCanMint: Bool;
}
/** A contract that grants permissions for administrative actions on a token.
 *
 * We separate this out into a dedicated contract. That way, when issuing a token, a user can
 * specify their own rules for administrative actions, without changing the token contract itself.
 *
 * The advantage is that third party applications that only use the token in a non-privileged way
 * can integrate against the unchanged token contract.
 */
export declare class FungibleTokenAdvancedAdmin extends TokenContract implements FungibleTokenAdminBase {
    adminPublicKey: State<PublicKey>;
    tokenContract: State<PublicKey>;
    whitelist: State<Whitelist>;
    adminData: State<import("node_modules/o1js/dist/node/lib/provable/field.js").Field>;
    /**
     * Overrides the approveBase method to prevent transfers of tokens.
     *
     * @param forest - The account update forest.
     */
    approveBase(forest: AccountUpdateForest): Promise<void>;
    deploy(props: FungibleTokenWhitelistedAdminDeployProps): Promise<void>;
    events: {
        updateWhitelist: typeof Whitelist;
    };
    /** Update the verification key.
     * Note that because we have set the permissions for setting
     * the verification key to `impossibleDuringCurrentVersion()`,
     * this will only be possible in case of a protocol update that requires an update.
     */
    updateVerificationKey(vk: VerificationKey): Promise<void>;
    private ensureAdminSignature;
    canMint(_accountUpdate: AccountUpdate): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    canChangeAdmin(_admin: PublicKey): Promise<import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool>;
    canPause(): Promise<Bool>;
    canResume(): Promise<Bool>;
    updateWhitelist(whitelist: Whitelist): Promise<void>;
    canChangeVerificationKey(_vk: VerificationKey): Promise<Bool>;
}
export {};
