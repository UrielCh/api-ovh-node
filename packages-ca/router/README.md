# Connector for OVHCloud service router

This module contains all typing needed to use OvhCloud router service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/router)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/router
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiRouter from '@ovh-api-ca/router';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /router, GET /router/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    router: apiRouter(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.router.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````