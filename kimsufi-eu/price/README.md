# Connector for OVHCloud service price

This module contains all typing needed to use OvhCloud price service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/price.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/price)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/price
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiPrice from '@ovh-kimsufi/price';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /price, GET /price/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    price: apiPrice(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.price.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````