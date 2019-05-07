# Use Ovh's Apis with TypeScript

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/common.svg?style=flat)](https://www.npmjs.org/package/@ovh-api/)

```typescript
import { ApiIp } from '@ovh-api/ip';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = {
    appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};

async printIP() {
    const ips = await api.get('/ip');
    console.log(ips)
}
```

