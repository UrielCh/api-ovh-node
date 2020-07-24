# Connector for OVHCloud service metrics

This module contains all typing needed to use OvhCloud metrics service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/metrics)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/metrics
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiMetrics from '@ovh-api/metrics';

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