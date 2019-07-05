import Ovh, { OvhParams } from '.';
import ApiMe, { proxyMe } from '@ovh-api/me';
import { assert } from 'chai';

const config: OvhParams = {
  accessRules: 'GET /me',
  certCache: '../../tokenTest.json'
};
const ovhEngine = new Ovh(config);
const api = new ApiMe(ovhEngine);
const proxy = proxyMe(ovhEngine);

describe('OvhMe', () => {
  it('retrive nichandler', async () => {
    //ovhEngine.addListener()
    ovhEngine.on('request', ({ method, path, pathTemplate }) => {
      console.log(`sending request ${method} ${pathTemplate}`);
    });
    let constact = await api.get('/me');
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle');

    let constact2 = await proxy.$get();// (<Me>test).$get();
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
  }).timeout(60000);
});
