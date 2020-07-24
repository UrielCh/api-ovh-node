# Connector for OVHCloud service ovh-cloud-connect

This module contains all typing needed to use OvhCloud ovh-cloud-connect service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ovh-cloud-connect.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ovh-cloud-connect)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/ovh-cloud-connect
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiOvhCloudConnect from '@ovh-kimsufi/ovh-cloud-connect';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /ovhCloudConnect, GET /ovhCloudConnect/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ovhCloudConnect: apiOvhCloudConnect(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ovhCloudConnect.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````