import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
}
/**
 * Consumption
 */
export interface PaasTimeseriesConsumption {
  /**
   * Consumption start date
   *
   */
  from: string;
  /**
   * Timestamp of consumption generation
   *
   */
  generated: string;
  /**
   * List of consumption items
   *
   */
  items: PaasTimeseriesConsumptionItem[];
  /**
   * Consumption end date
   *
   */
  to: string;
  /**
   * Total
   *
   */
  total: OrderPrice;
}
/**
 * ConsumptionItem
 */
export interface PaasTimeseriesConsumptionItem {
  /**
   * Metric name
   *
   */
  metricName: PaasTimeseriesConsumptionItemMetricNameEnum;
  /**
   * Price
   *
   */
  price: OrderPrice;
  /**
   * Quantity consumed in unit
   *
   */
  quantity: ComplexTypeUnitAndValue<number>;
  /**
   * Unit price
   *
   */
  unitPrice: OrderPrice;
}
/**
 * Key
 */
export interface PaasTimeseriesKey {
  /**
   * Description
   *
   */
  description: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   * List of permissions
   *
   */
  permissions: PaasTimeseriesPermissionEnum[];
  /**
   * Secret part
   *
   */
  secret: string;
  /**
   * List of tags
   *
   */
  tags: PaasTimeseriesTag[];
}
/**
 * Tokens permissions
 */
export type PaasTimeseriesPermissionEnum = 'READ' | 'WRITE';
/**
 * Project
 */
export interface PaasTimeseriesProject {
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Name
   *
   */
  displayName: string;
  /**
   * Region
   *
   */
  region: PaasTimeseriesRegion;
  /**
   * Id
   *
   */
  serviceName: string;
}
/**
 * Quota
 */
export interface PaasTimeseriesQuota {
  /**
   * Current value
   *
   */
  current: number;
  /**
   * Max allowed
   *
   */
  max: number;
  /**
   * Type (ie: mads, ddp, ...)
   *
   */
  type: PaasTimeseriesQuotaTypeEnum;
}
/**
 * Project quotas
 */
export type PaasTimeseriesQuotaTypeEnum = 'ddp' | 'mads';
/**
 * Region
 */
export interface PaasTimeseriesRegion {
  /**
   * Name
   *
   */
  displayName: string;
  /**
   * Id
   *
   */
  id: string;
  /**
   * URL
   *
   */
  url: string;
}
/**
 * Tag
 */
export interface PaasTimeseriesTag {
  /**
   * Key
   *
   */
  key: string;
  /**
   * Value
   *
   */
  value: string;
}
/**
 * Metric name
 */
export type PaasTimeseriesConsumptionItemMetricNameEnum = 'input' | 'output' | 'storage';
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
 * Timeseries project
 */
export interface TimeseriesProject {
  /**
   * description of your project
   *
   */
  description?: string;
  /**
   * name of your project
   *
   */
  displayName?: string;
  /**
   * subscribed offer
   *
   */
  offerId?: string;
  /**
   * region where your data are located
   *
   */
  regionId?: string;
  /**
   * timeseries Project id
   *
   */
  serviceName: string;
  /**
   * project status
   *
   */
  status?: TimeseriesStatusTypeEnum;
}
/**
 * The current status for the project
 */
export type TimeseriesStatusTypeEnum = 'ACTIVE' | 'CREATION' | 'DELETED' | 'UNCONFIGURED';
type PathsPaasTimeseriesGET = '/paas/timeseries' | 
'/paas/timeseries/region' | 
'/paas/timeseries/{serviceName}' | 
'/paas/timeseries/{serviceName}/consumption' | 
'/paas/timeseries/{serviceName}/key' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}/quota' | 
'/paas/timeseries/{serviceName}/serviceInfos';

type PathsPaasTimeseriesPUT = '/paas/timeseries/{serviceName}' | 
'/paas/timeseries/{serviceName}/key/{keyId}' | 
'/paas/timeseries/{serviceName}/serviceInfos';

type PathsPaasTimeseriesPOST = '/paas/timeseries/{serviceName}/changeContact' | 
'/paas/timeseries/{serviceName}/key' | 
'/paas/timeseries/{serviceName}/setup';

type PathsPaasTimeseriesDELETE = '/paas/timeseries/{serviceName}/key/{keyId}';

export class ApiPaasTimeseries extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the PAAS_TIMESERIES service
  List available services
  **/
  public get(path: '/paas/timeseries'): Promise<string[]>;
  /**
  Regions
  Get available regions
  **/
  public get(path: '/paas/timeseries/region'): Promise<PaasTimeseriesRegion[]>;
  /**
  Timeseries project
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}', params: {serviceName: string}): Promise<TimeseriesProject>;
  /**
  Consumption
  Get consumption
  **/
  public get(path: '/paas/timeseries/{serviceName}/consumption', params: {serviceName: string}): Promise<PaasTimeseriesConsumption[]>;
  /**
  Keys
  Get keys for a project
  **/
  public get(path: '/paas/timeseries/{serviceName}/key', params: {serviceName: string}): Promise<PaasTimeseriesKey[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<PaasTimeseriesKey>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/paas/timeseries/{serviceName}/quota', params: {serviceName: string}): Promise<PaasTimeseriesQuota[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/paas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsPaasTimeseriesGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<PaasTimeseriesKey>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/paas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsPaasTimeseriesPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/paas/timeseries/{serviceName}/changeContact', params: {serviceName: string}): Promise<number[]>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/key', params: {serviceName: string}): Promise<PaasTimeseriesKey>;
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/paas/timeseries/{serviceName}/setup', params: {serviceName: string}): Promise<PaasTimeseriesProject>;
  public post(path: PathsPaasTimeseriesPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<boolean>;
  public delete(path: PathsPaasTimeseriesDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
