import { EOL } from 'os'
import fse from 'fs-extra'
import * as eu from '@ovh-api/me'
import * as us from '@ovh-api-us/me'
import * as ca from '@ovh-api-ca/me'

import Ovh, { OvhParams } from '@ovh-api/api'
import path from 'path'
import fetch from 'node-fetch'
import { Command } from 'commander'
import Bluebird, { Promise } from 'bluebird'

const { version } = require('./package.json');

interface options {
  utc?: string;
  maxAge?: string;
  token?: string;
  dest?: string;
  api?: string;
  split?: string;
  concurrency?: string;
}

const program = new Command();
program
  .version(version)
  .option('-u, --utc', 'use UTC times, by defaut use localhost timezone')
  .option('-d, --dest <path>', 'destination directory')
  .option('-s, --split <type>', 'hierarchy model year/month/none default is month', /^(month|year|none)$/i, 'month')
  .option('-a, --api <type>', 'api country you want to use supported ones: eu/us/ca', /^(eu|us|ca)$/i, 'eu')
  .option('-c, --concurrency <number>', 'max concurent download', /^[0-9]+$/)
  .option('--token <tokenfile>', 'save and reuse the certificat by storing them in a file')
  .option('-m, --max-age <timeYMD>', 'max time back you want to download, end with Y/M/D (Year/Month/Day)', /^[0-9]+[YMD]$/, '1Y')
  .parse(process.argv)


const options = program.opts();

/**
 * list all existing Invoices
 * @param root root directory
 * @param type file extention
 */
async function listDir(root: string, type: 'pdf' | 'html'): Promise<string[]> {
  let result: string[] = []
  let list = await fse.readdir(root)
  for (const file of list) {
    if (file.startsWith('.'))
      continue;
    const fullPath = path.join(root, file)
    const stat = await fse.stat(fullPath)
    const m = file.match(/_([A-Z]{2}[0-9]+)_/)
    if (m) {
      if (file.endsWith(type)) {
        if (stat.size === 46) {
          await fse.remove(fullPath)
        } else {
          result.push(m[1])
        }
      }
      continue
    }
    if (stat.isDirectory()) {
      result.push.apply(result, await listDir(fullPath, type))
    }
  }
  return result
}

interface CsvLine {
  invoiceId: string
  date: string
  HT: string
  TVA: string
  TTC: string
  currency: string
}

function parseDate(date: Date): { year: string, month: string, day: string } {
  let year, month, day;
  if (options.utc) {
    year = String(date.getUTCFullYear())
    month = ('0' + (1 + date.getUTCMonth())).slice(-2)
    day = ('0' + date.getUTCDate()).slice(-2)
  } else {
    year = String(date.getFullYear())
    month = ('0' + (1 + date.getMonth())).slice(-2)
    day = ('0' + date.getDate()).slice(-2)
  }
  return { year, month, day };
}

