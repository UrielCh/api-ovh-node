# Connector for OVHCloud service ms-services

This module contains all typing needed to use OvhCloud ms-services service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/ms-services.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/ms-services)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/ms-services
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiMsServices from '@ovh-api-ca/ms-services';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /msServices, GET /msServices/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    msServices: apiMsServices(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.msServices.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````