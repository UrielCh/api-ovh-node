# Connector for OVHCloud service cloud

This module contains all typing needed to use OvhCloud cloud service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/cloud)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/cloud
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiCloud from '@ovh-soyoustart/cloud';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cloud, GET /cloud/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cloud: apiCloud(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cloud.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````