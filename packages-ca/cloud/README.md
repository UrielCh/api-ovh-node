# OVHCloud API client for **cloud** region Canada

This module contains all typing needed to use OvhCloud **cloud** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/cloud)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/cloud
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiCloud from '@ovh-api-ca/cloud';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cloud, GET /cloud/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cloud: apiCloud(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cloud.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
