# Connector for OVHCloud service horizon-view

This module contains all typing needed to use OvhCloud horizon-view service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/horizon-view.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/horizon-view)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/horizon-view
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiHorizonView from '@ovh-kimsufi/horizon-view';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /horizonView, GET /horizonView/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    horizonView: apiHorizonView(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.horizonView.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````