# OVHCloud API client for **email-pro** region Europe

This module contains all typing needed to use OvhCloud **email-pro** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-pro.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-pro)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-pro
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailPro from '@ovh-kimsufi/email-pro';

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
