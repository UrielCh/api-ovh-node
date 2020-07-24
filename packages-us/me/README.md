# Connector for OVHCloud service me

This module contains all typing needed to use OvhCloud me service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/me)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /me, GET /me/*', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
}

const test = async () => {
    const data = await api.me.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````