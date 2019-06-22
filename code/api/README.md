# @ovh-api

[![NPM Version](https://img.shields.io/npm/v/@ovh-api/common.svg?style=api)](https://www.npmjs.org/package/@ovh-api/api)

## interactive usage:

```typescript
import ApiIp from '@ovh-api/ip';
import Ovh from '@ovh-api/api';
const ovh = new Ovh({accessRules: 'GET /ip'});
const apiIp = new ApiIp(ovh);
apiIp.get('/ip').then(console.log);
```
