# Connector for OVHCloud service distribution-image

This module contains all typing needed to use OvhCloud distribution-image service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/distribution-image.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/distribution-image)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/distribution-image
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiDistributionImage from '@ovh-api/distribution-image';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /distribution/image, GET /distribution/image/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    distributionImage: apiDistributionImage(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.distributionImage.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````