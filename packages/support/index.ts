import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace support {
    //support.Message
    // fullName: support.Message.Message
    export interface Message {
        body?: string;
        creationDate?: string;
        from?: OVH.support.MessageSenderEnum;
        messageId?: number;
        ticketId?: number;
        updateDate?: string;
    }
    //support.MessageSenderEnum
    export type MessageSenderEnum = "customer" | "support"
    //support.NewMessageInfo
    // fullName: support.NewMessageInfo.NewMessageInfo
    export interface NewMessageInfo {
        messageId?: number;
        ticketId?: number;
        ticketNumber?: number;
    }
    //support.Ticket
    // fullName: support.Ticket.Ticket
    export interface Ticket {
        accountId?: string;
        canBeClosed?: boolean;
        category?: OVH.support.TicketCategoryEnum;
        creationDate?: string;
        lastMessageFrom?: OVH.support.MessageSenderEnum;
        product?: OVH.support.TicketProductEnum;
        score?: string;
        serviceName?: string;
        state?: OVH.support.TicketStatusEnum;
        subject?: string;
        ticketId?: number;
        ticketNumber?: number;
        type?: OVH.support.TicketTypeEnum;
        updateDate?: string;
    }
    //support.TicketCategoryEnum
    export type TicketCategoryEnum = "assistance" | "billing" | "incident"
    //support.TicketProductEnum
    export type TicketProductEnum = "adsl" | "cdn" | "dedicated" | "dedicated-billing" | "dedicated-other" | "dedicatedcloud" | "domain" | "exchange" | "fax" | "hosting" | "housing" | "iaas" | "mail" | "network" | "publiccloud" | "sms" | "ssl" | "storage" | "telecom-billing" | "telecom-other" | "voip" | "vps" | "web-billing" | "web-other"
    //support.TicketStatusEnum
    export type TicketStatusEnum = "closed" | "open" | "unknown"
    //support.TicketSubCategoryEnum
    export type TicketSubCategoryEnum = "alerts" | "autorenew" | "bill" | "down" | "inProgress" | "new" | "other" | "perfs" | "start" | "usage"
    //support.TicketTypeEnum
    export type TicketTypeEnum = "criticalIntervention" | "genericRequest"
}
// Apis harmony
// path /support
export interface Support {
    tickets:  {
        // GET /support/tickets
        $get(param?: {archived?: boolean, category?: support.TicketCategoryEnum, maxCreationDate?: string, minCreationDate?: string, product?: support.TicketProductEnum, serviceName?: string, status?: support.TicketStatusEnum, subject?: string, ticketNumber?: string}): Promise<number[]>;
        create:  {
            // POST /support/tickets/create
            $post(body?: {body: string, category?: support.TicketCategoryEnum, product?: support.TicketProductEnum, serviceName?: string, subcategory?: support.TicketSubCategoryEnum, subject: string, type: support.TicketTypeEnum}): Promise<support.NewMessageInfo>;
        }
        [keys: string]: {
            // GET /support/tickets/{ticketId}
            $get(): Promise<support.Ticket>;
            canBeScored:  {
                // GET /support/tickets/{ticketId}/canBeScored
                $get(): Promise<boolean>;
            }
            close:  {
                // POST /support/tickets/{ticketId}/close
                $post(): Promise<void>;
            }
            messages:  {
                // GET /support/tickets/{ticketId}/messages
                $get(): Promise<support.Message[]>;
            }
            reopen:  {
                // POST /support/tickets/{ticketId}/reopen
                $post(body?: {body: string}): Promise<void>;
            }
            reply:  {
                // POST /support/tickets/{ticketId}/reply
                $post(body?: {body: string}): Promise<void>;
            }
            score:  {
                // POST /support/tickets/{ticketId}/score
                $post(body?: {score: string, scoreComment?: string}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsSupportGET = '/support/tickets' |
  '/support/tickets/{ticketId}' |
  '/support/tickets/{ticketId}/canBeScored' |
  '/support/tickets/{ticketId}/messages';

type PathsSupportPOST = '/support/tickets/create' |
  '/support/tickets/{ticketId}/close' |
  '/support/tickets/{ticketId}/reopen' |
  '/support/tickets/{ticketId}/reply' |
  '/support/tickets/{ticketId}/score';

export class ApiSupport extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * List support tickets identifiers for this service
   * List support tickets identifiers for this service
   */
  public get(path: '/support/tickets', params: {archived?: boolean, category?: OVH.support.TicketCategoryEnum, maxCreationDate?: string, minCreationDate?: string, product?: OVH.support.TicketProductEnum, serviceName?: string, status?: OVH.support.TicketStatusEnum, subject?: string, ticketNumber?: string}): Promise<number[]>;
  /**
   * Get ticket
   * Get ticket
   */
  public get(path: '/support/tickets/{ticketId}', params: {ticketId: number}): Promise<support.Ticket>;
  /**
   * Check whether ticket can be scored
   * Checks whether ticket can be scored
   */
  public get(path: '/support/tickets/{ticketId}/canBeScored', params: {ticketId: number}): Promise<boolean>;
  /**
   * Get ticket messages
   * Get ticket messages
   */
  public get(path: '/support/tickets/{ticketId}/messages', params: {ticketId: number}): Promise<support.Message[]>;
  public get(path: PathsSupportGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Close ticket
   * Close ticket
   */
  public post(path: '/support/tickets/{ticketId}/close', params: {ticketId: number}): Promise<void>;
  /**
   * Reopen a ticket
   * Reopen a ticket
   */
  public post(path: '/support/tickets/{ticketId}/reopen', params: {ticketId: number, body: string}): Promise<void>;
  /**
   * Reply to ticket
   * Reply to ticket
   */
  public post(path: '/support/tickets/{ticketId}/reply', params: {ticketId: number, body: string}): Promise<void>;
  /**
   * Set ticket score
   * Set ticket score
   */
  public post(path: '/support/tickets/{ticketId}/score', params: {ticketId: number, score: string, scoreComment?: string}): Promise<void>;
  /**
   * Create a new ticket
   * Create a new ticket
   */
  public post(path: '/support/tickets/create', params: {body: string, category?: OVH.support.TicketCategoryEnum, product?: OVH.support.TicketProductEnum, serviceName?: string, subcategory?: OVH.support.TicketSubCategoryEnum, subject: string, type: OVH.support.TicketTypeEnum}): Promise<support.NewMessageInfo>;
  public post(path: PathsSupportPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}