// need the followig deps:
// npm install @ovh-api/api @ovh-api/vps fs-extra

import { networkInterfaces } from 'os'
import fse, { readFile, writeFile } from 'fs-extra'
import ApiVps from '@ovh-api/vps'
import Ovh from '@ovh-api/api'

async function identDist() {
  let list = (await fse.readdir('/etc'))
    .filter(n => ~n.indexOf('-release'));
  let release = list.join(' ');
  let iscentos = ~release.indexOf('centos')
  if (iscentos)
    return 'centos';
  return 'debian';
}

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
  const dist = await identDist();
  const serviceName = m[1];
  console.log({ serviceName, distrib: dist });
  console.log('');
  let ovh = new Ovh({ accessRules: `GET /vps/${serviceName}/ips` });
  const vps = ApiVps(ovh);
  let data = await vps.$(serviceName).ips.$get();
  const ipFo = data.filter(a => a != mainIP).filter(a => !~a.indexOf(':'))
  console.log(`TOTAL IP: ${data.length} FO: ${ipFo.length}`)
  if (dist === 'debian') {
    const confs = ipFo.map((ip, i) => `auto ${iface}:${i}
iface ${iface}:${i + 1} inet static
address ${ip}
netmask 255.255.255.255
broadcast ${ip}
`);
    await writeFile('51-fo', confs.join('\n'), { mode: 0o644 })
    console.log('51-fo Generated')
    console.log('')
    console.log('mv 51-fo  /etc/network/interfaces.d/')
    console.log('service networking restart')
  } else if (dist === 'centos') {
    const confs = ipFo.map((ip, i) => `DEVICE="${iface}:${i}"
BOOTPROTO=static
IPADDR="${ip}"
NETMASK="255.255.255.255"
BROADCAST="${ip}"
ONBOOT=yes   
`);
    for (let i = 0; i < confs.length; i++) {
      await writeFile(`ifcfg-${iface}:${i}`, confs[i], { mode: 0o644 });
    }
    console.log(`ifcfg-${iface}:* Generated`)
    console.log('')
    console.log(`mv ifcfg-${iface}:* /etc/sysconfig/network-scripts/`)
    for (let i = 0; i < confs.length; i++)
      console.log(`ifup ifcfg-${iface}:${i}`);
  }
}
main().then(console.log, console.error);