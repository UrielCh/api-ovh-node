# OVHCloud API client for **support** region USA

This module contains all typing needed to use OvhCloud **support** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/support.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/support)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/support
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiSupport from '@ovh-api-us/support';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /support, GET /support/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    support: apiSupport(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.support.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
