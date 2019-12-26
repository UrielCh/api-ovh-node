import { IHandyRedis } from "handy-redis";

// Generated by https://quicktype.io

// member-queue-start Entrée d'un numéro dans la file 
// bridge-agent-start Prise en charge d'un numéro dans la file
// bridge-agent-fail
// member-queue-end
// bridge-agent-end
// member-count
// agent-offering
export type LineEvent = 'start_ringing' | 'start_calling' | 'end_ringing' | 'end_calling' | 'registered';
export type QueueEvent = 'member-queue-start' | 'bridge-agent-start' | 'bridge-agent-fail' | 'member-queue-end' | 'bridge-agent-end' | 'members-count' | 'agent-offering';

// timestamp in sec as String
type TSSecString = string;

/**
 * v1
 */
export interface VoipEventV1Root {
    Session: string;
    Message: string;
    Events: VoipEventV1[];
}
/**
 * V1
 */
export interface VoipEventV1 {
    Event: LineEvent | QueueEvent;
    Token: string;
    Service: 'queues' | 'sip';
    Ressource: string;
    Timestamp: number;
    Date: string;
    Data: IEvDataQueue | IEvDataSIP;
    Details: IEvDetails;
}
/**
 * V2
 */

export type IVoipEvent = IVoipEventQueues | IVoipEventSip;

export interface IVoipEventQueues {
    event: QueueEvent;
    token: string;
    service: 'queues';
    ressource: string; // 0033900000000
    timestamp: number;
    date: string;
    data: IEvDataQueue;
    details: IEvDetails;
}


export interface IVoipEventSip {
    event: LineEvent;
    token: string;
    service: 'sip';
    ressource: string; // 0033900000000
    timestamp: number;
    date: string;
    data: IEvDataSIP;
    details: IEvDetails;
}
/**
 * V1 + V2
 */
export interface IEvDataQueue {
    Action: LineEvent | QueueEvent;
    Agent: string; // 0033900000000
    Calling: string; // 0033900000000
    Count: string; // '1'|'2'|'3' ...
    Protocol: 'sip' | string;
    Queue: string; // 0033900000000
    QueueAgent: string; // agent_0033900000000_id
    QueueAgentAnsweredTime: TSSecString; // "1559904023"
    QueueAgentCalledTime: TSSecString; // "1559904023"
    QueueAgentSystem: 'single_box' | string;
    QueueAgentUUID: string; // UUID
    QueueCause: 'Terminated' | string;
    QueueHangupCause: 'LOSE_RACE' | 'SUCCESS' | 'NO_ANSWER' | 'USER_BUSY' | 'DESTINATION_OUT_OF_ORDER' | string;
    QueueMemberCIDName: string; // +33612345678
    QueueMemberCIDNumber: string; // 0612345678
    QueueMemberJoinedTime: TSSecString; // "1559904736"
    QueueMemberLeavingTime: TSSecString; // '1559904796"
    QueueBridgeTerminatedTime: TSSecString; // '1559904796"
    QueueMemberSessionUUID: string; // UUID
    QueueMemberDNIS: string;
    QueueMemberUUID: string; // UUID
    Ts: string; // '1559904796"
}

export interface IEvDataSIP {
    Billing: string; // 0033.......
    Body: string; // "SIP/2.0 180 Ringing"
    Called: string; // "003300000000"
    CallId: string; // "xxxxx-XX-xxxxxxx-xxxxxxx_sip4.ovh.fr"
    Calling: string; // "003300000000"
    Cseq: string; //"123456789 INVITE"
    Datetime: string; // "2019-12-31 20:20:05"
    Dialed: string; // "003300000000"
    Event: LineEvent; // "start_ringing"
    Protocol: "sip";
    RelevantInfo: string;
    Ts: string; // "1564687684.230"
    TsGet: number// 1564687685626845700
}

/**
 * V1 + V2
 */
export interface IEvDetails {
    Description: string; // OVH label
    Id: string; // instAsString OVH id
    IdBillingAccount: string; // instAsString IdBillingAccount
    SimultaneousLine: string; // instAsString
    Type: 'easyHunting' | 'sipCirpack' | string;
}

export interface IEvToken {
    billingAccount: string;
    token: string;
    //    session: string;
}

export interface IOvhEventListener {
    on(event: "message", listener: (msg: IVoipEvent) => void): this;
    on(event: "error", listener: (msg: any) => void): this;
    redis(redis: IHandyRedis, channel: string): IOvhEventListener;
    listen(): Promise<any>
}
