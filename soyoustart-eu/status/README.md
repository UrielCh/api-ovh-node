# Connector for OVHCloud service status

This module contains all typing needed to use OvhCloud status service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/status.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/status)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/status
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiStatus from '@ovh-soyoustart/status';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /status, GET /status/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    status: apiStatus(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.status.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````