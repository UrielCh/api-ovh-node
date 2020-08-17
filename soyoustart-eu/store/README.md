# OVHCloud API client for **store** region Europe

This module contains all typing needed to use OvhCloud **store** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/store)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/store
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiStore from '@ovh-soyoustart/store';

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
