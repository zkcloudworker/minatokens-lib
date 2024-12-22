---
title: CollectionErrors
category: 6749c4dba3a7a4005bae1197
hidden: false
slug: nft.src.Variable.CollectionErrors
order: 216
---

# Variable: CollectionErrors

## Properties overview

- adminContractAddressNotSet:  string = "Admin contract address is not set"; [↗](#admincontractaddressnotset)
- cannotMint:  string = "Admin contract did not provide permission to mint"; [↗](#cannotmint)
- cannotMintMasterNFT:  string = "Only the creator can mint the Master NFT"; [↗](#cannotmintmasternft)
- cannotUpgradeVerificationKey:  string = "Cannot upgrade verification key"; [↗](#cannotupgradeverificationkey)
- collectionNotPaused:  string = "Collection is not paused"; [↗](#collectionnotpaused)
- collectionPaused:  string = "Collection is currently paused"; [↗](#collectionpaused)
- creatorSignatureRequiredToUpgradeCollection:  string = "Creator signature is required to upgrade collection"; [↗](#creatorsignaturerequiredtoupgradecollection)
- creatorSignatureRequiredToUpgradeNFT:  string = "Creator signature is required to upgrade NFT"; [↗](#creatorsignaturerequiredtoupgradenft)
- mintApprovalNotRequired:  string = "Mint approval is not required"; [↗](#mintapprovalnotrequired)
- mintApprovalRequired:  string = "Mint approval is required"; [↗](#mintapprovalrequired)
- noPermissionToChangeBaseUri:  string = "Not allowed to change collection base URI"; [↗](#nopermissiontochangebaseuri)
- noPermissionToChangeCreator:  string = "Not allowed to change collection creator"; [↗](#nopermissiontochangecreator)
- noPermissionToChangeName:  string = "Not allowed to change collection name"; [↗](#nopermissiontochangename)
- noPermissionToChangeRoyalty:  string = "Not allowed to change royalty fee"; [↗](#nopermissiontochangeroyalty)
- noPermissionToChangeTransferFee:  string = "Not allowed to change transfer fee"; [↗](#nopermissiontochangetransferfee)
- noPermissionToPause:  string = "Not allowed to pause collection"; [↗](#nopermissiontopause)
- noPermissionToResume:  string = "Not allowed to resume collection"; [↗](#nopermissiontoresume)
- noPermissionToSetAdmin:  string = "Not allowed to set admin contract"; [↗](#nopermissiontosetadmin)
- transferApprovalNotRequired:  string = "Transfer approval is not required"; [↗](#transferapprovalnotrequired)
- transferApprovalRequired:  string = "Transfer approval is required"; [↗](#transferapprovalrequired)
- transferNotAllowed:  string = "Transfers of tokens are not allowed, change the owner instead"; [↗](#transfernotallowed)
- updateApprovalNotRequired:  string = "Update approval is not required"; [↗](#updateapprovalnotrequired)
- updateApprovalRequired:  string = "Update approval is required"; [↗](#updateapprovalrequired)
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
  creatorSignatureRequiredToUpgradeCollection: string;
  creatorSignatureRequiredToUpgradeNFT: string;
  mintApprovalNotRequired: string;
  mintApprovalRequired: string;
  noPermissionToChangeBaseUri: string;
  noPermissionToChangeCreator: string;
  noPermissionToChangeName: string;
  noPermissionToChangeRoyalty: string;
  noPermissionToChangeTransferFee: string;
  noPermissionToPause: string;
  noPermissionToResume: string;
  noPermissionToSetAdmin: string;
  transferApprovalNotRequired: string;
  transferApprovalRequired: string;
  transferNotAllowed: string;
  updateApprovalNotRequired: string;
  updateApprovalRequired: string;
  upgradeContractAddressNotSet: string;
  wrongMasterNFTaddress: string;
};
```

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

### creatorSignatureRequiredToUpgradeCollection

```ts
creatorSignatureRequiredToUpgradeCollection: string = "Creator signature is required to upgrade collection";
```

### creatorSignatureRequiredToUpgradeNFT

```ts
creatorSignatureRequiredToUpgradeNFT: string = "Creator signature is required to upgrade NFT";
```

### mintApprovalNotRequired

```ts
mintApprovalNotRequired: string = "Mint approval is not required";
```

### mintApprovalRequired

```ts
mintApprovalRequired: string = "Mint approval is required";
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

### transferApprovalNotRequired

```ts
transferApprovalNotRequired: string = "Transfer approval is not required";
```

### transferApprovalRequired

```ts
transferApprovalRequired: string = "Transfer approval is required";
```

### transferNotAllowed

```ts
transferNotAllowed: string = "Transfers of tokens are not allowed, change the owner instead";
```

### updateApprovalNotRequired

```ts
updateApprovalNotRequired: string = "Update approval is not required";
```

### updateApprovalRequired

```ts
updateApprovalRequired: string = "Update approval is required";
```

### upgradeContractAddressNotSet

```ts
upgradeContractAddressNotSet: string = "Upgrade contract address is not set";
```

### wrongMasterNFTaddress

```ts
wrongMasterNFTaddress: string = "Master NFT address should be the same as the collection address";
```

## Defined in

[packages/nft/src/contracts/collection.ts:65](https://github.com/zkcloudworker/minatokens-lib/blob/main/packages/nft/src/contracts/collection.ts#L65)
