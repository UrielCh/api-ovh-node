# Connector for OVHCloud service cdn-website

This module contains all typing needed to use OvhCloud cdn-website service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/cdn-website.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/cdn-website)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/cdn-website
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiCdnWebsite from '@ovh-kimsufi/cdn-website';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /cdn/website, GET /cdn/website/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    cdnWebsite: apiCdnWebsite(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.cdnWebsite.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````