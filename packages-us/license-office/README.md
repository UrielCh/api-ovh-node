# OVHCloud API client for **license-office** region USA

This module contains all typing needed to use OvhCloud **license-office** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-office)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/license-office
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiLicenseOffice from '@ovh-api-us/license-office';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/office, GET /license/office/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseOffice: apiLicenseOffice(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseOffice.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
