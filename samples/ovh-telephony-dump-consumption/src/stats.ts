import { Connection } from "typeorm";
import { VoiceConsumption } from "./entity/VoiceConsumption";

function fmt(num: string) {
    return num.replace(/^0033(\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '0$1 $2 $3 $4 $5')
}

export async function statAll(connection: Connection) {
    // AND nic="XX123456-ovh"
    // outgoing calls
    const table = 'voice_consumption';
    {
        let r0 = await connection
            .getRepository(VoiceConsumption)
            .query(`SELECT type, COUNT(*) AS count
    FROM ${table}
    GROUP BY type`) as any[]; // {type:string, count: string}
        r0.forEach(d => { d.count = parseInt(d.count) });

        let details = r0.reduce((a, v) => { a[v.type] = v.count; return a }, { line: 0, number: 0 }) as { line: number, number: number };
        let total = details.line + details.number;
        console.log('total:', total);
        console.log(`${(details.line * 100 / total).toFixed(2)} % line ${(details.number * 100 / total).toFixed(2)} % number`);
    }

    for (const type of ['line', 'number'])
    {
        console.log();
        let r1 = await connection
            .getRepository(VoiceConsumption)
            .query(`SELECT COUNT(*) AS count, SUM(priceWithoutTax) AS priceWithoutTax, dialed FROM ${table}
    WHERE calling = serviceName AND type="${type}"
    GROUP BY dialed`) as any[];
        r1.forEach(d => { d.count = parseInt(d.count); d.priceWithoutTax = parseFloat(d.priceWithoutTax) });
        const total = r1.reduce((acc, row) => { acc.count += row.count, acc.priceWithoutTax += row.priceWithoutTax; return acc }, { count: 0, priceWithoutTax: 0 })
        console.log('transfert:', total);
        // console.log(r1.length + ' DISTINCT destination');
        //const top10 = r1.sort((a, b) => b.count - a.count).slice(0, 20);
        const top10 = r1.sort((a, b) => b.priceWithoutTax - a.priceWithoutTax).slice(0, 20);
        console.log(`top ${top10.length}/${r1.length} destination:`, total);
        top10.forEach(d => console.log(`${d.count} \t ${fmt(d.dialed)} \t ${d.priceWithoutTax} euro`))
    }

    //    # appel sortant Transfer
    //    SELECT count(*) AS count, sum(priceWithoutTax) as priceWithoutTax, dialed FROM test.voice_consumption Where calling = serviceName and type="number" group by dialed order by count desc;

    /*
        let r1 = await connection
        .getRepository(VoiceConsumption)
        .query(`SELECT count(*) AS count,
        sum(priceWithoutTax) as priceWithoutTax,
        dialed
        FROM voice_consumption
        WHERE calling = serviceName and type="line"
        group by dialed`);
    
        // transfert calls
        connection
        .getRepository(VoiceConsumption)
        .query(`SELECT count(*) AS count,
        sum(priceWithoutTax) as priceWithoutTax,
        dialed
        FROM voice_consumption
        WHERE calling = serviceName and type="number"
        group by dialed`);
      */
    //.createQueryBuilder() // 'VoiceConsumption'
    //.select('consumptionId')
    //.whereInIds(calls)
    //.getRawMany();

}
