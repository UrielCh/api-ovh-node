import { networkInterfaces } from 'os'
import fse, { readFile, writeFile } from 'fs-extra'
import ApiVps from '@ovh-api/vps'
import ApiCloud from '@ovh-api/cloud'
import ApiIp from '@ovh-api/ip'
import Ovh from '@ovh-api/api'
import { program } from 'commander'
import IPCIDR from "ip-cidr";

interface Option {
  verbose?: boolean;
  cert?: string;
  interface?: string;
  ip?: string;
};

type DistName = 'centos' | 'debian';

function extendIPCCIDR(ips: string[]) {
  const ipOut = [] as string[];
  for (const ip of ips) {
    if (!~ip.indexOf('/')) {
      ipOut.push(ip);
    } else {
      const cidr = new IPCIDR(ip);
      for (const ip0 of cidr.toArray())
        ipOut.push(ip0);
    }
  }
  return ipOut;
}
/**
 * return 1,2,3... in default mode
 * or return ip as hexa string in verbose mode
 * @param ip 
 * @param i 
 * 
 */
function ipPos2Alias(ip: string, i: number): string {
  if (!_option.verbose)
    return `${i}`;
  return ip.split('.').map(i => Number(i).toString(16).padStart(2, '0')).join('');
}

/**
 * @param iface Generate configuration files
 * @param ipFo ip failover list
 * @param distrib distribution
 */
async function displayConf(iface: string, ipFo: string[], distrib?: DistName) {
  if (!distrib)
    distrib = await identDist();

  if (distrib === 'debian') {
    const confs = ipFo.map((ip, i) => {
      const alias = `${iface}:${ipPos2Alias(ip, i)}`;
      return `auto ${alias}
iface ${alias} inet static
address ${ip}
netmask 255.255.255.255
broadcast ${ip}
`});
    await writeFile('51-fo', confs.join('\n'), { mode: 0o644 })
    console.log('51-fo Generated')
    console.log('')
    console.log('mv 51-fo  /etc/network/interfaces.d/')
    console.log('service networking restart')
    return;
  }
  if (distrib === 'centos') {
    const confs = ipFo.map((ip, i) => {
      const alias = `${iface}:${ipPos2Alias(ip, i)}`;
      const content = `DEVICE="${alias}"
BOOTPROTO=static
IPADDR="${ip}"
NETMASK="255.255.255.255"
BROADCAST="${ip}"
ONBOOT=yes   
`;
      return { alias, content };
    });
    for (const conf of confs) {
      await writeFile(`ifcfg-${conf.alias}`, conf.content, { mode: 0o644 });
    }
    console.log(`ifcfg-${iface}:* Generated`);
    console.log('');
    console.log(`mv ifcfg-${iface}:* /etc/sysconfig/network-scripts/`);
    for (const conf of confs) {
      console.log(`ifup ifcfg-${conf.alias}`);
    }
  }
}

async function identDist(): Promise<DistName> {
  try {
    let list = (await fse.readdir('/etc'))
      .filter(n => ~n.indexOf('-release'));
    let release = list.join(' ');
    let iscentos = ~release.indexOf('centos')
    if (iscentos)
      return 'centos';
    return 'debian';
  } catch (e) {
    console.error('distribution detection failed, fallback to debian.')
    return 'debian';
  }
}

async function detectNetwork(options: Option): Promise<{ mainIP: string, iface: string }> {
  if (options.ip && options.interface) {
    return { mainIP: options.ip, iface: options.interface };
  }
  const networks = networkInterfaces()
  if (!networks)
    throw 'os.networkInterfaces() failed';
  let ifaces = Object.keys(networks).filter((iface: string) => iface !== 'lo').filter((iface: string) => !~iface.indexOf(':'));
  if (ifaces.length != 1 && options.interface) {
    ifaces = [options.interface];
  }
  if (ifaces.length != 1) {
    throw Error(`Your host looks to have more than one non localhost interface. [${ifaces.join(',')}] Sorry can not deal with that. use -i param to git the rigth value.`);
  }
  const iface = ifaces[0];
  const network = networks[iface];
  if (!network)
    throw Error('targeted net interface loosed !');
  // test common interface
  const mainIP = network.filter(a => a.family == 'IPv4')[0].address
  if (!mainIP)
    throw `No ${iface} has no IPv4`;
  console.log(`Your main IP is ${mainIP}`)
  return { mainIP, iface };
}

let _option: Option = {};

