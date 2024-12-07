---
title: JobResults
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: TypeAlias.JobResults
order: 47
---

# Type Alias: JobResults

```ts
type JobResults: {
  jobStatus: JobStatus;
  results: JobResult[];
  success: true;
 } | {
  error: string;
  jobStatus: JobStatus;
  success: false;
};
```

## Defined in

[types.ts:120](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/api/src/types.ts#L120)
