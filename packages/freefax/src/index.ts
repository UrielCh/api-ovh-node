import { ApiCommon } from '@ovh-api/common';
/**
 * Return credit balance informations structure
 */
export interface FreefaxBalanceInformations {
  /**
   * The number of equivalement remaining french faxs
   *
   */
  faxs?: Number;
  /**
   * Total balance available in points
   *
   */
  points?: Number;
}
/**
 * Freefax properties
 */
export interface FreefaxFreefaxProperties {
  /**
   * Freefax number in international format
   *
   */
  number?: string;
  /**
   * Quality of fax sending
   *
   */
  faxQuality?: TelephonyFaxQualityEnum;
  /**
   * Email address to redirect fax response.
   *
   */
  redirectionEmail?: string[];
  /**
   * Name of the sender of the email
   *
   */
  fromName?: string;
  /**
   * Number of max tentative of fax sending
   *
   */
  faxMaxCall?: TelephonyFaxSendingTries;
  /**
   * Customised freefax header
   *
   */
  faxTagLine?: string;
  /**
   * FROM email header
   *
   */
  fromEmail?: string;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
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
  type?: TelephonyServiceVoicemailMailOptionEnum;
  /**
   */
  email?: string;
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
  external?: string;
  /**
   * The internal voicemail number
   *
   */
  internal?: string;
}
/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  /**
   * Sound ID of the temporary greeeting
   *
   */
  temporaryGreetingSoundId?: Number;
  /**
   * Quantity of unread voicemails
   *
   */
  unreadMessages?: Number;
  /**
   * Name of the voicemail panel announce file
   *
   */
  annouceMessage?: string;
  /**
   * Format of the voicemail audio file attached to emails
   *
   */
  audioFormat?: TelephonyServiceVoicemailAudioFormatEnum;
  /**
   * Email address from which emails will be sent
   *
   */
  fromEmail?: string;
  /**
   * Current voicemail version
   *
   */
  isNewVersion?: boolean;
  /**
   * Email addresses to notify when a new voicemail is left
   *
   */
  redirectionEmails?: TelephonyServiceVoicemailNotifications[];
  /**
   * Sound ID of the short greeting played before an automated message
   *
   */
  shortGreetingSoundId?: Number;
  /**
   * Don't allow callers to leave voicemails
   *
   */
  doNotRecord?: boolean;
  /**
   * Play the temporary greeting instead of the regular one
   *
   */
  temporaryGreetingActivated?: boolean;
  /**
   * Don't delete voicemails after they've been sent by email
   *
   */
  keepMessage?: boolean;
  /**
   * Name from which emails will be sent
   *
   */
  fromName?: string;
  /**
   * Type of the greeting to play
   *
   */
  greetingType?: TelephonyVoicemailGreetingEnum;
  /**
   * Force password request to access the voicemail panel
   *
   */
  forcePassword?: boolean;
  /**
   * Sound ID of the long greeeting
   *
   */
  fullGreetingSoundId?: Number;
}
type PathsfreefaxGET = '/freefax' | 
'/freefax/{serviceName}/serviceInfos' | 
'/freefax/{serviceName}/voicemail/routing' | 
'/freefax/{serviceName}/voicemail/voicemailNumbers' | 
'/freefax/{serviceName}/voicemail' | 
'/freefax/{serviceName}' | 
'/freefax/{serviceName}/mainService' | 
'/freefax/credits';

type PathsfreefaxPUT = '/freefax/{serviceName}/serviceInfos' | 
'/freefax/{serviceName}/voicemail' | 
'/freefax/{serviceName}';

type PathsfreefaxPOST = '/freefax/{serviceName}/changePassword' | 
'/freefax/{serviceName}/voicemail/changeRouting' | 
'/freefax/{serviceName}/voicemail/changePassword';

class Apifreefax extends ApiCommon {
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/freefax', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  routing operations
  Get the status of the voicemail. Available only if the line has fax capabilities
  **/
  public get(path: '/freefax/{serviceName}/voicemail/routing', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyVoicefaxRoutingEnum>;
  /**
  voicemailNumbers operations
  Get number for internal and external voicemail
  **/
  public get(path: '/freefax/{serviceName}/voicemail/voicemailNumbers', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyVoicemailNumbers>;
  /**
  Voicemail Properties
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}/voicemail', pathParams: {serviceName?: string}, queryParams: null): Promise<TelephonyVoicemailProperties>;
  /**
  Freefax properties
  Get this object properties
  **/
  public get(path: '/freefax/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<FreefaxFreefaxProperties>;
  /**
  mainService operations
  Main service attached to freefax
  **/
  public get(path: '/freefax/{serviceName}/mainService', pathParams: {serviceName?: string}, queryParams: null): Promise<string>;
  /**
  Get the credit balance and the remaining pages available for all our freefax
  Get the credit balance and the remaining pages available for all our freefax
  **/
  public get(path: '/freefax/credits', pathParams: null, queryParams: null): Promise<FreefaxBalanceInformations>;
  public get(path: PathsfreefaxGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Voicemail Properties
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}/voicemail', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Freefax properties
  Alter this object properties
  **/
  public put(path: '/freefax/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsfreefaxPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changePassword operations
  Generates a new password for your fax account
  **/
  public post(path: '/freefax/{serviceName}/changePassword', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  changeRouting operations
  Disable/Enable voicemail. Available only if the line has fax capabilities
  **/
  public post(path: '/freefax/{serviceName}/voicemail/changeRouting', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  changePassword operations
  Change the voicemail password. It must be 4 digit
  **/
  public post(path: '/freefax/{serviceName}/voicemail/changePassword', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public post(path: PathsfreefaxPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
