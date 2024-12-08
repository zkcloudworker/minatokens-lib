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
