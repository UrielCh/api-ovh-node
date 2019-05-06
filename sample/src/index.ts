import { ApiDomain } from '@ovh-api/domain';
import { ApiMe } from '@ovh-api/me';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = { appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};

const apiDomain = new ApiDomain(config);
const apiMe = new ApiMe(config);

apiMe.get("/me").then((data)=> console.log(data));
