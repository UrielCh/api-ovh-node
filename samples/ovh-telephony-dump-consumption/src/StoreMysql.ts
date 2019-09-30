import { createConnection, Connection, ConnectionOptions } from "typeorm";
import { VoiceConsumption } from './entity/VoiceConsumption'
import { telephony } from '@ovh-api/telephony'

export class StoreMysql {
  connection?: Connection;
  cnt = 0;
  cache: VoiceConsumption[];
  constructor() {
    this.cache = [];
  }

  async init(options: ConnectionOptions) {
    this.connection = await createConnection(options)
  }

  getCnx(): Connection {
    if (!this.connection)
      throw Error('you must call init first');
    return this.connection;
  }

  async add(billingAccount: string, serviceName: string, data: telephony.VoiceConsumption, type: 'line' | 'number') {
    let value = new VoiceConsumption(billingAccount, serviceName, data, type);
    this.cache.push(value);
    this.cnt++;
    if (this.cache.length >= 500) {
      this.flush();
    }
  }

  async filter(billingAccount: string, serviceName: string, calls: number[]) {
    const hits = await this.getCnx()
      .getRepository(VoiceConsumption)
      .createQueryBuilder() // 'VoiceConsumption'
      .select('consumptionId')
      .whereInIds(calls)
      .getRawMany();
    if (!hits.length) {
      return calls;
    }
    const set = new Set(hits.map(e => parseInt(e.consumptionId)))
    const calls2 = calls.filter(a => !set.has(a));
    return calls2;
  }

  async flush() {
    if (this.cache.length) {
      console.log(`${new Date().toISOString()} flushing ${(this.cnt/1000).toFixed(1)}K Entry`);
      const old = this.cache;
      this.cache = [];
      await this.getCnx().manager.save(old);
    }
  }

  async close() {
    await this.flush();
    this.getCnx().close();
  }
}
