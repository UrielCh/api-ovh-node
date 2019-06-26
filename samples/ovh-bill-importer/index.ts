import { EOL } from 'os'
import fse from 'fs-extra'
import ApiMe, { NichandleNichandle, BillingBill } from '@ovh-api/me'
import Ovh, { OvhParams } from '@ovh-api/api'
import path from 'path'
import fetch from 'node-fetch'
import program from 'commander'
import { Promise } from 'bluebird'

program
  .version('1.0.0')
  .option('-u, --utc', 'use UTC times, by defaut use localhost timezone')
  .option('-d, --dest <path>', 'destination directory')
  .option('-s, --split <type>', 'hierarchy model year/month/none default is month', /^(month|year|none)$/i, 'month')
  .option('-c, --concurrency <number>', 'max concurent download', /^[0-9]+$/)
  .option('--token <tokenfile>', 'save and reuse the certificat by storing them in a file')
  .parse(process.argv)

/**
 * list all existing invoice
 * @param root root directory
 * @param type file extention
 */
async function listDir(root: string, type: 'pdf' | 'html'): Promise<string[]> {
  let result: string[] = []
  let list = await fse.readdir(root)
  for (const file of list) {
    if (file.startsWith('.'))
      continue;
    const m = file.match(/_([A-Z]{2}[0-9]+)_/)
    if (m) {
      if (file.endsWith(type))
        result.push(m[1])
      continue;
    }
    const fullPath = path.join(root, file)
    const stat = await fse.stat(fullPath)
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

async function main(root: string, type: 'pdf' | 'html') {
  let token = null;
  let param: OvhParams = { accessRules: `GET /me, GET /me/bill, GET /me/bill/*` };
  try {
    if (program.token) {
      token = fse.readJson(program.token)
      param = { ...param, ...token };
      console.log(`Using previous token from ${program.token}`)
      program.token = null;
    }
  } catch { }
  let ovh = new Ovh(param)
  const apiMe = new ApiMe(ovh)
  const me: NichandleNichandle = await apiMe.get('/me')
  if (program.token) {
    console.log(`Saving generarted token for next time in ${program.token}`)
    let { appKey, appSecret, consumerKey } = ovh
    await fse.writeJSON(program.token, { appKey, appSecret, consumerKey })
  }
  const dbInvoice = <Set<string>>new Set()
  let dest = path.join(root, me.nichandle)
  await fse.ensureDir(dest)

  const allInvoice: CsvLine[] = []

  const summaryFile = path.join(dest, "summary.tsv")
  if (await fse.existsSync(summaryFile)) {
    let input = fse.readFileSync(summaryFile, { encoding: 'utf8' })
    input.split(/[\r\n]+/g)
      .forEach(line => {
        const [invoiceId, date, HT, TVA, TTC, currency] = line.split(/\t/)
        if (invoiceId == 'invoiceId')
          return;
        dbInvoice.add(invoiceId)
        allInvoice.push({ invoiceId, date, HT, TVA, TTC, currency })
      });
  }
  const doneDl = new Set(await listDir(dest, type))
  let billIds = await apiMe.get('/me/bill')
  billIds = billIds
    .filter(id => (!doneDl.has(id) && !dbInvoice.has(id)))

  const getInvoice = async (billId: string) => {
    const billData: BillingBill = await apiMe.get('/me/bill/{billId}', { billId })
    const date = new Date(billData.date);//.getFullYear()
    let year;
    let month;
    let day;

    if (program.utc) {
      year = String(date.getUTCFullYear())
      month = ('0' + (1 + date.getUTCMonth())).slice(-2)
      day = ('0' + date.getUTCDate()).slice(-2)
    } else {
      year = String(date.getFullYear())
      month = ('0' + (1 + date.getMonth())).slice(-2)
      day = ('0' + date.getDate()).slice(-2)
    }
    let subDir = ''
    switch (program.split.toLowerCase()) {
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
    const isoStr = `${year}-${month}-${day}`
    const line: CsvLine = {
      invoiceId: billId,
      date: isoStr,
      HT: billData.priceWithoutTax.value.toFixed(2),
      TVA: (billData.priceWithTax.value - billData.priceWithoutTax.value).toFixed(2),
      TTC: billData.priceWithTax.value.toFixed(2),
      currency: billData.priceWithoutTax.currencyCode,
    }

    const filename = `${isoStr}_${billId}_${line.TTC}${line.currency}.${type}`
    const fullpath = path.join(dest, subDir)
    const finalFile = path.join(fullpath, filename)
    try {
      await fse.access(finalFile)
    } catch {
      await fse.ensureDir(fullpath)
      const tmpFile = path.join(fullpath, filename + '.tmp')
      console.log(`Downloading ${billId} to ${filename}`)
      const ws = fse.createWriteStream(tmpFile)
      const resp = await fetch(billData.pdfUrl)
      await new Promise((resove, reject) => resp.body.pipe(ws).on('finish', resove))
      await fse.rename(tmpFile, finalFile)
    }
    if (!dbInvoice.has(billId))
      allInvoice.push(line)
  }
  const concurrency = Number(program.concurrency) || 1
  if (concurrency > 3)
    console.error('Warning a hi concurrency may triger OVH query rate limit')
  await Promise.map(billIds, (item, index, length) => getInvoice(item), { concurrency: Number(program.concurrency) })

  if (billIds.length) {
    allInvoice.sort((a, b) => a.invoiceId.localeCompare(b.invoiceId))
    let db = allInvoice.map(({ invoiceId, date, HT, TVA, TTC, currency }) => `${invoiceId}\t${date}\t${HT}\t${TVA}\t${TTC}\t${currency}`)
    db.unshift('invoiceId\tdate\tHT\tTVA\tTTC\tcurrency')
    await fse.writeFile(summaryFile, db.join(EOL), { encoding: 'utf8' })
    console.log('All done.')
  } else {
    console.log('No new invoice. Bye.')
  }
}
if (program.dest)
  main(<string>program.dest, 'pdf').then(() => process.exit(), err => console.error(err))
else if (!program.help)
  console.log('--help for usage')