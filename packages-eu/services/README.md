# OVHCloud API client for **services** region Europe

This module contains all typing needed to use OvhCloud **services** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/services)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/services
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiServices from '@ovh-api/services';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /services, GET /services/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    services: apiServices(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.services.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
