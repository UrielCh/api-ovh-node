// need the followig deps:
// npm install @ovh-api/api @ovh-api/vps fs-extra

import { networkInterfaces } from 'os'
import fse, { readFile, writeFile } from 'fs-extra'
import ApiVps from '@ovh-api/vps'
import Ovh from '@ovh-api/api'

async function main() {
  const ifaces = networkInterfaces()
  if (!ifaces)
    throw 'os.networkInterfaces() failed';
  let iface = 'ens3';
  // test common interface
  if (!ifaces[iface])
    iface = 'eth0';
  if (!ifaces[iface])
    throw `No ens3/eth0 netword interface`;
  const mainIP = ifaces[iface].filter(a => a.family == 'IPv4')[0].address
  if (!mainIP)
    throw `No ${iface} has no IPv4`;
  console.log(`Your main IP is ${mainIP}`)
  const hosts = await readFile('/etc/hosts', 'utf8');
  let m = hosts.match(/127.0.1.1\s+([a-z0-9]+\.ovh\.net)/);
  if (!m) 
    m = hosts.match(/\s([a-z0-9]+\.ovh\.net)/);
  if (!m) 
    throw 'No vps hostname in found in /etc/hosts';
  const serviceName = m[1];
  let ovh = new Ovh({ accessRules: `GET /vps/${serviceName}/ips` });
  const vps = new ApiVps(ovh);
  console.log({ serviceName });
  let data = await vps.get('/vps/{serviceName}/ips', { serviceName })
  let confFile = '';
  const ipFo = data.filter(a => a != mainIP).filter(a => !~a.indexOf(':'))
  console.log(`TOTAL IP: ${data.length} FO: ${ipFo.length}`)
  // TODO ident distribution
  //let list = (await fse.readdir('/etc'))
  //  .filter(n => ~n.indexOf('-release'))
  //if ()

  for (var i = 0; i < ipFo.length; i++) {
    confFile += `auto ens3:${i}
 iface ${iface}:${i + 1} inet static
 address ${ipFo[i]}
 netmask 255.255.255.255
 broadcast ${ipFo[i]}

`
  }
  await writeFile('51-fo', confFile, { mode: 0o644 })
  console.log('51-fo Generated')
  console.log('')
  console.log('mv 51-fo  /etc/network/interfaces.d/')
}

main().then(console.log, console.error)