---
title: CollectionErrors
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.CollectionErrors
order: 268
---

# Variable: CollectionErrors

## Properties overview

- adminContractAddressNotSet:  string = "Admin contract address is not set"; [↗](#admincontractaddressnotset)
- cannotMint:  string = "Admin contract did not provide permission to mint"; [↗](#cannotmint)
- cannotMintMasterNFT:  string = "Only the creator can mint the Master NFT"; [↗](#cannotmintmasternft)
- cannotUpgradeVerificationKey:  string = "Cannot upgrade verification key"; [↗](#cannotupgradeverificationkey)
- collectionNotPaused:  string = "Collection is not paused"; [↗](#collectionnotpaused)
- collectionPaused:  string = "Collection is currently paused"; [↗](#collectionpaused)
- invalidOracleAddress:  string = "Oracle address is invalid"; [↗](#invalidoracleaddress)
- invalidRoyaltyFee:  string = "Royalty fee is too high, cannot be more than 100%"; [↗](#invalidroyaltyfee)
- noPermissionToChangeBaseUri:  string = "Not allowed to change collection base URI"; [↗](#nopermissiontochangebaseuri)
- noPermissionToChangeCreator:  string = "Not allowed to change collection creator"; [↗](#nopermissiontochangecreator)
- noPermissionToChangeName:  string = "Not allowed to change collection name"; [↗](#nopermissiontochangename)
- noPermissionToChangeRoyalty:  string = "Not allowed to change royalty fee"; [↗](#nopermissiontochangeroyalty)
- noPermissionToChangeTransferFee:  string = "Not allowed to change transfer fee"; [↗](#nopermissiontochangetransferfee)
- noPermissionToPause:  string = "Not allowed to pause collection"; [↗](#nopermissiontopause)
- noPermissionToResume:  string = "Not allowed to resume collection"; [↗](#nopermissiontoresume)
- noPermissionToSetAdmin:  string = "Not allowed to set admin contract"; [↗](#nopermissiontosetadmin)
- onlyOwnerCanUpgradeVerificationKey:  string = "Only owner can upgrade verification key"; [↗](#onlyownercanupgradeverificationkey)
- transferApprovalRequired:  string = "Transfer approval is required"; [↗](#transferapprovalrequired)
- transferNotAllowed:  string = "Transfers of tokens are not allowed, change the owner instead"; [↗](#transfernotallowed)
- upgradeContractAddressNotSet:  string = "Upgrade contract address is not set"; [↗](#upgradecontractaddressnotset)
- wrongMasterNFTaddress:  string = "Master NFT address should be the same as the collection address"; [↗](#wrongmasternftaddress)

```ts
const CollectionErrors: {
  adminContractAddressNotSet: string;
  cannotMint: string;
  cannotMintMasterNFT: string;
  cannotUpgradeVerificationKey: string;
  collectionNotPaused: string;
  collectionPaused: string;
  invalidOracleAddress: string;
  invalidRoyaltyFee: string;
  noPermissionToChangeBaseUri: string;
  noPermissionToChangeCreator: string;
  noPermissionToChangeName: string;
  noPermissionToChangeRoyalty: string;
  noPermissionToChangeTransferFee: string;
  noPermissionToPause: string;
  noPermissionToResume: string;
  noPermissionToSetAdmin: string;
  onlyOwnerCanUpgradeVerificationKey: string;
  transferApprovalRequired: string;
  transferNotAllowed: string;
  upgradeContractAddressNotSet: string;
  wrongMasterNFTaddress: string;
};
```

Defined in: [packages/nft/src/contracts/collection.ts:63](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L63)

## Type declaration

### adminContractAddressNotSet

```ts
adminContractAddressNotSet: string = "Admin contract address is not set";
```

### cannotMint

```ts
cannotMint: string = "Admin contract did not provide permission to mint";
```

### cannotMintMasterNFT

```ts
cannotMintMasterNFT: string = "Only the creator can mint the Master NFT";
```

### cannotUpgradeVerificationKey

```ts
cannotUpgradeVerificationKey: string = "Cannot upgrade verification key";
```

### collectionNotPaused

```ts
collectionNotPaused: string = "Collection is not paused";
```

### collectionPaused

```ts
collectionPaused: string = "Collection is currently paused";
```

### invalidOracleAddress

```ts
invalidOracleAddress: string = "Oracle address is invalid";
```

### invalidRoyaltyFee

```ts
invalidRoyaltyFee: string = "Royalty fee is too high, cannot be more than 100%";
```

### noPermissionToChangeBaseUri

```ts
noPermissionToChangeBaseUri: string = "Not allowed to change collection base URI";
```

### noPermissionToChangeCreator

```ts
noPermissionToChangeCreator: string = "Not allowed to change collection creator";
```

### noPermissionToChangeName

```ts
noPermissionToChangeName: string = "Not allowed to change collection name";
```

### noPermissionToChangeRoyalty

```ts
noPermissionToChangeRoyalty: string = "Not allowed to change royalty fee";
```

### noPermissionToChangeTransferFee

```ts
noPermissionToChangeTransferFee: string = "Not allowed to change transfer fee";
```

### noPermissionToPause

```ts
noPermissionToPause: string = "Not allowed to pause collection";
```

### noPermissionToResume

```ts
noPermissionToResume: string = "Not allowed to resume collection";
```

### noPermissionToSetAdmin

```ts
noPermissionToSetAdmin: string = "Not allowed to set admin contract";
```

### onlyOwnerCanUpgradeVerificationKey

```ts
onlyOwnerCanUpgradeVerificationKey: string = "Only owner can upgrade verification key";
```

### transferApprovalRequired

```ts
transferApprovalRequired: string = "Transfer approval is required";
```

### transferNotAllowed

```ts
transferNotAllowed: string = "Transfers of tokens are not allowed, change the owner instead";
```

### upgradeContractAddressNotSet

```ts
upgradeContractAddressNotSet: string = "Upgrade contract address is not set";
```

### wrongMasterNFTaddress

```ts
wrongMasterNFTaddress: string = "Master NFT address should be the same as the collection address";
```
