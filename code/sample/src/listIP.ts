import { ApiIp } from '@ovh-api/ip';
import Ovh from '@ovh-api/api';

const ovh = new Ovh({accessRules: 'GET /ip'});
const api = new ApiIp(ovh);

async function printIP() {
    const ips = await api.get('/ip');
    return ips;
}

printIP().then(console.log)