import Ovh from '@ovh-api/api';
import ApiMe from '@ovh-api/me';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = { appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovh = new Ovh(config);
const apiMe = new ApiMe(ovh);

apiMe.get("/me").then(console.log);
