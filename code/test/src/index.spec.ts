import Ovh, { OvhParams } from '@ovh-api/api';
import ApiMe, { proxyMe } from '@ovh-api/me';
import { assert } from 'chai';

const config: OvhParams = {
  accessRules: 'GET /me',
  certCache: '../../tokenTest.json'
};
const ovhEngine = new Ovh(config);
const api = ApiMe(ovhEngine);
const proxy = proxyMe(ovhEngine);

let lastEv: { method: string, path: string, pathTemplate: string } | null = null;
let catchReq = (ev: { method: string, path: string, pathTemplate: string }) => {
  let { method, path, pathTemplate } = ev;
  if (~(<string>path).indexOf('/auth/'))
    return;
  lastEv = ev; 
  ovhEngine.off('request', catchReq);
};

describe('OvhMe', () => {
  it('retrive nichandler', async () => {
    ovhEngine.on('request', catchReq);
    let constact = await proxy.$get();
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
    assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call')
  }).timeout(60000);

  it('retrive nichandler second call', async () => {
    ovhEngine.on('request', catchReq);
    await proxy.$cache();
    let constact = await proxy.$get();
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
    assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call')
  }).timeout(60000);


  it('retrive nichandler with cache', async () => {
    ovhEngine.on('request', catchReq);
    let t1 = Date.now();
    let constact = await proxy.$get();
    t1 = Date.now() - t1;

    if  (t1 > 10) {
      assert(t1 < 10, 'cache should be used');
    }
    assert.match(constact.nichandle, /[a-z]{2}[0-9]+-ovh/, 'have nichandle proxy');
    assert.deepEqual(lastEv, { method: 'GET', path: '/me', pathTemplate: '/me' }, 'last Event /me dyna call')
  }).timeout(60000);


});
