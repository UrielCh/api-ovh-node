import { Telephony } from '@ovh-api/telephony'
import { StoreMysql } from "./StoreMysql";
import { getVoiceConsumptions, getVoiceConsumption } from "./retry";
import Bluebird from 'bluebird'
import program from 'commander'

export interface VOIPService {
  billingAccount: string;
  type: 'number' | 'line';
  name: string;
}
/**
 * import all services from all groups
 */
async function getAllService(apiPhone: Telephony, options?: {
  groupSelection?: Set<string>
  serviceSelection?: Set<string>
}): Promise<VOIPService[]> {
  options = options || {};
  const { groupSelection } = options;
  let { serviceSelection } = options;
  const list: VOIPService[] = [];
  let billingAccounts = await apiPhone.$get();
  if (groupSelection && groupSelection.size) {
    billingAccounts = billingAccounts
      .filter(g => groupSelection.has(g));
  }
  if (serviceSelection && !serviceSelection.size) {
    serviceSelection = undefined;
  }
  await Bluebird.map(billingAccounts, async billingAccount => {
    try {
      let lines = await apiPhone.$(billingAccount).line.$get();
      let numbers = await apiPhone.$(billingAccount).number.$get();
      if (serviceSelection) {
        lines = lines.filter(n => (serviceSelection as Set<string>).has(n));
        numbers = numbers.filter(n => (serviceSelection as Set<string>).has(n));
      }
      lines.forEach(name => list.push({ billingAccount, type: 'line', name }));
      numbers.forEach(name => list.push({ billingAccount, type: 'number', name }));
    } catch (e) { // service do not exists
      console.log(`Loading billing: ${billingAccount}:`, e);
      return;
    }
  }, { concurrency: 40 });
  return list;
}

export async function importAll(apiPhone: Telephony, store: StoreMysql) {
  let added = 0;
  let error = 0;
  // const billingAccounts = await apiPhone.$get();
  // console.log(billingAccounts.length + ' billingAccounts:', billingAccounts);
  const cnts = { services: 0, calls: 0 }
  const totals = { services: 0, calls: 0 }
  const threads = { services: 0, calls: 0 }

  let prevText = ''
  const timer = setInterval(() => {
    let text = `${new Date().toISOString()} calls:${cnts.calls}/${totals.calls}\tThreads:(${threads.services}/${threads.calls}) Added:${added}, Error:${error}`;
    if (text != prevText) {
      prevText = text;
      console.log(text);
    }
  }, 10000);

  const services = await getAllService(apiPhone, {
    groupSelection: program.billing,
    serviceSelection: program.service
  });
  cnts.services = services.length;
  await Bluebird.map(services, async ({ billingAccount, type, name }) => {
    threads.services++;
    let calls: number[] = [];
    try {
      calls = await getVoiceConsumptions(apiPhone, billingAccount, name);
      calls = await store.filter(billingAccount, name, calls);
    } catch (e) {
      console.error(`FATAL getVoiceConsumption  ${billingAccount}/${name} Failed May need a retry`, e);
    }
    totals.calls += calls.length;
    await Bluebird.map(calls, async call => {
      threads.calls++;
      cnts.calls++;
      const data = await getVoiceConsumption(apiPhone, billingAccount, name, call);
      if (data) {
        await store.add(billingAccount, name, data, type);
        added++;
      } else {
        error++;
      }
      threads.calls--;
    }, { concurrency: 20 });
    threads.services--;
  }, { concurrency: 20 });
  clearInterval(timer);
  // await store.close();
}