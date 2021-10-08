# OVHCloud API client for **startup** region Canada

This module contains all typing needed to use OvhCloud **startup** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/startup.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/startup)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/startup
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiStartup from '@ovh-api-ca/startup';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /startup, GET /startup/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    startup: apiStartup(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.startup.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
