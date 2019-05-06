import { ApiCommon } from '@ovh-api/common';
/**
 * Ticket product
 */
export type SupportTicketProductEnum = 'adsl' | 'cdn' | 'dedicated' | 'dedicated-billing' | 'dedicated-other' | 'dedicatedcloud' | 'domain' | 'exchange' | 'fax' | 'hosting' | 'housing' | 'iaas' | 'mail' | 'network' | 'publiccloud' | 'sms' | 'ssl' | 'storage' | 'telecom-billing' | 'telecom-other' | 'voip' | 'vps' | 'web-billing' | 'web-other';
/**
 * Message sender type
 */
export type SupportMessageSenderEnum = 'customer' | 'support';
/**
 * Support Ticket
 */
export interface SupportTicket {
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
  /**
   * Product service concerned by ticket
   *
   */
  product?: SupportTicketProductEnum;
  /**
   * Ticket last update date
   *
   */
  updateDate?: Date;
  /**
   * Ticket subject
   *
   */
  subject?: string;
  /**
   * Ticket type
   *
   */
  type?: SupportTicketTypeEnum;
  /**
   * Name of service concerned by ticket
   *
   */
  serviceName?: string;
  /**
   * Ticket creation date
   *
   */
  creationDate?: Date;
  /**
   * Customer account identifier
   *
   */
  accountId?: string;
  /**
   * Ticket score
   *
   */
  score?: string;
  /**
   * Can this ticket be closed or not
   *
   */
  canBeClosed?: boolean;
  /**
   * Sender type of last message
   *
   */
  lastMessageFrom?: SupportMessageSenderEnum;
  /**
   * State of ticket
   *
   */
  state?: SupportTicketStatusEnum;
  /**
   * Ticket request category
   *
   */
  category?: SupportTicketCategoryEnum;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
}
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
}
/**
 * Ticket request subcategory
 */
export type SupportTicketSubCategoryEnum = 'alerts' | 'autorenew' | 'bill' | 'down' | 'inProgress' | 'new' | 'other' | 'perfs' | 'start' | 'usage';
/**
 * Support ticket message
 */
export interface SupportMessage {
  /**
   * Message last update date
   *
   */
  updateDate?: Date;
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Message sender type
   *
   */
  from?: SupportMessageSenderEnum;
  /**
   * Message creation date
   *
   */
  creationDate?: Date;
  /**
   * Message body
   *
   */
  body?: string;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
}
/**
 * Ticket type (criticalIntervention requires VIP support level)
 */
export type SupportTicketTypeEnum = 'criticalIntervention' | 'genericRequest';
/**
 * Support ticket statuses
 */
export type SupportTicketStatusEnum = 'closed' | 'open' | 'unknown';
/**
 * Ticket request category
 */
export type SupportTicketCategoryEnum = 'assistance' | 'billing' | 'incident';
type PathssupportGET = '/support/tickets' | 
'/support/tickets/{ticketId}/messages' | 
'/support/tickets/{ticketId}' | 
'/support/tickets/{ticketId}/canBeScored';

type PathssupportPOST = '/support/tickets/{ticketId}/score' | 
'/support/tickets/{ticketId}/reply' | 
'/support/tickets/{ticketId}/close' | 
'/support/tickets/{ticketId}/reopen' | 
'/support/tickets/create';

class Apisupport extends ApiCommon {
  /**
  List support tickets identifiers for this service
  List support tickets identifiers for this service
  **/
  public get(path: '/support/tickets', pathParams: null, queryParams: {archived?: boolean, subject?: string, status?: SupportTicketStatusEnum, ticketNumber?: string, serviceName?: string, product?: SupportTicketProductEnum, category?: SupportTicketCategoryEnum, maxCreationDate?: Date, minCreationDate?: Date}): Promise<Number[]>;
  /**
  Get ticket messages
  Get ticket messages
  **/
  public get(path: '/support/tickets/{ticketId}/messages', pathParams: {ticketId?: Number}, queryParams: null): Promise<SupportMessage[]>;
  /**
  Get ticket
  Get ticket
  **/
  public get(path: '/support/tickets/{ticketId}', pathParams: {ticketId?: Number}, queryParams: null): Promise<SupportTicket>;
  /**
  Check whether ticket can be scored
  Checks whether ticket can be scored
  **/
  public get(path: '/support/tickets/{ticketId}/canBeScored', pathParams: {ticketId?: Number}, queryParams: null): Promise<boolean>;
  public get(path: PathssupportGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Set ticket score
  Set ticket score
  **/
  public post(path: '/support/tickets/{ticketId}/score', pathParams: {ticketId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Reply to ticket
  Reply to ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reply', pathParams: {ticketId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Close ticket
  Close ticket
  **/
  public post(path: '/support/tickets/{ticketId}/close', pathParams: {ticketId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Reopen a ticket
  Reopen a ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reopen', pathParams: {ticketId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Create a new ticket
  Create a new ticket
  **/
  public post(path: '/support/tickets/create', pathParams: null, queryParams: null, bodyParams: null): Promise<SupportNewMessageInfo>;
  public post(path: PathssupportPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}
