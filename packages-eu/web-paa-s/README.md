# OVHCloud API client for **web-paa-s** region Europe

This module contains all typing needed to use OvhCloud **web-paa-s** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/web-paa-s.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/web-paa-s)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/web-paa-s
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiWebPaaS from '@ovh-api/web-paa-s';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /webPaaS, GET /webPaaS/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    webPaaS: apiWebPaaS(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.webPaaS.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
