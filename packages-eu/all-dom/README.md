# Connector for OVHCloud service all-dom

This module contains all typing needed to use OvhCloud all-dom service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/all-dom.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/all-dom)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/all-dom
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiAllDom from '@ovh-api/all-dom';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /allDom, GET /allDom/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    allDom: apiAllDom(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.allDom.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````