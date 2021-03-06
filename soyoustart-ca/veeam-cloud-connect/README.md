# OVHCloud API client for **veeam-cloud-connect** region Canada

This module contains all typing needed to use OvhCloud **veeam-cloud-connect** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart-ca/veeam-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart-ca/veeam-cloud-connect)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart-ca/me
npm install --save @ovh-soyoustart-ca/veeam-cloud-connect
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart-ca/me';
import apiVeeamCloudConnect from '@ovh-soyoustart-ca/veeam-cloud-connect';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /veeamCloudConnect, GET /veeamCloudConnect/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    veeamCloudConnect: apiVeeamCloudConnect(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.veeamCloudConnect.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
