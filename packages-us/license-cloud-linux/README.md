# OVHCloud API client for **license-cloud-linux** region USA

This module contains all typing needed to use OvhCloud **license-cloud-linux** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/license-cloud-linux.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/license-cloud-linux)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/license-cloud-linux
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiLicenseCloudLinux from '@ovh-api-us/license-cloud-linux';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/cloudLinux, GET /license/cloudLinux/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseCloudLinux: apiLicenseCloudLinux(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseCloudLinux.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
