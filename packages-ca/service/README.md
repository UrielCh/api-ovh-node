# Connector for OVHCloud service service

This module contains all typing needed to use OvhCloud service service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/service.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/service)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/service
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiService from '@ovh-api-ca/service';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /service, GET /service/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    service: apiService(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.service.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````