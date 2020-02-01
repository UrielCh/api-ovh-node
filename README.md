# Use Ovh's Apis with TypeScript

## main core api

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/api.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/api) *Api engine*
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/common.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/common) *common interface*

## some modules packages

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/me.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/me) *Api ovh europe Me*
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/cloud) *Api ovh europe cloud*
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/cloud.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/domain) *Api ovh europe domain*
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/order.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/order) *Api ovh europe order*

## samples

* [![NPM Version](https://img.shields.io/npm/v/ovh-vps-config-failover.svg?style=flat)](https://www.npmjs.org/package/ovh-vps-config-failover) *ovh-vps-config-failover* Configure the IP failover of your vps
* [![NPM Version](https://img.shields.io/npm/v/ovh-bill-importer.svg?style=flat)](https://www.npmjs.org/package/ovh-bill-importer) *ovh-bill-importer* Import all ovh billing data
* [![NPM Version](https://img.shields.io/npm/v/ovh-dump-telephony.svg?style=flat)](https://www.npmjs.org/package/ovh-dump-telephony) *ovh-dump-telephony* simply dump ovh telephony servicers
* [![NPM Version](https://img.shields.io/npm/v/ovh-telephony-events.svg?style=flat)](https://www.npmjs.org/package/ovh-telephony-events) *ovh-telephony-events* capture Ovh events and inject them to a redis channel.
* [![NPM Version](https://img.shields.io/npm/v/ovh-dynhost2.svg?style=flat)](https://www.npmjs.org/package/ovh-dynhost2) *ovh-dynhost2* client that maintains a dynamique host to your dynamique Ip.

## Samples

Find all samples [here](https://github.com/UrielCh/api-ovh-node/tree/master/samples)

### Interactive mode with no Credential

Print account information of your OVH-account

```typescript
import ApiMe from '@ovh-api/me';
import Ovh from '@ovh-api/api';

const ovh = new Ovh({accessRules: 'GET /ip'});
const api = ApiMe(ovh);
api.get('/me').then(console.log)
// or
api.$get().then(console.log)
```

You will be asked to authorized an new issued certificat.

### Same thing With credential with a certificate

Create your first application tokens here: [here](https://api.ovh.com/createToken/?GET=/me)

```typescript
import ApiMe from '@ovh-api/me';
import Ovh from '@ovh-api/api';

const config = {
    appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovh = new Ovh(config);
const api = ApiMe(ovh);
api.get('/me').then(console.log);
// or
api.$get().then(console.log);
```

For more samples see [samples](https://github.com/UrielCh/api-ovh-node/tree/master/code/sample)
