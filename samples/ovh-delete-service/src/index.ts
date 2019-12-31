import ApiTel, { telephony } from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import program from 'commander'
import Bluebird from 'bluebird';
import fse from 'fs-extra';

// ts-node src/index.ts -d delete.txt -k keep.txt


const { version } = require('../package.json');

program
  .version(version)
  .option('--cancel', "cancel resiliation")
  .option('-d, --delete <file>', "file containing services to delete")
  .option('-k, --keep <file>', "file containing services to keep")
  .parse(process.argv);

async function main() {
  if (!program.delete) {
    console.log('delete source file must be provided');
    return;
  }
  let toDelete = fse.readFileSync(program.delete, { encoding: 'utf-8' })
    .split(/[\r\n]+/)
    .map((s: string) => s.replace(/ /g, ''))
    .map((s: string) => s.replace(/^0([0-9]{9})$/, '0033$1'));
  console.log('toDelete:' + toDelete.length);

  if (program.keep) {
    let toKeep = fse.readFileSync(program.keep, { encoding: 'utf-8' })
      .split(/[\r\n]+/)
      .map((s: string) => s.replace(/ /g, ''))
      .map((s: string) => s.replace(/^\+./, '00'))
      .map((s: string) => s.replace(/^0([0-9]{9})$/, '0033$1'));
    let toKeepSet = new Set(toKeep);
    console.log('toKeep:' + toKeep.length);
    toDelete = toDelete.filter(f => !toKeepSet.has(f));
    console.log('filtred toDelete:' + toDelete.length);
  }
  if (program.cancel)
    console.log('All matching termination will be canceled');
  let param: OvhParams = { accessRules: `GET /telephony, GET /telephony/*, DELETE /telephony/*`, certCache: '../../token2.json' };
  console.log('cert Ok');
  let ovh = new Ovh(param)
  const apiPhone = ApiTel(ovh)

  // index groups
  const billingAccounts = await apiPhone.$get();
  console.log('billingAccounts:', billingAccounts);
  let services = {} as { [key: string]: { billingAccount: string, type: 'number' | 'line', name: string } };
  let [nbLine, nbNumber] = [0, 0]
  await Bluebird.map(billingAccounts, async (billingAccount: string) => {
    try {
      const lines = await apiPhone.$(billingAccount).line.$get();
      const numbers = await apiPhone.$(billingAccount).number.$get();
      nbLine += lines.length;
      nbNumber += numbers.length;
      lines.forEach((name: string) => services[name] = { billingAccount, type: 'line' as 'line', name });
      numbers.forEach((name: string) => services[name] = { billingAccount, type: 'number' as 'number', name });
      if (lines.length == 0 && numbers.length == 0)
        return;
      let msg = `group: ${billingAccount} contains`;
      if (numbers.length)
        msg += ` ${numbers.length} numbers`;
      if (lines.length)
        msg += ` ${lines.length} lines`;
      console.log(msg);
    } catch (e) {
      if (e !== '404: This service does not exist')
        console.log(`billing: ${billingAccount}: ${e}`);
      return;
    }
  }, { concurrency: 8 });
  console.log(`total Line:${nbLine} total Number:${nbNumber}`);
  let match = 0;
  await Bluebird.map(toDelete, async (servicename: string) => {
    const info = services[servicename];
    if (!info) {
      // console.log(`no Service ${servicename}`);
      return;
    }
    match++;
    try {
      if (program.cancel) {
        console.log(`cancelTermination Service ${info.billingAccount}/${servicename}`);
        await apiPhone.$(info.billingAccount).service.$(servicename).cancelTermination.$post();
      } else {
        console.log(`deleting Service ${info.billingAccount}/${servicename}`);
        await apiPhone.$(info.billingAccount).service.$(servicename).$delete({ reason: 'addresseMove' })
      }
    } catch (e) {
      // console.log(e);
    }
  }, { concurrency: 8 })
  console.log(`${match} service deleted`)
}
main()