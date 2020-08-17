# OVHCloud API client for **cloud-d-b** region Europe

This module contains all typing needed to use OvhCloud **cloud-d-b** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cloud-d-b.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cloud-d-b)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/cloud-d-b
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiCloudDB from '@ovh-soyoustart/cloud-d-b';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cloudDB, GET /cloudDB/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cloudDB: apiCloudDB(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cloudDB.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
