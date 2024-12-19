export declare const tokenVerificationKeys: {
    [key in "mainnet" | "testnet"]: {
        o1js: string;
        zkcloudworker: string;
        vk: {
            [key: string]: {
                hash: string;
                data: string;
                type: "token" | "admin" | "upgrade" | "user";
            };
        };
    };
};
