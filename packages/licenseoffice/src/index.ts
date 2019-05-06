import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Office tenant state
 */
export type LicenseOfficeServiceStateEnum = 'creating' | 'inMaintenance' | 'ok' | 'suspended';
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
 * Office domain
 */
export interface LicenseOfficeOfficeDomain {
  /**
   * TXT entry required for domain validation
   *
   */
  txtEntry?: string;
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
}
/**
 * Office tenant
 */
export interface LicenseOfficeOfficeTenant {
  /**
   * Tenant's service type
   *
   */
  serviceType?: LicenseOfficeServiceTypeEnum;
  /**
   * Contact's fisrt name
   *
   */
  lastName?: string;
  /**
   * Contact's fisrt name
   *
   */
  firstName?: string;
  /**
   * Contact's zip code
   *
   */
  zipCode?: string;
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
   * Primary phone number
   *
   */
  phone?: string;
  /**
   * Tenant's display name
   *
   */
  displayName?: string;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   */
  status?: LicenseOfficeServiceStateEnum;
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
 * Office task
 */
export interface LicenseOfficeOfficeTask {
  /**
   * Function name
   *
   */
  function?: string;
  /**
   * Creation date
   *
   */
  todoDate?: Date;
  /**
   * Completion date
   *
   */
  finishDate?: Date;
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
 * License usage statistic.
 */
export interface LicenseOfficeStatistic {
  /**
   * Number of available seats in the subscription
   *
   */
  available?: Number;
  /**
   * Number of used seats in the subscription
   *
   */
  used?: Number;
  /**
   * License type's unique identifier
   *
   */
  licenseId?: Number;
}
/**
 * Office domain state
 */
export type LicenseOfficeDomainStateEnum = 'ok' | 'unverified';
/**
 * Office Licence
 */
export type LicenseOfficeLicenceEnum = 'officeBusiness' | 'officeProPlus';
/**
 * Exchange task status
 */
export type LicenseOfficeTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Office subscription
 */
export interface LicenseOfficeOfficeSubscription {
  /**
   * Number of available licenses
   *
   */
  quantity?: Number;
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Subscription's unique identifier
   *
   */
  id?: Number;
  /**
   * License's type id
   *
   */
  licenseId?: Number;
  /**
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * Pending task's unique identifier
   *
   */
  taskPendingId?: Number;
  /**
   * Current state of the subscription
   *
   */
  status?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Type of service
 */
export type LicenseOfficeServiceTypeEnum = 'payAsYouGo' | 'prepaid';
/**
 * Office user
 */
export interface LicenseOfficeOfficeUser {
  /**
   * User's last name
   *
   */
  lastName?: string;
  /**
   * User's first name
   *
   */
  firstName?: string;
  /**
   * Whether or not this user slot will be resigned at the next renew period
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * Specify if the user is actually a user slot (configureme) or a real user
   *
   */
  isVirtual?: boolean;
  /**
   * Licenses attributed to the user
   *
   */
  licences?: LicenseOfficeLicenceEnum[];
  /**
   * Pending task id
   *
   */
  taskPendingId?: Number;
  /**
   * Email used to activate Microsoft Office
   *
   */
  activationEmail?: string;
  /**
   * User state
   *
   */
  status?: LicenseOfficeUserStateEnum;
}
/**
 * Office user  state
 */
export type LicenseOfficeUserStateEnum = 'creating' | 'deleting' | 'ok';
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathslicenseofficeGET = '/license/office/{serviceName}/usageStatistics' | 
'/license/office/{serviceName}/domain/{domainName}' | 
'/license/office/{serviceName}/domain' | 
'/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/user/{activationEmail}' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}/pendingTask' | 
'/license/office/{serviceName}/pendingTask/{id}' | 
'/license/office';

type PathslicenseofficePUT = '/license/office/{serviceName}/user/{activationEmail}' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/serviceInfos';

type PathslicenseofficePOST = '/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/user/{activationEmail}/changePassword';

type PathslicenseofficeDELETE = '/license/office/{serviceName}/user/{activationEmail}';

class Apilicenseoffice extends ApiCommon {
  /**
  usageStatistics operations
  Shows the subscriptions' usage statistics for the given time period
  **/
  public get(path: '/license/office/{serviceName}/usageStatistics', pathParams: {serviceName?: string}, queryParams: {from?: Date, to?: Date}): Promise<LicenseOfficeStatistics[]>;
  /**
  Office domain
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/domain/{domainName}', pathParams: {serviceName?: string, domainName?: string}, queryParams: null): Promise<LicenseOfficeOfficeDomain>;
  /**
  List the license.office.OfficeDomain objects
  Domain associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/domain', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the license.office.OfficeUser objects
  Accounts associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: {activationEmail?: string, firstName?: string, lastName?: string, licences?: LicenseOfficeLicenceEnum[]}): Promise<string[]>;
  /**
  Office user
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, queryParams: null): Promise<LicenseOfficeOfficeUser>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseOfficeOfficeTenant>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the license.office.OfficeTask objects
  Tasks associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/pendingTask', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/pendingTask/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<LicenseOfficeOfficeTask>;
  /**
  Operations about the OFFICE service
  List available services
  **/
  public get(path: '/license/office', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathslicenseofficeGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Office user
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathslicenseofficePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  List the license.office.OfficeUser objects
  Create new office user
  **/
  public post(path: '/license/office/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  /**
  changePassword operations
  Change or reset  user's password
  **/
  public post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword', pathParams: {serviceName?: string, activationEmail?: string}, queryParams: null, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  public post(path: PathslicenseofficePOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Office user
  Delete existing office user
  **/
  public delete(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, queryParams: null, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  public delete(path: PathslicenseofficeDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
