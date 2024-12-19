import { client } from "./client/sdk.gen.js";
export function config({ apiKey, chain, throwOnError, }) {
    client.setConfig({
        headers: {
            "x-api-key": apiKey,
        },
        baseUrl: chain === "zeko"
            ? "https://zekotokens.com/api/v1/"
            : "https://minatokens.com/api/v1/",
        throwOnError: throwOnError ?? true,
    });
}
//# sourceMappingURL=config.js.map