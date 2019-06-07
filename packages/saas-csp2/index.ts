import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
  endDate: string;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines: SaasCsp2BillingStatisticsLine[];
  /**
   * Start of the billing period
   *
   */
  startDate: string;
}
/**
 * Billing statistics line.
 */
export interface SaasCsp2BillingStatisticsLine {
  /**
   * Id of the Office license.
   *
   */
  licenceId: number;
  /**
   * Name of the Office license.
   *
   */
  licenceName: string;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount: number;
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
  id: number;
  /**
   * License's type, indicates if the licence is standalone or an addon
   *
   */
  licenceType: SaasCsp2LicenseTypeEnum;
  /**
   * Maximum purchasable license
   *
   */
  limit?: number;
  /**
   * License name
   *
   */
  name: string;
}
/**
 * Office subscription
 */
export interface SaasCsp2OfficeSubscription {
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
   * Subscription's status
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
  function: string;
  /**
   * Unique identifier of the task
   *
   */
  id: number;
  /**
   * Task state
   *
   */
  status: SaasCsp2TaskStatusEnum;
  /**
   * Creation date
   *
   */
  todoDate: string;
}
/**
 * Office tenant
 */
export interface SaasCsp2OfficeTenant {
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
   * Contact's email address
   *
   */
  email: string;
  /**
   * Contact's first name
   *
   */
  firstName: string;
  /**
   * Contact's last name
   *
   */
  lastName: string;
  /**
   * Primary phone number
   *
   */
  phone: string;
  /**
   * Internal service name
   *
   */
  serviceName: string;
  /**
   * Tenant's status
   *
   */
  status: SaasCsp2ServiceStateEnum;
  /**
   * Contact's zip code
   *
   */
  zipCode: string;
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
  date: string;
  /**
   * List of lines associated to this statistics entity.
   *
   */
  lines: SaasCsp2StatisticsLine[];
}
/**
 * License usage statistics line.
 */
export interface SaasCsp2StatisticsLine {
  /**
   * Count of activated licenses at the end of the day.
   *
   */
  endOfDayCount: number;
  /**
   * Id of the Office license.
   *
   */
  licenceId: number;
  /**
   * Name of the Office license.
   *
   */
  licenceName: string;
  /**
   * Maximum count of simultaneous activated licences.
   *
   */
  peakCount: number;
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

export class ApiSaasCsp2 extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the CSP2 service
  List available services
  **/
  public get(path: '/saas/csp2'): Promise<string[]>;
  /**
  Office tenant
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}', params: {serviceName: string}): Promise<SaasCsp2OfficeTenant>;
  /**
  billingPeriodPeaks operations
  Get the curren billing period's usage peak for each subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/billingPeriodPeaks', params: {serviceName: string}): Promise<SaasCsp2BillingStatistics>;
  /**
  List the saas.csp2.OfficeLicence objects
  Licenses available for order
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses', params: {serviceName: string}): Promise<number[]>;
  /**
  Office licence
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/orderableLicenses/{id}', params: {serviceName: string, id: number}): Promise<SaasCsp2OfficeLicence>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the saas.csp2.OfficeSubscription objects
  Subscriptions associated to this office tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription', params: {serviceName: string}): Promise<number[]>;
  /**
  Office subscription
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}', params: {serviceName: string, id: number}): Promise<SaasCsp2OfficeSubscription>;
  /**
  addonsSubscriptionIds operations
  Addon subscriptions associated to this office subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds', params: {serviceName: string, id: number}): Promise<number[]>;
  /**
  availableAddonLicenses operations
  Gives a list of licenses ids that can be ordered as an addon for this subscription
  **/
  public get(path: '/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses', params: {serviceName: string, id: number}): Promise<number[]>;
  /**
  List the saas.csp2.OfficeTask objects
  Pending tasks of this tenant
  **/
  public get(path: '/saas/csp2/{serviceName}/task', params: {serviceName: string}): Promise<number[]>;
  /**
  Office task
  Get this object properties
  **/
  public get(path: '/saas/csp2/{serviceName}/task/{id}', params: {serviceName: string, id: number}): Promise<SaasCsp2OfficeTask>;
  /**
  usageStatistics operations
  Get the usage statistics over the chose period
  **/
  public get(path: '/saas/csp2/{serviceName}/usageStatistics', params: {serviceName: string, timePeriod: MsServicesLicensePeriodEnum}): Promise<SaasCsp2Statistics[]>;
  public get(path: PathsSaasCsp2GET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Office tenant
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}', params: {serviceName: string, body: SaasCsp2OfficeTenant}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/saas/csp2/{serviceName}/serviceInfos', params: {serviceName: string, body: ServicesService}): Promise<void>;
  public put(path: PathsSaasCsp2PUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changeAdministratorPassword operations
  Changes the tenant administrator's password
  **/
  public post(path: '/saas/csp2/{serviceName}/changeAdministratorPassword', params: {serviceName: string, newPassword: string}): Promise<SaasCsp2OfficeTask>;
  /**
  configureDomain operations
  Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records
  **/
  public post(path: '/saas/csp2/{serviceName}/configureDomain', params: {serviceName: string, domain: string, supportedServices: SaasCsp2SupportedServiceEnum[]}): Promise<SaasCsp2OfficeTask>;
  /**
  List the saas.csp2.OfficeSubscription objects
  Add a subscription to this tenant
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription', params: {serviceName: string, licenseId: number, quantity: number}): Promise<SaasCsp2OfficeTask>;
  /**
  changeQuantity operations
  Change the quantity of seats in the subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/changeQuantity', params: {serviceName: string, id: number, quantity: number}): Promise<SaasCsp2OfficeTask>;
  /**
  orderAddon operations
  Creates a new subscription as an addon for this subscription
  **/
  public post(path: '/saas/csp2/{serviceName}/subscription/{id}/orderAddon', params: {serviceName: string, id: number, licenseId: number, quantity: number}): Promise<SaasCsp2OfficeTask>;
  public post(path: PathsSaasCsp2POST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Office subscription
  Delete a subscription from this tenant
  **/
  public delete(path: '/saas/csp2/{serviceName}/subscription/{id}', params: {serviceName: string, id: number}): Promise<SaasCsp2OfficeTask>;
  public delete(path: PathsSaasCsp2DELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
export default ApiSaasCsp2;
