# Connector for OVHCloud service ip

This module contains all typing needed to use OvhCloud ip service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/ip
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiIp from '@ovh-api/ip';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /ip, GET /ip/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    ip: apiIp(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.ip.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````