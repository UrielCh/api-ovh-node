import { Telephony, telephony } from "@ovh-api/telephony";
import { IOvhError } from "@ovh-api/api";

const startOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

const getDateArray = function (start: Date, end: Date, part: number) {
    var arr: Date[][] = [];
    const interval = end.getTime() - start.getTime()
    const step = (interval / part) + 1;

    var dt = new Date(start);
    while (dt <= end) {
        let src = new Date(dt);
        let next = new Date(dt.getTime() + step);
        arr.push([src, next]);
        dt.setTime(next.getTime());
    }
    return arr;
}

export const getVoiceConsumption = async (apiPhone: Telephony, billingAccount: string, servicename: string, callId: number): Promise<telephony.VoiceConsumption | null> => {
    try {
        return await apiPhone.$(billingAccount).service.$(servicename).voiceConsumption.$(callId).$get();
    } catch (e) {
        console.error(`Can not Download ${billingAccount}.service.${servicename}.voiceConsumption.${callId}`, e);
    }
    return null;
}

export const getVoiceConsumptions = async (apiPhone: Telephony, billingAccount: string, servicename: string, interval?: Date[]): Promise<number[]> => {
    let options = {} as any;
    if (interval) {
        options['creationDatetime.from'] = interval[0].toISOString();
        options['creationDatetime.to'] = interval[1].toISOString();
    }
    try {
        return await apiPhone.$(billingAccount).service.$(servicename).voiceConsumption.$get(options);
    } catch (e1) {
        const e = e1 as IOvhError;
        debugger;
        console.error(e);
        console.error(`${new Date().toISOString()} ${e.message} GET /${billingAccount}/service/${servicename}/voiceConsumption, spliting the timeRange`);
    }
    if (!interval) {
        let now = new Date();
        let start = startOfMonth(now);
        start = new Date(start.getTime() - (24 * 3600000))
        now = new Date(now.getTime() + (2 * 24 * 3600000))
        interval = [start, now];
    }
    const intervals = getDateArray(interval[0], interval[1], 2);
    // console.log(interval);
    // console.log(intervals);
    let calls = new Set<number>();
    let cnts = [];
    let cnt = 0;
    for (const interval2 of intervals) {
        const subids = await getVoiceConsumptions(apiPhone, billingAccount, servicename, interval2);
        cnts.push(subids.length);
        cnt += subids.length;
        for (const id of subids)
            calls.add(id);
    }
    {
        const interval2 = intervals[0];
        const nbHours = (interval2[1].getTime() - interval2[0].getTime()) / (60000 * 60);
        let dup = '';
        if (cnt != calls.size) {
            dup = ` duplicate:(${cnt - calls.size})`
        }
        console.log(`${new Date().toISOString()} split interval (${nbHours.toFixed(1)}h) for ${billingAccount}/${servicename} from ${interval2[0].toISOString()} in ${cnts.length} for ${billingAccount}/${servicename} cnt:${JSON.stringify(cnts)} duplicate:(${cnt - calls.size})${dup}`);
    }
    return [...calls];
}
