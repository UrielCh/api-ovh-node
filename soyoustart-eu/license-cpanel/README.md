# OVHCloud API client for **license-cpanel** region Europe

This module contains all typing needed to use OvhCloud **license-cpanel** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-cpanel.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-cpanel)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/license-cpanel
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiLicenseCpanel from '@ovh-soyoustart/license-cpanel';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/cpanel, GET /license/cpanel/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseCpanel: apiLicenseCpanel(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseCpanel.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
