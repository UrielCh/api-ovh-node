# OVHCloud API client for **hosting-reseller** region Europe

This module contains all typing needed to use OvhCloud **hosting-reseller** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-reseller.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-reseller)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/hosting-reseller
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiHostingReseller from '@ovh-api/hosting-reseller';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /hosting/reseller, GET /hosting/reseller/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingReseller: apiHostingReseller(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingReseller.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
