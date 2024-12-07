---
title: ApiResponse
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: TypeAlias.ApiResponse
order: 45
---

# Type Alias: ApiResponse\<T\>

## Properties overview

- json:  {
  error: string;
}; [↗](#json)
- status:  400; [↗](#status)
- json:  {
  error: string;
}; [↗](#json)
- status:  401; [↗](#status)
- json:  {
  error: string;
}; [↗](#json)
- status:  403; [↗](#status)
- json:  {
  error: string;
}; [↗](#json)
- status:  429; [↗](#status)
- json:  {
  error: string;
}; [↗](#json)
- status:  500; [↗](#status)
- json:  {
  error: string;
}; [↗](#json)
- status:  503; [↗](#status)
- json:  T; [↗](#json)
- status:  200; [↗](#status)

```ts
type ApiResponse<T>: 
  | {
  json: {
     error: string;
    };
  status: 400;
 }
  | {
  json: {
     error: string;
    };
  status: 401;
 }
  | {
  json: {
     error: string;
    };
  status: 403;
 }
  | {
  json: {
     error: string;
    };
  status: 429;
 }
  | {
  json: {
     error: string;
    };
  status: 500;
 }
  | {
  json: {
     error: string;
    };
  status: 503;
 }
  | {
  json: T;
  status: 200;
};
```

## Type Parameters

• **T**

## Type declaration

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `400`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 400;
```

Bad request - invalid input parameters

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `401`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 401;
```

Unauthorized - user not authenticated

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `403`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 403;
```

Forbidden - user doesn't have permission

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `429`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 429;
```

Too many requests

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `500`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 500;
```

Internal server error - something went wrong during deployment

\{
  `json`: \{
     `error`: `string`;
    \};
  `status`: `503`;
 \}

### json

```ts
json: {
  error: string;
};
```

#### json.error

```ts
error: string;
```

### status

```ts
status: 503;
```

Service unavailable - blockchain or other external service is down

\{
  `json`: `T`;
  `status`: `200`;
 \}

### json

```ts
json: T;
```

### status

```ts
status: 200;
```

Success - API response

## Defined in

[api.ts:20](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/api.ts#L20)
