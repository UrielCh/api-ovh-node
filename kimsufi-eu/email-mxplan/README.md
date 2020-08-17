# OVHCloud API client for **email-mxplan** region Europe

This module contains all typing needed to use OvhCloud **email-mxplan** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-mxplan.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-mxplan)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-mxplan
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailMxplan from '@ovh-kimsufi/email-mxplan';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /email/mxplan, GET /email/mxplan/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailMxplan: apiEmailMxplan(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailMxplan.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
