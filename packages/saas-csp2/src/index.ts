import { ApiCommon } from '@ovh-api/common';
/**
 * Period of time used to determine license statistics
 */
export type MsServicesLicensePeriodEnum = 'lastMonth' | 'lastQuarter' | 'lastWeek' | 'lastYear';
/**
 * Billing statistics for the current period
 */
export interface SaasCsp2BillingStatistics {
  /**
   * End of the billing period
   *
   */
  endDate?: string;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines?: SaasCsp2BillingStatisticsLine[];
  /**
   * Start of the billing period
   *
   */
  startDate?: string;
}
/**
 * Billing statistics line.
 */
export interface SaasCsp2BillingStatisticsLine {
  /**
   * Id of the Office license.
   *
   */
  licenceId?: Number;
  /**
   * Name of the Office license.
   *
   */
  licenceName?: string;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount?: Number;
}
/**
 * Office license's type
 */
export type SaasCsp2LicenseTypeEnum = 'ADDON' | 'NON-SPECIFIC';
/**
 * Office licence
 */
export interface SaasCsp2OfficeLicence {
  /**
   * License unique identifier
   *
   */
  id?: Number;
  /**
   * License's type, indicates if the licence is standalone or an addon
   *
   */
  licenceType?: SaasCsp2LicenseTypeEnum;
  /**
   * Maximum purchasable license
   *
   */
  limit?: Number;
  /**
   * License name
   *
   */
  name?: string;
}
/**
 * Office subscription
 */
export interface SaasCsp2OfficeSubscription {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Subscription's unique identifier
   *
   */
  id?: Number;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
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
   * Subscription's status
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
export interface SaasCsp2OfficeTask {
  /**
   * Completion date
   *
   */
  finishDate?: string;
  /**
   * Function name
   *
   */
  function?: string;
  /**
   * Unique identifier of the task
   *
   */
  id?: Number;
  /**
   * Task state
   *
   */
  status?: SaasCsp2TaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate?: string;
}
/**
 * Office tenant
 */
export interface SaasCsp2OfficeTenant {
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
  creationDate?: string;
  /**
   * Tenant's display name
   *
   */
  displayName?: string;
  /**
   * Contact's email address
   *
   */
  email?: string;
  /**
   * Contact's first name
   *
   */
  firstName?: string;
  /**
   * Contact's last name
   *
   */
  lastName?: string;
  /**
   * Primary phone number
   *
   */
  phone?: string;
  /**
   * Internal service name
   *
   */
  serviceName?: string;
  /**
   * Tenant's status
   *
   */
  status?: SaasCsp2ServiceStateEnum;
  /**
   * Contact's zip code
   *
   */
  zipCode?: string;
}
/**
 * Office tenant state
 */
export type SaasCsp2ServiceStateEnum = 'creating' | 'inMaintenance' | 'ok' | 'suspended';
/**
 * License usage statistics.
 */
export interface SaasCsp2Statistics {
  /**
   * Date of the statistics.
   *
   */
  date?: string;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines?: SaasCsp2StatisticsLine[];
}
/**
 * License usage statistics line.
 */
export interface SaasCsp2StatisticsLine {
  /**
   * Count of activated licenses at the end of the day.
   *
   */
  endOfDayCount?: Number;
  /**
   * Id of the Office license.
   *
   */
  licenceId?: Number;
  /**
   * Name of the Office license.
   *
   */
  licenceName?: string;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount?: Number;
}
/**
 * Supported services of Office365
 */
export type SaasCsp2SupportedServiceEnum = 'Email' | 'Intune' | 'OfficeCommunicationsOnline';
/**
 * Office CSP2 task status
 */
export type SaasCsp2TaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
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
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
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
type PathsSaasCsp2GET = '/saas/csp2' | 
'/saas/csp2/{serviceName}' | 
'/saas/csp2/{serviceName}/billingPeriodPeaks' | 
'/saas/csp2/{serviceName}/orderableLicenses' | 
'/saas/csp2/{serviceName}/orderableLicenses/{id}' | 
'/saas/csp2/{serviceName}/serviceInfos' | 
'/saas/csp2/{serviceName}/subscription' | 
'/saas/csp2/{serviceName}/subscription/{id}' | 
'/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds' | 
'/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses' | 
'/saas/csp2/{serviceName}/task' | 
'/saas/csp2/{serviceName}/task/{id}' | 
'/saas/csp2/{serviceName}/usageStatistics';

type PathsSaasCsp2PUT = '/saas/csp2/{serviceName}' | 
'/saas/csp2/{serviceName}/serviceInfos';

type PathsSaasCsp2POST = '/saas/csp2/{serviceName}/changeAdministratorPassword' | 
'/saas/csp2/{serviceName}/configureDomain' | 
'/saas/csp2/{serviceName}/subscription' | 
'/saas/csp2/{serviceName}/subscription/{id}/changeQuantity' | 
'/saas/csp2/{serviceName}/subscription/{id}/orderAddon';

type PathsSaasCsp2DELETE = '/saas/csp2/{serviceName}/subscription/{id}';

export class ApiSaasCsp2 extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the CSP2 service
  List available services
  **/
  public get(path: '/saas/csp2'): Promise<string[]>;
  /**
  List the saas.csp2.OfficeSubscription objects
  Subscriptions associated to this office tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Office subscription
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeSubscription>;
  /**
  addonsSubscriptionIds operations
  Addon subscriptions associated to this office subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds', pathParams: {serviceName: string, id: Number}): Promise<Number[]>;
  /**
  availableAddonLicenses operations
  Gives a list of licenses ids that can be ordered as an addon for this subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses', pathParams: {serviceName: string, id: Number}): Promise<Number[]>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}', pathParams: {serviceName: string}): Promise<SaasCsp2OfficeTenant>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/task/{id}', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeTask>;
  /**
  List the saas.csp2.OfficeTask objects
  Pending tasks of this tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/task', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  billingPeriodPeaks operations
  Get the curren billing period's usage peak for each subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks', pathParams: {serviceName: string}): Promise<SaasCsp2BillingStatistics>;
  /**
  usageStatistics operations
  Get the usage statistics over the chose period
  **/
  public get(path: '/saas/csp2/{serviceName}/usageStatistics', pathParams: {serviceName: string}, queryParams: {timePeriod?: MsServicesLicensePeriodEnum}): Promise<SaasCsp2Statistics[]>;
  /**
  Office licence
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeLicence>;
  /**
  List the saas.csp2.OfficeLicence objects
  Licenses available for order
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsSaasCsp2GET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsSaasCsp2PUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the saas.csp2.OfficeSubscription objects
  Add a subscription to this tenant
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription', pathParams: {serviceName: string}): Promise<SaasCsp2OfficeTask>;
  /**
  orderAddon operations
  Creates a new subscription as an addon for this subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeTask>;
  /**
  changeQuantity operations
  Change the quantity of seats in the subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeTask>;
  /**
  configureDomain operations
  Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
  **/
  public post(path: '/saas/csp2/{serviceName}/configureDomain', pathParams: {serviceName: string}): Promise<SaasCsp2OfficeTask>;
  /**
  changeAdministratorPassword operations
  Changes the tenant administrator's password
  **/
  public post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword', pathParams: {serviceName: string}): Promise<SaasCsp2OfficeTask>;
  public post(path: PathsSaasCsp2POST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Office subscription
  Delete a subscription from this tenant
  **/
  public delete(path: '/saas/csp2/{serviceName}/subscription/{id}', pathParams: {serviceName: string, id: Number}): Promise<SaasCsp2OfficeTask>;
  public delete(path: PathsSaasCsp2DELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
