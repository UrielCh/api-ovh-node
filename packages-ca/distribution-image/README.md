# OVHCloud API client for **distribution-image** region Canada

This module contains all typing needed to use OvhCloud **distribution-image** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/distribution-image)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/distribution-image
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDistributionImage from '@ovh-api-ca/distribution-image';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /distribution/image, GET /distribution/image/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    distributionImage: apiDistributionImage(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.distributionImage.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
