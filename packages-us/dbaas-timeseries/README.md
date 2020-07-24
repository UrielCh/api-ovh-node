# Connector for OVHCloud service dbaas-timeseries

This module contains all typing needed to use OvhCloud dbaas-timeseries service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/dbaas-timeseries.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/dbaas-timeseries)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/dbaas-timeseries
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiDbaasTimeseries from '@ovh-api-us/dbaas-timeseries';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dbaas/timeseries, GET /dbaas/timeseries/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dbaasTimeseries: apiDbaasTimeseries(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dbaasTimeseries.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````