# Connector for OVHCloud service email-exchange

This module contains all typing needed to use OvhCloud email-exchange service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-exchange.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-exchange)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-exchange
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailExchange from '@ovh-kimsufi/email-exchange';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /email/exchange, GET /email/exchange/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailExchange: apiEmailExchange(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailExchange.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````