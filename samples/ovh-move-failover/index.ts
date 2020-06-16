import ApiIp, { coreTypes, ip, Ip } from '@ovh-api/ip';
import ApiCloud, { Cloud } from '@ovh-api/cloud';
import ApiVps, { Vps } from '@ovh-api/vps';
import Ovh from '@ovh-api/api';
import Bluebird from 'bluebird';
import program from 'commander';


const accessRules = `GET /ip, GET /ip/*, POST /ip/*/move, GET /ip/*/move, GET /cloud/project/*, GET /cloud/project/*/ip/failover, GET /cloud/project, GET /vps/*`

let api: {
  ip: Ip;
  cloud: Cloud;
  vps: Vps;
}


interface IPSelection {
  key: string,
  desc: string,
  // to: string;
  // nexthop?: string;
  ips: ip.Ip[];
  type: 'IP' | 'DEST',
}

/**
 * find all IP sources
 */
async function indexSource(): Promise<{ [key: string]: IPSelection }> {
  const allIps = await api.ip.$get();
  console.log (`find ${allIps.length} IP clock`)
  const datas = await Bluebird.map(allIps, async (ip) => {
    try {
      return await api.ip.$(ip).$get()
    } catch (e) {
      // console.log(e);
    }
  }, { concurrency: 20 });
  let indexed = {} as { [key: string]: IPSelection };
  // console.log (datas)  

  api.cloud.project.$get();

  const datas2 = datas.filter(a=>a) as ip.Ip[];
  await Bluebird.map(datas2, async (data: ip.Ip) => {
    let routedTo = '';
    if (data.routedTo)
      routedTo = data.routedTo.serviceName || '';
    if (!indexed[routedTo]) {
      indexed[routedTo] = {
        key: routedTo,
        desc: '',
        ips: [],
        type: 'DEST',
      }
      let extraDesc = '';
      if (data.type === 'vps') {
        const extra = await api.vps.$(routedTo).$get();
        extraDesc = extra.displayName || extra.name;
        extraDesc += ' ';
      }
      if (data.type === 'cloud') {
        const extra = await api.cloud.project.$(routedTo).$get();
        extraDesc = extra.description || extra.project_id;
        extraDesc += ' ';
      }
      indexed[routedTo].desc =`${extraDesc}${data.type} IP`;
    }
    indexed[routedTo].ips.push(data);

    indexed[data.ip] = {
      key: data.ip,
      desc: '',
      ips: [data],
      type: 'IP',
    }
    const k2 = data.ip.replace(/\/.+/, '');
    indexed[k2] = {
      key: k2,
      desc: '',
      ips: [data],
      type: 'IP',
    }
  }, {concurrency: 10});
  // console.log (Object.keys(indexed))  
  console.log (`Start indexing public cloud`)

  const cloudProjects = await api.cloud.project.$get();
  const cloudProjectsIPss = await Bluebird.map(cloudProjects, project => api.cloud.project.$(project).ip.failover.$get(), { concurrency: 10 });
  for (let i=0; i<cloudProjects.length; i++) {
    const item = i;
    await Bluebird.map(cloudProjectsIPss[i], async cloudProjectsIP => {
      let routedTo = cloudProjectsIP.routedTo;
      if (!cloudProjectsIP.ip)
        return;
      const data: ip.Ip = {
        canBeTerminated: false,
        country: cloudProjectsIP.geoloc as coreTypes.CountryEnum,
        ip: cloudProjectsIP.ip,
        routedTo: {serviceName: cloudProjectsIP.id,},
        type: 'cloud',
      }
      if (!indexed[routedTo]) {
        const projectId = cloudProjects[item];
        indexed[routedTo] = {
          key: routedTo,
          desc: '',
          ips: [],
          type: 'DEST',
        }
        const instance = await api.cloud.project.$(projectId).instance.$(routedTo).$get();
        indexed[routedTo].desc = `public cloud ${cloudProjects} Instance ${instance.name}`;        
      }
      indexed[routedTo].ips.push(data);
    }, {concurrency: 10})
  }
  return indexed;
}

