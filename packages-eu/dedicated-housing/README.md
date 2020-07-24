# OVHCloud API client for **dedicated-housing** region Europe

This module contains all typing needed to use OvhCloud **dedicated-housing** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-housing)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/dedicated-housing
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiDedicatedHousing from '@ovh-api/dedicated-housing';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/housing, GET /dedicated/housing/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedHousing: apiDedicatedHousing(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedHousing.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
