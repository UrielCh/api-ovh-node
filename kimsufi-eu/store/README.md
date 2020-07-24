# Connector for OVHCloud service store

This module contains all typing needed to use OvhCloud store service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/store.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/store)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/store
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiStore from '@ovh-kimsufi/store';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /store, GET /store/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    store: apiStore(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.store.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````