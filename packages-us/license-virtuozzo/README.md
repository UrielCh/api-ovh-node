# OVHCloud API client for **license-virtuozzo** region USA

This module contains all typing needed to use OvhCloud **license-virtuozzo** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-virtuozzo)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/license-virtuozzo
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiLicenseVirtuozzo from '@ovh-api-us/license-virtuozzo';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/virtuozzo, GET /license/virtuozzo/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseVirtuozzo: apiLicenseVirtuozzo(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseVirtuozzo.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
