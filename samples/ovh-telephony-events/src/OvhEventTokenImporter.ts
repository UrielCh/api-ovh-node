import ApiTel, { telephony } from '@ovh-api/telephony';
import ApiMe from '@ovh-api/me';
import bluebird from 'bluebird';
import { IEvToken } from "./model";
import OvhApi from "@ovh-api/api";
import fse from 'fs-extra';

/**
 * generate and import Event Token from ovh
 */
export class OvhEventTokenImporter {
    private engine: OvhApi;
    private _cachefile: string;
    public nic: string = '';

    public constructor(engine?: OvhApi) {
        this.engine = engine || new OvhApi({ accessRules: 'GET /me, GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken, DELETE /telephony/*/eventToken' });
        this._cachefile = '';
    }

    public cacheFile(cachefile: string): this {
        this._cachefile = cachefile;
        return this;
    }
    public async reset(): Promise<any> {
        const apiTel = ApiTel(this.engine);
        const billingAccounts = await apiTel.$get();
        console.log(`reset Token from ${billingAccounts.length} groupes`);
        await bluebird.map(billingAccounts, async (billingAccount) => {
            let token: telephony.EventToken | null = null;
            try {
                token = await apiTel.$(billingAccount).eventToken.$get();
            } catch (e) {
            }
            if (token && token.token) {
                console.log(`invalidate ${token.token} for groupe ${billingAccount}`);
                try {
                    await apiTel.$(billingAccount).eventToken.$delete();
                } catch (e) {
                    console.error(e);
                }
            }
        }, { concurrency: 5 });
    }

    public async load(billingAccounts?: string[]): Promise<IEvToken[]> {
        if (!this._cachefile) {
            return await this.feachToken(billingAccounts);
        }
        try {
            await this.resolveNic();
        } catch (e) {
            console.error('Update your cert with extra GET /me', e);
            this.nic = this._cachefile;
        }

        try {
            await fse.access(this._cachefile);
            let tokens = await fse.readJSON(this._cachefile);
            if (billingAccounts) {
                const ready = new Set(tokens.map((g: IEvToken) => g.billingAccount))
                const missing = billingAccounts.filter(g => !ready.has(g))
                if (missing.length) {
                    let extras = await this.feachToken(missing);
                    tokens = [...tokens, ...extras];
                    if (this._cachefile)
                        await fse.writeJSON(this._cachefile, tokens, {spaces: 1});
                }
            }
            return tokens;
        } catch {
            console.log(`cacheFile ${this._cachefile} do not Exists, creating a new one`);
            let tokens = await this.feachToken(billingAccounts);
            await fse.writeJSON(this._cachefile, tokens, {spaces: 1});
            return tokens;
        }
    }

    private async feachToken(billingAccounts?: string[]): Promise<IEvToken[]> {
        let tokens: IEvToken[] = []
        const api = ApiTel(this.engine);
        await this.resolveNic();
        if (!billingAccounts || billingAccounts.length == 0)
            billingAccounts = await api.$get();
        function addToken(billingAccount: string, token: string) {
            tokens.push({ billingAccount, token })
        }
        console.log(`Importing ${billingAccounts.length} token`)
        await bluebird.map(
            billingAccounts,
            (billingAccount, index, length) => api.$(billingAccount).eventToken.$get()
                .then(
                    ({ token }) => addToken(billingAccount, token),
                    // 404: The requested object (eventToken) does not exist
                    (err) => api.$(billingAccount).eventToken.$post({ expiration: 'unlimited' })
                        .then(token => addToken(billingAccount, token))
                ).catch((err) => { console.log(`Error with ${billingAccount} ${err}`) }),
            { concurrency: 5 }
        );
        return tokens;
    }

    private async resolveNic() {
        const apiMe = ApiMe(this.engine);
        const info = await apiMe.$get();
        this.nic = info.nichandle
    }
}