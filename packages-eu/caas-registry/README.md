# Connector for OVHCloud service caas-registry

This module contains all typing needed to use OvhCloud caas-registry service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/caas-registry.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/caas-registry)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/caas-registry
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiCaasRegistry from '@ovh-api/caas-registry';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /caas/registry, GET /caas/registry/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    caasRegistry: apiCaasRegistry(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.caasRegistry.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````