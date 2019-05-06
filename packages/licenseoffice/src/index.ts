import { ApiCommon } from '@ovh-api/common';
/**
 * Office domain state
 */
export type LicenseOfficeDomainStateEnum = 'ok' | 'unverified';
/**
 * Office Licence
 */
export type LicenseOfficeLicenceEnum = 'officeBusiness' | 'officeProPlus';
/**
 * Office domain
 */
export interface LicenseOfficeOfficeDomain {
  /**
   * Domain name
   *
   */
  domainName?: string;
  /**
   * Domain state
   *
   */
  status?: LicenseOfficeDomainStateEnum;
  /**
   * TXT entry required for domain validation
   *
   */
  txtEntry?: string;
}
/**
 * Office subscription
 */
export interface LicenseOfficeOfficeSubscription {
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Subscription's unique identifier
   *
   */
  id?: Number;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * License's type id
   *
   */
  licenseId?: Number;
  /**
   * Number of available licenses
   *
   */
  quantity?: Number;
  /**
   * Current state of the subscription
   *
   */
  status?: string;
  /**
   * Pending task's unique identifier
   *
   */
  taskPendingId?: Number;
}
/**
 * Office task
 */
export interface LicenseOfficeOfficeTask {
  /**
   * Completion date
   *
   */
  finishDate?: Date;
  /**
   * Function name
   *
   */
  function?: string;
  /**
   * Task's unique identifier
   *
   */
  id?: Number;
  /**
   * Task state
   *
   */
  status?: LicenseOfficeTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate?: Date;
}
/**
 * Office tenant
 */
export interface LicenseOfficeOfficeTenant {
  /**
   * Contact's address line
   *
   */
  address?: string;
  /**
   * Contact's city
   *
   */
  city?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Tenant's display name
   *
   */
  displayName?: string;
  /**
   * Contact's fisrt name
   *
   */
  firstName?: string;
  /**
   * Contact's fisrt name
   *
   */
  lastName?: string;
  /**
   * Primary phone number
   *
   */
  phone?: string;
  /**
   * Tenant's service type
   *
   */
  serviceType?: LicenseOfficeServiceTypeEnum;
  /**
   */
  status?: LicenseOfficeServiceStateEnum;
  /**
   * Contact's zip code
   *
   */
  zipCode?: string;
}
/**
 * Office user
 */
export interface LicenseOfficeOfficeUser {
  /**
   * Email used to activate Microsoft Office
   *
   */
  activationEmail?: string;
  /**
   * Whether or not this user slot will be resigned at the next renew period
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * User's first name
   *
   */
  firstName?: string;
  /**
   * Specify if the user is actually a user slot (configureme) or a real user
   *
   */
  isVirtual?: boolean;
  /**
   * User's last name
   *
   */
  lastName?: string;
  /**
   * Licenses attributed to the user
   *
   */
  licences?: LicenseOfficeLicenceEnum[];
  /**
   * User state
   *
   */
  status?: LicenseOfficeUserStateEnum;
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
}
/**
 * Office tenant state
 */
export type LicenseOfficeServiceStateEnum = 'creating' | 'inMaintenance' | 'ok' | 'suspended';
/**
 * Type of service
 */
export type LicenseOfficeServiceTypeEnum = 'payAsYouGo' | 'prepaid';
/**
 * License usage statistic.
 */
export interface LicenseOfficeStatistic {
  /**
   * Number of available seats in the subscription
   *
   */
  available?: Number;
  /**
   * License type's unique identifier
   *
   */
  licenseId?: Number;
  /**
   * Number of used seats in the subscription
   *
   */
  used?: Number;
}
/**
 * License usage statistics.
 */
export interface LicenseOfficeStatistics {
  /**
   * Date of the statistics.
   *
   */
  date?: Date;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines?: LicenseOfficeStatisticsLine[];
}
/**
 * License usage statistics line.
 */
export interface LicenseOfficeStatisticsLine {
  /**
   * Count of activated licenses at the end of the day.
   *
   */
  endOfDayCount?: Number;
  /**
   * Type of the Office license.
   *
   */
  licenceType?: LicenseOfficeLicenceEnum;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount?: Number;
}
/**
 * Exchange task status
 */
export type LicenseOfficeTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Office user  state
 */
export type LicenseOfficeUserStateEnum = 'creating' | 'deleting' | 'ok';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsLicenseofficeGET = '/license/office' | 
'/license/office/{serviceName}/domain/{domainName}' | 
'/license/office/{serviceName}/domain' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}/pendingTask' | 
'/license/office/{serviceName}/pendingTask/{id}' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/user/{activationEmail}' | 
'/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/usageStatistics';

type PathsLicenseofficePUT = '/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/user/{activationEmail}';

type PathsLicenseofficePOST = '/license/office/{serviceName}/user/{activationEmail}/changePassword' | 
'/license/office/{serviceName}/user';

type PathsLicenseofficeDELETE = '/license/office/{serviceName}/user/{activationEmail}';

export class ApiLicenseoffice extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the OFFICE service
  List available services
  **/
  public get(path: '/license/office'): Promise<string[]>;
  /**
  Office domain
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/domain/{domainName}', pathParams: {serviceName: string, domainName: string}): Promise<LicenseOfficeOfficeDomain>;
  /**
  List the license.office.OfficeDomain objects
  Domain associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/domain', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.office.OfficeTask objects
  Tasks associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/pendingTask', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/pendingTask/{id}', pathParams: {serviceName: string, id: Number}): Promise<LicenseOfficeOfficeTask>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}', pathParams: {serviceName: string}): Promise<LicenseOfficeOfficeTenant>;
  /**
  Office user
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName: string, activationEmail: string}): Promise<LicenseOfficeOfficeUser>;
  /**
  List the license.office.OfficeUser objects
  Accounts associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/user', pathParams: {serviceName: string}, queryParams: {firstName?: string, lastName?: string, activationEmail?: string, licences?: LicenseOfficeLicenceEnum[]}): Promise<string[]>;
  /**
  usageStatistics operations
  Shows the subscriptions' usage statistics for the given time period
  **/
  public get(path: '/license/office/{serviceName}/usageStatistics', pathParams: {serviceName: string}, queryParams: {to?: Date, from?: Date}): Promise<LicenseOfficeStatistics[]>;
  public get(path: PathsLicenseofficeGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Office user
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName: string, activationEmail: string}): Promise<void>;
  public put(path: PathsLicenseofficePUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changePassword operations
  Change or reset  user's password
  **/
  public post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword', pathParams: {serviceName: string, activationEmail: string}): Promise<LicenseOfficeOfficeTask>;
  /**
  List the license.office.OfficeUser objects
  Create new office user
  **/
  public post(path: '/license/office/{serviceName}/user', pathParams: {serviceName: string}): Promise<LicenseOfficeOfficeTask>;
  public post(path: PathsLicenseofficePOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Office user
  Delete existing office user
  **/
  public delete(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName: string, activationEmail: string}): Promise<LicenseOfficeOfficeTask>;
  public delete(path: PathsLicenseofficeDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
