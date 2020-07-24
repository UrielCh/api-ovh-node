# OVHCloud API client for **cdn-dedicated** region Europe

This module contains all typing needed to use OvhCloud **cdn-dedicated** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/cdn-dedicated.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cdn-dedicated)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/cdn-dedicated
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCdnDedicated from '@ovh-api/cdn-dedicated';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /cdn/dedicated, GET /cdn/dedicated/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnDedicated: apiCdnDedicated(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnDedicated.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
