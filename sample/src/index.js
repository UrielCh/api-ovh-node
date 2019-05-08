"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("@ovh-api/domain");
const me_1 = require("@ovh-api/me");
// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
const config = { appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};
const apiDomain = new domain_1.ApiDomain(config);
const apiMe = new me_1.ApiMe(config);
apiMe.get("/me").then((data) => console.log(data));
