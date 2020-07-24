# Connector for OVHCloud service telephony

This module contains all typing needed to use OvhCloud telephony service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/telephony.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/telephony)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/telephony
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiTelephony from '@ovh-kimsufi/telephony';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /telephony, GET /telephony/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    telephony: apiTelephony(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.telephony.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````