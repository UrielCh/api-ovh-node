# OVHCloud API client for **partner** region Canada

This module contains all typing needed to use OvhCloud **partner** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/partner.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/partner)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/partner
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiPartner from '@ovh-api-ca/partner';

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
