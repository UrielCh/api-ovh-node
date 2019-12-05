import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /support Models
 */
export declare namespace support {
    interface Message {
        body: string;
        creationDate: string;
        from: support.MessageSenderEnum;
        messageId: number;
        ticketId: number;
        updateDate: string;
    }
    type MessageSenderEnum = "customer" | "support";
    interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
    interface Ticket {
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
    type TicketCategoryEnum = "assistance" | "billing" | "incident";
    type TicketProductEnum = "adsl" | "cdn" | "dedicated" | "dedicated-billing" | "dedicated-other" | "dedicatedcloud" | "domain" | "exchange" | "fax" | "hosting" | "housing" | "iaas" | "mail" | "network" | "publiccloud" | "sms" | "ssl" | "storage" | "telecom-billing" | "telecom-other" | "voip" | "vps" | "web-billing" | "web-other";
    type TicketStatusEnum = "closed" | "open" | "unknown";
    type TicketSubCategoryEnum = "alerts" | "autorenew" | "bill" | "down" | "inProgress" | "new" | "other" | "perfs" | "start" | "usage";
    type TicketTypeEnum = "criticalIntervention" | "genericRequest";
}
/**
 * END API /support Models
 */
export declare function proxySupport(ovhEngine: OvhRequestable): Support;
export default proxySupport;
/**
 * Api Proxy model
 */ export interface Support {
    tickets: {
        $get(params?: {
            archived?: boolean;
            category?: support.TicketCategoryEnum;
            maxCreationDate?: string;
            minCreationDate?: string;
            product?: support.TicketProductEnum;
            serviceName?: string;
            status?: support.TicketStatusEnum;
            subject?: string;
            ticketNumber?: string;
        }): Promise<number[]>;
        create: {
            $post(params: {
                body: string;
                category?: support.TicketCategoryEnum;
                product?: support.TicketProductEnum;
                serviceName?: string;
                subcategory?: support.TicketSubCategoryEnum;
                subject: string;
                type: support.TicketTypeEnum;
            }): Promise<support.NewMessageInfo>;
        };
        $(ticketId: number): {
            $get(): Promise<support.Ticket>;
            canBeScored: {
                $get(): Promise<boolean>;
            };
            close: {
                $post(): Promise<void>;
            };
            messages: {
                $get(): Promise<support.Message[]>;
            };
            reopen: {
                $post(params: {
                    body: string;
                }): Promise<void>;
            };
            reply: {
                $post(params: {
                    body: string;
                }): Promise<void>;
            };
            score: {
                $post(params: {
                    score: string;
                    scoreComment?: string;
                }): Promise<void>;
            };
        };
    };
    /**
     * List support tickets identifiers for this service
     * List support tickets identifiers for this service
     */
    get(path: '/support/tickets'): (params?: {
        archived?: boolean;
        category?: support.TicketCategoryEnum;
        maxCreationDate?: string;
        minCreationDate?: string;
        product?: support.TicketProductEnum;
        serviceName?: string;
        status?: support.TicketStatusEnum;
        subject?: string;
        ticketNumber?: string;
    }) => Promise<number[]>;
    /**
     * Get ticket
     * Get ticket
     */
    get(path: '/support/tickets/{ticketId}'): (params: {
        ticketId: number;
    }) => Promise<support.Ticket>;
    /**
     * Check whether ticket can be scored
     * Checks whether ticket can be scored
     */
    get(path: '/support/tickets/{ticketId}/canBeScored'): (params: {
        ticketId: number;
    }) => Promise<boolean>;
    /**
     * Get ticket messages
     * Get ticket messages
     */
    get(path: '/support/tickets/{ticketId}/messages'): (params: {
        ticketId: number;
    }) => Promise<support.Message[]>;
    /**
     * Close ticket
     * Close ticket
     */
    post(path: '/support/tickets/{ticketId}/close'): (params: {
        ticketId: number;
    }) => Promise<void>;
    /**
     * Reopen a ticket
     * Reopen a ticket
     */
    post(path: '/support/tickets/{ticketId}/reopen'): (params: {
        ticketId: number;
        body: string;
    }) => Promise<void>;
    /**
     * Reply to ticket
     * Reply to ticket
     */
    post(path: '/support/tickets/{ticketId}/reply'): (params: {
        ticketId: number;
        body: string;
    }) => Promise<void>;
    /**
     * Set ticket score
     * Set ticket score
     */
    post(path: '/support/tickets/{ticketId}/score'): (params: {
        ticketId: number;
        score: string;
        scoreComment?: string;
    }) => Promise<void>;
    /**
     * Create a new ticket
     * Create a new ticket
     */
    post(path: '/support/tickets/create'): (params: {
        body: string;
        category?: support.TicketCategoryEnum;
        product?: support.TicketProductEnum;
        serviceName?: string;
        subcategory?: support.TicketSubCategoryEnum;
        subject: string;
        type: support.TicketTypeEnum;
    }) => Promise<support.NewMessageInfo>;
}
