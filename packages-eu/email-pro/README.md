# OVHCloud API client for **email-pro** region Europe

This module contains all typing needed to use OvhCloud **email-pro** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/email-pro)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/email-pro
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiEmailPro from '@ovh-api/email-pro';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /email/pro, GET /email/pro/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailPro: apiEmailPro(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailPro.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