async function getValiDest(toMove: IPSelection): Promise<ip.Destination[]> {
  console.log(`You select ${toMove.ips.length} ip for migration:`);
  console.log(`${toMove.ips.map(b => b.ip).join(', ')}`);
  console.log();
  let dests: ip.Destinations | undefined;;
  for (const theIp of toMove.ips) {
    try {
      dests = await api.ip.$(theIp.ip).move.$get();
      break;
    } catch (e) {
      // some IP cause Error 500
    }
  }
  if (!dests) {
    throw Error('No movable ip failover found in source.')
  }
  let dests2 = [] as ip.Destination[];
  if (dests.cloudProject)
    dests2 = [...dests2, ...dests.cloudProject];
  if (dests.dedicatedCloud)
    dests2 = [...dests2, ...dests.dedicatedCloud];
  if (dests.dedicatedCloud)
    dests2 = [...dests2, ...dests.dedicatedCloud];
  if (dests.hostingReseller)
    dests2 = [...dests2, ...dests.hostingReseller];
  if (dests.ipLoadbalancing)
    dests2 = [...dests2, ...dests.ipLoadbalancing];
  if (dests.vps)
    dests2 = [...dests2, ...dests.vps];
    
  return dests2;  
}

async function indexDestination(dests2: ip.Destination[]) {
  const indexedDest = {} as { [key: string]: { nexthop?: string; to: string; } };
  for (const d2 of dests2) {
    const { service } = d2;
    if (d2.nexthop) {
      for (const nexthop of d2.nexthop) {
        indexedDest[nexthop] = { nexthop, to: service };
      }
    }
    if (!indexedDest[service]) {
      indexedDest[service] = { to: service };
    }
  }
  return indexedDest
}

async function main(source: string, dest: string) {
  if (!source)
    console.log('Listing all IP sopurces');
  else if (!dest)
    console.log(`List destination fo migrate ${source}`);
  else
    console.log(`Migrate ${source} to ${dest}`);

  let ovh = new Ovh({ accessRules, certCache: program.cache });
  api = {
    ip: ApiIp(ovh),
    cloud: ApiCloud(ovh),
    vps: ApiVps(ovh),
  }
  const indexed = await indexSource();
  const toMove = indexed[source];
  if (!toMove) {
    if (source) {
      console.log(`Can not find source: ${source}`);
    }
    console.log(`available sources are:`);
    for (const key of Object.keys(indexed)) {
      if (indexed[key].type == 'DEST')
        console.log(`- ${key} (${indexed[key].desc}) constains ${indexed[key].ips.length} IPs`)      
    }
    console.log(`- All IP range cand also be sevected. as 1.2.3.4 or 1.2.3.4/32 or 1.2.3.4/30...`)
    process.exit(1);
  }

  const dests2 = await getValiDest(toMove);
  const indexedDest = await indexDestination(dests2);
  const validDest = indexedDest[dest];
  if (!validDest) {
    console.error(`${dest} is not a valid destination, valid destination are:`);
    for (const d of Object.values(indexedDest)) {
      if (d.nexthop)
        console.log(`- ${d.nexthop} (from project ${d.to})`);
      else
        console.log(`- ${d.to}`);
    }
    return;
  }
  const noMovable = [] as string[];
  await Bluebird.map(toMove.ips, async (toMove2: ip.Ip) => {
    // const ip = toMove2.ip;
    let t = new Date().getTime();
    let task: ip.IpTask;
    try {
      task = await api.ip.$(toMove2.ip).move.$post(validDest);
      console.log(`Start Moving ${toMove2.ip} to ${dest}`);
    } catch (e) {
      noMovable.push(toMove2.ip);
      return;
    }
    while (true) {
        await Bluebird.delay(1000);
        try {
          task = await api.ip.$(toMove2.ip).task.$(task.taskId).$get();
        } catch (e) {
          // if task not found should be done.
          break;
        }
        if (task.status === 'todo') {
          continue;
        }
        if (task.status === 'doing') {
          continue;
        }
        if (task.status === 'done') {
          break;
        }
        console.log(`TASK ${task.taskId} status: ${task.status}`);
        // TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    }
    t = new Date().getTime() - t;
    // console.log(`Moving ${toMove2.ip} => ${JSON.stringify(validDest)} Done in ${(t/1000).toFixed(1)} Sec`);
    console.log(`Moving ${toMove2.ip} => ${dest} Done in ${(t/1000).toFixed(1)} Sec`);
  }, { concurrency: 16 });
  if (noMovable.length) {
    console.log();
    console.log(`The folowing IP can not be move: ${noMovable.join(', ')}`)
  }
}

program.version('0.0.1');
program.description('Migrate IP from source to destination, source can be any failover ip or service, if omit paral list available values');
program.option('-c, --cache <cacheFile>', 'cache cert in file');
program.arguments('[source] [destination]')
program.parse(process.argv);
const source = program.args[0];
const dest = program.args[1];
main(source, dest).catch(e => console.error(e.message));