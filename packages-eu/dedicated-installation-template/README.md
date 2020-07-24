# OVHCloud API client for **dedicated-installation-template** region Europe

This module contains all typing needed to use OvhCloud **dedicated-installation-template** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/dedicated-installation-template.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/dedicated-installation-template)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-api/me
npm install --save @ovh-api/dedicated-installation-template
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-api/me';
import apiDedicatedInstallationTemplate from '@ovh-api/dedicated-installation-template';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/installationTemplate, GET /dedicated/installationTemplate/*, GET /me', // optional limit the requested privileges.
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
```
