# OVHCloud API client for **distribution-image** region Europe

This module contains all typing needed to use OvhCloud **distribution-image** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/distribution-image)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/distribution-image
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiDistributionImage from '@ovh-soyoustart/distribution-image';

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
