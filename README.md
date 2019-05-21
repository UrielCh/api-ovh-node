# Use Ovh's Apis with TypeScript

@ovh-api/ip
[![NPM Version](https://img.shields.io/npm/v/@ovh-api/ip.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/ip)
@ovh-api/api
[![NPM Version](https://img.shields.io/npm/v/@ovh-api/api.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/api)

## Samples

### Interactive mode With no Credential.
```typescript
import { ApiIp } from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

const ovh = new Ovh({accessRules: 'GET /ip'});
const api = new ApiIp(ovh);

async function printIP() {
    return await api.get('/ip');
}

printIP().then(console.log)
```

### With Credential With TS Ovh api

Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me

```typescript
import { ApiIp } from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

const config = {
    appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovh = new Ovh(config);
async printIP() {
    return await api.get('/ip');
}
printIP().then(console.log)
```


### With Credential With the official Ovh api

Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me

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
async printIP() {
    return await api.get('/ip');
}
printIP().then(console.log)
```

