# OVHCloud API client for **telephony** region Europe

This module contains all typing needed to use OvhCloud **telephony** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/telephony.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/telephony)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/telephony
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiTelephony from '@ovh-api/telephony';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /telephony, GET /telephony/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    telephony: apiTelephony(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.telephony.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
