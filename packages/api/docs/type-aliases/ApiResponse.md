[**@minatokens/api**](../README.md)

***

[@minatokens/api](../globals.md) / ApiResponse

# Type Alias: ApiResponse\<T\>

> **ApiResponse**\<`T`\>: \{`json`: `object`;`status`: `400`; \} \| \{`json`: `object`;`status`: `401`; \} \| \{`json`: `object`;`status`: `403`; \} \| \{`json`: `object`;`status`: `429`; \} \| \{`json`: `object`;`status`: `500`; \} \| \{`json`: `object`;`status`: `503`; \} \| \{`json`: `T`;`status`: `200`; \}

## Type Parameters

• **T**

## Type declaration

\{`json`: `object`;`status`: `400`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `400`

Bad request - invalid input parameters

\{`json`: `object`;`status`: `401`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `401`

Unauthorized - user not authenticated

\{`json`: `object`;`status`: `403`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `403`

Forbidden - user doesn't have permission

\{`json`: `object`;`status`: `429`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `429`

Too many requests

\{`json`: `object`;`status`: `500`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `500`

Internal server error - something went wrong during deployment

\{`json`: `object`;`status`: `503`; \}

### json

> **json**: `object`

#### json.error

> **error**: `string`

### status

> **status**: `503`

Service unavailable - blockchain or other external service is down

\{`json`: `T`;`status`: `200`; \}

### json

> **json**: `T`

### status

> **status**: `200`

Success - API response

## Defined in

[types.ts:284](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L284)
