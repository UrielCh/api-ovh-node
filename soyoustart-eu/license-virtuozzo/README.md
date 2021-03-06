# OVHCloud API client for **license-virtuozzo** region Europe

This module contains all typing needed to use OvhCloud **license-virtuozzo** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-virtuozzo.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-virtuozzo)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/license-virtuozzo
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiLicenseVirtuozzo from '@ovh-soyoustart/license-virtuozzo';

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
