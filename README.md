# Use Ovh's Apis with TypeScript

* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/api.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/api) *Api engine*
* [![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip) *All api helper*

## Samples

### Interactive mode With no Credential

Print account information of your OVH-account

```typescript
import { ApiMe } from '@ovh-api/me';
import Ovh from '@ovh-api/api';

const ovh = new Ovh({accessRules: 'GET /ip'});
const api = new ApiMe(ovh);
api.get('/me').then(console.log)
```

You will be asked to authorized an new issued certificat.

### Same thing With credential with a certificate

Create your first application tokens here: [here](https://api.ovh.com/createToken/?GET=/me)

```typescript
import { ApiMe } from '@ovh-api/me';
import Ovh from '@ovh-api/api';

const config = {
    appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovh = new Ovh(config);
const api = new ApiMe(ovh);
api.get('/me').then(console.log);
```

### Same thing with a credential using the [official Ovh api](https://github.com/ovh/node-ovh)

Create your first application tokens here: [here](https://api.ovh.com/createToken/?GET=/me)

```typescript
import { ApiIp } from '@ovh-api/ip';
import Ovh from require(ovh);

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = {
    appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovh = new Ovh(config);
const api = new ApiMe(ovh);
api.get('/me').then(console.log);
```

