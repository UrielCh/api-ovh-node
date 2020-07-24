# Connector for OVHCloud service auth

This module contains all typing needed to use OvhCloud auth service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/auth)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/auth
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiAuth from '@ovh-api-us/auth';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /auth, GET /auth/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    auth: apiAuth(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.auth.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````