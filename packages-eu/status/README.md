# OVHCloud API client for **status** region Europe

This module contains all typing needed to use OvhCloud **status** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/status)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/status
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiStatus from '@ovh-api/status';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /status, GET /status/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    status: apiStatus(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.status.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
