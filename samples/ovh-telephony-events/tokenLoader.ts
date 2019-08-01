import Api from '@ovh-api/telephony';
import bluebird from 'bluebird';
import { gToken } from "./model";
import OvhApi from "@ovh-api/api";
import fse from 'fs-extra';

async function feachToken(): Promise<gToken[]> {
    let tokens: gToken[] = []
    const ovh = new OvhApi({ accessRules: 'GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken' });
    const api = Api(ovh);
    const groups = await api.get('/telephony')();

    function addToken(billingAccount: string, token: string) {
        tokens.push({ billingAccount, token })
    }
    console.log(`Importing ${groups.length} token`)
    await bluebird.map(
        groups,
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

export async function loadTokens(cachefile: string) {
    if (!cachefile) {
        return await feachToken();
    }
    try {
        await fse.access(cachefile);
        return await fse.readJSON(cachefile);
    } catch {
        console.log(`cacheFile ${cachefile} do not Exists, creating a new one`);
        let tokens = await feachToken();
        await fse.writeJSON(cachefile, tokens);
        return tokens;
    }
}

