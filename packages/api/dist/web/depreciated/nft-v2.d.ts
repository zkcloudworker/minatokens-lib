export interface NFTRequestParams {
    contractAddress: string;
    nftAddress: string;
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
