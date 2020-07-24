# Connector for OVHCloud service router

This module contains all typing needed to use OvhCloud router service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/router.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/router)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/router
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiRouter from '@ovh-kimsufi/router';

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