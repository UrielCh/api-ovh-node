# Connector for OVHCloud service ssl-gateway

This module contains all typing needed to use OvhCloud ssl-gateway service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/ssl-gateway.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ssl-gateway)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/ssl-gateway
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiSslGateway from '@ovh-api/ssl-gateway';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /sslGateway, GET /sslGateway/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    sslGateway: apiSslGateway(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.sslGateway.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````