# OVHCloud API client for **storage** region Canada

This module contains all typing needed to use OvhCloud **storage** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/storage.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/storage)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/storage
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiStorage from '@ovh-api-ca/storage';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /storage, GET /storage/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    storage: apiStorage(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.storage.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
