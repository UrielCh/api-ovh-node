# OVHCloud API client for **partners** region Europe

This module contains all typing needed to use OvhCloud **partners** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/partners.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/partners)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/partners
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiPartners from '@ovh-soyoustart/partners';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /partners, GET /partners/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    partners: apiPartners(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.partners.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
