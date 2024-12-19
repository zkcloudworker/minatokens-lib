import type { Client, Config } from "./types.js";
export declare const createClient: (config?: Config) => Client;
export type { Client, Config, Options, OptionsLegacyParser, RequestOptions, RequestResult, Security, } from "./types.js";
export { createConfig, formDataBodySerializer, jsonBodySerializer, type QuerySerializerOptions, urlSearchParamsBodySerializer, } from "./utils.js";
