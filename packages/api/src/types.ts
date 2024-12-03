export type FungibleTokenTransactionType =
  | "mint"
  | "transfer"
  | "bid"
  | "offer"
  | "buy"
  | "sell"
  | "airdrop"
  | "withdrawBid"
  | "withdrawOffer"
  | "updateBidWhitelist"
  | "updateOfferWhitelist"
  | "updateAdminWhitelist";

export const tokenTransactionTypes: (
  | FungibleTokenTransactionType
  | "launch"
)[] = [
  "launch",
  "mint",
  "transfer",
  "bid",
  "offer",
  "buy",
  "sell",
  "airdrop",
  "withdrawBid",
  "withdrawOffer",
  "updateBidWhitelist",
  "updateOfferWhitelist",
  "updateAdminWhitelist",
];
export interface TransactionPayloads {
  sender: string;
  nonce: number;
  memo: string;
  fee: number;
  walletPayload: {
    nonce: number;
    transaction: string;
    onlySign: boolean;
    feePayer: {
      fee: number;
      memo: string;
    };
  };
  minaSignerPayload: {
    zkappCommand: any;
    feePayer: {
      feePayer: string;
      fee: number;
      nonce: number;
      memo: string;
    };
  };
  proverPayload: string;
  signedData: string;
  transaction: string;
}

export interface TokenTransactionPayloads extends TransactionPayloads {
  txType: FungibleTokenTransactionType | "launch";
  tokenAddress: string;
  symbol: string;
  whitelist?: string;
  developerAddress?: string;
  developerFee?: number;
  sendTransaction?: boolean;
}
export interface DeployTransaction extends TokenTransactionPayloads {
  txType: "launch";
  adminType: "standard" | "advanced";
  adminContractAddress: string;
  tokenContractPrivateKey?: string;
  adminContractPrivateKey?: string;
  uri: string;
}
export interface TokenTransaction extends TokenTransactionPayloads {
  txType: FungibleTokenTransactionType;
  to: string;
  toPrivateKey?: string;
  from: string;
  amount?: number;
  price?: number;
}

export interface TokenTransactions {
  txs: TokenTransaction[];
}

export interface ProveTokenTransaction {
  tx: DeployTransaction | TokenTransaction;
  signedData: string;
  sendTransaction?: boolean;
}

export interface ProveTokenTransactions {
  txs: ProveTokenTransaction[];
}

export interface JobId {
  jobId: string;
}

export type JobStatus =
  | "created"
  | "started"
  | "finished"
  | "failed"
  | "used"
  | "restarted";

export interface JobResult {
  success: boolean;
  error?: string;
  tx?: string;
  hash?: string;
}

export type JobResults =
  | { success: true; results?: JobResult[]; jobStatus?: JobStatus }
  | { success: false; error?: string; jobStatus?: JobStatus };

export interface TransactionTokenParams {
  txType: FungibleTokenTransactionType;
  tokenAddress: string;
  from: string;
  to?: string;
  amount?: number;
  price?: number;
  whitelist?: { address: string; amount?: number }[] | string;
  nonce?: number;
  memo?: string;
  developerFee?: number;
}
export interface BalanceRequestParams {
  tokenAddress: string;
  address: string;
}

export interface BalanceResponse {
  tokenAddress: string;
  address: string;
  balance: number | null;
}

export interface TransactionStatusParams {
  hash: string;
}

export interface TxStatus {
  blockHeight: number;
  stateHash: string;
  blockStatus: "canonical" | string;
  timestamp: number;
  txHash: string;
  txStatus: "applied" | string;
  failures: {
    index: number;
    failureReason: string;
  }[];
  memo: string;
  feePayerAddress: string;
  feePayerName: string | null;
  feePayerImg: string | null;
  fee: number;
  feeUsd: number;
  totalBalanceChange: number;
  totalBalanceChangeUsd: number;
  updatedAccountsCount: number;
  updatedAccounts: {
    accountAddress: string;
    accountName: string | null;
    accountImg: string | null;
    isZkappAccount: boolean;
    verificationKey: string | null;
    verificationKeyHash: string | null;
    incrementNonce: boolean;
    totalBalanceChange: number;
    totalBalanceChangeUsd: number;
    callDepth: number;
    useFullCommitment: boolean;
    callData: string;
    tokenId: string;
    update: {
      appState: string[];
      delegateeAddress: string | null;
      delegateeName: string | null;
      delegateeImg: string | null;
      permissions: {
        access: string | null;
        editActionState: string | null;
        editState: string | null;
        incrementNonce: string | null;
        receive: string | null;
        send: string | null;
        setDelegate: string | null;
        setPermissions: string | null;
        setTiming: string | null;
        setTokenSymbol: string | null;
        setVerificationKey: string | null;
        setVotingFor: string | null;
        setZkappUri: string | null;
      };
      timing: {
        initialMinimumBalance: string | null;
        cliffTime: number | null;
        cliffAmount: string | null;
        vestingPeriod: number | null;
        vestingIncrement: string | null;
      };
      tokenSymbol: string | null;
      verificationKey: string | null;
      votingFor: string | null;
      zkappUri: string | null;
    };
  }[];
  blockConfirmationsCount: number;
  isZkappAccount: boolean;
  nonce: number;
  isAccountHijack: boolean | null;
}

export interface TransactionStatus {
  hash: string;
  status: "pending" | "applied" | "failed" | "unknown";
  error?: string;
  details?: TxStatus;
}

export interface FaucetParams {
  address: string;
}

export interface FaucetResponse {
  success: true;
  hash?: string;
}

export interface TokenStateRequestParams {
  tokenAddress: string;
}
export interface TokenState {
  tokenAddress: string;
  tokenId: string;
  adminContractAddress: string;
  adminAddress: string;
  adminTokenBalance: number;
  totalSupply: number;
  isPaused: boolean;
  decimals: number;
  tokenSymbol: string;
  verificationKeyHash: string;
  uri: string;
  version: number;
  adminTokenSymbol: string;
  adminUri: string;
  adminVerificationKeyHash: string;
  adminVersion: number;
}

export interface NFTRequestParams {
  contractAddress: string; // always B62qs2NthDuxAT94tTFg6MtuaP1gaBxTZyNv9D3uQiQciy1VsaimNFT
  nftAddress: string;
  // example: B62qnkz5juL135pJAw7XjLXwvrKAdgbau1V9kEpC1S1x8PfUxcu8KMP on mainnet
  // B62qoT6jXebkJVmsUmxCxGJmvHJUXPNF417rms4PATi5R6Hw7e56CRt on devnet with markdown
}

export interface NFTRequestAnswer {
  contractAddress: string;
  nftAddress: string;
  tokenId: string;
  tokenSymbol: string;
  contractUri: string | null;
  name: string;
  metadataRoot: {
    data: string;
    kind: string;
  };
  storage: string;
  owner: string;
  price: number;
  version: number;
  metadata: object | null;
  algolia: object | null;
}

export interface TokenSymbolAndAdmin {
  tokenAddress: string;
  adminContractAddress: string;
  adminAddress: string;
  tokenSymbol: string;
}
