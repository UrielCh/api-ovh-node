# Connector for OVHCloud service dbaas-queue

This module contains all typing needed to use OvhCloud dbaas-queue service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-queue.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-queue)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dbaas-queue
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDbaasQueue from '@ovh-api-us/dbaas-queue';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dbaas/queue, GET /dbaas/queue/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasQueue: apiDbaasQueue(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasQueue.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````