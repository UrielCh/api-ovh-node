# OVHCloud API client for **license-office-prepaid** region USA

This module contains all typing needed to use OvhCloud **license-office-prepaid** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-office-prepaid.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-office-prepaid)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/license-office-prepaid
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiLicenseOfficePrepaid from '@ovh-api-us/license-office-prepaid';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/officePrepaid, GET /license/officePrepaid/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseOfficePrepaid: apiLicenseOfficePrepaid(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseOfficePrepaid.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
