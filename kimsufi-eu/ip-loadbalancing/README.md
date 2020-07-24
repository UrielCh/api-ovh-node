# Connector for OVHCloud service ip-loadbalancing

This module contains all typing needed to use OvhCloud ip-loadbalancing service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/ip-loadbalancing.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/ip-loadbalancing)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/ip-loadbalancing
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiIpLoadbalancing from '@ovh-kimsufi/ip-loadbalancing';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /ipLoadbalancing, GET /ipLoadbalancing/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ipLoadbalancing: apiIpLoadbalancing(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ipLoadbalancing.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````