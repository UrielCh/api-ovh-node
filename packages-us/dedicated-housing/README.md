# OVHCloud API client for **dedicated-housing** region USA

This module contains all typing needed to use OvhCloud **dedicated-housing** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dedicated-housing.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dedicated-housing)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dedicated-housing
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDedicatedHousing from '@ovh-api-us/dedicated-housing';

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
