import "reflect-metadata";
import ApiTel from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import program from 'commander'
import Bluebird from 'bluebird'
import { StoreMysql } from "./StoreMysql";
import { ConnectionOptions, createConnections } from "typeorm";
import { getVoiceConsumptions, getVoiceConsumption } from "./retry";

Bluebird.config({ 
  warnings: true,
  // longStackTraces: true
});

program
  .version('1.0.0')
  .parse(process.argv)

async function main() {
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*, GET /telephony, GET /telephony/*`, certCache: 'token.json' };
  let ovh = new Ovh(param)
  const apiPhone = ApiTel(ovh)
  const store = new StoreMysql();
  let added = 0;
  let error = 0;
  // const apiMe = ApiMe(ovh)
  // const me: nichandle.Nichandle = await apiMe.get('/me')()
  // const root = '.';
  // let dest = path.join(root, me.nichandle + '.csv')
  // const store = new StoreCsv(dest)

  const db: ConnectionOptions = {
    host: '127.0.0.1', username: 'test', database: "test", password: 'test', type: "mysql", "synchronize": true, "entities": [
      "src/entity/**/*.ts"
    ],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  };
  await store.init(db);
  const billingAccounts = await apiPhone.$get();
  console.log(billingAccounts.length + ' billingAccounts:', billingAccounts);
  const cnts = { groups: 0, services: 0, calls: 0 }
  const totals = { groups: 0, services: 0, calls: 0 }
  const threads = { groups: 0, services: 0, calls: 0 }

  let prevText = ''
  const timer = setInterval(() => {
    let text = `${new Date().toISOString()} Groups: ${cnts.groups}/${totals.groups}\tservices:${cnts.services}/${totals.services}\tcalls:${cnts.calls}/${totals.calls}\tThreads:(${threads.groups}/${threads.services}/${threads.calls}) Added:${added}, Error:${error}`;
    if (text != prevText) {
      prevText = text;
      console.log(text);
    }
  }, 10000);

  totals.groups += billingAccounts.length;
  await Bluebird.map(billingAccounts, async billingAccount => {
    threads.groups++;
    cnts.groups++;
    let services = [] as { type: 'number' | 'line', name: string }[];

    try {
      const lines = await apiPhone.$(billingAccount).line.$get();
      const numbers = await apiPhone.$(billingAccount).number.$get();
      services.push(...lines.map(s => ({ type: 'line' as 'line', name: s })))
      services.push(...numbers.map(s => ({ type: 'number' as 'number', name: s })));
    } catch (e) {
      console.log(`Loading billing: ${billingAccount}:`, e);
      return;
    }
    // console.log(`billing:${billingAccount} contains ${lines.length} lines`);
    totals.services += services.length;
    await Bluebird.map(services, async service => {
      threads.services++;
      cnts.services++;
      let calls: number[] = [];
      let calls2 = calls;
      try {
        calls = await getVoiceConsumptions(apiPhone, billingAccount, service.name, undefined);
        calls2 = calls;
        if (calls2.length) {
          calls2 = await store.filter(billingAccount, service.name, calls);
        }
      } catch (e) {
        console.log(`getVoiceConsumption  ${billingAccount}/${service.name} Failed `, e);
      }
      totals.calls += calls2.length;
      await Bluebird.map(calls2, async call => {
        threads.calls++;
        cnts.calls++;
        const data = await getVoiceConsumption(apiPhone, billingAccount, service.name, call);
        if (data) {
          await store.add(billingAccount, service.name, data, service.type);
          added++;
        } else {
          error++;
        }
        threads.calls--;
      }, { concurrency: 10 });
      threads.services--;
    }, { concurrency: 8 });
    threads.groups--;
  }, { concurrency: 3 })
  store.close();
  clearInterval(timer);
}
main()