import "reflect-metadata";
import ApiMe, { nichandle, billing } from '@ovh-api/me'
import ApiTel, { telephony } from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import path from 'path'
import program from 'commander'
import Bluebird from 'bluebird'
import { StoreMysql } from "./StoreMysql";

program
  .version('1.0.0')
  .parse(process.argv)



async function main() {
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*, GET /telephony, GET /telephony/*`, certCache: 'token.json' };
  let ovh = new Ovh(param)
  const apiPhone = ApiTel(ovh)
  const store = new StoreMysql();
  // const apiMe = ApiMe(ovh)
  // const me: nichandle.Nichandle = await apiMe.get('/me')()
  // const root = '.';
  // let dest = path.join(root, me.nichandle + '.csv')
  // const store = new StoreCsv(dest)
  await store.init();
  const billingAccounts = await apiPhone.$get();
  console.log('billingAccounts:', billingAccounts);
  await Bluebird.map(billingAccounts, async billingAccount => {
    let services = [] as { type: 'number' | 'line', name: string }[];
    try {
      const lines = await apiPhone.$(billingAccount).line.$get();
      const numbers = await apiPhone.$(billingAccount).number.$get();
      services.push(...lines.map(s => ({ type: 'line' as 'line', name: s })))
      services.push(...numbers.map(s => ({ type: 'number' as 'number', name: s })));
    } catch (e) {
      console.log(`billing: ${billingAccount}: ${e}`);
      return;
    }
    // console.log(`billing:${billingAccount} contains ${lines.length} lines`);
    await Bluebird.map(services, async service => {
      let calls = await apiPhone.$(billingAccount).service.$(service.name).voiceConsumption.$get();
      let calls2 = calls;
      if (calls2.length) {
        calls2 = await store.filter(billingAccount, service.name, calls);
        console.log(`billing: ${billingAccount} contains ${services.length} lines ${calls.length} Call ${calls2.length} new`);
      }
      await Bluebird.map(calls2, async call => {
        try {
          const data = await apiPhone.$(billingAccount).service.$(service.name).voiceConsumption.$(call).$get();
          await store.add(billingAccount, service.name, data, service.type);
        } catch (e) { }
      }, { concurrency: 10 });
    }, { concurrency: 4 });
  }, { concurrency: 4 })
  store.close();
}
main()