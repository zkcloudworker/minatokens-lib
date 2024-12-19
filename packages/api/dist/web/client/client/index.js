import { buildUrl, createConfig, createInterceptors, getParseAs, mergeConfigs, mergeHeaders, setAuthParams, } from "./utils.js";
export const createClient = (config = {}) => {
    let _config = mergeConfigs(createConfig(), config);
    const getConfig = () => ({ ..._config });
    const setConfig = (config) => {
        _config = mergeConfigs(_config, config);
        return getConfig();
    };
    const interceptors = createInterceptors();
    // @ts-expect-error
    const request = async (options) => {
        const opts = {
            ..._config,
            ...options,
            fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
            headers: mergeHeaders(_config.headers, options.headers),
        };
        if (opts.security) {
            await setAuthParams({
                ...opts,
                security: opts.security,
            });
        }
        if (opts.body && opts.bodySerializer) {
            opts.body = opts.bodySerializer(opts.body);
        }
        // remove Content-Type header if body is empty to avoid sending invalid requests
        if (!opts.body) {
            opts.headers.delete("Content-Type");
        }
        const url = buildUrl(opts);
        const requestInit = {
            redirect: "follow",
            body: opts.body,
            headers: opts.headers,
            method: opts.method,
            mode: opts.mode,
        };
        let request = new Request(url, requestInit);
        for (const fn of interceptors.request._fns) {
            request = await fn(request, opts);
        }
        // fetch must be assigned here, otherwise it would throw the error:
        // TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
        const _fetch = opts.fetch;
        let response = await _fetch(request);
        for (const fn of interceptors.response._fns) {
            response = await fn(response, request, opts);
        }
        const result = {
            request,
            response,
        };
        if (response.ok) {
            if (response.status === 204 ||
                response.headers.get("Content-Length") === "0") {
                return {
                    data: {},
                    ...result,
                };
            }
            if (opts.parseAs === "stream") {
                return {
                    data: response.body,
                    ...result,
                };
            }
            const parseAs = (opts.parseAs === "auto"
                ? getParseAs(response.headers.get("Content-Type"))
                : opts.parseAs) ?? "json";
            let data = await response[parseAs]();
            if (parseAs === "json") {
                if (opts.responseValidator) {
                    await opts.responseValidator(data);
                }
                if (opts.responseTransformer) {
                    data = await opts.responseTransformer(data);
                }
            }
            return {
                data,
                ...result,
            };
        }
        let error = await response.text();
        try {
            error = JSON.parse(error);
        }
        catch {
            // noop
        }
        let finalError = error;
        for (const fn of interceptors.error._fns) {
            finalError = (await fn(error, response, request, opts));
        }
        finalError = finalError || {};
        if (opts.throwOnError) {
            throw finalError;
        }
        return {
            error: finalError,
            ...result,
        };
    };
    return {
        buildUrl,
        connect: (options) => request({ ...options, method: "CONNECT" }),
        delete: (options) => request({ ...options, method: "DELETE" }),
        get: (options) => request({ ...options, method: "GET" }),
        getConfig,
        head: (options) => request({ ...options, method: "HEAD" }),
        interceptors,
        options: (options) => request({ ...options, method: "OPTIONS" }),
        patch: (options) => request({ ...options, method: "PATCH" }),
        post: (options) => request({ ...options, method: "POST" }),
        put: (options) => request({ ...options, method: "PUT" }),
        request,
        setConfig,
        trace: (options) => request({ ...options, method: "TRACE" }),
    };
};
export { createConfig, formDataBodySerializer, jsonBodySerializer, urlSearchParamsBodySerializer, } from "./utils.js";
//# sourceMappingURL=index.js.map