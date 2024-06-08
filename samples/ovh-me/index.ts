import Ovh from '@ovh-api/api';
import ApiMe from '@ovh-api/me';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
let config = {};
if (process.env.APP_KEY && process.env.APP_SECRET && process.env.CONSUMER_KEY)
    config = {
        appKey: String(process.env.APP_KEY),
        appSecret: String(process.env.APP_SECRET),
        consumerKey: String(process.env.CONSUMER_KEY)
    };


async function main() {
    try {
        const ovh = new Ovh(config);
        console.log(ApiMe);
        const apiMe = ApiMe(ovh);
        // await ovh.request('POST', '/auth/logout');
        const info = await apiMe.$get();
        console.log(info);
    } catch (e) {
        console.error(e);
    }
}

void main();
