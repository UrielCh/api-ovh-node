import {OvhParams, default as Ovh} from '.';

import { ApiIp, IpIp } from '@ovh-api/ip';
import { assert } from 'chai';
// import { describe } from 'mocha';
// import { debug } from 'util';

const config: OvhParams = {
//  appKey: String(process.env.APP_KEY),
//  appSecret: String(process.env.APP_SECRET),
  consumerKey: String(process.env.CONSUMER_KEY),
  /// debug: true,
  accessRules: 'GET /ip'  
  // apis: ['ip'],
};
const ovhEngine = new Ovh(config);
const api = new ApiIp(ovhEngine);

const test1 = async () => {
  let ips: string[] | void;
  
  ips = await api.get('/ip').catch(console.error);
  assert.isNotNull(ips)
  if (ips && ips.length) {
    let ip0 = api.get('/ip/{ip}', {ip:ips[0]});
    ip0.then((value:IpIp) => {console.log(value)}, console.error)
  }
};

test1();
//describe('Call OVH api', () => {
//  it('should be able to List IP' , test1);
//});

