import Ovh from '@ovh-api/api';
import Api, { TelephonyEventToken } from '@ovh-api/telephony';
import bluebird from 'bluebird';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const ovh = new Ovh({ accessRules: 'GET /telephony, GET /telephony/*/eventToken, POST /telephony/*/eventToken' });
const api = new Api(ovh);

async function main() {
    const groups = await api.get('/telephony');
    const tokens: { [key: string]: string } = {}
    await bluebird.map(
        groups,
        (billingAccount, index, length) => api.get('/telephony/{billingAccount}/eventToken', { billingAccount })
            .then(
                (value: TelephonyEventToken) => tokens[billingAccount] = value.token,
                // 404: The requested object (eventToken) does not exist
                (err) => api.post('/telephony/{billingAccount}/eventToken', { billingAccount })
                    .then(token => tokens[billingAccount] = token)
            ),
        { concurrency: 3 }
    );
    console.log(tokens);
}
main().then(console.log)
