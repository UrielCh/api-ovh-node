import Api from '@ovh-api/telephony';
import bluebird from 'bluebird';
import { gToken } from "./model";
import OvhApi from "@ovh-api/api";
import fse from 'fs-extra';

/**
 * generate and import Event Token from ovh
 */
export class OvhEventTokenImporter {
    private engine: OvhApi;
    private _cachefile: string;

    public constructor(engine?: OvhApi) {
        this.engine = engine || new OvhApi({ accessRules: 'GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken' });
        this._cachefile = '';
    }

    public cacheFile(cachefile: string): this {
        this._cachefile = cachefile;
        return this;
    }

    public async load(billingAccounts?: string[]): Promise<gToken[]> {
        if (!this._cachefile) {
            return await this.feachToken(billingAccounts);
        }
        try {
            await fse.access(this._cachefile);
            let tokens = await fse.readJSON(this._cachefile);
            if (billingAccounts) {
                const ready = new Set(tokens.map((g: gToken) => g.billingAccount))
                const missing = billingAccounts.filter(g => !ready.has(g))
                if (missing.length) {
                    let extras = await this.feachToken(missing);
                    tokens = [...tokens, ...extras];
                    if (this._cachefile)
                        await fse.writeJSON(this._cachefile, tokens);
                }
            }
            return tokens;
        } catch {
            console.log(`cacheFile ${this._cachefile} do not Exists, creating a new one`);
            let tokens = await this.feachToken(billingAccounts);
            await fse.writeJSON(this._cachefile, tokens);
            return tokens;
        }
    }

    private async feachToken(billingAccounts?: string[]): Promise<gToken[]> {
        let tokens: gToken[] = []
        const api = Api(this.engine);
        if (!billingAccounts || billingAccounts.length == 0)
            billingAccounts = await api.$get();
        function addToken(billingAccount: string, token: string) {
            tokens.push({ billingAccount, token })
        }
        console.log(`Importing ${billingAccounts.length} token`)
        await bluebird.map(
            billingAccounts,
            (billingAccount, index, length) => api.get('/telephony/{billingAccount}/eventToken')({ billingAccount })
                .then(
                    ({ token }) => addToken(billingAccount, token),
                    // 404: The requested object (eventToken) does not exist
                    (err) => api.post('/telephony/{billingAccount}/eventToken')({ billingAccount, expiration: 'unlimited' })
                        .then(token => addToken(billingAccount, token))
                ).catch((err) => { console.log(`Error with ${billingAccount} ${err}`) }),
            { concurrency: 5 }
        );
        return tokens;
    }

}