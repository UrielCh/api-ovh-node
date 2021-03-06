# OVHCloud API client for **license-windows** region Europe

This module contains all typing needed to use OvhCloud **license-windows** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/license-windows.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/license-windows)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/license-windows
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiLicenseWindows from '@ovh-soyoustart/license-windows';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /license/windows, GET /license/windows/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    licenseWindows: apiLicenseWindows(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.licenseWindows.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
