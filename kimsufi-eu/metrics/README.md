# Connector for OVHCloud service metrics

This module contains all typing needed to use OvhCloud metrics service, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/metrics.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/metrics)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/metrics
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiMetrics from '@ovh-kimsufi/metrics';

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