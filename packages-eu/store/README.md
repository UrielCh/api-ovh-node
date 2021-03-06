# OVHCloud API client for **store** region Europe

This module contains all typing needed to use OvhCloud **store** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/store)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/store
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiStore from '@ovh-api/store';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /store, GET /store/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    store: apiStore(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.store.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
