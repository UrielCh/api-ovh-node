# OVHCloud API client for **cdn-webstorage** region Europe

This module contains all typing needed to use OvhCloud **cdn-webstorage** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-webstorage.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-webstorage)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/cdn-webstorage
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCdnWebstorage from '@ovh-api/cdn-webstorage';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cdn/webstorage, GET /cdn/webstorage/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnWebstorage: apiCdnWebstorage(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnWebstorage.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
