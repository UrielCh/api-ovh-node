# OVHCloud API client for **contact** region Europe

This module contains all typing needed to use OvhCloud **contact** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/contact.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/contact)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/contact
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiContact from '@ovh-kimsufi/contact';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /contact, GET /contact/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    contact: apiContact(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.contact.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```
