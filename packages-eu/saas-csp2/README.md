# OVHCloud API client for **saas-csp2** region Europe

This module contains all typing needed to use OvhCloud **saas-csp2** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/saas-csp2.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/saas-csp2)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/saas-csp2
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiSaasCsp2 from '@ovh-api/saas-csp2';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /saas/csp2, GET /saas/csp2/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    saasCsp2: apiSaasCsp2(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.saasCsp2.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
