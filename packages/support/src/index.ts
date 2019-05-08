import { ApiCommon, OvhEngine, OvhParamType } from '@ovh-api/common';
/**
 * Support ticket message
 */
export interface SupportMessage {
  /**
   * Message body
   *
   */
  body?: string;
  /**
   * Message creation date
   *
   */
  creationDate?: string;
  /**
   * Message sender type
   *
   */
  from?: SupportMessageSenderEnum;
  /**
   * Message identifier
   *
   */
  messageId?: number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: number;
  /**
   * Message last update date
   *
   */
  updateDate?: string;
}
/**
 * Message sender type
 */
export type SupportMessageSenderEnum = 'customer' | 'support';
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Message identifier
   *
   */
  messageId?: number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: number;
  /**
   * Ticket external number
   *
   */
  ticketNumber?: number;
}
/**
 * Support Ticket
 */
export interface SupportTicket {
  /**
   * Customer account identifier
   *
   */
  accountId?: string;
  /**
   * Can this ticket be closed or not
   *
   */
  canBeClosed?: boolean;
  /**
   * Ticket request category
   *
   */
  category?: SupportTicketCategoryEnum;
  /**
   * Ticket creation date
   *
   */
  creationDate?: string;
  /**
   * Sender type of last message
   *
   */
  lastMessageFrom?: SupportMessageSenderEnum;
  /**
   * Product service concerned by ticket
   *
   */
  product?: SupportTicketProductEnum;
  /**
   * Ticket score
   *
   */
  score?: string;
  /**
   * Name of service concerned by ticket
   *
   */
  serviceName?: string;
  /**
   * State of ticket
   *
   */
  state?: SupportTicketStatusEnum;
  /**
   * Ticket subject
   *
   */
  subject?: string;
  /**
   * Ticket identifier
   *
   */
  ticketId?: number;
  /**
   * Ticket external number
   *
   */
  ticketNumber?: number;
  /**
   * Ticket type
   *
   */
  type?: SupportTicketTypeEnum;
  /**
   * Ticket last update date
   *
   */
  updateDate?: string;
}
/**
 * Ticket request category
 */
export type SupportTicketCategoryEnum = 'assistance' | 'billing' | 'incident';
/**
 * Ticket product
 */
export type SupportTicketProductEnum = 'adsl' | 'cdn' | 'dedicated' | 'dedicated-billing' | 'dedicated-other' | 'dedicatedcloud' | 'domain' | 'exchange' | 'fax' | 'hosting' | 'housing' | 'iaas' | 'mail' | 'network' | 'publiccloud' | 'sms' | 'ssl' | 'storage' | 'telecom-billing' | 'telecom-other' | 'voip' | 'vps' | 'web-billing' | 'web-other';
/**
 * Support ticket statuses
 */
export type SupportTicketStatusEnum = 'closed' | 'open' | 'unknown';
/**
 * Ticket request subcategory
 */
export type SupportTicketSubCategoryEnum = 'alerts' | 'autorenew' | 'bill' | 'down' | 'inProgress' | 'new' | 'other' | 'perfs' | 'start' | 'usage';
/**
 * Ticket type (criticalIntervention requires VIP support level)
 */
export type SupportTicketTypeEnum = 'criticalIntervention' | 'genericRequest';
type PathsSupportGET = '/support/tickets' | 
'/support/tickets/{ticketId}' | 
'/support/tickets/{ticketId}/canBeScored' | 
'/support/tickets/{ticketId}/messages';

type PathsSupportPOST = '/support/tickets/create' | 
'/support/tickets/{ticketId}/close' | 
'/support/tickets/{ticketId}/reopen' | 
'/support/tickets/{ticketId}/reply' | 
'/support/tickets/{ticketId}/score';

export class ApiSupport extends ApiCommon {
  constructor(engine: OvhEngine) {
    super(engine);
  }
  /**
  List support tickets identifiers for this service
  List support tickets identifiers for this service
  **/
  public get(path: '/support/tickets'): Promise<number[]>;
  /**
  Get ticket
  Get ticket
  **/
  public get(path: '/support/tickets/{ticketId}', params: {ticketId: number}): Promise<SupportTicket>;
  /**
  Check whether ticket can be scored
  Checks whether ticket can be scored
  **/
  public get(path: '/support/tickets/{ticketId}/canBeScored', params: {ticketId: number}): Promise<boolean>;
  /**
  Get ticket messages
  Get ticket messages
  **/
  public get(path: '/support/tickets/{ticketId}/messages', params: {ticketId: number}): Promise<SupportMessage[]>;
  public get(path: PathsSupportGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Create a new ticket
  Create a new ticket
  **/
  public post(path: '/support/tickets/create'): Promise<SupportNewMessageInfo>;
  /**
  Close ticket
  Close ticket
  **/
  public post(path: '/support/tickets/{ticketId}/close', params: {ticketId: number}): Promise<void>;
  /**
  Reopen a ticket
  Reopen a ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reopen', params: {ticketId: number}): Promise<void>;
  /**
  Reply to ticket
  Reply to ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reply', params: {ticketId: number}): Promise<void>;
  /**
  Set ticket score
  Set ticket score
  **/
  public post(path: '/support/tickets/{ticketId}/score', params: {ticketId: number}): Promise<void>;
  public post(path: PathsSupportPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
