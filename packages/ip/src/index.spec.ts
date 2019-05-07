import { ApiIp } from './index';
import { assert } from 'chai';

const config = { appKey: String(process.env.APP_KEY),
    appSecret: String(process.env.APP_SECRET),
    consumerKey: String(process.env.CONSUMER_KEY)
};

const api = new ApiIp(config);

describe('Call OVH api', () => {
  it('should be able to List IP' , async () => {
    const ips = await api.get('/ip');
    assert.isNotNull(ips)
  });

});
