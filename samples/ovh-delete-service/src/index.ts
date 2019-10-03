import ApiTel, { telephony } from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import program from 'commander'
import Bluebird from 'bluebird';
import fse from 'fs-extra';

program
  .version('1.0.0')
  .parse(process.argv)

async function main() {
  let todelete = fse.readFileSync('delete.txt', { encoding: 'utf-8' })
    .split(/[\r\n]+/)
    .map((s: string) => s.replace(/ /g, ''))
    .map((s: string) => s.replace(/^0([0-9]{9})$/, '0033$1'));

  console.log('todelete:' + todelete.length);

  let param: OvhParams = { accessRules: `GET /telephony, GET /telephony/*, DELETE /telephony/*`, certCache: '../../token2.json' };
  console.log('cert Ok');
  let ovh = new Ovh(param)
  const apiPhone = ApiTel(ovh)

  // index groups
  const billingAccounts = await apiPhone.$get();
  console.log('billingAccounts:', billingAccounts);
  let services = {} as { [key: string]: { billingAccount: string, type: 'number' | 'line', name: string } };

  await Bluebird.map(billingAccounts, async (billingAccount: string) => {
    try {
      console.log('group: ' + billingAccount)
      const lines = await apiPhone.$(billingAccount).line.$get();
      const numbers = await apiPhone.$(billingAccount).number.$get();
      lines.forEach((name: string) => services[name] = { billingAccount, type: 'line' as 'line', name });
      numbers.forEach((name: string) => services[name] = { billingAccount, type: 'number' as 'number', name });
    } catch (e) {
      console.log(`billing: ${billingAccount}: ${e}`);
      return;
    }
  }, { concurrency: 8 });

  let match = 0;
  await Bluebird.map(todelete, async (servicename: string) => {
    const info = services[servicename];
    if (!info) {
      // console.log(`no Service ${servicename}`);
      return;
    }
    match++;
    try {
      console.log(`deleting Service ${info.billingAccount}/${servicename}`);
      await apiPhone.$(info.billingAccount).service.$(servicename).$delete({ reason: 'addresseMove' })
    } catch (e) {
      // console.log(e);
    }
  }, { concurrency: 8 })
  console.log(`${match} service deleted`)
}
main()