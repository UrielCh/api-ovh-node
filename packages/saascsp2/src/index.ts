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
  endDate?: Date;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines?: SaasCsp2BillingStatisticsLine[];
  /**
   * Start of the billing period
   *
   */
  startDate?: Date;
}
/**
 * Billing statistics line.
 */
export interface SaasCsp2BillingStatisticsLine {
  /**
   * Name of the Office license.
   *
   */
  licenceName?: string;
  /**
   * Id of the Office license.
   *
   */
  licenceId?: Number;
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
   * License's type, indicates if the licence is standalone or an addon
   *
   */
  licenceType?: SaasCsp2LicenseTypeEnum;
  /**
   * License name
   *
   */
  name?: string;
  /**
   * Maximum purchasable license
   *
   */
  limit?: Number;
  /**
   * License unique identifier
   *
   */
  id?: Number;
}
/**
 * Office subscription
 */
export interface SaasCsp2OfficeSubscription {
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
   * Subscription's status
   *
   */
  status?: string;
}
/**
 * Office task
 */
export interface SaasCsp2OfficeTask {
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
   * Unique identifier of the task
   *
   */
  id?: Number;
  /**
   * Task state
   *
   */
  status?: SaasCsp2TaskStatusEnum;
}
/**
 * Office tenant
 */
export interface SaasCsp2OfficeTenant {
  /**
   * Contact's last name
   *
   */
  lastName?: string;
  /**
   * Contact's zip code
   *
   */
  zipCode?: string;
  /**
   * Contact's first name
   *
   */
  firstName?: string;
  /**
   * Contact's address line
   *
   */
  address?: string;
  /**
   * Primary phone number
   *
   */
  phone?: string;
  /**
   * Contact's city
   *
   */
  city?: string;
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
   * Internal service name
   *
   */
  serviceName?: string;
  /**
   * Contact's email address
   *
   */
  email?: string;
  /**
   * Tenant's status
   *
   */
  status?: SaasCsp2ServiceStateEnum;
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
  date?: Date;
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
   * Name of the Office license.
   *
   */
  licenceName?: string;
  /**
   * Id of the Office license.
   *
   */
  licenceId?: Number;
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
type Pathssaascsp2GET = '/saas/csp2/{serviceName}/usageStatistics' | 
'/saas/csp2/{serviceName}/serviceInfos' | 
'/saas/csp2/{serviceName}/orderableLicenses' | 
'/saas/csp2/{serviceName}/orderableLicenses/{id}' | 
'/saas/csp2/{serviceName}/task/{id}' | 
'/saas/csp2/{serviceName}/task' | 
'/saas/csp2/{serviceName}/billingPeriodPeaks' | 
'/saas/csp2/{serviceName}/subscription' | 
'/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds' | 
'/saas/csp2/{serviceName}/subscription/{id}' | 
'/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses' | 
'/saas/csp2/{serviceName}' | 
'/saas/csp2';

type Pathssaascsp2PUT = '/saas/csp2/{serviceName}/serviceInfos' | 
'/saas/csp2/{serviceName}';

type Pathssaascsp2POST = '/saas/csp2/{serviceName}/configureDomain' | 
'/saas/csp2/{serviceName}/subscription' | 
'/saas/csp2/{serviceName}/subscription/{id}/changeQuantity' | 
'/saas/csp2/{serviceName}/subscription/{id}/orderAddon' | 
'/saas/csp2/{serviceName}/changeAdministratorPassword';

type Pathssaascsp2DELETE = '/saas/csp2/{serviceName}/subscription/{id}';

class Apisaascsp2 extends ApiCommon {
  /**
  usageStatistics operations
  Get the usage statistics over the chose period
  **/
  public get(path: '/saas/csp2/{serviceName}/usageStatistics', pathParams: {serviceName?: string}, queryParams: {timePeriod?: MsServicesLicensePeriodEnum}): Promise<SaasCsp2Statistics[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the saas.csp2.OfficeLicence objects
  Licenses available for order
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Office licence
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SaasCsp2OfficeLicence>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/task/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SaasCsp2OfficeTask>;
  /**
  List the saas.csp2.OfficeTask objects
  Pending tasks of this tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  billingPeriodPeaks operations
  Get the curren billing period's usage peak for each subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks', pathParams: {serviceName?: string}, queryParams: null): Promise<SaasCsp2BillingStatistics>;
  /**
  List the saas.csp2.OfficeSubscription objects
  Subscriptions associated to this office tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  addonsSubscriptionIds operations
  Addon subscriptions associated to this office subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Office subscription
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<SaasCsp2OfficeSubscription>;
  /**
  availableAddonLicenses operations
  Gives a list of licenses ids that can be ordered as an addon for this subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<SaasCsp2OfficeTenant>;
  /**
  Operations about the CSP2 service
  List available services
  **/
  public get(path: '/saas/csp2', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: Pathssaascsp2GET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: Pathssaascsp2PUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  configureDomain operations
  Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
  **/
  public post(path: '/saas/csp2/{serviceName}/configureDomain', pathParams: {serviceName?: string}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  /**
  List the saas.csp2.OfficeSubscription objects
  Add a subscription to this tenant
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription', pathParams: {serviceName?: string}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  /**
  changeQuantity operations
  Change the quantity of seats in the subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  /**
  orderAddon operations
  Creates a new subscription as an addon for this subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  /**
  changeAdministratorPassword operations
  Changes the tenant administrator's password
  **/
  public post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword', pathParams: {serviceName?: string}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  public post(path: Pathssaascsp2POST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Office subscription
  Delete a subscription from this tenant
  **/
  public delete(path: '/saas/csp2/{serviceName}/subscription/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<SaasCsp2OfficeTask>;
  public delete(path: Pathssaascsp2DELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
