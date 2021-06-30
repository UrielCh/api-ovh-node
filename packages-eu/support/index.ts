import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /support Models
 * Source: https://eu.api.ovh.com/1.0/support.json
 */
export namespace support {
    /**
     * Support ticket message
     * interface fullName: support.Message.Message
     */
    export interface Message {
        body: string;
        creationDate: string;
        from: support.MessageSenderEnum;
        messageId: number;
        ticketId: number;
        updateDate: string;
    }
    /**
     * Message sender type
     * type fullname: support.MessageSenderEnum
     */
    export type MessageSenderEnum = "customer" | "support"
    /**
     * Newly created support identifiers
     * interface fullName: support.NewMessageInfo.NewMessageInfo
     */
    export interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
    /**
     * Support Ticket
     * interface fullName: support.Ticket.Ticket
     */
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
    /**
     * Ticket request category
     * type fullname: support.TicketCategoryEnum
     */
    export type TicketCategoryEnum = "assistance" | "billing" | "incident"
    /**
     * Ticket product
     * type fullname: support.TicketProductEnum
     */
    export type TicketProductEnum = "adsl" | "cdn" | "dedicated" | "dedicated-billing" | "dedicated-other" | "dedicatedcloud" | "domain" | "exchange" | "fax" | "hosting" | "housing" | "iaas" | "mail" | "network" | "publiccloud" | "sms" | "ssl" | "storage" | "telecom-billing" | "telecom-other" | "vac" | "voip" | "vps" | "web-billing" | "web-other"
    /**
     * Support ticket statuses
     * type fullname: support.TicketStatusEnum
     */
    export type TicketStatusEnum = "closed" | "open" | "unknown"
    /**
     * Ticket request subcategory
     * type fullname: support.TicketSubCategoryEnum
     */
    export type TicketSubCategoryEnum = "alerts" | "autorenew" | "bill" | "down" | "inProgress" | "new" | "other" | "perfs" | "start" | "usage"
    /**
     * Ticket type (criticalIntervention requires VIP support level)
     * type fullname: support.TicketTypeEnum
     */
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
 * Api model for /support
 */
export interface Support {
    tickets: {
        /**
         * List support tickets identifiers for this service
         * GET /support/tickets
         */
        $get(params?: { archived?: boolean, category?: support.TicketCategoryEnum, maxCreationDate?: string, minCreationDate?: string, product?: support.TicketProductEnum, serviceName?: string, status?: support.TicketStatusEnum, subject?: string, ticketNumber?: string }): Promise<number[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        create: {
            /**
             * Create a new ticket
             * POST /support/tickets/create
             */
            $post(params: { body: string, category?: support.TicketCategoryEnum, product?: support.TicketProductEnum, serviceName?: string, subcategory?: support.TicketSubCategoryEnum, subject: string, type: support.TicketTypeEnum }): Promise<support.NewMessageInfo>;
        }
        $(ticketId: number): {
            /**
             * Get ticket
             * GET /support/tickets/{ticketId}
             */
            $get(): Promise<support.Ticket>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeScored: {
                /**
                 * Checks whether ticket can be scored
                 * GET /support/tickets/{ticketId}/canBeScored
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            close: {
                /**
                 * Close ticket
                 * POST /support/tickets/{ticketId}/close
                 */
                $post(): Promise<void>;
            }
            messages: {
                /**
                 * Get ticket messages
                 * GET /support/tickets/{ticketId}/messages
                 */
                $get(): Promise<support.Message[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reopen: {
                /**
                 * Reopen a ticket
                 * POST /support/tickets/{ticketId}/reopen
                 */
                $post(params: { body: string }): Promise<void>;
            }
            reply: {
                /**
                 * Reply to ticket
                 * POST /support/tickets/{ticketId}/reply
                 */
                $post(params: { body: string }): Promise<void>;
            }
            score: {
                /**
                 * Set ticket score
                 * POST /support/tickets/{ticketId}/score
                 */
                $post(params: { score: string, scoreComment?: string }): Promise<void>;
            }
        };
    }
}
