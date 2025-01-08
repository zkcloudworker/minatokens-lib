---
title: JobResults
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: api.src.TypeAlias.JobResults
order: 68
---

# Type Alias: JobResults

```ts
type JobResults = {
  error: string;
  jobStatus: "created" | "started" | "finished" | "failed" | "used" | "restarted";
  results: JobResult[];
  success: boolean;
};
```

Defined in: [packages/api/src/client/types.gen.ts:133](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/client/types.gen.ts#L133)

## Type declaration

### error?

```ts
optional error: string;
```

Error message if the job failed.

### jobStatus?

```ts
optional jobStatus: "created" | "started" | "finished" | "failed" | "used" | "restarted";
```

The current status of the job.

### results?

```ts
optional results: JobResult[];
```

Results for each transaction in the job.

### success?

```ts
optional success: boolean;
```

Indicates whether the job was successful.
