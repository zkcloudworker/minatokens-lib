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
  status?: string;
}

export type JobResults =
  | { success: true; results?: JobResult[]; jobStatus?: JobStatus }
  | { success: false; error?: string; jobStatus?: JobStatus };

export interface BalanceRequestParams {
  tokenAddress?: string;
  tokenId?: string;
  address: string;
}

export interface BalanceResponse {
  tokenAddress?: string;
  tokenId?: string;
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
