# Connector for OVHCloud service auth

This module contains all typing needed to use OvhCloud auth service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/auth.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/auth)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/auth
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiAuth from '@ovh-soyoustart/auth';

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