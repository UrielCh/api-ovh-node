# Connector for OVHCloud service services

This module contains all typing needed to use OvhCloud services service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/services)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/services
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiServices from '@ovh-api-us/services';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /services, GET /services/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    services: apiServices(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.services.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````