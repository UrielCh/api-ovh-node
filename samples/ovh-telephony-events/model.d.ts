declare type LineEvent = 'start_ringing' | 'start_calling' | 'end_ringing' | 'end_calling' | 'registered';
declare type queueEvent = 'member-queue-start' | 'bridge-agent-start' | 'bridge-agent-fail' | 'member-queue-end' | 'bridge-agent-end' | 'members-count' | 'agent-offering';
declare type TSSecString = string;
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
    Event: LineEvent | queueEvent;
    Token: string;
    Service: 'queues' | string;
    Ressource: string;
    Timestamp: number;
    Date: string;
    Data: Data;
    Details: Details;
}
/**
 * V2
 */
export interface VoipEventV2 {
    event: LineEvent | queueEvent;
    token: string;
    service: 'queues' | string;
    ressource: string;
    timestamp: number;
    date: string;
    data: Data;
    details: Details;
}
/**
 * V1 + V2
 */
export interface Data {
    Action: LineEvent | queueEvent;
    Agent: string;
    Calling: string;
    Count: string;
    Protocol: 'sip' | string;
    Queue: string;
    QueueAgent: string;
    QueueAgentAnsweredTime: TSSecString;
    QueueAgentCalledTime: TSSecString;
    QueueAgentSystem: 'single_box' | string;
    QueueAgentUUID: string;
    QueueCause: 'Terminated' | string;
    QueueHangupCause: 'LOSE_RACE' | 'SUCCESS' | 'NO_ANSWER' | 'USER_BUSY' | 'DESTINATION_OUT_OF_ORDER' | string;
    QueueMemberCIDName: string;
    QueueMemberCIDNumber: string;
    QueueMemberJoinedTime: TSSecString;
    QueueMemberLeavingTime: TSSecString;
    QueueBridgeTerminatedTime: TSSecString;
    QueueMemberSessionUUID: string;
    QueueMemberDNIS: string;
    QueueMemberUUID: string;
    Ts: string;
    debug?: string;
}
/**
 * V1 + V2
 */
export interface Details {
    Description: string;
    Id: string;
    IdBillingAccount: string;
    SimultaneousLine: string;
    Type: 'easyHunting' | string;
}
/**
 * For API V2
 */
export interface EventSession {
    id: string;
    creation: string;
    lastUpdate: string;
    lastConnection: string;
}
export interface gToken {
    billingAccount: string;
    token: string;
}
export interface gTokenGroup {
    groups: gToken[];
    session: string;
}
export {};
