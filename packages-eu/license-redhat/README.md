# OVHCloud API client for **license-redhat** region Europe

This module contains all typing needed to use OvhCloud **license-redhat** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/license-redhat.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/license-redhat)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/license-redhat
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiLicenseRedhat from '@ovh-api/license-redhat';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/redhat, GET /license/redhat/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseRedhat: apiLicenseRedhat(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseRedhat.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
