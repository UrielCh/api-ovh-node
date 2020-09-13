# OVHCloud API client for **router** region Europe

This module contains all typing needed to use OvhCloud **router** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/router)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/router
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiRouter from '@ovh-api/router';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /router, GET /router/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    router: apiRouter(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.router.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```