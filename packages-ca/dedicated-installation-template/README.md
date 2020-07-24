# Connector for OVHCloud service dedicated-installation-template

This module contains all typing needed to use OvhCloud dedicated-installation-template service, with hi-level IntelliSense / Code complession

[![NPM Version](https://img.shields.io/npm/v/@ovh-api-ca/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-api-ca/dedicated-installation-template)

## setup

With npm:
````bash
npm install --save @ovh-api/api
npm install --save @ovh-api-ca/me
npm install --save @ovh-api-ca/dedicated-installation-template
... Add all APIs you needs
````

## usage

````typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api-ca/me';
import apiDedicatedInstallationTemplate from '@ovh-api-ca/dedicated-installation-template';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optionnal cache certificat to disk
    accessRules: 'GET /dedicated/installationTemplate, GET /dedicated/installationTemplate/*, GET /me', // optionnal limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedInstallationTemplate: apiDedicatedInstallationTemplate(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedInstallationTemplate.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}

````