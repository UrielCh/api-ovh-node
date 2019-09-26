import { EOL } from 'os'
import fse, { WriteStream } from 'fs-extra'
import { telephony } from '@ovh-api/telephony'

const fields = 'called, calling, consumptionId, countrySuffix, designation, destinationType, dialed, duration, hangupNature, planType, priceWithoutTax, wayType'.split(', ');

export class StoreCsv {
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
