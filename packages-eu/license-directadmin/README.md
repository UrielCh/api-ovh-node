# OVHCloud API client for **license-directadmin** region Europe

This module contains all typing needed to use OvhCloud **license-directadmin** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-directadmin.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-directadmin)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-directadmin
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicenseDirectadmin from '@ovh-api/license-directadmin';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/directadmin, GET /license/directadmin/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseDirectadmin: apiLicenseDirectadmin(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseDirectadmin.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
