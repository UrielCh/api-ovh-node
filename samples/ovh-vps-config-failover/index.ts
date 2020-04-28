import { networkInterfaces } from 'os'
import fse, { readFile, writeFile } from 'fs-extra'
import ApiVps from '@ovh-api/vps'
import Ovh from '@ovh-api/api'

type DistName = 'centos' | 'debian';

async function identDist(): Promise<DistName> {
  let list = (await fse.readdir('/etc'))
    .filter(n => ~n.indexOf('-release'));
  let release = list.join(' ');
  let iscentos = ~release.indexOf('centos')
  if (iscentos)
    return 'centos';
  return 'debian';
}

async function main() {
  const networks = networkInterfaces()
  if (!networks)
    throw 'os.networkInterfaces() failed';

  let ifaces = Object.keys(networks).filter((iface: string) => iface !== 'lo');
  if (ifaces.length != 1) {
    console.error(`Your host looks to have more than one non localhost interface. [${ifaces.join(',')}] Sorry can not deal with that.`);
    return;
  }
  const iface = ifaces[0];
  const network = networks[iface];
  if (!network)
    throw Error('targeted netinteface loosed !');
  // test common interface
  const mainIP = network.filter(a => a.family == 'IPv4')[0].address
  if (!mainIP)
    throw `No ${iface} has no IPv4`;
  console.log(`Your main IP is ${mainIP}`)
  // search hostname in /etc/hosts
  const hosts = await readFile('/etc/hosts', 'utf8');
  let serviceName = '';

  let m = hosts.match(/127.0.1.1\s+([a-z0-9]+\.ovh\.net)/);
  if (!m)
    m = hosts.match(/\s([a-z0-9]+\.ovh\.net)/);
  if (m) {
    serviceName = m[1];
  } else {
    console.log('failed to identify host name from /etc/hosts contents');
  }

  const distrib: DistName = await identDist();
  console.log({ serviceName, mainIP, distrib });
  console.log('');
  const accessRules: string = serviceName ? `GET /vps/${serviceName}/ips` : `GET /vps/*, GET /1.0/vps`
  let ovh = new Ovh({ accessRules });
  const vps = ApiVps(ovh);

  let data: string[] = [];
  if (serviceName) {
    data = await vps.$(serviceName).ips.$get();
  } else {
    let vpss = await vps.$get();
    console.log(`Scanning ${vpss.length} vps`);
    const ips: string[][] = await Promise.all(vpss.map(serviceName => vps.$(serviceName).ips.$get()));
    for (let i = 0; i < vpss.length; i++) {
      if (!ips[i].find((e) => e == mainIP))
        continue;
      serviceName = vpss[i];
      data = ips[i];
      break;
    }
  }
  if (!serviceName) {
    throw Error('failed to serviceName');
  }
  const ipFo: string[] = data.filter(a => a != mainIP).filter(a => !~a.indexOf(':'))
  if (!ipFo.length) {
    console.log(`no ip Failover for ${serviceName} nothink to do.`)
    return;
  }
  console.log(`TOTAL IP: ${data.length} FailOver: ${ipFo.length}`)

  if (distrib === 'debian') {
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
  } else if (distrib === 'centos') {
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
main().catch(console.error);