async function genAllFailover(options: Option) {
  try {
    _option = options;
    const { iface } = await detectNetwork(options);
    const accessRules: string = `GET /ip, GET /ip/*`;
    let ovh = new Ovh({ accessRules, certCache: _option.cert });
    const apis = {
      ip: ApiIp(ovh),
    }
    let ipFo = await apis.ip.$get({ type: 'failover' });
    ipFo = extendIPCCIDR(ipFo);
    console.log(`TOTAL FailOver: ${ipFo.length}`);
    await displayConf(iface, ipFo);
  } catch (e) {
    console.error((e as Error).message);
    process.exit(1);
  }
}

async function genFailover(options: Option) {
  _option = options;
  const { mainIP, iface } = await detectNetwork(options);

  let serviceName = '';
  try {
    // search hostname in /etc/hosts
    const hosts = await readFile('/etc/hosts', 'utf8');
    // try to find a VPS name
    let m = hosts.match(/127.0.1.1\s+([a-z0-9]+\.ovh\.net)/);
    if (!m)
      m = hosts.match(/\s([a-z0-9]+\.ovh\.net)/);
    if (m) {
      serviceName = m[1];
    } else {
      console.log('Failed to identify host name from /etc/hosts contents, I can deal with it...');
    }
  } catch (e) {
    console.log('Failed access /etc/hosts serviceName detection failed.');
  }
  // distrib is debian or centOS ?
  const distrib: DistName = await identDist();
  console.log({ serviceName, mainIP, distrib });
  console.log('');
  const accessRules: string = serviceName ? `GET /vps/${serviceName}/ips` : `GET /vps/*, GET /vps, GET /cloud/project, GET /cloud/project/*/instance, GET /cloud/project/*/ip/failover`
  let ovh = new Ovh({ accessRules, certCache: _option.cert });
  const apis = {
    vps: ApiVps(ovh),
    cloud: ApiCloud(ovh),
  }

  let data: string[] = [];
  if (serviceName) {
    data = await apis.vps.$(serviceName).ips.$get();
  } else {
    let vpss = await apis.vps.$get();
    console.log(`Scanning ${vpss.length} vps`);
    const ips: string[][] = await Promise.all(vpss.map(async (serviceName) => {
            try {
                return await apis.vps.$(serviceName).ips.$get();
            } catch (e) {
                console.log(`vps ${serviceName} ips get:`, e)
                return [];
            }
        }));
    for (let i = 0; i < vpss.length; i++) {
      if (!ips[i].find((e) => e == mainIP))
        continue;
      serviceName = vpss[i];
      data = ips[i];
      break;
    }
    if (!serviceName) {
      const projects = await apis.cloud.project.$get();
      console.log(`This host is not visible in your VPS, Scanning your ${projects.length} public cloud projects.`);
      for (const project of projects) {
        const instances = await apis.cloud.project.$(project).instance.$get();
        console.log(`Cloud Project ${project} containing ${instances.length}`);
        for (const instance of instances) {
          if (!instance.ipAddresses.filter(b => b.ip === mainIP).length)
            continue;
          serviceName = instance.id;
          const ips = await apis.cloud.project.$(project).ip.failover.$get();
          data = ips.filter(ip => ip.routedTo === instance.id).map(ip => ip.block as string);
          console.log(`Host identifyed as ${serviceName} from project ${project}`);
          break;
        }
        if (serviceName)
          break;
      }
    }
  }
  if (!serviceName) {
    throw Error('failed to serviceName');
  }
  let ipFo: string[] = data.filter(a => a != mainIP).filter(a => !~a.indexOf(':'))
  if (!ipFo.length) {
    console.log(`no ip Failover for ${serviceName} nothink to do.`)
    return;
  }
  ipFo = extendIPCCIDR(ipFo);
  console.log(`TOTAL IP: ${data.length} FailOver: ${ipFo.length}`)
  await displayConf(iface, ipFo, distrib);
}
const { version } = require('./package.json');

program.version(version)
  .description('Generate Failover configuration files for your server.');

program.command('catch-all')
  .description('Configure this host to handle all of your failover IPs.  (Only use this option if you know what you are doing)')
  .option('-i, --interface <inet>', 'force interface name if auto detection failed')
  .option('--ip <ip>', 'provide main server, and skip IP auto-detection')
  .option('-v, --verbose', 'generate verbose alias name instead of number')
  .option('-c, --cert <cache file>', 'stoge certificat in a file')
  .action(genAllFailover);

program.command('gen')
  .description('Configure this host to handle his failover IPs.')
  .option('-i, --interface <inet>', 'force interface name if auto detection failed')
  .option('--ip <ip>', 'provide main server, and skip IP auto-detection')
  .option('-v, --verbose', 'generate verbose alias name instead of number')
  .option('-c, --cert <cache file>', 'stoge certificat in a file')
  .action(genFailover);

program.parse();

