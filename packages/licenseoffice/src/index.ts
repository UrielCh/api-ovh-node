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
   * Creation date
   *
   */
  creationDate?: Date;
  /**
   * License's type id
   *
   */
  licenseId?: Number;
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
 * Office tenant
 */
export interface LicenseOfficeOfficeTenant {
  /**
   * Tenant's service type
   *
   */
  serviceType?: LicenseOfficeServiceTypeEnum;
  /**
   * Contact's zip code
   *
   */
  zipCode?: string;
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
 * Office user
 */
export interface LicenseOfficeOfficeUser {
  /**
   * User's first name
   *
   */
  firstName?: string;
  /**
   * User's last name
   *
   */
  lastName?: string;
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
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
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
type PathslicenseofficeGET = '/license/office/{serviceName}/user/{activationEmail}' | 
'/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/pendingTask' | 
'/license/office/{serviceName}/pendingTask/{id}' | 
'/license/office/{serviceName}/usageStatistics' | 
'/license/office/{serviceName}/domain' | 
'/license/office/{serviceName}/domain/{domainName}' | 
'/license/office';

type PathslicenseofficePUT = '/license/office/{serviceName}/user/{activationEmail}' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}';

type PathslicenseofficePOST = '/license/office/{serviceName}/user/{activationEmail}/changePassword' | 
'/license/office/{serviceName}/user';

type PathslicenseofficeDELETE = '/license/office/{serviceName}/user/{activationEmail}';

class Apilicenseoffice extends ApiCommon {
  /**
  Office user
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, queryParams: null): Promise<LicenseOfficeOfficeUser>;
  /**
  List the license.office.OfficeUser objects
  Accounts associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: {lastName?: string, licences?: LicenseOfficeLicenceEnum[], activationEmail?: string, firstName?: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseOfficeOfficeTenant>;
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
  usageStatistics operations
  Shows the subscriptions' usage statistics for the given time period
  **/
  public get(path: '/license/office/{serviceName}/usageStatistics', pathParams: {serviceName?: string}, queryParams: {from?: Date, to?: Date}): Promise<LicenseOfficeStatistics[]>;
  /**
  List the license.office.OfficeDomain objects
  Domain associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/domain', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Office domain
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/domain/{domainName}', pathParams: {serviceName?: string, domainName?: string}, queryParams: null): Promise<LicenseOfficeOfficeDomain>;
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
  public put(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathslicenseofficePUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changePassword operations
  Change or reset  user's password
  **/
  public post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword', pathParams: {serviceName?: string, activationEmail?: string}, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  /**
  List the license.office.OfficeUser objects
  Create new office user
  **/
  public post(path: '/license/office/{serviceName}/user', pathParams: {serviceName?: string}, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  public post(path: PathslicenseofficePOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Office user
  Delete existing office user
  **/
  public delete(path: '/license/office/{serviceName}/user/{activationEmail}', pathParams: {serviceName?: string, activationEmail?: string}, bodyParams: null): Promise<LicenseOfficeOfficeTask>;
  public delete(path: PathslicenseofficeDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
