# Connector for OVHCloud service cloud-d-b

This module contains all typing needed to use OvhCloud cloud-d-b service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/cloud-d-b.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cloud-d-b)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/cloud-d-b
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCloudDB from '@ovh-api/cloud-d-b';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cloudDB, GET /cloudDB/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cloudDB: apiCloudDB(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cloudDB.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````