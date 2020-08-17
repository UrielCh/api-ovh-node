# OVHCloud API client for **freefax** region Europe

This module contains all typing needed to use OvhCloud **freefax** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/freefax.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/freefax)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/freefax
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiFreefax from '@ovh-soyoustart/freefax';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /freefax, GET /freefax/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    freefax: apiFreefax(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.freefax.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
