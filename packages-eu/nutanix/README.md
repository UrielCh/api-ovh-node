# OVHCloud API client for **nutanix** region Europe

This module contains all typing needed to use OvhCloud **nutanix** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/nutanix.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/nutanix)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/nutanix
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiNutanix from '@ovh-api/nutanix';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /nutanix, GET /nutanix/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    nutanix: apiNutanix(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.nutanix.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
