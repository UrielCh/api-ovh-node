# OVHCloud API client for **license-worklight** region Europe

This module contains all typing needed to use OvhCloud **license-worklight** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-worklight.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-worklight)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-worklight
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicenseWorklight from '@ovh-api/license-worklight';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/worklight, GET /license/worklight/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseWorklight: apiLicenseWorklight(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseWorklight.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
