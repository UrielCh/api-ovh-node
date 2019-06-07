import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Return credit balance informations structure
 */
export interface FreefaxBalanceInformations {
  /**
   * The number of equivalement remaining french faxs
   *
   */
  faxs: number;
  /**
   * Total balance available in points
   *
   */
  points: number;
}
/**
 * Freefax properties
 */
export interface FreefaxFreefaxProperties {
  /**
   * Number of max tentative of fax sending
   *
   */
  faxMaxCall: TelephonyFaxSendingTries;
  /**
   * Quality of fax sending
   *
   */
  faxQuality: TelephonyFaxQualityEnum;
  /**
   * Customised freefax header
   *
   */
  faxTagLine: string;
  /**
   * FROM email header
   *
   */
  fromEmail: string;
  /**
   * Name of the sender of the email
   *
   */
  fromName: string;
  /**
   * Freefax number in international format
   *
   */
  number: string;
  /**
   * Email address to redirect fax response.
   *
   */
  redirectionEmail: string[];
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
/**
 * Available quality for fax documents
 */
export type TelephonyFaxQualityEnum = 'best' | 'high' | 'normal';
/**
 * Number of tries when sending a fax
 */
export type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Voicemail audio format
 */
export type TelephonyServiceVoicemailAudioFormatEnum = 'aiff' | 'au' | 'flac' | 'mp3' | 'ogg' | 'wav';
/**
 * Voicemail configuration
 */
export type TelephonyServiceVoicemailMailOptionEnum = 'attachment' | 'simple';
/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
  /**
   */
  email: string;
  /**
   */
  type: TelephonyServiceVoicemailMailOptionEnum;
}
/**
 * All existing type of routing for a voicemail
 */
export type TelephonyVoicefaxRoutingEnum = 'fax' | 'voicemail';
/**
 * Greeting type
 */
export type TelephonyVoicemailGreetingEnum = 'default' | 'full' | 'short';
/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
  /**
   * The external voicemail number
   *
   */
  external: string;
  /**
   * The internal voicemail number
   *
   */
  internal: string;
}
/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  /**
   * Name of the voicemail panel announce file
   *
   */
  annouceMessage: string;
  /**
   * Format of the voicemail audio file attached to emails
   *
   */
  audioFormat: TelephonyServiceVoicemailAudioFormatEnum;
  /**
   * Don't allow callers to leave voicemails
   *
   */
  doNotRecord: boolean;
  /**
   * Force password request to access the voicemail panel
   *
   */
  forcePassword: boolean;
  /**
   * Email address from which emails will be sent
   *
   */
  fromEmail: string;
  /**
   * Name from which emails will be sent
   *
   */
  fromName: string;
  /**
   * Sound ID of the long greeeting
   *
   */
  fullGreetingSoundId?: number;
  /**
   * Type of the greeting to play
   *
   */
  greetingType: TelephonyVoicemailGreetingEnum;
  /**
   * Current voicemail version
   *
   */
  isNewVersion: boolean;
  /**
   * Don't delete voicemails after they've been sent by email
   *
   */
  keepMessage: boolean;
  /**
   * Email addresses to notify when a new voicemail is left
   *
   */
  redirectionEmails: TelephonyServiceVoicemailNotifications[];
  /**
   * Sound ID of the short greeting played before an automated message
   *
   */
  shortGreetingSoundId?: number;
  /**
   * Play the temporary greeting instead of the regular one
   *
   */
  temporaryGreetingActivated: boolean;
  /**
   * Sound ID of the temporary greeeting
   *
   */
  temporaryGreetingSoundId?: number;
  /**
   * Quantity of unread voicemails
   *
   */
  unreadMessages: number;
}
type PathsFreefaxGET = '/freefax' | 
'/freefax/credits' | 
'/freefax/{serviceName}' | 
'/freefax/{serviceName}/mainService' | 
'/freefax/{serviceName}/serviceInfos' | 
'/freefax/{serviceName}/voicemail' | 
'/freefax/{serviceName}/voicemail/routing' | 
'/freefax/{serviceName}/voicemail/voicemailNumbers';

type PathsFreefaxPUT = '/freefax/{serviceName}' | 
'/freefax/{serviceName}/serviceInfos' | 
'/freefax/{serviceName}/voicemail';

type PathsFreefaxPOST = '/freefax/{serviceName}/changePassword' | 
'/freefax/{serviceName}/voicemail/changePassword' | 
'/freefax/{serviceName}/voicemail/changeRouting';

export class ApiFreefax extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/freefax'): Promise<string[]>;
  /**
  Get the credit balance and the remaining pages available for all our freefax
  Get the credit balance and the remaining pages available for all our freefax
  **/
  public get(path: '/freefax/credits'): Promise<FreefaxBalanceInformations>;
  /**
  Freefax properties
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}', params: {serviceName: string}): Promise<FreefaxFreefaxProperties>;
  /**
  mainService operations
  Main service attached to freefax
  **/
  public get(path: '/freefax/{serviceName}/mainService', params: {serviceName: string}): Promise<string>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  Voicemail Properties
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}/voicemail', params: {serviceName: string}): Promise<TelephonyVoicemailProperties>;
  /**
  routing operations
  Get the status of the voicemail. Available only if the line has fax capabilities
  **/
  public get(path: '/freefax/{serviceName}/voicemail/routing', params: {serviceName: string}): Promise<TelephonyVoicefaxRoutingEnum>;
  /**
  voicemailNumbers operations
  Get number for internal and external voicemail
  **/
  public get(path: '/freefax/{serviceName}/voicemail/voicemailNumbers', params: {serviceName: string}): Promise<TelephonyVoicemailNumbers>;
  public get(path: PathsFreefaxGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Freefax properties
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}', params: {serviceName: string, body: FreefaxFreefaxProperties}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}/serviceInfos', params: {serviceName: string, body: ServicesService}): Promise<void>;
  /**
  Voicemail Properties
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}/voicemail', params: {serviceName: string, body: TelephonyVoicemailProperties}): Promise<void>;
  public put(path: PathsFreefaxPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changePassword operations
  Generates a new password for your fax account
  **/
  public post(path: '/freefax/{serviceName}/changePassword', params: {serviceName: string}): Promise<string>;
  /**
  changePassword operations
  Change the voicemail password. It must be 4 digit
  **/
  public post(path: '/freefax/{serviceName}/voicemail/changePassword', params: {serviceName: string, password: string}): Promise<void>;
  /**
  changeRouting operations
  Disable/Enable voicemail. Available only if the line has fax capabilities
  **/
  public post(path: '/freefax/{serviceName}/voicemail/changeRouting', params: {serviceName: string, routing: TelephonyVoicefaxRoutingEnum}): Promise<void>;
  public post(path: PathsFreefaxPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
export default ApiFreefax;
