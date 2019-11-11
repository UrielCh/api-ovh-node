// need the followig deps:
// npm install @ovh-api/api @ovh-api/vps fs-extra

import ApiTelephony from '@ovh-api/telephony'
import Ovh from '@ovh-api/api'
import Bluebird from 'bluebird'

async function main() {
  let ovh = new Ovh({ accessRules: `GET /telephony, GET /telephony/*` });
  const api = ApiTelephony(ovh);
  const billings = await api.$get();
  let data = [] as any[];
  await Bluebird.map(billings, async (billing) => {
    try {
      const numbers = await api.$(billing).number.$get();
      for (const number of numbers) {
        data.push([billing, number]);
      }
    } catch (e) { }
  }, { concurrency: 5 });
  return data.map(([billing, number]) => `${billing}\t${number}`).join('\n');
}
main().then(console.log, console.error);