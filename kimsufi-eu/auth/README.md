# OVHCloud API client for **auth** region Europe

This module contains all typing needed to use OvhCloud **auth** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/auth)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/auth
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiAuth from '@ovh-kimsufi/auth';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /auth, GET /auth/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    auth: apiAuth(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.auth.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
