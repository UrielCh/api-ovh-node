# OVHCloud API client for **license-office** region Europe

This module contains all typing needed to use OvhCloud **license-office** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-office.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-office)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/license-office
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiLicenseOffice from '@ovh-soyoustart/license-office';

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
