import "reflect-metadata";
import ApiTel from '@ovh-api/telephony'
import Ovh, { OvhParams } from '@ovh-api/api'
import program from 'commander'
import Bluebird from 'bluebird'
import { StoreMysql } from "./StoreMysql";
import { ConnectionOptions } from "typeorm";
import { importAll } from "./importer";
const { version } = require('../package.json');

Bluebird.config({ 
  warnings: true,
  // longStackTraces: true
});

const setAccumulator = (paramName: string, regexp: RegExp) => (value:string, previous: Set<string>) => {
  if (! value.match(regexp))
    throw Error(`invalid value: "${value}" for ${paramName}`);
  previous = previous || new Set();
  previous.add(value);
  return previous
};

program
  .version(version)
  .option('-s, --service <service>', 'Only download this service consumtion', setAccumulator('service', /00[\d+]/), new Set<string>())
  .option('-b, --billing <billing>', 'Only download this billinggroup consumtion', setAccumulator('billing', /[a-z]{2}-\d+-\d+/), new Set<string>())
  .parse(process.argv)

async function main() {
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*, GET /telephony, GET /telephony/*`, certCache: 'token.json', maxRetry: 100 };
  let ovh = new Ovh(param)
  const apiPhone = ApiTel(ovh)
  const store = new StoreMysql();
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
  const connection = await store.init(db);
  await importAll(apiPhone, store);
  // await statAll(connection);
  await connection.close();
}
main()