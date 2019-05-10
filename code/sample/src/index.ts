import { OvhApiDefault } from '@ovh-api/api';
import { ApiDomain } from '@ovh-api/domain';
import { ApiMe } from '@ovh-api/me';

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = { appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const ovhEngine = new OvhApiDefault(config);
const apiDomain = new ApiDomain(ovhEngine);
const apiMe = new ApiMe(ovhEngine);

apiMe.get("/me").then((data)=> console.log(data));
