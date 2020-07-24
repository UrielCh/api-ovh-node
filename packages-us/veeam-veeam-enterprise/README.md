# OVHCloud API client for **veeam-veeam-enterprise** region USA

This module contains all typing needed to use OvhCloud **veeam-veeam-enterprise** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/veeam-veeam-enterprise.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/veeam-veeam-enterprise)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/veeam-veeam-enterprise
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiVeeamVeeamEnterprise from '@ovh-api-us/veeam-veeam-enterprise';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /veeam/veeamEnterprise, GET /veeam/veeamEnterprise/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    veeamVeeamEnterprise: apiVeeamVeeamEnterprise(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.veeamVeeamEnterprise.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
