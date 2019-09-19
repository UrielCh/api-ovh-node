import { EOL } from 'os'
import fse, { WriteStream } from 'fs-extra'
import ApiMe, { nichandle, billing } from '@ovh-api/me'
import ApiTel, { telephony } from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import path from 'path'
import program from 'commander'
import Bluebird from 'bluebird'

program
  .version('1.0.0')
  .parse(process.argv)

const fields = 'called, calling, consumptionId, countrySuffix, designation, destinationType, dialed, duration, hangupNature, planType, priceWithoutTax, wayType'.split(', ');

class StoreCsv {
  fd: WriteStream;
  cnt = 0;
  constructor(dest: string) {
    this.fd = fse.createWriteStream(dest, { flags: 'w', encoding: 'utf-8' });
  }
  async init() {
    this.fd.write('creationDatetime;')
    this.fd.write(fields.join(';'))
    this.fd.write(EOL)
  }

  async add(data: telephony.VoiceConsumption) {
    let txt = data.creationDatetime;
    for (const k of fields) {
      const value = (data as any)[k];
      txt += ';'
      if (typeof value == 'string')
        txt += value.trim();
      else if (value.text)
        txt += value.text;
      else
        txt += JSON.stringify(value);
    }
    this.fd.write(txt + EOL);
    if (++this.cnt % 1000 === 0) {
      console.log(`${this.cnt / 1000} ${txt}`);
    }
  }

  async filter(billing: string, serviceName: string, calls: number[]) {
    return calls;
  }

  async close() {
    this.fd.close();
  }
}

async function main() {
  const root = '.';
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*, GET /telephony, GET /telephony/*`, certCache: 'token.json' };
  let ovh = new Ovh(param)
  const apiMe = ApiMe(ovh)
  const apiPhone = ApiTel(ovh)
  const me: nichandle.Nichandle = await apiMe.get('/me')()
  let dest = path.join(root, me.nichandle + '.csv')

  const store = new StoreCsv(dest)
  await store.init();
  const billings = await apiPhone.$get();
  console.log('billings:', billings);
  await Bluebird.map(billings, async billing => {
    let lines = [] as string[];
    try {
      lines = await apiPhone.$(billing).line.$get();
    } catch (e) {
      console.log('billing:' + billing + ': ' + e);
      return;
    }
    console.log('billing:' + billing + ' contains ' + lines.length + ' lines');
    await Bluebird.map(lines, async line => {
      let calls = await apiPhone.$(billing).service.$(line).voiceConsumption.$get();
      calls = await store.filter(billing, line, calls);
      await Bluebird.map(calls, async call => {
        const data = await apiPhone.$(billing).service.$(line).voiceConsumption.$(call).$get();
        await store.add(data);
      }, { concurrency: 4 });
    }, { concurrency: 4 });
  }, { concurrency: 4 })
  store.close();
}
main()