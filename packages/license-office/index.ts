import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
  domainName: string;
  /**
   * Domain state
   *
   */
  status: LicenseOfficeDomainStateEnum;
  /**
   * TXT entry required for domain validation
   *
   */
  txtEntry: string;
}
/**
 * Office subscription
 */
export interface LicenseOfficeOfficeSubscription {
  /**
   * Creation date
   *
   */
  creationDate: string;
  /**
   * Subscription's unique identifier
   *
   */
  id: number;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
  /**
   * License's type id
   *
   */
  licenseId: number;
  /**
   * Number of available licenses
   *
   */
  quantity: number;
  /**
   * Current state of the subscription
   *
   */
  status: string;
  /**
   * Pending task's unique identifier
   *
   */
  taskPendingId: number;
}
/**
 * Office task
 */
export interface LicenseOfficeOfficeTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function: string;
  /**
   * Task's unique identifier
   *
   */
  id: number;
  /**
   * Task state
   *
   */
  status: LicenseOfficeTaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate: string;
}
/**
 * Office tenant
 */
export interface LicenseOfficeOfficeTenant {
  /**
   * Contact's address line
   *
   */
  address: string;
  /**
   * Contact's city
   *
   */
  city: string;
  /**
   * Creation date
   *
   */
  creationDate: string;
  /**
   * Tenant's display name
   *
   */
  displayName: string;
  /**
   * Contact's fisrt name
   *
   */
  firstName: string;
  /**
   * Contact's fisrt name
   *
   */
  lastName: string;
  /**
   * Primary phone number
   *
   */
  phone: string;
  /**
   * Tenant's service type
   *
   */
  serviceType: LicenseOfficeServiceTypeEnum;
  /**
   */
  status: LicenseOfficeServiceStateEnum;
  /**
   * Contact's zip code
   *
   */
  zipCode: string;
}
/**
 * Office user
 */
export interface LicenseOfficeOfficeUser {
  /**
   * Email used to activate Microsoft Office
   *
   */
  activationEmail: string;
  /**
   * Whether or not this user slot will be resigned at the next renew period
   *
   */
  deleteAtExpiration: boolean;
  /**
   * User's first name
   *
   */
  firstName: string;
  /**
   * Specify if the user is actually a user slot (configureme) or a real user
   *
   */
  isVirtual: boolean;
  /**
   * User's last name
   *
   */
  lastName: string;
  /**
   * Licenses attributed to the user
   *
   */
  licences: LicenseOfficeLicenceEnum[];
  /**
   * User state
   *
   */
  status: LicenseOfficeUserStateEnum;
  /**
   * Pending task id
   *
   */
  taskPendingId: number;
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
  available: number;
  /**
   * License type's unique identifier
   *
   */
  licenseId: number;
  /**
   * Number of used seats in the subscription
   *
   */
  used: number;
}
/**
 * License usage statistics.
 */
export interface LicenseOfficeStatistics {
  /**
   * Date of the statistics.
   *
   */
  date: string;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines: LicenseOfficeStatisticsLine[];
}
/**
 * License usage statistics line.
 */
export interface LicenseOfficeStatisticsLine {
  /**
   * Count of activated licenses at the end of the day.
   *
   */
  endOfDayCount: number;
  /**
   * Type of the Office license.
   *
   */
  licenceType: LicenseOfficeLicenceEnum;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount: number;
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
type PathsLicenseOfficeGET = '/license/office' | 
'/license/office/{serviceName}' | 
'/license/office/{serviceName}/domain' | 
'/license/office/{serviceName}/domain/{domainName}' | 
'/license/office/{serviceName}/pendingTask' | 
'/license/office/{serviceName}/pendingTask/{id}' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}/usageStatistics' | 
'/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/user/{activationEmail}';

type PathsLicenseOfficePUT = '/license/office/{serviceName}' | 
'/license/office/{serviceName}/serviceInfos' | 
'/license/office/{serviceName}/user/{activationEmail}';

type PathsLicenseOfficePOST = '/license/office/{serviceName}/user' | 
'/license/office/{serviceName}/user/{activationEmail}/changePassword';

type PathsLicenseOfficeDELETE = '/license/office/{serviceName}/user/{activationEmail}';

export class ApiLicenseOffice extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the OFFICE service
  List available services
  **/
  public get(path: '/license/office'): Promise<string[]>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}', params: {serviceName: string}): Promise<LicenseOfficeOfficeTenant>;
  /**
  List the license.office.OfficeDomain objects
  Domain associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/domain', params: {serviceName: string}): Promise<string[]>;
  /**
  Office domain
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/domain/{domainName}', params: {serviceName: string, domainName: string}): Promise<LicenseOfficeOfficeDomain>;
  /**
  List the license.office.OfficeTask objects
  Tasks associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/pendingTask', params: {serviceName: string}): Promise<number[]>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/pendingTask/{id}', params: {serviceName: string, id: number}): Promise<LicenseOfficeOfficeTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  usageStatistics operations
  Shows the subscriptions' usage statistics for the given time period
  **/
  public get(path: '/license/office/{serviceName}/usageStatistics', params: {serviceName: string, from: string, to: string}): Promise<LicenseOfficeStatistics[]>;
  /**
  List the license.office.OfficeUser objects
  Accounts associated to this office tenant
  **/
  public get(path: '/license/office/{serviceName}/user', params: {serviceName: string, activationEmail?: string, firstName?: string, lastName?: string, licences?: LicenseOfficeLicenceEnum[]}): Promise<string[]>;
  /**
  Office user
  Get this object properties
  **/
  public get(path: '/license/office/{serviceName}/user/{activationEmail}', params: {serviceName: string, activationEmail: string}): Promise<LicenseOfficeOfficeUser>;
  public get(path: PathsLicenseOfficeGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}', params: {serviceName: string, body: LicenseOfficeOfficeTenant}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/serviceInfos', params: {serviceName: string, body: ServicesService}): Promise<void>;
  /**
  Office user
  Alter this object properties
  **/
  public put(path: '/license/office/{serviceName}/user/{activationEmail}', params: {serviceName: string, activationEmail: string, body: LicenseOfficeOfficeUser}): Promise<void>;
  public put(path: PathsLicenseOfficePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the license.office.OfficeUser objects
  Create new office user
  **/
  public post(path: '/license/office/{serviceName}/user', params: {serviceName: string, domain: string, firstName?: string, lastName?: string, licence: LicenseOfficeLicenceEnum, login: string}): Promise<LicenseOfficeOfficeTask>;
  /**
  changePassword operations
  Change or reset  user's password
  **/
  public post(path: '/license/office/{serviceName}/user/{activationEmail}/changePassword', params: {serviceName: string, activationEmail: string, notifyEmail?: string, password?: string, shouldSendMail: boolean}): Promise<LicenseOfficeOfficeTask>;
  public post(path: PathsLicenseOfficePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Office user
  Delete existing office user
  **/
  public delete(path: '/license/office/{serviceName}/user/{activationEmail}', params: {serviceName: string, activationEmail: string}): Promise<LicenseOfficeOfficeTask>;
  public delete(path: PathsLicenseOfficeDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiLicenseOffice;
