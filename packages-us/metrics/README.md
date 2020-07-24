# Connector for OVHCloud service metrics

This module contains all typing needed to use OvhCloud metrics service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-us/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-us/metrics)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-us/me
npm install --save @ovh-api-us/metrics
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-us/me';
import apiMetrics from '@ovh-api-us/metrics';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /metrics, GET /metrics/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    metrics: apiMetrics(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.metrics.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````