---
title: NFTAdvancedAdminDeployProps
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Interface.NFTAdvancedAdminDeployProps
order: 232
---

# Interface: NFTAdvancedAdminDeployProps

## Properties overview

- admin:  PublicKey; [↗](#admin)
- adminData:  AdminData; [↗](#admindata)
- upgradeAuthority:  PublicKey; [↗](#upgradeauthority)
- uri:  string; [↗](#uri)
- whitelist:  Whitelist; [↗](#whitelist)

Defined in: [packages/nft/src/admin/advanced.ts:49](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L49)

Deployment properties for the `NFTAdvancedAdminContract`.

## Extends

- `Exclude`\<`DeployArgs`, `undefined`\>

## Properties

### admin

```ts
admin: PublicKey;
```

Defined in: [packages/nft/src/admin/advanced.ts:51](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L51)

The public key of the admin or owner of the contract.

***

### adminData

```ts
adminData: AdminData;
```

Defined in: [packages/nft/src/admin/advanced.ts:60](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L60)

The admin data.

***

### upgradeAuthority

```ts
upgradeAuthority: PublicKey;
```

Defined in: [packages/nft/src/admin/advanced.ts:53](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L53)

The public key of the Upgrade Authority Contract.

***

### uri

```ts
uri: string;
```

Defined in: [packages/nft/src/admin/advanced.ts:58](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L58)

The URI of the zkApp.

***

### whitelist

```ts
whitelist: Whitelist;
```

Defined in: [packages/nft/src/admin/advanced.ts:55](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/admin/advanced.ts#L55)

The whitelist.
