# Connector for OVHCloud service order

This module contains all typing needed to use OvhCloud order service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/order)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/order
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiOrder from '@ovh-soyoustart/order';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /order, GET /order/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    order: apiOrder(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.order.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````