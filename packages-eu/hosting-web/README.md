# OVHCloud API client for **hosting-web** region Europe

This module contains all typing needed to use OvhCloud **hosting-web** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/hosting-web.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/hosting-web)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/hosting-web
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiHostingWeb from '@ovh-api/hosting-web';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /hosting/web, GET /hosting/web/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    hostingWeb: apiHostingWeb(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.hostingWeb.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
