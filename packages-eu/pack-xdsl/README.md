# OVHCloud API client for **pack-xdsl** region Europe

This module contains all typing needed to use OvhCloud **pack-xdsl** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/pack-xdsl.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/pack-xdsl)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/pack-xdsl
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiPackXdsl from '@ovh-api/pack-xdsl';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /pack/xdsl, GET /pack/xdsl/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    packXdsl: apiPackXdsl(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.packXdsl.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
