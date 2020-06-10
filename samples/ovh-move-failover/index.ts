import ApiIp, { ip, Ip } from '@ovh-api/ip'
import Ovh from '@ovh-api/api'
import Bluebird from 'bluebird';
import program from 'commander';

let api: Ip;

async function getValiDest(toMove: ip.Ip[]): Promise<ip.Destination[]> {
  console.log(`You select ${toMove.length} ip for migration:`);
  console.log(`${toMove.map(b => b.ip).join(', ')}`);
  console.log();
  let dests: ip.Destinations | undefined;;
  for (const theIp of toMove) {
    try {
      dests = await api.$(theIp.ip.replace(/\//g, '%2F')).move.$get();
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

async function indexSource(): Promise<{ [key: string]: ip.Ip[] }> {
  const allIps = await api.$get();
  const datas = await Bluebird.map(allIps, ip => api.$(ip.replace(/\//g, '%2F')).$get().catch(() => null), { concurrency: 20 });
  let indexed = {} as { [key: string]: ip.Ip[] };
  for (const data of datas) {
    if (!data)
      continue;
    let routedTo = '';
    if (data.routedTo)
      routedTo = data.routedTo.serviceName || '';
    if (indexed[routedTo])
      indexed[routedTo].push(data);
    else
      indexed[routedTo] = [data];
    indexed[data.ip] = [data];
  }
  return indexed;
}

async function main(source: string, dest: string) {
  console.log(`Migrate ${source} to ${dest}`);
  const accessRules = `GET /ip, GET /ip/*, POST /ip/*/move, GET /ip/*/move`
  let ovh = new Ovh({ accessRules, certCache: program.cache });
  api = ApiIp(ovh);
  const indexed = await indexSource();
  const toMove = indexed[source];
  if (!toMove) {
    if (source)
      console.log(`Can not find source: ${source}`);
    console.log(`available sources are:`);
    for (const key of Object.keys(indexed)) {
      console.log(`- ${key} (constains ${indexed[key].length} IP)`)
    }
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
  await Bluebird.map(toMove, async (toMove2: ip.Ip) => {
    const ip = toMove2.ip.replace(/\//g, '%2F');
    let t = new Date().getTime();
    let task: ip.IpTask;
    try {
      task = await api.$(ip).move.$post(validDest);
      console.log(`Start Moving ${toMove2.ip} to ${dest}`);
    } catch (e) {
      noMovable.push(toMove2.ip);
      return;
    }
    while (true) {
        await Bluebird.delay(1000);
        try {
          task = await api.$(ip).task.$(task.taskId).$get();
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