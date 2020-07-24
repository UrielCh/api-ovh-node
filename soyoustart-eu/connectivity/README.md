# OVHCloud API client for **connectivity** region Europe

This module contains all typing needed to use OvhCloud **connectivity** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/connectivity.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/connectivity)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/connectivity
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiConnectivity from '@ovh-soyoustart/connectivity';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /connectivity, GET /connectivity/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    connectivity: apiConnectivity(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.connectivity.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