async function main(root: string, type: 'pdf' | 'html') {
  let importLimit = '';
  if (options.maxAge) {
    options.maxAge = options.maxAge.toUpperCase()
    if (!options.maxAge.match(/^[0-9]+[YMD]$/))
      throw Error('invalid max-age value, should be a number ending by Y, M or D');
    const now = new Date();
    let year = options.utc ? now.getUTCFullYear() : now.getFullYear();
    let month = options.utc ? now.getUTCMonth() : now.getMonth();
    let day = options.utc ? now.getUTCDate() : now.getDate();
    let importRimeLimit: Date;
    if (options.maxAge.endsWith('Y')) {
      year -= Number(options.maxAge.replace(/[^0-9]/g, ''));
      importRimeLimit = new Date(year, 0, 1, 0, 0, 0, 0);
    } else if (options.maxAge.endsWith('M')) {
      month -= Number(options.maxAge.replace(/[^0-9]/g, ''));
      importRimeLimit = new Date(year, month, 1, 0, 0, 0, 0);
    } else if (options.maxAge.endsWith('D')) {
      day -= Number(options.maxAge.replace(/[^0-9]/g, ''));
      importRimeLimit = new Date(year, month, day, 0, 0, 0, 0);
    } else {
      // can not get here.
      throw Error('Fatal');
    }
    const lim = parseDate(importRimeLimit);
    importLimit = `${lim.year}-${lim.month}-${lim.day}`;
    console.log(`Invoices emit before ${importLimit} won't be imported`);
  }

  let token = null;
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*` };
  try {
    if (options.token && fse.existsSync(options.token)) {
      token = await fse.readJson(options.token)
      param = { ...param, ...token }
      console.log(`Using previous token from ${options.token}`)
      options.token = null
    }
  } catch (e) { console.error(e) }

  if (options.a == 'us') {
    param.endpoint = 'ovh-us';
    // need param.appKey;
    // need param.appSecret;
  } else if (options.a == 'ca') {
    param.endpoint = 'ovh-ca';
    // need param.appKey;
    // need param.appSecret;
  }

  let ovh = new Ovh(param)
  let apiMe: eu.Me | us.Me | ca.Me;

  if (options.api == 'us') {
    apiMe = us.proxyMe(ovh)
  } else if (options.api == 'ca') {
    apiMe = ca.proxyMe(ovh)
  } else {
    apiMe = eu.proxyMe(ovh)
  }

  const me = await apiMe.$get()
  if (options.token) {
    console.log(`Saving generarted token for next time in ${options.token}`)
    let { appKey, appSecret, consumerKey } = ovh
    await fse.writeJSON(options.token, { appKey, appSecret, consumerKey }, { spaces: 2 })
  }
  //const dbInvoice = new Set() as Set<string>;
  const invoiceTSV = {} as { [key: string]: CsvLine };
  let dest = path.join(root, me.nichandle)
  await fse.ensureDir(dest)

  const summaryFile = path.join(dest, "summary.tsv")
  if (fse.existsSync(summaryFile)) {
    let input = fse.readFileSync(summaryFile, { encoding: 'utf8' })
    input.split(/[\r\n]+/g)
      .forEach(line => {
        const [invoiceId, date, HT, TVA, TTC, currency] = line.split(/\t/)
        if (invoiceId == 'invoiceId')
          return;
        invoiceTSV[invoiceId] = { invoiceId, date, HT, TVA, TTC, currency };
        // allInvoice.push({ invoiceId, date, HT, TVA, TTC, currency })
      });
  }

  const toFilePath = (line: CsvLine) => {
    const [year, month] = line.date.split('-')
    let subDir = ''
    switch (options.split.toLowerCase()) {
      case 'month':
        subDir = `${year}${path.sep}${month}`
        break
      case 'year':
        subDir = `${year}`
        break
      case 'none':
        subDir = ''
        break
    }
    const filename = `${line.date}_${line.invoiceId}_${line.TTC}${line.currency}.${type}`
    const fullpath = path.join(dest, subDir)
    return path.join(fullpath, filename)
  }

  const InvoicePDF = new Set(await listDir(dest, type))
  console.log(`${InvoicePDF.size} Invoices PDF already downloaded`);
  console.log(`${Object.keys(invoiceTSV).length} Invoices in summery.tsv`);

  let billIds = await apiMe.bill.$get()
  const counter = {
    total: billIds.length,
    review: 0,
    tooOld: 0,
    download: 0,
  }

  console.log(`${billIds.length} Invoices available`);
  billIds = billIds
    .filter(billId => (!InvoicePDF.has(billId) || !invoiceTSV[billId]))
  const toDownload = billIds.filter((billId) => !InvoicePDF.has(billId)).length
  const toSummeryzed = billIds.filter((billId) => !invoiceTSV[billId]).length
  console.log(`${toDownload} need to be download`);
  console.log(`${toSummeryzed} need to be add to summery.tsv`);

  let toOldId = {} as {[key: string]: number};

  const getInvoice = async (billId: string) => {
    const billType: string = billId.replace(/[0-9]/g, '');
    const billNumber: number = Number(billId.replace(/[^0-9]/g, ''));
    const oldId = toOldId[billType];

    if (oldId && oldId > billNumber)
      return;

    counter.review++;
    const billData = await apiMe.bill.$(billId).$get()
    const { year, month, day } = parseDate(new Date(billData.date));
    const date = `${year}-${month}-${day}`;

    if (importLimit && importLimit.localeCompare(date) > 0) {
      counter.tooOld++;
      if (!oldId || oldId < billNumber)
        toOldId[billType] = billNumber;
      return;
    }
    // importLimit
    const line: CsvLine = {
      invoiceId: billId,
      date,
      HT: billData.priceWithoutTax.value.toFixed(2),
      TVA: (billData.priceWithTax.value - billData.priceWithoutTax.value).toFixed(2),
      TTC: billData.priceWithTax.value.toFixed(2),
      currency: billData.priceWithoutTax.currencyCode,
    }

    if (!InvoicePDF.has(billId)) {
      const downloadId = ++counter.download;
      const finalFile = toFilePath(line);
      try {
        const stats = await fse.stat(finalFile)
        if (stats.size === 46) {
          await fse.remove(finalFile);
          throw 'bad file size';
        }
      } catch {
        const fullpath = path.dirname(finalFile);
        const filename = path.basename(finalFile);
        const tmpFile = path.join(fullpath, filename + '.tmp')
        while (true) {
          await fse.ensureDir(fullpath)

          while (true) {
            try {
              await fse.remove(tmpFile)
            } catch (e) { }
            try {
              console.log(`${downloadId}/${toDownload} Downloading ${billId} to ${finalFile}`)
              const ws = fse.createWriteStream(tmpFile)
              const resp = await fetch(billData.pdfUrl)
              await new Promise((resove, reject) => resp.body.pipe(ws).on('finish', resove))
            } catch (e) {
              await Bluebird.delay(1000);
              console.log(e);
              continue;
            }
            break;
          }
          const stats = await fse.stat(tmpFile)
          if (stats.size === 46) {
            console.log('Too much requests. Please retry in 3 seconds.');
            await fse.remove(tmpFile)
            await Bluebird.delay(3000);
          } else {
            await fse.rename(tmpFile, finalFile)
            break;
          }
        }
      }
    }
    if (!invoiceTSV[billId])
      invoiceTSV[billId] = line;
  }
  const concurrency = Number(options.concurrency) || 1
  if (concurrency >= 3)
    console.error('Warning a hi concurrency may triger OVH query rate limit')
  await Promise.map(billIds, (item, index, length) => getInvoice(item), { concurrency })

  if (billIds.length) {
    const allInvoice = Object.values(invoiceTSV);
    allInvoice.sort((a, b) => a.invoiceId.localeCompare(b.invoiceId))
    let db = allInvoice.map(({ invoiceId, date, HT, TVA, TTC, currency }) => `${invoiceId}\t${date}\t${HT}\t${TVA}\t${TTC}\t${currency}`)
    db.unshift('invoiceId\tdate\tHT\tTVA\tTTC\tcurrency')
    await fse.writeFile(summaryFile, db.join(EOL), { encoding: 'utf8' })
    if (counter.tooOld)
      console.log(`${counter.tooOld} Invoices ignore due to Age, ${counter.download} Invoices downloaded, ${counter.review} Invoices reviewed, ${counter.total} Invoices available in the account`)
    else
      console.log(`${counter.download} Invoices downloaded, ${counter.review} Invoices reviewed, ${counter.total} Invoices available in the account`)
  } else {
    console.log('No new invoice. Bye.')
  }
}
if (options.dest)
  main(options.dest, 'pdf').catch(err => console.error(err))
else if (!program.help)
  console.log('--help for usage')