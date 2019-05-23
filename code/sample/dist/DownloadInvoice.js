"use strict";
// need the followig deps:
// npm install @ovh-api/api @ovh-api/me fs-extra
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const fs_extra_1 = __importDefault(require("fs-extra"));
const me_1 = __importDefault(require("@ovh-api/me"));
const api_1 = __importDefault(require("@ovh-api/api"));
const path_1 = __importDefault(require("path"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const commander_1 = __importDefault(require("commander"));
commander_1.default
    .version('1.0.0')
    .option('-u, --utc', 'use UTC times, by defaut use localhost timezone')
    .option('-d, --dest', 'destination directory')
    .option('-s, --split <type>', 'hierarchy model year/month/nonde default is month', /^(month|year|none)$/i, 'month')
    .parse(process.argv);
async function listDir(root, type) {
    let result = [];
    let list = await fs_extra_1.default.readdir(root);
    for (const file of list) {
        if (file.startsWith('.'))
            continue;
        const m = file.match(/_([A-Z]{2}[0-9]+)_/);
        if (m) {
            if (file.endsWith(type))
                result.push(m[1]);
            continue;
        }
        const fullPath = path_1.default.join(root, file);
        const stat = await fs_extra_1.default.stat(fullPath);
        if (stat.isDirectory()) {
            result.push.apply(result, await listDir(fullPath, type));
        }
    }
    return result;
}
async function main(root, type) {
    let ovh = new api_1.default({ accessRules: `GET /me, GET /me/bill, GET /me/bill/*` });
    const apiMe = new me_1.default(ovh);
    const me = await apiMe.get('/me');
    const dbInvoice = new Set();
    let dest = path_1.default.join(root, me.nichandle);
    await fs_extra_1.default.ensureDir(dest);
    const allInvoice = [];
    const summeryFile = path_1.default.join(dest, "summery.tsv");
    if (await fs_extra_1.default.existsSync(summeryFile)) {
        let input = fs_extra_1.default.readFileSync(summeryFile, { encoding: 'utf8' });
        input.split(/[\r\n]+/g)
            .forEach(line => {
            const [invoiceId, date, HT, TVA, TTC, currency] = line.split(/\t/);
            if (invoiceId == 'invoiceId')
                return;
            dbInvoice.add(invoiceId);
            allInvoice.push({ invoiceId, date, HT, TVA, TTC, currency });
        });
    }
    const doneDl = new Set(await listDir(dest, type));
    let billIds = await apiMe.get('/me/bill');
    billIds = billIds
        .filter(id => (!doneDl.has(id) && !dbInvoice.has(id)));
    for (const billId of billIds) {
        const billData = await apiMe.get('/me/bill/{billId}', { billId });
        const date = new Date(billData.date); //.getFullYear()
        let year;
        let month;
        let day;
        if (commander_1.default.utc) {
            year = String(date.getUTCFullYear());
            month = ('0' + (1 + date.getUTCMonth())).slice(-2);
            day = ('0' + date.getUTCDate()).slice(-2);
        }
        else {
            year = String(date.getFullYear());
            month = ('0' + (1 + date.getMonth())).slice(-2);
            day = ('0' + date.getDate()).slice(-2);
        }
        let subDir = '';
        switch (commander_1.default.split.toLowerCase()) {
            case 'month':
                subDir = `${year}${path_1.default.sep}${month}`;
                break;
            case 'year':
                subDir = `${year}`;
                break;
            case 'none':
                subDir = '';
                break;
        }
        const isoStr = `${year}-${month}-${day}`;
        const line = {
            invoiceId: billId,
            date: isoStr,
            HT: billData.priceWithoutTax.value.toFixed(2),
            TVA: (billData.priceWithTax.value - billData.priceWithoutTax.value).toFixed(2),
            TTC: billData.priceWithTax.value.toFixed(2),
            currency: billData.priceWithoutTax.currencyCode,
        };
        const filename = `${isoStr}_${billId}_${line.TTC}${line.currency}.${type}`;
        const fullpath = path_1.default.join(dest, subDir);
        const finalFile = path_1.default.join(fullpath, filename);
        try {
            await fs_extra_1.default.access(finalFile);
        }
        catch (_a) {
            await fs_extra_1.default.ensureDir(fullpath);
            const tmpFile = path_1.default.join(fullpath, filename + '.tmp');
            console.log(`Downloading ${billId} to ${filename}`);
            const ws = fs_extra_1.default.createWriteStream(tmpFile);
            const resp = await node_fetch_1.default(billData.pdfUrl);
            await new Promise((resove, reject) => resp.body.pipe(ws).on('finish', resove));
            await fs_extra_1.default.rename(tmpFile, finalFile);
        }
        if (!dbInvoice.has(billId))
            allInvoice.push(line);
    }
    if (billIds.length) {
        allInvoice.sort((a, b) => a.invoiceId.localeCompare(b.invoiceId));
        let db = allInvoice.map(({ invoiceId, date, HT, TVA, TTC, currency }) => `${invoiceId}\t${date}\t${HT}\t${TVA}\t${TTC}\t${currency}`);
        db.unshift('invoiceId\tdate\tHT\tTVA\tTTC\tcurrency');
        await fs_extra_1.default.writeFile(summeryFile, db.join(os_1.EOL), { encoding: 'utf8' });
    }
}
if (commander_1.default.dest)
    main(commander_1.default.dest, 'pdf').then(() => process.exit(), err => console.error(err));
else if (!commander_1.default.help)
    console.log('--help for usage');
//# sourceMappingURL=DownloadInvoice.js.map