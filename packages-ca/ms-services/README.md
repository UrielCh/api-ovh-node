# OVHCloud API client for **ms-services** region Canada

This module contains all typing needed to use OvhCloud **ms-services** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ms-services)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/ms-services
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiMsServices from '@ovh-api-ca/ms-services';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /msServices, GET /msServices/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    msServices: apiMsServices(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.msServices.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
