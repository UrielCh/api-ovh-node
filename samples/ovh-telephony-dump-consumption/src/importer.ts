import { Telephony } from '@ovh-api/telephony'
import { StoreMysql } from "./StoreMysql";
import { getVoiceConsumptions, getVoiceConsumption } from "./retry";
import Bluebird from 'bluebird'

export interface VOIPService {
  billingAccount: string;
  type: 'number' | 'line';
  name: string;
}

async function getAllService(apiPhone: Telephony): Promise<VOIPService[]> {
  const list: VOIPService[] = [];
  const billingAccounts = await apiPhone.$get();
  await Bluebird.map(billingAccounts, async billingAccount => {
    try {
      const lines = await apiPhone.$(billingAccount).line.$get();
      const numbers = await apiPhone.$(billingAccount).number.$get();

      lines.forEach(name => list.push({ billingAccount, type: 'line', name }));
      numbers.forEach(name => list.push({ billingAccount, type: 'line', name }));
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

  const services = await getAllService(apiPhone);
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