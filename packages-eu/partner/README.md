# OVHCloud API client for **partner** region Europe

This module contains all typing needed to use OvhCloud **partner** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/partner.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/partner)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/partner
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiPartner from '@ovh-api/partner';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /partner, GET /partner/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    partner: apiPartner(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.partner.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
