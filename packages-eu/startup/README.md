# OVHCloud API client for **startup** region Europe

This module contains all typing needed to use OvhCloud **startup** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/startup.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/startup)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/startup
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiStartup from '@ovh-api/startup';

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
