import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /support Models
 * Source: https://api.us.ovhcloud.com/1.0/support.json
 */
export namespace support {
    // interface fullName: support.Message.Message
    export interface Message {
        body: string;
        creationDate: string;
        from: support.MessageSenderEnum;
        messageId: number;
        ticketId: number;
        updateDate: string;
    }
    // type fullname: support.MessageSenderEnum
    export type MessageSenderEnum = "customer" | "support"
    // interface fullName: support.NewMessageInfo.NewMessageInfo
    export interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
    // interface fullName: support.Ticket.Ticket
    export interface Ticket {
        accountId: string;
        canBeClosed: boolean;
        category?: support.TicketCategoryEnum;
        creationDate: string;
        lastMessageFrom: support.MessageSenderEnum;
        product?: support.TicketProductEnum;
        score: string;
        serviceName?: string;
        state: support.TicketStatusEnum;
        subject: string;
        ticketId: number;
        ticketNumber: number;
        type: support.TicketTypeEnum;
        updateDate: string;
    }
    // type fullname: support.TicketCategoryEnum
    export type TicketCategoryEnum = "assistance" | "billing" | "incident"
    // type fullname: support.TicketProductEnum
    export type TicketProductEnum = "adsl" | "cdn" | "dedicated" | "dedicated-billing" | "dedicated-other" | "dedicatedcloud" | "domain" | "exchange" | "fax" | "hosting" | "housing" | "iaas" | "mail" | "network" | "publiccloud" | "sms" | "ssl" | "storage" | "telecom-billing" | "telecom-other" | "voip" | "vps" | "web-billing" | "web-other"
    // type fullname: support.TicketStatusEnum
    export type TicketStatusEnum = "closed" | "open" | "unknown"
    // type fullname: support.TicketSubCategoryEnum
    export type TicketSubCategoryEnum = "alerts" | "autorenew" | "bill" | "down" | "inProgress" | "new" | "other" | "perfs" | "start" | "usage"
    // type fullname: support.TicketTypeEnum
    export type TicketTypeEnum = "criticalIntervention" | "genericRequest"
}

/**
 * END API /support Models
 */
export function proxySupport(ovhEngine: OvhRequestable): Support {
    return buildOvhProxy(ovhEngine, '/support');
}
export default proxySupport;
/**
 * Api Proxy model
 */// Apis harmony
// path /support
export interface Support{
    tickets: {
        // GET /support/tickets
        $get(params?: {archived?: boolean, category?: support.TicketCategoryEnum, maxCreationDate?: string, minCreationDate?: string, product?: support.TicketProductEnum, serviceName?: string, status?: support.TicketStatusEnum, subject?: string, ticketNumber?: string}): Promise<number[]>;
        create: {
            // POST /support/tickets/create
            $post(params: {body: string, category?: support.TicketCategoryEnum, product?: support.TicketProductEnum, serviceName?: string, subcategory?: support.TicketSubCategoryEnum, subject: string, type: support.TicketTypeEnum}): Promise<support.NewMessageInfo>;
        }
        $(ticketId: number): {
            // GET /support/tickets/{ticketId}
            $get(): Promise<support.Ticket>;
            canBeScored: {
                // GET /support/tickets/{ticketId}/canBeScored
                $get(): Promise<boolean>;
            }
            close: {
                // POST /support/tickets/{ticketId}/close
                $post(): Promise<void>;
            }
            messages: {
                // GET /support/tickets/{ticketId}/messages
                $get(): Promise<support.Message[]>;
            }
            reopen: {
                // POST /support/tickets/{ticketId}/reopen
                $post(params: {body: string}): Promise<void>;
            }
            reply: {
                // POST /support/tickets/{ticketId}/reply
                $post(params: {body: string}): Promise<void>;
            }
            score: {
                // POST /support/tickets/{ticketId}/score
                $post(params: {score: string, scoreComment?: string}): Promise<void>;
            }
        };
    }
// Api
  /**
   * List support tickets identifiers for this service
   * List support tickets identifiers for this service
   */
  get(path: '/support/tickets'): (params?: {archived?: boolean, category?: support.TicketCategoryEnum, maxCreationDate?: string, minCreationDate?: string, product?: support.TicketProductEnum, serviceName?: string, status?: support.TicketStatusEnum, subject?: string, ticketNumber?: string}) => Promise<number[]>;
  /**
   * Get ticket
   * Get ticket
   */
  get(path: '/support/tickets/{ticketId}'): (params: {ticketId: number}) => Promise<support.Ticket>;
  /**
   * Check whether ticket can be scored
   * Checks whether ticket can be scored
   */
  get(path: '/support/tickets/{ticketId}/canBeScored'): (params: {ticketId: number}) => Promise<boolean>;
  /**
   * Get ticket messages
   * Get ticket messages
   */
  get(path: '/support/tickets/{ticketId}/messages'): (params: {ticketId: number}) => Promise<support.Message[]>;
  /**
   * Close ticket
   * Close ticket
   */
  post(path: '/support/tickets/{ticketId}/close'): (params: {ticketId: number}) => Promise<void>;
  /**
   * Reopen a ticket
   * Reopen a ticket
   */
  post(path: '/support/tickets/{ticketId}/reopen'): (params: {ticketId: number, body: string}) => Promise<void>;
  /**
   * Reply to ticket
   * Reply to ticket
   */
  post(path: '/support/tickets/{ticketId}/reply'): (params: {ticketId: number, body: string}) => Promise<void>;
  /**
   * Set ticket score
   * Set ticket score
   */
  post(path: '/support/tickets/{ticketId}/score'): (params: {ticketId: number, score: string, scoreComment?: string}) => Promise<void>;
  /**
   * Create a new ticket
   * Create a new ticket
   */
  post(path: '/support/tickets/create'): (params: {body: string, category?: support.TicketCategoryEnum, product?: support.TicketProductEnum, serviceName?: string, subcategory?: support.TicketSubCategoryEnum, subject: string, type: support.TicketTypeEnum}) => Promise<support.NewMessageInfo>;
}
