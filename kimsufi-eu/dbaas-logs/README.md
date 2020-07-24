# Connector for OVHCloud service dbaas-logs

This module contains all typing needed to use OvhCloud dbaas-logs service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/dbaas-logs.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/dbaas-logs)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/dbaas-logs
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiDbaasLogs from '@ovh-kimsufi/dbaas-logs';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dbaas/logs, GET /dbaas/logs/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasLogs: apiDbaasLogs(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasLogs.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````