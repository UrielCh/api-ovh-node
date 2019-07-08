import Ovh, { OvhParams } from '.';
import ApiMe, { proxyMe } from '@ovh-api/me';
import { assert } from 'chai';

const config: OvhParams = {
  accessRules: 'GET /me',
  certCache: '../../tokenTest.json'
};
const ovhEngine = new Ovh(config);
const api = ApiMe(ovhEngine);
const proxy = proxyMe(ovhEngine);

describe('OvhMe', () => {
  it('retrive nichandler', async () => {
    //ovhEngine.addListener()
    let lastEv: { method: string, path: string, pathTemplate: string } | null = null;
    let catchReq = (ev: { method: string, path: string, pathTemplate: string }) => {
      let { method, path, pathTemplate } = ev;
      if (~(<string>path).indexOf('/auth/'))
        return;
      lastEv = ev; 
      ovhEngine.off('request', catchReq);
    };

    ovhEngine.on('request', catchReq);
    let constact = await api.get('/me')();
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle');
    assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me flat call')

    ovhEngine.on('request', catchReq);
    let constact2 = await proxy.$get();// (<Me>test).$get();
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
    assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call')
  }).timeout(60000);
});
