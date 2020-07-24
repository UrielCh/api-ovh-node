# Connector for OVHCloud service analytics

This module contains all typing needed to use OvhCloud analytics service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/analytics.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/analytics)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/analytics
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiAnalytics from '@ovh-soyoustart/analytics';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /analytics, GET /analytics/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    analytics: apiAnalytics(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.analytics.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````