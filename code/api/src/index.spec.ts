import Ovh, { OvhParams } from '.';

import ApiMe from '@ovh-api/me';
import { assert } from 'chai';
// import { describe } from 'mocha';
// import { debug } from 'util';

const config: OvhParams = {
  // appKey: String(process.env.APP_KEY),
  // appSecret: String(process.env.APP_SECRET),
  // consumerKey: String(process.env.CONSUMER_KEY),
  accessRules: 'GET /me',
  certCache: '../../tokenTest.json'
  // apis: ['ip'],
};
const ovhEngine = new Ovh(config);
const api = new ApiMe(ovhEngine);

describe('OvhMe', () => {
  it('retrive nichandler', async () => {
    let constact = await api.get('/me');
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle');
  }).timeout(60000);
});


